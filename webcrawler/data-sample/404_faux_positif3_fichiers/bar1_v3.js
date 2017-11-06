// Removed Meter check. --djp 2017-09-07
// use jQuery from Optimizely - FG 2017-11-01 - https://jira.nyt.net/browse/MARO-195

(function(window) {
    "use strict";
    var $ = window.optimizely.get('jquery');



    // ------      Select NYT4/NYT5       ------


    function isNyt5() {
        var nyt5meta = document.getElementsByName('sourceApp'),
            nytApps = {
                'nyt-v5': true,
                'blogs': true
            };
        return (typeof nyt5meta[0] !== "undefined") && (nyt5meta[0].getAttribute('content') in nytApps);
    }


    if (isNyt5()) {
            // console.log('isNyt5');
            showOnNYT5();
    } else {
        // console.log('isNyt4');
        showOnNYT4();
        run();
    }


    /**
     * Modify DOM for NYT5
     */

    function showOnNYT4() {
        // console.log('showOnNYT4');
        $('#bar1-nyt5wrapper ul').contents().unwrap();
        $('#bar1-nyt5wrapper').contents().unwrap();
    }

    /**
     * Modify DOM for NYT5
     */

    function showOnNYT5() {
        // console.log('showOnNYT5');
        //Check Bar1 Version: Text or Hover
        var $container = $('#bar1-textlink');

        if ($container.length > 0) {
            $container.wrap('<div id="bar1-textlink" class="user-subscriptions-group"><ul class="user-subscriptions-menu"></ul></div>');
        } else {
            // The container is hidden while this is happening
            $container = $('.bar1_hover');
            $('#nyt-button-sub').addClass('button');
        }
        //Fix FireFox NYT subscribe button issue
        var FIREFOX = /Firefox/i.test(navigator.userAgent);
        if (FIREFOX) {
            $('#nyt-button-sub').css("height", "30px");
        } else {
            $('#nyt-button-sub').css("height", "15px");
        }

        // Wrap a string of HTML around NYT4 container
        //$container.wrap('<div id="bar1-nyt5wrapper" class="user-subscriptions-group"><ul class="user-subscriptions-menu"></ul></div>');

        // Add subscribe link for small view port
        $('#subscribe_small').removeClass("sub_small_hide");
        $('#subscribe_small').css("visibility", "visible");

        runWhenReady(
            function() {
                return $('#bar1-nyt5wrapper');
            },
            run,
            200, 50
        );
    }

    function runWhenReady(testFunction, inFunction, mlsecs, reps) {
        setTimeout(function z() {
            if (testFunction()) {
                inFunction();
            } else if (--reps) {
                setTimeout(z, mlsecs);
            }
        }, mlsecs);
    }

    //ET tracking
    function trackET(dataObj, config) {
        dataObj = dataObj || {};
        runWhenReady(
            function() {
                return (window.NYTD && NYTD.EventTracker && NYTD.EventTracker().track);
            },
            function() {
                NYTD.EventTracker().track(dataObj, config);
            },
            100, 50
        );
    }

    // -----------------------------------------
    // ------      Creative Specific      ------

    function run() {
        $('#bar1-nyt5wrapper').css("opacity", "1");
        $('.bar1_hover').css("opacity", "1");
        $('#nyt-button-sub').show();

        //impressions and hover are for control and variations
        //this will be reused for hover: action: "hover"
        var campname = $("#hovercard").data("campaign-name");
        var eventObj = {
            subject: "module-interactions",
            moduleData: JSON.stringify({
                contentCollection: ("" + campname), //adxCampaignName,
                module: "Ad",
                version: "Bar1",
                action: "hover",
                eventName: "adExpansion"
            })
        };

        // Bar1 user interaction
        $('.bar1_hover').hover(function(e) {
            $('#hovercard').show();
            $('.nyt-button-actions').removeClass('highlightButton');
            trackET($.extend({}, eventObj, {
                action: "hover",
                eventName: "adExpansion"
            }), {
                buffer: false
            });
        }, function() {
            $('#hovercard').hide();
        });

        if (typeof addFloodlight == 'function') {
            addFloodlight();
        }

    }
})(window);