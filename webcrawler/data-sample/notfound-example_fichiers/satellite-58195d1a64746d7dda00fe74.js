$(document).ready(function() {
 if (_satellite.getVar('tmp')("www.skynews.com.au/sponsored/future-thinking--business-in-the-digital-age.html")){ 
	$("#google_inlineAd").hide();
 }
  {
   if (_satellite.getVar('tmp')("www.skynews.com.au/programs/tv-week-logie-awards.html")){ 
	$("#google_inlineAd").hide();
 }
  if (location.href !="http://www.skynews.com.au/news.html" && location.href != "http://www.skynews.com.au/" && location.href != "http://www.skynews.com.au/news/politics.html" && location.href != "http://www.skynews.com.au/business.html" && location.href != "http://www.skynews.com.au/news/top-stories.html" ) {
  $("#google_inlineAd").hide();
 }  
    
  
  //Google Webmaster
  //	_satellite.notify('<meta name->*****');
  $('head').append('<meta name="google-site-verification" content="Jsl6v3ORRG4zeEOyWwWtz136ZHiuLSu6BU4ZeOUlKkw">');
    //	_satellite.notify('####<meta name->*****');
  }});

