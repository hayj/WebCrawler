/**
 * Fichier javascript de comportements spécifiques à la popin CQFD
 * CF jira: http://jira.services.local/browse/YELLSCRIPT-108
 */
(function($, cn_add, cn_del, cn_ok, cn_form, cn_form_attr) { // Wrap
    /*
     * Scan - composant pjcqfd-add
     * écouteur click
     * append un template mustache à une div
     *
     * @Params:
     * - to
     * - template
     */
    ys.head.onScan( '[data-'+ cn_add +']', function(){
        //console.log('ajouter')
        // Vars
        var $e = $(this),
            d = $e.data(cn_add);

        // Vérifs
        if (
            d.before
            && d.template
            && '' != d.before
            && '' != d.template
        ) {
            $e.on('click.' + cn_add + ' ' + cn_add, function(e){
                // console.log(' click ajouter')
                // console.log(d)
                $(d.before).before($(d.template).mustache().pjScan());
            }); // EO $e.click(funtion(){
            $e.trigger('click.' + cn_add)

        }
    }); // EO ys.head.onScan(

    /*
     * Scan - composant pjcqfd-ok
     * écouteur click
     * supprime les inputs, créer l'étiquette
     *
     * @Params:
     * - before
     * - template
     * - remove #facultatif
     */
    ys.head.onScan( '[data-'+ cn_ok +']', function(){
        //console.log('ajouter')
        // Vars
        var $e = $(this),
            d = $e.data(cn_ok);

        // Vérifs
        if (
            d.before
            && d.template
            && d.id
            && d.value
            && '' != d.before
            && '' != d.template
        ) {
            $e.click(function(e){
                if ( '' != $(d.value).val() && ( ($(d.value).prop('validity') && $(d.value).prop('validity').valid) || null == $(d.value).prop('validity') ) ) {
                    $(d.before).before($(d.template).mustache({
                        input_type: d.type ? $(d.type).val() : '',
                        input_value: $(d.value).val(),
                        valeur: $(d.type).val() + ' : ' + $(d.value).val(),
                        nbhidden: parseInt(
                            ( $('[id^='+d.id+']').length ?
                                    $('[id^='+d.id+']').last()
                                        .attr('id')
                                        .substring(d.id.length)
                                :
                                    '-1'
                            )
                        ) + 1
                    }).pjScan());

                    d.remove && $(d.remove).remove();

                    d.toggleclass
                    && d.toggleclass.sel
                    && d.toggleclass.klass
                        $(d.toggleclass.sel).toggleClass(d.toggleclass.klass, d.toggleclass.force||null);
                }
            }); // EO $e.click(funtion(){
        }

    }); // EO ys.head.onScan(

    /*
     * Scan - composant pjcqfd-ok
     * écouteur click
     * supprime les inputs, créer l'étiquette
     *
     * @Params:
     * - before
     * - template
     * - remove #facultatif
     */
    ys.head.onScan( '[data-'+ cn_ok +'-horaires]', function(){
        //console.log('ajouter')
        // Vars
        var $e = $(this),
            d = $e.data(cn_ok+'-horaires');

        // Vérifs
        if (
            d.before
            && d.template
            && d.id
            && d.value
            && '' != d.before
            && '' != d.template
        ) {
            var $s = $(d.value.jour_deb + ', '+ d.value.jour_fin + ', '+ d.value.h1_deb + ', '+ d.value.h1_fin);
            $s.change(function(e){
                var allchanged = true;
                $s.each(function(){
                    allchanged = (allchanged && $(this).val()!= '');
                });
                if(allchanged) {
                    $e.toggleClass(d.togglehide, false);
                }
            });
            $e.click(function(e){
                var jd = $(d.value.jour_deb).val(),
                    jf = $(d.value.jour_fin).val(),
                    jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
                    fin = false,
                    i = jours.indexOf(jd);

                if(jf == '') jf=jd;

                if(i > -1) {
                    while (!fin) {
                        jd = jours[i];
                        // créer étique JOUR 'jd'
                        $(d.before).before($(d.template).mustache({
                            jour_deb: jd.charAt(0).toUpperCase() + jd.slice(1),
                            h1_deb: $(d.value.h1_deb + ' option:selected').text(),
                            h1_fin: $(d.value.h1_fin + ' option:selected').text(),
                            h2_deb: $(d.value.h2_deb + ' option:selected').text(),
                            h2_fin: $(d.value.h2_fin + ' option:selected').text(),
                            nbhidden: parseInt(
                                ( $('[id^='+d.id+']').length ?
                                        $('[id^='+d.id+']').last()
                                            .attr('id')
                                            .substring(d.id.length)
                                    :
                                        '-1'
                                )
                            ) + 1
                        }).pjScan());

                        fin = (jd == jf);
                        i = (i == jours.length-1) ? 0 : i+1;
                    }
                    $e.toggleClass(d.togglehide, 1);
                    $(d.value.jour_deb + ', '+ d.value.jour_fin + ', '+ d.value.h1_deb + ', '+ d.value.h1_fin + ', '+ d.value.h2_deb + ', '+ d.value.h2_fin).val('');
                }
            }); // EO $e.click(funtion(){
        }

    }); // EO ys.head.onScan(

    /*
     * Scan - composant pjcqfd-ok
     * écouteur click
     * supprime les inputs, créer l'étiquette
     *
     * @Params:
     * - before
     * - template
     * - remove #facultatif
     */
    ys.head.onScan( '[data-'+ cn_ok +'-fermeture]', function(){
        //console.log('ajouter')
        // Vars
        var $e = $(this),
            d = $e.data(cn_ok+'-fermeture');

        // Vérifs
        if (
            d.before
            && d.template
            && d.id
            && d.value
            && '' != d.before
            && '' != d.template
        ) {
            var $s = $(d.value.jour_deb + ', '+ d.value.jour_fin);
            $s.on('change.pjdatepicker',function(e){
                var allchanged = true;
                $s.each(function(){
                    allchanged = (allchanged && $(this).val()!= '');
                });
                if(allchanged) {
                    $e.toggleClass(d.togglehide, false);
                }
            });
            $e.click(function(e){
                $(d.before).before($(d.template).mustache({
                    jour_deb: $(d.value.jour_deb).val(),
                    jour_fin: ($(d.value.jour_fin).val() != $(d.value.jour_deb).val())?$(d.value.jour_fin).val():'',
                    nbhidden: parseInt(
                        ( $('[id^='+d.id+']').length ?
                                $('[id^='+d.id+']').last()
                                    .attr('id')
                                    .substring(d.id.length)
                            :
                                '-1'
                        )
                    ) + 1
                }).pjScan());
                $s.val('');
                $e.toggleClass(d.togglehide, 1);
            }); // EO $e.click(funtion(){
        }

    }); // EO ys.head.onScan(


    /*
     * Scan - composant pjcqfd-del
     * écouteur click
     * append un template mustache à une div
     *
     * @Params:
     * - remove
     * - template
     */
    ys.head.onScan( '[data-'+ cn_del +']', function(){
        //console.log('ajouter')
        // Vars
        var $e = $(this),
            d = $e.data(cn_del);

        $e.click(function(e){
            $e.parent().remove();
            if(d.id && $('[id^='+d.id+']').length == 0) {
                $(d.add).not('.hidden').click();
            }
        });
    }); // EO ys.head.onScan(

    /*
     * Scan - composant pjcqfd-form
     * écouteur scan
     * append un template mustache à une div
     *
     * @Params:
     */
    ys.head.onScan( '[data-'+ cn_form +']', function(){
        // Vars
        var $form = $(this);

        $form
            .submit(function(){
                // Met à jour les champs
                $('input[data-'+ cn_form_attr +']').each(function(){
                    if($(this).data(cn_form_attr) != $form.attr('id')) return;
                    var $item = $(this),
                        $input = $form.find('input[name='+$item.name+']');

                    if($input.length) {
                        $input.val($item.value);
                    }else{
                        $('<input/>')
                            .attr('type', 'hidden')
                            .attr('name', $item.attr('name'))
                            .val($item.val()).appendTo($form);
                    }
                });
            });

    }); // EO ys.head.onScan(

    ys.head.$doc.on('click', 'button[data-'+ cn_form_attr +']', function(e){
        // Bloque le submit principal
        e.preventDefault();

        var f = $(this).attr('form');
        $( 'string' === typeof f ? '#'+f // for old IE when element outside form
            : f ).submit();
    });

}(ys.$, 'pjcqfd-add', 'pjcqfd-del', 'pjcqfd-ok', 'pjcqfd-form', 'pjcqfd-form-attr')); // EO Wrap
