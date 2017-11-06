(function ($, Drupal, window, document, gigya) {

  Drupal.ines_gigya = Drupal.ines_gigya || {};

  var gigyaLoggedIn = false;

  gigya.socialize.getUserInfo({
    callback: initGigyaUI
  });

  gigya.socialize.addEventHandlers({
    onLogin: initGigyaUI
  });

  loadShareBar('gigya-share-btns-1');
  loadShareBar('gigya-share-btns-2');
  loadShareBar('gigya-share-btns-3');

  // gigya UI init function
  function initGigyaUI(response) {
    if (response.user.UID != '') {
        gigyaLoggedIn = true;

      // update the menu
      $('#meta-nav .account .dropdown-menu li:first').html('<a href="/profile" id="accountLink" data-id="accountLink">My account</a>');
      $('#meta-nav .account .dropdown-menu li:nth-child(2)').html('<a href="/" id="signOutLink" data-id="signOutLink">Log out</a>');

      $('#signOutLink').click(function() {
        // update the globals
        gigyaLoggedIn = false;

        // logout of gigya
        gigya.socialize.logout({
            callback: gigyaLogout
        });
      });
    } else {
      // update the menu
      $('#meta-nav .account .dropdown-menu li:first').html('<a href="/login" id="signInLink" data-id="signInLink">Sign in</a>');
      $('#meta-nav .account .dropdown-menu li:nth-child(2)').html('<a href="/register" id="joinLink" data-id="joinLink">Register</a>');
      gigyaLoggedIn = false;
    }
  }

  // gigya Logout
  function gigyaLogout(data) {
    // reload if logout was successful
    if (data.errorCode == 0) {
      location.reload();
    } else {
      console.log('Error :' + response.errorMessage);
    }
  }

  // gigya load sharebar
  function loadShareBar(containerID) {
    var ag = new gigya.socialize.UserAction();
    // Configure sharebar using the Open Graph meta
    ag.setTitle($("meta[property='og:title']").attr("content"));
    if (Drupal.settings.themeName ==='hnp_theme'){
      ag.setDescription(" ");
    }
    ag.addMediaItem({
      type: 'image',
      src: $("meta[property='og:image']").attr("content"),
      href: ag.permalink
    });

    // showShareBarUI params, defaults, can be overrided by theme
    var params = {
      userAction: ag,
      shortURLs: 'never',
      showTooltips: true,
      containerID: containerID, // argument with div ID
      showCounts: 'none',
      iconsOnly: true,
      onLoad: onSharebarLoad, // function to run when sharebar has loaded, detects device and displays whatsApp share icon
      deviceType: 'auto',
      onShareButtonClicked: chkButton, // function to run on click, fires krux event tracker
      onLoad: afterShareBarUILoaded,
    };

    if (typeof Drupal.settings.gigya_ui.shareButtons !== 'undefined'){
      if (containerID == 'gigya-share-btns-3' && jQuery('body').hasClass('indylife-body-class')) {
        params['shareButtons'] = Drupal.settings.gigya_ui.shareButtonsIndyLife;
      } else {
        params['shareButtons'] = Drupal.settings.gigya_ui.shareButtons;
      }
    }

    if (typeof Drupal.settings.gigya_ui.params !== 'undefined') {
      $.extend(params, Drupal.settings.gigya_ui.params);
    }
    gigya.socialize.showShareBarUI(params);
  };
  // Hide whatsapp
  function onSharebarLoad() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('.gig-button-container-whatsapp').addClass('gig-button-showmeWA');
    }
  }

  // on share button click event, fires krux event passing article data
  function chkButton(data) {

    var referrer = data.shareItem.provider;
    var article = $('meta[property="og:title"]').attr("content");
    var section = $('meta[property="article:section"]').attr("content");
    var publication = $('meta[property="og:site_name"]').attr("content");
    var topics = (topicTags.join(", "));

    window.Krux||((Krux=function()
    {Krux.q.push(arguments);}
    ).q=[]);
    Krux('admEvent', 'JMOZCtWI',
      {
        ArticleName:article,
        SectionNameegSport:section,
        SocialChannel:referrer,
        TopicTag:topics,
        WebsiteegIndependent:publication}
      );
  }

  function afterShareBarUILoaded(data) {
    var shareContainer = $('#'+data.containerID);
    var appendShareCount = function() {
      if (shareContainer.length > 0) {
        var html = '<td><span class="gig-counter-text">' + Drupal.ines_gigya.shareCount + '</span></td>';
        // var test = shareContainer.find(". gig-share-bar-container > table > tbody > tr");
        shareContainer.find(".gig-share-bar-container > table > tbody > tr").append(html);
      }
    }

    if (!Drupal.ines_gigya.shareCount) {
      var url = window.location.href.split('?')[0];
      var encodedURL = encodeURIComponent(url);
      $.get("https://graph.facebook.com/?ids=" + encodedURL, function(data) {
        if (typeof data[url] !== "undefined") {
          var shareCount = data[url].share.share_count;
          if (shareCount > 1e6) {
            Drupal.ines_gigya.shareCount = Math.round(shareCount / 1e4) / 100 + "M";
          }
          else if (shareCount > 1e3 && shareCount <= 1e6) {
            Drupal.ines_gigya.shareCount = Math.round(shareCount / 1e3) + "K";
          }
          else {
            Drupal.ines_gigya.shareCount = shareCount;
          }
          appendShareCount();
        }
      });
    }
    else {
      appendShareCount();
    }

    // var counterContainer = $('.gig-counter-text', shareContainer);

    // if (counterContainer.length > 0) {
    //   counterContainer.mutation('connect', function() {
    //     counterContainer.mutation('disconnect');
    //     // convert 1000K to 1.00M
    //     var counter = counterContainer.html();
    //     var counter = "1234K";
    //     var regex = /^(\d+)K?$/;
    //     var matches = counter.match(regex);
    //     if (matches != false && matches[1] > 1000) {
    //       counter = (Math.round(matches[1]/10) / 100) + "M";
    //     }
    //     counterContainer.html(counter).css('display', 'block');
    //   });
    // }
  }

})(jQuery, Drupal, this, this.document, gigya);
