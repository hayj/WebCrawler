var snChartBeatsSections = $("meta[itemprop='articleSection']").attr('content').indexOf(",") > -1 ? "Story,"+$("meta[itemprop='articleSection']").attr('content').replace("-", " ").split(",").reverse().join(",") : "";

//if (location.href != "http://www.skynews.com.au/news.html" && location.href != "http://www.skynews.com.au/ && " ) {

if (location.href !="http://www.skynews.com.au/news.html" && location.href != "http://www.skynews.com.au/" && location.href != "http://www.skynews.com.au/news/politics.html" && location.href != "http://www.skynews.com.au/business.html" && location.href != "http://www.skynews.com.au/news/top-stories.html" ) {
     var _sf_startpt=(new Date()).getTime()
     var _sf_async_config={};
     var _sf_async_config={};
	/** CONFIGURATION START **/
	_sf_async_config.uid = 59397;
	_sf_async_config.domain = 'skynews.com.au';
	_sf_async_config.useCanonical = true;
  _sf_async_config.videoType = 'ooyala';
	if (snChartBeatsSections != "") {
	    _sf_async_config.sections = snChartBeatsSections;
	}
	/** CONFIGURATION END **/
	(function(){
	  function loadChartbeat() {
	    window._sf_endpt=(new Date()).getTime();
	    var e = document.createElement('script');
	    e.setAttribute('language', 'javascript');
	    e.setAttribute('type', 'text/javascript');
	    e.setAttribute('src', '//static.chartbeat.com/js/chartbeat_video.js');
	    document.body.appendChild(e);
	  }
	  var oldonload = window.onload;
	  window.onload = (typeof window.onload != 'function') ?
	     loadChartbeat : function() { oldonload(); loadChartbeat(); };
	})();
}
    var sn_timer1 = 
    setInterval(function(){ 
     if(typeof videoPlayer !== "undefined") {
         var _cbv = window._cbv || (window._cbv = []);
            _cbv.push(videoPlayer);
     				additionalEmbedV4(videoPlayer,"OO");
         clearInterval(sn_timer1);
        }
       }, 1000);

    var sn_timer2 = 
    setInterval(function(){ 
      if (typeof s.name !== "undefined"){
      		if(/skynews.com.au/i.test(location.hostname) && 
      			_satellite.getVar('traffic_bucket') <= _satellite.getVar('appmeasurement_split50')){
          			_satellite.loadScript("http://assets.adobedtm.com/b115bc50b73a685b73a5ec23570f976910498851/scripts/satellite-572becbd64746d251d0005e8.js");
          		} else {
          			_satellite.loadScript("http://assets.adobedtm.com/b115bc50b73a685b73a5ec23570f976910498851/scripts/satellite-53d0abf3603293154a000690.js");
          		}
         clearInterval(sn_timer2);
        }
       }, 500);

