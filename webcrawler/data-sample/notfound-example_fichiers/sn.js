/** Omniture Analytics code **/
// Global variable to hold our stuff
var VBM = {}; 

function reportingBeacon(override){

	// Define first levels of hierarchy
	var hostname = window.location.hostname.replace(/^www\./,'');

		SitesArray = new Object();
		SitesArray['skynews.com.au'] 	= 'Sky News';
		//SitesArray['skyweather.com.au'] 		= 'Weather';
		
		if(SitesArray[hostname]) {
			VBM.section = SitesArray[hostname];
			VBM.reportsuites = 'telstrabpbigpondprd,telstrabpnewsprd';
		} else {
			VBM.reportsuites = 'telstrabpbigponddev'; //test only it will give one of the above random sites
			VBM.section = 'Sky News';
		}

	VBM.hierarchy = 'BP|News|'+ VBM.section;
	
	// Method to strip any funny stuff out of the pageName
	VBM.sanitisePageName = function(string){
		// replace | with hyphen.
		string = string.replace(/[|]/g, '-');
		// replace ? with blank
		string = string.replace(/[?]/g, '');
		return string;
	};
	
	VBM.getQueryString = function(){
		var result = {}, queryString = location.search.substring(1), re = /([^&=]+)=([^&]*)/g, m;
		
		while (m = re.exec(queryString)) {
		result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
		}
		return result;
	};
	
	// If any argument is passed into reportingBeacon(), do nothing
	if (!override) {
	
		// Put code here to pull out the page name and any additional levels of hierarchy, 
		// and pop it on the end of the hierarchy.
		// By default this grabs the document title, if it exists.
		
		// Home page
		VBM.path = window.location.pathname;
		if (VBM.path === '/news.html' || VBM.path === '/') {
			VBM.hierarchySuffix = '|home';
		}
		else {
			
			//VBM.pathArray = window.location.pathname.split('/');
			if ($("meta[itemprop=articleSection]").attr("content"))
				{
					VBM.pathArray = $("meta[itemprop=articleSection]").attr("content").split(',');
					VBM.Title =  VBM.sanitisePageName($("meta[property='og:title']").attr("content"));
					if (VBM.pathArray[0]==='Programs' || VBM.pathArray[0] === 'Business' || VBM.pathArray[0] === 'Connect') 
					{VBM.pathArray.push(VBM.pathArray[0])};
				}
				else
				{
					VBM.pathArray = window.location.pathname.split('/');
					VBM.Title =  VBM.sanitisePageName($("meta[property='og:title']").attr("content"));
				}
			
			//alert(VBM.pathArray[0]);
			if (VBM.pathArray.length > 1) {
				 VBM.hierarchySuffix = '';
			      for (i = 1; i < VBM.pathArray.length; i += 1) {if (VBM.pathArray[i].length > 0) {VBM.hierarchySuffix += '|' + VBM.pathArray[i] ;}}
				 	 VBM.hierarchySuffix = VBM.hierarchySuffix + '|'+ VBM.Title;
			}
		else {VBM.hierarchySuffix = '|' + VBM.Title;}
		}
	
		VBM.hierarchySuffix = VBM.hierarchySuffix.toLowerCase();
		VBM.hierarchy = VBM.hierarchy + VBM.hierarchySuffix;
		
		//alert(VBM.hierarchy);
		
		// ****************************************************
		// * You shouldn't need to change anything below here *
		// ****************************************************
		
		// Use Omniture's s.manageVars() to clear all the variables we set here.
		// If using AJAX methods where the page isn't re-loaded, you should do this
		// for ALL Omniture variables using:
		s.manageVars("clearVars");
		
		// Report suites, if they exist
		if (VBM.reportsuites) {
			s.un = VBM.reportsuites;
		}
		
		// Split out pageHierarchy into the appropriate props and vars
		VBM.hierarchy=VBM.hierarchy.replace(/\- sky news australia|/gi,'');
		VBM.hierarchy=VBM.hierarchy.replace(/\.html|/gi,'');
		//alert(VBM.hierarchy);
		//VBM.hierarchy=VBM.hierarchy.replace(\b(\w+)(?:|\s+\1\b)+,'');
					
		VBM.hierarchy = VBM.hierarchy.split('|');
		VBM.hier1 = [];
		//remove any duplicates
		$.each(VBM.hierarchy, function(i, el){if($.inArray(el, VBM.hier1) === -1) VBM.hier1.push(el);});
		VBM.hierarchy =VBM.hier1; 
		
		var i;
		for (i = 0; i < VBM.hierarchy.length; i += 1) {

			switch (i) {
				case 0:
					s.prop1 = VBM.hierarchy[i];
					s.eVar1 = VBM.hierarchy[i];
					break;
				case 1:
					s.prop2 = VBM.hierarchy[i];
					s.eVar2 = VBM.hierarchy[i];
					break;
				case 2:
					s.prop3 = VBM.hierarchy[i];
					s.eVar3 = VBM.hierarchy[i];
					break;
				case 3:
					s.channel = VBM.hierarchy[i];
					s.eVar4 = VBM.hierarchy[i];
					break;
				case 4:
					s.prop4 = VBM.hierarchy[i];
					s.eVar5 = VBM.hierarchy[i];
					break;
				case 5:
					s.prop5 = VBM.hierarchy[i];
					s.eVar15 = VBM.hierarchy[i];
					break;
			}
			
			// Build up the hierarchy delimited by pipes
			if (i !== 0) {
				s.hier1 = s.hier1 + '|'
			}
			s.hier1 = s.hier1 + VBM.hierarchy[i];
			
			// s.pageName skips the second level and delimit by colon
			if (i !== 1) {
				if (i !== 0) {
					s.pageName = s.pageName + ':';
				}
				s.pageName = s.pageName + VBM.hierarchy[i];
				
			}
			
		}
		//only set Article name if its a real article
		if ((VBM.hierarchySuffix != '|home')&& (VBM.pathArray[0] === 'News' || VBM.pathArray[0] === 'Business') 
		&& (VBM.Title.length > 0) && (/\d{2,4}/.test(VBM.path)) ){
				s.prop29 = s.eVar34 = 'SkyNews:' +VBM.Title;
			}
		
		var s_code = s.t();
		if (s_code) {
			document.write(s_code);
		}
		s.manageVars('clearVars');
	}
}

s.manageVars=new Function("c","l","f",""
+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+",products,transactionID';for(var n=1;n<51;n++){vl+=',prop'+n+',eVar"
+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+"it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+"}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+");return true;}else{return false;}");
s.clearVars=new Function("t","var s=this;s[t]='';");
s.lowercaseVars=new Function("t",""
+"var s=this;if(s[t]){s[t]=s[t].toString();s[t]=s[t].toLowerCase();}");


/**************report to omniture************************************/
reportingBeacon();

//additional tracking for gallery carousel
$(window).load(function(){
    $('.sn-gallery').find('.owl-prev,.owl-next,.sn-nav-left,.sn-nav-right').on('click',function(){
        _gaq.push(['_trackEvent', 'Navigate', 'Click', 'Photo']);
        _gaq.push(['_trackPageview']);
        //omniture custom link tracking
        s.tl(this,'o');
    });
});
