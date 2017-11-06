
var moreNewsRef = $('.more-news-reference');
var asideAd2 = $('.tm-ad:nth-of-type(2)');
var asideAd3 = $('.tm-ad:nth-of-type(3)');
var adFooter = $('.sn-ad-footer');
var mainContentBlock = $('#main');
var mainContentBlockTop = mainContentBlock.offset().top;

var moreNewsRefStickyTop,asideAd2StickyTop,asideAd3StickyTop;
var moreNewsRefAbsTop,asideAd2AbsTop,asideAd3AbsTop;
var asideAd3Bottom, maincontentBottom;
var asideAd3ToMainDistance;

var stopStickyFlag=false;

var adFooter = $('.sn-ad-footer');

var isMainContentBottomVisible;

// Detect scroll
$(window).scroll(function () {

    // to get the main content bottom
    maincontentBottom = getHtmlObjBottom(mainContentBlock);
	asideAd3Bottom = getHtmlObjBottom(asideAd3);
    asideAd3ToMainDistance = maincontentBottom - asideAd3Bottom - 50; // 50 is the main content block padding


    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();

	isMainContentBottomVisible = isHtmlObjInScreen(mainContentBlock,winScrollTop,winHeight);

    if(getCurrentTopToScreen(moreNewsRef,winScrollTop)>0){
		stopStickyFlag = false;
    }

    if(winScrollTop>720){
            moreNewsRefStickyTop = getCurrentTopToScreen(moreNewsRef,winScrollTop);
            asideAd2StickyTop = getCurrentTopToScreen(asideAd2,winScrollTop);
            asideAd3StickyTop = getCurrentTopToScreen(asideAd3,winScrollTop);

			moreNewsRefAbsTop = moreNewsRef.offset().top - mainContentBlockTop - 30;
    		asideAd2AbsTop = asideAd2.offset().top - mainContentBlockTop- 30;
			asideAd3AbsTop = asideAd3.offset().top - mainContentBlockTop- 30;

         if((asideAd3ToMainDistance <= 20) && (!stopStickyFlag)){
			moreNewsRef.css({'position':'absolute','top':moreNewsRefAbsTop+'px','display': 'block','max-width': '320px','white-space': 'nowrap','overflow': 'hidden','text-overflow': 'ellipsis'});
            asideAd2.css({'position':'absolute','top':asideAd2AbsTop+'px','z-index':'10001'});
            asideAd3.css({'position':'absolute', 'top':asideAd3AbsTop+'px','z-index':'10001'});
            stopStickyFlag = true;
        }else{
            if(!stopStickyFlag){
                moreNewsRef.css({'position':'fixed','top':moreNewsRefStickyTop+'px','z-index':'10001','display': 'block','max-width': '320px','white-space': 'nowrap','overflow': 'hidden','text-overflow': 'ellipsis'});
                asideAd2.css({'position':'fixed','top':asideAd2StickyTop+'px','z-index':'10001'});	
                asideAd3.css({'position':'fixed','top':asideAd3StickyTop+'px','z-index':'10001'});
            }
        }
    }else{
		removeEverything(moreNewsRef);
        removeEverything(asideAd2);
        removeEverything(asideAd3);
        stopStickyFlag = false;
    }
});

function getCurrentTopToScreen( htmlObj, windowsScrollTop){
	var stickyTop = htmlObj.offset().top - windowsScrollTop;
    return stickyTop;
}

function removeSticky(htmlObj,windowsScrollTop){
	var stickyTop = htmlObj.offset().top - windowsScrollTop;
	htmlObj.css({'position':'absolute','top':stickyTop+'px','z-index':'10001','background-color':'#efefef'});
}

function removeEverything(htmlObj){
	htmlObj.removeAttr('style');
}

function getHtmlObjBottom(htmlObj){
	var htmlObjTop = htmlObj.offset().top;
    var htmlObjHeight = htmlObj.outerHeight();
    return htmlObjTop + htmlObjHeight;
}

function isHtmlObjInScreen(htmlObj,winScrTop,winHeight){
	if(winScrTop+winHeight-getHtmlObjBottom(htmlObj) < 0)
		return false;
	else
		return true;

}
