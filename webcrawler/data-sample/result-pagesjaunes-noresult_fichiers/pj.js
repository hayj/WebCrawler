/* ---------------------------------
*
*   Fonctions liés au comportement des "screensets" de gigya
*
* -------------------------------- */
;(function($){
    ys.head.$doc.on('click', '.pj-link-logout', function(e) {
        var $link = $(this);
        // Appel asynchrone de l'API de Gigya pour déconnecter l'utilisateur,
        // afin de ne pas bloquer l'utilisateur.
        gigya.accounts.logout({ callback: function(response) {
            ys.head.console('Gigya error code :' + response.errorCode);
            ys.head.console('Target url:' + $link.data('href'));
            ys.head.console('Error :' + response.errorMessage);
        }});

        ys.head.pjSetStatsVarsSession( { "xtat" : "" }); 

        if ($link.data('href') !== undefined) window.location = $link.data('href');
        e.preventDefault();
    });

    errorHandler = function(eventObj) {
        $('.password input').val('');
        // on affiche une erreur technique pour les erreurs non catchées
        if (eventObj.response.info.screen == "login-screen") {
            if ( $.inArray(eventObj.response.errorCode, [403041, 403042]) == -1) {
                $('#loginFormTechnicalError').append('(Err : ' + eventObj.response.errorCode + ')');
                $('#loginFormTechnicalError').show();
            }
        }
    }

    showLoginFormScreenTechnicalError = function(eventObj){
        gigya.accounts.showScreenSet({
            screenSet:'pjauthent-screen-set',
            startScreen:'login-screen',
            containerID:'gigyaScreensContainer',
            onAfterScreenLoad: initPjActionsTechnicalError,
            onBeforeSubmit: validateRegistrationScreen,
            onAfterSubmit: afterSubmitActionHandler,
            onError : errorHandler
        });
    }

    showLoginFormScreen = function(eventObj){
        gigya.accounts.showScreenSet({
            screenSet:'pjauthent-screen-set',
            startScreen:'login-screen',
            containerID:'gigyaScreensContainer',
            onAfterScreenLoad: initPjActions,
            onBeforeSubmit: validateRegistrationScreen,
            onAfterSubmit: afterSubmitActionHandler,
            onError : errorHandler
        });
    }

    showForgotPasswordScreen = function(eventObj){
        gigya.accounts.showScreenSet({
            screenSet:'pjauthent-screen-set',
            startScreen:'gigya-forgot-password-screen',
            containerID:'gigyaScreensContainer',
            onAfterScreenLoad: initPjActions
        });
    }

    showPendingRegistrationScreen = function(eventObj){
        // eventObj.preventDefault();
        gigya.accounts.showScreenSet({
            screenSet:'pjauthent-screen-set',
            startScreen:'pending-registration-screen',
            containerID:'gigyaScreensContainer',
            onAfterScreenLoad: initPjActions,
            onBeforeSubmit: validateRegistrationScreen,
            onAfterSubmit: afterSubmitActionHandler,
            onError : errorHandler
        });
    }

    showPendingVerificationScreen = function(eventObj){
        gigya.accounts.showScreenSet({
            screenSet:'pjauthent-screen-set',
            startScreen:'gigya-pending-verification-screen',
            containerID:'gigyaScreensContainer',
            onAfterScreenLoad: initPjActions,
            onBeforeSubmit: validateRegistrationScreen,
            onAfterSubmit: afterSubmitActionHandler,
            onError : errorHandler
        });
    }

    /* handler onBeforeSubmit : renvoie false pour bloquer l'envoi du formulaire si les CGU ne sont pas acceptées */
    validateRegistrationScreen = function(eventObj) {
        if (eventObj.screen == "gigya-complete-registration-screen") {
            var cguPjAcceptees = eventObj.formData["data.subscribe"];
            if (!cguPjAcceptees) {
                return false;
            }
        }

        //Init de la variable pour déclancher la création de profil automatique
        if  (   eventObj.screen == "gigya-complete-registration-screen" ||
                (eventObj.screen == "link-account-screen" && eventObj.form == "gigya-link-accounts-form"
                    && (typeof eventObj.data.commun.pagesjaunes.profil_existe == 'undefined'
                    ||!eventObj.data.commun.pagesjaunes.profil_existe)
                )
            ) {
            window.finalizeRegistrationTrigger = true;
        }
    }

    afterSubmitActionHandler  = function(eventObj) {
        //Le handler n'est applicable uniquement sur l'écran login
        if (eventObj.screen == "login-screen") {
            //Bypass l'authentification pour le mock
            if(ys.head.ff('FF_TECH_MOCK_GIGYA')) {
                var data = new Array();
                var user = new Array();
                user['isLoggedIn'] = true;

                data['UID'] = $("#loginID").val();
                data['UIDSignature'] = "1";
                data['signatureTimestamp']  = "1";
                data['user'] = user;
                finalizeAuthentication(data);
            }
        }

        //Si ecran de complète registration, dans le cas de mail non vérifié (err 206002) on lance la création de profil
        if (eventObj.screen == "gigya-complete-registration-screen") {
            if (eventObj.response.errorCode = '206002' && window.finalizeRegistrationTrigger == true) {
                userCreateProfil(window.idUtilisateur, window.provider, eventObj);
            }
        }
    }
    /* Récupération des scénario d'authentification dans lequel on est. */
    getScenarioAlias = function() {
        var scenario_alias = null;
        // On récupère le scénario alias
        if (typeof $('#loginForm input[name="scenario_alias"]').val() != 'undefined') { // authen via popin authentification
            scenario_alias = $('#loginForm input[name="scenario_alias"]').val();
        } else if (typeof $('#formCreaCompte input[name="scenario_alias"]').val() != 'undefined'){ // authent RS via popin de création
            scenario_alias = $('#formCreaCompte input[name="scenario_alias"]').val();
        } else if (typeof $('#gigya-complete-registration-screen input[name="scenario_alias"]').val() != 'undefined') { // Authent après création compte RS
            scenario_alias = $('#gigya-complete-registration-screen input[name="scenario_alias"]').val();
        } else {
            scenario_alias = $('#link-account-screen input[name="scenario_alias"]').val();
        }

        // SI authentification via réseau social depuis la popin de création de compte, on redirige vers le flow d'authentification
        if (scenario_alias == null || scenario_alias == "registration_flow") {
            scenario_alias = "authentication_popin_flow";
        }

        return scenario_alias;
    }

    /**
     * Création du profil Gigya à partir des données du RS
     */
    userCreateProfil = function(uid, socialNetwork, eventObj) {
        // On met la valeur a false pour ne pas relancer la finalisation
        window.finalizeRegistrationTrigger = false;
        var codeOrigineSollicitation = null;
        if(window.codeOrigineSollicitation) {
            codeOrigineSollicitation = window.codeOrigineSollicitation;
        }
        
        var codeOrigineCreation = getOrigineParcoursCreation();
        $.ajax({
            type: "POST",
            url: PjGigya.path('pagesjaunes_finalize_registration'),
            data: {
                'gigya_uid': uid,
                'provider': socialNetwork,
                'code_origine_sollicitation': codeOrigineSollicitation,
                'parcours_origine_creation' : codeOrigineCreation
            }
        })
        .always(function(){
            if (eventObj.eventName == "login") { // Si mode connexion on lance la finalisation du process
              finalizeAuthentication(eventObj);
            }
        })
    }

    /**
     * Finalise l'authentification avec l'appel au security_check et MAJ metanav
     * @param   eventObj objet retourné par gigya
     */
    finalizeAuthentication = function(eventObj) {
        if (!eventObj.user.isLoggedIn) {
            return;
        }

        // On prend le scenario au début car il doit être le même pour tous les appels ajax
        var scenario = getScenarioAlias();
        $.ajax({
            type: "POST",
            url: PjGigya.path('_pagesjaunes_security_check'),
            data: {
                'gigya_uid': eventObj.UID,
                'gigya_signature': eventObj.UIDSignature,
                'gigya_timestamp': eventObj.signatureTimestamp,
                'scenario_alias': scenario
            }
        })
        .done(function(r){
            ys.head.xmlUpdates(r); // update dom with response
            if (PjGigya.path('pagesjaunes_update_favoris') !== undefined && scenario == "authentication_popin_flow") {
                $.ajax({
                    type: "GET",
                    url: PjGigya.path('pagesjaunes_update_favoris')
                }).done(function(r){
                    ys.head.xmlUpdates(r);
                })
            }

            $.ajax({
                type: "GET",
                data : { 'scenario_alias': scenario},
                url: PjGigya.path('pagesjaunes_user_profile_show_ajax')
            })
            .done(function(r){
                // MAJ de la métanav
                ys.head.xmlUpdates(r);
                // envoi des stats de Login à AT
                eventObj.ID_STAT = $('id_stat', r).text();
                $('[data-pjstats*="ONLOGIN"]').trigger('login.pjstatsgigya', eventObj);
                ys.head.pjSetStatsVarsSession( { "xtat" : eventObj.ID_STAT }); 
            })
        })
        .fail(function(){
            showLoginFormScreenTechnicalError();
        });
    }

    /* Une fois la connexion faite on ferme la fenêtre */
    showFinalizeScreen = function(eventObj) {
        //Si l'evenement est un login pour un utilisateur existant, on vérifie la signature
        if (eventObj.eventName == "login") {
            // Création automatique de profil si elle doit être déclanchée
            if (window.finalizeRegistrationTrigger == true) {
              userCreateProfil(eventObj.UID, eventObj.user.loginProvider, eventObj);
            } else {
              finalizeAuthentication(eventObj);
            }
        }
    }

    initPjActionsTechnicalError = function( eventObj ) {
        $('#loginFormTechnicalError').show();
        initPjActions(eventObj);
    }

    initPjActions = function( eventObj ) {
        var ysScreenObject = $('#'+eventObj.currentScreen);
        if( 'undefined' != ysScreenObject.data('popin-title') ) {
            $('.pjpopin-header').find('h1').html( ysScreenObject.data('popin-title') );
        }
        // UTILISATEUR_FRONT-1261 - Si le mail n'est pas récupéré, l'utilisateur doit pouvoir le saisir
        if ( $('#gigya-complete-registration-screen').is(":visible")) {
            //On stock les données nécessaires à la création automatique de profil
            window.idUtilisateur = eventObj.response.response.UID;
            window.provider = eventObj.response.response.loginProvider;
            if( $('#gigya-complete-registration-screen #email').val() == "") {
                $('#gigya-complete-registration-screen #email').removeAttr("disabled");
            }
        }
        //On stock les données nécessaires à la création automatique de profil
        if (eventObj.currentScreen == "link-account-screen") {
            window.provider = eventObj.response.response.requestParams.provider;
            $('[data-pjstats*="UTIL-CNX-RS-RATTACHEMENT"]').trigger('screenset.pjstatsgigya', eventObj);
        } else if (eventObj.currentScreen == "gigya-thank-you-screen") {
            $('[data-pjstats*="UTIL-MAIL-FDBCK"]').trigger('screenset.pjstatsgigya', eventObj);
        } else if (eventObj.currentScreen == "gigya-pending-verification-screen") {
            $('[data-pjstats*="UTIL-MAIL-VALIDATION"]').trigger('screenset.pjstatsgigya', eventObj);
        } else if (eventObj.currentScreen == "gigya-complete-registration-screen") {
            $('[data-pjstats*="UTIL-CNX-RS-COMPLETION"]').trigger('screenset.pjstatsgigya', eventObj);
        } else if (eventObj.currentScreen == "login-screen") {
            $('[data-pjstats*="UTIL-MAIL-CNX"]').trigger('screenset.pjstatsgigya', eventObj);
        } else if (eventObj.currentScreen == "gigya-forgot-password-success-screen") {
            $('[data-pjstats*="UTIL-MDP-RESET-FEEDBCK"]').trigger('screenset.pjstatsgigya', eventObj);
        }
        ysScreenObject.pjScan();
    }

    /**
     * Callback appelé dans les conf globales de gigya
     * @param  {Response} response de gigya
     */
    callbackEventHandler = function(response) {
        // On vérifie les rôles de l'utilisateur
        $.ajax({
          type: "GET",
          url: PjGigya.path('pagesjaunes_user_check')
        })
        .done(function(r) {
          // lancer l'appel à Gigya si l'utilisateur n'a pas le role 'USER' sinon il est déjà connecté
          if (r == 0 && !ys.head.ff('FF_TECH_MOCK_GIGYA')) {
            // Gigya ne fait cet appel que si l'utilisateur est logué chez gigya
            gigya.socialize.getUserInfo({callback:finalizeAuthentication});
          }
        });

        if (response.errorCode != 0) {
            showLoginFormScreenTechnicalError();
        }
    }

    initRegisterScreenset = function(){
        // Initialisation du screenset lorsqu'on vient de la popin de création de compte
        gigya.accounts.showScreenSet({
            screenSet:'pjauthent-screen-set',
            startScreen:'register-screen',
            containerID:'gigyaScreensContainer',
            onAfterScreenLoad: initPjActions,
            onBeforeSubmit: validateRegistrationScreen,
            onAfterSubmit: afterSubmitActionHandler,
            onError : errorHandler
        });
    }

    initLoginScreenset = function(){
        // On initialise les screenset d'authentification
        showLoginFormScreen();
    }

    getOrigineParcoursCreation = function(eventObj) {
        var scenario = getScenarioAlias();
        var code_origine_creation = null;
        if(scenario == 'avis_flow') {
            code_origine_creation = 'AVIS';
        } else if(scenario == 'photos_flow') {
            code_origine_creation = 'PHOTO'
        } else if(scenario == 'signaler_flow') {
            var type = $_GET['type'];
            if(type == 'ddr'){
                code_origine_creation = 'SA_DDR_AVIS';
            } else if(type == 'photo') {
                code_origine_creation = 'SA_PHOTO';
            } else if(type == 'avis'){
                code_origine_creation = 'SA_AVIS';
            }
            code_origine_creation = 'SIGNALER';
        } else if(scenario == 'rdv_sante_flow') {
            code_origine_creation = 'SANTE';
        } else if(scenario == 'rdv_beaute_flow') {
            code_origine_creation = 'BEAUTE';
        } else if(scenario == 'favoris_flow') {
            code_origine_creation = 'FAVORIS';
        } else if(scenario == 'authentication_page_flow') {
            code_origine_creation = 'SPONTANE';
        } else if(scenario == 'authentication_popin_flow') {
            code_origine_creation = 'SPONTANE';
        } else if(scenario == 'registration_flow') {
            code_origine_creation = 'SPONTANE';
        } 
        return code_origine_creation;
    }
})(ys.$);
