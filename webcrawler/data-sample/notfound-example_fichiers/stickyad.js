$(function () {
	// Variables
	var scrolled = false;

		var $adMarquee = $('.sn-ad-marquee');
		var mainContentTop = $('.main-categories-container').offset().top;
		var timeoutVar;
		
		// Detect scroll
		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop(),
			mainContPositionTop = mainContentTop - scrollTop;

				if(scrollTop<mainContentTop){
					clearTimeout(timeoutVar);
					scrolled = false;
				}

				if(!scrolled) {
					if(mainContPositionTop < 0)
					{
						$adMarquee.css({ 'position':'fixed', 'top':'0','z-index':'10000', 'width': '100%','padding':'5px', 'background':'rgba(119,119,119,.5)'});
					} else {
						$adMarquee.removeAttr('style');
					}
				}
				

				if(mainContPositionTop>0){
					if(!scrolled) {
						timeoutVar = setTimeout(function(){
							$adMarquee.removeAttr('style');
							if(!scrolled){
								scrolled = true;
							}
						},7000)
					}
				}				
		}).trigger('scroll');		

});
