// added in currency --DH 2017-10-19
// Removed Meter check. --djp 2017-09-07
(function (window) {
    "use strict";
    var $;

    var links = document.querySelectorAll('#Bar1 a');

    //var $, Meter, hasMeter;
    /**
     * Checking if current page depends on NYT5 foundation framework.
     * @returns {boolean}
     */

    function isPrototype() {
        // Pages with metatag prototype cannot use require
        // Jquery is defined globally on these pages and require is not...required

        return document.querySelectorAll("meta[name='prototype']").length > 0;
    }

    var MKDATA = {
        hovercard: {
            currencyData: {
                US: {
                    introPrice: '$3.75',
                    fullPrice: '$1.88',
                    billingPrice: '$7.50'
                },
                GB: {
                    introPrice: '£3.00',
                    fullPrice: '£1.50',
                    billingPrice: '£6.00'
                },
                EU: {
                    introPrice: '€3.50',
                    fullPrice: '€1.75',
                    billingPrice: '€7.00'
                },
                CA: {
                    introPrice: 'CAD $5.00',
                    fullPrice: 'CAD $2.50',
                    billingPrice: 'CAD $10.00'
                },
                AU: {
                    introPrice: 'AUD 5.00',
                    fullPrice: 'AUD 2.50',
                    billingPrice: 'AUD 10.00'
                },
                IN: {
                    fullPrice: '₹49.00'
                }
            }
        }
    };

    //  ---------------------    Internationalize   ---------------------

    var getCurrentLocation = function () {
        var country;
        var testLocation = window.NYToptly.getQueryParameter('Location');
        if (testLocation) {
            country = testLocation;
        }
        else {
            country = window.optimizely.get('visitor').location.country;
            var eurozone = ['DE', 'AD', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'GR', 'VA', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'MC', 'NL', 'PL', 'PT', 'RO', 'SM', 'SK', 'SI', 'ES', 'SE', 'CH'];
            if (eurozone.indexOf(country) > -1) {
                country = 'EU';
            } else if (country !== 'CA' && country !== 'EU' && country !== 'GB' && country !== 'AU' && country !== 'IN') {
                country = 'US';
            }
        }
        return country;
    };

    var queryCountry = getCurrentLocation();

    console.log('---------------------------------- ' + queryCountry);

    var changeCurrency = function (currencyDiv, currency) {

        if (currency !== '') {
            var currencyObject = MKDATA[currencyDiv].currencyData[currency];

            $('#' + currencyDiv)
                .find('span.currency--fullPrice').html(currencyObject.fullPrice).end();
        }
        console.log('---------------------------------- change currency' + currency);
    };

    // 102417 replace LP URL if in India~208123
    function bar1_India() {
        if (queryCountry === 'IN') {
            for (var i = 0; i < links.length; i++) {
                links[i].href = links[i].href.replace("https://www.nytimes.com/subscriptions/inyt/lp87JWF.html", "https://www.nytimes.com/subscription/inyt/lp8J4QY.html");
            }
        }
    }

    //  ---------------------    End Internationalize   ---------------------

    // ------      Select NYT4/NYT5       ------
    function showOnNYT4() {
        $('#bar1-nyt5wrapper ul').contents().unwrap();
        $('#bar1-nyt5wrapper').contents().unwrap();

        changeCurrency('hovercard', queryCountry);
        bar1_India();
    }

    function isNyt5() {
        var nyt5meta = document.getElementsByName('sourceApp'),
            nytApps = {
                'nyt-v5': true,
                'blogs': true
            };
        return (typeof nyt5meta[0] !== "undefined") && (nyt5meta[0].getAttribute('content') in nytApps);

        changeCurrency('hovercard', queryCountry);
        bar1_India();
    }

    if (isPrototype()) {
        $ = window.NYTD && window.NYTD.jQuery || window.jQuery;
        showOnNYT5();
    } else {
        if (isNyt5()) {
            require(['foundation/main'], function () {
                $ = require('jquery/nyt');
                // try {
                //   Meter = require('auth/mtr');
                //   hasMeter = true;
                // } catch (e) {
                //   // Page doesn't have mtr.js
                // }
                showOnNYT5();
            });
        } else {
            // NYT4
            $ = (window.NYTD && window.NYTD.jQuery) || window.jQuery;
            showOnNYT4();
            run();
        }
    }

    /**
     * Modify DOM for NYT5
     */

    function showOnNYT5() {
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
            function () {
                return $('#bar1-nyt5wrapper');
            },
            run,
            200, 50
        );

        changeCurrency('hovercard', queryCountry);
        bar1_India();
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
            function () {
                return (window.NYTD && NYTD.EventTracker && NYTD.EventTracker().track);
            },
            function () {
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
        $('.bar1_hover').hover(function (e) {
            $('#hovercard').stop(true, true).delay(400).fadeIn('fast');
            $('.nyt-button-actions').removeClass('highlightButton');
            trackET($.extend({}, eventObj, {
                action: "hover",
                eventName: "adExpansion"
            }), {
                    buffer: false
                });
        }, function () {
            $('#hovercard').stop(true, true).delay(0).fadeOut('fast');
        });

        if (typeof addFloodlight == 'function') {
            addFloodlight();
        }

        changeCurrency('hovercard', queryCountry);
        bar1_India();

    }

})(window);