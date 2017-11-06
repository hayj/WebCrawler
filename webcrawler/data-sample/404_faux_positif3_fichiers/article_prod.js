!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(141),i=[t];i.push(n(143)),i.push(n(149)),i.push(n(152)),i.push(n(155)),i.push(n(157)),i.push(n(167)),i.push(n(171)),i.push(n(173)),i.push(n(176)),i.push(n(179)),i.push(n(183)),i.push(n(187)),i.push(n(191)),i.push(n(194)),i.push(n(198)),i.push(n(202)),i.push(n(207)),i.push(n(209)),i.push(n(210)),i.push(n(212)),i.push(n(213)),i.push(n(216)),i.push(n(220)),i.push(n(225)),i.push(n(226)),i.push(n(228)),i.push(n(229)),i.push(n(230)),g.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(74),a=n(11),o=n(17);n(120);var s=o.get("stores/directive"),u=n(84);if(!u.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var c,l=n(123),d=n(110),f=n(124),p={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Geo] Australia,[Subscriber Type] Non-Subs,[Cookie] mtrab=au_test_2017=1 does NOT exist,Desktop/Laptop only", "name": "Nons | Cookie Setter | Australia Geo | 2017-10-03", "bucketingStrategy": null, "variations": [{"id": "8896331129", "actions": [{"viewId": "8263601258", "changes": [{"dependencies": [], "type": "custom_code", "id": "AD6D55FF-DDC1-4E34-8190-697EB1532DA9", "value": function($){var setCookie = function(name, value, expires, path, domain, secure) {
    var expiresDate;

    if (expires) {
        if (expires < 1000) {
            expiresDate = new Date();
            expiresDate.setTime(expiresDate.getTime() + expires * 24 * 60 * 60 * 1000);
        } else {
            expiresDate = new Date();
            expiresDate.setTime(expiresDate.getTime() + expires);
        }
    }

    document.cookie = name + "=" + encodeURIComponent(value) +
        ((path)    ? ";path=" + path : ";path=/" ) +
        ((expires) ? ";expires=" + expiresDate.toUTCString() : "" ) +
        ((domain)  ? ";domain=" + domain : ";domain=.nytimes.com" ) +
        ((secure)  ? ";secure" : "" );
};

var setMtrabCookie = function() {
    var testName = 'au_test_2017';
    var varName = '1';
    var newValue = testName + '=' + varName;

    console.log('Setting mtrab cookie: ' + newValue);
    setCookie('mtrab', newValue, 30);
};

setMtrabCookie();
}}]}], "name": "MARO-168 Australia Paywall @6 Desktop Rollout"}], "audienceIds": ["and", "7798550316", "6992450319", "8904381937", "8331680099"], "changes": null, "id": "8889993488", "integrationSettings": null}], "id": "8888012480", "weightDistributions": null, "name": "Cookie Setter - Australia", "groupId": null, "commitId": "9106793917", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8889993488", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["4129021553"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "[Support] BK Results Availability Detection 11_1", "bucketingStrategy": null, "variations": [{"id": "9263170702", "actions": [{"viewId": "4129021553", "changes": [{"dependencies": [], "type": "custom_code", "id": "4038DC08-A75B-4842-8575-BD720EA371AD", "value": function($){var hasRun = localStorage.getItem('optly_bk_viewed');
var isHome = window.location.pathname === '/';
var hasBkObject = typeof bk_results != 'undefined';
var hasCampaign = typeof bk_results != 'undefined' && bk_results.campaigns && bk_results.campaigns.length != 0;
if (!hasRun) {
	if (isHome) {
		optimizely.push({
			type: "event",
			eventName: "home_first_impression"
		});
		if (hasBkObject) {
			optimizely.push({
				type: "event",
				eventName: "home_first_has_object"
			});
			if (hasCampaign) {
				optimizely.push({
					type: "event",
					eventName: "home_first_has_value"
				});
			}
		}
	} else {
		optimizely.push({
			type: "event",
			eventName: "article_first_impression"
		});
		if (hasBkObject) {
			optimizely.push({
				type: "event",
				eventName: "article_first_has_object"
			});
			if (hasCampaign) {
				optimizely.push({
					type: "event",
					eventName: "article_first_has_value"
				});
			}
		}
	}
	localStorage.setItem('optly_bk_viewed', true);
} else {
	if (isHome) {
		optimizely.push({
			type: "event",
			eventName: "home_n_impression"
		});
		if (hasBkObject) {
			optimizely.push({
				type: "event",
				eventName: "home_n_has_object"
			});
			if (hasCampaign) {
				optimizely.push({
					type: "event",
					eventName: "home_n_has_value"
				});
			}
		}
	} else {
		optimizely.push({
			type: "event",
			eventName: "article_n_impression"
		});
		if (hasBkObject) {
			optimizely.push({
				type: "event",
				eventName: "article_n_has_object"
			});
			if (hasCampaign) {
				optimizely.push({
					type: "event",
					eventName: "article_n_has_value"
				});
			}
		}
	}
}
}}]}], "name": "Original"}], "audienceIds": null, "changes": null, "id": "9262980192", "integrationSettings": null}], "id": "9267470727", "weightDistributions": null, "name": "[Support] BK Results Availability Detection 11_1", "groupId": null, "commitId": "9265270501", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Page Targeting] TimesMachine Abstract (Article Preview)", "name": "Replace TimesMachine copy on Archive pages", "bucketingStrategy": null, "variations": [{"id": "8563551460", "actions": [{"viewId": "8263601258", "changes": [{"selector": ".timesMachineArticle > p:nth-of-type(2)", "dependencies": [], "attributes": {"style": "font: 14px arial, verdana, serif; color: #000; line-height: 18px;", "html": "New York Times subscribers* enjoy full access to TimesMachine\u2014view over 150 years of New York Times journalism, as it originally appeared. <b>Get The Times from $9.99 a month</b>."}, "type": "attribute", "id": "FE8F76BB-9FC6-4363-B302-C2B8F2496ECA", "css": {}}, {"selector": ".timesMachineArticle > a:nth-of-type(1)", "dependencies": ["FE8F76BB-9FC6-4363-B302-C2B8F2496ECA"], "attributes": {"style": "float: left;\npadding-right: 15px;", "href": "https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html?campaignId=37XWY"}, "type": "attribute", "id": "40774672-33DE-4233-8071-39E224031CE6", "css": {}}, {"selector": ".crosswordSubscribe", "dependencies": ["40774672-33DE-4233-8071-39E224031CE6"], "attributes": {"html": "* Does not include  Crossword subscribers."}, "type": "attribute", "id": "987932A0-E684-47B5-B510-32E8EAB1DA0F", "css": {}}]}], "name": "Replace TimesMachine copy on Archive pages"}], "audienceIds": ["and", "8569001604"], "changes": null, "id": "8566981047", "integrationSettings": null}], "id": "8570243053", "weightDistributions": null, "name": "TimesMachine (Archive) - Force New Offer", "groupId": null, "commitId": "8560053376", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8566981047", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["6252880791", "8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] abxTest=pricing_3_uk_1017_sale,[Geo] North America & UK,[Subscriber Type] Non-Subs,[Whole Meter + Landing Page] lp87JWF", "name": "Scheduler Sale - abTest_pricing_3_uk_1017", "bucketingStrategy": null, "variations": [{"id": "8782417714", "actions": [{"viewId": "8263601258", "changes": [{"dependencies": [], "type": "custom_code", "id": "649C9ED1-FD48-4976-9265-413F6A4158A0", "value": function($){$("html").addClass("abxTest--sale");
}}]}], "name": "Variation #1"}], "audienceIds": ["and", "8806226517", "8785170012", "6992450319", "8744757005"], "changes": null, "id": "8788525765", "integrationSettings": null}], "id": "8516952119", "weightDistributions": null, "name": "Schedule Copy Management for abTests", "groupId": null, "commitId": "9175066041", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8788525765", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Geo] US,[Cookie] abTest does NOT exist", "name": "[Geo] US or [Cookie] abTest does NOT exist", "bucketingStrategy": null, "variations": [{"id": "8470320532", "actions": [{"viewId": "8263601258", "changes": [{"dependencies": [], "type": "custom_code", "id": "CBA5DCC7-3F06-4C22-889C-D723162E14EC", "value": function($){var visitor = optimizely.get('visitor');
	if (visitor.location != undefined && (visitor.custom === undefined || visitor.custom['8442630948'] === undefined && visitor.custom['8442321393'] === undefined)) {
		console.log('evaluating function');
		var geo_macro, geo_micro;
		var country = visitor.location.country;
		var eurozone = ['AD', 'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'GR', 'VA', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'MC', 'NL', 'PL', 'PT', 'RO', 'SM', 'SK', 'SI', 'ES', 'SE', 'CH'];
		if (country === "US") {
			geo_macro = "US";
			switch (visitor.location.region) {
				case 'CA':
					geo_region = 'California';
					break;
				case 'NY':
					geo_region = 'New York';
					break;
			}
		} else {
			geo_macro = "INYT";
			if (country === 'GB') {
				geo_region = 'United Kingdom'
			} else if (country === 'CA') {
				geo_region = 'Canada';
			} else if (country === 'AU') {
				geo_region = 'Australia';
			} else if (country === 'DE') {
				geo_region = 'Germany';
			} else if (country === 'IN') {
				geo_region = 'India';
			} else if (eurozone.indexOf(country) !== -1) {
				geo_region = 'Eurozone';
			}
		}
		window["optimizely"].push({
			type: "user",
			attributes: {
				geo_macro: geo_macro,
				geo_region: geo_region
			}
		});
	};
}}]}], "name": "Variation #1"}], "audienceIds": ["or", "7814230912", "8183220341"], "changes": null, "id": "8458725926", "integrationSettings": null}], "id": "8460385332", "weightDistributions": null, "name": "[Support] Geo Attribute Setting", "groupId": null, "commitId": "8466712104", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8458725926", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] fbpx does NOT exist,[WAT / Krux] All EDU: *all* segments except K12,[Cookie] abTest does NOT exist", "name": "Facebook Event Pixel: EDU", "bucketingStrategy": null, "variations": [{"id": "8463645112", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/68609c3723147a01e68838b045d5ee6aa607f8fc7396b6d243208aea6948e5cc.js", "dependencies": [], "id": "C0608E8B-4D65-483C-95EE-AAC0DECF4398"}]}], "name": "Facebook Event Pixel: EDU"}], "audienceIds": ["and", "8471930223", "6679643984", "8183220341"], "changes": null, "id": "8455666309", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] fbpx does NOT exist,[Cookie] abTest does NOT exist,[Bundle] G", "name": "Facebook Event Pixel: Bundle G (NYT Employees)", "bucketingStrategy": null, "variations": [{"id": "8459949885", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b30f8b7e6376979ca3ab8074c2357da836ba981506a4c64c9cfcc3e299b3763b.js", "dependencies": [], "id": "C0608E8B-4D65-483C-95EE-AAC0DECF4398"}]}], "name": "Facebook Event Pixel: G"}], "audienceIds": ["and", "8471930223", "8183220341", "8300495550"], "changes": null, "id": "8480490032", "integrationSettings": null}], "id": "8461617302", "weightDistributions": null, "name": "Facebook Event Pixels", "groupId": null, "commitId": "8476670997", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8455666309", "endOfRange": null}], [{"entityId": "8480490032", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["4128620616", "4129021553", "4137230627", "6252880791", "8179870018", "8185280121", "8187250053", "8309420148", "8635391841", "8686224588"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Dayparting] Welcome Killset for US Homepage,[Cookie] exo_* does not exist", "name": "US Welcome Ad OFF / Killset | US Geo", "bucketingStrategy": null, "variations": [{"id": "8286643761", "actions": [{"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "id": "88A8C1AD-0C99-4A17-A1A2-A75ADE0F0D16", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "Click \u2022\u2022\u2022 (at the top right)  >  Settings > Dayparting > View to change schedule"}], "audienceIds": ["and", "8183220341", "8340731813", "9030630106"], "changes": null, "id": "8289681526", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Krux] Formers INYT rlijf3y9e,[Geo] WW ex US,[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist,[Geo] NOT India", "name": "Nons | INYT Formers Winback | BAU Nonsale Grey (50% Off) | WW Geo", "bucketingStrategy": null, "variations": [{"id": "8287457955", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/af7f15cfb90dfec8deabd1aa081f36a0fa51374c40fc24cbf08365d476db0567.js", "dependencies": [], "id": "18261F60-AD1C-408B-9CC0-DC5D7A0081D1"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "B4331C2F-7AF3-4390-B45D-4A3040FB61BA"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/408d097259bb29c92eb36bd426e67549e2aa83ac90abda9894ef56a6f55aa7bf.js", "dependencies": [], "id": "874CBC83-079E-4F71-BBB1-259E79004A3D"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/82ff1eee854a8d90eef4fdf5942d7145c4d675e17d5af770c63160c129a11cef.js", "dependencies": [], "id": "7D8DDBD6-9A92-4479-B48C-F68E2ED3E44A"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/5fae6c9c7c53adc3166c046e864b3146053f4030369bf4703bfd764f1eda07db.js", "dependencies": [], "id": "EC92BE94-6FF7-4A2F-8489-173D4E6C2C63"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/187db4e840a99591d04c5432bd3b28e9f73fc2c427555db3cb4d4e6ffcf3ac9e.js", "dependencies": [], "id": "C5F9D3EA-617E-47AC-8C45-035F805D867E"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp8976K.html?campaignId=6LWJY", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "291B59E6-1E66-4C07-829E-B6C1AFDEB759"}]}], "name": "INYT Formers | Grey (50% Off) | WW Geo | 6LWJJ | 6LWJR | 6LWJL | 6LWJY | 6LY86 | 6LY7Y"}], "audienceIds": ["and", "8281592112", "7209740780", "6992450319", "8183220341", "8325672904"], "changes": null, "id": "8294240258", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist,[Geo] India", "name": "Nons | INYT | BAU in Rupees | India only Geo", "bucketingStrategy": null, "variations": [{"id": "8298822064", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/6e06a680c76617a728c78831650bb20263f5945d267449f22cfd3447d2728253.js", "dependencies": [], "id": "A170FAA0-BC74-445D-8DEF-33D4BF79F1A6"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/e85a4848ba3a1893535c57d5fbf0d982514d3e9b929961894b889b7695cfd16d.js", "dependencies": [], "id": "48311EEF-5E1F-49F1-A759-CB184174E785"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/58403cc663ae12fc196b63ed0ee98eb4a87ffcdfe21c86a1ea3bc6f4bee80d56.js", "dependencies": [], "id": "A75D1CE2-9866-4B94-AAAE-221D4142190E"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/485d8e44e911314174f082ad4de7be71fdbc768c1d7cc83ae015b8cb4548ca33.js", "dependencies": [], "id": "35073315-7319-445C-9EE3-CA6B62D575C1"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/e21c4538bedb81f8704b35ca633c3482bcbf40dcdb2ff8246cd1d89679e8571a.js", "dependencies": [], "id": "98D5206F-151C-43BF-AEB7-79347D01FE27"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/d21d90e45d74de6667813f90295ac88c40fa15a2c007da3ff38b08edad7f1de9.js", "dependencies": [], "id": "3E00C3BA-97CA-46FC-9800-FD098A1A3B70"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp8J4QY.html?src=optind&campaignId=4KKUL", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "83ABD426-D9CB-4F42-BA96-181B7266FBB2"}]}], "name": "INYT India 4KKUL"}], "audienceIds": ["and", "6992450319", "8183220341", "8248972263"], "changes": null, "id": "8301150742", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Page Targeting] Learning Network - All Articles/Pages,[Subscriber Type] Non-Subs", "name": "Nons | Learning Network | BAU | Any Geo", "bucketingStrategy": null, "variations": [{"id": "8307222151", "actions": [{"viewId": "8179870018", "changes": [{"src": "/actions/d7f539418ac445a3480bd7fd5d33c30a2f1e2a783a9a90b6513922190d2b216c.js", "dependencies": [], "id": "7F4007A8-A611-4332-A055-8EEEF8681418"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/e1d5230cbcdd7092a39516688043da8d3d94bb7952ba251e45ade1330a43e6d3.js", "dependencies": [], "id": "C5945546-1391-4B3E-A0B0-DCDCD144B219"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/7291a97ae603fa260de8a45767c5d91d71adb7706062e9b21ed8f70d4faf2375.js", "dependencies": [], "id": "A3A75FC8-9EAF-402F-925C-7328EA400C42"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/7a2438e6d84e69cebb389db836c203c5f0a79f9c65a07230b90a0c45d2df0f86.js", "dependencies": [], "id": "A556216C-4339-44C1-8A78-F519EE02143A"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/912d0bf2c321676d6151ac695bfa5109b77f6ecfd35a2d6f369653404209a527.js", "dependencies": [], "id": "F67BB474-9D3F-470A-8567-3F5E5A88BD47"}]}], "name": "Learning Network | 69QLF_64JK8"}], "audienceIds": ["and", "8183220341", "8301992165", "6992450319"], "changes": null, "id": "8306482752", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[WAT] Newsletter - opted out / not opted in,[Subscriber Type] Subs ", "name": "Subs - WAT | Bar1, Anchor | Retention: Newsletter Opt-in | 2017-04-03", "bucketingStrategy": null, "variations": [{"id": "8305267918", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/d8af7613215991d50f46ccf6b9c9a2a3b4489c34b8ab79248822d42a7c8a8479.js", "dependencies": [], "id": "24FA3526-A276-42AA-A7AD-0A40EA45AD4E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/87b4ab8f6a879b3d425165c028a6139c8dbcee89cde12397da05ddcd50afc9b5.js", "dependencies": [], "id": "CB1C62EA-6474-4B29-AA33-FE43041D43AE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-12273 Opt-in \"Keep up w The Times\" - Anchor 1x / yr"}], "audienceIds": ["and", "8183220341", "8310130736", "6696333431"], "changes": null, "id": "8307281703", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist", "name": "USGM | Fallback/Default for Mobile Gateway (no audiences)", "bucketingStrategy": null, "variations": [{"id": "8315323938", "actions": [{"viewId": "4128620616", "changes": []}, {"viewId": "4129021553", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html?src=optfallback&mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "FE75AC76-37DC-430F-A031-40A49E8B34F9"}]}], "name": "Redirect to lp8HYKU"}], "audienceIds": ["or", "8183220341"], "changes": null, "id": "8311228072", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,[AB] LiftOff,Desktop/Laptop only,[Cookie] abTest does NOT exist,[Capability] FTEX,[AB] Liftoff=22_us,[AB] Liftoff 16_oct and 0_oct exclusion,[AB] Liftoff=16_octsale", "name": "abTest_main_ft_meter_liftoff_0417", "bucketingStrategy": null, "variations": [{"id": "8316622267", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/0a2c0ded0bcee563a7c6bd5a483695a2453642223ffefa2220e565d3ab571d6a.js", "dependencies": [], "id": "35293846-DD48-4940-91A4-CEFC637DED5E"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a1bb90e027ed94793c27f0716586d3e99dd2ca827fa7d28afdd758b07ab198d8.js", "dependencies": [], "id": "AC5E38EE-05AD-43B2-B9C2-B04F9E8DCB90"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/89c80a8493a6300bce7a3f760482893035188850b1d1f128aeda8784047ac283.js", "dependencies": [], "id": "21E6EE7C-4F52-4F6B-B041-B545E843F7BB"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/3392d2583479de27b9a0c3dde55cd87c949c48931df6392a4bb6486804824b50.js", "dependencies": [], "id": "C0B9194E-B0CC-4139-BCDB-4954735F125D"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/38bfafa86f79f99e76f27628098439b76fb9e3850076ee58f5a128fa188e3781.js", "dependencies": [], "id": "BD3CC66F-516F-430D-8BFF-838B3022E79E"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/4afb99079dbf13a3cb5aacf3adc5a26d7ba52839c895ef5e9f95322bbfd39121.js", "dependencies": [], "id": "D35C9DD5-6AF6-4B88-8674-153DF1444BAE"}]}], "name": "Variation #1"}], "audienceIds": ["and", "6992450319", "7814230912", "8335242713", "8331680099", "8183220341", ["not", "8315260461"], ["not", "8733151000"], "8802425328", ["not", "8803575893"]], "changes": null, "id": "8314135793", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Subs ,[Capability] FTEX,[Cookie] abTest does NOT exist", "name": "abTest_bar1_intrial_ft_meter_liftoff_0417", "bucketingStrategy": null, "variations": [{"id": "8325430392", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/87265211cff85914b2dce520ca78b2e6503ace6f17d7d1b9d54c7c1352bdf7fc.js", "dependencies": [], "id": "2C4752BD-EFF0-472B-838A-3295C526CDDE"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/d7686d7b3d2238b9fadc167daaeb47d81710c2d7d70f0366be5bdc46c57cdf68.js", "dependencies": [], "id": "8DCFD141-F07A-42E4-8B84-8C10A5B7FBC3"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "6696333431", "8315260461", "8183220341"], "changes": null, "id": "8320950185", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Capability] FTEX,[AB] LiftOff,[AB] Liftoff=22_us", "name": "abTest_posttrial_ft_meter_liftoff_0417", "bucketingStrategy": null, "variations": [{"id": "8320500170", "actions": [{"viewId": "4128620616", "changes": [{"src": "/actions/25168e998f798a4c51c117da85a6187a0f52a67e60d53d41d84db3a5de9f1689.js", "dependencies": [], "id": "11D5ECE0-593F-4A92-A368-0B143722BD4B"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/163b3c13cdb90e4e9955f36050187464c1a8b400b1b83c796cd99604bc572024.js", "dependencies": [], "id": "7B9EA2AA-FA75-47B4-AA80-B44479C7B775"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/5ea5aa5d7621c0c39f08485c665a179f2aa9fe0235d14330135831793ab36562.js", "dependencies": [], "id": "734FF24F-2DA6-4DCA-B47A-4CAE53493C9C"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/a7d447861b4dcc99d6a01f09a1d5bf372a9327bfd5d839191a394ad96954858e.js", "dependencies": [], "id": "614021AF-D9EF-435D-9F96-00ED273A8779"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/444efaae59e9ad34c521944daf836d57af50e7ab85fe7171cc57be8944569174.js", "dependencies": [], "id": "B93D783C-8592-48F4-932C-66102D8A8055"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/924586c3e6cf4128462de776e17435c1c2e92a899a8ce8181f44582530adcb32.js", "dependencies": [], "id": "3D79AE78-F210-4E35-9C34-2E4D5CA6E914"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "6992450319", "8315260461", "8335242713", ["not", "8733151000"]], "changes": null, "id": "8325480191", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] ex mtrab AU Paywall Test ,[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[Geo] Canada Only,[Cookie] abTest does NOT exist", "name": "abTest_canada_pricing_rollout", "bucketingStrategy": null, "variations": [{"id": "8328931922", "actions": [{"viewId": "6252880791", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": [{"src": "/actions/26427a6cdacd98d622ac7924472a63a69da72f9ba32c7c06c4b70b52f6b4bd0b.js", "dependencies": [], "id": "C870ACEB-CB5F-4400-A7EC-CF55ABEE581D"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/e3c9907dc4b9761326d98485edab3d22462200a5ca37f98a0c2148c053e4904c.js", "dependencies": [], "id": "228A994F-1694-4752-9848-9BB1EA16945C"}]}, {"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Variation #1"}], "audienceIds": ["and", "8355611617", "6992450319", "8413422098", "8329145104", "8183220341"], "changes": null, "id": "8325906517", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[page] - Lift Off Project LPs (lp8W3WH, lp8QXR6, lp8U8QY, lp8F7Q8),[Subscriber Type] Non-Subs,[Subscriber Type] Non-Subs Alt", "name": "abTest_lp_ft_meter_liftoff_0417", "bucketingStrategy": null, "variations": [{"id": "8334330510", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/e40ec265901c611114451260f96e64fa97c2ff58d1fd03d0e257728a0826b463.js", "dependencies": [], "id": "EC0B3DE1-9C16-4898-9C00-F722E2D45191"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "8316027593", "6992450319", "8356764950"], "changes": null, "id": "8327971049", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Dayparting] INYT Welcome Killset,[Cookie] exo_* does not exist", "name": "Intl. Welcome Ad OFF  / Killset | WW Geo", "bucketingStrategy": null, "variations": [{"id": "8316935751", "actions": [{"viewId": "8179870018", "changes": [{"name": "Killset", "config": {"placement_name": "Welcome Ad"}, "id": "88A8C1AD-0C99-4A17-A1A2-A75ADE0F0D16", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "Click \u2022\u2022\u2022 (at the top right)  >  Settings > Dayparting > View to change schedule"}], "audienceIds": ["and", "8183220341", "8331673235", "9030630106"], "changes": null, "id": "8328272359", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[WAT] HD_Grace,[Dayparting] HD Grace,[Cookie] GraceViewed does not exist,[Subscriber Type] Subs ,[Cookie] abTest does NOT exist", "name": "Subs | Update Payment Info | HD In-grace - WAT segment | Interstitlals (Welcome Ad, Anchored Ad) | 2017-05-16 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8345314011", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/ceeb4cbf765c1ea8c08118c25253c03c966b661636ddf073457fa43ba65c6faa.js", "dependencies": [], "id": "F5915F24-4135-46C5-867E-5B50A25C8018"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/c728add4c0c6fd52b5527bdbf0431595fce48a8b82056758d982090f7473450f.js", "dependencies": [], "id": "65B1E198-CF0B-48C4-BD3D-8C3B50B3DC8A"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Subs | HD In-grace | Welcome, Anchored | 6QKLR"}], "audienceIds": ["and", "7877803306", "8350622915", "8354152464", "6696333431", "8183220341"], "changes": null, "id": "8349521001", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[WAT] HD_Grace,[Dayparting] HD Grace,[Subscriber Type] Subs ,[Cookie] abTest does NOT exist", "name": "Subs | Update Payment Info | HD In-grace - WAT segment | Bar1 only - no cookie check | 2017-05-16 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8347071348", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/3c14b7cced73b1584b290b729724025f49e59c9906442892f9d9e8944028a82b.js", "dependencies": [], "id": "8B9162A3-A2E8-41D1-A8B3-E3B95B42DED2"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Subs | HD In-grace | Bar1 | 6QKLW"}], "audienceIds": ["and", "7877803306", "8350622915", "6696333431", "8183220341"], "changes": null, "id": "8350705198", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] B2B w ADBLOCK flag,[Cookie] abTest does NOT exist", "name": "Killset: B2B Users requesting ADBLOCK", "bucketingStrategy": null, "variations": [{"id": "8356674833", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/19dc20fd0bf94c3c8426aed1e1c30baf739e7691e3870e28cf2c50927ea480fb.js", "dependencies": [], "id": "44E5FD21-E612-4419-A826-5E60649D0AC0"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/38a08b39ded1816ebb76f26f202543d2345853dc06c0dc1801041a797ccf95ce.js", "dependencies": [], "id": "E2CCFEA7-3E4E-48E9-B52B-B23552366EF6"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/3bf3ddcb7717095148370e52c21cf58e1eaec6f16ce6aa9b8e5b36e9d04fab1a.js", "dependencies": [], "id": "A03BDD55-8288-456B-889F-EF945CD2DD62"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/f3116b66e99720292de965a108d5814f5112ad883df575c4db4dc70bc3b9bc6e.js", "dependencies": [], "id": "88EC4AC0-2BD2-448F-9D5D-02A35A171848"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/750139890c0bb35e32ec39ad3bedfdb70f82fa315331f0c0aa6438adca955f7b.js", "dependencies": [], "id": "872E74E2-498F-4D93-9866-DC79EEB0BE75"}]}, {"viewId": "8187250053", "changes": []}], "name": "Killset: B2B Corp Site Licenses"}], "audienceIds": ["and", "8380850399", "8183220341"], "changes": null, "id": "8352043770", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Bundle] Digi Subs in Grace,[Cookie] abTest does NOT exist", "name": "Subs | Update Payment Info | Digi In-grace | Bar1 only - no cookie check | 2017-05-16 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8390621064", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/1250ca9a2c327960a5ac38915d1b587f91f94ee4b5953457ed1a60aa482f420a.js", "dependencies": [], "id": "8B9162A3-A2E8-41D1-A8B3-E3B95B42DED2"}]}, {"viewId": "8309420148", "changes": [{"src": "/actions/5b89533e04a8ae0b786125c30d0414ef5b17f11e87cf112dbfbb1cbcc4845f1d.js", "dependencies": [], "id": "D1049982-9AE1-4062-A0F4-787D1254FD27"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/3e779fb3d62582d9810086b9104574919cc24a4a48db7594abb6e5608bd3651a.js", "dependencies": [], "id": "469B3B4A-01F4-416E-83DC-AB9D26F1DDA2"}]}], "name": "Subs | Digi In-grace | Bar1 | 666R8"}], "audienceIds": ["and", "8379916476", "8183220341"], "changes": null, "id": "8376098187", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Bundle] Digi Subs in Grace,[Cookie] GraceViewed does not exist,[Cookie] abTest does NOT exist", "name": "Subs | Update Payment Info | Digi In-grace | Interstitlals (Welcome Ad, Anchored Ad) | 2017-05-16 \u2013 ongoing", "bucketingStrategy": null, "variations": [{"id": "8388432711", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/d8cee219db9dff3e7f429081066e85e10be0a87b76ba7fe09bf5b540b122a719.js", "dependencies": [], "id": "C8EA3E99-0E0B-4A00-AA69-C12829DFDFE1"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/a74bb5ab79348bfb156f4aca8b0a954fc68199093c028e6aac239520c4590adc.js", "dependencies": [], "id": "791732C1-BB4D-4694-912B-B74071A90CAC"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "Subs | Digi In-grace | Welcome, Anchored | 666LW"}], "audienceIds": ["and", "8379916476", "8354152464", "8183220341"], "changes": null, "id": "8385456763", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8400015286", "endOfRange": 5000}, {"entityId": "8423451480", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist,[Krux] All Formers (Digi and HD)", "name": "Nons | Formers Winback | BAU Nonsale BOC/Journalists | US Geo | 2017-06-07", "bucketingStrategy": null, "variations": [{"id": "8400015286", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/65f6d6bc4b17ee17772cebd502e1152617d8f5369011b35779ac301890637b3f.js", "dependencies": [], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/7c951c239cea210bfc4e0fbbe915a45b341a33bb25a59e090221efefc2122b32.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp874QY.html?campaignId=6UQFW", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/c35336d1c365da5995b4b9f8055e7805d97fac558dae6c3154a53f1a0d183f97.js", "dependencies": [], "id": "37DBF9B0-988B-4AD4-8AAF-1642A82FBD44"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/c5b8a5cf14e234bc784f4fae3042eb2df912b314d4754d21c0de2aec7cd0c0ed.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/968c43a0726dd3955bd19fd3e4a1d6bc46e6fe231c225f974c47ebaa6ed94cf7.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/0b56613aa75e39c193ba0cc7038f692ef6be82bf618881691a0fc87d379764af.js", "dependencies": [], "id": "51E2A707-2BE3-496A-B27B-1DF1BBB36CDE"}]}], "name": "Journalists - 6UQ8L 6UQ8R 6UQ8W 6UQ8Y 6UQ96 6UQ98 6UQ9F 6UQ9J 6UQ9L 6UQHF 6UQ9R 6UQ9W 6UQ9Y 6UQF6 6UQF8 6UQFJ 6UQFL 6UQFR 6UQFW"}, {"id": "8423451480", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/bb49cf8fb844ad16089f017a16bc8d6a00a06f1c33801655ac5f26d810426a02.js", "dependencies": [], "id": "EE6B197A-DF68-45DA-B6F5-905AC89DF3EB"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/42e3ee7005279a2f7d736cd5f6347ad057047cedd262b9e984698038a57cd9ff.js", "dependencies": [], "id": "39BC1F84-3555-4EE2-8D5B-7BD4D99B9177"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/b4b783094aa952aa5c83b607a81b41e0b580c0b39a79ee3c81567f2f53e26a77.js", "dependencies": [], "id": "54E854DE-E6CC-461B-A140-11D21DC063B4"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/a3b83c03b67dab00ae566afa650aead1403d807bee031d3987ed2ed26c2396fe.js", "dependencies": [], "id": "ADC10B89-4EFB-4EC8-A8DC-A9F13A33C291"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/e1cf794c765ccf6dc20a4e9524fc1fd0f22ff14a482a6bda9c2db78a55acf335.js", "dependencies": [], "id": "100BECD4-DEB6-48C2-91D3-10ECFC18A8E7"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/ca417f2d782dc409818bb947a98c322b62425bab22fecc786b97e9da1ed8c5c5.js", "dependencies": [], "id": "BE43A842-F59E-443A-9B84-BC527E2D4554"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp867LW.html?campaignId=6UQ8J", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "4F7EEDAB-0B48-4C4B-B3F4-C6F14CCDEF14"}]}], "name": "BoC 40% off for one year -6UQ68 | 6UQ6F | 6UQ8J"}], "audienceIds": ["and", "7814230912", "6992450319", "8183220341", "8421381989"], "changes": null, "id": "8413171281", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[cookie] exo_nonsub_lowprop_1117", "name": "USGM | Fallback/Default for Desktop | Growl | Gateway", "bucketingStrategy": null, "variations": [{"id": "8441710363", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/6407c6480a4d50b4ef8c344ab4fb4adbcd29826943c5520f05526878767f3645.js", "dependencies": [], "id": "3B1F776E-EF16-4D6C-A1AD-2A7C8EB16BD9"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": [{"src": "/actions/dbd0ad64c9b179911f7883bdf677d8b90b77ba1836781a1a822c1a879c422458.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}], "name": "One Subscription. Endless Discovery. BoC - growl, gateway"}], "audienceIds": ["and", "7814230912", "6992450319", "8405565879"], "changes": null, "id": "8447590384", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Cookie] abTest=anchortest", "name": "anchor TESTING", "bucketingStrategy": null, "variations": [{"id": "8455786592", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/6baef23d94cf1a919a1f13326f3f4e17c715d6ac317ff9cf9e8a97fc6565551c.js", "dependencies": [], "id": "98D3C75F-E31B-4BA1-B560-A950D013DC30"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/544f048d69b9704e880d2a09868150ea195d8c47ac0fe3dd0377e71b95884fb5.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/Multiproduct/lp874QY.html?campaignId=6UQFW", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "9E1E131B-91D3-4A5E-9438-4BE6D0AE652A"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/1ea1414cee79e1600fd48a65d23bc20a958a6ac506be004219d9b2bbf04a69ec.js", "dependencies": [], "id": "37DBF9B0-988B-4AD4-8AAF-1642A82FBD44"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a5a7a7533418260217b0ad33e66c951d6ed04a0e61d50687b8cbd22d7c0894b6.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/4ed697ee9ac72fefb14c6396a3113c7afdb0aa0fb8b459209f93f29f854fadee.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/fc25cec4c3ba58f86eaf34bd7a1314ead4075b598c3f6262227b26529ecb11a2.js", "dependencies": [], "id": "51E2A707-2BE3-496A-B27B-1DF1BBB36CDE"}]}], "name": "Journalists - 6UQ8L 6UQ8R 6UQ8W 6UQ8Y 6UQ96 6UQ98 6UQ9F 6UQ9J 6UQ9L 6UQHF 6UQ9R 6UQ9W 6UQ9Y 6UQF6 6UQF8 6UQFJ 6UQFL 6UQFR 6UQFW"}], "audienceIds": ["and", "7814230912", "6992450319", "8396871406"], "changes": null, "id": "8457897738", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Bundle] ADA_CR or MAX_ADA_CR", "name": "Subs | Welcome Ad | Crossword | ADA_CR, MAX_ADA_CR only | 2017-08-23 - ongoing", "bucketingStrategy": null, "variations": [{"id": "8508466572", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": [{"src": "/actions/f938717acc16d27b90d932bedba69b776a87c96df5dc19ed9412a9c2fe674eb9.js", "dependencies": [], "id": "9C271FB4-CC66-4CC4-A337-00C99526DC55"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-16342 Crossword Welcome Ad | 1x / lifetime"}], "audienceIds": ["and", "8183220341", "8612260110"], "changes": null, "id": "8512411082", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest = keith_testing_scaffold,[Geo] US,[Subscriber Type] Non-Subs,Exclude IE 11", "name": "keith_testing_scaffold", "bucketingStrategy": null, "variations": [{"id": "8550653286", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/543ec1d54c425c81673b89fefda3fe05d9665556c6ff6bf0e00f06ba966d5efb.js", "dependencies": [], "id": "66DACFE4-5AA4-4EFF-8C7F-37BA7D4F814B"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/07e3b3727ca27e34ba0a8cc2c205af6efa6690854c98998c8fbcf5667b724a2b.js", "dependencies": [], "id": "00D8BCD5-C4E7-4EB8-83AD-99D868DF4E8D"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/2d26ff8f94c642f0566ad1c64a44fefbd9a37a9220e33af372bf0a614fdc622c.js", "dependencies": [], "id": "7A4EE910-CDE8-41AE-84CE-F669096E6A81"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/aa7c26a9ef4dc91aa20bd9714e3e42ec89035c5ac0dcf59bb3f799916ecd57dd.js", "dependencies": [], "id": "9068428E-4E7A-416F-8CF1-47359D9B75E5"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/c2db47774fa88650523306e4a53f082c9980b5661f57b750b3e928db06c4817a.js", "dependencies": [], "id": "517C7C35-44E7-4B8B-ADE5-7629D28A860C"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8544714400", "7814230912", "6992450319", "8627862282"], "changes": null, "id": "8544813328", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Platform / OS] All iOS", "name": "Welcome Ad OFF / Killset | iOS", "bucketingStrategy": null, "variations": [{"id": "8640420992", "actions": [{"viewId": "8179870018", "changes": [{"src": "/actions/824570bc6d04f375b4c14d0440b88e1c49bc3aaa8e7670901a186c406aaefa1f.js", "dependencies": [], "id": "88A8C1AD-0C99-4A17-A1A2-A75ADE0F0D16"}]}], "name": "Killset for all iOS (to address iPads)"}], "audienceIds": ["and", "8183220341", "8634850445"], "changes": null, "id": "8633980644", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs Alt,[Subscriber Type] Non-Subs,[METER] = 2,Desktop/Laptop only,[Geo] California,[Cookie] abTest does NOT exist,[Krux] California Today newsletter sign-uppers", "name": "Nons | Growl | California Today CA Newsletter | California Geo | 2017-09", "bucketingStrategy": null, "variations": [{"id": "8632461366", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/327ff7d722c2e9c16e4b3d348a34bc36cacfcd770c0c19e2473ee4aec25a3d5d.js", "dependencies": [], "id": "81A5AA4F-3E67-4C44-BD2C-BF1517508B60"}]}], "name": "Variation #1"}], "audienceIds": ["and", "8356764950", "6992450319", "8637181835", "8331680099", "8660840279", "8183220341", ["not", "8629943298"]], "changes": null, "id": "8634300597", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[Platform / OS] All iOS,[Page Targeting] Slideshows", "name": "Interstitial Killset for Slideshows on iOS (iPad)", "bucketingStrategy": null, "variations": [{"id": "8677110116", "actions": [{"viewId": "8179870018", "changes": []}, {"viewId": "4137230627", "changes": [{"src": "/actions/66fb89b60fb6b2ee01a9f35e813bf5170b0e77ef4a6b127f86accd76fef315e8.js", "dependencies": [], "id": "AACFD2AF-5501-49FB-AB9F-BDA75E4C8709"}]}], "name": "Killset for all iOS (to address iPads)"}], "audienceIds": ["and", "8183220341", "8634850445", "8684280152"], "changes": null, "id": "8635195452", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[WAT / Krux] All EDU: *all* segments except K12,[Cookie] abTest does NOT exist,[Cookie] exo_* does not exist", "name": "Nons | EDU EDU_DOM | BAU | COLLEGE: What Will Today Teach You | 2017-09-27", "bucketingStrategy": null, "variations": [{"id": "8749791424", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/030844495df468dced397646e3b3cbb1cc7b03890f14635f96ad98878c6a3096.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/bf265ab073fcd4a85211e73429b9d7dac9c7b3610621599dc7f8d76c2439c1f0.js", "dependencies": [], "id": "00B1E72A-34BF-49F9-9B42-0F761A4A3844"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/c20c4ab4b0d837b72eb2f672c1369f93ba897ca95784bc718b8a1243c7dcd7d5.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/be8df5e6f1dc75bbdf8dea419ed546394a45c9a941f5fd33a2a0362bc8909c8d.js", "dependencies": [], "id": "7D74B9B9-305C-4FC6-876E-40396D565B46"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/87c8a419cac00c6485670f5b8362e074ee666350e52c5bef1b806463c40b9d99.js", "dependencies": [], "id": "33319074-9357-42CE-AFD4-7E120190FE5D"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/edu/lp8LQFK.html?mktgrfr=gw_mob&campaignId=6XU78", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5"}]}], "name": "blue bg with iphone and ipad"}], "audienceIds": ["and", "7814230912", "6992450319", "6679643984", "8183220341", "9030630106"], "changes": null, "id": "8736082146", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT] K12,[Cookie] abTest does NOT exist,[Cookie] exo_* does not exist", "name": "Nons | EDU K12 | BAU: What Will Today Teach You | 2017-09-27", "bucketingStrategy": null, "variations": [{"id": "8732704638", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/8283bbb53808994fa517dedd07519b4716a7401baa02f4d553b4a10253c870c1.js", "dependencies": [], "id": "5E19E592-D32D-4EF9-9492-8EB0B65E913E"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/d4a8ef7d3f3739f8dc825608ffb4038bee825e337549faa7cad1d555869540fa.js", "dependencies": [], "id": "5E51A8B0-C693-485B-A87C-C465844673C1"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/49f6b0ce9ffeaaee0002701b8f00bf5755e935711108925f6f4bbeaaec701ee4.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/4d060bc34b432a1170b3499782b14feba46fc14a764a4ebea32e03647b24a929.js", "dependencies": [], "id": "53B02125-D175-4486-9B61-158F6941851F"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/14bdd25a5b7282b1067ad61aff4a2dbc08e5be94ee157d2d66b6883206ed7074.js", "dependencies": [], "id": "ED8EFCC2-276F-46EC-9B4D-A7D250497611"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/edu/lp8RU8U.html?mktgrfr=gw_mob&campaignId=6Y498", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5"}]}], "name": "CRS-17356 blue bg with iphone and ipad"}], "audienceIds": ["and", "6992450319", "7857642821", "8183220341", "9030630106"], "changes": null, "id": "8737255807", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8787640374", "endOfRange": 3333}, {"entityId": "8783120603", "endOfRange": 6666}, {"entityId": "8786990337", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Non-Subs,[Whole Meter + Landing Page] lp87JWF,[Geo] North America & UK,{Cookie] abTest = pricing_3_uk_1017", "name": "abTest_pricing_3_uk_1017", "bucketingStrategy": null, "variations": [{"id": "8787640374", "actions": [{"viewId": "6252880791", "changes": [{"dependencies": [], "type": "custom_code", "id": "F0909659-5E7A-42E8-B201-F681FE6B356D", "value": function($){document.domain = 'www.stg.nytimes.com';
console.log('control');
}}, {"src": "/actions/4f45cdd61c4cffc95e36f6bce23bde48c418bb01829b9ea6ebbd975c6b3225e6.js", "dependencies": [], "id": "2E8390F5-90AA-4401-9E51-CA1A276F3DD3"}]}, {"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "BED9935A-19E7-41CF-A1AB-9AB5302A40C0", "value": function($){document.domain = 'www.stg.nytimes.com';
console.log('control');
}}, {"src": "/actions/2977c1a1d49869bc2fb67ee8ccb855fb4d02435a220c49d42483bce168d082c6.js", "dependencies": [], "id": "68B2B746-3866-4533-BC04-33BFD069C09E"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/545490370cc46d19668e2d1e5b015ee88385ebde087eea0d9d0a34d8bfe48246.js", "dependencies": [], "id": "670FA155-C6CD-42AA-A148-2BE8B07AEB88"}]}], "name": "Control"}, {"id": "8783120603", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/daa690ec3dc220d099fe971bece084b81480386c7f56fef104f8f5b06f2eeae0.js", "dependencies": [], "id": "F220E51D-28D7-4B0F-B045-0A4FEDB4B265"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/4961f5b8f3a3c6a9dca049e32e933144b4b36d1218da4ad40ea66417a3511c7d.js", "dependencies": [], "id": "2CC71E0A-9095-4560-B54C-645E214580B9"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/d743be2a2d6245aabe2eb131e6dacd20ac11c901b9fb46877cc014d7065dddc7.js", "dependencies": [], "id": "840FB6CE-603A-42B2-A583-60FE21761D1C"}]}], "name": "Variation #1"}, {"id": "8786990337", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/18ef11123e0251554fcb11c4226c77f7cebbc68c97497434968eb91dbb3f1ed7.js", "dependencies": [], "id": "B717A0DF-77AB-45A2-AA44-EB5A5B82C532"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/f1009c0f326a404e26f13b4149dcc6d3793c8d69b6d67eecbeaea6f138dd8dc1.js", "dependencies": [], "id": "E27F60FD-CCBA-467F-9C7E-1F264D4750A6"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/ff55e0f51b90185c0e5338600623c8ff6207492cc9dd933d949777a865a855b3.js", "dependencies": [], "id": "FB85B770-C034-48FE-AAE3-AAD1B0B08E8F"}]}], "name": "Variation #2"}], "audienceIds": ["and", "6992450319", "8744757005", "8785170012", "8781686404"], "changes": null, "id": "8782800535", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,abTest=scaffoldtest", "name": "Nons | USGM | Scaffold Test | 2017-09-25 | TESTING DH", "bucketingStrategy": null, "variations": [{"id": "8785814979", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/7a7f576129d44e26c2365c23c2f1009df7a3436719a7d78028b22fda6792477b.js", "dependencies": [], "id": "DFA5C35C-6FEE-417D-8D02-8E04D8FD3EBF"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/332cf3edabdbed0a0778b4c393900cc1f26fd97ac7ad1157df1f63846ffe883c.js", "dependencies": [], "id": "12329064-CEC3-4445-BE77-5AC07986DEAF"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8J36Y.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "2AA18DFA-E865-40C9-B660-40AF5C8D820D"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/2ed882e1a68ea32b3b03bdee5cc4288017f340e7d770d49613ce9287b8f2a6b7.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/cd7e5017e05f8ea27d0b193058fd01daeb084dca798756c2d8caaa98ccfd9bb3.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/c9e82282aa4894c79e5e9304689edb401b189d563eca15c54d4ce8f20742bf4b.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "scaffold test"}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "8327223145"], "changes": null, "id": "8786394591", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Subs ,abTest_RF=true", "name": "Subs | Anchor | Staging  | 2017-09-29 Testing", "bucketingStrategy": null, "variations": [{"id": "8780887351", "actions": [{"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/a383f742c35e707516841215e1cdf355862fe755819a615e2944503afb564cb0.js", "dependencies": [], "id": "2969BC57-4CD9-4AFA-92EA-E31AB3C840A2"}]}], "name": "variation #1"}], "audienceIds": ["and", "6696333431", "8903330659"], "changes": null, "id": "8787538787", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,Desktop/Laptop only,[Subscriber Type] Non-Subs,[AB] Liftoff=16_octsale,[Meter] [Cookie] mtrab = \"liftoff=16_octsale\" or Meter < 2,[Cookie] abTest does NOT exist", "name": "abTest_ft_meter_liftoff_v16_1017", "bucketingStrategy": null, "variations": [{"id": "8781008394", "actions": [{"viewId": "8179870018", "changes": [{"src": "/actions/86311aa8bb680f0b31d999d0a58c0ba13ad4b3267983ea565c0a8721caf8993f.js", "dependencies": [], "id": "90F1E547-C0A4-4C6C-9023-E6F4555D44D0"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/957b58a51072174a644b67aa7d7e1069ffc8ec0daba5645692755c7822541d84.js", "dependencies": [], "id": "3B7A8475-E2C0-4987-A13D-8018EBF33339"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/b5e541672b2859847263578fd3998c273636812eafc14d0ba01b3c31b85657c0.js", "dependencies": [], "id": "ABCB9E6B-4363-4D86-8A58-46A6C84F11B1"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/d153d6693f2edd60138fb552b3c05e9aff0f6c45c0071edbfe64710020b17f92.js", "dependencies": [], "id": "E4CCAF52-1152-4574-9EC5-B48851EA040C"}]}, {"viewId": "4128620616", "changes": [{"src": "/actions/62a20c1db581ac0acf69d4c1046ce973cadfd1a07936f71037041f4921db3ed3.js", "dependencies": [], "id": "589284F8-5F8C-4E39-B9ED-659B3FCB6240"}]}, {"viewId": "8635391841", "changes": [{"name": "Homepage Subscription Promo", "config": {"cta_2": "", "cta_3": "", "cta_1": "", "full_html": "<div></div>", "nytID": "FILL_IN", "external_js": "", "selector": "#g-graphic.sub-promo-click", "inline_js": "", "css": ""}, "id": "44F1CB48-58DF-4006-AEB1-5B6BCC2C6763", "dependencies": [], "type": "widget", "widget_id": "8644680304"}]}, {"viewId": "8686224588", "changes": [{"name": "Article Subscription Promo", "config": {"cta_2": "", "cta_3": "", "cta_1": "", "insert": "after", "full_html": "<div></div>", "nytID": "FILL_IN", "external_js": "", "selector": "#related-combined-coverage", "inline_js": "", "css": ""}, "id": "D89ECD2C-3576-4D0B-87D0-E701BEFEF1AB", "dependencies": [], "type": "widget", "widget_id": "8734521774"}]}], "name": "Variation #1"}], "audienceIds": ["and", "7814230912", "8331680099", "6992450319", "8803575893", "8786488391", "8183220341"], "changes": null, "id": "8790163801", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8801831749", "endOfRange": 5000}, {"entityId": "8783806675", "endOfRange": 6670}, {"entityId": "8784914401", "endOfRange": 8340}, {"entityId": "8787268223", "endOfRange": 10000}], "audienceName": "[Cookie] abTest does NOT exist,[Subscriber Type] Subs ,[Geo] WW ex US", "name": "Subs | All Bar1s: Crossword, Retention | WW Geo - 2017-09-22", "bucketingStrategy": "impression", "variations": [{"id": "8801831749", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/c2a137ea04c75955aa9cff56b57470fc1eb9fc1d09a03343886c2e0855de7d2f.js", "dependencies": [], "id": "990AB303-9B21-4172-8859-34F0FE74AE17"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-13012: Crossword - to Subscription LP"}, {"id": "8783806675", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/16cddad83fb119351c545a7f7249fb43e5f37f0ae9f148cbbff687fb76c689af.js", "dependencies": [], "id": "9D104570-AD9F-46C0-8298-81352119446D"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-15969 Retention: Newsletters"}, {"id": "8784914401", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "4129021553", "changes": [{"src": "/actions/d1574d8a5e3604ee5479fc420e4c3daaa2f52fab907069e283ec162cf06a2328.js", "dependencies": [], "id": "E8E0471C-B05E-404A-92D8-00A1EF8EEA8D"}]}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "8185280121", "changes": []}], "name": "CRS-15969 Retention: Saved Stories"}, {"id": "8787268223", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/e8284dd350b1d215404bb022c5c9a2d563f94c036e91c3e9677fc7283a39d21d.js", "dependencies": [], "id": "1F3F0980-2873-4864-902C-4338AA8CC1DA"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8185280121", "changes": []}, {"viewId": "4128620616", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8187250053", "changes": []}], "name": "CRS-15969 Retention: Pers Recommendations"}], "audienceIds": ["and", "8183220341", "6696333431", "7209740780"], "changes": null, "id": "8797442044", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] exo_zack_test=true", "name": "abTest random test exo_zack_test", "bucketingStrategy": null, "variations": [{"id": "8890013071", "actions": [{"viewId": "4137230627", "changes": [{"dependencies": [], "type": "custom_code", "id": "1A9BA4E7-6DB2-4A6A-B6BA-1FEDA7A080AB", "value": function($){console.log('this is a test');
}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8893613813"], "changes": null, "id": "8904941324", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT / Krux] All EDU: *all* segments except K12,[Cookie] abTest does NOT exist,[Geo] WW ex US,[Cookie] exo_* does not exist,Exclude IE 11", "name": "Nons | EDU EDU_INTL | BAU: What Will Today Teach You | 2017-09-27", "bucketingStrategy": null, "variations": [{"id": "8785481798", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/d271da4558436cd96b880a77f6b1104e4bc186d553fcd891a9e92bc38ebe6f71.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/7e169130ed98c0a18c7f6b0b9d678d7ccbfaaf6a436b4599566ff128fbc1db71.js", "dependencies": [], "id": "00B1E72A-34BF-49F9-9B42-0F761A4A3844"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/c9a0cdf01ec5165819bdae2966c2b2f9fabb6ca5ebf763a266017b6a575414c9.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/3bab9db63649e925c5e3232e219e763a1845007cb57fa76d03eefa3a9e3d08c3.js", "dependencies": [], "id": "7D74B9B9-305C-4FC6-876E-40396D565B46"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/426b81ac43b017772e6c591d71d103ae644708b4ced5e46fb74968262eba2963.js", "dependencies": [], "id": "33319074-9357-42CE-AFD4-7E120190FE5D"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/edu/lp8LXQ6.html?mktgrfr=gw_mob&campaignId=6Y46F", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "blue bg with iphone and ipad"}], "audienceIds": ["and", "6992450319", "6679643984", "8183220341", "7209740780", "9030630106", "8627862282"], "changes": null, "id": "8788731175", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[Cookie] exo_nons_inyt_saleOctober_1017=true,[Geo] US", "name": "Nons | INYT | October Sale - GROWL | 2017-10-13 | TESTING RTF exo_nons_inyt_saleOctober_1017", "bucketingStrategy": null, "variations": [{"id": "9013872629", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/447810c1e3b5d3fab81bebb3d4197fdab159b06077940cf9f2cc6ac05e42f94b.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "60% off, Trump \"Politics\". Orange bg, red copy"}], "audienceIds": ["and", "6992450319", "9013761942", "7814230912"], "changes": null, "id": "9028072929", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest_adaptive_articles = true", "name": "HP Subs Promo POC", "bucketingStrategy": null, "variations": [{"id": "8639343468", "actions": [{"viewId": "8635391841", "changes": [{"src": "/actions/35ec4dea3681c11fb703a385ced4b60c5f33e2cef1c46ef9f42cc570c8ce43e2.js", "dependencies": [], "id": "2C981384-3E99-48C8-A3FE-EBB81D8EB420"}]}], "name": "Variation #1"}], "audienceIds": ["or", "8631751391"], "changes": null, "id": "8633622643", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] TfpViewed does not exist,[Cookie] abTest does NOT exist,[Subscriber Type] Subs ,[Cookie] exo_* does not exist,[WAT] AnnualOffer_INTL_Oct2017 OR AnnualOffer_USGM_Oct2017 (TFP)", "name": "Subs | WAT - USGM, INYT  | TFP Oct Annual Offer Interstitials | 2017-10-26 - 2017-11-09", "bucketingStrategy": null, "variations": [{"id": "9104851444", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"src": "/actions/5c0152b2f77726725b9dd510ad16654fc076d81eda087098f8894cdc9fab6a25.js", "dependencies": [], "id": "F5915F24-4135-46C5-867E-5B50A25C8018"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/0e12cab617e4fb07bc2c97f3f9df639f04c6278ce19b2abe8596c5ec5ebb21eb.js", "dependencies": [], "id": "65B1E198-CF0B-48C4-BD3D-8C3B50B3DC8A"}]}, {"viewId": "4129021553", "changes": []}, {"viewId": "8309420148", "changes": [{"src": "/actions/5b89533e04a8ae0b786125c30d0414ef5b17f11e87cf112dbfbb1cbcc4845f1d.js", "dependencies": [], "id": "D1049982-9AE1-4062-A0F4-787D1254FD27"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/3e779fb3d62582d9810086b9104574919cc24a4a48db7594abb6e5608bd3651a.js", "dependencies": [], "id": "469B3B4A-01F4-416E-83DC-AB9D26F1DDA2"}]}], "name": "MARO-191 - TFP Retention | Welcome, Anchor | 25% off Annual - Live Chat Now"}], "audienceIds": ["and", "8555744517", "8183220341", "6696333431", "9030630106", "9106755623"], "changes": null, "id": "9104950234", "integrationSettings": null}, {"weightDistributions": [{"entityId": "9114610410", "endOfRange": 3333}, {"entityId": "9106110627", "endOfRange": 6666}, {"entityId": "9116130636", "endOfRange": 10000}], "audienceName": "[Cookie] exo_pricing_us_1117=true,[Geo] US,[Subscriber Type] Non-Subs", "name": "exo_pricing_us_1117", "bucketingStrategy": null, "variations": [{"id": "9114610410", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8179870018", "changes": [{"src": "/actions/46a02d301882aa8d41b35c3453d451a068dd6dec6560b9b142189426cf13d6b2.js", "dependencies": [], "id": "D2DA4CEB-A05B-4D65-BE69-981EAE43ABF5"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/bf2a36c5ad18d9df4b07d2a7eca6769d340c0ba5b1aaa27375c3a0eb56aca678.js", "dependencies": [], "id": "CC986759-A6AF-45C2-AD1D-54ECCD8BB59B"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/63dc13d96873875d97f58aa23f0505b39c241348a0ff2ce015c3c26129aa1fa5.js", "dependencies": [], "id": "F698D443-E623-4A8A-8B87-2006D6D3C16E"}]}], "name": "Control"}, {"id": "9106110627", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8179870018", "changes": [{"src": "/actions/13b0b823d08699d7dd53554a71d21c7aadb80b51a5538710bd0542e25ddaf42f.js", "dependencies": [], "id": "BDF4E720-AC3C-4119-8E3E-CBE1C898E1E3"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/b72104c0390a3b4a36a3191da79fb75765ce9d56b9f065ebad88c826eeebf56e.js", "dependencies": [], "id": "14E0A4E1-8407-4158-B300-4FC942F8B865"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/569d15500ddd2cc3bd314a3ed2d82b83e0195572dd83ed0d07b2d2750eb74bad.js", "dependencies": [], "id": "1316926C-3184-4464-8800-AF863D8139A8"}]}], "name": "Variation #1"}, {"id": "9116130636", "actions": [{"viewId": "4137230627", "changes": []}, {"viewId": "8179870018", "changes": [{"src": "/actions/706030710d6dfd6492a54327525f144631ad9e9614b39b832153c4ba3d8df322.js", "dependencies": [], "id": "A9D5AF4C-04ED-42B4-A40D-538132D09654"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/923a858301d41d4e611b953b7a1653d55eaaec007fb494f1b26503e56da267c3.js", "dependencies": [], "id": "B384F80E-E89C-44F8-B5D5-58E298E148DD"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/6a100c96ba1cb3f63540220c9087334d1fa5bd213bac6132e63eb48affd223f6.js", "dependencies": [], "id": "21A890EC-F343-44D6-AE83-EBAC27B85647"}]}], "name": "Variation #2"}], "audienceIds": ["and", "9111140628", "7814230912", "6992450319"], "changes": null, "id": "9105930856", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[cookie] exo_nons_usgm_bauAugust_1117_DH", "name": "Nons | USGM | August BAU (iframe) | 2017-10-30 | TESTING", "bucketingStrategy": null, "variations": [{"id": "9186584222", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/06291450b0409038c84d5ac77fdd55e39b6478da120a02ae83c8255796970c50.js", "dependencies": [], "id": "DFA5C35C-6FEE-417D-8D02-8E04D8FD3EBF"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/161101c9abfd199f1efe6af5bcd63d60e697c4b49a2fbbb8dfa986e4f7fb177d.js", "dependencies": [], "id": "12329064-CEC3-4445-BE77-5AC07986DEAF"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8J36Y.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "2AA18DFA-E865-40C9-B660-40AF5C8D820D"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/e2697d564c7daef0763cd6575b48c405d95a5bcecfd702f79d3a2f800c2cc08b.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/7a92aba6d57f17b0c4bb81046b3ae4ae31eeffdd6e701b937bd92576a8e7a0dd.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/04bcb6a9ab9924caae75f408a5fe77869564b173e6902d43fed519e15f77f9cf.js", "dependencies": [], "id": "F6CAA4D5-72F8-4224-B700-E4A844D2AAD9"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "06721534-44FD-472C-BA21-2F64A9B24707"}]}], "name": "BAU: $9.99, navy blue. \"The strength of facts\u2026\""}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "8443951819"], "changes": null, "id": "9191265308", "integrationSettings": null}, {"weightDistributions": [{"entityId": "9186175417", "endOfRange": 2500}, {"entityId": "9174945421", "endOfRange": 5000}, {"entityId": "9186493482", "endOfRange": 7500}, {"entityId": "9179862258", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Non-Subs,[Cookie] abTest=pricing_3_canada_1017_stg,[Geo] North America & UK", "name": "abTest_pricing_3_canada_1017_stg", "bucketingStrategy": null, "variations": [{"id": "9186175417", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/07c7a1df9c6ad58e10a74c6e54c4bc732b85c0f89ec8b428a2d6873ae4c8b7ae.js", "dependencies": [], "id": "12C51EBF-E0A8-4884-A98D-AADF332D15D6"}]}, {"viewId": "6252880791", "changes": [{"src": "/actions/1262081df12b23baacb1b704e4545db2b580cc0ea9d2dcaafd9bb8c433fd3f09.js", "dependencies": [], "id": "406FD75E-4EFE-4974-9746-9B32864B6EAB"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/0e43c634d2ee7613a36351c281dfa5588f8f7ffe0aab5e0f39b2215ee07f81f7.js", "dependencies": [], "id": "4F719F8C-4F72-4C89-8096-9D8324E9246E"}]}], "name": "Control"}, {"id": "9174945421", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/54f0a421694022436cebdcca1ec002293114b2fd8822ae9a29dd18aab9d620d9.js", "dependencies": [], "id": "011BD0BD-31AE-4775-A16F-210A5603E8A4"}]}, {"viewId": "6252880791", "changes": [{"src": "/actions/abc8b6d6b76e6045a1b0935b6d3a5183f977169b3fc36e99696383bc27a75f40.js", "dependencies": [], "id": "9010C7F6-6DAC-4B0E-99E3-8240CF9C1FCF"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/28cc99af6d67af56d9e51661c61028827aa265a78da3b18b938efebfac828aec.js", "dependencies": [], "id": "EB2A2A6C-D72A-4974-82B5-9C9D814AAB53"}]}], "name": "Variation #1"}, {"id": "9186493482", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/f9cf1064fb04b8d382e47107565e63b933ce15f51df60d543ef655d84922b931.js", "dependencies": [], "id": "FF2A25E5-CD86-4C49-82E7-F3EBAF8F4C99"}]}, {"viewId": "6252880791", "changes": [{"src": "/actions/343f54f653a75dda376b9c90f1ec143b61efc78faea25bf55753f27ee5f9a973.js", "dependencies": [], "id": "0906800B-3CA0-4C7E-BBD0-684E093401DB"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/27331a34cc092ecef905be156c246ac40fa6e48f8b50d779538808308d3bfde6.js", "dependencies": [], "id": "F0EB709E-3D3D-407C-8E6B-8ECD224D5059"}]}], "name": "Variation #2"}, {"id": "9179862258", "actions": [{"viewId": "4137230627", "changes": [{"src": "/actions/7f6e72027092edf074d678e1cd3564efa2b547ba4c575954721b71103d95c431.js", "dependencies": [], "id": "8B8BF71F-7C9F-45C2-BE64-00A045F7C899"}]}, {"viewId": "6252880791", "changes": [{"src": "/actions/28b13e74b22614f6c857c52f3a464e709b419c3ecd5e656295795be7751ae46e.js", "dependencies": [], "id": "2C88149A-682A-43DA-8F69-28998B261EDE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/f108097f70814e96ad56c18c7a7ed16cd0b8e76886fea0840529180891adc871.js", "dependencies": [], "id": "154B3F77-F1F0-4D5D-85CE-7E4F2EC89F6D"}]}], "name": "Variation #3"}], "audienceIds": ["and", "6992450319", "8632385779", "8785170012"], "changes": null, "id": "9175835145", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[Cookie] exo_nons_givethetimes_1017=true", "name": "Subs | USGM | Give the Times (iframe) | 2017-11 | TESTING DH", "bucketingStrategy": null, "variations": [{"id": "9187182273", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/7a7f576129d44e26c2365c23c2f1009df7a3436719a7d78028b22fda6792477b.js", "dependencies": [], "id": "DFA5C35C-6FEE-417D-8D02-8E04D8FD3EBF"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/332cf3edabdbed0a0778b4c393900cc1f26fd97ac7ad1157df1f63846ffe883c.js", "dependencies": [], "id": "12329064-CEC3-4445-BE77-5AC07986DEAF"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8J36Y.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "2AA18DFA-E865-40C9-B660-40AF5C8D820D"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/2ed882e1a68ea32b3b03bdee5cc4288017f340e7d770d49613ce9287b8f2a6b7.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/8c31e5fa6b2fb05a3e9221cef0b97e466b46fb926089d336d7245576ad3b2f38.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/69790cbf2848f91ce1d98929dc7915bb334127c93a19397c63a592c089913999.js", "dependencies": [], "id": "F6CAA4D5-72F8-4224-B700-E4A844D2AAD9"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "Subs: Give the Times iframe test"}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "8380540140"], "changes": null, "id": "9178095162", "integrationSettings": null}, {"weightDistributions": [{"entityId": "9213771370", "endOfRange": 3333}, {"entityId": "9187569492", "endOfRange": 6666}, {"entityId": "9191266331", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Non-Subs,[Whole Meter + Landing Page] lp87JWF,[Geo] North America & UK,{Cookie] abTest = pricing_3_uk_1017_stg", "name": "abTest_pricing_3_uk_1017_stg", "bucketingStrategy": null, "variations": [{"id": "9213771370", "actions": [{"viewId": "6252880791", "changes": [{"dependencies": [], "type": "custom_code", "id": "F0909659-5E7A-42E8-B201-F681FE6B356D", "value": function($){document.domain = 'www.stg.nytimes.com';
console.log('control');
}}, {"src": "/actions/720ea43ccd542f00e9cf73cff1fc807b4c2f34629ef7159af2f2f8c9e1ce3ce9.js", "dependencies": [], "id": "2E8390F5-90AA-4401-9E51-CA1A276F3DD3"}]}, {"viewId": "8187250053", "changes": [{"dependencies": [], "type": "custom_code", "id": "BED9935A-19E7-41CF-A1AB-9AB5302A40C0", "value": function($){document.domain = 'www.stg.nytimes.com';
console.log('control');
}}, {"src": "/actions/2977c1a1d49869bc2fb67ee8ccb855fb4d02435a220c49d42483bce168d082c6.js", "dependencies": [], "id": "68B2B746-3866-4533-BC04-33BFD069C09E"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/545490370cc46d19668e2d1e5b015ee88385ebde087eea0d9d0a34d8bfe48246.js", "dependencies": [], "id": "670FA155-C6CD-42AA-A148-2BE8B07AEB88"}]}], "name": "Control"}, {"id": "9187569492", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/daa690ec3dc220d099fe971bece084b81480386c7f56fef104f8f5b06f2eeae0.js", "dependencies": [], "id": "F220E51D-28D7-4B0F-B045-0A4FEDB4B265"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/4961f5b8f3a3c6a9dca049e32e933144b4b36d1218da4ad40ea66417a3511c7d.js", "dependencies": [], "id": "2CC71E0A-9095-4560-B54C-645E214580B9"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/d743be2a2d6245aabe2eb131e6dacd20ac11c901b9fb46877cc014d7065dddc7.js", "dependencies": [], "id": "840FB6CE-603A-42B2-A583-60FE21761D1C"}]}], "name": "Variation #1"}, {"id": "9191266331", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/941d560255b27b5b77e9c07595531703abebc1b1c9db1bc61b7dc55ca79b54d2.js", "dependencies": [], "id": "B717A0DF-77AB-45A2-AA44-EB5A5B82C532"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/f1009c0f326a404e26f13b4149dcc6d3793c8d69b6d67eecbeaea6f138dd8dc1.js", "dependencies": [], "id": "E27F60FD-CCBA-467F-9C7E-1F264D4750A6"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/ff55e0f51b90185c0e5338600623c8ff6207492cc9dd933d949777a865a855b3.js", "dependencies": [], "id": "FB85B770-C034-48FE-AAE3-AAD1B0B08E8F"}]}], "name": "Variation #2"}], "audienceIds": ["and", "6992450319", "8744757005", "8785170012", "9176746646"], "changes": null, "id": "9186604754", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8786091277", "endOfRange": 2500}, {"entityId": "8790221765", "endOfRange": 5000}, {"entityId": "8781701063", "endOfRange": 6250}, {"entityId": "8779971015", "endOfRange": 7500}, {"entityId": "8800452305", "endOfRange": 8333}, {"entityId": "8783971987", "endOfRange": 9166}, {"entityId": "8785535755", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Subs ,[Cookie] abTest does NOT exist,[Bundle] Crossword \u00a0\u2014 all bundles w/ a Crossword subscription", "name": "Subs w/ access to XWD | All Bar1s: Store, Gifting, Retention | US Geo - 2017-09-20", "bucketingStrategy": "impression", "variations": [{"id": "8786091277", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/acb1fbef60068a0d109e4fc724172d3cb3c5e3fcfbeeb0ce42ea11b1be2781c0.js", "dependencies": [], "id": "07938ABA-FDDA-4790-A6F9-82FEB3ED2741"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-16313 Store: June 2017 Relaunch"}, {"id": "8790221765", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/41fee0810fcede14041c3c6056a36e1773f45836fdb538941c3c2104b8fef31c.js", "dependencies": [], "id": "790369FC-8613-4C89-BF5C-4FDF63D1ADF2"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "Crossword: to Puzzles main page"}, {"id": "8781701063", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/7079b0c09662591a019b89ee7663af928998abcfa6d46b53ebc54b7cf96ee97b.js", "dependencies": [], "id": "01C85D6C-3977-4510-91DD-E0C152B5DD15"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918 Gifting: Dark 6RHWW"}, {"id": "8779971015", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/a91805a2ffda6c04db63f12d0b29dec05f1e4c091be1465ae3df7ae4242b279d.js", "dependencies": [], "id": "3D8FBA8B-6CAB-49C8-A72B-D6C1EE214DBE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918: Gifting: Light 6RHWR"}, {"id": "8800452305", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/a45d296643dcd77b405a221a3acc14238a10983a410066fb56bd1b37724b82d4.js", "dependencies": [], "id": "DB6BF328-1A07-413A-B549-5954106A37FF"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Newsletters"}, {"id": "8783971987", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/00071fe99493c8e9f1d5278927bd8b40a20aca24eeca1026e840a739a5327222.js", "dependencies": [], "id": "0CAB6147-76F1-47D6-8064-999249F00713"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Saved Stories"}, {"id": "8785535755", "actions": [{"viewId": "4129021553", "changes": [{"name": "Bar1", "config": {"custom_js": "", "nytID": "subs_ret_behaviorRecos_0917", "full_html": "<span class=\"adxInfo mktInfo\" style=\"display:none;\">campaign: subs_ret_behaviorRecos_0917, creative: Bar1, source: optimizely, lastModifiedBy: DJP</span>\n<div id=\"bar1-nyt5wrapper\" class=\"user-subscriptions-group\">\n        <ul class=\"user-subscriptions-menu\">\n            <li id=\"bar1-3panel\" class=\"user-subscriptions-menu user-subscriptions-group bar1_hover\"><a id=\"nyt-button-sub\" href=\"%%CLICKTHRU1%%\" target=\"_blank\" data-content-collection=\"\" data-content-placement=\"1\" style=\"display:none\">RECOMMENDATIONS\n            <div id=\"hovercard\" class=\"font-smoothing\">\n                    <div id=\"bar1-body\">\n            <div id=\"bar1_hero\">\n            </div>\n                        \n                     <div id=\"bar1-subhed\">\n                         We found your match.</div>\n                     <div id=\"bar1-subhed1\">    \n\t\t\t\t\t\t Click here, and see the stories we think you&rsquo;ll love,<br>\n\t\t\t\t\t\t based on the articles you&rsquo;ve read.</div>\n                    </div>\n                </div></a>\n            </li>\n        </ul>\n    </div>\n    <a id=\"subscribe_small\" href=\"%%CLICKTHRU1%%\" class=\"subscribe-link sub_small_hide\" style=\"visibility:hidden\" target=\"_blank\">RECOMMENDATIONS</a>", "extra_js": "https://static01.nyt.com/marketing/assets/optly/scripts/bar1/bar1_v3.js", "click4": "4", "click2": "2", "click3": "3", "css": "@import url(https://a1.nyt.com/fonts/css/fonts.css);\n.font-smoothing {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.sub_small_hide {\n    display: none;\n}\n.NYT5Style .masthead-tools {\n    padding-right: 0\n}\n.NYT5Style .masthead-tools #bar1-3panel {\n    display: inline;\n    vertical-align: top;\n    background-image: none\n}\n#bar1-3panel {\n    border: 0;\n    position: relative\n}\n#bar1-nyt5wrapper {\n    opacity: 0\n}\n\n/* to eliminate FOUT */\n#bar1-3panel > a {\n    -moz-box-sizing: border-box;\n    background-color: #6288A5;\n    border: 1px solid #4D7B9F;\n    border-radius: 3px;\n    color: #fff !important;\n    display: inline-block;\n    font-size: 1em;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    padding: 7px 10px 6px;\n    text-transform: none;\n    text-decoration: none;\n}\n#bar1-3panel > a:hover {\n    background-color: #326891;\n    border: 1px solid #265E8B;\n    text-decoration: none;\n}\n.NYT4 #bar1-3panel {\n    display: none\n}\n\n#hovercard {\n    width: 450px;\n    height: 330px;\n    max-width: 450px;\n    display: none;\n    margin-left: -360px;\n    z-index: 1000000152;\n    border: 0;\n    position: absolute;\n    left: 50%;\n    top: 30px;\n    text-align: left;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px #888;\n    box-shadow: 0 0 5px #888;\n    white-space: normal;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    background: url('https://cdn.optimizely.com/img/3013110282/594f70bc02864da89af366f548a1be2f.png') 0 0 no-repeat;\n    background-size: cover;\n    z-index: 9999999;        \n\n}\n\n\n#bar1_hero {\n    position: absolute;\n    bottom: 36px;\n    left: 80px;\n    width: 290px;\n    height: 140px;\n    background: url('https://cdn.optimizely.com/img/3013110282/7acbf94b30a04349b5c56619d1dce671.png') 0 0 no-repeat;\n    background-size: cover;\n    z-index: 99999999;        \n\n    \n\n}\n #bar1-subhed {\n    position: absolute;\n    top: 54px;\n    left: 75px;\n    font-family: karnak-normal-400, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 27px;\n    line-height: 27px;     \n    color: #000000;\n    text-align: center;\n}\n    \n#bar1-subhed1 {\n    position: absolute;\n    top: 85px;\n    left: 63px;\n    font-family: franklin-normal-500, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 15px;\n    line-height: 17px;     \n    color: #000000;\n    text-align: center;\n}\n\n\n   \n#bar1-cta {\n    position: absolute;\n    bottom: 16px;\n    left: 172px;\n    font-family: franklin-normal-700, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    width: 105px;\n    height: 30px;  \n    margin: 0 auto;\n    background: #f26c4f;\n    font-size: 11px;\n    line-height: 27px;\n    padding: 0;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 2px;\n    color: #fff;\n}\n    #bar1-cta a {\n        display: block;\n        height: 100%;\n        cursor: pointer;\n        color: #fff;\n        text-decoration: none;\n        text-transform: uppercase;\n        border: 0px;\n        padding-top: 9px;\n        padding-left: 0 !important;\n    }\n#hovercard:after {\n        bottom: 100%;\n        left: 350px;\n        border: solid transparent;\n        content: \" \";\n        width: 0;\n        height: 0;\n        position: absolute;\n        pointer-events: none;\n        border-bottom-color: #d7e67d;\n        border-width: 8px;\n        margin: 0;\n    }\n\n#hovercard hr {\n    margin: 4px;\n    width: 320px;\n    opacity: 0.5;\n    color: #000\n}\n.hover-subhead {\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 13px;\n    color: #333;\n    margin: 1px 0 0;\n    width: 170px;\n    position: absolute;\n    top: 10px\n}\n#hovercard h3 a,\n#hovercard p a {\n    color: #000 !important;\n    text-decoration: none;\n    display: block\n}\na.nyt-button-actions {\n    background: #f7f7f5;\n    color: #58595b !important;\n    width: 126px;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    border: 1px solid #ccc !important;\n    text-transform: uppercase;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 15px;\n    text-align: center;\n    padding: 6px 0;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    top: 10px;\n    left: 194px;\n    text-decoration: none !important\n}\n#hovercard a.nyt-button-actions:hover {\n    background: #3c6791;\n    color: #fff !important;\n    text-decoration: none !important\n}\n\n#hovercard a.nyt-button-actions.highlightButton:link,\n#hovercard a.nyt-button-actions.highlightButton:visited {\n    color: #fff !important;\n    background: #3c6791;\n    text-decoration: none !important\n}\n\n\n\n\n\n.NYT5Style #hovercard {\n    top: 26px\n}\n\n.ad.bar1-ad a.bar1-introtext,\n#memberTools .bar1-introtext,\n.masthead-tools a.bar1-introtext {\n    text-decoration: none;\n    color: #666\n}\n\n.masthead-tools a.bar1-introtext {\n    position: relative;\n    margin-top: 2px\n}\n\n.bar1-introtext {\n    padding-right: 5px\n}\n\n.ad.bar1-ad .user-subscriptions-menu li a {\n    padding-left: 0;\n    border-left: 0\n}\n\n#hovercard::after {bottom: 100%;left: 350px;border: solid transparent;content: \" \";width: 0;height: 0;position: absolute;pointer-events: none;border-bottom-color: #d7d7d8;border-width: 8px;margin: 0;}\n\n/* Chrome-only */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    .NYT5Style #hovercard {\n        left: 50%;\n        top: 29px\n    }\n    .NYT5Style #hovercard:before {\n        top: -14px\n    }\n}\n/* Responsive\n@media screen and (max-width: 734px) {  \n    #bar1-3panel {\n        display: none\n    }\n    .ad.bar1-ad .user-subscriptions-group {\n        display: block\n    }\n} */\n/* Not on interactives */\n#interactiveABC #bar1-3panel {\n    display: none\n}", "click1": "https://www.nytimes.com/recommendations"}, "widget_id": "bar1poc2_staging", "dependencies": [], "type": "widget", "id": "01DAE462-F632-437D-942C-5645E93C8D0D"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Pers Recommendations"}], "audienceIds": ["and", "7814230912", "6696333431", "8183220341", "8562601520"], "changes": null, "id": "8780951779", "integrationSettings": null}, {"weightDistributions": [{"entityId": "9175863799", "endOfRange": 2500}, {"entityId": "9180093762", "endOfRange": 5000}, {"entityId": "9224320513", "endOfRange": 7500}, {"entityId": "9176885051", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,exo_bar1_test=true", "name": "Nons | All Bar1s: Jquery Test", "bucketingStrategy": "impression", "variations": [{"id": "9175863799", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/94cd05e500256ec913f7a53b958c96026735100117245b5c230dcc3051437134.js", "dependencies": [], "id": "BCEB7048-22BE-4CFF-BFA3-0CD85E187BBE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-13012 Crossword: to Subscription LP"}, {"id": "9180093762", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/aee28836be457d84d5f4bcca5832fb3d05791ed9b9df149f20c0ddc3fa0a92cd.js", "dependencies": [], "id": "07938ABA-FDDA-4790-A6F9-82FEB3ED2741"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-16313 Store: June 2017 Relaunch"}, {"id": "9224320513", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/4f91ca913ca0b6fadbec539f87e3d3ff7a04ec7e08313310ce100b8b7c3985a6.js", "dependencies": [], "id": "66FEA8D4-B844-457E-A814-453E2EE8C1CC"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918 Gifting: Dark 6RHWW"}, {"id": "9176885051", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/300224a9f356549f56a0ed729fa880bc19ecfcb033e46e3633026902678d613d.js", "dependencies": [], "id": "604E8551-8AB6-4BB4-9038-7F6DCEB85D7F"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918 Gifting: Light 6RHWR"}], "audienceIds": ["and", "7814230912", "6992450319", "8927740296"], "changes": null, "id": "9184426896", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8794221706", "endOfRange": 2500}, {"entityId": "8788502475", "endOfRange": 5000}, {"entityId": "8784472477", "endOfRange": 6250}, {"entityId": "8785781704", "endOfRange": 7500}, {"entityId": "8781711404", "endOfRange": 8334}, {"entityId": "8785321295", "endOfRange": 9167}, {"entityId": "8796565478", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Subs ,[Cookie] abTest does NOT exist,[Bundle] Crossword \u00a0\u2014 all bundles w/ a Crossword subscription", "name": "Subs | All Bar1s: Store, Gifting, Crossword, Retention | US Geo - 2017-09-20", "bucketingStrategy": "impression", "variations": [{"id": "8794221706", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/404efa53913cb4898418ffdc04e20075d051bbab0cda101b7d000da3af00f38e.js", "dependencies": [], "id": "BCEB7048-22BE-4CFF-BFA3-0CD85E187BBE"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-13012 Crossword: to Subscription LP"}, {"id": "8788502475", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/a8d887ebafdd338c2e956178b2ec1c32598a34ebcc9e82733a40c4aad1ea4e83.js", "dependencies": [], "id": "07938ABA-FDDA-4790-A6F9-82FEB3ED2741"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-16313 Store: June 2017 Relaunch"}, {"id": "8784472477", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/4fd4b19001e5b8ad93e7ec240d5d106f368953b5d2fe1e5b295986526b05567f.js", "dependencies": [], "id": "66FEA8D4-B844-457E-A814-453E2EE8C1CC"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918 Gifting: Dark 6RHWW"}, {"id": "8785781704", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/4fa4c8eabf4f1715d373c1018bb3fe46498e7f27e78b8c48e0131290339621ea.js", "dependencies": [], "id": "604E8551-8AB6-4BB4-9038-7F6DCEB85D7F"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-14918 Gifting: Light 6RHWR"}, {"id": "8781711404", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/da09d9ad7e27d264a0801abf4d33bcd1fcd639811b7e2c398c6dd27463bffa0d.js", "dependencies": [], "id": "85412438-AC5D-443D-B6F2-34007012809F"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Newsletters"}, {"id": "8785321295", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/a34f037b3ef91890d8fc2ef7bd226dbc39766e9bbf9ba2c10815c521564118ef.js", "dependencies": [], "id": "2A42FBB9-4D77-41C5-906E-FCFA2AECD990"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Saved Stories"}, {"id": "8796565478", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/0e769d01ae19c6bab2dc01d936f6e4b081806b6355baee5b7ad6dcf049586421.js", "dependencies": [], "id": "35D848E9-EF1A-4262-93BC-933C2769C291"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "4128620616", "changes": []}], "name": "CRS-15969 Retention: Pers Recommendations"}], "audienceIds": ["and", "7814230912", "6696333431", "8183220341", ["not", "8562601520"]], "changes": null, "id": "8791391519", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[Geo] WW ex US,[Geo] Not UK,[Geo] NOT Canada,[Cookie] abTest does NOT exist,[Cookie] exo_* does not exist", "name": "Nons | INYT | August BAU (all assets in currency) | WW Geo ex India, ex UK, ex Canada | 2017-11-1", "bucketingStrategy": null, "variations": [{"id": "9110350191", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/7e353956862902305b004737cb43a96365b829d8a7f0aae847247600d2509c04.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a5a01e97d1d7e6ccde43d1ebe2e7fab71f9e1e8227e26064c94fa15e0a6b44b1.js", "dependencies": [], "id": "00B1E72A-34BF-49F9-9B42-0F761A4A3844"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/53b82fa174d75a401883606fcdee9c5d59b6c26adfcd671c06c73fea7faf4794.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/7c5b9f7df6c5a122f73458bd60e3d7e48da6b5d224478112f918fb3ff34cd686.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/d9e40bdecab0103f14229ff7ca9df5331ecc900a1ebac14676ae07a48bf991e9.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp87JWF.html?mktgrfr=gw_mob&campaignId=6WYRL", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5"}]}], "name": "INYT August BAU - green bg - Subscribe to debate, not division"}], "audienceIds": ["and", "6992450319", "8413422098", "7209740780", "8394720796", "8323149558", "8183220341", "9030630106"], "changes": null, "id": "9110040149", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[Cookie] abTest does NOT exist,[Cookie] exo_* does not exist,[geo] UK and Canada", "name": "Nons | INYT | August BAU | UK and Canada | 2017-09-15", "bucketingStrategy": null, "variations": [{"id": "8736412440", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/1002b63c5c64ec831fc365a74d0139d133b63314520cbbaf0e05581691271e1c.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/e12d78b7148b2f23d8144c85631d0cfe95d571d22a61a3d3f1cadf83089d77b0.js", "dependencies": [], "id": "00B1E72A-34BF-49F9-9B42-0F761A4A3844"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/39c1298d19850ab606e6ede936a83170ebb8401dfce6b7fbffabc7bb7f3f4b9b.js", "dependencies": [], "id": "D1A5E020-F7D7-4BCC-A27E-07242C31C7F2"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/ce64d90822a14fdb0f43f4ff4b42073993d91736ba7a97555f8eb2b17ba31f82.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/668c3169693e8ba667217476cd8f1ca5203be63eb5ee48dc794985f4af62ab83.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp87JWF.html?campaignId=6WYRL", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "INYT August BAU - new OC's"}], "audienceIds": ["and", "6992450319", "8413422098", "8183220341", "9030630106", "9183314943"], "changes": null, "id": "8728672975", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[Cookie] abTest does NOT exist,[Cookie] exo_* does not exist,[WAT] Exclude All EDU segments", "name": "Nons | USGM | August BAU (regular gw, descrip update) | 2017-11-1", "bucketingStrategy": null, "variations": [{"id": "8789806256", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/024a68cde0717d3205963965811515a69df5884dba0c75785df253165668307e.js", "dependencies": [], "id": "DFA5C35C-6FEE-417D-8D02-8E04D8FD3EBF"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/332cf3edabdbed0a0778b4c393900cc1f26fd97ac7ad1157df1f63846ffe883c.js", "dependencies": [], "id": "12329064-CEC3-4445-BE77-5AC07986DEAF"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8J36Y.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "2AA18DFA-E865-40C9-B660-40AF5C8D820D"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/2ed882e1a68ea32b3b03bdee5cc4288017f340e7d770d49613ce9287b8f2a6b7.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/cd7e5017e05f8ea27d0b193058fd01daeb084dca798756c2d8caaa98ccfd9bb3.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/3a232441dc6e019a1a254514b124f4cc747f52ad1dcf4c18ff82cfb513803cb4.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "BAU: $9.99, navy blue. \"The strength of facts\u2026\""}], "audienceIds": ["and", "7814230912", "6992450319", "8183220341", "9030630106", "8413422098"], "changes": null, "id": "8786677278", "integrationSettings": null}, {"weightDistributions": [{"entityId": "9175827316", "endOfRange": 1000}, {"entityId": "9188166997", "endOfRange": 10000}], "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,Exclude IE 11,Desktop/Laptop only,Exclude Silicon-Valley-Is-Not-Your-Friend,[Cookie] exo_* does not exist,[Cookie] abTest does NOT exist,[WAT] Exclude All EDU segments", "name": "Google Home 10% relaunch ", "bucketingStrategy": null, "variations": [{"id": "9175827316", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/8e041832e1c3b08caf0d8af42f7d2a094558375d53b3d7a196850a69fd76e101.js", "dependencies": [], "id": "413775F8-CB0B-44DB-B683-0C0AF736BAB4"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/c4a954ea73a14210336896ff21da9e87aadc32eaa7465d0955876bfbea26811c.js", "dependencies": [], "id": "D208EF16-2832-4713-9ABC-F7792F205992"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/8c8e2b10782236e485f724ec02a15bbed5a74a847734a50693af4e25ffdac991.js", "dependencies": [], "id": "BBBA6A5C-C440-4AF1-979D-396A5139CD60"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/12208961ba6670887c6fe71fd8da767f32b2e3881739fad48c023f7ca70646af.js", "dependencies": [], "id": "60C93D20-620E-469D-9242-96511C93211C"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/e5fb06ef4e6323c25299de7bfd791b2a9b02fbf1ac947dbbf6248f1964453544.js", "dependencies": [], "id": "C7C6FC1E-4689-4FA3-B2E3-6617A1D33A82"}]}], "name": "Google Variation"}, {"id": "9188166997", "actions": [{"viewId": "8185280121", "changes": []}, {"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}], "name": "Holdout"}], "audienceIds": ["and", "7814230912", "6992450319", "8627862282", "8331680099", "9028972487", "9030630106", "8183220341", "8413422098"], "changes": null, "id": "9181575034", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[cookie]exo_nons_inyt_bauInCurrencyIndia_1117,[Geo] India", "name": "Nons | INYT | August BAU (all assets in currency, iframe) | India | 2017-11-17 | TESTING", "bucketingStrategy": null, "variations": [{"id": "9173911786", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/c2edb30e40bb7e37bb451bf8ba089e882a0bdff2817200de0af24f48679a0584.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/b4cc7649c2f7802588065f4ebb6d919de40e0dfa6740344767fab96b25f20ee6.js", "dependencies": [], "id": "52547610-D75B-41C3-9E8E-68EE5E84F552"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/48d56e74088838d6f06b5e2a8e434bd54dbf57846d46a46c0bb1d908c5fe8dda.js", "dependencies": [], "id": "AC326D1A-EA0D-46FF-9702-91D1F9C75071"}, {"src": "/actions/48d56e74088838d6f06b5e2a8e434bd54dbf57846d46a46c0bb1d908c5fe8dda.js", "dependencies": [], "id": "52547610-D75B-41C3-9E8E-68EE5E84F552"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/1c4df898c67089d956f44b68599598ac790c96b2954b8bacf8042e3f6d3f22f7.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/f9f5e8541164310f79c8c7a74be0511c1642185512cdec526872d0b1b17217fd.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/inyt/lp8J4QY.html?mktgrfr=gw_mob&campaignId=6WYRL", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "INYT August BAU - green bg - Subscribe to debate, not division"}], "audienceIds": ["and", "6992450319", "8413422098", "8461310777", "8248972263"], "changes": null, "id": "9186172360", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[WAT] Exclude All EDU segments,[Subscriber Type] Non-Subs,[Krux] Propensity 2-4 rz6au2jxu,[Krux] NOT Subs qxk0hzyjh,[Cookie] exo_* does not exist,[Cookie] abTest does NOT exist", "name": "Nons | USGM | Low Propensity | 2017-11-2", "bucketingStrategy": null, "variations": [{"id": "9181595114", "actions": [{"viewId": "4129021553", "changes": [{"name": "Bar1", "config": {"custom_js": "", "nytID": "US_Low_Propensity_August_bar1", "full_html": "<span class=\"adxInfo mktInfo\" style=\"display:none;\">campaign: Nons | USGM | Low Propensity | 2017-08-03 | creative: Bar1, source: optimizely, creator: DH</span>\n<div id=\"bar1-nyt5wrapper\" class=\"user-subscriptions-group\">\n        <ul class=\"user-subscriptions-menu\">\n            <li id=\"bar1-3panel\" class=\"user-subscriptions-menu user-subscriptions-group bar1_hover\"><a id=\"nyt-button-sub\" href=\"%%CLICKTHRU1%%\" target=\"_blank\" data-content-collection=\"\" data-content-placement=\"1\" style=\"display:none\">SUBSCRIBE NOW \n            <div id=\"hovercard\" class=\"font-smoothing\">\n                    <div id=\"bar1-body\">                        \n            <svg id=\"augbar1-logo\" aria-label=\"The New York Times\">\n                            <image width=\"100%\" height=\"100%\" xlink:href=\"https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64-wht.svg\" src=\"//cdn.optimizely.com/img/3013110282/b5568a31e87c4256984a4754cb1072dc.png\" alt=\"The New York Times\" border=\"0\"></image>\n                        </svg>\n                        \n                            <div id=\"bar1-header\">\n                                News you can act on.<br>\n\t\t\t\t\t\t     <span>Reporting you can use every day.</span></div>\n\t\t\t\t\t\t     <div id=\"bar1-subhead\">One month free when you<br>\n                                 subscribe today.</div>                          \n                                                                        \n                        <div id=\"bar1-cta\">SEE MY OPTIONS</div>                \n                    </div>\n                </div></a>\n            </li>\n        </ul>\n    </div>\n    <a id=\"subscribe_small\" href=\"%%CLICKTHRU1%%\" class=\"subscribe-link sub_small_hide\" style=\"visibility:hidden\" target=\"_blank\">SUBSCRIBE NOW</a>", "extra_js": "https://static01.nyt.com/marketing/assets/optly/scripts/bar1/bar1_v3.js", "click4": "4", "click2": "2", "click3": "3", "css": "@import url(https://a1.nyt.com/fonts/css/fonts.css);\n.font-smoothing {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.sub_small_hide {\n    display: none;\n}\n.NYT5Style .masthead-tools {\n    padding-right: 0\n}\n.NYT5Style .masthead-tools #bar1-3panel {\n    display: inline;\n    vertical-align: top;\n    background-image: none\n}\n#bar1-3panel {\n    border: 0;\n    position: relative\n}\n#bar1-nyt5wrapper {\n    opacity: 0\n}\n\n/* to eliminate FOUT */\n#bar1-3panel > a {\n    -moz-box-sizing: border-box;\n    background-color: #6288A5;\n    border: 1px solid #4D7B9F;\n    border-radius: 3px;\n    color: #fff !important;\n    display: inline-block;\n    font-size: 1em;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    padding: 7px 10px 6px;\n    text-transform: none;\n    text-decoration: none;\n}\n#bar1-3panel > a:hover {\n    background-color: #326891;\n    border: 1px solid #265E8B;\n    text-decoration: none;\n}\n.NYT4 #bar1-3panel {\n    display: none\n}\n\n#hovercard {\n    width: 450px;\n    height: 330px;\n    max-width: 450px;\n    display: none;\n    margin-left: -360px;\n    z-index: 1000000152;\n    border: 0;\n    position: absolute;\n    left: 50%;\n    top: 30px;\n    text-align: left;\n    -moz-box-shadow: 0 0 5px #888;\n    -webkit-box-shadow: 0 0 5px #888;\n    box-shadow: 0 0 5px #888;\n    white-space: normal;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    background-color: #004075;\n\n}\n\n\n #bar1-header {\n    position: absolute;\n    top: 33px;\n    left: 30px;\n\tfont-family: franklin-normal-700, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 27px;\n    line-height: 33px;     \n    color: #ffffff;\n    text-align: left;\n}\n    \n  #bar1-header span {    \n    font-family: franklin-normal-500, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 29px;\n\tline-height: 33px;\n\tcolor: #ffffff;\n    text-align: left;\n\tletter-spacing: -.75px;  \n}\n\n\n   #bar1-subhead {    \n    position: absolute;\n\ttop: 121px;\n\tleft: 30px;\n\tfont-family: franklin-normal-600, sans-serif;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 28.5px;\n    line-height: 33px;     \n    color: #f3fe86;\n    text-align: left;\n\t\n}  \n\n.striker-augbar1 {\n  position: relative;\n  color: #7a9f7e;\n}\n\n.striker-augbar1::before {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: #fd432e;\n  content: \"\";\n  bottom: 39%;\n}\n\n#augbar1-logo {\n    position: absolute;\n    bottom: 35px;\n    right: 37px;\n    width: 154px;\n    height: 26px;\n}\n\n\n\n#bar1-cta {\n    position: absolute;\n    bottom: 99px;\n    left: 30px;\n    font-family: franklin-normal-700, sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    width: 109px;\n    height: 30px;  \n    margin: 0 auto;\n    background: #f3fe86;\n    font-size: 11px;\n    line-height: 29px;\n    padding: 0;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 3px;\n    color: #000000;\n}\n    #bar1-cta a {\n        display: block;\n        height: 100%;\n        cursor: pointer;\n        color: #fff;\n        text-decoration: none;\n        text-transform: uppercase;\n        border: 0px;\n        padding-top: 9px;\n        padding-left: 0 !important;\n    }\n#hovercard:after {\n        bottom: 100%;\n        left: 350px;\n        border: solid transparent;\n        content: \" \";\n        width: 0;\n        height: 0;\n        position: absolute;\n        pointer-events: none;\n        border-bottom-color: #d7e67d;\n        border-width: 8px;\n        margin: 0;\n    }\n#hovercard hr {\n    margin: 4px;\n    width: 320px;\n    opacity: 0.5;\n    color: #000\n}\n.hover-subhead {\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 13px;\n    color: #333;\n    margin: 1px 0 0;\n    width: 170px;\n    position: absolute;\n    top: 10px\n}\n#hovercard h3 a,\n#hovercard p a {\n    color: #000 !important;\n    text-decoration: none;\n    display: block\n}\na.nyt-button-actions {\n    background: #f7f7f5;\n    color: #58595b !important;\n    width: 126px;\n    -webkit-border-radius: 3px;\n    -moz-border-radius: 3px;\n    border-radius: 3px;\n    border: 1px solid #ccc !important;\n    text-transform: uppercase;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 15px;\n    text-align: center;\n    padding: 6px 0;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    top: 10px;\n    left: 194px;\n    text-decoration: none !important\n}\n#hovercard a.nyt-button-actions:hover {\n    background: #3c6791;\n    color: #fff !important;\n    text-decoration: none !important\n}\n\n#hovercard a.nyt-button-actions.highlightButton:link,\n#hovercard a.nyt-button-actions.highlightButton:visited {\n    color: #fff !important;\n    background: #3c6791;\n    text-decoration: none !important\n}\n\na.split-all-button {\n    background: #f3f3f4;\n    width: 345px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    font-family:  nyt-franklin, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 11px;\n    line-height: 30px;\n    margin: 0;\n    border: 1px solid #CCC;\n    text-align: center;\n    vertical-align: middle\n}\n\n#hovercard a.split-all-button:hover {\n    background: #73afff;\n    color: #004276 !important;\n    text-decoration: underline !important\n}\n\n.NYT5Style #hovercard {\n    top: 26px\n}\n\n.ad.bar1-ad a.bar1-introtext,\n#memberTools .bar1-introtext,\n.masthead-tools a.bar1-introtext {\n    text-decoration: none;\n    color: #666\n}\n\n.masthead-tools a.bar1-introtext {\n    position: relative;\n    margin-top: 2px\n}\n\n.bar1-introtext {\n    padding-right: 5px\n}\n\n.ad.bar1-ad .user-subscriptions-menu li a {\n    padding-left: 0;\n    border-left: 0\n}\n\n#hovercard::after {bottom: 100%;left: 350px;border: solid transparent;content: \" \";width: 0;height: 0;position: absolute;pointer-events: none;border-bottom-color: #004075;border-width: 8px;margin: 0;}\n\n/* Chrome-only */\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n    .NYT5Style #hovercard {\n        left: 50%;\n        top: 29px\n    }\n    .NYT5Style #hovercard:before {\n        top: -14px\n    }\n}\n/* Responsive\n@media screen and (max-width: 734px) {  \n    #bar1-3panel {\n        display: none\n    }\n    .ad.bar1-ad .user-subscriptions-group {\n        display: block\n    }\n} */\n/* Not on interactives */\n#interactiveABC #bar1-3panel {\n    display: none\n}", "click1": "https://www.nytimes.com/subscriptions/Multiproduct/lp8KQWJ.html?campaignId=6X4WF"}, "id": "DFA5C35C-6FEE-417D-8D02-8E04D8FD3EBF", "dependencies": [], "type": "widget", "widget_id": "bar1poc2_staging"}]}, {"viewId": "8179870018", "changes": [{"name": "Welcome Ad", "config": {"session_cap": "1", "custom_js": "(function (window) {\n\n    function Overlay() {        \n        var closeBg = document.getElementById('close_background');\n        var closeBtn = document.getElementById('closeCross');\n        var welcContainer = document.getElementById('welc_supercontainer');\n\n        closeBtn.addEventListener('click', function () {\n            console.log('close click');\n            welcContainer.style.display = 'none';\n        });\n\n        closeBg.addEventListener('click', function () {\n            console.log('close bg');\n            welcContainer.style.display = 'none';\n        });\n\n        window.setTimeout(function () {\n            console.log('welc timeout');\n            welcContainer.style.display = 'none';\n        }, 7000);\n\n        window.onkeydown = function (event) {\n            if (event.keyCode === 27) { // ESC      \n                console.log('esc press');\n                welcContainer.style.display = 'none';\n            }\n        }\n\n    }\n\n    Overlay();\n\n})(window);", "nytID": "US_Low_Propensity_2017_welcome", "session_cap_hours": 1, "freq_cap_number": "3", "click3": "", "full_html": "<span class=\"adxInfo mktInfo\" style=\"display:none;\">campaign: Nons | Low Propensity | US Geo | 2017-08-03 | creative: Welcome, source: optimizely, creator: DH</span>\n<div id=\"welc_supercontainer\" class=\"nytdGrowlUIContainer font-smoothing\">\n    <div id=\"welc_container\">\n        <a href=\"javascript:;\" class=\"nytdGrowlNotifyCross\" id=\"close_background\"></a>\n        <div id=\"welc\">\n            <a href=\"%%CLICKTHRU1%%\" id=\"cta-extended\" target=\"_blank\">\n                <div id=\"cta-extended\">\n                    <div id=\"instl-body\" class=\"font-smoothing\">\n                        <div id=\"instl-headline\">\n                            Covering stories from up close.<br>\n                            <span>Firsthand reporting that brings you the facts.</span>\n                        </div>\n\n                        <div id=\"instl-subhead\">One month free when you subscribe today.</div>\n                        <div id=\"instl-cta\">SEE MY OPTIONS</div>\n                        <svg id=\"welcome-logo\" aria-label=\"The New York Times\">\n                            <image width=\"100%\" height=\"100%\" xlink:href=\"https://static01.nyt.com/marketing/assets/2017/nyt-logo-379x64-wht.svg\" src=\"//cdn.optimizely.com/img/3013110282/b5568a31e87c4256984a4754cb1072dc.png\"\n                                alt=\"The New York Times\" border=\"0\"></image>\n                        </svg>\n                    </div>\n                </div>\n            </a>\n            <button type=\"button\" class=\"welc-close\" id=\"closeCross\" aria-disabled=\"false\"><i class=\"icon\"></i><span class=\"visually-hidden\">Close this modal window</span></button>\n        </div>\n    </div>\n</div>", "extra_js_4": "", "extra_js_3": "", "extra_js_2": "", "extra_js": "", "click4": "", "click2": "2", "freq_cap_days": 1, "css": "    @import url(https://a1.nyt.com/fonts/css/fonts.css);\n    .font-smoothing {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    #welc_supercontainer {\n        padding: 0;\n        width: 100%;\n        height: 100%;\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        z-index: 2147483647;\n        background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 1) 100%);\n        background-image: linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgb(255, 255, 255) 100%);\n        background: -ms-linear-gradient(rgba(255, 255, 255, 0.6) 0%, rgb(255, 255, 255) 100%);\n        text-align: left;\n    }\n\n    #welc_container {\n        position: absolute;\n        margin: 0 auto;\n        padding: 0;\n        width: 100%;\n        height: 600px;\n        left: 0;\n        top: 134px;\n        z-index: 2147483545;\n    }\n\n    #welc {\n        width: 800px;\n        height: 320px;\n        position: relative;\n        margin: 0 auto;\n        z-index: 2147483545;\n        background-color: #004075;\n    }\n\n    .welc-close {\n        position: relative;\n        z-index: 9999;\n        transition: background-color 0.2s ease-in;\n        border-radius: 50%;\n        background-clip: padding-box;\n        font-size: 100%;\n        font-family: \"nyt-franklin\", sans-serif;\n        margin: 0;\n        padding: 0;\n        border: none;\n        box-shadow: 0 0 0 1px #fff, 0 0 0 2px #d8d8d8, -1px 1px 2px 3px rgba(0, 0, 0, 0.15);\n        transition: background-color 0.2s ease-in;\n        background-color: #999;\n        width: 22px;\n        height: 22px;\n        position: absolute;\n        right: -11px;\n        top: -11px;\n        cursor: pointer;\n        -webkit-appearance: button;\n        line-height: normal;\n        vertical-align: middle;\n    }\n\n    .welc-close .icon {\n        display: inline-block;\n        line-height: 0;\n        vertical-align: middle;\n        font-style: normal;\n    }\n\n    .welc-close:hover {\n        background-color: #333;\n    }\n\n    .welc-close .icon:before {\n        -webkit-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    }\n\n    .welc-close .icon:after {\n        -webkit-transform: rotate(135deg);\n        -ms-transform: rotate(135deg);\n        transform: rotate(135deg);\n    }\n\n    .welc-close .icon:before,\n    .welc-close .icon:after {\n        content: '';\n        position: absolute;\n        display: block;\n        background-color: #fff;\n        top: 10px;\n        left: 6px;\n        width: 10px;\n        height: 2px;\n    }\n\n    .visually-hidden {\n        position: absolute;\n        width: 1px;\n        height: 1px;\n        margin: -1px;\n        padding: 0;\n        border: 0;\n        clip: rect(0 0 0 0);\n        overflow: hidden;\n    }\n\n    #welc #close_background {\n        display: block;\n        width: 100%;\n        height: 1080px;\n        position: absolute;\n    }\n\n    #close_background {\n        display: block;\n        height: 1080px;\n        width: 100%;\n        position: absolute;\n    }\n\n    #instl-headline {\n        position: absolute;\n        top: 45px;\n        left: 40px;\n        color: #ffffff;\n        font-family: franklin-normal-700, sans-serif;\n        font-style: normal;\n        font-weight: 700;\n        font-size: 29.7px;\n        line-height: 32px;\n        text-align: left;\n    }\n\n    #instl-headline span {\n\n        font-family: franklin-normal-500, sans-serif;\n        font-style: normal;\n        font-weight: 500;\n        font-size: 29.2px;\n        line-height: 32px;\n        color: #ffffff;\n        letter-spacing: .15px;\n        text-align: left;\n    }\n\n\n    #instl-subhead {\n        position: absolute;\n        top: 126px;\n        left: 40px;\n        color: #f3fe86;\n        font-family: franklin-normal-600, sans-serif;\n        font-style: normal;\n        font-weight: 600;\n        font-size: 29.5px;\n        line-height: 32px;\n        text-align: left;\n    }\n\n\n    .striker-augwelcome1 {\n        position: relative;\n        color: #7a9f7e;\n    }\n\n    .striker-augwelcome1::before {\n        position: absolute;\n        width: 100%;\n        height: 1px;\n        background-color: #fd432e;\n        content: \"\";\n        bottom: 39%;\n    }\n\n    #instl-cta {\n        position: absolute;\n        font-family: franklin-normal-700, sans-serif;\n        font-style: normal;\n        font-weight: 700;\n        bottom: 109px;\n        left: 40px;\n        height: 28px;\n        background: #f3fe86;\n        font-size: 11px;\n        line-height: 28px;\n        padding: 0;\n        text-align: center;\n        text-decoration: none;\n        border-radius: 3px;\n        color: #000000;\n        width: 111px;\n    }\n\n    #instl-cta a {\n        display: block;\n        height: 100%;\n        cursor: pointer;\n        color: #fff;\n        text-decoration: none;\n        text-transform: uppercase;\n        padding-top: 7px;\n    }\n\n    #welcome-logo {\n        position: absolute;\n        bottom: 34px;\n        right: 44px;\n        height: 31px;\n        width: 182px;\n    }\n\n    #cta-extended {\n        width: 800px;\n        height: 320px;\n    }\n\n    @media screen and (max-width: 800px) {\n        #welc {\n            width: 700px;\n        }\n    }\n\n    @media screen and (max-width: 767px) {\n        #welc_supercontainer {\n            display: none !important;\n        }\n    }", "click1": "https://www.nytimes.com/subscriptions/Multiproduct/lp8KQWJ.html?campaignId=6X4WJ"}, "id": "12329064-CEC3-4445-BE77-5AC07986DEAF", "dependencies": [], "type": "widget", "widget_id": "WelcomeAd"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8KQWK.html?mktgrfr=gw_mob&campaignId=6X4YF", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "2AA18DFA-E865-40C9-B660-40AF5C8D820D"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/cda388d783900905d510f49692725e089d3061aa793c062a90d5d907944bd945.js", "dependencies": [], "id": "91C48648-3FC5-4DD6-9ADB-32FF553B838B"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/6ef67c81bf65e6efc72c46ff06ef644dec2531e2b4c41d40d93bfc73eec5ce03.js", "dependencies": [], "id": "0289D6F2-B245-42FE-8F9A-E0499C1E77CE"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/ffad494abc0c09cf8682ab2119832bd4085bba2d9ce25445c98ddd5a270612c5.js", "dependencies": [], "id": "749709BD-1A36-4067-B830-BABCD777A071"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "9312DC30-81F0-4A66-85F5-D060C8D0651D", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "The strength of facts. The power of truth - One month free. - 6X4WF 6X4WJ 6X4W8 6X4WR 6X4WW 6X4WY 6X4X6 6X4X8 6X4XF 6X4XJ 6X4XL 6X4XR 6X4XW 6X4XY 6X4Y6 6X4Y8 6X4YF"}], "audienceIds": ["and", "7814230912", "8413422098", "6992450319", "8544463138", "8564081737", "9030630106", "8183220341"], "changes": null, "id": "9177815804", "integrationSettings": null}, {"weightDistributions": [{"entityId": "9187680140", "endOfRange": 3333}, {"entityId": "9185270182", "endOfRange": 6666}, {"entityId": "9186340336", "endOfRange": 10000}], "audienceName": "[Subscriber Type] Non-Subs,[Geo] US,[WAT] Exclude All EDU segments,Exclude IE 11,[Whole Meter + Landing Page] 8HYKU + 8J36Y,[Cookie] abTest does NOT exist,[Cookie] exo_* does not exist", "name": "abTest_lp_gbb_bundle_reorder_1117", "bucketingStrategy": null, "variations": [{"id": "9187680140", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/18a87343ea7df4ccf369e8f470498ca45ec4fac4d24fa296ba6d5bf2799189af.js", "dependencies": [], "id": "AEDE0892-A0B4-49DF-A52D-AA46953466CE"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/dd8dfe2bf62bafe122780f74d1a1519a25e3a499a9c94263f49ae5f02b2297ff.js", "dependencies": [], "id": "7829DF39-0E0C-47DA-B560-3312D232DEEB"}]}, {"viewId": "8187250053", "changes": [{"name": "Gateway_Iframe", "config": {"iframeCSS": ".font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n.more_subscriptions {\n  clear: both;\n  padding: 0 45px 0;\n  max-width: 985px;\n  margin: 0 auto;\n}\n\n.more_subscriptions h2 {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 200;\n  color: black;\n  font-size: 26px;\n  line-height: 30px;\n  text-align: left;\n  width: 100%;\n  padding: 0 0 32px 0;\n}\n\n.more_subscriptions .more_sub_holder {\n  width: 100%;\n  height: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: table;\n}\n\n.moresub_btn {\n  position: relative;\n  display: block;\n  width: 49%;\n  max-width: 477px;\n  height: auto;\n  min-height: 175px;\n  padding: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: rgba(74, 74, 74, 0.1);\n  float: left;\n  margin-bottom: 20px;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  -webkit-text-decoration-style: initial;\n          text-decoration-style: initial;\n  -webkit-text-decoration-color: initial;\n          text-decoration-color: initial;\n  text-align: left;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n@media only screen and (max-width: 767px) {\n  .moresub_btn {\n    width: 100%;\n    min-height: 140px;\n    max-width: 367px;\n    margin-left: auto;\n    margin-right: auto;\n    float: none;\n  }\n}\n\n@media (max-width: 575px) {\n  .moresub_btn {\n    width: 100%;\n    min-height: 140px;\n  }\n}\n\n.moresub_btn:nth-child(2n+1) {\n  margin-right: 1%;\n}\n\n@media only screen and (max-width: 767px) {\n  .moresub_btn:nth-child(2n+1) {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.moresub_btn:nth-child(2n) {\n  margin-left: 1%;\n}\n\n@media only screen and (max-width: 767px) {\n  .moresub_btn:nth-child(2n) {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n.moresub_btn h4 {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  padding: 0 0 5px 0;\n  color: black;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.moresub_btn p {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  padding: 0 0 20px 0;\n  color: black;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 500;\n  max-width: 419px;\n}\n\n.moresub_btn u {\n  font-size: 16px;\n  line-height: 22px;\n  color: #2e84ed;\n  font-weight: 700;\n  position: absolute;\n  left: 20px;\n  bottom: 20px;\n}\n\n.disclaimer {\n  max-width: 990px;\n  clear: both;\n  padding: 20px 0 0 0;\n}\n\n.disclaimer p {\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #4a4a4a;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n}\n\nfooter {\n  padding: 0 0 50px;\n}\n\n.container__creative footer .container {\n  max-width: initial;\n}\n\nfooter .footer_links {\n  width: 100%;\n  height: auto;\n  clear: both;\n  max-width: 750px;\n  margin: 0 auto;\n}\n\nfooter .footer_links a {\n  font-family: nyt-franklin, \"helvetica neue\", arial, sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: black;\n  padding: 0 0.8%;\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-left-color: black;\n  float: left;\n  margin: 0 0 7px 0;\n}\n\nfooter .footer_links a:nth-child(1) {\n  border: none;\n  padding: 0 7px 0 0;\n}\n\nfooter .copyText {\n  display: inline;\n}\n\nfooter .copySymbol {\n  display: none;\n}\n\n.pageHeaderWithMenu + .page__content {\n  padding-top: 0;\n}\n\n.columnLayout__column {\n  padding: 15px !important;\n}\n\n.hero--text.hero .hero__content {\n  padding: 50px 0 0;\n}\n\n.hero--text {\n  padding: 0;\n}\n\n.product__container {\n  padding: 0;\n  margin-bottom: 30px;\n  margin-top: 70px;\n}\n\nfooter {\n  padding: 50px 0;\n  margin-bottom: 40px;\n}\n\n.iframe__bottom {\n  display: block;\n}\n\n.product__container__wrap {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n.columnLayout__column {\n  padding: 35px !important;\n}\n\n@media only screen and (min-width: 568px) {\n  .header__title {\n    font-size: 26px;\n  }\n  .header__offerName {\n    font-size: 26px;\n  }\n}\n", "click1": "https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html?campaignId=6L7Q6", "addAfterItem": ".product__container", "nytID": "lp_gbb_bundle_reorder_1117_var1_gateway", "optly_disable": "0", "testElement": ".product__container__content", "custom_js": "var $ = window.optimizely.get('jquery');\nvar meterClass = 'meter-interstitial';\nvar meterCount = window.NYToptly.audience(\"meter_views\");\n\nif (meterCount > 10) {\n\tmeterClass = 'meter-gateway';\n}\n\n\n$('body')\n\t.addClass('noScroll')\n\t.addClass(meterClass);\n\n\n// Close Modal\n\nvar initClose = function () {\n\t$('body').on('click', '.nytdGrowlNotifyCross', function () {\n\t\t// $('#Interstitial_optly').fadeOut('slow');\n\t\t$('#Interstitial_optly').hide();\n\t\t$('body').removeClass('noScroll');\n\t});\n};\n\ninitClose();\n\n// ----- ET ALLOCATION ------\n\nvar state = window.optimizely.get(\"state\"),\n    experimentID = \"9189170618\";\n\nvar runWhenReady = function (testFunction, inFunction, mlsecs, reps) {\n    setTimeout(function z() {\n        if (testFunction()) {\n            inFunction();\n        } else if (--reps) {\n            setTimeout(z, mlsecs);\n        }\n    }, mlsecs);\n};\n\nvar locationUrl = window.location.href;\nvar event = {\n    name: 'abtest',\n    data: {\n        test: 'MKT_lp_gbb_bundle_reorder_1117',\n        variant: 'x',\n        subject: 'ab-alloc',\n        url: locationUrl\n    },\n    type: ''\n};\n\n\nif (state.getVariationMap()[experimentID]) {\n    var currentVariation = state.getVariationMap()[experimentID];\n    event.data.variant = String(currentVariation.index);\n}\n\n\nrunWhenReady(function () {\n    return 'TAGX' in window;\n}, function () { // Fire ET Allocation\n    TAGX.EventProxy.trigger(event.name, event.data, event.type);\n    // console.log('Event sent: ' + JSON.stringify(event));\n}, 1000, 10);", "itemsForRemove": ".pageHeaderWithMenu, .header__description, #more_subscriptions, #faq_section, .pageFooter", "parentCSS": ".font-smoothing {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n.status-bar {\n  height: 32px;\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n  background-color: #fff;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n}\n\n.status-bar .status-section {\n  width: 50%;\n  float: left;\n  height: 100%;\n}\n\n.status-bar .article-remaining-wrap .articles-remain-count {\n  margin-left: 24px;\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n}\n\n.status-bar .login-wrapper {\n  text-align: right;\n}\n\n.status-bar .subscriber-link {\n  margin-right: 8px;\n  margin-top: 17px;\n  font-size: 14px;\n  position: relative;\n  top: 0;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.status-bar .subscriber-link:hover .arrow-icon {\n  left: -5px;\n}\n\n.status-bar .arrow-icon {\n  -webkit-transition: left 0.3s ease-in, 0s;\n  transition: left 0.3s ease-in, 0s;\n  height: 19.5px;\n  width: 19.5px;\n  display: inline;\n  position: relative;\n  top: 6px;\n  left: -8px;\n}\n\n.status-bar .arrow-icon .arrow-icon--path {\n  fill: none;\n  stroke: #4a4a4a;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  -webkit-transition: stroke 0.3s ease-in, 0s;\n  transition: stroke 0.3s ease-in, 0s;\n}\n\n.status-bar .closeAsset {\n  position: absolute;\n  margin: 0;\n  right: 8px;\n  top: 8px;\n  display: block;\n  cursor: pointer;\n}\n\n.status-bar .closeAsset #white-close {\n  height: 15px;\n  width: 24px;\n  z-index: 11111111;\n  cursor: pointer;\n}\n\n.status-bar .closeAsset #white-close .white-close-0 {\n  fill: none;\n  stroke: #4a4a4a;\n  stroke-width: 4;\n  stroke-miterlimit: 10;\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease-in-out, 0s;\n  transition: all 0.3s ease-in-out, 0s;\n}\n\n.status-bar .closeAsset #white-close:hover .white-close-0 {\n  cursor: pointer;\n  stroke-width: 5;\n}\n\n.status-bar .closeAsset.scroll-header-content #white-close .white-close-0 {\n  cursor: pointer;\n  stroke: #2D2D2D;\n}\n\n.user-logged-in .status-bar .subscriber-link {\n  display: none;\n}\n\n@media (max-width: 475px) {\n  .subscriber-copy-already {\n    display: none;\n  }\n}\n\n@media (max-width: 475px) {\n  .remove_small_width {\n    display: none;\n  }\n}\n\n#overlay1 {\n  position: relative;\n  background: #fff;\n  width: 100%;\n  height: 100%;\n  z-index: 1000000139;\n  opacity: .7;\n  bottom: 0;\n  left: 0 !important;\n}\n\n#overlay3 {\n  background: #fff;\n  width: 100%;\n  height: 100%;\n  opacity: .7;\n  position: relative;\n  z-index: 1000000139;\n  bottom: 0;\n  left: 0 !important;\n}\n\nbody {\n  overflow-y: auto;\n}\n\nbody.noScroll {\n  overflow-y: hidden;\n}\n\n#supercontainer {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0 !important;\n  bottom: 110px;\n  padding: 0;\n  z-index: 1000000139;\n}\n\n.container__creative {\n  position: fixed;\n  width: 94%;\n  max-width: 1170px;\n  height: 81vh;\n  overflow: hidden;\n  padding: 0;\n  border-style: solid;\n  border-width: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  background: #fff;\n  background-repeat: none;\n  z-index: 1000000139;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  -webkit-box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.container__creative .scroll-container {\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  top: -1px;\n  bottom: 0;\n  left: 0;\n  right: -17px;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n\n.container__creative section {\n  display: block;\n  height: auto;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.container__creative .container {\n  max-width: 985px;\n  padding: 40px;\n  margin: 0 auto;\n  height: auto;\n  width: 100%;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@media only screen and (max-width: 1024px) {\n  .container__creative .container {\n    padding: 40px 2%;\n  }\n}\n\n.container__creative .subtitle .container {\n  padding: 0;\n}\n\n.container__creative .subtitle p {\n  font-size: 20px;\n}\n\n.container__creative a:hover {\n  text-decoration: none;\n}\n\n.areyou_student {\n  color: #666;\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 35px;\n  font-family: \"nyt-franklin\", \"Helvetica Neue\", Arial, sans-serif;\n}\n\n.areyou_student a {\n  color: #999;\n  text-decoration: underline;\n}\n\n#mag-issue-nav {\n  display: none;\n}\n\n.status-bar .closeAsset,\n.inst_art {\n  display: none;\n}\n\n.meter-interstitial .status-bar .closeAsset {\n  display: block;\n}\n\n.meter-interstitial .inst_art {\n  display: inline;\n}\n\n.meter-interstitial .gw_art {\n  display: none;\n}\n\n.meter-interstitial .status-bar .subscriber-link {\n  margin-right: 32px;\n}\n\n#optimizelyIframeContainer {\n  position: relative;\n  width: 100%;\n  max-width: 1570px;\n  height: 81vh;\n  overflow: hidden;\n  padding: 0;\n  border-style: solid;\n  border-width: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  background: #000;\n  background-repeat: none;\n  z-index: 1000000139;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n@media only screen and (device-width: 1536px) {\n  #optimizelyIframeContainer {\n    /* For general iPad mini 4 layouts */\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll;\n  }\n}\n\n#optimizelyIframe {\n  width: 100%;\n  height: 100%;\n}\n\n.iframe__bottom {\n  display: none;\n}\n\n@media only screen and (device-width: 768px) {\n  #optimizelyIframeContainer {\n    /* For general iPad layouts */\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll;\n  }\n}\n\n/*\n * Variables\n */\n/*\n * Background Skeleton for Loading\n */\n.container__creative {\n  background-image: linear-gradient(90deg, rgba(245, 245, 245, 0) 0, rgba(245, 245, 245, 0.8) 50%, rgba(245, 245, 245, 0) 100%), linear-gradient(white 34px, transparent 0), linear-gradient(white 26px, transparent 0), linear-gradient(white 26px, transparent 0), repeating-linear-gradient(to right, #fff, #fff 10%, lightgrey 10%, lightgrey 30%), linear-gradient(#f5f5f5 280px, transparent 0);\n  background-size: 200px 280px, 420px 34px, 600px 26px, 200px 26px, 100% 280px, 100% 100%;\n  background-position: -50% 0, 50% 85px, 50% 140px, 50% 190px, 0 320px, 0 0;\n  background-repeat: no-repeat;\n  -webkit-animation: loading 1.5s infinite;\n          animation: loading 1.5s infinite;\n}\n\n@-webkit-keyframes loading {\n  to {\n    background-position: 150% 0, 50% 85px, 50% 140px, 50% 190px, 0 320px, 0 0;\n    background-size: 200px 280px, 420px 34px, 600px 26px, 200px 26px, 100% 280px, 100% 100%;\n  }\n}\n\n@keyframes loading {\n  to {\n    background-position: 150% 0, 50% 85px, 50% 140px, 50% 190px, 0 320px, 0 0;\n    background-size: 200px 280px, 420px 34px, 600px 26px, 200px 26px, 100% 280px, 100% 100%;\n  }\n}\n\n.status-bar {\n  color: #fff;\n  background-color: #000;\n}\n\n.status-bar .arrow-icon .arrow-icon--path {\n  stroke: #fff;\n}\n", "iframeJS": "var $ = window.optimizely.get('jquery');\n\n$('.legal').last().remove();\n", "click3": "", "click4": "", "iframeSrc": "https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html?mktgEmbedSrc=gateway&campaignId=6KYF6", "click2": "", "parentHTML": "<span class=\"adxInfo mktInfo\" style=\"display:none;\">campaign: lp_gbb_bundle_reorder_1117, creative: Gateway, source: optimizely, creator: Gurnot, Frederic</span>\n<div id=\"supercontainer\" class=\"nytdGrowlUIContainer\">\n    <div id=\"overlay1\"></div>\n    <div id=\"overlay3\"></div>\n</div>\n\n\n<div class=\"container__creative font-smoothing\">\n    <header class=\"status-bar\">\n        <div class=\"article-remaining-wrap status-section\">\n            <p class=\"articles-remain-count\"><span class=\"inst_art\">4</span><span class=\"gw_art\">0</span> articles remaining <span class=\"remove_small_width\">this month</span></p>\n        </div>\n\n        <div class=\"login-wrapper status-section\">\n            <a class=\"subscriber-link sitewideLogInModal login-modal-trigger\">\n                <span class=\"subscriber-copy-already\">Already a subscriber?</span>\n                <span class=\"subscriber-copy-login\">Log in <svg class=\"arrow-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 19.3 19.5\"><path class=\"arrow-icon--path\" d=\"M8.7 7.1l3.4 3.6M8.7 12.8l3.4-3.5\"></path></svg></span>\n            </a>\n            <a data-content-placement=\"1\" class=\"closeAsset nytdGrowlNotifyCross\">\n                <svg id=\"white-close\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 15\">\n                    <g stroke=\"#fff\" stroke-width=\"4\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"square\">\n                        <path d=\"M3.704 3.182L11.94 11.4M20.774 3.6l-8.234 8.218\"/>\n                    </g>\n                </svg>\n            </a>\n\n        </div>\n    </header>\n\n    <!--<div class=\"loading__card\"></div>-->\n\n    <div id=\"optimizelyIframeContainer\"></div>\n\n    <div id=\"iframe__addon\" class=\"iframe__bottom\">\n        <section class=\"more_subscriptions\">\n\n            <div class=\"container\">\n\n                <div class=\"more_sub_holder\">\n\n                    <a href=\"%%CLICKTHRU1%%#more_subscriptions\" class=\"moresub_btn\" target=\"_blank\" id=\"more-subscription-options\">\n                        <h4>More Subscription Options</h4>\n                        <p> Education rates, corporate rates and more.</p>\n                        <u>View all</u>\n                    </a><!-- END of moresub_btn -->\n\n                    <a href=\"%%CLICKTHRU1%%#faq_section\" class=\"moresub_btn\" target=\"_blank\" id=\"faq-learn-more\">\n                        <h4>Frequently Asked Questions</h4>\n                        <p>Find answers to commonly asked questions.</p>\n                        <u>Learn more</u>\n                    </a><!-- END of moresub_btn -->\n                </div><!-- END of more_sub_holder -->\n\n                <div class=\"disclaimer\">\n                    <p>\n                        <strong>No commitment required, cancel anytime.</strong><br>\n                        Does not include e-reader edition. Mobile apps are not supported on all devices. Offer not available for current subscribers. Home Delivery offer valid for new subscribers in areas served by The New York Times Delivery Service. All subscriptions will automatically renew and your credit card or PayPal account will be charged in advance of each billing period unless canceled. Other restrictions and taxes may apply.</p>\n                </div><!-- END of disclaimer -->\n            </div><!-- END of container -->\n        </section>\n\n\n        <footer>\n            <div class=\"container\">\n                <div class=\"footer_links\">\n                    <a class=\"bordy\" id=\"copyright_ft\" target=\"_blank\" href=\"https://www.nytimes.com/content/help/rights/copyright/copyright-notice.html\"><span class=\"copyText\">Copyright </span><span class=\"copySymbol\">\u00a9 </span><span class=\"copyYear\">2017</span></a>\n                    <a class=\"bordy\" target=\"_blank\" href=\"http://www.nytco.com/\">The New York Times Company</a>\n                    <a class=\"bordy\" target=\"_blank\" href=\"https://www.nytimes.com/privacy\">Privacy Policy</a>\n                    <a class=\"bordy\" target=\"_blank\" href=\"https://www.nytimes.com/content/help/rights/sale/terms-of-sale.html\">Terms of Sale</a>\n                    <a class=\"bordy\" target=\"_blank\" href=\"https://www.nytimes.com/content/help/contact/directory.html\">Contact Us</a>\n                    <a class=\"\" target=\"_blank\" href=\"https://myaccount.nytimes.com/membercenter/feedback.html\">Feedback</a>\n                    <a target=\"_blank\" id=\"help_ft\" href=\"https://www.nytimes.com/membercenter/sitehelp.html\">Help</a>\n                    <a href=\"https://myaccount.nytimes.com/auth/login?URI=https://www.nytimes.com\" id=\"login_dig\" style=\"display: none;\">Digital</a>\n                </div><!-- END of footer_links -->\n            </div><!-- END of container -->\n        </footer>\n    </div>\n\n</div>\n\n", "selectorsForClickEvent": "#gw-bg .gw-clickable, #cta-extended"}, "id": "E04B5627-E13C-46DB-AD0B-2169A80B8ADE", "dependencies": [], "type": "widget", "widget_id": "8495224061"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8J36Y.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "E94018E6-F938-4B69-91E8-A55C64C2846F"}]}], "name": "Control"}, {"id": "9185270182", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/4068468b12aba816fd6a002564c9a7b03f671b354c2989f74f86e1735de67798.js", "dependencies": [], "id": "22979F39-DD54-469A-996C-7F7F92F59CF4"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/6db2cd800e84c161f0fede32d2f0ac139d6c0ae81982d4993668070c438c580f.js", "dependencies": [], "id": "AF805A9D-212D-4B8E-9C0F-A9E2B9B8F1A3"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/7b5363ef1f27a3872e0b3f6b5aa93aaf8cedbcb3e0a63035d25f0bcade4d485d.js", "dependencies": [], "id": "20E280D3-08E9-46DD-977A-42FDE893B17A"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8J36Y.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "8CE541F0-75AF-42ED-AB71-FE5938B95E20"}]}], "name": "Variation #1"}, {"id": "9186340336", "actions": [{"viewId": "6252880791", "changes": [{"src": "/actions/9f75393c068d10336108a8f7ec36a48db5a3be1f00badb9f1e99eb298b6a6362.js", "dependencies": [], "id": "92EED09C-B90E-4252-92D1-31D8077CE861"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/6109516afbcee9f3b5e9c96b7f8a93849f7179559b01cab66724d53811995b0d.js", "dependencies": [], "id": "8260CD30-8192-4465-A64F-814A699CE635"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/1763fe1a0fa53b1792c05eaabfe67b3b04fc356debabdf4936975f17569bc0d6.js", "dependencies": [], "id": "3428E882-3443-443D-92F5-B8E7CD2891B2"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8J36Y.html?mktgrfr=gw_mob&campaignId=67LWR", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "F88FF36D-7150-4D7C-B054-50C88B0B3E18"}]}], "name": "Variation #2"}], "audienceIds": ["and", "6992450319", "7814230912", "8413422098", "8627862282", "9189513123", "8183220341", "9030630106"], "changes": null, "id": "9189170618", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[cookie] exo_nons_usgm_saleOneDay_1117", "name": "Nons | USGM | One Day Sale (non-iframe) | 2017-11-9 | TESTING DH", "bucketingStrategy": null, "variations": [{"id": "9262231414", "actions": [{"viewId": "4129021553", "changes": []}, {"viewId": "8179870018", "changes": []}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/multiproduct/lp8J78B.html?mktgrfr=gw_mob&campaignId=6RRH8", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "BCD8CCF9-2535-488C-AB51-C643E4BCE3C5"}]}, {"viewId": "8185280121", "changes": []}, {"viewId": "4137230627", "changes": [{"src": "/actions/bb0443b9a01822d1c1dd4c0cf72c8c99c8aed9885436a63e2e21dde6ff9059ad.js", "dependencies": [], "id": "F53AFDB3-E1D3-496E-A1A8-D50B705072AD"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/059e17182a0ef03f0c03510c5fff8c84ed7d9de77a2d1122826b9b91642c86a7.js", "dependencies": [], "id": "4DE6410C-443E-4A22-8796-280CFD6713C0"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "06721534-44FD-472C-BA21-2F64A9B24707"}]}], "name": "CRS-17750 - 50%, mustard bg. \"The Deadline Sale\""}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "8382761169"], "changes": null, "id": "9256101478", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Geo] US,[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[cookie] exo_nons_usgm_saleOneDay_1117", "name": "Nons | USGM | One Day Sale Nov Refresh (Welcome, Bar1, Growl) | 2017-11-9 | TESTING SM | exo_nons_usgm_saleOneDay_1117", "bucketingStrategy": null, "variations": [{"id": "9264250040", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/2782e0a6c20e340848b9e8f35decb4220bdbe28612de1327a5d017bb4ebea205.js", "dependencies": [], "id": "5CC4A6A3-6B44-4A47-8008-916EE059F8F9"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/25abf7960ae75290fddb2bccfb5c80051f6e69b94612ef40308d2c41a79825b6.js", "dependencies": [], "id": "07CFEE2E-0B55-47D5-8524-10B997108EBE"}]}, {"viewId": "8309420148", "changes": []}, {"viewId": "8185280121", "changes": [{"src": "/actions/3166141429f35a5e3a791c1a4d8feb6d3fda414034c7d390a57d39a92ca4799a.js", "dependencies": [], "id": "EC9636E7-DF52-459C-950A-2C3FC1F3D6C9"}]}, {"viewId": "4137230627", "changes": []}, {"viewId": "8187250053", "changes": []}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "CRS-18260 - Deadline Sale @ 50%, mustard bg and clock"}], "audienceIds": ["and", "7814230912", "6992450319", "8413422098", "8382761169"], "changes": null, "id": "9261820065", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,exo_nons_inyt_OneDaySale_1117=true,[Geo] WW ex India, US,Exclude IE 11", "name": "Nons | INYT | One Day Sale | TESTING RTF 2017-11-09", "bucketingStrategy": null, "variations": [{"id": "9267580153", "actions": [{"viewId": "4129021553", "changes": [{"src": "/actions/bab5aa59cf129e4272c020a190ac0bc1e2ef4aea4d2892f732e1143d1e294599.js", "dependencies": [], "id": "9C089178-3E15-401C-A105-CE130D7B3E9A"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/f763d754951c528cc5bf1074691cff1b011f1bd9452dfa895d9fbb20df272ae8.js", "dependencies": [], "id": "A0EF18B4-1DE5-4568-9270-D598268D30B3"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscription/inyt/lp8U87X.html?mktgrfr=gw_mob&campaignId=6RU4W", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "BCD8CCF9-2535-488C-AB51-C643E4BCE3C5"}]}, {"viewId": "8185280121", "changes": [{"src": "/actions/8f3e025a23fdb8fc2a090b42390c1254643c6d404367af1e9a3ba36dd36076c0.js", "dependencies": [], "id": "B10FFAC7-C452-4E04-9E85-EAF2A7764385"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/6ae547db6a3e0f3bf127fe93f9b8619675e263953fac67b32805f80de5c57ca6.js", "dependencies": [], "id": "C09CB90F-2D9D-473E-AF02-EC066D1BC700"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/2b0f78d5cbc339b88b1a5ac0abb1c4bdb3cb8b9c6f720a56abe5e6aae1b088de.js", "dependencies": [], "id": "8F64DC42-C17D-48BA-AF94-A082670E7816"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "id": "06721534-44FD-472C-BA21-2F64A9B24707", "dependencies": [], "type": "widget", "widget_id": "killset_pocII"}]}], "name": "CRS-18329 - 60%, mustard bg (\"clock\" creative). \"The Deadline Sale\""}], "audienceIds": ["and", "6992450319", "9267390231", "8302021295", "8627862282"], "changes": null, "id": "9256900249", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[geo] UK and Canada,[cookie] exo_nons_inyt_bauInCurrencyIframe_1117", "name": "Nons | INYT | August BAU (all assets in currency, iframe) | UK and Canada | 2017-11-3 | TESTING DH", "bucketingStrategy": null, "variations": [{"id": "9268171403", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/98f9e95797cad30aedafbee66c1c7f313944474ce196155c794fd7ed05e13465.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/a871ab6184206e5d40ce12d7aab47198824b983ed05b281caae83a02da310373.js", "dependencies": [], "id": "BF233E03-754C-4C77-9169-3F6F4B8086DC"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/819b978cc463334c096e226ace8d8d781a92ae422830be066898d93e29b2b2df.js", "dependencies": [], "id": "814A74B5-CAE7-4AFF-9692-9F6DE02A6CEB"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/b93f21b9f7610dd143e6e78483cedbb9f28bebf2b085f2cbdc927b7c63746345.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/22b9c13e514627094afadfcbfdf7b46ef8c476f2a182e453d40171c2ec22cf80.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp87JWF.html?campaignId=6WYRL", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5"}]}], "name": "INYT August BAU - new OC's"}], "audienceIds": ["and", "6992450319", "8413422098", "9183314943", "9262080821"], "changes": null, "id": "9269150551", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Subscriber Type] Non-Subs,[WAT] Exclude All EDU segments,[Geo] WW ex India, US,[cookie] exo_nons_inyt_bauInCurrencyIframe_1117", "name": "Nons | INYT | August BAU (all assets in currency, iframe) | WW Geo ex India, ex UK, ex Canada | 2017-10-17 | TESTING", "bucketingStrategy": null, "variations": [{"id": "9176640441", "actions": [{"viewId": "8185280121", "changes": [{"src": "/actions/0854c0d4c1f88cbae88b8285608a19c60c48767106f65c4c5b9e65b34e7c8d68.js", "dependencies": [], "id": "C435EA93-490B-40F0-AB80-DEFA046CC720"}]}, {"viewId": "4137230627", "changes": [{"src": "/actions/b03ca59811ecd5f64ad69a649a9970715ec561a651814d694a9d996f53bdc587.js", "dependencies": [], "id": "52547610-D75B-41C3-9E8E-68EE5E84F552"}]}, {"viewId": "8187250053", "changes": [{"src": "/actions/4ba726d7a7b230b931862b05a392034efb74a837ffbaa393652b62f038744081.js", "dependencies": [], "id": "AC326D1A-EA0D-46FF-9702-91D1F9C75071"}, {"src": "/actions/4ba726d7a7b230b931862b05a392034efb74a837ffbaa393652b62f038744081.js", "dependencies": [], "id": "52547610-D75B-41C3-9E8E-68EE5E84F552"}]}, {"viewId": "8179870018", "changes": [{"src": "/actions/673a24c62db854b7150593ee5fde55393834c935b43ba8c016e629ba7b3154eb.js", "dependencies": [], "id": "E98C0E7D-AC0C-43A8-825B-DD010541974E"}]}, {"viewId": "4129021553", "changes": [{"src": "/actions/fe2842d69b1a40db589ac3961ae9fa1d4c57fe1b3c0290dcdb9c79460e9c1150.js", "dependencies": [], "id": "0F7C6E10-F18A-4EB3-8322-4CAF04A6C9CC"}]}, {"viewId": "8309420148", "changes": [{"dest": "https://www.nytimes.com/subscriptions/inyt/lp87JWF.html?mktgrfr=gw_mob&campaignId=6WYRL", "allowAdditionalRedirect": false, "dependencies": [], "preserveParameters": true, "type": "redirect", "id": "91503CAB-4730-4A8A-BEE3-393342927B02"}]}, {"viewId": "4128620616", "changes": [{"name": "Killset", "config": {"placement_name": "Anchor Ad"}, "widget_id": "killset_pocII", "dependencies": [], "type": "widget", "id": "C8AC602D-5C2A-43AE-BFDD-983EFAFD70A5"}]}], "name": "INYT August BAU - green bg - Subscribe to debate, not division"}], "audienceIds": ["and", "6992450319", "8413422098", "8302021295", "9262080821"], "changes": null, "id": "9176620850", "integrationSettings": null}], "id": "8284715063", "weightDistributions": null, "name": "* Digital Media Ad Ops (Traffic / Rich Media)", "groupId": null, "commitId": "9267311195", "decisionMetadata": {"experimentPriorities": [[{"entityId": "9269150551", "endOfRange": null}], [{"entityId": "9176620850", "endOfRange": null}], [{"entityId": "9256101478", "endOfRange": null}], [{"entityId": "9261820065", "endOfRange": null}], [{"entityId": "9178095162", "endOfRange": null}], [{"entityId": "9191265308", "endOfRange": null}], [{"entityId": "9186172360", "endOfRange": null}], [{"entityId": "9028072929", "endOfRange": null}], [{"entityId": "8786394591", "endOfRange": null}], [{"entityId": "9256900249", "endOfRange": null}], [{"entityId": "8385456763", "endOfRange": null}, {"entityId": "8349521001", "endOfRange": null}], [{"entityId": "8376098187", "endOfRange": null}, {"entityId": "8350705198", "endOfRange": null}], [{"entityId": "8352043770", "endOfRange": null}], [{"entityId": "8633980644", "endOfRange": null}], [{"entityId": "8635195452", "endOfRange": null}], [{"entityId": "8289681526", "endOfRange": null}, {"entityId": "8328272359", "endOfRange": null}], [{"entityId": "8790163801", "endOfRange": null}], [{"entityId": "8314135793", "endOfRange": null}, {"entityId": "8325480191", "endOfRange": null}, {"entityId": "8320950185", "endOfRange": null}], [{"entityId": "8787538787", "endOfRange": null}], [{"entityId": "8634300597", "endOfRange": null}], [{"entityId": "8327971049", "endOfRange": null}], [{"entityId": "8782800535", "endOfRange": null}], [{"entityId": "9105930856", "endOfRange": null}], [{"entityId": "9175835145", "endOfRange": null}], [{"entityId": "8780951779", "endOfRange": null}, {"entityId": "8791391519", "endOfRange": null}, {"entityId": "8797442044", "endOfRange": null}], [{"entityId": "9104950234", "endOfRange": null}], [{"entityId": "8512411082", "endOfRange": null}], [{"entityId": "8307281703", "endOfRange": null}], [{"entityId": "9177815804", "endOfRange": null}], [{"entityId": "8788731175", "endOfRange": null}], [{"entityId": "8736082146", "endOfRange": null}], [{"entityId": "8737255807", "endOfRange": null}], [{"entityId": "9181575034", "endOfRange": null}], [{"entityId": "9189170618", "endOfRange": null}], [{"entityId": "8301150742", "endOfRange": null}], [{"entityId": "8325906517", "endOfRange": null}], [{"entityId": "8294240258", "endOfRange": null}], [{"entityId": "9110040149", "endOfRange": null}], [{"entityId": "8728672975", "endOfRange": null}], [{"entityId": "8306482752", "endOfRange": null}], [{"entityId": "8413171281", "endOfRange": null}], [{"entityId": "8786677278", "endOfRange": null}], [{"entityId": "8447590384", "endOfRange": null}], [{"entityId": "8311228072", "endOfRange": null}], [{"entityId": "8457897738", "endOfRange": null}], [{"entityId": "8633622643", "endOfRange": null}], [{"entityId": "8904941324", "endOfRange": null}], [{"entityId": "8544813328", "endOfRange": null}], [{"entityId": "9184426896", "endOfRange": null}], [{"entityId": "9186604754", "endOfRange": null}]], "offerConsistency": true}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Antlers at Vail", "name": "Antlers at Vail", "bucketingStrategy": null, "variations": [{"id": "8278370960", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/533f5283c11fb83990591ab00b8f22a99f5c0d9edd8abfee7f3e0356b769882d.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8275464348"], "changes": null, "id": "8261075815", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Goldsmiths Univ London", "name": "Goldsmiths University London", "bucketingStrategy": null, "variations": [{"id": "8278400161", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/00da75de97cf0cef13540c89a44307e42acbd326eb77f252ff1fe9de9c61af75.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8269256599"], "changes": null, "id": "8267122938", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] National Library of the Czech Republic", "name": "National Library of the Czech Republic", "bucketingStrategy": null, "variations": [{"id": "8275531699", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/018a04c7b773e76b07488a85cdc16d5e6a7cac9cb27d6d80a3576fe3773ec669.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8252297528"], "changes": null, "id": "8279370590", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Big Sky Resort", "name": "Big Sky Resort", "bucketingStrategy": null, "variations": [{"id": "8293961037", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/dc616ff43d320623482aeb8b0637823137a89dd0a018fde3fdf545ed279c2482.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8273176592"], "changes": null, "id": "8290607071", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Conrad Chicago", "name": "Conrad Chicago", "bucketingStrategy": null, "variations": [{"id": "8297414811", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/d93c011636e330fcbdae1ee33693b9d2aa4d4bf4c29be2876251a32f8c8212d3.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8269873343"], "changes": null, "id": "8292962304", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Vancouver Public Library", "name": "Vancouver Public Library", "bucketingStrategy": null, "variations": [{"id": "8297780473", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/2d6ba079e394a8630c326519242ae9fad402c4dddc2050f97fe3df407e0fb465.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8278311314"], "changes": null, "id": "8293001188", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Union Hotel", "name": "Union Hotel", "bucketingStrategy": null, "variations": [{"id": "8298711682", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/0cda1838eb31a0ae963f6efe1bdcc2296bb54c5b6727ab6be18b37ef6ce0edb7.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8295712999"], "changes": null, "id": "8295513989", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Sewickley Public Library", "name": "Sewickley Public Library", "bucketingStrategy": null, "variations": [{"id": "8299451611", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/faa86aecc2ac962a642f611d7bfda4f72f5577afdc551502af40825d753571b3.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8277156228"], "changes": null, "id": "8296840679", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Wythe Hotel", "name": "Wythe Hotel", "bucketingStrategy": null, "variations": [{"id": "8287119419", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/0db9158be3b03385c16453f0bb11bd19536dfd5d25b9898276fd19848bccde4e.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8266808565"], "changes": null, "id": "8301320877", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Life Hotel", "name": "Life Hotel", "bucketingStrategy": null, "variations": [{"id": "8322167001", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/4802e09635d42f3a7f6837bcc9affaef89126e3b2ac4524ebb465ed214edd50d.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8330140946"], "changes": null, "id": "8316104482", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Ottawa Public Library", "name": "Ottawa Public Library", "bucketingStrategy": null, "variations": [{"id": "8319003874", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/d13e18aae279eeb8469e96f419db0b7b8124a6169c7fad94221294d105e5db27.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8325581970"], "changes": null, "id": "8325631400", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Homewood Suites Seattle Convention Center", "name": "Homewood Suites Seattle Convention Center", "bucketingStrategy": null, "variations": [{"id": "8346030197", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/ac13db9e0fdb54453e927459e9249df8e60c30f7049e5310d299eede7ce63c23.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8354161151"], "changes": null, "id": "8342062730", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Condor Hotel", "name": "The Condor Hotel", "bucketingStrategy": null, "variations": [{"id": "8475052028", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/6064784226cf394dfda5507182a98fa12b296dbdd9e4ad87f86fbf7e744d3225.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8472101818"], "changes": null, "id": "8482800763", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] Anatolia College/American College of Thessaloniki", "name": "Anatolia College/American College of Thessaloniki", "bucketingStrategy": null, "variations": [{"id": "8484301108", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/ef173c676e5b1ed4659031e9c485299f9c3f0fda8e4a369e05d1c7b67b5b2fb1.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8480010926"], "changes": null, "id": "8484670567", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,[B2B] DIIS Library", "name": "DIIS Library (Danish Institute of International Studies)", "bucketingStrategy": null, "variations": [{"id": "8688262690", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/1b6f97c220f15a27ed57b8899e67b28588b1a3f497576c647138873e9d441ac6.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8183220341", "8688780979"], "changes": null, "id": "8694350563", "integrationSettings": null}, {"weightDistributions": null, "audienceName": "[B2B] KLNF,[Cookie] abTest does NOT exist", "name": "Kramer Levin (was KLNF Libraries)", "bucketingStrategy": null, "variations": [{"id": "8292451117", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/f6778331e2b2e8e44a4573652e950acacf6a28e83ab75d3bcbe99acf6828b6a9.js", "dependencies": [], "id": "C972A048-6D7F-449E-A3F4-50F20DA8B44E"}]}], "name": "Fixed Header"}], "audienceIds": ["and", "8279371394", "8183220341"], "changes": null, "id": "8290734084", "integrationSettings": null}], "id": "8273730456", "weightDistributions": null, "name": "B2B Personalization Headers", "groupId": null, "commitId": "9199544541", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8484670567", "endOfRange": null}, {"entityId": "8261075815", "endOfRange": null}, {"entityId": "8290607071", "endOfRange": null}, {"entityId": "8482800763", "endOfRange": null}, {"entityId": "8292962304", "endOfRange": null}, {"entityId": "8694350563", "endOfRange": null}, {"entityId": "8267122938", "endOfRange": null}, {"entityId": "8342062730", "endOfRange": null}, {"entityId": "8290734084", "endOfRange": null}, {"entityId": "8316104482", "endOfRange": null}, {"entityId": "8279370590", "endOfRange": null}, {"entityId": "8325631400", "endOfRange": null}, {"entityId": "8296840679", "endOfRange": null}, {"entityId": "8295513989", "endOfRange": null}, {"entityId": "8293001188", "endOfRange": null}, {"entityId": "8301320877", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8263601258"], "experiments": [{"weightDistributions": [{"entityId": "8505542573", "endOfRange": 1000}, {"entityId": "8503991841", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Subscriber Type] Subs ,[Page Targeting] Exclude the Homepage,[Geo] WW ex US", "name": "Sitewide Yearlong | ROS | Subs | WW Geo | 2017-07-24", "bucketingStrategy": null, "variations": [{"id": "8505542573", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/61c157d11be68f199a7c0b7c4f591a3983287570ddabce0fb46c266e3209ad9d.js", "dependencies": [], "id": "A8647C0B-5C67-43A7-A1B0-92BD77E0C4FC"}]}], "name": "MARO-109 Sitewide Yearlong - ROS version"}, {"id": "8503991841", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "6696333431", "8456760649", "7209740780"], "changes": null, "id": "8501492541", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8508732853", "endOfRange": 1000}, {"entityId": "8504884051", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Geo] US,[Subscriber Type] Non-Subs,[Page Targeting] Homepage   ,[Meter] < 05", "name": "Sitewide Yearlong | Homepage | Nonsubs, mtr < 5 | US Geo | 2017-07-24", "bucketingStrategy": null, "variations": [{"id": "8508732853", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/377295cc3cb89da628a73ee98afbcf60bd3488787562c7ef0889805fea6fd4c9.js", "dependencies": [], "id": "075EF19C-886F-4FB7-A905-FAB2FF03789F"}]}], "name": "MARO-109 Sitewide Yearlong - Homepage"}, {"id": "8504884051", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "7814230912", "6992450319", "6720163093", "8506542033"], "changes": null, "id": "8501901601", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8502743957", "endOfRange": 1000}, {"entityId": "8504412706", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Geo] US,[Page Targeting] Homepage   ,[Subscriber Type] Subs ,[Dayparting] Primetime - for Surveys", "name": "Sitewide Yearlong | Homepage | Subs | US Geo | 2017-07-24", "bucketingStrategy": null, "variations": [{"id": "8502743957", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b9042b1fdc77a33b63a5da70728f76b0857cd8c2e16cb84456fcefa88568d0d4.js", "dependencies": [], "id": "39315CCD-B3AE-4F64-89CA-2695D7740316"}]}], "name": "MARO-109 Sitewide Yearlong - Homepage - Prime hours only"}, {"id": "8504412706", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "7814230912", "6720163093", "6696333431", "8510671921"], "changes": null, "id": "8502813334", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8506543963", "endOfRange": 1000}, {"entityId": "8508213096", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Subscriber Type] Non-Subs,[Page Targeting] Exclude the Homepage,[Geo] WW ex US,[Meter] < 03", "name": "Sitewide Yearlong | ROS | Nonsubs, mtr < 3 | WW Geo | 2017-07-24", "bucketingStrategy": null, "variations": [{"id": "8506543963", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/b59fd323fc50354600046c7019aaf541a5ec6c411c5b198c3c82bbef4c485e0e.js", "dependencies": [], "id": "949FAF3A-9261-472A-965B-E10FA85ED565"}]}], "name": "MARO-109 Sitewide Yearlong - ROS version"}, {"id": "8508213096", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "6992450319", "8456760649", "7209740780", "8510343753"], "changes": null, "id": "8503643377", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8507781883", "endOfRange": 1000}, {"entityId": "8507622171", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Geo] US,[Subscriber Type] Subs ,[Page Targeting] Exclude the Homepage", "name": "Sitewide Yearlong | ROS | Subs | US Geo | 2017-07-24", "bucketingStrategy": null, "variations": [{"id": "8507781883", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/ff9bd535f2587f97fb65a01289cb9aeba9f7277d4062adc6fa04c78ac31255f2.js", "dependencies": [], "id": "347B1E71-589E-43F6-AFFA-408C830C7899"}]}], "name": "MARO-109 Sitewide Yearlong - ROS version"}, {"id": "8507622171", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "7814230912", "6696333431", "8456760649"], "changes": null, "id": "8503832428", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8501482475", "endOfRange": 1000}, {"entityId": "8507951433", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Page Targeting] Homepage   ,[Subscriber Type] Subs ,[Dayparting] Primetime - for Surveys,[Geo] WW ex US", "name": "Sitewide Yearlong | Homepage | Subs | WW Geo | 2017-07-24", "bucketingStrategy": null, "variations": [{"id": "8501482475", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/146ae020d8183d7ee1e438c43d6f6debf2df94bc6865fdf2fbd881bcf38798f5.js", "dependencies": [], "id": "7FE69307-08CB-44A4-B8ED-16219C9CB5C5"}]}], "name": "MARO-109 Sitewide Yearlong - Homepage - Prime hours only"}, {"id": "8507951433", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "6720163093", "6696333431", "8510671921", "7209740780"], "changes": null, "id": "8507732459", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8507691068", "endOfRange": 1000}, {"entityId": "8498034020", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Subscriber Type] Non-Subs,[Page Targeting] Homepage   ,[Meter] < 05,[Geo] WW ex US", "name": "Sitewide Yearlong | Homepage | Nonsubs, mtr < 5 | WW Geo | 2017-07-24", "bucketingStrategy": null, "variations": [{"id": "8507691068", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/75f8747ee5586c20dfdb656fbf9f7307901593ce76dde4aaa18d32b978641744.js", "dependencies": [], "id": "FF0A9D79-9453-46EE-B945-ED3B58FFA644"}]}], "name": "MARO-109 Sitewide Yearlong - Homepage"}, {"id": "8498034020", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "6992450319", "6720163093", "8506542033", "7209740780"], "changes": null, "id": "8509222921", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8509181633", "endOfRange": 1000}, {"entityId": "8507173252", "endOfRange": 10000}], "audienceName": "[Cookie] survey_triggered does NOT exist,[Page Targeting] nytimes.com domain only,[Subscriber Type] Non-Subs,[Page Targeting] Exclude the Homepage,[Geo] US,[Meter] < 02", "name": "Sitewide Yearlong | ROS | Nonsubs, mtr < 2 | US Geo | 2017-07-24", "bucketingStrategy": null, "variations": [{"id": "8509181633", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/abcf0912174b63be15ecd1c5c39b2fe1dcd0961bb7957952618045a186f2d674.js", "dependencies": [], "id": "C17DF4F0-EE0A-47C4-B1A0-55310572372D"}]}], "name": "MARO-109 Sitewide Yearlong - ROS version"}, {"id": "8507173252", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}], "audienceIds": ["and", "8404891843", "8485734812", "6992450319", "8456760649", "7814230912", "6926750945"], "changes": null, "id": "8513201547", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8896492731", "endOfRange": 9900}, {"entityId": "8898671695", "endOfRange": 10000}], "audienceName": "[Geo] US,[Cookie] abTest does NOT exist,[Cookie] survey_triggered does NOT exist,[Cookie] XvOpt does not exist,[Page Targeting] Exclude the Homepage,[Page Targeting] nytimes.com domain only", "name": "Brand Tracker Q4 | US Geo | 2017-10-03 - 2017-12-31", "bucketingStrategy": null, "variations": [{"id": "8896492731", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}, {"id": "8898671695", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/22f9f6b1ba65cebe8bce6abcbe16cb070407a9cc450be029e7df336f7cb01714.js", "dependencies": [], "id": "4BE36696-9D62-4BA4-89BC-A84E45949648"}]}], "name": "MARO-172 Brand Tracker US"}], "audienceIds": ["and", "7814230912", "8183220341", "8404891843", "8325342424", "8456760649", "8485734812"], "changes": null, "id": "8897173684", "integrationSettings": null}, {"weightDistributions": [{"entityId": "8928302749", "endOfRange": 9200}, {"entityId": "8935771160", "endOfRange": 10000}], "audienceName": "[Cookie] abTest does NOT exist,[Cookie] survey_triggered does NOT exist,[Cookie] XvOpt does not exist,[Page Targeting] Exclude the Homepage,[Page Targeting] nytimes.com domain only,[Geo] Australia", "name": "Brand Tracker Q4 | Australia Geo | 2017-10-09 - 2017-12-31", "bucketingStrategy": null, "variations": [{"id": "8928302749", "actions": [{"viewId": "8263601258", "changes": []}], "name": "Blank (cannot adjust Holdback)"}, {"id": "8935771160", "actions": [{"viewId": "8263601258", "changes": [{"src": "/actions/d4f22c697e18a1d52ac28e2f6ab575354b074103914bd1a88d3e9f3482e5c103.js", "dependencies": [], "id": "4BE36696-9D62-4BA4-89BC-A84E45949648"}]}], "name": "MARO-173 Brand Tracker Australia"}], "audienceIds": ["and", "8183220341", "8404891843", "8325342424", "8456760649", "8485734812", "7798550316"], "changes": null, "id": "8956270672", "integrationSettings": null}], "id": "8267114681", "weightDistributions": null, "name": "Surveys for Audience Insights", "groupId": null, "commitId": "9272200345", "decisionMetadata": {"experimentPriorities": [[{"entityId": "8897173684", "endOfRange": null}, {"entityId": "8956270672", "endOfRange": null}, {"entityId": "8501901601", "endOfRange": null}, {"entityId": "8509222921", "endOfRange": null}, {"entityId": "8502813334", "endOfRange": null}, {"entityId": "8507732459", "endOfRange": null}, {"entityId": "8513201547", "endOfRange": null}, {"entityId": "8503643377", "endOfRange": null}, {"entityId": "8503832428", "endOfRange": null}, {"entityId": "8501492541", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": null, "viewIds": ["8378664063"], "experiments": [{"weightDistributions": null, "audienceName": "[Cookie] abTest does NOT exist,Goggle FCF3", "name": "First Click Free Test", "bucketingStrategy": null, "variations": [{"id": "8378074966", "actions": [{"viewId": "8378664063", "changes": []}], "name": "Variations"}], "audienceIds": ["and", "8183220341", "8409980585"], "changes": null, "id": "8374905968", "integrationSettings": null}], "id": "8377683707", "weightDistributions": null, "name": "First Click Free Test", "groupId": null, "commitId": "8567521442", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "7DF9E72E-A447-44EF-8F09-3FFC4035DC86", "value": function($){var variation = encodeURIComponent(window.NYToptly.getQueryParameter('mcubz')),
    agentId = window.optimizely.get('visitor').cookies['nyt-a'];

var event = {
  name: 'abtest',
  data: {
    subject: 'ab-alloc',
  	test: 'google_fcf_round2',
  	variant: variation || '',
  	agentId: agentId
  },
  type: ''
};

var runWhenReady = function (testFunction, inFunction, mlsecs, reps) {
    setTimeout(function z() {
        if (testFunction()) {
            inFunction();
        }
        else if (--reps) {
            setTimeout(z, mlsecs);
        }
    }, mlsecs);
};

runWhenReady(function () {
    return 'TAGX' in window;
}, function () {

    // Fire ET Allocation
    TAGX.EventProxy.trigger(event.name, event.data, event.type);
    console.log('Event sent: ' + JSON.stringify(event));

}, 1000, 10);
}}]}], "groups": [], "views": [{"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "exact"}, {"type": "url", "value": "www.nytimes.com", "match": "exact"}]]], "name": "[Mktg Asset] Anchor Ad", "tags": [], "activationType": "manual", "apiName": "AnchorAd", "id": "4128620616"}, {"category": "other", "staticConditions": null, "name": "[Mktg Asset] Bar1", "tags": [], "activationType": "manual", "apiName": "Bar1", "id": "4129021553"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "exact"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "name": "[Mktg Asset] Interstitial", "tags": [], "activationType": "manual", "apiName": "Interstitial", "id": "4137230627"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://www.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://www.dev.nytimes.com/subscription", "match": "substring"}, {"type": "url", "value": "https://mwcm-author.prd.nytimes.com/subscription", "match": "substring"}]], "name": "Landing Pages (All) - Manual", "tags": [], "activationType": "manual", "apiName": "landing_pages", "id": "6252880791"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "name": "Article Page", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  return document.querySelector("meta[name=PT]") && document.querySelector("meta[name=PT]").getAttribute("content") === "article";
}, "apiName": "article_page", "id": "7666612001"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}]], "name": "[Mktg Asset] Welcome Ad on Homepage", "tags": [], "activationType": "manual", "apiName": "WelcomeAd", "id": "8179870018"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "name": "[Mktg Asset] Growl", "tags": [], "activationType": "manual", "apiName": "Growl", "id": "8185280121"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}, {"type": "url", "value": "blogs.nytimes.com", "match": "substring"}], ["not", ["or", {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.nytimes.com", "match": "simple"}]]], "name": "[Mktg Asset] Gateway", "tags": [], "activationType": "manual", "apiName": "Gateway", "id": "8187250053"}, {"category": "other", "staticConditions": null, "name": "ROS (Global - All Snippets)", "tags": [], "apiName": "staging_ros_global__all_snippets", "id": "8263601258"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "nytimes.com/subscriptions/Multiproduct/mobilegateway/index.html", "match": "substring"}, {"type": "url", "value": "nytimes.com/subscription/mobilegateway.html", "match": "substring"}]], "name": "[Mktg Asset] Mobile Gateway page", "tags": [], "activationType": "manual", "apiName": "mobile_gateway_page", "id": "8309420148"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.stg.nytimes.com", "match": "substring"}, {"type": "url", "value": "www.nytimes.com", "match": "substring"}]], "name": "Metered page", "tags": [], "activationType": "polling", "activationCode": function pollingFn() {
  var pt = document.querySelector("meta[name=PT]") && document.querySelector("meta[name=PT]").getAttribute("content"), 
      types = ['article', 'oak', 'imageslideshow', 'multimedia', 'times-journeys', 'blogs-posting'];
  return types.indexOf(pt) >= 0;
}, "apiName": "3795841958_metered_page", "id": "8378664063"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.nytimes.com", "match": "simple"}, {"type": "url", "value": "www.stg.nytimes.com", "match": "simple"}]], "name": "[Mktg Asset] Subscription Ad on Homepage", "tags": [], "activationType": "manual", "apiName": "HpSubscriptionAd", "id": "8635391841"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.nytimes.com\\/\\d{4}\\/\\d{2}\\/\\d{2}", "match": "regex"}, {"type": "url", "value": "www.stg.nytimes.com\\/\\d{4}\\/\\d{2}\\/\\d{2}", "match": "regex"}]], "name": "[Mktg Asset] Subscription Ad on Article", "tags": [], "activationType": "manual", "apiName": "ArticleSubscriptionAd", "id": "8686224588"}], "snippetId": "8239712014", "dimensions": [{"segmentId": "4306880011", "id": "4263057003", "apiName": "application_name", "name": "Application Name"}, {"segmentId": "4303553323", "id": "4295554453", "apiName": "source_app", "name": "Source App"}, {"segmentId": "4299911629", "id": "4300961559", "apiName": "oc", "name": "OC"}, {"segmentId": "4296810049", "id": "4306870008", "apiName": "campaign_id", "name": "Campaign ID"}, {"segmentId": null, "id": "8024450760", "apiName": "campaign_code", "name": "Campaign Code"}, {"segmentId": null, "id": "8194503722", "apiName": "cur_page", "name": "Current Page"}, {"segmentId": null, "id": "8259011849", "apiName": "subscription_type", "name": "Subscription Type"}, {"segmentId": null, "id": "8266141332", "apiName": "subscription_mode", "name": "Subscription Mode"}, {"segmentId": null, "id": "8412620746", "apiName": "user_type", "name": "User Type"}, {"segmentId": null, "id": "8412720818", "apiName": "pass_trafficking", "name": "Bucketed Into trafficking experience"}, {"segmentId": null, "id": "8441661383", "apiName": "geo_country", "name": "Country"}, {"segmentId": null, "id": "8442321393", "apiName": "geo_region", "name": "Country or Region of Interest"}, {"segmentId": null, "id": "8442630948", "apiName": "geo_macro", "name": "US vs. INYT"}, {"segmentId": null, "id": "8468288802", "apiName": "agent_id", "name": "Agent ID"}, {"segmentId": null, "id": "8468480580", "apiName": "cig_segment", "name": "CIG Segment"}], "projectJS": function(){var checkUrl = function(string) {
    return window.location.href.indexOf(string) > -1;
};
if(document.cookie.indexOf('optly_debug') > -1 || !(document.cookie.indexOf('optly_sandbox')>-1 || window.location.search.indexOf('optly_sandbox')>-1) && checkUrl('.nytimes.com') && !checkUrl('.app.html') && !checkUrl('.embedded.html') && ((!(screen.width < 768)) || checkUrl('/subscription'))){
if(window.NYToptly === undefined) {
  window.NYToptly = (function() {
        "use strict";
    var opt_console = {};
    opt_console.log = function(a,b){if(document.cookie.indexOf('optly_debug')>-1){console.log(a,b);}};
    window.optly_events = {start:true,targeting:null,gateway:null};
    window.optimizely = window.optimizely || [];

    //placements are each ad unit on the page
    //placements are only activated on pagegroups with the correct page type
    var placements = [
      {
        name: "Bar1",
        page: "Bar1",
        pageTypes: ["article","homepage","oak","section front","sectionfront","games-crosswords","blogs-posting","blogs-summary","topic"],
        metaTags: [],
        selector: "#Bar1"
      },
      {
        name: "AnchorAd",
        page: "AnchorAd",
        pageTypes: ["article", "oak", "imageslideshow", "multimedia", "times-journeys", "classifieds", "blogs-posting"],
        metaTags: [],
        selector: "#Anchor_optly"
      },
      {
        name: "Interstitial",
        page: "Interstitial",
        pageTypes: ["article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"],
        metaTags: [],
        selector: "#Interstitial_optly"
      },
      //Remove Landing Page from placement Activation mapping and add Meter-dependent assets
      {
        name: "Growl",
        page: "Growl",
        pageTypes: ["article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"],
        metaTags: [],
        selector: "#Growl_optly"
      },
      {
        name: "WelcomeAd",
        page: "WelcomeAd",
        pageTypes: ["homepage"],
        metaTags: [],
        selector: "#WelcomeAd_optly"
      },
      {
        name: "Gateway",
        page: "Gateway",
        pageTypes: ["article","oak","imageslideshow","multimedia","times-journeys","blogs-posting"],
        metaTags: [],
        selector: "#Gateway_optly"
      },
      {
        name: "LP",
        page: "landing_pages",
        pageTypes: ["lp"],
        metaTags: [],
        selector: "#container"
      }, 
      {
        name: "HpSubscriptionAd",
        page: "HpSubscriptionAd",
        pageTypes: ["homepage"],
        metaTags: []
      }, 
      {
        name: "ArticleSubscriptionAd",
        page: "ArticleSubscriptionAd",
        pageTypes: ["article"],
        metaTags: []
      }
      ],
      userInfo, pt, optutils, init = false;
      var meter_pages = ["article","oak","imageslideshow","multimedia","times-journeys","classifieds","blogs-posting"];

    var initialize = function() {
      init = true;
      opt_console.log("[OptimizelyNYT] ProjectJS start");
      pt = Getters.getPageType();
      optutils = window.optimizely.get("utils");
      if(document.cookie.indexOf('optly_debug') > -1){
        Utils.initLogging();
      }
      Utils.removeClass();
      Utils.pushPageStatus('8284715063','6252880791','lp_changed');
      Utils.debug();
      opt_console.log("[OptimizelyNYT] detected page type: '" + pt + "'");

      // TODO: unified position management
      var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        opt_console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
      if(meter_pages.indexOf(pt)>-1){
        optutils.waitForElement("body").then(function(){
          appendDiv('Growl_optly');
          appendDiv('Gateway_optly');
          appendDiv('Anchor_optly');
          appendDiv('Interstitial_optly');
        });
      }
      if (pt === "homepage") {
        optutils.waitForElement("body").then(function() {
          appendDiv('WelcomeAd_optly');
        });
      }
      if(pt === "lp"){
        optutils.waitForElement("body").then(function(){
          appendDiv("LP_optly");
        });
      }
      if(pt==="section front"){
        optutils.waitForElement(".masthead-tools").then(function(){
        var newLi = document.createElement("li");
        newLi.setAttribute('id',"Bar1");
        var masthead = document.querySelector('.masthead-tools');
        masthead.insertBefore(newLi,masthead.firstChild);
        });
      }
      //POC III Solution for adding elements to the page
      //Temporary Interstitial Removal for IE
      var utils_optim = optimizely.get('utils');
      utils_optim.waitForElement('#growl-optout').then(function(){
        var growl_optout = document.getElementById('growl-optout');
        growl_optout.onclick = function(){
          var interstitial_optly = document.getElementById('Interstitial_optly');
          interstitial_optly.parentNode.removeChild(interstitial_optly);  
        };
      });
      utils_optim.waitForElement('#growl-skipthis').then(function(){
        var growl_optout = document.getElementById('growl-skipthis');
        growl_optout.onclick = function(){
          var interstitial_optly = document.getElementById('Interstitial_optly');
          interstitial_optly.parentNode.removeChild(interstitial_optly);  
        };
      });
      opt_console.log("[OptimizelyNYT] Fetching NYT user data: ");
      NytContext.getContext(function (error, context) {
        if (!error) {
          // activate
          window.NYToptly.userInfo = context;
          userInfo = context;
          window.optly_events.targeting = context;
          window.optimizely.push({"type":"user","attributes":{"agentId":window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id}});
          opt_console.log("[OptimizelyNYT] User Data: ", userInfo);
          //Activate mobilegateway page when necessary
          if(window.location.href.indexOf('mobilegateway')>-1){
          View.action('ACTIVATE_PAGE','mobile_gateway_page');
          }
          View.action("ACTIVATE_VIEWS");
        } else {
          opt_console.log("[OptimizelyNYT] Error:", error);
        }
      });

    };

    var Getters = {

      // @return {string}.toLowerCase()
      getPageType: function() {
        // update to account for LP page type
        var checkPath = function(string){
          return window.location.pathname.indexOf(string) > -1;
        };
        var checkDomain = function(string){
          return window.location.hostname.indexOf(string) > -1;
        };
        var checkContent = function(element){
          return element && element.getAttribute("content");
        };
        var pt = document.querySelector("meta[name=PT]") || null;
        var sa = document.querySelector("meta[name=sourceApp]") || null;
        if(checkContent(sa) === "times-journeys"){
          return sa;
        }
        if(checkContent(sa) === "nytv"){
          return "video";
        }
        if(checkContent(sa) === "nyt-v5" && checkContent(pt) === "Multimedia"){
          return "multimedia";
        }
        if(checkContent(pt) === "Topic" || (checkContent(pt)==="collection" && checkContent(sa) === "nyt-v5")){
          return "topic";
        }
        if(checkContent(sa) === "games-crosswords"){
          return "games-crosswords";
        }
        if(checkContent(pt) === "Blogs" && window.location.pathname === "/"){
          return "blogs-summary";
        }
        if(checkContent(pt) === "Blogs"){
          return "blogs-posting";
        }
        if(checkPath("blogs/directory")){
          return "blogs-sf";
        }
        if(checkPath('/classifieds')){
          return "classifieds";
        }
        if(checkDomain("myaccount")){
          return "myaccount";
        }
        if(checkPath('/subscription')){
          return "lp";
        }
        if(checkPath('international-contact/international-contact')){
          return "contact";
        }
        //Automatically return Homepage, Article, Section Front, Search and Imageslideshow Types
        if(pt) {
          pt = document.querySelector("meta[name=PT]").getAttribute("content").toLowerCase();
          return pt;
        }
        else {
          return "none";
        }

      },

      getUserType: function() {
        if (!userInfo) {
          return "anon";
        }
        switch (userInfo.user_type) {
        case "sub":
        case "regi":
          return userInfo.user_type;
        default:
          return "anon";
        }
      },
      getUsername: function() {
        if(userInfo.name) {
          return userInfo.name;
        }
        return "";
      },
      getBundleSubscriptions: function() {
        var bundles = [];
        if(userInfo && userInfo.bundle_subscriptions) {
          bundles = userInfo.bundle_subscriptions.map(function(x){ return x.bundle; }).filter(Boolean);
        }
        return bundles;
      },

      getWatSegment: function() {
        return userInfo.wat;
      },

      getIpSegments: function() {
        return userInfo.ip_segments;
      },

      getMeter: function() {
        return userInfo.meter_count;
      },

      hitPaywall: function(){
        return userInfo.hitPaywall;
      },

      meterCounted: function(){
        return userInfo.counted;
      },

      hasBundle: function(name) {
        var bundles = this.getBundleSubscriptions();
        return (bundles.indexOf(name) > -1);
      },
      getUserInfoObj:function(){
        return userInfo;
      },

      getInfoLoaded: function() {
        if (userInfo !== null) {
          return true;
        } else {
          return false;
        }
      },
      getSourceApp: function() {
        var sourceApp = document.querySelector("meta[name=sourceApp]");
        if(sourceApp) {
          return sourceApp.getAttribute("content").toLowerCase();
        }
      },
      getCountryText: function(html){
        var re = /%%COUNTRY%%/g;
        var returnHTML = html;
        if (window.NYToptly.getQueryParameter("location")){
          returnHTML = returnHTML.replace(re, window.NYToptly.getQueryParameter("location"));
        } else if(window.optimizely.data.visitor && window.optimizely.data.visitor.location != undefined) {
          returnHTML = returnHTML.replace(re, window.optimizely.data.visitor.location.country);
        } else {
          returnHTML = returnHTML.replace(re, "US");
        }
        return returnHTML;
      },
      getUserRequestInfo: function(){
        var origin = window.location.protocol + "//" + window.location.hostname;
        switch(origin){
          case "https://www.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          case "https://www.stg.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.stg.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          case "https://www.dev.nytimes.com":
            return {
                    request:"get",
                    url:"https://www.dev.nytimes.com/svc/web-products/userinfo-v3.json"
                    };
          default:
            return {
                    request:"jsonp",
                    url:"https://www.nytimes.com/svc/web-products/userinfo-v3.jsonp?callback="
                    };
        } 
      }
    };

    /*var user_api_domain = "https://www.nytimes.com";
    if(window.location.href.indexOf('stg.nytimes.com') > -1){
      user_api_domain = "https://www.stg.nytimes.com";
    }
    else if(window.location.href.indexOf('dev.nytimes.com') > -1){
      user_api_domain = window.location.protocol + "//" + window.location.hostname;
    }*/
    var user_api_domain = window.location.protocol + "//" + window.location.hostname;
    var Config = {
      USER_INFO_API: user_api_domain + "/svc/web-products/userinfo-v3.json",
      CIG_IP_SEG_API: "https://cigsvc.nytimes.com/r1/jp/ip_seg_v2.rep"
    };


    var Utils = {
      initLogging: function() {
                    var g, h, i, j, k, n, w;
                    Array.prototype.diff = function(a) {
                        return this.filter(function(i) {
                            return a.indexOf(i) < 0;
                        });
                    };
                    var log_have_priority = false;
                    var log_have_audiences = false;
                    var log_experiments = {};
                    var log_priorities = {};
                    var log_pages = {};
                    var priority_number = {};
                    var log_opt_data;
                    var logCampaignDecision = function(event) {
                        if (log_have_priority === false) {
                            log_opt_data = optimizely.get('data');
                            log_experiments = log_opt_data.experiments;
                            log_priorities = log_opt_data.campaigns[8284715063].decisionMetadata.experimentPriorities;
                            for (i = 0; i < log_priorities.length; i++) {
                                for (g = 0; g < log_priorities[i].length; g++) {
                                    var experience_id = log_priorities[i][g].entityId;
                                    var variations = log_opt_data.experiments[experience_id].variations;
                                    for (h = 0; h < variations.length; h++) {
                                        var this_variation = variations[h];
                                        var actions = this_variation.actions;
                                        var changed_pages = [];
                                        for (n = 0; n < actions.length; n++) {
                                            if (actions[n].changes.length > 0) {
                                                changed_pages.push(log_opt_data.pages[actions[n].pageId].name);
                                            }
                                        }
                                    }
                                    var pages_object = {
                                        pages: changed_pages
                                    };
                                    var experience_name = log_experiments[experience_id].name;
                                    priority_number[experience_id] = i + 1;
                                    console.log(i + 1, experience_name, pages_object, log_experiments[experience_id].audienceName);
                                    log_pages = log_opt_data.pages;
                                    log_have_priority = true;
                                }
                            }
                        }
                        if (event.data.campaign.id != "8284715063") {
                            if (event.data.decision.experimentId === null) {
                                console.log("No eligible experience for: " + event.data.campaign.name);
                            } else {
                                console.log("Experience:", log_opt_data.experiments[event.data.decision.experimentId].name, "|| Variation: ", log_opt_data.variations[event.data.decision.variationId].name);
                            }
                        } else {
                            if (!log_have_audiences) {
                                var checkTraffickingAudiences = function(d_t_aud) {
                                    var log_opt_data = log_opt_data || optimizely.get('data');
                                    var traffickingData = log_opt_data.campaigns[8284715063] ? log_opt_data.campaigns[8284715063] : false;
                                    if (traffickingData) {
                                        var audience_array = [];
                                        var experiments = traffickingData.experiments;
                                        for (j = 0; j < experiments.length; j++) {
                                            var audiences = experiments[j].audienceIds;
                                            if (audiences != undefined) {
                                                for (k = 0; k < audiences.length; k++) {
                                                    if (parseInt(audiences[k]) && audience_array.indexOf(audiences[k]) === -1) {
                                                        audience_array.push(audiences[k]);
                                                    }
                                                }
                                            }
                                        }
                                        var tempArray;
                                        var returnAudienceNames = function(array) {
                                            tempArray = [];
                                            for (w = 0; w < array.length; w++) {
                                                tempArray.push(log_opt_data.audiences[array[w]].name);
                                            }
                                            return tempArray;
                                        };
                                        var matchers = returnAudienceNames(d_t_aud);
                                        var failers = returnAudienceNames(audience_array.diff(d_t_aud));
                                        console.log('Matches: ', matchers);
                                        console.log('Fails: ', failers);
                                    }
                                };
                                checkTraffickingAudiences(event.data.decisionTicket.audienceIds);
                                log_have_audiences = true;
                            }
                            if (event.data.decision.pageId === "6252880791" && event.data.decision.experimentId === null) {
                                window.optly_events.lp_test = false;
                            } else if (event.data.decision.pageId === "6252880791") {
                                window.optly_events.lp_test = true;
                            }
                            if (event.data.decision.experimentId === null) {
                                console.log("No eligible experience for: " + log_opt_data.pages[event.data.decisionTicket.pageId].name);

                            } else {
                                console.log("For Page: " + log_pages[event.data.decisionTicket.pageId].name);
                                console.log("Experience:", log_opt_data.experiments[event.data.decision.experimentId].name, "|| Variation: ", log_opt_data.variations[event.data.decision.variationId].name);
                                console.log("Priority Level: ", priority_number[event.data.decision.experimentId]);
                            }

                        }
                    };
                    window.optimizely = window.optimizely || [];
                    window["optimizely"].push({
                        type: "addListener",
                        filter: {
                            type: "lifecycle",
                            name: "campaignDecided"
                        },
                        // Add the campaignDecided function as a handler.
                        handler: logCampaignDecision
                    });
                }
      ,
pushPageStatus: function(campaign_id,page_id,event_name){
                  var pushPageEvent = function(event){
        if (event.data.campaign.id === campaign_id && event.data.decisionTicket.pageId === page_id) {
          optly_events[event_name] = !!event.data.decision.experimentId;
        }
        };
        window.optimizely = window.optimizely || [];
        window["optimizely"].push({
          type: "addListener",
          filter: {
            type: "lifecycle",
            name: "campaignDecided" 
          },
          // Add the campaignDecided function as a handler.
          handler: pushPageEvent
        });

      },

      removeClass: function() {
        HTMLElement.prototype.removeClass = function(remove) {
          var newClassName = "";
          var i;
          var classes = this.className.split(" ");
          for(i = 0; i < classes.length; i++) {
            if(classes[i] !== remove) {
              newClassName += classes[i] + " ";
            }
          }
          this.className = newClassName;
        };
      },

      getParameterByName: function(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      },

      getCookie: function(a, b) {
        b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
        return b ? b.pop() : "";
      },

      setCookie: function(c_name,value,exdays,c_domain) {
        c_domain = (typeof c_domain === "undefined") ? "" : "domain=" + c_domain + ";";
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value + ";" + c_domain + "path=/";
      },

      setExpiration: function(cookieLife) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLife * 24 * 60 * 60 * 1000);
        return  expr.toGMTString();
      },

      loadScript: function(url, callback) {
       if(typeof url === 'string'){
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

        // Fire the loading
        head.appendChild(script);
      }
      },

      encodeEntities: function (value) {
        var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

        var NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;

        return value.
          replace(/&/g, "&amp;").
          replace(SURROGATE_PAIR_REGEXP, function (value) {
            var hi = value.charCodeAt(0);
            var low = value.charCodeAt(1);
            return "&#" + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ";";
          }).
          replace(NON_ALPHANUMERIC_REGEXP, function (value) {
            return "&#" + value.charCodeAt(0) + ";";
          }).
          replace(/</g, "&lt;").
          replace(/>/g, "&gt;");
      },

      hiddenPre: document.createElement("pre"),

      /**
       * decodes all entities into regular string
       * @param value
       * @returns {string} A string with decoded entities.
       */
      decodeEntities: function (value) {
        var hiddenPre = this.hiddenPre;

        if (!value) {
          return "";
        }

        hiddenPre.innerHTML = value.replace(/</g, "&lt;");
        // innerText depends on styling as it doesn't display hidden elements.
        // Therefore, it's better to use textContent not to cause unnecessary reflows.
        return hiddenPre.textContent;
      },

      debug: function() {
        if(localStorage.getItem("nytest")) {
          debugger;
        }
      }
    };

    // TODO: use lightweight HTTP lib
    var AJAX = {
      jsonp: function(urlWithCallback, callbackName, callback) {
        var script = document.createElement("script");
        script.src = urlWithCallback + "" + callbackName;
        window[callbackName] = function(data) {
          callback(null, data);
          delete window[callbackName];
        };
        document.head.appendChild(script);
      },

      get: function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send(null);

        xhr.onreadystatechange = function() {
          var DONE = 4; // readyState 4 means the request is done.
          var OK = 200; // status 200 is a successful return.

          if (xhr.readyState === DONE) {

            if (xhr.status === OK) {
              callback(null, xhr.responseText);
            } else {
              callback(xhr.status, null);
              opt_console.log("[OptimizelyNYT] Error: " + xhr.status); // An error occurred during the request.
            }
          }
        };
      }
    };

    var NytContext = {
      getContext: function (callback) {
        var that = this;
        var context = {
          regi_id: undefined, // NYT user ID (identifies regi, sub)
          agent_id: undefined, // NYT Agent ID (identifies browser)
          user_type: undefined, // anon, regi, sub
          ip_segments: [], // does IP belongs to edu range?
          wat: "", // CIG "segment", i.e. EDU, K12, K12_ACTIVE_SUBS
          meter_count: undefined, // Current Meter from Meter Service
          counted: undefined, 
          hitPaywall: false,
          name: undefined,
          bundle_subscriptions: []
        };

        // simulating async.parallel
        //MTR.js does not get called on Home Page, should I change the expected Callbacks accordingly or make the common callback call?
        //Remove gateway parameter check
        var expectedCallbacks = 2;
        var pt = Getters.getPageType();
        if(meter_pages.indexOf(pt)>-1){
          var expectedCallbacks = 3;
        }
        var commonCallback = function () {
          expectedCallbacks--;
          if (expectedCallbacks === 0) {
            callback(null, context);
          }
        };

        this._getUserInfo(function (error, userInfo) {

          if (!error) {
            context.regi_id = parseInt(userInfo.id, 10);
            context.agent_id = Utils.getCookie("nyt-a");
            context.user_type = that._getUserType(userInfo);
            context.wat = userInfo.demographics.wat;
            context.name = userInfo.name;
            context.bundle_subscriptions = userInfo.demographics.bundle_subscriptions && userInfo.demographics.bundle_subscriptions ? userInfo.demographics.bundle_subscriptions : undefined;
            context.full_object = userInfo;
          }
          commonCallback();
        });

        this._getCigIPStatus(function (error, cigObj) {
          if (!error) {
            context.cigObj = cigObj;
          }
          commonCallback();
        });

        this._getMeterService(function (optly_meter_obj) {
          context.meter_count = optly_meter_obj.meter_count;
          context.hitPaywall = optly_meter_obj.hit_paywall;
          context.counted = optly_meter_obj.counted;
          commonCallback();
        });
      },

      _getUserType: function (userInfo) {
        if (JSON.stringify(userInfo.subscription).match(/HD|MM|MSD|MTD|TPR/)) {
          return "sub";
        }

        if (parseInt(userInfo.id, 10)) {
          return "regi";
        }

        return "anon";
      },

      _isLoggedIn: function () {
        return Utils.getCookie("nyt-d") ? true : false;
      },

      _getUserInfo: function (callback) {

        // this will be overridden based on AJAX response
        var payload = {
          "meta": {},
          "data": {
            "id": "0",
            "name": "",
            "subscription": [],
            "demographics": {}
          }
        };

        var domElement = document.getElementById("user-info-data");
        var isDataAvailableOnPage = false;
        if (domElement) {
          try {
            payload = JSON.parse(domElement.innerHTML);
            isDataAvailableOnPage = true;
            opt_console.log("[OptimizelyNYT] UserInfo is available on the page, no need to fetch");
            opt_console.log("[OptimizelyNYT] User Data: ", payload);
          } catch (error) {
            isDataAvailableOnPage = false;
            opt_console.log("[OptimizelyNYT] Error: Unable to parse UserInfo JSON");
          } finally {
            if (isDataAvailableOnPage) {
              callback(null, payload.data); // sync
              return; // exiting
            }
          }
        }
        if(window.location.origin === "https://myaccount.stg.nytimes.com"||window.location.origin === "https://myaccount.nytimes.com"){
          callback(null, payload.data);
          return;
        }
        var request_info_object = Getters.getUserRequestInfo();
        if(request_info_object.request === "get"){
          AJAX.get(request_info_object.url, function (error, response) {
                        payload = {};
                        payload.data = null;
            if (!error) {
              try {
                payload = typeof response === "object" ? response : window.JSON.parse(response);
              } catch (error) {
                opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
                // using default empty values
              }
            }
            callback(error, payload.data);

          });
        }
        else{
          AJAX.jsonp("https://www.nytimes.com/svc/web-products/userinfo-v3.jsonp?callback=", 'userInfoCallback', function (error, response) {
                    payload = {};
                    payload.data = null;
          if (!error) {
            try {
              payload = typeof response === "object" ? response : window.JSON.parse(response);
            } catch (error) {
              opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
              // using default empty values
            }
          }
          callback(error, payload.data);

        });
        }
      },

      //TODO: support EDU & CORP
      _getCigIPStatus: function (callback) {
        var cigObj = {edu:{},b2b:{}};
        var edu_cookie_content = Utils.getCookie('edu_cig_opt');
        var b2b_cookie_content = Utils.getCookie('b2b_cig_opt');
        if(edu_cookie_content && b2b_cookie_content){
          cigObj.edu = JSON.parse(decodeURIComponent(edu_cookie_content));
          cigObj.b2b = JSON.parse(decodeURIComponent(b2b_cookie_content));
          callback(null, cigObj);
          return;
        }
        var apiUrl = Config.CIG_IP_SEG_API + "?";
        var testIp = Utils.getParameterByName("test_ip") || Utils.getParameterByName("testIp");
        if (testIp) {
          apiUrl += "test_ip=" + Utils.encodeEntities(testIp) + "&";
        }
        apiUrl += "jsoncallback=";
        AJAX.jsonp(apiUrl, "callback", function (error, response) {
          // this will be overridden based on AJAX response

          var data = {
            segments: [{
              c: {
                corp: "no"
              },
              e: {
                edu: "no"
              }
            }]
          };
          if (!error) {
            try {
              data = typeof response === "object" ? response.payload : window.JSON.parse(response).payload;
            } catch (error) {
              opt_console.log("[OptimizelyNYT] Error: Unable to parse JSON response"); // An error occurred during the request.
              // using default empty values
            }
            var EDUsegments = data.segments[0].e;
            var CORPsegments = data.segments[0].c;
            if(!edu_cookie_content){
              if((cigObj.edu.isEduUser = EDUsegments.edu !== "no")){
                cigObj.edu.nickName = EDUsegments.nick_name ?  EDUsegments.nick_name : undefined;
                Utils.setCookie('edu_cig_opt',JSON.stringify(cigObj.edu),90,'.nytimes.com');
              }
              else{
                Utils.setCookie('edu_cig_opt',JSON.stringify(cigObj.edu),'.nytimes.com');
              }              
            }
            else{
              cigObj.edu = JSON.parse(decodeURIComponent(edu_cookie_content));
            }
            if(!b2b_cookie_content){
              if((cigObj.b2b.isCorpUser = CORPsegments.corp !== "no")){
                cigObj.b2b.orgName = CORPsegments.org_name ? CORPsegments.org_name : undefined;
                cigObj.b2b.orgType = CORPsegments.type ? CORPsegments.type : undefined;
                Utils.setCookie('b2b_cig_opt',JSON.stringify(cigObj.b2b),30,'.nytimes.com');
               }
               else{
                Utils.setCookie('b2b_cig_opt',JSON.stringify(cigObj.b2b),'.nytimes.com');
               }
            }
            else{
              cigObj.b2b = JSON.parse(decodeURIComponent(b2b_cookie_content));
            }
          }
          callback(error, cigObj);

        });
      },

      _getMeterService: function (callback) {
        var optly_meter_obj = {
          "meter_count": 0,
          "hit_paywall": false,
          "counted" : false
        };
        var pt = Getters.getPageType();
        if(meter_pages.indexOf(pt)>-1){
          //Poll for 
         var optutils = optimizely.get('utils');
          var cancelPolling = optutils.poll(
          function(){
          if(typeof window.require === 'function'){
            opt_console.log('Found require');

             window.require(['foundation/main'],function(){
            window.require(['auth/mtr','jquery/nyt'], function(mtr,$){
              mtr.meterReady.done(function(){
              optly_meter_obj.meter_count = mtr.getMeterPagesCount();
                opt_console.log("Deferred meter count is", optly_meter_obj.meter_count);
              optly_meter_obj.hit_paywall = mtr.hitPaywall;
                opt_console.log("Deferred hit paywall is ", optly_meter_obj.hit_paywall);
              optly_meter_obj.counted = mtr.counted;
                callback(optly_meter_obj);
              });
            window.optly_meter = mtr.getMeterPagesCount();
            opt_console.log("Old Optly Meter is " + optly_meter);
            },
            function(err){
              opt_console.log(err);
              callback(optly_meter_obj);
            });
               });


            cancelPolling();
          }else{
            opt_console.log('Polling for Require');
          }
          },50);   
        }
    }};

    var View = {
      action: function(event, payload) {

        switch (event) {
        case "ACTIVATE_PAGE":
          window["optimizely"].push({
            type: "page",
            pageName: payload
          });
          break;

        case "LOAD_WIDGET_PLACEMENT":
            //Widget loaded will handle all widgets
            //widgets include fallthrough, killset, normal async, a/b test
          placements.forEach(function(element) {
            if(element.name == payload.name && element.kill !== true && element.activated !== true && ((payload.multi == "true")? element.multi === payload.codename : true) && (element.pageTypes.indexOf(Getters.getPageType()) > -1 || element.metaTags.indexOf(Getters.getSourceApp()) > -1)) {
              opt_console.log("[OptimizelyNYT] ", event.toUpperCase(), payload);
              element.html = payload.html;
              element.css = payload.css;
              element.selector = payload.selector;
              element.script = payload.script;
              element.script_2 = payload.script_2;
              element.script_3 = payload.script_3;
              element.script_4 = payload.script_4;
              element.activated = true;
              element.callback = payload.callback;
              optutils.waitForElement(element.selector).then(function() {
                document.querySelector(element.selector).innerHTML = element.html;
                document.querySelector(element.selector).setAttribute('class',
                document.querySelector(element.selector).getAttribute('class') + " optly");
                Utils.loadScript(element.script);
                if(element.script_2 != ""){Utils.loadScript(element.script_2);};
                if(element.script_3 != ""){Utils.loadScript(element.script_3);};
                if(element.script_4 != ""){Utils.loadScript(element.script_4);};
                var style = document.createElement("style");
                style.type = "text/css";
                style.innerHTML = element.css;
                document.getElementsByTagName("head")[0].appendChild(style);
                if(element.callback) {
                  element.callback();
                }
              });
            }
          });
          break;
        case "ACTIVATE_VIEWS":
          placements.forEach(function(element) {
            if(element.page && (element.pageTypes.indexOf(Getters.getPageType()) > -1 || element.metaTags.indexOf(Getters.getSourceApp()) > -1)) {
              View.action("ACTIVATE_PAGE", element.page);
            }
          });
          break;
        }
      }
    };

    //TODO set these as attributes rather than returning variables
    /* exported Targeting */
    var Targeting = {
      getAudience: function(type) {
        switch(type) {
        case "user":
          return Getters.getUserType();
        case "bundles":
          return Getters.getBundleSubscriptions();
        case "seg_wat":
          return Getters.getWatSegment();
        case "seg_ip":
          return Getters.getIpSegments();
        case "meter_views":
          return Getters.getMeter();
        case "hit_paywall":
          return Getters.hitPaywall();
        case "counted":
          return Getters.meterCounted();
        }
      }
    };

    return {
      initialize: initialize,
      active: init,
      audience: Targeting.getAudience,
      getPageType: Getters.getPageType,
      getName: Getters.getUsername,
      loadScript: Utils.loadScript,
      setCookie: Utils.setCookie,
      viewAction: View.action,
      debugView: View,
      activateExperiment: Targeting.activateMulti,
      passThrough: Targeting.passThrough,
      userInfo: userInfo,
      getQueryParameter: Utils.getParameterByName,
      ajax: AJAX.get,
      getCountryText: Getters.getCountryText,
      initLogging: Utils.initLogging
    };
  })();

  window.optimizely = window.optimizely || [];

  window.optimizely.push({
    type: "addListener",
    filter: {
      type: "lifecycle",
      name: "initialized"
    },
    handler: function() {
      if(window.NYToptly.active !== true) {
        window.NYToptly.initialize();
      }
    }
  });
  }
}
if(window.location.href.indexOf("/get-started/thank-you") > -1){
    window.optimizely = window.optimizely || []; 
    window.optimizely.push({
    type: "user",
    attributes: {
        subscription_mode: SERVER_SIDE_DATA.mode,
        subscription_type: SERVER_SIDE_DATA.purchase_info.purchase_details.bundleName
    }
});}
}, "namespace": "a3013110282", "listTargetingCookies": [], "dcpKeyfieldLocators": [{"dcp_datasource_id": "4300326370", "is_optimizely": true, "type": "uid", "name": ""}], "dcpServiceId": "4295653407", "audiences": [{"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/EDU|EDU20AND3KW|INTEDU|EDU_US_IPRANGE|EDU_INT_IPRANGE|EduCWA/) !== null", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience(\"seg_ip\") == \"edu\"", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}], ["or", {"value": "", "type": "cookies", "name": "isEDU", "match": "exists"}], ["or", {"value": "pox3vefah", "type": "vendor.krux", "name": "audiences", "match": null}], ["or", {"value": "rqtap0lsn", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "6679643984", "name": "[WAT / Krux] All EDU: *all* segments except K12"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') == \"sub\"", "type": "code", "name": null, "match": null}], ["or", {"value": "true", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "6696333431", "name": "[Subscriber Type] Subs "}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.getPageType().toLowerCase() == \"homepage\"", "type": "code", "name": null, "match": null}]]], "id": "6720163093", "name": "[Page Targeting] Homepage   "}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('meter_views') < 2", "type": "code", "name": null, "match": null}]]], "id": "6926750945", "name": "[Meter] < 02"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') !== \"sub\"", "type": "code", "name": null, "match": null}]]], "id": "6992450319", "name": "[Subscriber Type] Non-Subs"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]], ["or", ["not", ["or", {"value": "US", "type": "query", "name": "location", "match": "exact"}]]], ["or", ["not", ["or", {"value": "USA", "type": "query", "name": "location", "match": "exact"}]]], ["or", ["not", ["or", {"value": "United States of America", "type": "query", "name": "location", "match": "exact"}]]]], "id": "7209740780", "name": "[Geo] WW ex US"}, {"conditions": ["and", ["or", ["or", {"value": "AU", "type": "location", "name": null, "match": null}], ["or", {"value": "Australia", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "Aus", "type": "query", "name": "Location", "match": "exact"}]]], "id": "7798550316", "name": "[Geo] Australia"}, {"conditions": ["and", ["or", ["or", {"value": "US", "type": "location", "name": null, "match": null}], ["or", {"value": "US", "type": "query", "name": "location", "match": "exact"}], ["or", {"value": "USA", "type": "query", "name": "location", "match": "exact"}]]], "id": "7814230912", "name": "[Geo] US"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/K12/) !== null", "type": "code", "name": null, "match": null}]]], "id": "7857642821", "name": "[WAT] K12"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/HD_Grace/) !== null", "type": "code", "name": null, "match": null}]]], "id": "7877803306", "name": "[WAT] HD_Grace"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "migration2017", "type": "cookies", "name": "abTest", "match": "exists"}]]]], "id": "8183220341", "name": "[Cookie] abTest does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "IN", "type": "location", "name": null, "match": null}]]], "id": "8248972263", "name": "[Geo] India"}, {"conditions": ["and", ["or", ["or", {"value": "National Library of the Czech Republic", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8252297528", "name": "[B2B] National Library of the Czech Republic"}, {"conditions": ["and", ["or", ["or", {"value": "Wythe Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8266808565", "name": "[B2B] Wythe Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "Goldsmiths Univ London", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8269256599", "name": "[B2B] Goldsmiths Univ London"}, {"conditions": ["and", ["or", ["or", {"value": "Conrad Chicago", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8269873343", "name": "[B2B] Conrad Chicago"}, {"conditions": ["and", ["or", ["or", {"value": "Big Sky Resort", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8273176592", "name": "[B2B] Big Sky Resort"}, {"conditions": ["and", ["or", ["or", {"value": "Antlers at Vail", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8275464348", "name": "[B2B] Antlers at Vail"}, {"conditions": ["and", ["or", ["or", {"value": "Sewickley Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8277156228", "name": "[B2B] Sewickley Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "Vancouver Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8278311314", "name": "[B2B] Vancouver Public Library"}, {"conditions": ["and", ["or", ["or", {"value": "KLNF", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8279371394", "name": "[B2B] KLNF"}, {"conditions": ["and", ["or", ["or", {"value": "rlijf3y9e", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8281592112", "name": "[Krux] Formers INYT rlijf3y9e"}, {"conditions": ["and", ["or", ["or", {"value": "Union Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8295712999", "name": "[B2B] Union Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('G') !== -1", "type": "code", "name": null, "match": null}]]], "id": "8300495550", "name": "[Bundle] G"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('section/learning') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "learning", "type": "query", "name": "contentCollection", "match": "exact"}]]], "id": "8301992165", "name": "[Page Targeting] Learning Network - All Articles/Pages"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "IN", "type": "location", "name": null, "match": null}, {"value": "US", "type": "location", "name": null, "match": null}]]]], "id": "8302021295", "name": "[Geo] WW ex India, US"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/SUBS_NOT_OPT_IN/) !== null", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/SUBS_OPT_OUT/) !== null", "type": "code", "name": null, "match": null}]]], "id": "8310130736", "name": "[WAT] Newsletter - opted out / not opted in"}, {"conditions": ["and", ["or", ["or", {"value": "NYToptly.userInfo.full_object.subscription.indexOf(\"FTEX\") !== -1", "type": "code", "name": null, "match": null}]]], "id": "8315260461", "name": "[Capability] FTEX"}, {"conditions": ["and", ["or", ["or", {"value": "(document.location.href.indexOf('lp8W3WH') > -1 || document.location.href.indexOf('lp8QXR6') > -1 || document.location.href.indexOf('lp8U8QY') > -1 || document.location.href.indexOf('lp8F7Q8') > -1)", "type": "code", "name": null, "match": null}]]], "id": "8316027593", "name": "[page] - Lift Off Project LPs (lp8W3WH, lp8QXR6, lp8U8QY, lp8F7Q8)"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "CA", "type": "location", "name": null, "match": null}]]]], "id": "8323149558", "name": "[Geo] NOT Canada"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "opt", "type": "cookies", "name": "XvOpt", "match": "exists"}]]]], "id": "8325342424", "name": "[Cookie] XvOpt does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "Ottawa Public Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8325581970", "name": "[B2B] Ottawa Public Library"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "IN", "type": "location", "name": null, "match": null}]]]], "id": "8325672904", "name": "[Geo] NOT India"}, {"conditions": ["and", ["or", ["or", {"value": "scaffoldtest", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8327223145", "name": "abTest=scaffoldtest"}, {"conditions": ["and", ["or", ["or", {"value": "CA", "type": "location", "name": null, "match": null}], ["or", {"value": "CA", "type": "query", "name": "Location", "match": "exact"}], ["or", {"value": "CA", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "8329145104", "name": "[Geo] Canada Only"}, {"conditions": ["and", ["or", ["or", {"value": "Life Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8330140946", "name": "[B2B] Life Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_monday,tuesday,friday,saturday", "type": "time_and_day", "name": null, "match": null}]], ["or", ["not", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]]], "id": "8331673235", "name": "[Dayparting] INYT Welcome Killset"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "8331680099", "name": "Desktop/Laptop only"}, {"conditions": ["and", ["or", ["or", {"value": "document.getElementsByTagName('html')[0].getAttribute('data-nyt-ab').match(/\\bLiftoff\\b/) !== null", "type": "code", "name": null, "match": null}]]], "id": "8335242713", "name": "[AB] LiftOff"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_monday,tuesday,wednesday", "type": "time_and_day", "name": null, "match": null}]], ["or", ["or", {"value": "US", "type": "location", "name": null, "match": null}]]], "id": "8340731813", "name": "[Dayparting] Welcome Killset for US Homepage"}, {"conditions": ["and", ["or", ["or", {"value": "00:00_23:59_wednesday,thursday", "type": "time_and_day", "name": null, "match": null}]]], "id": "8350622915", "name": "[Dayparting] HD Grace"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "GraceViewed", "match": "exists"}]]]], "id": "8354152464", "name": "[Cookie] GraceViewed does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "Homewood Suites Seattle Convention Center", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8354161151", "name": "[B2B] Homewood Suites Seattle Convention Center"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "au_test_2017", "type": "cookies", "name": "mtrab", "match": "exact"}]]]], "id": "8355611617", "name": "[Cookie] ex mtrab AU Paywall Test "}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('user') !== \"sub\"", "type": "code", "name": null, "match": null}]]], "id": "8356764950", "name": "[Subscriber Type] Non-Subs Alt"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('A') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('A_PLUS') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('B') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('B_PLUS') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('D') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('F') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('S') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('X') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_PLUS_ACQ') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_PLUS_RET') !== -1", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.NYToptly.userInfo.full_object.demographics.bundle_subscriptions[0].in_grace", "type": "code", "name": null, "match": null}]]], "id": "8379916476", "name": "[Bundle] Digi Subs in Grace"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_givethetimes_1017", "match": "exact"}]]], "id": "8380540140", "name": "[Cookie] exo_nons_givethetimes_1017=true"}, {"conditions": ["and", ["or", ["or", {"value": "ADBLOCK", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}], ["or", {"value": "q3vfitxb0", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8380850399", "name": "[Cookie] B2B w ADBLOCK flag"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_usgm_saleOneDay_1117", "match": "exact"}]]], "id": "8382761169", "name": "[cookie] exo_nons_usgm_saleOneDay_1117"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "GB", "type": "location", "name": null, "match": null}]]]], "id": "8394720796", "name": "[Geo] Not UK"}, {"conditions": ["and", ["or", ["or", {"value": "anchortest", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8396871406", "name": "[Cookie] abTest=anchortest"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "survey_triggered", "match": "exists"}]]]], "id": "8404891843", "name": "[Cookie] survey_triggered does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nonsub_lowprop_1117", "match": "exact"}]]], "id": "8405565879", "name": "[cookie] exo_nonsub_lowprop_1117"}, {"conditions": ["and", ["or", ["or", {"value": "(function() {\n    var x = document.referrer || false;\n    return x && (x.match(/www\\.google/).length > 0 ||\n           x.match(/gmodules/).length > 0 ||\n           x.match(/ampproject/).length > 0);\n})();", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": null, "type": "query", "name": "mcubz", "match": "exists"}]]], "id": "8409980585", "name": "Goggle FCF3"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\") === undefined || window.NYToptly.audience(\"seg_wat\").match(/EDU|EDU20AND3KW|INTEDU|EDU_US_IPRANGE|EDU_INT_IPRANGE|K12|EduCWA/) === null ", "type": "code", "name": null, "match": null}]], ["or", ["or", {"value": "window.NYToptly.audience(\"seg_ip\") !== \"edu\"", "type": "code", "name": null, "match": null}]], ["or", ["not", ["or", {"value": "true", "type": "cookies", "name": "edu_cig_opt", "match": "substring"}]]], ["or", ["not", ["or", {"value": "", "type": "cookies", "name": "isEDU", "match": "exists"}]]]], "id": "8413422098", "name": "[WAT] Exclude All EDU segments"}, {"conditions": ["and", ["or", ["or", {"value": "qudtfoenz", "type": "vendor.krux", "name": "audiences", "match": null}, {"value": "qudtarl0q", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8421381989", "name": "[Krux] All Formers (Digi and HD)"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_usgm_bauAugust_1117_DH", "match": "exact"}]]], "id": "8443951819", "name": "[cookie] exo_nons_usgm_bauAugust_1117_DH"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.getPageType().toLowerCase() !== \"homepage\"", "type": "code", "name": null, "match": null}]]], "id": "8456760649", "name": "[Page Targeting] Exclude the Homepage"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_inyt_bauInCurrencyIndia_1117", "match": "exact"}]]], "id": "8461310777", "name": "[cookie]exo_nons_inyt_bauInCurrencyIndia_1117"}, {"conditions": ["and", ["or", ["not", ["or", {"value": null, "type": "cookies", "name": "fbpx", "match": "exists"}]]]], "id": "8471930223", "name": "[Cookie] fbpx does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "The Condor Hotel", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8472101818", "name": "[B2B] Condor Hotel"}, {"conditions": ["and", ["or", ["or", {"value": "Anatolia College/American College of Thessaloniki", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8480010926", "name": "[B2B] Anatolia College/American College of Thessaloniki"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('nytimes.com/') > -1", "type": "code", "name": null, "match": null}]]], "id": "8485734812", "name": "[Page Targeting] nytimes.com domain only"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('meter_views') < 5", "type": "code", "name": null, "match": null}]]], "id": "8506542033", "name": "[Meter] < 05"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('meter_views') < 3", "type": "code", "name": null, "match": null}]]], "id": "8510343753", "name": "[Meter] < 03"}, {"conditions": ["and", ["or", ["or", {"value": "06:00_09:00_sunday,monday,tuesday,wednesday,thursday,friday,saturday", "type": "time_and_day", "name": null, "match": null}, {"value": "10:00_13:00_sunday,monday,tuesday,wednesday,thursday,friday,saturday", "type": "time_and_day", "name": null, "match": null}, {"value": "14:00_17:00_sunday,monday,tuesday,wednesday,thursday,friday,saturday", "type": "time_and_day", "name": null, "match": null}, {"value": "18:00_23:00_sunday,monday,tuesday,wednesday,thursday,friday,saturday", "type": "time_and_day", "name": null, "match": null}]]], "id": "8510671921", "name": "[Dayparting] Primetime - for Surveys"}, {"conditions": ["and", ["or", ["or", {"value": "rz6au2jxu", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8544463138", "name": "[Krux] Propensity 2-4 rz6au2jxu"}, {"conditions": ["and", ["or", ["or", {"value": "keith_testing_scaffold", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8544714400", "name": "[Cookie] abTest = keith_testing_scaffold"}, {"conditions": ["and", ["or", ["not", ["or", {"value": null, "type": "cookies", "name": "TfpViewed", "match": "exists"}]]]], "id": "8555744517", "name": "[Cookie] TfpViewed does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('CW') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('MAX_ADA_CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('MAX_ADA_CR_CK') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_PLUS_ACQ') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('MAX_ADA_PLUS_ACQ') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_PLUS_RET') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('G') !== -1", "type": "code", "name": null, "match": null}]]], "id": "8562601520", "name": "[Bundle] Crossword \u00a0\u2014 all bundles w/ a Crossword subscription"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "qxk0hzyjh", "type": "vendor.krux", "name": "audiences", "match": null}]]]], "id": "8564081737", "name": "[Krux] NOT Subs qxk0hzyjh"}, {"conditions": ["and", ["or", ["or", {"value": " document.location.href.indexOf('query.nytimes.com/gst/abstract.html') > -1", "type": "code", "name": null, "match": null}]]], "id": "8569001604", "name": "[Page Targeting] TimesMachine Abstract (Article Preview)"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('bundles').indexOf('MAX_ADA_CR') !== -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience('bundles').indexOf('ADA_CR') !== -1", "type": "code", "name": null, "match": null}]]], "id": "8612260110", "name": "[Bundle] ADA_CR or MAX_ADA_CR"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "ie11", "type": "browser_version", "name": null, "match": null}]]]], "id": "8627862282", "name": "Exclude IE 11"}, {"conditions": ["and", ["or", ["or", {"value": "r4ttb2sok", "type": "vendor.krux", "name": "audiences", "match": null}]]], "id": "8629943298", "name": "[Krux] California Today newsletter sign-uppers"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "abTest_adaptive_articles", "match": "exact"}]]], "id": "8631751391", "name": "[Cookie] abTest_adaptive_articles = true"}, {"conditions": ["and", ["or", ["or", {"value": "pricing_3_canada_1017_stg", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8632385779", "name": "[Cookie] abTest=pricing_3_canada_1017_stg"}, {"conditions": ["and", ["or", ["or", {"value": "ios", "type": "platform", "name": null, "match": null}]]], "id": "8634850445", "name": "[Platform / OS] All iOS"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience('meter_views') === 2", "type": "code", "name": null, "match": null}]]], "id": "8637181835", "name": "[METER] = 2"}, {"conditions": ["and", ["or", ["or", {"value": "US|CA", "type": "location", "name": null, "match": null}]]], "id": "8660840279", "name": "[Geo] California"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('/slideshow/') > -1", "type": "code", "name": null, "match": null}]]], "id": "8684280152", "name": "[Page Targeting] Slideshows"}, {"conditions": ["and", ["or", ["or", {"value": "DIIS Library", "type": "cookies", "name": "b2b_cig_opt", "match": "substring"}]]], "id": "8688780979", "name": "[B2B] DIIS Library"}, {"conditions": ["and", ["or", ["or", {"value": "document.getElementsByTagName('html')[0].getAttribute('data-nyt-ab').match(/\\bLiftoff=22_us/i) !== null", "type": "code", "name": null, "match": null}]]], "id": "8733151000", "name": "[AB] Liftoff=22_us"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('lp87JWF') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('/subscription') === -1", "type": "code", "name": null, "match": null}]]], "id": "8744757005", "name": "[Whole Meter + Landing Page] lp87JWF"}, {"conditions": ["and", ["or", ["or", {"value": "pricing_3_uk_1017", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "8781686404", "name": "{Cookie] abTest = pricing_3_uk_1017"}, {"conditions": ["and", ["or", ["or", {"value": "CA", "type": "location", "name": null, "match": null}, {"value": "US", "type": "location", "name": null, "match": null}, {"value": "GB", "type": "location", "name": null, "match": null}], ["or", {"value": "CA", "type": "cookies", "name": "abTestLocation", "match": "exact"}]]], "id": "8785170012", "name": "[Geo] North America & UK"}, {"conditions": ["and", ["or", ["or", {"value": "!window.NYToptly.audience('meter_views') || window.NYToptly.audience('meter_views') < 2", "type": "code", "name": null, "match": null}], ["or", {"value": "liftoff=16_octsale", "type": "cookies", "name": "mtrab", "match": "exact"}]]], "id": "8786488391", "name": "[Meter] [Cookie] mtrab = \"liftoff=16_octsale\" or Meter < 2"}, {"conditions": ["and", ["or", ["or", {"value": "document.getElementsByTagName('html')[0].getAttribute('data-nyt-ab').match(/\\bLiftoff=\\d+_oct\\b/i) === null", "type": "code", "name": null, "match": null}]]], "id": "8802425328", "name": "[AB] Liftoff 16_oct and 0_oct exclusion"}, {"conditions": ["and", ["or", ["or", {"value": "document.getElementsByTagName('html')[0].getAttribute('data-nyt-ab').match(/\\bLiftoff=16_octsale/i) !== null", "type": "code", "name": null, "match": null}]]], "id": "8803575893", "name": "[AB] Liftoff=16_octsale"}, {"conditions": ["and", ["or", ["or", {"value": "pricing_3_uk_1017_sale", "type": "cookies", "name": "abxTest", "match": "exact"}]]], "id": "8806226517", "name": "[Cookie] abxTest=pricing_3_uk_1017_sale"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_zack_test", "match": "exact"}]]], "id": "8893613813", "name": "[Cookie] exo_zack_test=true"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "abTest_RF", "match": "exact"}]]], "id": "8903330659", "name": "abTest_RF=true"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "au_test_2017=1", "type": "cookies", "name": "mtrab", "match": "exact"}]]]], "id": "8904381937", "name": "[Cookie] mtrab=au_test_2017=1 does NOT exist"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_bar1_test", "match": "exact"}]]], "id": "8927740296", "name": "exo_bar1_test=true"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_inyt_saleOctober_1017", "match": "exact"}]]], "id": "9013761942", "name": "[Cookie] exo_nons_inyt_saleOctober_1017=true"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('Silicon-Valley-Is-Not-Your-Friend') === -1", "type": "code", "name": null, "match": null}]]], "id": "9028972487", "name": "Exclude Silicon-Valley-Is-Not-Your-Friend"}, {"conditions": ["and", ["or", ["or", {"value": "document.cookie.indexOf('exo_') == -1", "type": "code", "name": null, "match": null}]]], "id": "9030630106", "name": "[Cookie] exo_* does not exist"}, {"conditions": ["and", ["or", ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/AnnualOffer_INTL_Oct2017/) !== null ", "type": "code", "name": null, "match": null}], ["or", {"value": "window.NYToptly.audience(\"seg_wat\").match(/AnnualOffer_USGM_Oct2017/) !== null  ", "type": "code", "name": null, "match": null}]]], "id": "9106755623", "name": "[WAT] AnnualOffer_INTL_Oct2017 OR AnnualOffer_USGM_Oct2017 (TFP)"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_pricing_us_1117", "match": "exact"}]]], "id": "9111140628", "name": "[Cookie] exo_pricing_us_1117=true"}, {"conditions": ["and", ["or", ["or", {"value": "pricing_3_uk_1017_stg", "type": "cookies", "name": "abTest", "match": "exact"}]]], "id": "9176746646", "name": "{Cookie] abTest = pricing_3_uk_1017_stg"}, {"conditions": ["and", ["or", ["or", {"value": "GB", "type": "location", "name": null, "match": null}, {"value": "CA", "type": "location", "name": null, "match": null}]]], "id": "9183314943", "name": "[geo] UK and Canada"}, {"conditions": ["and", ["or", ["or", {"value": "window.location.href.indexOf('8HYKU') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('8J36Y') > -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('/subscription') === -1", "type": "code", "name": null, "match": null}], ["or", {"value": "window.location.href.indexOf('mobilegateway') > -1", "type": "code", "name": null, "match": null}]]], "id": "9189513123", "name": "[Whole Meter + Landing Page] 8HYKU + 8J36Y"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_inyt_bauInCurrencyIframe_1117", "match": "exact"}]]], "id": "9262080821", "name": "[cookie] exo_nons_inyt_bauInCurrencyIframe_1117"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "cookies", "name": "exo_nons_inyt_OneDaySale_1117", "match": "exact"}]]], "id": "9267390231", "name": "exo_nons_inyt_OneDaySale_1117=true"}], "integrationSettings": [{"krux_namespace": null, "functions": {
  fetchData: function() {
    var MAX_RETRY = 5;
    var WAIT_TIME = 500;
    var retryCount = 0;

    var wrapper = function() {
      var segmentName = window.optimizely && window.optimizely.getAccountId && window.optimizely.getAccountId() && 'o_' + window.optimizely.getAccountId() + '_segments';
      var dataAvailable = segmentName && window.Krux && window.Krux[segmentName];
      if (dataAvailable) {
        var data = {};
        data['audiences'] = window.Krux[segmentName];
        window['optimizely'].push(['storeThirdPartyData', 'krux', data]);
      } else if (retryCount < MAX_RETRY) {
        retryCount++;
        window.setTimeout(wrapper, WAIT_TIME);
      }

    };
    window.setTimeout(wrapper, WAIT_TIME);
  }
}
, "dataFetchMethod": "custom_javascript", "id": "krux"}], "anonymizeIP": false, "projectId": "3795841958", "visitorAttributes": [], "accountId": "3013110282", "plugins": [function(PluginManager) {
  var Hogan=function(t){function r(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}var n={};return r.m=t,r.c=n,r.p="",r(0)}([function(t,r){function n(t){this.r=t,this.buf=""}function e(t,r){var n;if(r&&"object"==typeof r)if(void 0!==r[t])n=r[t];return n}function i(t){return String(null===t||void 0===t?"":t)}function o(t){return t=i(t),p.test(t)?t.replace(u,"&amp;").replace(f,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(a,"&quot;"):t}t.exports=n,n.prototype={r:function(t,r,n){return""},v:o,t:i,render:function(t,r,n){return this.ri([t],r||{},n)},ri:function(t,r,n){return this.r(t,r,n)},rs:function(t,r,n){var e=t[t.length-1];if(!s(e))return void n(t,r,this);for(var i=0;i<e.length;i++)t.push(e[i]),n(t,r,this),t.pop()},s:function(t,r,n,e,i,o,u){var f;if(s(t)&&0===t.length)return!1;if(f=!!t,!e&&f&&r)r.push("object"==typeof t?t:r[r.length-1]);return f},d:function(t,r,n,i){var o,u=t.split("."),f=this.f(u[0],r,n,i),c=null;if("."===t&&s(r[r.length-2]))f=r[r.length-1];else for(var l=1;l<u.length;l++)if(o=e(u[l],f),void 0!==o)c=f,f=o;else f="";if(i&&!f)return!1;if(!i&&"function"==typeof f)r.push(c),f=this.mv(f,r,n),r.pop();return f},f:function(t,r,n,i){for(var o=!1,u=null,f=!1,c=r.length-1;c>=0;c--)if(u=r[c],o=e(t,u),void 0!==o){f=!0;break}if(!f)return i?!1:"";if(!i&&"function"==typeof o)o=this.mv(o,r,n);return o},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},mv:function(t,r,n){var e=r[r.length-1],o=t.call(e);if("function"==typeof o)return this.ct(i(o.call(e)),e,n);else return o}};var u=/&/g,f=/</g,c=/>/g,l=/'/g,a=/"/g,p=/[&<>"']/,s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}]);
  
PluginManager.registerWidget({
      widgetId: 'anchorad_poc2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "anchorad_poc2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":"a"},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"anchor_meter","default_value":["Sub"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"anchor_ad_session_cap","default_value":1},{"name":"anchor_ad_session_hours","default_value":1},{"name":"anchor_ad_impression_cap","default_value":3},{"name":"anchor_ad_cap_days","default_value":365},{"name":"campaignId","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner) {
   document.querySelector("#Anchor").innerHTML = widget.full_html;
   var style = document.createElement("style");
   style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), eval(widget.custom_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
} else {
   widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
   var widgetObj = {
       name: "AnchorAd",
       html: widget.full_html,
       multi: widget.multi,
       css: widget.css,
       codename: widget.nytID,
       script: widget.extra_js,
       script_2: widget.extra_js_2,
       script_3: widget.extra_js_3,
       script_4: widget.extra_js_4,
       callback: function() {
           var id = widget.nytID,
               js = widget.custom_js,
         			 campaign_id = widget.campaignId;
        	 var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;	
           console.log("[OptimizelyNYT] AnchorAd Impression ID:" + widget.nytID), window.optimizely.push({
               type: "event",
               eventName: "anchorad_impression",
               tags: {
                   codename: id,
                 	 agentId: agent_id
               }
           }), document.querySelectorAll("#Anchor a").forEach(function(a) {
             if(a.href.indexOf('/subscription') > -1){
               a.onclick = function() {
                   console.log("[OptimizelyNYT] AnchorAd Click ID:" + id), window.optimizely.push({
                       type: "event",
                       eventName: "anchorad_clicked",
                       tags: {
                           codename: id,
                           campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                         	 agentId: agent_id
                       }
                   })
               }
             }
           }), "" !== js && eval(js);
       },
       selector: "#Anchor"
   };
var behavior = optimizely.get('behavior');
var anchor_query = function(hours){
var impressions = behavior.query({"version": "0.2",
"filter":[              
    {
      "field":["name"],
      "value":"anchorad_impression"
    },
    {
      "field":["age"],
      "comparator": "lt",
      "value": hours*60*60*1000
    },
    {
      "field":["tags","codename"],
      "value":widget.nytID
    }],
"reduce":{
"aggregator":"count"
}
});
 return impressions;
};
if(widget.anchor_meter.indexOf('Sub') > -1){
  console.log('Anchor Detects Sub Experience');
  var anchor_ad_session_impressions = anchor_query(widget.anchor_ad_session_hours);
  var anchor_ad_lifetime_impressions = anchor_query(widget.anchor_ad_cap_days*24);
  if(anchor_ad_session_impressions < widget.anchor_ad_session_cap && anchor_ad_lifetime_impressions < widget.anchor_ad_impression_cap){
		console.log("Session Impressions:" + anchor_ad_session_impressions + " was less than " + widget.anchor_ad_session_cap);
    console.log("Lifetime Impressions:" + anchor_ad_lifetime_impressions + " was less than " + widget.anchor_ad_impression_cap);
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    }
  else{
    if(anchor_ad_session_impressions < widget.anchor_ad_session_cap){
   console.log("Session Impressions: " + anchor_ad_session_impressions + " was greater than or equal to session cap of " + widget.anchor_ad_session_cap);
  }
    if(anchor_ad_lifetime_impressions < widget.anchor_ad_impression_cap){
    console.log("Lifetime Impressions: " + anchor_ad_lifetime_impressions + " was greater than or equal to lifetime cap of " + widget.anchor_ad_impression_cap);
    }}
}
else if(window.NYToptly.audience('counted') && widget.anchor_meter.indexOf(window.NYToptly.audience("meter_views").toString())>-1){
  	console.log('Pass Meter');
     window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
}
else{
    console.log('Anchor already viewed in past, ', widget.anchor_days,' Days');
    console.log('Meter Counted is ',window.NYToptly.audience('counted'));
    console.log('Failed Anchor Meter');
    console.log('Anchor set to appear at Meter ' + widget.anchor_meter);
    console.log('Current Meter at ' + window.NYToptly.audience("meter_views"));
}
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "anchorad_poc2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":"a"},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"anchor_meter","default_value":["Sub"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"anchor_ad_session_cap","default_value":1},{"name":"anchor_ad_session_hours","default_value":1},{"name":"anchor_ad_impression_cap","default_value":3},{"name":"anchor_ad_cap_days","default_value":365},{"name":"campaignId","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'bar1poc2_staging',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "bar1poc2_staging";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (window.optlyDesktop && window.optlyDesktop.p13nInner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
    document.querySelector("#Bar1").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), "" !== widget.custom_js && eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
    var widgetObj = {
        name: "Bar1",
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
          	var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            "" !== js && eval(js), console.log("[OptimizelyNYT] Bar1 Impression ID:" + id), window.optimizely.push({
                type: "event",
                eventName: "bar1_impression",
                tags: {
                    codename: id,
                  	agentId: agent_id
                }
            }), document.querySelectorAll("#Bar1 a").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT] Bar1 Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "bar1_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                          	agentId: agent_id
                        }
                    })
                }.bind(void 0, id)
            });
            var bar1_hover_triggered = false;
            document.querySelector('#Bar1').onmouseover = function() {
                if (!bar1_hover_triggered) {
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        type: "event",
                        eventName: "bar1_hover",
                        tags: {
                          	agentId: agent_id
                        }
                    });
                    bar1_hover_triggered = true
                }
            }
        },
        selector: "#Bar1"
    };
    if (document.querySelector('#Bar1') && !window.NYToptly.getQueryParameter('gwt')) {
        (function() {
            if (typeof window.CustomEvent === "function") return false;

            function CustomEvent(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();
        var bar1event = new CustomEvent('bar1rendered', {
            detail: undefined
        });
        document.dispatchEvent(bar1event);
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    } else {
        console.log('Bar 1 container not present')
    }
    setTimeout(function() {
        window.NYToptly.loadScript("https://static01.nyt.com/marketing/assets/optly/scripts/bar1/bar1_v3.js", null);
        console.log('attempting load')
    }, 4000);
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "bar1poc2_staging";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'interstitial_poc2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "interstitial_poc2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":" "},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"interstitial_meter","default_value":"6"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (!!window.optimizely_p13n_inner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
    var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
    };
    appendDiv('Interstitial_optly');
    document.querySelector("#Interstitial_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
    var widgetObj = {
        name: "Interstitial",
        html: widget.full_html,
        multi: widget.multi,
        css: widget.css,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            console.log("[OptimizelyNYT] Interstitial Impression ID:" + widget.nytID), window.optimizely.push({
                type: "event",
                eventName: "interstitial_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            }), "" !== js && eval(js), document.querySelectorAll("#Interstitial_optly a").forEach(function(a) {
                if(a.href.indexOf('/subscription') > -1 ){
                    a.onclick = function() {
                        console.log("[OptimizelyNYT] Interstitial Click ID:" + id), window.optimizely.push({
                            type: "event",
                            eventName: "interstitial_clicked",
                            tags: {
                                codename: id,
                                campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                                agentId: agent_id
                            }
                        });
                    }
                }
            });
            var close_buttons = [];
            close_buttons.push(document.getElementById('growl-optout'));
            close_buttons.push(document.getElementById('growl-skipthis'));
            close_buttons.forEach(function(element){
                    element.onclick = function(){
                        var interstitial_optly = document.getElementById('Interstitial_optly');
                        interstitial_optly.parentNode.removeChild(interstitial_optly);
                    }}
            )
        },
        selector: "#Interstitial_optly"
    };
    var debugFlag = (window.location.search.indexOf("debug=1") > -1 || document.cookie.indexOf('mtr-debug') > -1);
    if ((window.NYToptly.audience('counted') || debugFlag) && window.NYToptly.audience('meter_views').toString() === widget.interstitial_meter || document.cookie.indexOf('preview_interstitial')> -1) {
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
         window.nytAnalytics.MeterTrigger({"name": "interstitial"});
    } else {
        console.log('Meter Counted is ',window.NYToptly.audience('counted'));
        console.log('Interstitial Fail Meter');
        console.log('Interstitial Meter set to ', widget.interstitial_meter);
        console.log('Current User Meter ', window.NYToptly.audience('meter_views').toString());
    }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "interstitial_poc2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":" "},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"interstitial_meter","default_value":"6"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'killset_pocII',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "killset_pocII";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"placement_name","default_value":"Growl"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        var optly_killset = true;
console.log('Killset applied to ' + widget.placement_name);
var killed_selector;
switch(widget.placement_name){
	case "Growl":
		killed_selector = "#Growl_optly";
		break;
	case "Interstitial":
		killed_selector = "#Interstitial_optly";
		break;
  case "Anchor Ad":
    killed_selector = "#Anchor_optly";
    break;
}
if(killed_selector){
var newDiv = document.createElement("div");
newDiv.setAttribute('class',"optly_killset " + widget.placement_name);
var killed_element = document.querySelector(killed_selector);
killed_element.insertBefore(newDiv,killed_element.firstChild);}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "killset_pocII";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"placement_name","default_value":"Growl"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        
      },
    });

PluginManager.registerWidget({
      widgetId: 'abchannelpass_staging',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-widget-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"abchannelpass\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("widget.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "abchannelpass_staging";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"no_placement","default_value":[]}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-abchannelpass_staging';
widget._styleTag.innerHTML = '.abchannelpass { color: red;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        window.NYToptly.viewAction('LOAD_WIDGET_PASS_PLACEMENT', widget.no_placement);
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "abchannelpass_staging";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"no_placement","default_value":[]}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-abchannelpass_staging');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'lp',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "lp";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":"a"},{"name":"full_html","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""},{"name":"css","default_value":""},{"name":"framework_restore","default_value":"false"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (optimizely.state && optimizely.state.directives && optimizely.state.directives.isEditor) {
    document.querySelector("#LP_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), "" !== widget.custom_js && eval(widget.custom_js)
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);
    var widgetObj = {
        name: "LP",
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        script: widget.extra_js,
        codename: widget.nytID,
        selector: "#LP_optly",
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
            console.log("[OptimizelyNYT - Landing Page Ext.] LP Impression ID:" + widget.nytID), window.optimizely.push({
                type: "event",
                eventName: "lp_impression",
                tags: {
                    id: id
                }
            }), document.querySelectorAll("body [data-cta]").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT - Landing Page Ext.] LP Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "lp_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href)
                        }
                    })
                }
            }), "" !== widget.custom_js && eval(js)
        }
    };
    window.location.href.indexOf("subscription") > -1 && window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj)
}
if (widget.framework_restore !== 'true') {
  var utils = optimizely.get('utils');
	utils.waitForElement('.exo_loading').then(function(){
        console.log("[OptimizelyNYT - Landing Page Ext.] Remove Spinner");
    	document.querySelector('.exo_loading').classList.remove('exo_loading');
    });
  	utils.waitForElement('body > #container, #outterwrapper.shell, #shell, #container, body > .wrapper, body > .page').then(function(){
        console.log("[OptimizelyNYT - Landing Page Ext.] Show Page");
    	document.querySelector('body > #container, #outterwrapper.shell, #shell, #container, body > .wrapper, body > .page').style.visibility = 'visible';
  });
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "lp";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":"a"},{"name":"full_html","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"custom_js","default_value":""},{"name":"css","default_value":""},{"name":"framework_restore","default_value":"false"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'Growlpoc_2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "Growlpoc_2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":"a"},{"name":"full_html","default_value":""},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner) {
     	var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
    appendDiv('Gateway_optly');
   document.querySelector('#Gateway_optly').innerHTML=widget.full_html;
 var style = document.createElement("style");
 style.type = "text/css";
 style.innerHTML = widget.css;
 document.getElementsByTagName("head")[0].appendChild(style);
  if(typeof(window.NYToptly) !== "undefined") { window.NYToptly.loadScript(widget.extra_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);}
  if(widget.custom_js !== "") {
    eval(widget.custom_js);
  }
} else {
  
	widget.full_html = window.NYToptly.getCountryText(widget.full_html);
	
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

  var widgetObj = {
    name: 'Gateway',
    html: widget.full_html,
    css: widget.css,
    multi: widget.multi,
    codename: widget.nytID,
    script: widget.extra_js,
    script_2: widget.extra_js_2,
    script_3: widget.extra_js_3,
    script_4: widget.extra_js_4,
    callback: function() {
      var id = widget.nytID;
      var js = widget.custom_js;
      var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
      if(js !== "") {
      	eval(js);
      }
      console.log("[OptimizelyNYT] gateway Impression ID:" + id);
      window['optimizely'].push({
        type: "event",
        eventName: "gateway_impression",
        tags: {
         codename: id,
         agentId: agent_id
        }
			});
      document.querySelectorAll('#gw-bg .gw-clickable,#cta-extended,#Gateway_optly .buttonsContainer a').forEach(function(node) {
        node.onclick = function() { 
          console.log("[OptimizelyNYT] gateway Click ID:" + id);
          window['optimizely'].push({
            type: "event",
            eventName: "gateway_clicked",
            tags: {
             codename: id,
             campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
         		 agentId: agent_id
            }
          });
        };
      });
    },
    selector: "#gatewayUnit"
  };
  if(window.location.search.indexOf('gwt=pay') > -1){
  window.NYToptly.viewAction('LOAD_WIDGET_PLACEMENT', widgetObj);
    window.optly_events.gateway = true;
    var element = document.getElementById("gateway_hider");
		element.parentNode.removeChild(element);
    if(window.nytAnalytics){window.nytAnalytics.MeterTrigger({"name": "gateway"});}
  }
  else{
    window.optly_events.gateway = false;
  console.log('No Gateway Parameter');
  }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "Growlpoc_2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":"a"},{"name":"full_html","default_value":""},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":"FILL_IN"},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();

      },
    });

PluginManager.registerWidget({
      widgetId: 'growl_poc2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "growl_poc2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":"5"},{"name":"growl_meter_2","default_value":"9"},{"name":"growl_meter_3","default_value":"10"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
  var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
      };
  appendDiv('Growl_optly');
 document.querySelector('#Growl_optly').innerHTML = widget.full_html;
 var style = document.createElement("style");
 style.type = "text/css";
 style.innerHTML = widget.css;
 document.getElementsByTagName("head")[0].appendChild(style);
 window.NYToptly.loadScript(widget.extra_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
  if(widget.custom_js !== "") {
    eval(widget.custom_js);
  }
} else {
  
	widget.full_html = window.NYToptly.getCountryText(widget.full_html);
	
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

  var widgetObj = {
    name: 'Growl',
    html: widget.full_html,
    css: widget.css,
    multi: widget.multi,
    codename: widget.nytID,
    script: widget.extra_js,
    script_2: widget.extra_js_2,
    script_3: widget.extra_js_3,
    script_4: widget.extra_js_4,
    callback: function() {
      var id = widget.nytID;
      var js = widget.custom_js;
      var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
      if(js !== "") {
      	eval(js);
      }
      console.log("[OptimizelyNYT] growl Impression ID:" + id);
      window['optimizely'].push({
        type: "event",
        eventName: "growl_impression",
        tags: {
         codename: id,
         agentId: agent_id
        }
			});
      document.querySelectorAll('#Growl_optly a').forEach(function(node) {
        if(node.href.indexOf('/subscription') > -1){
        node.onclick = function() { 
          console.log("[OptimizelyNYT] growl Click ID:" + id);
          window['optimizely'].push({
            type: "event",
            eventName: "growl_clicked",
            tags: {
             codename: id,
             campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
        		 agentId: agent_id
            }
          });
        };
      }
      });
      var opt_close = document.querySelector('#growl-close');
      opt_close.onclick = function(){
					var opt_growl = document.getElementById('Growl_optly');
					opt_growl.parentNode.removeChild(opt_growl);
					};
    },
    selector: "#Growl_optly"
  };
 var meter_count_string = window.NYToptly.audience("meter_views").toString();
 var debugFlag = (window.location.search.indexOf("debug=1") > -1);
  if((window.NYToptly.audience('counted') || debugFlag) && 
     ( meter_count_string === widget.growl_meter || 
	   meter_count_string === widget.growl_meter_2 || 
	   meter_count_string === widget.growl_meter_3
	 )
  ){
      window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
  }
  else{
  var child_div = document.createElement("div");
  document.querySelector('#Growl_optly').appendChild(child_div);
  console.log('Meter Counted is ',window.NYToptly.audience('counted'));
  console.log('Growl Fail Meters');
  console.log('Current Growl Meters at ');
  }
}

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "growl_poc2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":"5"},{"name":"growl_meter_2","default_value":"9"},{"name":"growl_meter_3","default_value":"10"},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'WelcomeAd',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "WelcomeAd";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":" "},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if (window.optlyDesktop && window.optlyDesktop.p13nInner || window.location != window.parent.location && window.location.search.indexOf('optimizely_editor') > -1) {
  	var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
      }
    appendDiv('WelcomeAd_optly');
    document.querySelector("#WelcomeAd_optly").innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style), window.NYToptly.loadScript(widget.extra_js), eval(widget.custom_js), window.NYToptly.loadScript(widget.extra_js_2), window.NYToptly.loadScript(widget.extra_js_3), window.NYToptly.loadScript(widget.extra_js_4), eval(widget.custom_js);
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html), widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1), widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2), widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3), widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);
    var widgetObj = {
        name: "WelcomeAd",
        html: widget.full_html,
        multi: widget.multi,
        css: widget.css,
        codename: widget.nytID,
        script: widget.extra_js,
      	script_2: widget.extra_js_2,
      	script_3: widget.extra_js_3,
      	script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID,
                js = widget.custom_js;
          	var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            console.log("[OptimizelyNYT] Welcome Ad Impression ID:" + widget.nytID), window.optimizely.push({
                type: "event",
                eventName: "welcomead_impression",
                tags: {
                    codename: id,
                  	agentId: agent_id
                }
            }), "" !== js && eval(js), document.querySelectorAll("#WelcomeAd_optly a#cta-extended").forEach(function(a) {
                a.onclick = function() {
                    console.log("[OptimizelyNYT] Interstitial Click ID:" + id), window.optimizely.push({
                        type: "event",
                        eventName: "welcomead_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter("campaignId", a.href),
                          	agentID: agent_id
                        }
                    });
                }
            });
         var opt_close = document.querySelector('#instl_close');
          opt_close.onclick = function(){
					var opt_welcome_ad = document.getElementById('WelcomeAd_optly');
					opt_welcome_ad.parentNode.removeChild(opt_welcome_ad)
					};
        },
        selector: "#WelcomeAd_optly"
    };
  		var behavior = optimizely.get('behavior');
  		var welcome_query = function(hours){
        var impressions = behavior.query({"version": "0.2",
				"filter":[              {
				"field":["name"],
			  "value":"welcomead_impression"
				},{
          "field":["age"],
			 "comparator": "lt",
             "value": hours*60*60*1000
        },{
                  "field":["tags","codename"],
                     "value":widget.nytID
                                         }],
				"reduce":{
				"aggregator":"count"
				}
				});
         return impressions;
      }
  		var welcome_ads_small_cap = welcome_query(widget.session_cap_hours);
  		var welcome_ads_long_cap = welcome_query(24*widget.freq_cap_days);
      var welcome_ads_shown = false;
			if(welcome_ads_small_cap < widget.session_cap){
        console.log(welcome_ads_small_cap + " was less than session cap of " + widget.session_cap)
      }
  		if(widget.freq_cap_number != "" && widget.freq_cap_days != ""){
        if(welcome_ads_small_cap < widget.session_cap && welcome_ads_long_cap < widget.freq_cap_number){
        	window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
          welcome_ads_shown = true;
        }
        else{
        console.log("Failed Frequency Cap ",welcome_ads_long_cap, widget.freq_cap_number);
        }
      }
  	else if(welcome_ads_small_cap < widget.session_cap){
      window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
      welcome_ads_shown = true;
    }
  else {
  console.log('Welcome Ad already shown');
  }

  if (!welcome_ads_shown) {
        var debugFlag = (window.location.search.indexOf("debug=1") > -1 || document.cookie.indexOf('mtr-debug') > -1);
        if (debugFlag) {
            window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
        }
    }
}
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "WelcomeAd";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":" "},{"name":"css","default_value":" "},{"name":"extra_js","default_value":"a"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":""},{"name":"click4","default_value":""},{"name":"nytID","default_value":" "},{"name":"custom_js","default_value":""},{"name":"session_cap","default_value":"1"},{"name":"session_cap_hours","default_value":24},{"name":"freq_cap_number","default_value":"3"},{"name":"freq_cap_days","default_value":365},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'cancel_subscription',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"cancel_subscription\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "cancel_subscription";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-cancel_subscription';
widget._styleTag.innerHTML = '.cancel_subscription { color: red;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        $(function() {
$('body').prepend(extension.$html);
  $( '<div id="black_ribbon"></div>' ).insertBefore( $("body"));
document.querySelector("#black_ribbon").innerHTML = widget.full_html;
  var style = document.createElement("style");
  style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style);
  $("#closeButtonImg").click(function(){
$(".innerPopup").css("display","none");
});
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "cancel_subscription";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-cancel_subscription');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'black_header',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"black_header\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "black_header";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-black_header';
widget._styleTag.innerHTML = '@import url(https://a1.nyt.com/fonts/css/fonts.css);#extension-css,#masthead,#navigation,.has-ribbon #ribbon{margin-top:38px!important}.font-smoothing{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#b2bpers-container{position:fixed;width:100%;top:0;left:0;z-index:1000000140}#b2bpers-ad{position:absolute;background-color:#000;text-align:center;font-size:14px;color:#fff;font-family:franklin-normal-700,sans-serif;font-weight:700;right:6px;top:-1px;width:100%;padding:10px 0}#b2bpers-ad a{color:#fff;text-decoration:underline}.app-collection .shell{padding-top:90px}.NYT5Style #shell{padding-top:30px}@media screen and (max-width:768px){#b2bpers-container{display:none!important}}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        $(function() {
$('body').prepend(extension.$html);
//  $( '<div id="b2bpers-container" class="font-smoothing"><div id="b2bpers-ad"></div></div>' ).insertBefore( "#masthead-cap " );
  $( ".black_header" ).append( "<div id=\"b2bpers-container\" class=\"font-smoothing\"><div id=\"b2bpers-ad\"></div></div>");
  document.querySelector("#b2bpers-ad").innerHTML = widget.full_html;
  var style = document.createElement("style");
  style.type = "text/css", style.innerHTML = widget.css, document.getElementsByTagName("head")[0].appendChild(style);
	window['optimizely'].push({
  type: "event",
  eventName: "fixedheader_impression"
}); 
  document.querySelector("#b2bpers-ad").onclick = function(){
		window['optimizely'].push({
  type: "event",
  eventName: "fixedheader_click"
});}
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "black_header";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"css","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-black_header');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'universalGrowl',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "universalGrowl";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["9"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner || 
     window.location != window.parent.location && 
	 window.location.search.indexOf('optimizely_editor') > -1) {
	var appendDiv = function(id){
	var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
	};
	appendDiv('Growl_optly');
 
	document.querySelector('#Growl_optly').innerHTML = widget.full_html;
	var style = document.createElement("style");
	style.type = "text/css";
	style.innerHTML = widget.css;
	document.getElementsByTagName("head")[0].appendChild(style);
	window.NYToptly.loadScript(widget.extra_js), 
	window.NYToptly.loadScript(widget.extra_js_2), 
	window.NYToptly.loadScript(widget.extra_js_3), 
	window.NYToptly.loadScript(widget.extra_js_4), 
	eval(widget.custom_js);
	  
	if(widget.custom_js !== "") {
		eval(widget.custom_js);
	}
} else {
	widget.full_html = window.NYToptly.getCountryText(widget.full_html);
	
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
	widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

	var widgetObj = {
		name: 'Growl',
		html: widget.full_html,
		css: widget.css,
		multi: widget.multi,
		codename: widget.nytID,
		script: widget.extra_js,
		script_2: widget.extra_js_2,
		script_3: widget.extra_js_3,
		script_4: widget.extra_js_4,
		callback: function() {
			var id = widget.nytID;
			var js = widget.custom_js;
      var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
			if(js !== "") {
				eval(js);
			}
			console.log("[OptimizelyNYT] growl Impression ID:" + id);
			window['optimizely'].push({
				type: "event",
				eventName: "growl_impression",
				tags: { 
          codename: id,
          agentId: agent_id    
              }
			});
			document.querySelectorAll('#Growl_optly a').forEach(function(node) {
				if(node.href.indexOf('subscription') > -1){
					node.onclick = function() { 
						console.log("[OptimizelyNYT] growl Click ID:" + id);
						window['optimizely'].push({
							type: "event",
							eventName: "growl_clicked",
							tags: {
								codename: id,
								campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                agentId: agent_id
							}
						});
					};
				}
			});
			var opt_close = document.querySelector('#growl-close');
			opt_close.onclick = function(){
				var opt_growl = document.getElementById('Growl_optly');
				opt_growl.parentNode.removeChild(opt_growl);
			};
		},
		selector: "#Growl_optly"
	};
  
	var meter_count_string = window.NYToptly.audience("meter_views").toString();
	var debugFlag = (window.location.search.indexOf("debug=1") > -1);
    if((window.NYToptly.audience('counted') || debugFlag) && 
       (widget.growl_meter.indexOf(meter_count_string) !== -1)
    ){
      window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    }
	else{
		console.log('Meter Counted is ',window.NYToptly.audience('counted'));
		console.log('Growl Fail Meters');
		console.log('Current Growl Meters at ');
	}
}



      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "universalGrowl";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["9"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'survey',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"survey_optly\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "survey";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-survey';
widget._styleTag.innerHTML = '@import url(https://a1.nyt.com/fonts/css/fonts.css);/* EXTENSION CSS*/.font-smoothing {  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        console.log(widget.htmlFileName);
require(['foundation/main'], function () {
  require(['foundation/models/user-data'], function (userData) {

        var rmid = /RMID=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var agentId = /nyt-a=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var w = 1366;
        var h = 768;
        if (document.all || document.layers) {
            w = screen.availWidth;
            h = screen.availHeight;
        }
        var popW = 650;
        var popH = 350;
        var topPos = (h - popH) / 2;
        var leftPos = (w - popW) / 2;

        window.open('http://www.nytimes.com/marketing/surveys/' + widget.htmlFileName + '.html?rgi=' + userData.id + '&RMID=' + rmid + '&AgentID=' + agentId,'survey','scrollbars=no,width=' + popW + ',height=' + popH + ',top=' + topPos + ',left=' + leftPos);
  });
});
NYToptly.setCookie('survey_triggered',true,365,'.nytimes.com');
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "survey_triggered"
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "survey";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-survey');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: 'universalGrowl_2',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "universalGrowl_2";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["5","9","10"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"persistent","default_value":"true"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        if(!!window.optimizely_p13n_inner ||
    window.location != window.parent.location &&
    window.location.search.indexOf('optimizely_editor') > -1) {
    var appendDiv = function(id){
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id',id);
        document.body.appendChild(newDiv);
        console.log("[OptimizelyNYT] "+ id + " div inserted");
    };
    appendDiv('Growl_optly');

    document.querySelector('#Growl_optly').innerHTML = widget.full_html;
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = widget.css;
    document.getElementsByTagName("head")[0].appendChild(style);
    window.NYToptly.loadScript(widget.extra_js),
        window.NYToptly.loadScript(widget.extra_js_2),
        window.NYToptly.loadScript(widget.extra_js_3),
        window.NYToptly.loadScript(widget.extra_js_4),
        eval(widget.custom_js);

    if(widget.custom_js !== "") {
        eval(widget.custom_js);
    }
} else {
    widget.full_html = window.NYToptly.getCountryText(widget.full_html);

    widget.full_html = widget.full_html.replace(/%%CLICKTHRU1%%/g, widget.click1);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU2%%/g, widget.click2);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU3%%/g, widget.click3);
    widget.full_html = widget.full_html.replace(/%%CLICKTHRU4%%/g, widget.click4);

    var widgetObj = {
        name: 'Growl',
        html: widget.full_html,
        css: widget.css,
        multi: widget.multi,
        codename: widget.nytID,
        script: widget.extra_js,
        script_2: widget.extra_js_2,
        script_3: widget.extra_js_3,
        script_4: widget.extra_js_4,
        callback: function() {
            var id = widget.nytID;
            var js = widget.custom_js;
            var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
            if(js !== "") {
                eval(js);
            }
            console.log("[OptimizelyNYT] growl Impression ID:" + id);
            window['optimizely'].push({
                type: "event",
                eventName: "growl_impression",
                tags: { 
                  codename: id,
                  agentId: agent_id
                      }
            });
            document.querySelectorAll('#Growl_optly a').forEach(function(node) {
                if(node.href.indexOf('subscriptions') > -1){
                    node.onclick = function() {
                        console.log("[OptimizelyNYT] growl Click ID:" + id);
                        window['optimizely'].push({
                            type: "event",
                            eventName: "growl_clicked",
                            tags: {
                                codename: id,
                                campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                                                agentId: agent_id
                            }
                        });
                    };
                }
            });
            var opt_close = document.querySelector('#growl-close');
            opt_close.onclick = function(){
                var opt_growl = document.getElementById('Growl_optly');
                opt_growl.parentNode.removeChild(opt_growl);
            };
        },
        selector: "#Growl_optly"
    };

    var meter_count_string = window.NYToptly.audience("meter_views").toString();
    var debugFlag = (window.location.search.indexOf("debug=1") > -1);

    if ( (window.NYToptly.audience('counted') || debugFlag || widget.persistent === 'true') && (widget.growl_meter.indexOf(meter_count_string) !== -1))
    {
        window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
    }
    else{
        console.log('Meter Counted is ',window.NYToptly.audience('counted'));
        console.log('Growl Fail Meters');
        console.log('Current Growl Meters at ');
    }
}



      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "universalGrowl_2";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"extra_js","default_value":""},{"name":"full_html","default_value":""},{"name":"click1","default_value":""},{"name":"click2","default_value":""},{"name":"click3","default_value":""},{"name":"Click4","default_value":""},{"name":"nytID","default_value":""},{"name":"css","default_value":""},{"name":"custom_js","default_value":""},{"name":"growl_meter","default_value":["5","9","10"]},{"name":"extra_js_2","default_value":""},{"name":"extra_js_3","default_value":""},{"name":"extra_js_4","default_value":""},{"name":"persistent","default_value":"true"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8452060431',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"survey_optly\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8452060431";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-8452060431';
widget._styleTag.innerHTML = '@import url(https://a1.nyt.com/fonts/css/fonts.css);/* EXTENSION CSS*/.font-smoothing {  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        
console.log(widget.htmlFileName);
require(['foundation/main'], function () {
  require(['foundation/models/user-data'], function (userData) {
        var rmid = /RMID=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var agentId = /nyt-a=([^;]+)/.test(unescape(document.cookie)) ? RegExp.$1 : '';
        var variableNum;
        var abraAlloc = document.querySelector('html').dataset.nytAb.match(/\bLiftoff=([0-9][0-9]*)\b/);
        if(abraAlloc) {
            variationNum = abraAlloc && abraAlloc[1] || 0;    
        }
        else {
            var qs = window.location.search.match(/liftoffSurveyTest=\d*/);
            variationNum = qs[0].split('=')[1];    
        }
        var offer = ['subscription', 'free trial'][variationNum % 2];
        var w = 1366;
        var h = 768;
        if (document.all || document.layers) {
            w = screen.availWidth;
            h = screen.availHeight;
        }
        var popW = 650;
        var popH = 350;
        var topPos = (h - popH) / 2;
        var leftPos = (w - popW) / 2;

        window.open('http://www.nytimes.com/marketing/surveys/' + widget.htmlFileName + '.html?rgi=' + userData.id + '&RMID=' + rmid + '&AgentID=' + agentId + '&var=' + variationNum + '&offer=' + offer,'survey','scrollbars=no,width=' + popW + ',height=' + popH + ',top=' + topPos + ',left=' + leftPos);
  });
});
NYToptly.setCookie('survey_triggered',true,365,'.nytimes.com');
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "survey_triggered"
});

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8452060431";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"htmlFileName","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-8452060431');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8473813042',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("widget.$instance",c,p,0)));t.b("\" class=\"fbpx_optly\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8473813042";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"subBundle","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1594297750840102');
fbq('track', 'PageView');
// Sample call to track custom event
fbq('trackCustom', 'IPMatch', {
    sub_bundle: widget.subBundle
});

NYToptly.setCookie('fbpx',true,365,'.nytimes.com');
window['optimizely'] = window['optimizely'] || [];
window['optimizely'].push({
  type: "event",
  eventName: "fbpx"
});
      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8473813042";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"subBundle","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-extension-' + extension.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8495224061',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8495224061";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"iframeSrc","default_value":""},{"name":"selectorsForClickEvent","default_value":"#gw-bg .gw-clickable, #cta-extended"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":""},{"name":"itemsForRemove","default_value":""},{"name":"addAfterItem","default_value":""},{"name":"testElement","default_value":".product__container__content"},{"name":"optly_disable","default_value":"0"},{"name":"iframeJS","default_value":""},{"name":"custom_js","default_value":""},{"name":"parentCSS","default_value":""},{"name":"iframeCSS","default_value":""},{"name":"parentHTML","default_value":"<div id=\"optimizelyIframeContainer\"></div>"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-8495224061';
widget._styleTag.innerHTML = '. {  background-color: #fff575;  border-bottom: 1px solid #e0d769;  color: #555;  padding: 10px;	font-weight: bold;  text-align: center;  font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        
var runWhenReady = function runWhenReady(testFunction, inFunction, defaultFunction, mlsecs, reps) {
    var repetition = reps || 5;

    setTimeout(function z() {
        if (testFunction()) {
            inFunction();
        } else if (--repetition) {
            setTimeout(z, mlsecs);
        } else if (defaultFunction) {
            defaultFunction();
        }
    }, mlsecs);
};

widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU1%%/g, widget.click1);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU2%%/g, widget.click2);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU3%%/g, widget.click3);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU4%%/g, widget.click4);

var widgetObj = {
    name: 'Gateway',
    html: widget.parentHTML,
    callback: function() {

        var id = widget.nytID;
        var js = widget.custom_js;
        var gatewayContainer = document.getElementById("gatewayUnit");
        var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;

        if (+widget.optly_disable) {
            var str = '';
            if (widget.iframeSrc.indexOf("?") >= 0) {
                str = "&optimizely_disable=true";
            }
            else {
                str = "?optimizely_disable=true";
            }
            widget.iframeSrc += str;
        }

        if (!widget.parentHTML) {
            var wrapper = document.createElement("div");
            wrapper.id = "optimizelyIframeContainer";
            gatewayContainer.appendChild(wrapper);
        }

        // apply inline javascript for parent container
        script = document.createElement('script');
        script.text = widget.custom_js;
        document.getElementsByTagName('head')[0].appendChild(script);

        var container = document.getElementById("optimizelyIframeContainer");
        container.className = "hidden";

        var iframe = document.createElement("iframe");
        iframe.setAttribute('id', "optimizelyIframe");
        iframe.setAttribute('src', widget.iframeSrc);

        container.appendChild(iframe);

        // set iframe style in parent window
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = widget.parentCSS;
        document.getElementsByTagName('head')[0].appendChild(style);

        var buildTagxQueryString = function (params) {
            var i;
            var paramNames = Object.keys(params);
            var qs = [];
            for (i = 0; i < paramNames.length; ++i) {
                qs.push(paramNames[i] + '=' + params[paramNames[i]]);
            }
            qs = qs.join('&');
            qs = qs.replace(/ /g, '+');
            qs = qs.replace(/\//g, '%2F');
            return qs;
        };

        var processElement = function() {

            console.log('[INFO] Process iframe');

            var doc = iframe.contentDocument;
            container.removeAttribute('class');

            // add QS params to  links in iframe
            require(['auth/mtr'], function(Mtr) {
                var tp = Mtr.trackingParams.Gateway;
                var tagxArgs = $.extend({}, tp.common, tp.links);
                var qs = buildTagxQueryString(tagxArgs);
                var i, links = doc.querySelectorAll('.product__container__wrap a');
                for (i = 0; i < links.length; ++i) {
                    var url = links[i].href;
                    if (!url || (
                        !url.match(/myaccount/) &&
                        !url.match(/subscription/)))  { continue; }

                    var separator = "?";
                    if(url.indexOf(separator) > -1) { separator = "&"; }
                    links[i].setAttribute('href', url + separator + qs);
                    links[i].setAttribute('target', '_blank');
                }
            });

            // set style in iframe
            style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.innerHTML = widget.iframeCSS;

            doc.getElementsByTagName('head')[0].appendChild(style);

            // apply javascript for iframe
            script = document.createElement('script');
            script.text = widget.iframeJS;
            doc.getElementsByTagName('head')[0].appendChild(script);

            // so that iframe links will open in parent page:
            base = document.createElement('base');
            base.target = "_parent";
            doc.getElementsByTagName('head')[0].appendChild(base);

            if (js !== "") {
                eval(js);
            }
          
            window['optimizely'].push({
                type: "event",
                eventName: "gateway_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });

            doc.querySelectorAll(widget.selectorsForClickEvent).forEach(function(node) {
                node.onclick = function() {
                    console.log("[OptimizelyNYT] gateway Click ID:" + id);
                    window['optimizely'].push({
                        type: "event",
                        eventName: "gateway_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                            agentId: agent_id
                        }
                    });
                };
            });
          
            console.log("[OptimizelyNYT] Gateway Impression ID:" + id);

            // Removing elements from Iframe
            if (widget.itemsForRemove) {
                var itemsForRemove = doc.querySelectorAll(widget.itemsForRemove);
                for (i = 0; i < itemsForRemove.length; ++i) {
                    itemsForRemove[i].parentNode.removeChild(itemsForRemove[i]);
                }
            }

            //Add custom iFrame elements
            if (widget.addAfterItem) {
                var insertAfter = function (el, referenceNode) {
                    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
                };
                var bundle_section = doc.querySelector(widget.addAfterItem);
                var newEl = document.getElementById('iframe__addon');
                if (newEl) {
                    insertAfter(newEl, bundle_section);
                }
            }

        };

        var processDefault = function() {

            console.log('[INFO] Process default');

            var gatewayContainer = document.getElementById('gatewayUnit');

            require(['auth/mtr', 'ecomm/etTracker', 'auth/gateway/creatives'], function(Mtr, EtTracker, Creatives) {

                gatewayContainer.innerHTML = Creatives.defaultGateway;

                var links =  gatewayContainer.getElementsByTagName('a');

                var tp = Mtr.trackingParams.Gateway;
                var tagxArgs = $.extend({}, tp.common, tp.links);
                var qs = buildTagxQueryString(tagxArgs);

                for (var i = 0; i < links.length; ++i) {
                    var url = links[i].href;
                    if (!url || (
                        !url.match(/myaccount/) &&
                        !url.match(/subscription/)))  { continue; }

                    var separator = "?";
                    if(url.indexOf(separator) > -1) { separator = "&"; }
                    links[i].setAttribute('href', url + separator + qs);
                }

            });

        };

        var isElementExists = function () {
            //console.log('[INFO] Evaluate isElementExists()');

            var state = false;

            try {
                if (iframe.contentDocument && iframe.contentDocument.querySelectorAll(widget.testElement).length) {
                    //console.log('[INFO] Evaluate isElementExists(): return true');
                    state = true;
                }
                else {
                    //console.log('[INFO] Evaluate isElementExists(): return false');
                    state = false;
                }
            } catch (e) {
                //console.log( "[ERROR] " + e.message );
                state = false;
            }
            finally {
                return state;
            }

        };

        runWhenReady(
            isElementExists,
            processElement,
            processDefault,
            100, 100
        );

    },
    selector: "#gatewayUnit"
};

if (window.location.search.indexOf('gwt=pay') > -1) {
    window.NYToptly.viewAction('LOAD_WIDGET_PLACEMENT', widgetObj);
    window.optly_events.gateway = true;
    var element = document.getElementById("gateway_hider");
    element.parentNode.removeChild(element);
} else {
    window.optly_events.gateway = false;
    console.log('No Gateway Parameter');
}


      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8495224061";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"iframeSrc","default_value":""},{"name":"selectorsForClickEvent","default_value":"#gw-bg .gw-clickable, #cta-extended"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":""},{"name":"itemsForRemove","default_value":""},{"name":"addAfterItem","default_value":""},{"name":"testElement","default_value":".product__container__content"},{"name":"optly_disable","default_value":"0"},{"name":"iframeJS","default_value":""},{"name":"custom_js","default_value":""},{"name":"parentCSS","default_value":""},{"name":"iframeCSS","default_value":""},{"name":"parentHTML","default_value":"<div id=\"optimizelyIframeContainer\"></div>"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-8495224061');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '8507896133',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8507896133";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"iframeSrc","default_value":""},{"name":"selectorsForClickEvent","default_value":"#gw-bg .gw-clickable, #cta-extended"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":""},{"name":"itemsForRemove","default_value":""},{"name":"addAfterItem","default_value":""},{"name":"testElement","default_value":".product__container__content"},{"name":"interstitial_meter","default_value":"6"},{"name":"optly_disable","default_value":"0"},{"name":"custom_js","default_value":"var initClose = function () {\n    $('body').on('click', '.nytdGrowlNotifyCross', function () {\n        // $('#Interstitial_optly').fadeOut('slow');\n        $('#Interstitial_optly').hide();\n        $('body').removeClass('noScroll');\n    });\n};\n$('body').addClass('noScroll');\n\ninitClose();"},{"name":"iframeJS","default_value":""},{"name":"parentCSS","default_value":""},{"name":"iframeCSS","default_value":""},{"name":"parentHTML","default_value":"<div id=\"optimizelyIframeContainer\"></div>"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-8507896133';
widget._styleTag.innerHTML = '. {  background-color: #fff575;  border-bottom: 1px solid #e0d769;  color: #555;  padding: 10px;	font-weight: bold;  text-align: center;  font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        
var runWhenReady = function runWhenReady(testFunction, inFunction, defaultFunction, mlsecs, reps) {
    var repetition = reps || 5;

    setTimeout(function z() {
        if (testFunction()) {
            inFunction();
        } else if (--repetition) {
            setTimeout(z, mlsecs);
        } else if (defaultFunction) {
            defaultFunction();
        }
    }, mlsecs);
};

widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU1%%/g, widget.click1);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU2%%/g, widget.click2);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU3%%/g, widget.click3);
widget.parentHTML = widget.parentHTML.replace(/%%CLICKTHRU4%%/g, widget.click4);

var widgetObj = {
    name: 'Interstitial',
    html: widget.parentHTML,
    callback: function() {
        var id = widget.nytID;
        var js = widget.custom_js;
      	var interstitialContainer = document.getElementById("Interstitial_optly");
        var agent_id = window.NYToptly.userInfo && window.NYToptly.userInfo.agent_id;
      
      	if (+widget.optly_disable) {
					var str = '';
          if (widget.iframeSrc.indexOf("?") >= 0) {
            str = "&optimizely_disable=true";
          }
          else {
            str = "?optimizely_disable=true";
          } 
          widget.iframeSrc += str;
        } 
      
      	if (!widget.parentHTML) {
          var wrapper = document.createElement("div");
          wrapper.id = "optimizelyIframeContainer";
          interstitialContainer.appendChild(wrapper);
        } 
      
        // apply inline javascript for parent container
        script = document.createElement('script');
        script.text = widget.custom_js;
        document.getElementsByTagName('head')[0].appendChild(script);

        var container = document.getElementById("optimizelyIframeContainer");
        container.className = "hidden";
      
        var iframe = document.createElement("iframe");
        iframe.setAttribute('id', "optimizelyIframe");
        iframe.setAttribute('src', widget.iframeSrc);
      	
        container.appendChild(iframe);

        // set iframe style in parent window
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = widget.parentCSS;
        document.getElementsByTagName('head')[0].appendChild(style);
      
      	var buildTagxQueryString = function (params) {
          var i;
          var paramNames = Object.keys(params);
          var qs = [];
          for (i = 0; i < paramNames.length; ++i) {
            qs.push(paramNames[i] + '=' + params[paramNames[i]]);
          }
          qs = qs.join('&');
          qs = qs.replace(/ /g, '+');
          qs = qs.replace(/\//g, '%2F');
          return qs;
        };
 
        var processElement = function() { 
          
          console.log('[INFO] Process iframe');
          
            var doc = iframe.contentDocument;
          	container.removeAttribute('class');
            
            // add QS params to  links in iframe
            require(['auth/mtr'], function(Mtr) {
              var tp = Mtr.trackingParams.Interstitial;
              var tagxArgs = $.extend({}, tp.common, tp.links);
              var qs = buildTagxQueryString(tagxArgs);
              var i, links = doc.querySelectorAll('.product__container__wrap a');
              for (i = 0; i < links.length; ++i) {
                var url = links[i].href;
                if (!url || ( 
                  !url.match(/myaccount/) && 
                  !url.match(/subscription/)))  { continue; }

                var separator = "?";
                if(url.indexOf(separator) > -1) { separator = "&"; }
                    links[i].setAttribute('href', url + separator + qs);
                    links[i].setAttribute('target', '_blank');
              }
            });

            // set style in iframe
            style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.innerHTML = widget.iframeCSS;
            
            doc.getElementsByTagName('head')[0].appendChild(style);

            // apply javascript for iframe
            script = document.createElement('script');
            script.text = widget.iframeJS;
            doc.getElementsByTagName('head')[0].appendChild(script);
            
            // so that iframe links will open in parent page:
            base = document.createElement('base');
            base.target = "_parent";
            doc.getElementsByTagName('head')[0].appendChild(base);
            
            if (js !== "") {
                eval(js);
            }
            
            window.optimizely.push({
                type: "event",
                eventName: "interstitial_impression",
                tags: {
                    codename: id,
                    agentId: agent_id
                }
            });
            
            doc.querySelectorAll(widget.selectorsForClickEvent).forEach(function(node) {
                node.onclick = function() {
                    console.log("[OptimizelyNYT] interstitial Click ID:" + id);
                    window.optimizely.push({
                        type: "event",
                        eventName: "interstitial_clicked",
                        tags: {
                            codename: id,
                            campaignId: window.NYToptly.getQueryParameter('campaignId', node.href),
                            agentId: agent_id
                        }
                    });
                };
            });
            
            console.log("[OptimizelyNYT] Interstitial Impression ID:" + id);
           
           	// Removing elements from Iframe
            if (widget.itemsForRemove) {
              var itemsForRemove = doc.querySelectorAll(widget.itemsForRemove);
              for (i = 0; i < itemsForRemove.length; ++i) {
                 itemsForRemove[i].parentNode.removeChild(itemsForRemove[i]);
            	 }
            }
           
           	//Add custom iFrame elements
            if (widget.addAfterItem) {
                var insertAfter = function (el, referenceNode) {
                    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
                };
                var bundle_section = doc.querySelector(widget.addAfterItem);
                var newEl = document.getElementById('iframe__addon');
                if (newEl) {
                    insertAfter(newEl, bundle_section);
                }
            }
        };
      
      	var processDefault = function() {
          
          require(['auth/mtr', 'ecomm/etTracker', 'auth/gateway/creatives'], function(Mtr, EtTracker, Creatives) {
            
            interstitialContainer.innerHTML = Creatives.defaultGrowl.ads.Left9.creative; 
            
            document.querySelector('#Interstitial_optly .meter-asset-wrapper').style = "bottom: 0;";
            
            var links =  interstitialContainer.getElementsByTagName('a');
            
            var tp = Mtr.trackingParams.Interstitial;
            var tagxArgs = $.extend({}, tp.common, tp.links);
            var qs = buildTagxQueryString(tagxArgs);
            
            for (var i = 0; i < links.length; ++i) {
            	var url = links[i].href;
              if (!url || ( 
                  !url.match(/myaccount/) && 
                  !url.match(/subscription/)))  { continue; }

              var separator = "?";
              if(url.indexOf(separator) > -1) { separator = "&"; }
              links[i].setAttribute('href', url + separator + qs);
            }
            
          }); 
          
        };
      
      	var isElementExists = function () {
          var state = false;
          try {
            if (iframe.contentDocument && iframe.contentDocument.querySelectorAll(widget.testElement).length) {
              state = true;
            }
            else {
              state = false;
            }
          } catch (e) {
            state = false;
          }
          finally {
            return state;
          } 
        };
      
      	runWhenReady(
            isElementExists,
            processElement,
            processDefault,
            100, 100
        );

    },
    selector: "#Interstitial_optly"
};

var debugFlag = (window.location.search.indexOf("debug=1") > -1 || document.cookie.indexOf('mtr-debug') > -1);
if ((window.NYToptly.audience('counted') || debugFlag) && window.NYToptly.audience('meter_views').toString() === widget.interstitial_meter || document.cookie.indexOf('preview_interstitial')> -1) {
    window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);
     window.nytAnalytics.MeterTrigger({"name": "interstitial"});
} else {
    console.log('Meter Counted is ',window.NYToptly.audience('counted'));
    console.log('Interstitial Fail Meter');
    console.log('Interstitial Meter set to ', widget.interstitial_meter);
    console.log('Current User Meter ', window.NYToptly.audience('meter_views').toString());
}





      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8507896133";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"iframeSrc","default_value":""},{"name":"selectorsForClickEvent","default_value":"#gw-bg .gw-clickable, #cta-extended"},{"name":"click1","default_value":"1"},{"name":"click2","default_value":"2"},{"name":"click3","default_value":"3"},{"name":"click4","default_value":"4"},{"name":"nytID","default_value":""},{"name":"itemsForRemove","default_value":""},{"name":"addAfterItem","default_value":""},{"name":"testElement","default_value":".product__container__content"},{"name":"interstitial_meter","default_value":"6"},{"name":"optly_disable","default_value":"0"},{"name":"custom_js","default_value":"var initClose = function () {\n    $('body').on('click', '.nytdGrowlNotifyCross', function () {\n        // $('#Interstitial_optly').fadeOut('slow');\n        $('#Interstitial_optly').hide();\n        $('body').removeClass('noScroll');\n    });\n};\n$('body').addClass('noScroll');\n\ninitClose();"},{"name":"iframeJS","default_value":""},{"name":"parentCSS","default_value":""},{"name":"iframeCSS","default_value":""},{"name":"parentHTML","default_value":"<div id=\"optimizelyIframeContainer\"></div>"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-8507896133');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '8644680304',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "8644680304";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"selector","default_value":"#g-graphic.sub-promo-click"},{"name":"css","default_value":""},{"name":"external_js","default_value":""},{"name":"inline_js","default_value":""},{"name":"cta_1","default_value":""},{"name":"cta_2","default_value":""},{"name":"cta_3","default_value":""},{"name":"nytID","default_value":"FILL_IN"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        /************************************************* 
 *  Inserts html & css into the specified selector.
 **************************************************/



if (widget.full_html) {
	widget.full_html = widget.full_html.replace(/%%CTA_1%%/g, widget.cta_1); 
	widget.full_html = widget.full_html.replace(/%%CTA_2%%/g, widget.cta_2);
	widget.full_html = widget.full_html.replace(/%%CTA_3%%/g, widget.cta_3);
}

var widgetObj = {
	name:     "HpSubscriptionAd",
	html:     widget.full_html,
	css:      widget.css,
	multi:    widget.multi,
	codename: widget.nytID,
	script:   widget.external_js,
	selector: widget.selector,
	callback: function() {
		var id = widget.nytID,
			js = widget.inline_js;
		console.log("[OptimizelyNYT] HpSubscriptionAd ID:" + id);
		
		if (js) {
			script = document.createElement('script');
			script.text = js;
			document.getElementsByTagName('head')[0].appendChild(script);   
		}

		window.optimizely.push({
			type: "event",
			eventName: "HP_Subs_Promo_impression",
			tags: {
				codename: id
			}
		});
		document.querySelectorAll("#Bar1 a").forEach(function(a) {
			a.onclick = function() {
				console.log("[OptimizelyNYT] HpSubscriptionAd Click ID:" + id);
				window.optimizely.push({
					type: "event",
					eventName: "HP_Subs_Promo_clicked",
					tags: {
						codename: id,
						campaignId: window.NYToptly.getQueryParameter("campaignId", a.href)
					}
				});
			}.bind(void 0, id);
		});
	}
};


window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8644680304";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"full_html","default_value":""},{"name":"selector","default_value":"#g-graphic.sub-promo-click"},{"name":"css","default_value":""},{"name":"external_js","default_value":""},{"name":"inline_js","default_value":""},{"name":"cta_1","default_value":""},{"name":"cta_2","default_value":""},{"name":"cta_3","default_value":""},{"name":"nytID","default_value":"FILL_IN"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });

PluginManager.registerWidget({
      widgetId: '8665654182',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");t.b("<div id=\"optimizely-extension-");t.b(t.v(t.d("extension.$instance",c,p,0)));t.b("\" class=\"\">");t.b("\n" + i);t.b("  ");t.b(t.v(t.d("extension.text",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); })
        widget.$id = "8665654182";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"text","default_value":"My Butterbar"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        widget._styleTag = document.createElement('style');
widget._styleTag.id = 'widget-css-8665654182';
widget._styleTag.innerHTML = '. {  background-color: #fff575;  border-bottom: 1px solid #e0d769;  color: #555;  padding: 10px;	font-weight: bold;  text-align: center;  font-size: 20px;}';
document.getElementsByTagName('head')[0].appendChild(widget._styleTag);
        var utils = optimizely.get('utils');

utils.waitForElement('body')
  .then(function(elem) {
    // Prepend the extension html to the body
    elem.insertAdjacentHTML('afterbegin', extension.$html);
  });

      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8665654182";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"text","default_value":"My Butterbar"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        widget._styleTag = document.getElementById('widget-css-8665654182');
if (widget._styleTag) widget._styleTag.parentNode.removeChild(widget._styleTag);
        var extensionHtml = document.getElementById('optimizely-extension-' + extension.$instance);
if (extensionHtml) extensionHtml.remove();

      },
    });

PluginManager.registerWidget({
      widgetId: '8734521774',
      showFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        var _template = new Hogan(function(c,p,i) {var t=this;t.b(i=i||"");return t.fl(); })
        widget.$id = "8734521774";
        widget.$instance = event.data.id;
        widget.$render = _template.render.bind(_template)
        widget.$fieldDefaults = [{"name":"selector","default_value":"#SubsPromo_optly"},{"name":"insert","default_value":"after"},{"name":"external_js","default_value":""},{"name":"inline_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"cta_1","default_value":""},{"name":"cta_2","default_value":""},{"name":"cta_3","default_value":""},{"name":"nytID","default_value":"FILL_IN"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        widget.$html = _template.render({ widget: widget, extension: widget })
        var extension = widget;
        
        /************************************************* 
 *  Inserts html & css into the specified selector.
 **************************************************/



if (widget.full_html) {
	widget.full_html = widget.full_html.replace(/%%CTA_1%%/g, widget.cta_1); 
	widget.full_html = widget.full_html.replace(/%%CTA_2%%/g, widget.cta_2);
	widget.full_html = widget.full_html.replace(/%%CTA_3%%/g, widget.cta_3);
}

var widgetObj = {
	name:     "ArticleSubscriptionAd",
	html:     widget.full_html,
	css:      widget.css,
	multi:    widget.multi,
	codename: widget.nytID,
	script:   widget.external_js,
	selector: widget.selector,
	callback: function() {
		var id = widget.nytID,
			js = widget.inline_js;
		console.log("[OptimizelyNYT] ArticleSubscriptionAd ID:" + id);
		
		if (js) {
			script = document.createElement('script');
			script.text = js;
			document.getElementsByTagName('head')[0].appendChild(script);   
		}

		window.optimizely.push({
			type: "event",
			eventName: "Article_Subs_Promo_impression",
			tags: {
				codename: id
			}
		});
		document.querySelectorAll("#Bar1 a").forEach(function(a) {
			a.onclick = function() {
				console.log("[OptimizelyNYT] ArticleSubscriptionAd Click ID:" + id);
				window.optimizely.push({
					type: "event",
					eventName: "Article_Subs_Promo_clicked",
					tags: {
						codename: id,
						campaignId: window.NYToptly.getQueryParameter("campaignId", a.href)
					}
				});
			}.bind(void 0, id);
		});
	}
};


window.NYToptly.viewAction("LOAD_WIDGET_PLACEMENT", widgetObj);


      },
      hideFn: function(event) {
        var $ = window.optimizely.get('jquery');
        var widget = event.data.config;
        widget.$id = "8734521774";
        widget.$instance = event.data.id;
        widget.$fieldDefaults = [{"name":"selector","default_value":"#SubsPromo_optly"},{"name":"insert","default_value":"after"},{"name":"external_js","default_value":""},{"name":"inline_js","default_value":""},{"name":"full_html","default_value":""},{"name":"css","default_value":""},{"name":"cta_1","default_value":""},{"name":"cta_2","default_value":""},{"name":"cta_3","default_value":""},{"name":"nytID","default_value":"FILL_IN"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(widget);
        var extension = widget;
        
        $('#optimizely-widget-' + widget.$instance).remove();
      },
    });
}], "events": [{"category": "other", "name": "Anchor Ad Click", "eventType": "custom", "viewId": null, "apiName": "anchorad_clicked", "id": "4244163679", "eventFilter": null}, {"category": "other", "name": "Bar1 Impression", "eventType": "custom", "viewId": null, "apiName": "bar1_impression", "id": "4257451236", "eventFilter": null}, {"category": "other", "name": "Interstitial Impression", "eventType": "custom", "viewId": null, "apiName": "interstitial_impression", "id": "4262390306", "eventFilter": null}, {"category": "subscribe", "name": "Subscription Thank You", "eventType": "custom", "viewId": null, "apiName": "ThankYou", "id": "6185880525", "eventFilter": null}, {"category": "other", "name": "Interstitial Click", "eventType": "custom", "viewId": null, "apiName": "interstitial_clicked", "id": "6635720631", "eventFilter": null}, {"category": "other", "name": "Anchor Ad Impression", "eventType": "custom", "viewId": null, "apiName": "anchorad_impression", "id": "6665300304", "eventFilter": null}, {"category": "other", "name": "Bar1 Click", "eventType": "custom", "viewId": null, "apiName": "bar1_clicked", "id": "6676210483", "eventFilter": null}, {"category": "other", "name": "Landing Page Impression", "eventType": "custom", "viewId": null, "apiName": "lp_impression", "id": "7130120046", "eventFilter": null}, {"category": "other", "name": "Landing Page Click", "eventType": "custom", "viewId": null, "apiName": "lp_clicked", "id": "7135420210", "eventFilter": null}, {"category": "other", "name": "click", "eventType": "custom", "viewId": null, "apiName": "track_click_mkt", "id": "7738870432", "eventFilter": null}, {"category": "other", "name": "Aus", "eventType": "custom", "viewId": null, "apiName": "Loc_Aus", "id": "7800901200", "eventFilter": null}, {"category": "other", "name": "Gateway Click", "eventType": "custom", "viewId": null, "apiName": "gateway_clicked", "id": "8021672682", "eventFilter": null}, {"category": "other", "name": "Growl Click", "eventType": "custom", "viewId": null, "apiName": "growl_clicked", "id": "8166094704", "eventFilter": null}, {"category": "other", "name": "Growl Impression", "eventType": "custom", "viewId": null, "apiName": "growl_impression", "id": "8177050248", "eventFilter": null}, {"category": "other", "name": "Welcome Ad Click", "eventType": "custom", "viewId": null, "apiName": "welcomead_clicked", "id": "8198940606", "eventFilter": null}, {"category": "other", "name": "Welcome Ad Impression", "eventType": "custom", "viewId": null, "apiName": "welcomead_impression", "id": "8198950760", "eventFilter": null}, {"category": "other", "name": "Click Event for #nyt-button-sub", "eventType": "click", "viewId": "4129021553", "apiName": "click_event_for_nytbuttonsub", "id": "8203284969", "eventFilter": {"filterType": "target_selector", "selector": "#nyt-button-sub"}}, {"category": "other", "name": "Fixed Header Impression", "eventType": "custom", "viewId": null, "apiName": "fixedheader_impression", "id": "8318590987", "eventFilter": null}, {"category": "other", "name": "Gateway Impression", "eventType": "custom", "viewId": null, "apiName": "gateway_impression", "id": "8319291120", "eventFilter": null}, {"category": "other", "name": "Fixed Header Click", "eventType": "custom", "viewId": null, "apiName": "fixedheader_click", "id": "8324440398", "eventFilter": null}, {"category": "other", "name": "Survey Impression", "eventType": "custom", "viewId": null, "apiName": "survey_triggered", "id": "8334446569", "eventFilter": null}, {"category": "other", "name": "Bar1 Hover", "eventType": "custom", "viewId": null, "apiName": "bar1_hover", "id": "8385210067", "eventFilter": null}, {"category": "other", "name": "Facebook Pixel Impression", "eventType": "custom", "viewId": null, "apiName": "fbpx", "id": "8475641186", "eventFilter": null}, {"category": "other", "name": "E-mail Sign Up", "eventType": "custom", "viewId": null, "apiName": "email_sign_up", "id": "8541513225", "eventFilter": null}, {"category": "other", "name": "Subscribe Button on TimesMachine Abstract page", "eventType": "click", "viewId": "8263601258", "apiName": "3795841958_subscribe_button_on_timesmachine_abstract_page", "id": "8566625185", "eventFilter": {"filterType": "target_selector", "selector": ".timesMachineArticle > a:nth-of-type(1)"}}, {"category": "other", "name": "Confirmation Cross Sell Unit Impression", "eventType": "custom", "viewId": null, "apiName": "confirmation_cross_sell_impression", "id": "9020161436", "eventFilter": null}, {"category": "other", "name": "Confirmation Cross Sell Unit Click", "eventType": "custom", "viewId": null, "apiName": "confirmation_cross_sell_clicked", "id": "9034721313", "eventFilter": null}, {"category": "other", "name": "[Support] BK on Home Page", "eventType": "custom", "viewId": null, "apiName": "on_homepage", "id": "9106103672", "eventFilter": null}, {"category": "other", "name": "[Support] BK on Article/other page", "eventType": "custom", "viewId": null, "apiName": "on_article", "id": "9107313414", "eventFilter": null}, {"category": "other", "name": "Adaptive Articles Impression", "eventType": "custom", "viewId": null, "apiName": "adaptiveArticles_impression", "id": "9109873406", "eventFilter": null}, {"category": "other", "name": "[Support] BK Home-1st-Impression", "eventType": "custom", "viewId": null, "apiName": "home_first_impression", "id": "9253060596", "eventFilter": null}, {"category": "other", "name": "[Support] BK Article-1st-Impression", "eventType": "custom", "viewId": null, "apiName": "article_first_impression", "id": "9255870479", "eventFilter": null}, {"category": "other", "name": "[Support] BK Article-N-Impression", "eventType": "custom", "viewId": null, "apiName": "article_n_impression", "id": "9261010411", "eventFilter": null}, {"category": "other", "name": "[Support] BK Home-N-Object", "eventType": "custom", "viewId": null, "apiName": "home_n_has_object", "id": "9261930576", "eventFilter": null}, {"category": "other", "name": "[Support] BK Home-N-Impression", "eventType": "custom", "viewId": null, "apiName": "home_n_impression", "id": "9263600363", "eventFilter": null}, {"category": "other", "name": "[Support] BK Article-1st-Value", "eventType": "custom", "viewId": null, "apiName": "article_first_has_value", "id": "9264460950", "eventFilter": null}, {"category": "other", "name": "[Support] BK Home-1st-Value", "eventType": "custom", "viewId": null, "apiName": "home_first_has_value", "id": "9264580636", "eventFilter": null}, {"category": "other", "name": "[Support] BK Article-N-Value", "eventType": "custom", "viewId": null, "apiName": "article_n_has_value", "id": "9266620345", "eventFilter": null}, {"category": "other", "name": "[Support] BK Home-N-Value", "eventType": "custom", "viewId": null, "apiName": "home_n_has_value", "id": "9267130945", "eventFilter": null}, {"category": "other", "name": "[Support] BK Home-1st-Object", "eventType": "custom", "viewId": null, "apiName": "home_first_has_object", "id": "9267710386", "eventFilter": null}, {"category": "other", "name": "[Support] BK Aticle-N-Object", "eventType": "custom", "viewId": null, "apiName": "article_n_has_object", "id": "9267750472", "eventFilter": null}, {"category": "other", "name": "[Support] BK Article-1st-Object", "eventType": "custom", "viewId": null, "apiName": "article_first_has_object", "id": "9269570188", "eventFilter": null}], "revision": "19730"},g=n(125);if(d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var h;h=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],h.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),n(140).setupPreviewGlobal(),n(140).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptSync("https://optimizely.s3.amazonaws.com/public/3013110282/s/article_prod/preview.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction("initializeOptimizelyPreview",e);var v=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();c=t(s.getProjectToken(),v,s.getPreviewLayerIds()),f.addScriptSync(c),n(140).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction("initializeOptimizelyPreview",e),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(p);r.timeEnd("block")}try{i()}catch(e){try{n(139).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(e){return f.isEmpty(e)?y.resolve():T.request({url:P,method:"POST",data:e})["catch"]((function(e){E.error("Failed to collect rum data :",e)}))}function r(){var e=v.getCurrentScript();if(e)return e.src}function a(){var e={id:R.getRumId(),v:k,account:w.getAccountId(),project:w.getSnippetId()||w.getProjectId(),snippet:w.getSnippetId(),revision:w.getRevision(),clientVersion:"0.77.1",hasSlave:!1,wxhr:!0},t=D.getBucketingId();t&&(e["user"]=t);try{e["numBehaviorEvents"]=g.getEvents().length}catch(e){E.debug("Unable to get behavior events for RUM:",e)}f.extend(e,o(),c()),m.dispatch(S.SET_RUM_DATA,{data:e})}function o(){var e=I.getGlobal("performance");if(e){var t,n=R.getScriptSrc();try{if(n){E.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;E.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=f.find(a,(function(e){return r.test(e.name)}))}if(t)return f.mapValues(A.ResourceTimingAttributes,(function(e,n){return Math.round(1e3*(t[n]||0))/1e3}))}catch(e){return}}}function s(){try{return!v.querySelector("body")}catch(e){return null}}function u(){try{I.getGlobal("requestAnimationFrame")((function(){var e=R.getRumData().timebase;m.dispatch(S.SET_RUM_DATA,{data:{render:h.now()-(e||0)}})}))}catch(e){return}}function c(){return C.getDurationsFor(f.values(A.RUMPerformanceTimingAttributes))}function l(){var e={numKeys:_.allKeys().length,sizeKeys:_.allKeys().toString().length,sizeValues:_.allValues().toString().length},t=I.getGlobal("performance"),n=t?t.timing:{},r=C.getMarks()||{},a=R.getApiData(),o=R.getDOMObservationData(),s=x.get("state").getActiveExperimentIds(),u={apiCalls:a,DOMObservationData:o,paintTimings:d(),activeExperimentIds:s,numPages:O.getNumberOfPages()},c=I.getGlobal("Prototype");c&&!f.isUndefined(c.Version)&&(u.prototypeJS=c.Version);var l=!1;l=!0;var p=N.getFrames();p.length&&(u.xdFramesLoaded=p.length);var g={id:R.getRumId(),v:k,project:w.getSnippetId()||w.getProjectId(),lsMetrics:e,navigationTimings:n,userTimings:r,xd:l,apis:f.keys(a),extras:u};i(g)}function d(){var e=I.getGlobal("performance");if(e){var t=e.getEntriesByType("paint");if(!f.isEmpty(t))return f.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}}var f=n(2),p=n(5),g=n(6),h=n(14),v=n(66),m=n(8),_=n(72).LocalStorage,E=n(11),y=n(77).Promise,I=n(67),T=n(84),S=n(15),A=n(12),b=n(17),w=b.get("stores/global"),D=b.get("stores/visitor_id"),R=b.get("stores/rum"),C=b.get("stores/performance"),N=b.get("stores/xdomain"),O=b.get("stores/view_data"),x=n(86),P="https://rum.optimizely.com/rum",L=3e3,k="1.0",V=.003;t.initialize=function(){var e=p.generate().replace(/-/g,""),t=Math.random()<V;if(t)return m.dispatch(S.SET_RUM_DATA,{id:e,RumHost:P,inRumSample:t,src:r(),data:{id:e,sync:s(),timebase:h.now(),sampleRate:V}}),u(),I.addEventListener("load",l),new y(function(e,t){setTimeout((function(){a();var n=R.getRumData();n=f.pickBy(n,(function(e){return!f.isUndefined(e)})),i(n).then(e,t)}),L)}).catch((function(e){E.warn("RUM / Error sending data:",e)}))}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(De(e),pn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===An?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return y(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function p(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function g(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function h(e){return function(t){return e(t)}}function v(e,t){return Ee(t,(function(t){return e[t]}))}function m(e){return e&&e.Object===Object?e:null}function _(e,t){if(e!==t){var n=null===e,i=e===An,r=e===e,a=null===t,o=t===An,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function E(e){return gi[e]}function y(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function I(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function T(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Ln:t,e>-1&&e%1==0&&e<t}function S(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function A(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function b(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(zt(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.e=e,this.t=[],this.i=!!t}function R(){}function C(e,t){return O(e,t)&&delete e[t]}function N(e,t){if(Xi){var n=e[t];return n===Rn?An:n}return Di.call(e,t)?e[t]:An}function O(e,t){return Xi?e[t]!==An:Di.call(e,t)}function x(e,t,n){e[t]=Xi&&n===An?Rn:n}function P(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function L(){this.a={hash:new R,map:qi?new qi:[],string:new R}}function k(e){var t=this.a;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):qi?t.map["delete"](e):W(t.map,e)}function V(e){var t=this.a;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):qi?t.map.get(e):X(t.map,e)}function F(e){var t=this.a;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):qi?t.map.has(e):$(t.map,e)}function M(e,t){var n=this.a;return Ze(e)?x("string"==typeof e?n.string:n.hash,e,t):qi?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.a=new P;++t<n;)this.push(e[t])}function B(e,t){var n=e.a;if(Ze(t)){var i=n.a,r="string"==typeof t?i.string:i.hash;return r[t]===Rn}return n.has(t)}function G(e){var t=this.a;if(Ze(e)){var n=t.a,i="string"==typeof e?n.string:n.hash;i[e]=Rn}else t.set(e,Rn)}function j(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function z(){this.a={array:[],map:null}}function H(e){var t=this.a,n=t.array;return n?W(n,e):t.map["delete"](e)}function Y(e){var t=this.a,n=t.array;return n?X(n,e):t.map.get(e)}function q(e){var t=this.a,n=t.array;return n?$(n,e):t.map.has(e)}function K(e,t){var n=this.a,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new P(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=Q(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():ji.call(e,n,1),!0}function X(e,t){var n=Q(e,t);return n<0?An:e[n][1]}function $(e,t){return Q(e,t)>-1}function Q(e,t){for(var n=e.length;n--;)if(Nt(e[n][0],t))return n;return-1}function J(e,t,n){var i=Q(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===An||Nt(e,bi[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===An||Nt(e[t],n))&&("number"!=typeof t||n!==An||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&Nt(i,n)&&(n!==An||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:vn}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==An)return s;if(!jt(e))return e;var u=dr(e);if(u){if(s=Xe(e),!t)return De(e,s)}else{var c=We(e),l=c==Bn||c==Gn;if(fr(e))return Ne(e,t);if(c==Hn||c==kn||l&&!a){if(I(e))return a?e:{};if(s=$e(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!pi[c])return a?e:{};s=Qe(e,c,t)}}o||(o=new j);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return jt(e)?Bi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(An,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=Ee(t,h(n))),i?(a=s,u=!1):t.length>=wn&&(a=B,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],p=n?n(f):f;if(u&&p===p){for(var g=d;g--;)if(t[g]===p)continue e;l.push(f)}else a(t,p,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Lt(o)&&(n||dr(o)||xt(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function pe(e,t){return ce(t,(function(t){return Bt(e[t])}))}function ge(e,t,n,i,r){return e===t||(null==e||null==t||!jt(e)&&!zt(t)?e!==e&&t!==t:he(e,t,ge,n,i,r))}function he(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=Vn,c=Vn;o||(u=Ni.call(e),u=u==kn?Hn:u),s||(c=Ni.call(t),c=c==kn?Hn:c);var l=u==Hn&&!I(e),d=c==Hn&&!I(t),f=u==c;a||(a=[]);var p=vt(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var g=o||Qt(e)?He(e,t,n,i,r,a):Ye(e,t,u,n,i,r,a);return a.pop(),g}if(!(r&xn)){var h=l&&Di.call(e,"__wrapped__"),v=d&&Di.call(t,"__wrapped__");if(h||v){var g=n(h?e.value():e,v?t.value():t,i,r,a);return a.pop(),g}}if(!f)return!1;var g=qe(e,t,n,i,r,a);return a.pop(),g}function ve(e){var t=typeof e;return"function"==t?e:null==e?vn:("object"==t?ye:be)(e)}function me(e){return Hi(Object(e))}function _e(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function Ee(e,t){var n=-1,i=Pt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function ye(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&ge(e[r],n[r],An,On|xn)))return!1}return!0}}function Ie(e,t,n,i,r){if(e!==t){var a=dr(t)||Qt(t)?An:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),jt(o))r||(r=new j),Te(e,t,s,n,Ie,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):An;u===An&&(u=o),ee(e,s,u)}}))}}function Te(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):An,d=l===An;d&&(l=u,dr(u)||Qt(u)?dr(s)?l=s:Lt(s)?l=De(s):(d=!1,l=re(u,!a)):Wt(u)||xt(u)?xt(s)?l=tn(s):!jt(s)||i&&Bt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o["delete"](u),ee(e,n,l)}function Se(e,t){return e=Object(e),yt(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Ae(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function be(e){return function(t){return null==t?An:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function Re(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Ce(e,t){var n=e;return yt(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function Ne(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Oe(e){var t=new e.constructor(e.byteLength);return new Vi(t).set(new Vi(e)),t}function xe(e){return yt(A(e),i,new e.constructor)}function Pe(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Le(e){return yt(b(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function Ve(e,t){var n=t?Oe(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Fe(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:An;for(a="function"==typeof a?(r--,a):An,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Be(e,t){return function(n,i){if(null==n)return n;if(!Pt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Ge(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function je(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return jt(i)?i:n}}function ze(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Si&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&Cn,o=je(e);return r}function He(e,t,n,i,r,a){var o=-1,s=r&xn,u=r&On,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,p=e[o],g=t[o];if(f!==An){if(f)continue;d=!1;break}if(u){if(!Re(t,(function(e){return p===e||n(p,e,i,r,a)}))){d=!1;break}}else if(p!==g&&!n(p,g,i,r,a)){d=!1;break}}return d}function Ye(e,t,n,i,r,a,o){switch(n){case Fn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case zn:return e!=+e?t!=+t:e==+t;case Yn:case Kn:return e==t+""}return!1}function qe(e,t,n,i,r,a){var o=r&xn,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var p=!0,g=o;++d<u;){f=s[d];var h,v=e[f],m=t[f];if(!(h===An?v===m||n(v,m,i,r,a):h)){p=!1;break}g||(g="constructor"==f)}if(p&&!g){var _=e.constructor,E=t.constructor;_!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof _&&_ instanceof _&&"function"==typeof E&&E instanceof E)&&(p=!1)}return p}function Ke(e,t){var n=e[t];return Yt(n)?n:An}function We(e){return Ni.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function $e(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function Qe(e,t,n){var i=e.constructor;switch(t){case $n:return Oe(e);case Fn:case Mn:return new i(+e);case Qn:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return Ve(e,n);case jn:return xe(e);case zn:case Kn:return new i(e);case Yn:return Pe(e);case qn:return Le(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:An;return Gt(t)&&(dr(e)||$t(e)||xt(e))?g(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||bi;return e===n}function tt(e){var t=new D(e.e,e.i);return t.t=De(e.t),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,ve(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Pn):[]}function ot(e){return e?e[0]:An}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Yi(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:An}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===An?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.i=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Ce(this.e,this.t)}function gt(e,t,n){return t=n?An:t,ue(e,ve(t))}function ht(e,t){return ce(e,ve(t))}function vt(e,t){return l(e,ve(t),tr)}function mt(e,t){return tr(e,ie(t))}function _t(e,t,n,i){e=Pt(e)?e:pn(e),n=n&&!i?pr(n):0;var r=e.length;return n<0&&(n=Yi(r+n,0)),$t(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function Et(e,t){return Ee(e,ve(t))}function yt(e,t,n){return p(e,ve(t),n,arguments.length<3,tr)}function It(e){return null==e?0:(e=Pt(e)?e:sn(e),e.length)}function Tt(e,t,n){return t=n?An:t,Re(e,ve(t))}function St(e,t){var n=0;return t=ve(t),Ee(Ee(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return _(e.criteria,t.criteria)||e.index-t.index})),be("value"))}function At(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=pr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=An),n}}function bt(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return At(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=Yi(t===An?e.length-1:pr(t),0),function(){for(var n=arguments,i=-1,r=Yi(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function Rt(e){return jt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Ct(e){return re(e,!0,!0)}function Nt(e,t){return e===t||e!==e&&t!==t}function Ot(e,t){return e>t}function xt(e){return Lt(e)&&Di.call(e,"callee")&&(!Gi.call(e,"callee")||Ni.call(e)==kn)}function Pt(e){return null!=e&&Gt(rr(e))&&!Bt(e)}function Lt(e){return zt(e)&&Pt(e)}function kt(e){return e===!0||e===!1||zt(e)&&Ni.call(e)==Fn}function Vt(e){return zt(e)&&Ni.call(e)==Mn}function Ft(e){if(Pt(e)&&(dr(e)||$t(e)||Bt(e.splice)||xt(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Mt(e,t){return ge(e,t)}function Ut(e){return"number"==typeof e&&zi(e)}function Bt(e){var t=jt(e)?Ni.call(e):"";return t==Bn||t==Gn}function Gt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ln}function jt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function zt(e){return!!e&&"object"==typeof e}function Ht(e){return Kt(e)&&e!=+e}function Yt(e){return null!=e&&(Bt(e)?xi.test(wi.call(e)):zt(e)&&(I(e)?xi:li).test(e))}function qt(e){return null===e}function Kt(e){return"number"==typeof e||zt(e)&&Ni.call(e)==zn}function Wt(e){if(!zt(e)||Ni.call(e)!=Hn||I(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Ci}function Xt(e){return jt(e)&&Ni.call(e)==Yn}function $t(e){return"string"==typeof e||!dr(e)&&zt(e)&&Ni.call(e)==Kn}function Qt(e){return zt(e)&&Gt(e.length)&&!!fi[Ni.call(e)]}function Jt(e){return e===An}function Zt(e,t){return e<t}function en(e){return Pt(e)?e.length?De(e):[]:pn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?hr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Pt(e))return me(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||T(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=_e(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||T(c,u))||"constructor"==c&&(n||!Di.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=ve(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=ve(t),Ae(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Ae(e,ve(t))}function fn(e,t,n){var i=null==e?An:e[t];return i===An&&(i=n),Bt(i)?i.call(e):i}function pn(e){return e?v(e,sn(e)):[]}function gn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,E):e}function hn(e){return function(){return e}}function vn(e){return e}function mn(e){return ye(hr({},e))}function _n(e,t,n){var i=sn(t),r=pe(t,i);null!=n||jt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=pe(t,sn(t)));var a=!(jt(n)&&"chain"in n)||n.chain,o=Bt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.i;if(a||t){var n=e(this.e),r=n.t=De(this.t);return r.push({func:i,args:arguments,thisArg:e}),n.i=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function En(){return Si._===this&&(Si._=Oi),this}function yn(){}function In(e){var t=++Ri;return nn(e)+t}function Tn(e){return e&&e.length?c(e,vn,Ot):An}function Sn(e){return e&&e.length?c(e,vn,Zt):An}var An,bn="4.6.1",wn=200,Dn="Expected a function",Rn="__lodash_hash_undefined__",Cn=1,Nn=32,On=1,xn=2,Pn=1/0,Ln=9007199254740991,kn="[object Arguments]",Vn="[object Array]",Fn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Bn="[object Function]",Gn="[object GeneratorFunction]",jn="[object Map]",zn="[object Number]",Hn="[object Object]",Yn="[object RegExp]",qn="[object Set]",Kn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",$n="[object ArrayBuffer]",Qn="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[Qn]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[Vn]=fi[$n]=fi[Fn]=fi[Mn]=fi[Un]=fi[Bn]=fi[jn]=fi[zn]=fi[Hn]=fi[Yn]=fi[qn]=fi[Kn]=fi[Xn]=!1;var pi={};pi[kn]=pi[Vn]=pi[$n]=pi[Fn]=pi[Mn]=pi[Qn]=pi[Jn]=pi[Zn]=pi[ei]=pi[ti]=pi[jn]=pi[zn]=pi[Hn]=pi[Yn]=pi[qn]=pi[Kn]=pi[Wn]=pi[ni]=pi[ii]=pi[ri]=pi[ai]=!0,pi[Un]=pi[Bn]=pi[Xn]=!1;var gi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},hi={"function":!0,object:!0},vi=hi[typeof t]&&t&&!t.nodeType?t:An,mi=hi[typeof e]&&e&&!e.nodeType?e:An,_i=mi&&mi.exports===vi?vi:An,Ei=m(vi&&mi&&"object"==typeof n&&n),yi=m(hi[typeof self]&&self),Ii=m(hi[typeof window]&&window),Ti=m(hi[typeof this]&&this),Si=Ei||Ii!==(Ti&&Ti.window)&&Ii||yi||Ti||Function("return this")(),Ai=Array.prototype,bi=Object.prototype,wi=Function.prototype.toString,Di=bi.hasOwnProperty,Ri=0,Ci=wi.call(Object),Ni=bi.toString,Oi=Si._,xi=RegExp("^"+wi.call(Di).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Pi=_i?Si.Buffer:An,Li=Si.Reflect,ki=Si.Symbol,Vi=Si.Uint8Array,Fi=Li?Li.enumerate:An,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Bi=Object.create,Gi=bi.propertyIsEnumerable,ji=Ai.splice,zi=Si.isFinite,Hi=Object.keys,Yi=Math.max,qi=Ke(Si,"Map"),Ki=Ke(Si,"Set"),Wi=Ke(Si,"WeakMap"),Xi=Ke(Object,"create"),$i=qi?wi.call(qi):"",Qi=Ki?wi.call(Ki):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:An,er=Zi?Zi.valueOf:An,tr=Be(fe),nr=Ge();Fi&&!Gi.call({valueOf:1},"valueOf")&&(_e=function(e){return S(Fi(e))});var ir=Fe,rr=be("length"),ar=Ui||function(){return[]};(qi&&We(new qi)!=jn||Ki&&We(new Ki)!=qn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=Ni.call(e),n=t==Hn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case $i:return jn;case Qi:return qn;case Ji:return Xn}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return ze(e,Cn|Nn,t,n)})),ur=Dt((function(e,t){return oe(e,1,t)})),cr=Dt((function(e,t,n){return oe(e,gr(t)||0,n)})),lr=Dt((function(e,t){return ze(e,Nn,An,t)})),dr=Array.isArray,fr=Pi?function(e){return e instanceof Pi}:hn(!1),pr=Number,gr=Number,hr=Ue((function(e,t){ir(t,sn(t),e)})),vr=Ue((function(e,t){ir(t,un(t),e)})),mr=Ue((function(e,t,n,i){Fe(t,un(t),e,i)})),_r=Dt((function(e){return e.push(An,Z),mr.apply(An,e)})),Er=Ue((function(e,t,n){Ie(e,t,n)})),yr=Dt((function(e,t){return null==e?{}:(t=Ee(le(t,1),String),Se(e,se(un(e),t)))})),Ir=Dt((function(e,t){return null==e?{}:Se(e,le(t,1))})),Tr=ve;D.prototype=ae(w.prototype),D.prototype.constructor=D,R.prototype=Xi?Xi(null):bi,P.prototype.clear=L,P.prototype["delete"]=k,P.prototype.get=V,P.prototype.has=F,P.prototype.set=M,U.prototype.push=G,j.prototype.clear=z,j.prototype["delete"]=H,j.prototype.get=Y,j.prototype.has=q,j.prototype.set=K,w.assign=hr,w.assignIn=vr,w.before=At,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=_r,w.defer=ur,w.delay=cr,w.filter=ht,w.flatten=rt,w.flattenDeep=at,w.iteratee=Tr,w.keys=sn,w.map=Et,w.mapValues=cn,w.matches=mn,w.merge=Er,w.mixin=_n,w.negate=bt,w.omit=yr,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=Ir,w.pickBy=dn,w.slice=ct,w.sortBy=St,w.tap=dt,w.thru=ft,w.toArray=en,w.values=pn,w.extend=vr,_n(w,w),w.clone=Rt,w.cloneDeep=Ct,w.escape=gn,w.every=gt,w.find=vt,w.findIndex=it,w.forEach=mt,w.forOwn=an,w.has=on,w.head=ot,w.identity=vn,w.includes=_t,w.indexOf=st,w.isArguments=xt,w.isArray=dr,w.isBoolean=kt,w.isDate=Vt,w.isEmpty=Ft,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Bt,w.isNaN=Ht,w.isNull=qt,w.isNumber=Kt,w.isObject=jt,w.isRegExp=Xt,w.isString=$t,w.isUndefined=Jt,w.last=ut,w.max=Tn,w.min=Sn,w.noConflict=En,w.noop=yn,w.reduce=yt,w.result=fn,w.size=It,w.some=Tt,w.uniqueId=In,w.each=mt,w.first=ot,_n(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=bn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ai)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.i?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=pt,(Ii||yi||{})._=w,vi&&mi&&(_i&&((mi.exports=w)._=w),vi._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){m.dispatch(E.SET_VISITOR_EVENTS,e)}function r(e){m.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){m.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){m.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){m.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){m.dispatch(E.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return C.getEvents()}function l(){return N.getBaseMap()}function d(){return N.getEventQueue()}function f(){return N.getLastEvent()}function p(){return N.getCleared()}function g(){return N.getInitialized()}function h(){return i(c().concat(d())),a([]),c().length>x&&(i(c().slice(-x)),!0)}var v=n(2),m=n(8),_=n(11),E=n(15),y=n(63),I=n(64),T=n(14),S=t,A=n(53).EventBase,b=n(53).Event,w=n(54),D=n(83),R=n(17),C=R.get("stores/visitor_events"),N=R.get("stores/visitor_events_manager"),O={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},x=1e3;t.initialize=function(e,t){if(!g()){S.u(e,t);var n=c();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){_.debug("Behavior store: adding event",e);var t=S.l(e);o(t),a(d().concat(t)),S.d(d())},t.getEvents=function(){return d().length>0&&(h()&&D.sessionize(c()),S.f(c()),S.d(d())),c()},S.u=function(e,t){S.g(e,t)&&(S.f(c()),S.d(d())),D.sessionize(c())},S.g=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return O.EVENTBASE in r?(i(S.h(e)),a(S.h(t))):(n=!0,i(S.I(e)),a(S.I(t))),d().length>0&&(h(),n=!0),i(S._updateBaseMapAndMaybeDedupe(c())),S._migrateEventBasesAndUpdateStore()&&(n=!0),n},S.I=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=S.T(i);t[n]=new b(r,i[w.FIELDS.TIME])}return t},S._migrateEventBasesAndUpdateStore=function(){var e=!1,t=S.S();return D.applyMigrations(t)&&(e=!0,r({}),i(S._updateBaseMapAndMaybeDedupe(c())),a(S._updateBaseMapAndMaybeDedupe(d()))),e},S.A=function(){return T.now()},S.l=function(e){var t,n=e.name,i=e.type||"default",r=e.category||y.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new A(n,i,r,a,t);o=S.b(o);var s=S.A(),u=new b(o,s,-1);return D.updateSessionId(f(),u),u},S._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=S.b(e[t].eventBase);return e},S.f=function(e){var t=S.w(e);I.persistBehaviorEvents(t)},S.d=function(e){var t=S.w(e);I.persistBehaviorEventQueue(t)},S.D=function(){p()||(i([]),a([]),S.f(c()),S.d(d()),r({}),o(null),s(!0))},S.b=function(e){var t=e.hash(),n=l(),i=n[t];if(v.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},S.S=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},S.w=function(e){for(var t=function(e){var t={};t[w.FIELDS.NAME]=e.getValueOrDefault([w.FIELDS.NAME]),t[w.FIELDS.TYPE]=e.getValueOrDefault([w.FIELDS.TYPE]);var n=e.getValueOrDefault([w.FIELDS.CATEGORY]);v.isUndefined(n)||(t[w.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([w.FIELDS.REVENUE]);v.isUndefined(i)||(t[w.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([w.FIELDS.OPTIONS]);return v.isUndefined(r)||(t[w.FIELDS.OPTIONS]=r),t},n=O,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[w.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[w.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},S.T=function(e,t){var n=new A(e[w.FIELDS.NAME],e[w.FIELDS.TYPE],e[w.FIELDS.CATEGORY],e[w.FIELDS.OPTIONS],e[w.FIELDS.REVENUE]);return v.isUndefined(t)||n.setHash(t),n},S.h=function(e){for(var t=O,n=[],i=0;i<e.length;i++)for(var r=e[i],a=S.T(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){
var c=s[u],l=new b(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return S.h(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(D.sessionSortPredicate),D.sessionize(t),t}}),(function(e,t,n){var i=n(9);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.R={},this.C={},this.N=0,this.O=[],this.x=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(10),o=n(2);i.prototype.registerStores=function(e){o.forOwn(e,function(e,t){this.R[t]=new a(t,this,e)}.bind(this))},i.prototype.getStore=function(e){return this.R[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,o.each(this.O,function(n){n.call(this,e,t)}.bind(this)),o.forOwn(this.R,(function(n){n.P(e,t)})),o.each(this.x,function(n){n.call(this,e,t)}.bind(this)),o.forOwn(this.R,function(e,t){e.hasChanges()&&this.C[t]&&(e.resetChange(),o.each(this.C[t],(function(t){t(e)})))}.bind(this))},i.prototype.reset=function(){this.C={},o.forOwn(this.R,(function(e,t){e.L()}))},i.prototype.getState=function(){var e={};return o.forOwn(this.R,(function(t,n){e[n]=t.k()})),e},i.prototype.onPreAction=function(e){var t=this.O;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.x;return t.push(e),r(t,e)},i.prototype.V=function(e,t){this.C[e]||(this.C[e]=[]),this.C[e].push(t);var n=this.C[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.F=e,this.M=t,this.U=0,this.B=!1,this.G={},r.extend(this,n),this.j={},this.initialize&&this.initialize()}var r=n(2);i.prototype.P=function(e,t){var n=this.G[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.k=function(){return r.cloneDeep(this.j)},i.prototype.on=function(e,t){this.G[e]=t.bind(this)},i.prototype.observe=function(e){return this.M.V(this.F,e)},i.prototype.emitChange=function(){this.B=!0,this.U++},i.prototype.hasChanges=function(){return this.B},i.prototype.resetChange=function(){this.B=!1},i.prototype.getStateId=function(){return this.U},i.prototype.L=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(12),o=n(14),s=n(8),u=n(15),c=n(16);i.prototype.z=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.H(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.z()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};s.dispatch(u.LOG,n)},i.prototype.flush=function(){var e=n(17),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,function(e){this.Y(e.logLevel,e.logMessage,!0)}.bind(this))},i.prototype.Y=function(e,t,n){var i,o=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:i=console.error;break;case a.LogLevel.WARN:i=console.warn;break;case a.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.z()&&!this.shouldLog(o)||(r.isArray(t)&&r.isString(t[0])&&(t=this.q(t)),this.storeLog(e,t)),i&&this.shouldLog(o)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.Y(a.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.Y(a.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.q([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(a.LogLevel.INFO,e)},i.prototype.warn=function(){this.Y(a.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.Y(a.LogLevel.ERROR,[this.K(),e]),this.Y(a.LogLevel.INFO,[e.stack])):this.Y(a.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.Y("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.Y("GROUPEND",[].slice.call(arguments))},i.prototype.q=function(e){var t=this.K().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.K=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.H=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(a.LogLevel[e]))?a.LogLevel[e]:null},e.exports=new i}),(function(e,t,n){var i=n(13);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=i({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes=i({immediate:null,manual:null,callback:null,polling:null,URLChanged:null,DOMChanged:null}),t.StorageKeys={PENDING_EVENTS:"pending_events"},t.PluginTypes=i({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=i({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null}),t.RUMPerformanceTimingAttributes=i({blockTime:null}),t.AttributionTypes=i({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=i({XMLHttpRequest:null}),t.PerformanceData=i({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=i({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"}}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(13);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(function(){return JSON.stringify.apply(null,this)}.bind(arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(2),r=n(8),a=n(18),o=a.create(),s={action_data:n(19),async_request:n(21),audience_data:n(22),change_data:n(23),cleanup:n(24),cookie_options:n(25),event_data:n(26),event_emitter:n(27),dimension_data:n(28),directive:n(29),global:n(30),global_state:n(31),integration_settings:n(32),layer:n(33),layer_data:n(34),log:n(36),observed_redirect:n(37),pending_events:n(38),performance:n(39),plugins:n(40),provider_status:n(41),pending_redirect:n(42),rum:n(43),sandbox:n(44),session:n(45),tracker_optimizely:n(46),ua_data:n(47),view:n(48),view_data:n(49),visitor:n(50),visitor_attribute_entity:n(51),visitor_events:n(52),visitor_events_manager:n(58),visitor_id:n(59),visitor_bucketing:n(60),xdomain:n(61)};s["group_data"]=n(62),r.registerStores(s),i.forOwn(s,(function(e,t){o.register("stores/"+t,r.getStore(t))})),e.exports=o}),(function(e,t,n){function i(){this.W={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.W[e])throw new Error("Module already registered for: "+e);this.W[e]=t},i.prototype.get=function(e){return this.W[e]},i.prototype.getModuleKeys=function(){var e=this.W;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,this.get.bind(this));return i.apply(null,a)},i.prototype.reset=function(){this.W={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20),o=n(11);e.exports={initialize:function(){this.j={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.X),this.on(r.ACTION_EXECUTED,this.Q),this.on(r.SET_CHANGE_APPLIER,this.J),this.on(r.REMOVE_ACTION_STATE,this.Z)},X:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.j.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.j.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.j.actions[u]=n}))}))}))})),this.emitChange())},Q:function(e){var t=e.actionId;i.isUndefined(t)||this.j.actionState[t]||(this.j.actionState[t]={})},J:function(e){var t=e.actionId,n=e.changeId;return this.j.actionState[t]?void(this.j.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},Z:function(e){delete this.j.actionState[e.actionId]},get:function(e){return a.safeReference(this.j.actions[e])},getActionState:function(e){return a.safeReference(this.j.actionState[e])},getByChangeId:function(e){return i.find(this.j.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.j.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.j.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.j.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.j.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.j.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.j.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.j={},this.on(i.REGISTER_ASYNC_DEFERRED,this.ee),this.on(i.RESOLVE_DEFERRED,this.te),this.on(i.REJECT_DEFERRED,this.ne)},getRequest:function(e){return this.j[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},ee:function(e){this.j[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},te:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},ne:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.j={},this.on(r.DATA_LOADED,this.X)},X:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,function(e){a.deepFreeze(e),this.j[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.j))},getAudiencesMap:function(){return a.safeReference(this.j)},get:function(e){return a.safeReference(this.j[e])},getAudienceName:function(e){var t=i.find(i.values(this.j),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.j={},this.on(r.ADD_CHANGE,this.re),this.on(r.DATA_LOADED,this.X)},getChange:function(e){return this.j[e]},X:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,this.re.bind(this))},re:function(e){a.deepFreeze(e),this.j[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(12);e.exports={initialize:function(){this.j={},i.each(a.Lifecycle,function(e){this.j[e]=[]}.bind(this)),this.on(r.ADD_CLEANUP_FN,this.ae),this.on(r.CLEAR_CLEANUP_FN,this.oe)},getCleanupFns:function(e){return i.cloneDeep(this.j[e])},ae:function(e){this.j[e.lifecycle].push(e.cleanupFn),this.emitChange()},oe:function(e){var t=this.j[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.j[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(15),r=31536e4;e.exports={initialize:function(){this.j={currentDomain:null,defaultAgeSeconds:r},this.on(i.SET_COOKIE_DOMAIN,this.se),this.on(i.SET_COOKIE_AGE,this.ue)},getCurrentDomain:function(){return this.j.currentDomain},getDefaultAgeInSeconds:function(){return this.j.defaultAgeSeconds},se:function(e){this.j.currentDomain=e,this.emitChange()},ue:function(e){this.j.defaultAgeSeconds=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.j={},this.on(r.DATA_LOADED,this.X)},getAll:function(){return a.safeReference(i.values(this.j))},getEventsMap:function(){return a.safeReference(this.j)},get:function(e){return a.safeReference(this.j[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.j),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.j,{pageId:e}))},X:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.j[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(15),o="|";e.exports={initialize:function(){this.j={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.ce),this.on(a.REMOVE_EMITTER_HANDLER,this.le)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,function(e){var t=i(e),n=this.j.handlers[t];n&&(a=a.concat(n))}.bind(this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},ce:function(e){var t=i(e.filter);this.j.handlers[t]||(this.j.handlers[t]=[]),this.j.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},le:function(e){var t=!1,n=e.token;r.forOwn(this.j.handlers,function(e,i){var a=r.filter(e,(function(e){return e.token!==n}));a.length!==e.length&&(t=!0,this.j.handlers[i]=a)}.bind(this)),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.j={},this.on(r.DATA_LOADED,this.X)},X:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,function(e){a.deepFreeze(e),this.j[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.j))},getById:function(e){return a.safeReference(this.j[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.j),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.de)},getAll:function(){return i.cloneDeep(this.j)},conflictInObservingChanges:function(){return!1},isDisabled:function(){return this.j.disabled},isEditor:function(){return this.j.isEditor},clientHasAlreadyInitialized:function(){return this.j.alreadyInitialized},getForceAudienceIds:function(){return this.j.forceAudienceIds},getForceVariationIds:function(){return this.j.forceVariationIds},getPreviewLayerIds:function(){return this.j.previewLayerIds},getProjectToken:function(){return this.j.projectToken},getForceTracking:function(){return this.j.forceTracking},shouldActivate:function(){return!this.j.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.j.isPreview},shouldBootstrapDataForEditor:function(){return this.j.isEditor},shouldInitialize:function(){return!(this.shouldOptOut()||this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.j.isPreview||this.j.isLegacyPreview||!this.getProjectToken()||this.j.isEditor)},shouldBailForDesktopApp:function(){return!this.j.isEditor&&this.j.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.j.isSlave&&!this.j.isEditor&&this.j.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return!1},shouldOptOut:function(){return this.j.shouldOptOut},shouldSendTrackingData:function(){return!this.j.trackingDisabled&&(!!this.j.forceTracking||!this.j.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.j.isSlave},isRunningInDesktopApp:function(){return this.j.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.j.isRunningInV2Editor},de:function(e){i.extend(this.j,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={holdback:0,isGlobalHoldback:null,listTargetingCookies:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1},this.on(r.DATA_LOADED,this.fe),this.on(r.ACTIVATE,this.pe),this.on(r.RECORD_GLOBAL_DECISION,this.ge),this.on(r.SET_DOMCONTENTLOADED,this.he)},getRevision:function(){return this.j.revision},getGlobalHoldbackThreshold:function(){return this.j.holdback},getProjectId:function(){return this.j.projectId},getSnippetId:function(){return this.j.snippetId},getAccountId:function(){return this.j.accountId},getNamespace:function(){return this.j.namespace},getActivationId:function(){return this.j.activationId},getActivationTimestamp:function(){return this.j.activationTimestamp},getAnonymizeIP:function(){return this.j.anonymizeIP},isGlobalHoldback:function(){return!!this.j.isGlobalHoldback},getListTargetingCookieNames:function(){return this.j.listTargetingCookies.slice()},getDCPServiceId:function(){return this.j.dcpServiceId},getDCPKeyfieldLocators:function(){return this.j.dcpKeyfieldLocators},getRecommenderServices:function(){return this.j.recommenderServices},getProjectJS:function(){return this.j.projectJS},getPlugins:function(){return this.j.plugins},domContentLoadedHasFired:function(){return this.j.domContentLoaded},pe:function(e){this.j.activationId=e.activationId,this.j.activationTimestamp=e.activationTimestamp,this.j.isGlobalHoldback=null},ge:function(e){var t=e.isGlobalHoldback;if(null!==this.j.isGlobalHoldback&&this.j.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.j.isGlobalHoldback=t,this.emitChange()},fe:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingCookies","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS"]);if(0!==i.keys(t).length){var n={listTargetingCookies:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.j,n,t),this.emitChange()}},he:function(){this.j.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.ve)},getEffectiveReferrer:function(){return this.j.effectiveReferrer},getEffectiveVariationId:function(){return this.j.effectiveVariationId},ve:function(e){i.isUndefined(e.effectiveReferrer)||(this.j.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.j.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={},this.on(r.DATA_LOADED,this.X),this.on(r.SET_INTEGRATION_SETTINGS,this.me)},X:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,function(e){this.j[e.id]=e}.bind(this)),this.emitChange())},me:function(e){var t=this.j[e.id];t?i.extend(t,e):this.j[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.j))},get:function(e){return i.cloneDeep(this.j[e])},getReference:function(e){return this.j[e]}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(11),o="*";e.exports={initialize:function(){this.j={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this._e),this.on(r.RECORD_LAYER_DECISION,this.Ee),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.ye),this.on(r.ACTION_EXECUTED,this.Ie)},getLayerState:function(e,t){if(this.j[e]){var n=this.j[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.j)i.forEach(this.j[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},_e:function(e){e.merge||(this.j={}),i.each(e.layerStates,function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.j[t];if(i.isUndefined(r))this.j[t]={},this.j[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.j[t][n]=e)}}.bind(this)),this.emitChange()},Ie:function(e){var t=e.layerId,n=e.pageId;if(!this.j[t])return void a.warn("No Campaign registered for action executed",e);var i;this.j[t][n]?i=this.j[t][n]:this.j[t][o]&&(i=this.j[t][o]),i&&(i.actionTriggered=!0,i.actionSessionId=e.sessionId,i.actionActivationId=e.activationId,i.actionTimestamp=e.timestamp),this.emitChange()},Ee:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decisionTicketTimestamp:e.timestamp,decision:e.decision,decisionSessionId:e.sessionId,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null,actionTriggered:!1,actionSessionId:null,actionActivationId:null,actionTimestamp:null},n=this.j[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.j[e.layerId]=n,this.emitChange()},ye:function(e){var t=e.layerId,n=e.pageId||o;return this.j[t]?this.j[t][n]?(this.j[t][n].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20),o=n(35);e.exports={initialize:function(){this.j={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.X)},X:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.j.variations[e.id]=e})),t.j.experiments[n.id]=n})),a.deepFreeze(e),t.j.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.j.layers))},getCampaignsMap:function(){return a.safeReference(this.j.layers)},getExperimentsMap:function(){return a.safeReference(this.j.experiments)},getVariationsMap:function(){return a.safeReference(this.j.variations)},getCount:function(){return i.keys(this.j.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(i.values(this.j.layers),(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.j.layers[e])},getLayerByExperimentId:function(e){var t=i.values(this.j.layers),n=i.find(t,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(n)},getExperimentByVariationId:function(e){var t,n=i.values(this.j.layers);return i.some(n,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.j={logs:[]},this.on(i.LOG,this.Te)},getLogs:function(){return this.j.logs},Te:function(e){this.j.logs.push(e),this.emitChange()},k:function(){return this.j.logs.slice()}}}),(function(e,t,n){var i=n(15),r=n(20);e.exports={initialize:function(){this.j={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Se),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Ae)},get:function(){return r.safeReference(this.j.data)},hasTracked:function(){return this.j.hasTracked},Se:function(e){r.deepFreeze(e),this.j.data=e,this.j.hasTracked=!1,this.emitChange()},Ae:function(){this.j.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(16),o=1e3;e.exports={initialize:function(){this.j={},this.on(r.SET_PENDING_EVENT,this.be),this.on(r.REMOVE_PENDING_EVENT,this.we),this.on(r.LOAD_PENDING_EVENTS,this.De)},getEvents:function(){return this.j},getEventsString:function(){return a.stringify(this.j)},be:function(e){i.keys(this.j).length>=o&&this.Re();var t=e.id,n=e.retryCount;this.j[t]&&this.j[t].retryCount===n||(this.j[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},we:function(e){delete this.j[e.id],this.emitChange()},De:function(e){this.j=e.events,this.Re(),this.emitChange()},Re:function(){for(var e=i.sortBy(this.j,"timeStamp"),t=0;t<=e.length-o;t++)delete this.j[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(12);e.exports={initialize:function(){this.j={},this.j[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Ce)},Ce:function(e){i.isUndefined(this.j[a.PerformanceData.performance_marks][e.name])&&(this.j[a.PerformanceData.performance_marks][e.name]=[]),this.j[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.j[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,function(e,t){var n=this.j[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}.bind(this),{})}}}),(function(e,t,n){var i=n(15),r=n(12),a=n(2),o=n(11);e.exports={initialize:function(){this.j=a.mapValues(r.PluginTypes,(function(){return{}})),this.on(i.REGISTER_PLUGIN,this.Ne)},Ne:function(e){var t=e.type,n=e.name,i=e.plugin;if(!(t&&n&&i))throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.j[t])throw new Error("Invalid plugin type specified: "+t);this.j[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.j[e])return this.j[e];throw new Error("Invalid plugin type: "+e)}return this.j},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.j={},this.on(i.SET_VISITOR_ATTRIBUTE_PENDING,this.Oe)},getPendingAttributeValue:function(e){if(this.j[e])return this.j[e].pending},Oe:function(e){this.j[e.key]={pending:e.pending},this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Se)},isExpectingRedirect:function(){return i.isString(this.j.layerId)},getLayerId:function(){return this.j.layerId},Se:function(e){this.isExpectingRedirect()||(this.j.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={inRumSample:!1,id:null,src:null,RumHost:null,data:{},apis:{},DOMObservation:{}},this.on(r.SET_RUM_DATA,this.xe),this.on(r.RECORD_API_USAGE,this.Pe),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.Le)},xe:function(e){i.merge(this.j,e),this.emitChange()},Pe:function(e){this.j.apis[e.methodName]||(this.j.apis[e.methodName]=0),this.j.apis[e.methodName]++,this.emitChange()},Le:function(e){this.j.DOMObservation[e.counterName]||(this.j.DOMObservation[e.counterName]=0),this.j.DOMObservation[e.counterName]++,this.emitChange()},getSampleRum:function(){return this.j.inRumSample},getRumId:function(){return this.j.id},getRumHost:function(){return this.j.RumHost},getApiData:function(){return this.j.apis},getDOMObservationData:function(){return this.j.DOMObservation},getRumData:function(){return i.cloneDeep(this.j.data)},getScriptSrc:function(){return this.j.src}}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.j={initialized:!1,natives:{}},
this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.ke)},ke:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.j.natives=e.sandboxedFunctions,this.j.initialized=!0,this.emitChange()},getAll:function(){return this.j.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.j.natives[e]||null},isInitialized:function(){return this.j.initialized}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(14),o=n(5),s=18e5;e.exports={initialize:function(){this.j={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.Ve),this.on(r.LOAD_SESSION_STATE,this.Fe)},getState:function(){return i.cloneDeep(this.j)},getSessionId:function(){return this.j.sessionId},Fe:function(e){this.j.sessionId=e.sessionId,this.j.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},Ve:function(){var e=a.now(),t=this.j.lastSessionTimestamp;(!this.j.sessionId||e-t>s)&&(this.j.sessionId=o.generate()),this.j.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(15),r=n(2);e.exports={initialize:function(){this.Me(),this.on(i.FINALIZE_BATCH_SNAPSHOT,this.Ue),this.on(i.REGISTER_PREVIOUS_BATCH,this.Be),this.on(i.REGISTER_TRACKER_VISITOR,this.Ge),this.on(i.REGISTER_TRACKER_EVENT,this.je),this.on(i.REGISTER_TRACKER_DECISION,this.ze),this.on(i.RESET_TRACKER_EVENTS,this.He),this.on(i.RESET_TRACKER_STORE,this.Me),this.on(i.RESET_TRACKER_PREVIOUS_BATCHES,this.Ye),this.on(i.SET_TRACKER_POLLING,this.qe),this.on(i.SET_TRACKER_BATCHING,this.Ke),this.on(i.SET_TRACKER_SEND_EVENTS,this.We),this.on(i.SET_TRACKER_PERSISTABLE_STATE,this.Xe),this.on(i.SET_TRACKER_DIRTY,this.$e),this.on(i.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Qe)},getPersistableState:function(){return this.j.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.j.data,decisions:this.j.decisions,decisionEvents:this.j.decisionEvents,previousBatches:this.j.previousBatches}:{}:null},Xe:function(e){r.isEmpty(this.j.data)||r.isEmpty(e.data)||(this.Ue(),this.j.previousBatches.push(this.getEventBatch())),this.j.data=e.data||{},this.j.decisions=e.decisions||[],this.j.decisionEvents=e.decisionEvents||[],r.isEmpty(this.j.previousBatches)||r.isEmpty(e.previousBatches)?this.j.previousBatches=e.previousBatches||[]:this.j.previousBatches=this.j.previousBatches.concat(e.previousBatches),this.emitChange()},$e:function(e){this.j.isDirty=e,this.emitChange()},je:function(e){var t=this.Je();!r.isEmpty(t.snapshots)&&r.isEmpty(this.j.decisionEvents)||this.Ze(),this.et().events.push(e.event),this.$e(!0)},ze:function(e){this.j.decisions.push(e.decision),this.j.decisionEvents.push(e.decisionEvent),this.$e(!0)},Ge:function(e){r.isEmpty(this.j.data)?this.j.data=e.data:this.Ue(),this.j.data.visitors.push(e.visitor),this.j.decisions=e.decisions,this.j.decisionEvents=[],this.$e(!0)},Be:function(e){this.j.previousBatches.push(e),this.$e(!0)},Me:function(){this.j={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},He:function(){var e=this.Je();this.j.data.visitors=[e],e.snapshots=[],this.$e(!0)},Ye:function(){this.j.previousBatches=[],this.$e(!0)},qe:function(e){this.j.polling=e,this.emitChange()},Ke:function(e){this.j.shouldBatch=e,this.emitChange()},We:function(e){this.j.canSend=e,this.emitChange()},getEventBatch:function(){return r.cloneDeep(this.j.data)},getPreviousBatches:function(){return r.cloneDeep(this.j.previousBatches)},tt:function(){return this.j.decisionEvents.slice()},nt:function(){this.j.decisionEvents=[]},it:function(){return this.j.decisions.slice()},isPolling:function(){return this.j.polling},shouldBatch:function(){return this.j.shouldBatch},et:function(){return r.last(this.Je().snapshots)},Je:function(){return r.last(this.j.data.visitors)},Ze:function(){var e=this.tt(),t=this.Je();t.snapshots.push({decisions:this.it(),events:e}),this.nt(),this.$e(!0)},Ue:function(){this.j.decisionEvents.length>0&&this.Ze()},hasEventsToSend:function(){if(!r.isEmpty(this.j.decisionEvents))return!0;if(!r.isEmpty(this.j.data)){var e=r.some(this.j.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!r.isEmpty(this.j.previousBatches)},canSend:function(){return this.j.canSend},Qe:function(e){var t=this.Je();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={},this.on(r.SET_UA_DATA,this.X)},X:function(e){i.isEmpty(this.j)&&(this.j=e.data)},get:function(){return i.cloneDeep(this.j)}}}),(function(e,t,n){var i=n(2),r=n(11),a=n(15),o={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.j=i.cloneDeep(o),this.on(a.REGISTER_VIEWS,this.rt),this.on(a.SET_VIEW_ACTIVE_STATE,this.at),this.on(a.UPDATE_PARSED_VIEW_METADATA,this.ot),this.on(a.UPDATE_USER_SUPPLIED_METADATA,this.st),this.on(a.TRACK_VIEW_ACTIVATED_EVENT,this.ut),this.on(a.SET_GLOBAL_TAGS,this.ct),this.on(a.ACTIVATE,this.dt),this.on(a.SET_VIEW_BATCHING,this.Ke)},getAll:function(){var e={};for(var t in this.j.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.j.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.j.viewStates[e]),n=this.j.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.j.viewStates[e]?this.j.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.j.viewStates,function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}.bind(this),[])},isViewActive:function(e){var t=this.j.viewStates[e];return t||r.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.j.globalTags)},dt:function(){this.j.viewStates={},this.emitChange()},rt:function(e){i.each(e.views,function(e){var t=e.id;this.j.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}.bind(this)),this.emitChange()},at:function(e){var t=e.view.id;if(!this.j.viewStates[t])throw new Error("No view exists with id "+t);this.j.viewStates[t].isActive=e.isActive,e.isActive?this.j.viewStates[t].activatedTimestamp=e.timestamp:(this.j.viewStates[t].parsedMetadata={},this.j.viewStates[t].userSuppliedMetadata={}),this.emitChange()},ot:function(e){var t=e.pageId;if(!this.j.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.j.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},st:function(e){var t=e.pageId;if(!this.j.viewStates[t])throw new Error("No view exists with id "+t);i.merge(this.j.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},ut:function(e){var t=e.pageId;this.j.viewStates[t]&&(this.j.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},ct:function(e){i.extend(this.j.globalTags,e),this.emitChange()},Ke:function(e){this.j.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.j={},this.on(r.DATA_LOADED,this.X)},getAll:function(){return a.safeReference(i.values(this.j))},getPagesMap:function(){return a.safeReference(this.j)},get:function(e){return a.safeReference(this.j[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.j),{apiName:e}))},getNumberOfPages:function(){return i.keys(this.j).length},getAllViewsForActivationType:function(e){return i.filter(i.values(this.j),{activationType:e})},X:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,function(e){a.deepFreeze(e),this.j[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={profile:{},metadata:{}},this.on(r.SET_VISITOR_ATTRIBUTES,this.ft),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.pt)},getVisitorProfile:function(){return this.j.profile},getVisitorProfileMetadata:function(){return this.j.metadata},getAttribute:function(e,t){var n=this.j.profile;return t&&(n=n[t]||{}),i.cloneDeep(n[e])},getAttributeMetadata:function(e){return i.cloneDeep(this.j.metadata[e])},pt:function(e){this.j.profile=e.profile,this.j.metadata=e.metadata,this.emitChange()},ft:function(e){var t,n;i.each(e.attributes,function(e){t=this.j.profile,n=this.j.metadata,e.type&&(t=this.j.profile[e.type]=this.j.profile[e.type]||{}),t[e.key]=e.value,e.metadata&&i.forOwn(e.metadata,function(t,i){e.type&&(n=this.j.metadata[e.type]=this.j.metadata[e.type]||{}),n[e.key]=n[e.key]||{},n[e.key][i]=t}.bind(this))}.bind(this)),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={},this.on(r.DATA_LOADED,this.ht)},getCustomBehavioralAttributes:function(){return i.filter(this.j,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.j);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.j[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},ht:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,function(e){this.j[e.id]=e}.bind(this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(15));n(53).Event;e.exports={initialize:function(){this.j={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.X),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.vt),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.mt)},getEvents:function(){return this.j.events},getForeignEvents:function(){return this.j.foreignEvents},getForeignEventQueues:function(){return this.j.foreignEventQueues},X:function(e){this.j.events=e,this.emitChange()},vt:function(e){this.j.foreignEvents[e.key]=e.value},mt:function(e){this.j.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n)}var a=n(2),o=n(54),s=n(55),u=n(57).getFieldValue;t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=s.hashToHex(s.toByteString(this.digest()),s.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=u(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID];var i=u(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS}}),(function(e,t,n){var i=n(56).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){if(i.isArray(t)){for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n}}}),(function(e,t,n){var i=n(15);e.exports={initialize:function(){this.j={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this._t)},getBaseMap:function(){return this.j.baseMap},getEventQueue:function(){return this.j.eventQueue},getLastEvent:function(){return this.j.lastEvent},getCleared:function(){return this.j.cleared},getInitialized:function(){return this.j.initialized},_t:function(e){this.j[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={randomId:null,UUID:null},this.on(r.SET_VISITOR_ID,this.X)},getBucketingId:function(){return this.getUUID()||this.getRandomId()},getRandomId:function(){return this.j.randomId},getUUID:function(){return this.j.UUID},X:function(e){i.extend(this.j,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(16);e.exports={initialize:function(){this.j={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.Et),this.on(r.MERGE_VARIATION_ID_MAP,this.yt),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.It),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Tt)},getVariationIdMap:function(){return i.cloneDeep(this.j.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.j.variationIdMap)},Et:function(e){var t=this.j.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.j.variationIdMap[e.layerId]=n,this.emitChange())},yt:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.merge(n,t),this.j.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.j.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.j.preferredLayerMap)},getPreferredLayerId:function(e){return this.j.preferredLayerMap[e]},It:function(e){this.j.preferredLayerMap[e.groupId]!==e.layerId&&(this.j.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Tt:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.merge(n,t),this.j.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(15);e.exports={initialize:function(){this.j={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.St),this.on(r.XDOMAIN_ADD_FRAME,this.At),this.on(r.XDOMAIN_SET_MESSAGE,this.bt),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.wt),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.Dt),this.on(r.XDOMAIN_SET_DISABLED,this.Rt)},getMessages:function(){return i.cloneDeep(this.j.messages)},getNextMessageId:function(){return this.j.messages.length},getMessageById:function(e){return this.j.messages[e]},getSubscribers:function(){return this.j.subscribers},getFrames:function(){return this.j.frames},getNextFrameId:function(){return this.j.frames.length},getDefaultFrame:function(){return this.j.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.j.canonicalOrigins)},isDisabled:function(){return this.j.disabled},St:function(e){this.j.defaultFrame=e},At:function(e){this.j.frames.push(e)},bt:function(e){this.j.messages[e.messageId]=e.message},wt:function(e){this.j.subscribers.push(e.subscriber)},Dt:function(e){this.j.canonicalOrigins=e.canonicalOrigins},Rt:function(e){this.j.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(15),a=n(20);e.exports={initialize:function(){this.j={},this.on(r.DATA_LOADED,this.X)},X:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,function(e){a.deepFreeze(e),this.j[e.id]=e}.bind(this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.j))},getGroupsMap:function(){return a.safeReference(this.j)},get:function(e){return a.safeReference(this.j[e])}}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){return u(M.LAYER_MAP)||{}}function r(e,t){w.dispatch(D.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=H.getPreferredLayerMapString();f(M.LAYER_MAP,e,!0)}function o(e){w.dispatch(D.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=O.now()),w.dispatch(D.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i,r=t.provides;if(!t.isSticky||b.isUndefined(e[r]))try{var a=x.evaluate(t.getter);b.isFunction(a)&&(a=a((function(){return e[r]}),(function(e){return n(r,e)}))),b.isUndefined(a)||(t.isAsync?(i=a.then((function(e){n(r,e)}),(function(e){V.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),w.dispatch(D.SET_VISITOR_ATTRIBUTE_PENDING,{key:r,pending:i})):n(r,a))}catch(e){V.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return i}}function u(e){var t=p(e),n=k.getItem(t);if(!n){var i=g(e);n=k.getItem(i),d(e,n)}return b.isString(n)&&(n=A(n)),n}function c(e){var t=[];return b.each(e,(function(e){b.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function l(e){var t=z.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return b.each(k.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:A(k.getItem(e))};n.push(a)}})),n}function d(e,t){var n=p(e),i=g(e);k.setItem(n,t),k.removeItem(i)}function f(e,t,i){try{var r=p(e);i||(t=L.stringify(t));try{k.removeItem(g(e)),k.setItem(r,t)}catch(e){throw V.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}n(81).setItem(r,t)}catch(e){V.warn("Unable to persist visitor data:",e.message)}}function p(e){var n=z.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function g(e){var t=z.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function h(e,t){if(m(e,p(M.EVENT_QUEUE)))w.dispatch(D.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:C.deserialize(A(t))});else if(m(e,p(M.EVENTS)))w.dispatch(D.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:C.deserialize(A(t))});else if(m(e,p(M.LAYER_STATES)))w.dispatch(D.LOAD_PERSISTED_LAYER_STATES,{layerStates:A(t),merge:!0});else if(m(e,p(M.VARIATION_MAP)))w.dispatch(D.MERGE_VARIATION_ID_MAP,{variationIdMap:A(t)});else if(m(e,p(M.VISITOR_PROFILE))){var n=["custom"],i=A(t);b.each(n,(function(e){var t=G.getPlugin(P.PluginTypes.visitorProfileProviders,e);if(t){if(i.profile&&i.metadata){var n=v(i,e,t.attributionType);if(!b.isEmpty(n)){var r=[];b.forOwn(n.data,(function(t,i){var a=n.metadata[i],o={key:i,value:t,type:e,metadata:a};r.push(o)})),w.dispatch(D.SET_VISITOR_ATTRIBUTES,{attributes:r})}}}else V.debug("Attribute type",e,"not used by any audiences")}))}}function v(e,t,n){var i=Y.getAttribute(t),r=Y.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(b.isEmpty(i))return{data:a,metadata:o};var s={};return b.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===P.AttributionTypes.FIRST_TOUCH&&i>=a||n===P.AttributionTypes.LAST_TOUCH&&a>=i||b.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function m(e,t){return e.indexOf(t)>0}function _(){var e=Y.getVisitorProfile(),t=Y.getVisitorProfileMetadata(),n=G.getAllPlugins(P.PluginTypes.visitorProfileProviders);if(n){var i=b.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=b.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function E(e,t){R.initializeStore(e,t)}function y(e){w.dispatch(D.LOAD_PERSISTED_LAYER_STATES,{layerStates:b.filter(e,(function(e){return!!e.decision}))})}function I(e){e=b.extend({lastSessionTimestamp:0,sessionId:null},e),w.dispatch(D.LOAD_SESSION_STATE,e)}function T(){return"oeu"+O.now()+"r"+Math.random()}function S(e){var t,n,i=G.getAllPlugins(P.PluginTypes.visitorProfileProviders),r=b.filter(i,(function(e){return b.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=b.reduce(t,(function(e,t,n){var i=t,a=b.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),w.dispatch(D.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function A(e){try{return L.parse(e)}catch(t){return V.debug("Failed to parse: ",e,t),null}}var b=n(2),w=n(8),D=n(15),R=n(6),C=n(7),N=n(65),O=n(14),x=n(17),P=n(12),L=n(16),k=n(72).LocalStorage,V=n(11),F=n(77).Promise,M=n(12).VisitorStorageKeys,U=x.get("stores/global"),B=x.get("stores/layer"),G=x.get("stores/plugins"),j=x.get("stores/session"),z=x.get("stores/visitor_id"),H=x.get("stores/visitor_bucketing"),Y=x.get("stores/visitor"),q=x.get("stores/provider_status");t.getIdFromCookies=function(){var e,t=N.get(P.COOKIES.VISITOR_ID);return t||(t=T()),{randomId:t,UUID:e}},t.setId=function(e){var n=z.getBucketingId();if(w.dispatch(D.SET_VISITOR_ID,e),z.getBucketingId()!==n){t.loadData();try{t.persistVisitorId(e)}catch(e){if(V.error("Visitor / Unable to persist visitorId, disabling tracking"),w.dispatch(D.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof N.MismatchError)throw V.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}}t.refreshSession()},t.getVariationIdMap=function(){return u(M.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){w.dispatch(D.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationIdMap=function(){var e=H.getVariationIdMapString();f(M.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){f(M.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){w.dispatch(D.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=b.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=b.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=b.partial(s,t),i=b(e).filter({isAsync:!0}).map(n).filter().value();return b.forEach(b.filter(e,(function(e){return!e.isAsync})),n),i.length>0?F.all(i):F.resolve()},t.loadData=function(){E(u(M.EVENTS)||[],u(M.EVENT_QUEUE)||[]);var e=l(M.LAYER_STATES);y(c(e)),I(u(M.SESSION_STATE)||{}),S(u(M.VISITOR_PROFILE)||{});var n=u(M.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()},t.persistBehaviorEvents=function(e){f(M.EVENTS,e)},t.persistBehaviorEventQueue=function(e){f(M.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=B.getLayerStates(t.getNamespace());e=b.map(e,(function(e){return b.omit(e,"namespace")})),f(M.LAYER_STATES,e)},t.persistSessionState=function(){f(M.SESSION_STATE,j.getState())},t.persistVisitorProfile=function(){f(M.VISITOR_PROFILE,_())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,n){var i;return b.includes(e,n)&&b.includes(e,"_")&&b.includes(e,"$$")&&b.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.persistVisitorId=function(e){b.isUndefined(e.UUID)?e.randomId&&N.set(P.COOKIES.VISITOR_ID,e.randomId):null===e.UUID?N.remove(P.COOKIES.VISITOR_UUID):N.set(P.COOKIES.VISITOR_UUID,e.UUID)},t.getAttribute=function(e){return Y.getAttribute(e)},t.getPendingAttributeValue=function(e){return q.getPendingAttributeValue(e)},t.loadForeignData=function(){b.each(k.keys(),(function(e){var t=k.getItem(e);t&&h(e,t)}))},t.getNamespace=function(){return U.getNamespace()},t.removeLegacySessionStateCookies=function(){var e=N.getAll();b.forEach(b.keys(e),(function(e){0===e.indexOf(P.COOKIES.SESSION_STATE+"$$")&&N.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,d=o.length-1;d>=0;d--)if(s.unshift(o[d]),i=s.join("."),!r.includes(h,i)){a={domain:n?"."+i:i};try{t.set(v,Math.random().toString(),a),t.remove(v,a),u=a.domain;break}catch(e){}}return c.dispatch(l.SET_COOKIE_DOMAIN,u),u}var r=n(2),a=n(14),o=n(66),s=n(67),u=n(68).create,c=n(8),l=n(15),d=n(17),f=d.get("stores/cookie_options"),p=t.SetError=u("CookieSetError"),g=t.MismatchError=u("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,s,u;n=o.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],s=i.indexOf("="),s>0&&(u=t.safeDecodeURIComponent(i.substring(0,s)),void 0===c[u])){var l=i.substring(s+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,u,c){u=r.extend({encodeValue:!0},u),c!==!1&&(c=!0);var l=[];if(r.isUndefined(u.domain)){var d=f.getCurrentDomain();d||(d=i(s.getLocation(),!0)),u.domain=d}if(u.domain&&l.push("domain="+u.domain),r.isUndefined(u.path)&&(u.path="/"),u.path&&l.push("path="+u.path),r.isUndefined(u.expires)){var h=r.isUndefined(u.maxAge)?f.getDefaultAgeInSeconds():u.maxAge;u.expires=new Date(a.now()+1e3*h)}if(r.isUndefined(u.expires)||l.push("expires="+u.expires.toUTCString()),u.secure&&l.push("secure"),l=l.join(";"),o.setCookie(e+"="+(u.encodeValue?encodeURIComponent(n):n)+";"+l),c){var v=u.encodeValue,m=t.get(e,v);if(m!==n){if(!m)throw new p('Failed to set cookie "'+e+'"');throw new g('Expected "'+n+'" for "'+e+'", got "'+m+'"')}}},t.remove=function(e,n){t.set(e,null,r.extend({},n,{expires:new Date(0)}),!1)};var h=["optimizely.test"],v="optimizelyDomainTestCookie"}),(function(e,t,n){function i(){return"loading"===t.getReadyState()}var r=n(17),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!i())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i=n(2);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){
window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)}}),(function(e,t,n){var i=n(69),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(70)(),a=n(71);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){var i,r="optimizely_data",a=n(73),o=n(67),s=n(75),u=n(68).create,c=t.Error=u("StorageError"),l=o.getGlobal("localStorage");l?i=a.create(l,r):(s.emitError(new c("Failed to initialize localStorage")),i=a.mockStorage),t.LocalStorage=i}),(function(e,t,n){function i(e,t){this.Ct=e,this.Nt=t}var r=n(2),a=n(11),o="$$";i.prototype.Ot=function(e){return[this.Nt,e].join(o)},i.prototype.xt=function(e){return e.replace(this.Nt+o,"")},i.prototype.setItem=function(e,t){try{this.Ct.setItem(this.Ot(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.Ct.removeItem(this.Ot(e))},i.prototype.getItem=function(e){var t=null;try{t=this.Ct.getItem(this.Ot(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.Ct);return r.map(e,this.xt.bind(this))},i.prototype.allKeys=function(){return r.keys(this.Ct)},i.prototype.allValues=function(){return r.values(this.Ct)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return o.getGlobal("performance")}var r=n(8),a=n(14),o=n(67),s=n(15),u=n(68).create,c=n(17),l=c.get("stores/rum"),d="optimizely:",f=t.Error=u("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",c=o[0].startTime-a[0].startTime;r.dispatch(s.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*c)/1e3}})}}},t.now=function(){var e=i();return e?e.now():a.now()}}),(function(e,t,n){var i=n(76);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(8),o=n(15),s=n(17),u=n(11),c=n(75),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),a.dispatch(o.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){a.dispatch(o.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){!n&&i.emitErrors?(u.error("Error in handler for event:",e,r),c.emitError(r,null,t)):u.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,n){e.exports=n(78)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){$=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<K;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}K=0}function p(){try{var e=n(80);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function g(e,t){var n=arguments,i=this,r=new this.constructor(v);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];$((function(){return x(a,r,e,i._result)}))})():R(i,r,e,t),r}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(v);return A(n,e),n}function v(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function E(e){try{return e.then}catch(e){return ue.error=e,ue}}function y(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function I(e,t,n){$((function(e){var i=!1,r=y(n,t,(function(n){i||(i=!0,t!==n?A(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function T(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):R(t,void 0,(function(t){return A(e,t)}),(function(t){return D(e,t)}))}function S(e,t,n){t.constructor===e.constructor&&n===g&&t.constructor.resolve===h?T(e,t):n===ue?(D(e,ue.error),ue.error=null):void 0===n?w(e,t):r(n)?I(e,t,n):w(e,t)}function A(t,n){t===n?D(t,m()):e(n)?S(t,n,E(n)):w(t,n)}function b(e){e._onerror&&e._onerror(e._result),C(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&$(C,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,$(b,e))}function R(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&$(C,e)}function C(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?x(n,i,r,a):r(a);e._subscribers.length=0}}function N(){this.error=null}function O(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function x(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=O(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void D(t,_())}else o=i,u=!0;t._state!==ae||(a&&u?A(t,o):c?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function P(e,t){try{t((function(t){A(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function L(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function V(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[re]||k(this.promise),q(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,F())}function F(){return new Error("Array Methods must be provided an Array")}function M(e){return new V(this,e).promise}function U(e){var t=this;return new t(q(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function B(e){var t=this,n=new t(v);return D(n,e),n}function G(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function j(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(e){this[re]=L(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&G(),this instanceof z?P(this,e):j())}function H(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=z}var Y=void 0;Y=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var q=Y,K=0,W=void 0,X=void 0,$=function(e,t){ne[K]=e,ne[K+1]=t,K+=2,2===K&&(X?X(f):ie())},Q="undefined"!=typeof window?window:void 0,J=Q||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===Q?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new N,ce=new N,le=0;return V.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},V.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===h){var r=E(e);if(r===g&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===z){var a=new n(v);S(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},V.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},V.prototype._willSettleAt=function(e,t){var n=this;R(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},z.all=M,z.race=U,z.resolve=h,z.reject=B,z._setScheduler=a,z._setAsap=o,z._asap=$,z.prototype={constructor:z,then:g,"catch":function(e){return this.then(null,e)}},z.polyfill=H,z.Promise=z,z}))}).call(t,n(79),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){h&&p&&(h=!1,p.length?g=p.concat(g):v=-1,g.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=g.length;t;){for(p=g,g=[];++v<t;)p&&p[v].run();v=-1,t=g.length}p=null,h=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var p,g=[],h=!1,v=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new u(e,t)),1!==g.length||h||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){function i(e){var t;if(!o.find(y.getFrames(),{origin:e.origin}))return void E.debug("XDomain","No frame found for origin: "+e.origin);try{t=h.parse(e.data)}catch(t){return void E.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new I("Xdomain Error: "+t.response.toString()));else if("SYNC"===t.type)o.each(y.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=y.getMessageById(t.id);if(!n){if(E.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=y.getNextMessageId();t.id>=i?d.emitInternalError(new I("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new I("Message ID is < 0: "+t.id)):d.emitInternalError(new I("No stored message found for message ID: "+t.id))}else d.emitInternalError(new I("Message ID is not a number: "+t.id.toString()));return}n.resolver(t.response),l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:p.now(),response:t.response})})}}function r(e,t){return t||(t=y.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:y.getNextMessageId()}),resolver:n};t?y.isDisabled()||a(i,t):l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(h.stringify(n),t.origin)}var o=n(2),s=n(77).Promise,u=n(15),c=n(17),l=n(8),d=n(75),f=n(68).create,p=n(14),g=n(66),h=n(16),v=n(82),m=n(64),_=n(67),E=n(11),y=c.get("stores/xdomain"),I=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.subscribe=function(e){l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=g.createElement("iframe");i.src=e+t,i.hidden=!0,i.setAttribute("aria-hidden","true"),i.setAttribute("tabindex","-1"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:y.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(u.XDOMAIN_ADD_FRAME,r),n(r)},g.appendTo(g.querySelector("body"),i)})},t.loadCanonicalOrigins=function(e){l.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e})},t.getXDomainUserId=function(e,t){var n,i={};return o.each(t,(function(t){i[t]=[],o.each(o.keys(e),(function(e){var r=m.getUserIdFromKey(e,t);!n&&r&&(n=r),r&&!o.includes(i[t],r)&&i[t].push(r)}))})),E.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){_.addEventListener("message",i);var r=function(){return!!g.querySelector("body")},s=function(){return t.loadIframe(e,n)};return v.pollFor(r).then(s).then((function(e){l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME,e),y.isDisabled()||o.each(y.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){var i=n(2),r=n(77).Promise,a=100,o=50;t.pollFor=function(e,t,n){var s,u;return i.isFunction(n)?u=n:(s=n||a,u=function(){return s--,s<-1}),t=t||o,new r(function(n,i){!(function r(){var a;if(!u()){try{var o=e();if(o)return n(o)}catch(e){a=e}return setTimeout(r,t)}i(a||new Error("Poll timed out"))})()})}}),(function(e,t,n){function i(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<u}function r(e,t){var n;n=i(e,t)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):t.getValueOrDefault([s.FIELDS.TIME]),t.setFieldValue(s.FIELDS.SESSION_ID,n)}var a=n(53).Event,o=n(53).EventBase,s=n(54),u=18e5;t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_ID]),u=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?u-36e5:n,i="number"!=typeof i?n:i,e=new a(new o("",""),n,i),r(e,t)},t.sessionize=function(e){var t=e.length;if(0!==t){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var n=1;n<t;n++)r(e[n-1],e[n])}},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(2),r=n(15),a=n(8),o=n(77).Promise,s=n(11),u=n(14),c=n(85),l=n(16),d=3;t.isCORSSupported=function(){var e=c.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new o(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=c.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=l.stringify(e.data)),o.open(e.method,e.url,e.async),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,c,l){if(!n)return o.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return o.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(c)&&(c=0);var f={id:n,timeStamp:u.now(),data:e,retryCount:c};return a.dispatch(r.SET_PENDING_EVENT,f),s.debug("Sending event ",n),t.request(e).then((function(e){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),s.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,a.dispatch(r.SET_PENDING_EVENT,f),s.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-c," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(14),a=n(12),o=n(66),s=n(8),u=n(15),c=n(11),l=n(17),d=l.get("stores/sandbox"),f=n(67);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+r.now(),t=o.createElement("iframe");t.name=e,t.style.display="none",o.appendToHead(t);var n=t.contentWindow,l=t.contentDocument;l.write("<script></script>"),l.close();var d=i.mapValues(a.SandboxedFunctions,(function(e){return n[e]}));s.dispatch(u.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){c.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(2),r=n(11),a=n(87),o=n(17),s=o.get("stores/plugins"),u=n(12),c=n(15),l=n(8),d=[n(98),n(99),n(119)],f=["disable","load","optOut"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(d[s]&&(a=d[s][n]),t&&f.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(c.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){r.log('API / Getting module: "'+e+'"');var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(u.PluginTypes.apiModules,e),t?(l.dispatch(c.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(c.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,l=r.decision.variationId;if(!u||!l)return null;var d,f;return(d=o.find(a.experiments,{id:u}))?(f=o.find(d.variations,{id:l}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:d.name,id:d.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],d=e.getLayerStates();s.onlySingleExperiments&&(d=o.filter(d,(function(e){var n=t.get(e.layerId);return n&&c.isSingleExperimentPolicy(n.policy)})));var f=o.map(d,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=l.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),p=r?o.filter(f,r):f;return o.each(p,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(88),u=n(89),c=n(35),l=n(90);t.data=["stores/audience_data","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/global",function(e,t,n,i,r,a){var o={audiences:e.getAudiencesMap(),events:t.getEventsMap(),campaigns:n.getCampaignsMap(),pages:i.getPagesMap(),experiments:n.getExperimentsMap(),variations:n.getVariationsMap(),projectId:a.getProjectId(),snippetId:a.getSnippetId(),accountId:a.getAccountId(),dcpServiceId:a.getDCPServiceId(),revision:a.getRevision(),clientVersion:s.VERSION};return o.groups=r.getGroupsMap(),o}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId(),UUID:e.getUUID()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,s,d,f){return{getCampaignStates:function(i){var a={},s=r(n,t,e,d,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,d,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,d,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=s.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return d.isGlobalHoldback()},getActivationId:function(){return d.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=l.getExperimentAndVariation();return e&&(e.referrer=l.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);return r?u.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);if(!r)return null;var a=u.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),s=o.mapValues(a.names,(function(t,n){return u.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),l={experiment:s.experiment,variation:s.variation};return c.isSingleExperimentPolicy(r.layer.policy)||o.extend(l,{campaign:s.layer,holdback:r.isLayerHoldback}),l}}}],t.utils=n(91).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(97)}),(function(e,t,n){t.VERSION="0.77.1",t.ENGINE="js"}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!v.isSingleExperimentPolicy(e.policy)||!r){var s=!v.isSingleExperimentPolicy(e.policy)&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],p=[c.idStrings.experiment,c.idStrings.variation];v.isSingleExperimentPolicy(e.policy)||(d.unshift(c.names.layer),p.unshift(c.idStrings.layer));var g=u.reduce(p,(function(e,t){return e+t.length}),0),h=d.length-1+(s?1:0),m=h*l.length,_=g+m;if(s&&(_+=f.length),_>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var E=a-_,y=d.length,I=[],T=d.length-1;T>=0;T--){var S=d[T],A=Math.min(S.length,Math.floor(E/y));E-=A,y--,I.unshift(S.substring(0,A))}var b=u.map(I,(function(e,t){return e+p[t]}));return s&&b.push(f),b.join(l)}}function s(e,n,i,r,a,o){var s=r?f:p,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),g=d.names,h=d.idStrings,m=u.reduce(h,(function(e,t){return e+t.length}),0);if(m+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=a-m-c-s.length,E={};E.variation=Math.min(g.variation.length,Math.floor(_/3)),_-=E.variation,E.experiment=Math.min(g.experiment.length,Math.floor(_/2)),_-=E.experiment,E.layer=_;var y={};u.each(g,(function(e,t){y[t]=e.substring(0,E[t])}));var I=[];return v.isSingleExperimentPolicy(e.policy)||I.push(y.layer+h.layer),I=I.concat([y.experiment+h.experiment,y.variation+h.variation,s]),I.join(l)}var u=n(2),c=n(17),l=":",d="everyone_else",f="holdback",p="treatment",g="",h=n(11),v=n(35);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||g,experiment:t.name||g,variation:n.name||g};if(o&&(s=u.mapValues(s,i)),s.experiment===g&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(h.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=g),e===g)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(2),r=n(17),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){var i=n(77).Promise,r=n(92).observeSelector,a=n(95).waitForElement,o=n(96).waitUntil,s=n(93).poll;t.create=function(){return{observeSelector:r,poll:s,Promise:i,waitForElement:a,waitUntil:o}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=p.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(m),a),this.observe(t,e)});return function(i){var r=m[i];n.observe(t,e),r.cancelObservation=function(){delete m[i],l.isEmpty(m)&&n.disconnect()}}}return function(e){var t=h.poll(l.partial(a,e));m[e].cancelObservation=function(){t(),delete m[e]}}}function r(e){var t=m[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(m[e]){if(o(m[e]))return 0===m[e].matchedCount&&l.isFunction(m[e].options.onTimeout)&&m[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(m[e].selector);t.length&&(l.each(t,(function(t){t.Pt&&t.Pt[e]||m[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;m[e]&&m[e].callbackQueue.length;){var t=m[e].callbackQueue.shift();if(u(t,e),m[e].matchedCount=m[e].matchedCount+1,m[e].callback(t),m[e].options.once)return void r(e)}}function u(e,t){e.Pt||(e.Pt={}),e.Pt[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(15),n(17)),f=d.get("stores/directive"),p=n(66),g=(n(12),n(8),n(5).generate),h=n(93),v=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),m={},_=function(e){(_=i())(e)};t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=g();return n=l.merge({},v,n||{}),m[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},_(i),setTimeout(a.bind(null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){c[e]&&a.each(c[e].callbacks,(function(e){e.call(null)}))}function r(e,t){c[t]&&c[t].callbacks[e]&&(delete c[t].callbacks[e],a.some(c[t].callbacks)||(clearInterval(c[t].id),delete c[t]))}var a=n(2),o=(n(15),n(17)),s=(n(12),n(8),n(5).generate),u=(o.get("stores/rum"),n(94).DEFAULT_INTERVAL),c={};t.poll=function(e,t){a.isNumber(t)||(t=u),c[t]||(c[t]={callbacks:{},id:setInterval(a.partial(i,t),t)});var n=s();return c[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(c,(function(e,t){clearInterval(e.id),delete c[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(77).Promise,r=n(92).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(77).Promise,r=n(93).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(76);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(99);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){var i=n(2),r=n(15),a=n(86),o=n(87),s=n(12),u=n(100),c=n(107),l=n(109),d=n(68).create,f=n(14),p=n(110),g=n(76),h=n(8),v=n(16),m=n(11),_=n(113),E=n(114),y=n(64),I=n(81),T=n(17),S=T.get("stores/dimension_data"),A=T.get("stores/view_data"),b=T.get("stores/visitor_id"),w=T.get("stores/layer_data"),D=T.get("stores/directive"),R=86400,C=90,N=t.ApiListenerError=d("ApiListenerError");t.event=function(e){E.updateAllViewTags();var t=function(){var t=u.trackCustomEvent(e.eventName,e.tags);t?m.log("API / Tracking custom event:",e.eventName,e.tags):m.log("API / Not tracking custom event:",e.eventName)};b.getBucketingId()?t():h.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postActivate,cleanupFn:t})},t.page=function(e){var t=A.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?E.activateViaAPI(t,e.tags):(E.deactivate(t),m.log("API / Deactivated Page",E.description(t)))};b.getBucketingId()?i():h.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){E.setGlobalTags(e.tags)},t.user=function(e){i.each(e,(function(e,t){"attributes"===t&&(m.log("API / Setting visitor attributes:",e),i.each(e,(function(e,t){var n,i=t,a="custom",o=S.getById(t)||S.getByApiName(t);o&&(i=o.id,n=o.segmentId||o.id);var u=function(){h.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:[{key:i,value:{id:n,value:e},type:a,metadata:{lastModified:f.now()}}]})};b.getBucketingId()?u():h.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postVisitorProfileLoad,cleanupFn:u})})))}))},t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;p.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<C&&(m.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",C,", setting to minimum."),t=C),m.log("API / Setting cookie age to",t,"days."),h.dispatch(r.SET_COOKIE_AGE,t*R)},t.cookieDomain=function(e){m.log("API / Setting cookie domain to",e.cookieDomain),h.dispatch(r.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);m.log("API / Disabling tracking"),h.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else m.log("API / Disabling everything"),h.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(n)&&(n=""),m.setLogMatcher(n),m.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(o[t]||a.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');_.registerApiModule(t,e.module);
},t.dataFromSource=function(e){var t=e.source;l.makeAsyncRequest(t),l.resolveRequest(t,e.data)},t.addListener=function(e){if(!i.isFunction(e.handler))throw new Error("A handler function must be supplied");e=i.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new N(e)}},g.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");g.off(e.token)},t.load=function(e){h.dispatch(r.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");h.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&i.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,r=e.campaignId;if(r){if(t=w.get(r),!t)throw new Error("Could not find layer "+r)}else if(t=w.getLayerByExperimentId(e.experimentId),r=t.id,!r)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=i.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+r);var a=e.variationId;if(i.isUndefined(e.variationIndex)){if(!i.find(n.variations,{id:a}))throw new Error("Cound not find variation "+a+" in experiment "+e.experimentId)}else if(a=n.variations[e.variationIndex].id,!a)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);y.updateVariationIdMap(r,e.experimentId,a),b.getBucketingId()&&y.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!i.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+v.stringify(e.canonicalOrigins));i.each(e.canonicalOrigins,(function(e){if(!i.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),I.loadCanonicalOrigins(e.canonicalOrigins)},t.activate=function(){D.shouldActivate()?c.emitActivateEvent():m.debug("Not activating.")},t.sendEvents=function(){c.emitSendEvents()},t.holdEvents=function(){c.emitHoldEvents()}}),(function(e,t,n){function i(e,t,n,i,r){var a=K.get(t.layerId),o=F.description(a),s=c(e,t,n),u=l(s,t.isLayerHoldback,i),d=X.isExpectingRedirect(),f=X.getLayerId();if(d&&f===a.id){B.persist(s,r),b.log("Relaying decision for redirect Campaign",o,s);var p=L.TrackLayerDecisionTimingFlags.preRedirectPolicy;u.timing=p,_(p,[L.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],u),b.log("Called trackLayerDecision for redirect Campaign",o,u)}else{var p=L.TrackLayerDecisionTimingFlags.nonRedirectPolicy;u.timing=p,_(p,[L.NonRedirectPolicies.TRACK_IMMEDIATELY],u),b.log("Called trackLayerDecision for non-redirect Campaign",o,u)}}function r(e,t,n,i,r){var a=K.get(t.layerId),o=F.description(a),s=d(e,t,n,i);v("onLayerDecision",s,r?"trackLayerDecision":void 0),b.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStates()}),i=J.getByApiName(e),r=i&&i.pageId?g(i):H.getActiveViewTags(),a=y.extend({},r,t),o=i&&i.category?i.category:k.OTHER;return y.extend(n,{eventEntityId:i&&i.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:H.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStates()});return y.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:H.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStates()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e&&e.category?e.category:k.OTHER,r=g(e);return y.extend(t,{event:e,eventCategory:i,eventTags:r,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStates()});return y.extend(e,{eventTags:{}})}function c(e,t,n){var i=K.get(t.layerId),r=null,a=null,o=null;if(t.experimentId){var s=y.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=y.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=U.getReferrer()||N.getReferrer(),l={sessionId:z.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),decisionId:e,activationId:j.getActivationId(),namespace:j.getNamespace(),timestamp:R.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:j.getAccountId(),projectId:j.getProjectId(),revision:String(j.getRevision()),clientVersion:C.VERSION,referrer:c,integrationStringVersion:i.integrationStringVersion,integrationSettings:y.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=y.extend({},e,{isLayerHoldback:t,clientEngine:C.ENGINE,anonymizeIP:y.isNull(j.getAnonymizeIP())?void 0:j.getAnonymizeIP(),userFeatures:h(n)});return i}function d(e,t,n,i){return{decisionId:e,timestamp:R.now(),revision:j.getRevision(),clientEngine:C.ENGINE,clientVersion:C.VERSION,projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:z.getSessionId(),visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),decision:t,decisionTicket:n,userFeatures:h(i)}}function f(e){var t={eventId:A.generate(),timestamp:R.now(),revision:j.getRevision(),clientEngine:C.ENGINE,clientVersion:C.VERSION,projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:z.getSessionId(),isGlobalHoldback:j.isGlobalHoldback(),visitorId:Z.getRandomId(),visitorUUID:Z.getUUID(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:h(e.visitorProfile)};return t}function p(e){var t=H.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function g(e){var t={};return e.pageId?p(e.pageId):t}function h(e){var t=Y.getAllPlugins(P.PluginTypes.visitorProfileProviders),n=y.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return y.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!y.isUndefined(a)){y.isObject(a)?o=y.map(a,(function(e,t){var n=y.isObject(e)?e:{value:e};return y.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=y(o).map((function(e){return y.pick(y.extend({},i,e),y.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){b.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function v(e,t,n){var i=m(e,n);b.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),b.debug("Calling each with data: ",t),y.each(i,(function(e){try{b.debug("Calling plugin: "+e.name),e.hookFn(t),b.debug("Called plugin: "+e.name)}catch(e){b.error(e)}}))}function m(e,t){var n=[];return y.each(Y.getAllPlugins(P.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){b.error(e)}})),n}function _(e,t,n){var i=E(e,t);b.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),b.debug("Calling each with data: ",n),y.each(i,(function(e){try{b.debug("Calling plugin: "+e.name),e.hookFn(n),b.debug("Called plugin: "+e.name)}catch(e){b.error(e)}}))}function E(e,t){var n=[];return y.each(Y.getAllPlugins(P.PluginTypes.analyticsTrackers),(function(i,r){y.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var y=n(2),I=n(8),T=n(15),S=n(75),A=n(5),b=n(11),w=n(17),D=n(6),R=n(14),C=n(88),N=n(66),O=n(76),x=n(101),P=n(12),L=n(102),k=n(63),V=n(103),F=n(104),M=n(77).Promise,U=n(90),B=n(105),G=n(106),j=(n(74),w.get("stores/global")),z=w.get("stores/session"),H=w.get("stores/view"),Y=w.get("stores/plugins"),q=w.get("stores/layer"),K=w.get("stores/layer_data"),W=w.get("stores/observed_redirect"),X=w.get("stores/pending_redirect"),$=w.get("stores/visitor"),Q=w.get("stores/directive"),J=w.get("stores/event_data"),Z=w.get("stores/visitor_id"),ee="COOKIE",te=!0,ne=1e3;t.trackClientActivation=function(){if(Q.shouldSendTrackingData()){var e=u();return v("onClientActivation",e),e}},t.trackCustomEvent=function(e,t){t=t||{};var n=a(e,t),i=J.getByApiName(e),r={name:e,type:V.CUSTOM,category:n.eventCategory,tags:y.omit(n.eventTags,"revenue")};if(y.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:i?i.name||i.apiName:e,apiName:i?i.apiName:void 0,type:V.CUSTOM,tags:y.omit(n.eventTags,"revenue"),category:n.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return D.addEvent(r),v("onCustomEvent",n),n},t.trackDecisionEvent=function(e,t){var n=K.get(e.layerId),a=F.description(n);if(!Q.shouldSendTrackingData())return void b.log("Analytics / Not tracking decision for Campaign",a);var o=A.generate();I.dispatch(T.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:o});var s=$.getVisitorProfile();ee?(i(o,e,t,s,ee),r(o,e,t,s,!0)):r(o,e,t,s,!1)},t.trackPostRedirectDecisionEvent=function(){if(!Q.shouldSendTrackingData())return M.resolve();if(W.hasTracked())return M.resolve();var e=W.get();if(!e)return M.resolve();var t=$.getVisitorProfile(),n=l(e,!1,t),i=L.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,_(i,[L.PostRedirectPolicies.TRACK_IMMEDIATELY],n),te){var r=new M(function(e,t){var n=O.on({filter:{type:x.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),O.off(n)}})}),a=G.makeTimeoutPromise(ne);return M.race([r,a]).then((function(){b.log("Calling trackers after successful sync")}),(function(e){b.warn("Calling trackers after failed sync:",e)})).then((function(){t=$.getVisitorProfile(),n=l(e,!1,t),n.timing=L.TrackLayerDecisionTimingFlags.postRedirectPolicy,_(L.TrackLayerDecisionTimingFlags.postRedirectPolicy,[L.PostRedirectPolicies.TRACK_AFTER_SYNC],n),I.dispatch(T.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){b.error("Error when calling trackers after sync:",e)}))}return _(L.TrackLayerDecisionTimingFlags.postRedirectPolicy,[L.PostRedirectPolicies.TRACK_AFTER_SYNC],n),I.dispatch(T.REGISTER_TRACKED_REDIRECT_DATA),M.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData())return D.addEvent(n),v("onClickEvent",t),t},t.trackViewActivation=function(e){var t=H.getViewState(e.id);if(!t.isActive)return void b.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:V.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:V.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!Q.shouldSendTrackingData()),Q.shouldSendTrackingData()?(D.addEvent(i),I.dispatch(T.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),v("onPageActivated",n),n):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t,n){var i=n(13);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(17),a=n(8),o=n(14),s=n(15),u=r.get("stores/global"),c=r.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return a.dispatch(s.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:o.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"}}),(function(e,t,n){function i(e){e=l.omit(e,["visitorId","visitorUUID"]);try{var t=r(e)}catch(e){return p.error("Relay / Error computing redirect relay cookie: ",e),void h.emitError(e)}p.debug("Relay / Setting redirect relay cookie:",t);try{g.set(v.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){p.error("Relay / Failed to set redirect relay cookie",e),h.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=T[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+y+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=g.get(v.COOKIES.REDIRECT,!1);if(e){p.log("Relay / Found redirect cookie:",e);var t=o(e),n=g.get(v.COOKIES.VISITOR_ID);t.visitorId=l.isString(n)?n:null;return t}}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void p.warn("Relay / Skipping invalid segment:",e);var i=g.safeDecodeURIComponent(n[0]),r=S[i];if(!r&&(r=l.find(I,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+y)})),!r))return void p.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+y.length);a=(r.decodeValueString||g.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||g.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return p.warn("Relay / Skipping segment due to decode or parse error:",e,t),void h.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=E.getPlugin(v.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){p.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function u(e,t){var n=null,i=E.getPlugin(v.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){p.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function c(e){var t=e.pageId||void 0;d.dispatch(f.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorUUID||e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),d.dispatch(f.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),d.dispatch(f.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(8),f=n(15),p=n(11),g=n(65),h=n(75),v=n(12),m=n(102),_=n(17),E=_.get("stores/plugins"),y=".",I=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),g.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"visitorUUID",relayName:"uuid",isNullable:!0},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:u,isNullable:!0}],T={},S={};l.forEach(I,(function(e){T[e.name]=e,S[e.relayName]=e})),t.persist=function(e,t){t===m.RedirectRelayMedia.COOKIE?i(e):p.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(){var e;if(e||(e=a()),e){var t=[];return l.forEach(I,(function(n){(l.isNull(e[n.name])||l.isUndefined(e[n.name]))&&(n.isNullable?e[n.name]=null:(delete e[n.name],t.push(n.name)))})),t.length?void p.error("Relay / Observed redirect data with missing fields:",t):(d.dispatch(f.LOAD_REDIRECT_DATA,e),d.dispatch(f.ADD_CLEANUP_FN,{lifecycle:v.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){c(e)}}),e)}}}),(function(e,t,n){var i=n(77).Promise;t.makeTimeoutPromise=function(e){return new i(function(t,n){setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"];return r.extend({},e,{changeSet:r.map(e.changeSet,(function(e){return r.pick(e,t)}))})}var r=n(2),a=n(17),o=a.get("stores/audience_data"),s=n(76),u=n(101),c=n(108);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=c.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=c.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitViewsActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:u.TYPES.ACTION,name:"applied",data:{type:e.type,changes:i(e).changeSet,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId}};s.emit(t)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:{actions:r.map(t,i),decision:e}};s.emit(n)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){var i=n(2);t.translateDecisionToCampaignDecision=function(e){return r(i.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return t.campaign=e.data.layer,t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}};var r=function(e,t){var n=i.omit(e,i.keys(t));return i.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(77).Promise,r=n(8),a=n(15),o=n(17),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new i(function(e,t){o=e,u=t});return r.dispatch(a.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(a.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(a.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){function i(){var e=Boolean(E.result(window.optimizely,"initialized"));b.dispatch(y.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){b.dispatch(y.LOAD_DIRECTIVE,{mutationObserverAPISupported:N.isMutationObserverAPISupported()})}function a(){var e=N.getUserAgent()||"";if(!E.isString(e))return void w.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(E.includes(e,t))return w.warn("Directive / Matches bot:",t),!0};E.some(t,n)&&(w.log("Directive / Disabling tracking"),b.dispatch(y.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=T.get(A.COOKIES.OPT_OUT),n=R.getQueryParamValue(O.OPT_OUT);e?n===e||"true"!==n&&"false"!==n?b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):t.setOptOut("true"===n):"true"===n&&t.setOptOut(!0)}function s(){var e=!1,t=[O.AB_PREVIEW,O.DISABLE];t.push(O.EDITOR);for(var n=0;n<t.length;n++)if("true"===R.getQueryParamValue(t[n])){w.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}b.dispatch(y.LOAD_DIRECTIVE,{disabled:e})}function u(){b.dispatch(y.LOAD_DIRECTIVE,{isPreview:!1})}function c(){var e=R.getQueryParamValue(O.LEGACY_PREVIEW);e&&w.log("Directive / Is legacy preview mode"),b.dispatch(y.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){b.dispatch(y.LOAD_DIRECTIVE,{isEditor:!1})}function d(){b.dispatch(y.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=N.getGlobal("optlyDesktop"),t=!(!e||E.isUndefined(e["p13nInner"]));t&&w.log("Directive / Is running in desktop app editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function p(){var e="true"===R.getQueryParamValue(O.EDITOR_V2);e&&w.log("Directive / Is running in editor"),b.dispatch(y.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function g(){var e=T.get(A.COOKIES.TOKEN)||null,t=R.getQueryParamValue(O.TOKEN)||e;b.dispatch(y.LOAD_DIRECTIVE,{projectToken:t})}function h(){var e=T.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(O.FORCE_AUDIENCES);if(n)t=n.split(",");else if(e)try{var i=C.parse(e);t=i.forceAudienceIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Audience IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function v(){var e=T.get(A.COOKIES.PREVIEW),t=[],n=R.getQueryParamValue(O.FORCE_VARIATIONS);if(n)t=n.split(",");else if(e)try{var i=C.parse(e);t=i.forceVariationIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};I.emitError(r,a)}t.length&&(w.log("Directive / Force Variation IDs:",t),b.dispatch(y.LOAD_DIRECTIVE,{forceVariationIds:t}))}function m(){var e=R.getQueryParamValue(O.FORCE_TRACKING);e&&b.dispatch(y.LOAD_DIRECTIVE,{forceTracking:e})}function _(){var e="OFF",t=R.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&w.setLogMatch(n[1])}w.setLogLevel(e)}var E=n(2),y=n(15),I=n(75),T=n(65),S=n(68).create,A=n(12),b=n(8),w=n(11),D=t.JSONParseError=S("JSONParseError"),R=n(111),C=n(16),N=n(67),O={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){_(),a(),i(),r(),o(),s(),l(),u(),c(),d(),f(),p(),g(),h(),v(),m()},t.setOptOut=function(e){e?(w.warn("Directive / Opting out"),T.set(A.COOKIES.OPT_OUT,"true",null,!0)):T.remove(A.COOKIES.OPT_OUT),b.dispatch(y.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(67),r=n(112);t.getLanguage=function(){return i.getNavigatorLanguage()},t.getQueryParams=r.getQueryParams,t.getQueryParamValue=r.getQueryParamValue,t.getUrl=function(){return i.getHref()}}),(function(e,t,n){var i=n(2),r=n(67);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1];return null},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(2),r=n(15),a=n(17),o=n(12),s=n(76),u=n(8);t.registerApiModule=function(e,t){i.isArray(t)&&(t=a.evaluate(t)),u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=a.get(e);n||a.register(e,t)},t.registerVisitorProfileProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?a.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var o;o=i.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var n=h.getPlugin(l.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):p.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(15),o=n(107),s=n(115),u=n(14),c=n(17),l=n(12),d=n(103),f=n(8),p=n(11),g=n(116),h=c.get("stores/plugins"),v=c.get("stores/view"),m=c.get("stores/view_data"),_=c.get("stores/event_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=v.getActiveViewStates();r.each(e,(function(e){var n=m.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=g.getTagValue(t)}catch(e){e instanceof g.Error?p.warn("Page / Ignoring unparseable tag",t,e):p.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(h.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=c.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,n){n&&t.setUserSuppliedViewTags(e.id,n),t.activateMultiple([e],n)},t.getViewsAndActivate=function(e){var n=m.getAllViewsForActivationType(e);t.activateMultiple(n)},t.activateMultiple=function(e,n){var a=[];r.each(e,(function(e){var r=v.getViewState(e.id),s=t.createViewTicket();if(r.isActive)return void(e.deactivationEnabled?t.hasValidStaticConditions(e,s)||t.deactivate(e):p.log("Not activating Page, already active ",t.description(e)));if(!t.hasValidStaticConditions(e,s))return void p.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions);a.push(e),t.setViewActiveState(e,!0),p.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:n});var u=_.getByPageId(e.id);i(u,!0)})),r.isEmpty(a)||o.emitViewsActivated({views:a})},t.deactivate=function(e){var n=v.getViewState(e.id);if(!n.isActive)return void p.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),p.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=_.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){if(r.isEmpty(e.staticConditions))return!0;var n=h.getAllPlugins(l.PluginTypes.viewMatchers);p.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),p.debug("Matching to current value:",t);var i=s.evaluate(e.staticConditions,(function(e){var i=e.type,r=n[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r.match(t,e)}));return p.groupEnd(),i},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),u.groupCollapsed('Condition / Applying operator "'+i+'" with args',c.stringify(r));try{n=d[i](r,t),u.debug("Condition / Result:",n)}finally{u.groupEnd()}return n}return n=t(e),u.debug("Condition / Evaluated:",c.stringify(e),":",n),n}var s=n(2),u=n(11),c=n(16),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){var i=n(12).PluginTypes,r=n(17),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);
if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(117),t.Error=n(118).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(68).create;t.Error=i("TagError")}),(function(e,t){}),(function(e,t,n){var i=n(17);i.register("env/jquery",n(121))}),(function(e,t,n){n(67);e.exports=n(122)}),(function(e,t,n){var i,r;/** @license
	 * jQuery JavaScript Library v1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-23T17:34Z
	 */
!(function(t,n){"object"==typeof e&&"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)})("undefined"!=typeof window?window:this,(function(n,a){function o(e){var t="length"in e&&e.length,n=K.type(e);return"function"!==n&&!K.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function s(e,t,n){if(K.isFunction(t))return K.grep(e,(function(e,i){return!!t.call(e,i,e)!==n}));if(t.nodeType)return K.grep(e,(function(e){return e===t!==n}));if("string"==typeof t){if(te.test(t))return K.filter(t,e,n);t=K.filter(t,e)}return K.grep(e,(function(e){return K.inArray(e,t)>=0!==n}))}function u(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function c(e){var t=ce[e]={};return K.each(e.match(ue)||[],(function(e,n){t[n]=!0})),t}function l(){ie.addEventListener?(ie.removeEventListener("DOMContentLoaded",d,!1),n.removeEventListener("load",d,!1)):(ie.detachEvent("onreadystatechange",d),n.detachEvent("onload",d))}function d(){(ie.addEventListener||"load"===event.type||"complete"===ie.readyState)&&(l(),K.ready())}function f(e,t,n){if(void 0===n&&1===e.nodeType){var i="data-"+t.replace(ge,"-$1").toLowerCase();if(n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:pe.test(n)?K.parseJSON(n):n)}catch(e){}K.data(e,t,n)}else n=void 0}return n}function p(e){var t;for(t in e)if(("data"!==t||!K.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function g(e,t,n,i){if(K.acceptData(e)){var r,a,o=K.expando,s=e.nodeType,u=s?K.cache:e,c=s?e[o]:e[o]&&o;if(c&&u[c]&&(i||u[c].data)||void 0!==n||"string"!=typeof t)return c||(c=s?e[o]=F.pop()||K.guid++:o),u[c]||(u[c]=s?{}:{toJSON:K.noop}),"object"!=typeof t&&"function"!=typeof t||(i?u[c]=K.extend(u[c],t):u[c].data=K.extend(u[c].data,t)),a=u[c],i||(a.data||(a.data={}),a=a.data),void 0!==n&&(a[K.camelCase(t)]=n),"string"==typeof t?(r=a[t],null==r&&(r=a[K.camelCase(t)])):r=a,r}}function h(e,t,n){if(K.acceptData(e)){var i,r,a=e.nodeType,o=a?K.cache:e,s=a?e[K.expando]:K.expando;if(o[s]){if(t&&(i=n?o[s]:o[s].data)){K.isArray(t)?t=t.concat(K.map(t,K.camelCase)):t in i?t=[t]:(t=K.camelCase(t),t=t in i?[t]:t.split(" ")),r=t.length;for(;r--;)delete i[t[r]];if(n?!p(i):!K.isEmptyObject(i))return}(n||(delete o[s].data,p(o[s])))&&(a?K.cleanData([e],!0):Y.deleteExpando||o!=o.window?delete o[s]:o[s]=null)}}}function v(){return!0}function m(){return!1}function _(){try{return ie.activeElement}catch(e){}}function E(e){var t=be.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function y(e,t){var n,i,r=0,a=typeof e.getElementsByTagName!==fe?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==fe?e.querySelectorAll(t||"*"):void 0;if(!a)for(a=[],n=e.childNodes||e;null!=(i=n[r]);r++)!t||K.nodeName(i,t)?a.push(i):K.merge(a,y(i,t));return void 0===t||t&&K.nodeName(e,t)?K.merge([e],a):a}function I(e){Ee.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function S(e){return e.type=(null!==K.find.attr(e,"type"))+"/"+e.type,e}function A(e){var t=Ve.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n,i=0;null!=(n=e[i]);i++)K._data(n,"globalEval",!t||K._data(t[i],"globalEval"))}function w(e,t){if(1===t.nodeType&&K.hasData(e)){var n,i,r,a=K._data(e),o=K._data(t,a),s=a.events;if(s){delete o.handle,o.events={};for(n in s)for(i=0,r=s[n].length;i<r;i++)K.event.add(t,n,s[n][i])}o.data&&(o.data=K.extend({},o.data))}}function D(e,t){var n,i,r;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!Y.noCloneEvent&&t[K.expando]){r=K._data(t);for(i in r.events)K.removeEvent(t,i,r.handle);t.removeAttribute(K.expando)}"script"===n&&t.text!==e.text?(S(t).text=e.text,A(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),Y.html5Clone&&e.innerHTML&&!K.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ee.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function R(e,t){var i,r=K(t.createElement(e)).appendTo(t.body),a=n.getDefaultComputedStyle&&(i=n.getDefaultComputedStyle(r[0]))?i.display:K.css(r[0],"display");return r.detach(),a}function C(e){var t=ie,n=He[e];return n||(n=R(e,t),"none"!==n&&n||(Ge=(Ge||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Ge[0].contentWindow||Ge[0].contentDocument).document,t.write(),t.close(),n=R(e,t),Ge.detach()),He[e]=n),n}function N(e,t){return{get:function(){var n=e();if(null!=n)return n?void delete this.get:(this.get=t).apply(this,arguments)}}}function O(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=tt.length;r--;)if(t=tt[r]+n,t in e)return t;return i}function x(e,t){for(var n,i,r,a=[],o=0,s=e.length;o<s;o++)i=e[o],i.style&&(a[o]=K._data(i,"olddisplay"),n=i.style.display,t?(a[o]||"none"!==n||(i.style.display=""),""===i.style.display&&me(i)&&(a[o]=K._data(i,"olddisplay",C(i.nodeName)))):(r=me(i),(n&&"none"!==n||!r)&&K._data(i,"olddisplay",r?n:K.css(i,"display"))));for(o=0;o<s;o++)i=e[o],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?a[o]||"":"none"));return e}function P(e,t,n){var i=Qe.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function L(e,t,n,i,r){for(var a=n===(i?"border":"content")?4:"width"===t?1:0,o=0;a<4;a+=2)"margin"===n&&(o+=K.css(e,n+ve[a],!0,r)),i?("content"===n&&(o-=K.css(e,"padding"+ve[a],!0,r)),"margin"!==n&&(o-=K.css(e,"border"+ve[a]+"Width",!0,r))):(o+=K.css(e,"padding"+ve[a],!0,r),"padding"!==n&&(o+=K.css(e,"border"+ve[a]+"Width",!0,r)));return o}function k(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,a=je(e),o=Y.boxSizing&&"border-box"===K.css(e,"boxSizing",!1,a);if(r<=0||null==r){if(r=ze(e,t,a),(r<0||null==r)&&(r=e.style[t]),qe.test(r))return r;i=o&&(Y.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+L(e,t,n||(o?"border":"content"),i,a)+"px"}function V(e,t,n,i){var r;if(K.isArray(t))K.each(t,(function(t,r){n||pt.test(e)?i(e,r):V(e+"["+("object"==typeof r?t:"")+"]",r,n,i)}));else if(n||"object"!==K.type(t))i(e,t);else for(r in t)V(e+"["+r+"]",t[r],n,i)}var F=[],M=F.slice,U=F.concat,B=F.push,G=F.indexOf,j={},z=j.toString,H=j.hasOwnProperty,Y={},q="1.11.3 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseJSON,-ajax/parseXML,-ajax/script,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-deprecated,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-offset,-dimensions",K=function(e,t){return new K.fn.init(e,t)},W=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,X=/^-ms-/,$=/-([\da-z])/gi,Q=function(e,t){return t.toUpperCase()};K.fn=K.prototype={jquery:q,constructor:K,selector:"",length:0,toArray:function(){return M.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:M.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(M.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:B,sort:F.sort,splice:F.splice},K.extend=K.fn.extend=function(){var e,t,n,i,r,a,o=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"==typeof o&&(c=o,o=arguments[s]||{},s++),"object"==typeof o||K.isFunction(o)||(o={}),s===u&&(o=this,s--);s<u;s++)if(null!=(r=arguments[s]))for(i in r)e=o[i],n=r[i],o!==n&&(c&&n&&(K.isPlainObject(n)||(t=K.isArray(n)))?(t?(t=!1,a=e&&K.isArray(e)?e:[]):a=e&&K.isPlainObject(e)?e:{},o[i]=K.extend(c,a,n)):void 0!==n&&(o[i]=n));return o},K.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray||function(e){return"array"===K.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==K.type(e)||e.nodeType||K.isWindow(e))return!1;try{if(e.constructor&&!H.call(e,"constructor")&&!H.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}if(Y.ownLast)for(t in e)return H.call(e,t);for(t in e);return void 0===t||H.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?j[z.call(e)]||"object":typeof e},globalEval:function(e){e&&K.trim(e)&&(n.execScript||function(e){n["eval"].call(n,e)})(e)},camelCase:function(e){return e.replace(X,"ms-").replace($,Q)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,a=e.length,s=o(e);if(n){if(s)for(;r<a&&(i=t.apply(e[r],n),i!==!1);r++);else for(r in e)if(i=t.apply(e[r],n),i===!1)break}else if(s)for(;r<a&&(i=t.call(e[r],r,e[r]),i!==!1);r++);else for(r in e)if(i=t.call(e[r],r,e[r]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(W,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?K.merge(n,"string"==typeof e?[e]:e):B.call(n,e)),n},inArray:function(e,t,n){var i;if(t){if(G)return G.call(t,e,n);for(i=t.length,n=n?n<0?Math.max(0,i+n):n:0;n<i;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;)e[r++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){for(var i,r=[],a=0,o=e.length,s=!n;a<o;a++)i=!t(e[a],a),i!==s&&r.push(e[a]);return r},map:function(e,t,n){var i,r=0,a=e.length,s=o(e),u=[];if(s)for(;r<a;r++)i=t(e[r],r,n),null!=i&&u.push(i);else for(r in e)i=t(e[r],r,n),null!=i&&u.push(i);return U.apply([],u)},guid:1,proxy:function(e,t){var n,i,r;if("string"==typeof t&&(r=e[t],t=e,e=r),K.isFunction(e))return n=M.call(arguments,2),i=function(){return e.apply(t||this,n.concat(M.call(arguments)))},i.guid=e.guid=e.guid||K.guid++,i},now:function(){return+new Date},support:Y}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(e,t){j["[object "+t+"]"]=t.toLowerCase()}));var J=/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
(function(e){function t(e,t,n,i){var r,a,o,s,u,c,d,p,g,h;if((t?t.ownerDocument||t:B)!==x&&O(t),t=t||x,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!i&&L){if(11!==s&&(r=_e.exec(e)))if(o=r[1]){if(9===s){if(a=t.getElementById(o),!a||!a.parentNode)return n;if(a.id===o)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(o))&&M(t,a)&&a.id===o)return n.push(a),n}else{if(r[2])return J.apply(n,t.getElementsByTagName(e)),n;if((o=r[3])&&I.getElementsByClassName)return J.apply(n,t.getElementsByClassName(o)),n}if(I.qsa&&(!k||!k.test(e))){if(p=d=U,g=t,h=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=b(e),(d=t.getAttribute("id"))?p=d.replace(ye,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=c.length;u--;)c[u]=p+f(c[u]);g=Ee.test(e)&&l(t.parentNode)||t,h=c.join(",")}if(h)try{return J.apply(n,g.querySelectorAll(h)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return D(e.replace(ue,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[U]=!0,e}function r(e){var t=x.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function a(e,t){for(var n=e.split("|"),i=e.length;i--;)T.attrHandle[n[i]]=t}function o(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||K)-(~e.sourceIndex||K);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i((function(t){return t=+t,i((function(n,i){for(var r,a=e([],n.length,t),o=a.length;o--;)n[r=a[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function f(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,a=j++;return t.first?function(t,n,a){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,a)}:function(t,n,o){var s,u,c=[G,a];if(o){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,o))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(u=t[U]||(t[U]={}),(s=u[i])&&s[0]===G&&s[1]===a)return c[2]=s[2];if(u[i]=c,c[2]=e(t,n,o))return!0}}}function g(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function h(e,n,i){for(var r=0,a=n.length;r<a;r++)t(e,n[r],i);return i}function v(e,t,n,i,r){for(var a,o=[],s=0,u=e.length,c=null!=t;s<u;s++)(a=e[s])&&(n&&!n(a,i,r)||(o.push(a),c&&t.push(s)));return o}function m(e,t,n,r,a,o){return r&&!r[U]&&(r=m(r)),a&&!a[U]&&(a=m(a,o)),i((function(i,o,s,u){var c,l,d,f=[],p=[],g=o.length,m=i||h(t||"*",s.nodeType?[s]:s,[]),_=!e||!i&&t?m:v(m,f,e,s,u),E=n?a||(i?e:g||r)?[]:o:_;if(n&&n(_,E,s,u),r)for(c=v(E,p),r(c,[],s,u),l=c.length;l--;)(d=c[l])&&(E[p[l]]=!(_[p[l]]=d));if(i){if(a||e){if(a){for(c=[],l=E.length;l--;)(d=E[l])&&c.push(_[l]=d);a(null,E=[],c,u)}for(l=E.length;l--;)(d=E[l])&&(c=a?ee(i,d):f[l])>-1&&(i[c]=!(o[c]=d))}}else E=v(E===o?E.splice(g,E.length):E),a?a(null,o,E,u):J.apply(o,E)}))}function _(e){for(var t,n,i,r=e.length,a=T.relative[e[0].type],o=a||T.relative[" "],s=a?1:0,u=p((function(e){return e===t}),o,!0),c=p((function(e){return ee(t,e)>-1}),o,!0),l=[function(e,n,i){var r=!a&&(i||n!==R)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r}];s<r;s++)if(n=T.relative[e[s].type])l=[p(g(l),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[U]){for(i=++s;i<r&&!T.relative[e[i].type];i++);return m(s>1&&g(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<i&&_(e.slice(s,i)),i<r&&_(e=e.slice(i)),i<r&&f(e))}l.push(n)}return g(l)}function E(e,n){var r=n.length>0,a=e.length>0,o=function(i,o,s,u,c){var l,d,f,p=0,g="0",h=i&&[],m=[],_=R,E=i||a&&T.find["TAG"]("*",c),y=G+=null==_?1:Math.random()||.1,I=E.length;for(c&&(R=o!==x&&o);g!==I&&null!=(l=E[g]);g++){if(a&&l){for(d=0;f=e[d++];)if(f(l,o,s)){u.push(l);break}c&&(G=y)}r&&((l=!f&&l)&&p--,i&&h.push(l))}if(p+=g,r&&g!==p){for(d=0;f=n[d++];)f(h,m,o,s);if(i){if(p>0)for(;g--;)h[g]||m[g]||(m[g]=$.call(u));m=v(m)}J.apply(u,m),c&&!i&&m.length>0&&p+n.length>1&&t.uniqueSort(u)}return c&&(G=y,R=_),h};return r?i(o):o}var y,I,T,S,A,b,w,D,R,C,N,O,x,P,L,k,V,F,M,U="sizzle"+1*new Date,B=e.document,G=0,j=0,z=n(),H=n(),Y=n(),q=function(e,t){return e===t&&(N=!0),0},K=1<<31,W={}.hasOwnProperty,X=[],$=X.pop,Q=X.push,J=X.push,Z=X.slice,ee=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",re=ie.replace("w","w#"),ae="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ae+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),ge={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+ae),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ve=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,_e=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ee=/[+~]/,ye=/'|\\/g,Ie=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var i="0x"+t-65536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Se=function(){O()};try{J.apply(X=Z.call(B.childNodes),B.childNodes),X[B.childNodes.length].nodeType}catch(e){J={apply:X.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}I=t.support={},A=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},O=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:B;return i!==x&&9===i.nodeType&&i.documentElement?(x=i,P=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Se,!1):n.attachEvent&&n.attachEvent("onunload",Se)),L=!A(i),I.attributes=r((function(e){return e.className="i",!e.getAttribute("className")})),I.getElementsByTagName=r((function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length})),I.getElementsByClassName=me.test(i.getElementsByClassName),I.getById=r((function(e){return P.appendChild(e).id=U,!i.getElementsByName||!i.getElementsByName(U).length})),I.getById?(T.find["ID"]=function(e,t){if("undefined"!=typeof t.getElementById&&L){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter["ID"]=function(e){var t=e.replace(Ie,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find["ID"],T.filter["ID"]=function(e){var t=e.replace(Ie,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find["TAG"]=I.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):I.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[r++];)1===n.nodeType&&i.push(n);return i}return a},T.find["CLASS"]=I.getElementsByClassName&&function(e,t){if(L)return t.getElementsByClassName(e)},V=[],k=[],(I.qsa=me.test(i.querySelectorAll))&&(r((function(e){P.appendChild(e).innerHTML="<a id='"+U+"'></a><select id='"+U+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&k.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||k.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+U+"-]").length||k.push("~="),e.querySelectorAll(":checked").length||k.push(":checked"),e.querySelectorAll("a#"+U+"+*").length||k.push(".#.+[+~]")})),r((function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&k.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")}))),(I.matchesSelector=me.test(F=P.matches||P.webkitMatchesSelector||P.mozMatchesSelector||P.oMatchesSelector||P.msMatchesSelector))&&r((function(e){I.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),V.push("!=",oe)})),k=k.length&&new RegExp(k.join("|")),V=V.length&&new RegExp(V.join("|")),t=me.test(P.compareDocumentPosition),M=t||me.test(P.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},q=t?function(e,t){if(e===t)return N=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!I.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===B&&M(B,e)?-1:t===i||t.ownerDocument===B&&M(B,t)?1:C?ee(C,e)-ee(C,t):0:4&n?-1:1)}:function(e,t){if(e===t)return N=!0,0;var n,r=0,a=e.parentNode,s=t.parentNode,u=[e],c=[t];if(!a||!s)return e===i?-1:t===i?1:a?-1:s?1:C?ee(C,e)-ee(C,t):0;if(a===s)return o(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;u[r]===c[r];)r++;return r?o(u[r],c[r]):u[r]===B?-1:c[r]===B?1:0},i):x},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==x&&O(e),n=n.replace(de,"='$1']"),I.matchesSelector&&L&&(!V||!V.test(n))&&(!k||!k.test(n)))try{var i=F.call(e,n);if(i||I.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,x,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==x&&O(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==x&&O(e);var n=T.attrHandle[t.toLowerCase()],i=n&&W.call(T.attrHandle,t.toLowerCase())?n(e,t,!L):void 0;return void 0!==i?i:I.attributes||!L?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(N=!I.detectDuplicates,C=!I.sortStable&&e.slice(0),e.sort(q),N){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return C=null,e},S=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=S(t);return n},T=t.selectors={cacheLength:50,createPseudo:i,match:ge,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ie,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(Ie,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ge["CHILD"].test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=b(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ie,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,(function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,n,i){return function(r){var a=t.attr(r,e);return null==a?"!="===n:!n||(a+="","="===n?a===i:"!="===n?a!==i:"^="===n?i&&0===a.indexOf(i):"*="===n?i&&a.indexOf(i)>-1:"$="===n?i&&a.slice(-i.length)===i:"~="===n?(" "+a.replace(se," ")+" ").indexOf(i)>-1:"|="===n&&(a===i||a.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var c,l,d,f,p,g,h=a!==o?"nextSibling":"previousSibling",v=t.parentNode,m=s&&t.nodeName.toLowerCase(),_=!u&&!s;if(v){if(a){for(;h;){for(d=t;d=d[h];)if(s?d.nodeName.toLowerCase()===m:1===d.nodeType)return!1;g=h="only"===e&&!g&&"nextSibling"}return!0}if(g=[o?v.firstChild:v.lastChild],o&&_){for(l=v[U]||(v[U]={}),c=l[e]||[],p=c[0]===G&&c[1],f=c[0]===G&&c[2],d=p&&v.childNodes[p];d=++p&&d&&d[h]||(f=p=0)||g.pop();)if(1===d.nodeType&&++f&&d===t){l[e]=[G,p,f];break}}else if(_&&(c=(t[U]||(t[U]={}))[e])&&c[0]===G)f=c[1];else for(;(d=++p&&d&&d[h]||(f=p=0)||g.pop())&&((s?d.nodeName.toLowerCase()!==m:1!==d.nodeType)||!++f||(_&&((d[U]||(d[U]={}))[e]=[G,f]),d!==t)););return f-=r,f===i||f%i===0&&f/i>=0}}},PSEUDO:function(e,n){var r,a=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return a[U]?a(n):a.length>1?(r=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?i((function(e,t){for(var i,r=a(e,n),o=r.length;o--;)i=ee(e,r[o]),e[i]=!(t[i]=r[o])})):function(e){return a(e,0,r)}):a}},pseudos:{not:i((function(e){var t=[],n=[],r=w(e.replace(ue,"$1"));return r[U]?i((function(e,t,n,i){for(var a,o=r(e,null,i,[]),s=e.length;s--;)(a=o[s])&&(e[s]=!(t[s]=a))})):function(e,i,a){return t[0]=e,r(t,null,a,n),t[0]=null,!n.pop()}})),has:i((function(e){return function(n){return t(e,n).length>0}})),contains:i((function(e){return e=e.replace(Ie,Te),function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}})),lang:i((function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(Ie,Te).toLowerCase(),function(t){var n;do if(n=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===P},focus:function(e){return e===x.activeElement&&(!x.hasFocus||x.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos["empty"](e)},header:function(e){return ve.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c((function(){return[0]})),last:c((function(e,t){return[t-1]})),eq:c((function(e,t,n){return[n<0?n+t:n]})),even:c((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:c((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:c((function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e})),gt:c((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}},T.pseudos["nth"]=T.pseudos["eq"];for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[y]=s(y);for(y in{submit:!0,reset:!0})T.pseudos[y]=u(y);return d.prototype=T.filters=T.pseudos,T.setFilters=new d,b=t.tokenize=function(e,n){var i,r,a,o,s,u,c,l=H[e+" "];if(l)return n?0:l.slice(0);for(s=e,u=[],c=T.preFilter;s;){i&&!(r=ce.exec(s))||(r&&(s=s.slice(r[0].length)||s),u.push(a=[])),i=!1,(r=le.exec(s))&&(i=r.shift(),a.push({value:i,type:r[0].replace(ue," ")}),s=s.slice(i.length));for(o in T.filter)!(r=ge[o].exec(s))||c[o]&&!(r=c[o](r))||(i=r.shift(),a.push({value:i,type:o,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):H(e,u).slice(0)},w=t.compile=function(e,t){var n,i=[],r=[],a=Y[e+" "];if(!a){for(t||(t=b(e)),n=t.length;n--;)a=_(t[n]),a[U]?i.push(a):r.push(a);a=Y(e,E(r,i)),a.selector=e}return a},D=t.select=function(e,t,n,i){var r,a,o,s,u,c="function"==typeof e&&e,d=!i&&b(e=c.selector||e);if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&I.getById&&9===t.nodeType&&L&&T.relative[a[1].type]){if(t=(T.find["ID"](o.matches[0].replace(Ie,Te),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(r=ge["needsContext"].test(e)?0:a.length;r--&&(o=a[r],!T.relative[s=o.type]);)if((u=T.find[s])&&(i=u(o.matches[0].replace(Ie,Te),Ee.test(a[0].type)&&l(t.parentNode)||t))){if(a.splice(r,1),e=i.length&&f(a),!e)return J.apply(n,i),n;break}}return(c||w(e,d))(i,t,!L,n,Ee.test(e)&&l(t.parentNode)||t),n},I.sortStable=U.split("").sort(q).join("")===U,I.detectDuplicates=!!N,O(),I.sortDetached=r((function(e){return 1&e.compareDocumentPosition(x.createElement("div"))})),r((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||a("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),I.attributes&&r((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||a("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),r((function(e){return null==e.getAttribute("disabled")}))||a(te,(function(e,t,n){var i;if(!n)return e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),t})(n);K.find=J,K.expr=J.selectors,K.expr[":"]=K.expr.pseudos,K.unique=J.uniqueSort,K.text=J.getText,K.isXMLDoc=J.isXML,K.contains=J.contains;var Z=K.expr.match.needsContext,ee=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,te=/^.[^:#\[\.,]*$/;K.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?K.find.matchesSelector(i,e)?[i]:[]:K.find.matches(e,K.grep(t,(function(e){return 1===e.nodeType})))},K.fn.extend({find:function(e){var t,n=[],i=this,r=i.length;if("string"!=typeof e)return this.pushStack(K(e).filter((function(){for(t=0;t<r;t++)if(K.contains(i[t],this))return!0})));for(t=0;t<r;t++)K.find(e,i[t],n);return n=this.pushStack(r>1?K.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&Z.test(e)?K(e):e||[],!1).length}});var ne,ie=n.document,re=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ae=K.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:re.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ne).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ie,!0)),ee.test(n[1])&&K.isPlainObject(t))for(n in t)K.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(i=ie.getElementById(n[2]),i&&i.parentNode){if(i.id!==n[2])return ne.find(e);this.length=1,this[0]=i}return this.context=ie,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?"undefined"!=typeof ne.ready?ne.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))};ae.prototype=K.fn,ne=K(ie);var oe=/^(?:parents|prev(?:Until|All))/,se={children:!0,contents:!0,next:!0,prev:!0};K.extend({dir:function(e,t,n){for(var i=[],r=e[t];r&&9!==r.nodeType&&(void 0===n||1!==r.nodeType||!K(r).is(n));)1===r.nodeType&&i.push(r),r=r[t];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),K.fn.extend({has:function(e){var t,n=K(e,this),i=n.length;return this.filter((function(){for(t=0;t<i;t++)if(K.contains(this,n[t]))return!0}))},closest:function(e,t){for(var n,i=0,r=this.length,a=[],o=Z.test(e)||"string"!=typeof e?K(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&K.find.matchesSelector(n,e))){a.push(n);break}return this.pushStack(a.length>1?K.unique(a):a)},index:function(e){return e?"string"==typeof e?K.inArray(this[0],K(e)):K.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return K.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:K.merge([],e.childNodes)}},(function(e,t){K.fn[e]=function(n,i){var r=K.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=K.filter(i,r)),this.length>1&&(se[e]||(r=K.unique(r)),oe.test(e)&&(r=r.reverse())),this.pushStack(r)}}));var ue=/\S+/g,ce={};K.Callbacks=function(e){e="string"==typeof e?ce[e]||c(e):K.extend({},e);var t,n,i,r,a,o,s=[],u=!e.once&&[],l=function(c){for(n=e.memory&&c,i=!0,a=o||0,o=0,r=s.length,t=!0;s&&a<r;a++)if(s[a].apply(c[0],c[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,s&&(u?u.length&&l(u.shift()):n?s=[]:d.disable())},d={add:function(){if(s){var i=s.length;!(function t(n){K.each(n,(function(n,i){var r=K.type(i);"function"===r?e.unique&&d.has(i)||s.push(i):i&&i.length&&"string"!==r&&t(i)}))})(arguments),t?r=s.length:n&&(o=i,l(n))}return this},remove:function(){return s&&K.each(arguments,(function(e,n){for(var i;(i=K.inArray(n,s,i))>-1;)s.splice(i,1),t&&(i<=r&&r--,i<=a&&a--)})),this},has:function(e){return e?K.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],r=0,this},disable:function(){return s=u=n=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!s||i&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):l(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred((function(n){K.each(t,(function(t,a){var o=K.isFunction(e[t])&&e[t];r[a[1]]((function(){var e=o&&o.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a[0]+"With"](this===i?n.promise():this,o?[e]:arguments)}))})),e=null})).promise()},promise:function(e){return null!=e?K.extend(e,i):i}},r={};return i.pipe=i.then,K.each(t,(function(e,a){var o=a[2],s=a[3];i[a[1]]=o.add,s&&o.add((function(){n=s}),t[1^e][2].disable,t[2][2].lock),r[a[0]]=function(){return r[a[0]+"With"](this===r?i:this,arguments),this},r[a[0]+"With"]=o.fireWith})),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,a=M.call(arguments),o=a.length,s=1!==o||e&&K.isFunction(e.promise)?o:0,u=1===s?e:K.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?M.call(arguments):r,i===t?u.notifyWith(n,i):--s||u.resolveWith(n,i)}};if(o>1)for(t=new Array(o),n=new Array(o),i=new Array(o);r<o;r++)a[r]&&K.isFunction(a[r].promise)?a[r].promise().done(c(r,i,a)).fail(u.reject).progress(c(r,n,t)):--s;return s||u.resolveWith(i,a),u.promise()}});var le;K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){if(e===!0?!--K.readyWait:!K.isReady){if(!ie.body)return setTimeout(K.ready);K.isReady=!0,e!==!0&&--K.readyWait>0||(le.resolveWith(ie,[K]),K.fn.triggerHandler&&(K(ie).triggerHandler("ready"),K(ie).off("ready")))}}}),K.ready.promise=function(e){if(!le)if(le=K.Deferred(),"complete"===ie.readyState)setTimeout(K.ready);else if(ie.addEventListener)ie.addEventListener("DOMContentLoaded",d,!1),n.addEventListener("load",d,!1);else{ie.attachEvent("onreadystatechange",d),n.attachEvent("onload",d);var t=!1;try{t=null==n.frameElement&&ie.documentElement}catch(e){}t&&t.doScroll&&!(function e(){if(!K.isReady){try{t.doScroll("left")}catch(t){return setTimeout(e,50)}l(),K.ready()}})()}return le.promise(e)};var de,fe="undefined";for(de in K(Y))break;Y.ownLast="0"!==de,Y.inlineBlockNeedsLayout=!1,K((function(){var e,t,n,i;n=ie.getElementsByTagName("body")[0],n&&n.style&&(t=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(t),typeof t.style.zoom!==fe&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",Y.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(i))})),(function(){var e=ie.createElement("div");if(null==Y.deleteExpando){Y.deleteExpando=!0;try{delete e.test}catch(e){Y.deleteExpando=!1}}e=null})(),K.acceptData=function(e){var t=K.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return(1===n||9===n)&&(!t||t!==!0&&e.getAttribute("classid")===t)};var pe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ge=/([A-Z])/g;K.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?K.cache[e[K.expando]]:e[K.expando],!!e&&!p(e)},data:function(e,t,n){return g(e,t,n)},removeData:function(e,t){return h(e,t)},_data:function(e,t,n){return g(e,t,n,!0)},_removeData:function(e,t){return h(e,t,!0)}}),K.fn.extend({data:function(e,t){var n,i,r,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(r=K.data(a),1===a.nodeType&&!K._data(a,"parsedAttrs"))){for(n=o.length;n--;)o[n]&&(i=o[n].name,0===i.indexOf("data-")&&(i=K.camelCase(i.slice(5)),f(a,i,r[i])));K._data(a,"parsedAttrs",!0)}return r}return"object"==typeof e?this.each((function(){K.data(this,e)})):arguments.length>1?this.each((function(){K.data(this,e,t)})):a?f(a,e,K.data(a,e)):void 0},removeData:function(e){return this.each((function(){K.removeData(this,e)}))}}),K.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=K._data(e,t),n&&(!i||K.isArray(n)?i=K._data(e,t,K.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=K.queue(e,t),i=n.length,r=n.shift(),a=K._queueHooks(e,t),o=function(){K.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete a.stop,r.call(e,o,a)),!i&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K._data(e,n)||K._data(e,n,{empty:K.Callbacks("once memory").add((function(){K._removeData(e,t+"queue"),K._removeData(e,n)}))})}}),K.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?K.queue(this[0],e):void 0===t?this:this.each((function(){var n=K.queue(this,e,t);K._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&K.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){K.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=K.Deferred(),a=this,o=this.length,s=function(){--i||r.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)n=K._data(a[o],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(s));return s(),r.promise(t)}});var he=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ve=["Top","Right","Bottom","Left"],me=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)},_e=K.access=function(e,t,n,i,r,a,o){var s=0,u=e.length,c=null==n;if("object"===K.type(n)){r=!0;for(s in n)K.access(e,t,s,n[s],!0,a,o)}else if(void 0!==i&&(r=!0,K.isFunction(i)||(o=!0),c&&(o?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(K(e),n)})),t))for(;s<u;s++)t(e[s],n,o?i:i.call(e[s],s,t(e[s],n)));return r?e:c?t.call(e):u?t(e[0],n):a},Ee=/^(?:checkbox|radio)$/i;!(function(){var e=ie.createElement("input"),t=ie.createElement("div"),n=ie.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",Y.leadingWhitespace=3===t.firstChild.nodeType,Y.tbody=!t.getElementsByTagName("tbody").length,Y.htmlSerialize=!!t.getElementsByTagName("link").length,Y.html5Clone="<:nav></:nav>"!==ie.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),Y.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,Y.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",(function(){Y.noCloneEvent=!1})),t.cloneNode(!0).click()),null==Y.deleteExpando){Y.deleteExpando=!0;try{delete t.test}catch(e){Y.deleteExpando=!1}}})(),(function(){var e,t,i=ie.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})t="on"+e,(Y[e+"Bubbles"]=t in n)||(i.setAttribute(t,"t"),Y[e+"Bubbles"]=i.attributes[t].expando===!1);i=null})();var ye=/^(?:input|select|textarea)$/i,Ie=/^key/,Te=/^(?:mouse|pointer|contextmenu)|click/,Se=/^(?:focusinfocus|focusoutblur)$/,Ae=/^([^.]*)(?:\.(.+)|)$/;K.event={global:{},add:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,g,h,v=K._data(e);if(v){for(n.handler&&(u=n,n=u.handler,r=u.selector),n.guid||(n.guid=K.guid++),(o=v.events)||(o=v.events={}),(l=v.handle)||(l=v.handle=function(e){return typeof K===fe||e&&K.event.triggered===e.type?void 0:K.event.dispatch.apply(l.elem,arguments)},l.elem=e),t=(t||"").match(ue)||[""],s=t.length;s--;)a=Ae.exec(t[s])||[],p=h=a[1],g=(a[2]||"").split(".").sort(),p&&(c=K.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,c=K.event.special[p]||{},d=K.extend({type:p,origType:h,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&K.expr.match.needsContext.test(r),namespace:g.join(".")},u),(f=o[p])||(f=o[p]=[],f.delegateCount=0,c.setup&&c.setup.call(e,i,g,l)!==!1||(e.addEventListener?e.addEventListener(p,l,!1):e.attachEvent&&e.attachEvent("on"+p,l))),c.add&&(c.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,d):f.push(d),K.event.global[p]=!0);e=null}},remove:function(e,t,n,i,r){var a,o,s,u,c,l,d,f,p,g,h,v=K.hasData(e)&&K._data(e);if(v&&(l=v.events)){for(t=(t||"").match(ue)||[""],c=t.length;c--;)if(s=Ae.exec(t[c])||[],p=h=s[1],g=(s[2]||"").split(".").sort(),p){for(d=K.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,f=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=a=f.length;a--;)o=f[a],!r&&h!==o.origType||n&&n.guid!==o.guid||s&&!s.test(o.namespace)||i&&i!==o.selector&&("**"!==i||!o.selector)||(f.splice(a,1),
o.selector&&f.delegateCount--,d.remove&&d.remove.call(e,o));u&&!f.length&&(d.teardown&&d.teardown.call(e,g,v.handle)!==!1||K.removeEvent(e,p,v.handle),delete l[p])}else for(p in l)K.event.remove(e,p+t[c],n,i,!0);K.isEmptyObject(l)&&(delete v.handle,K._removeData(e,"events"))}},trigger:function(e,t,i,r){var a,o,s,u,c,l,d,f=[i||ie],p=H.call(e,"type")?e.type:e,g=H.call(e,"namespace")?e.namespace.split("."):[];if(s=l=i=i||ie,3!==i.nodeType&&8!==i.nodeType&&!Se.test(p+K.event.triggered)&&(p.indexOf(".")>=0&&(g=p.split("."),p=g.shift(),g.sort()),o=p.indexOf(":")<0&&"on"+p,e=e[K.expando]?e:new K.Event(p,"object"==typeof e&&e),e.isTrigger=r?2:3,e.namespace=g.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:K.makeArray(t,[e]),c=K.event.special[p]||{},r||!c.trigger||c.trigger.apply(i,t)!==!1)){if(!r&&!c.noBubble&&!K.isWindow(i)){for(u=c.delegateType||p,Se.test(u+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),l=s;l===(i.ownerDocument||ie)&&f.push(l.defaultView||l.parentWindow||n)}for(d=0;(s=f[d++])&&!e.isPropagationStopped();)e.type=d>1?u:c.bindType||p,a=(K._data(s,"events")||{})[e.type]&&K._data(s,"handle"),a&&a.apply(s,t),a=o&&s[o],a&&a.apply&&K.acceptData(s)&&(e.result=a.apply(s,t),e.result===!1&&e.preventDefault());if(e.type=p,!r&&!e.isDefaultPrevented()&&(!c._default||c._default.apply(f.pop(),t)===!1)&&K.acceptData(i)&&o&&i[p]&&!K.isWindow(i)){l=i[o],l&&(i[o]=null),K.event.triggered=p;try{i[p]()}catch(e){}K.event.triggered=void 0,l&&(i[o]=l)}return e.result}},dispatch:function(e){e=K.event.fix(e);var t,n,i,r,a,o=[],s=M.call(arguments),u=(K._data(this,"events")||{})[e.type]||[],c=K.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(o=K.event.handlers.call(this,e,u),t=0;(r=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,a=0;(i=r.handlers[a++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(i.namespace)||(e.handleObj=i,e.data=i.data,n=((K.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,a,o=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(r=[],a=0;a<s;a++)i=t[a],n=i.selector+" ",void 0===r[n]&&(r[n]=i.needsContext?K(n,this).index(u)>=0:K.find(n,this,null,[u]).length),r[n]&&r.push(i);r.length&&o.push({elem:u,handlers:r})}return s<t.length&&o.push({elem:this,handlers:t.slice(s)}),o},fix:function(e){if(e[K.expando])return e;var t,n,i,r=e.type,a=e,o=this.fixHooks[r];for(o||(this.fixHooks[r]=o=Te.test(r)?this.mouseHooks:Ie.test(r)?this.keyHooks:{}),i=o.props?this.props.concat(o.props):this.props,e=new K.Event(a),t=i.length;t--;)n=i[t],e[n]=a[n];return e.target||(e.target=a.srcElement||ie),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,o.filter?o.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,a=t.button,o=t.fromElement;return null==e.pageX&&null!=t.clientX&&(i=e.target.ownerDocument||ie,r=i.documentElement,n=i.body,e.pageX=t.clientX+(r&&r.scrollLeft||n&&n.scrollLeft||0)-(r&&r.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||n&&n.scrollTop||0)-(r&&r.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&o&&(e.relatedTarget=o===e.target?t.toElement:o),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==_()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===_()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(K.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?K.event.trigger(r,null,t):K.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},K.removeEvent=ie.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var i="on"+t;e.detachEvent&&(typeof e[i]===fe&&(e[i]=null),e.detachEvent(i,n))},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?v:m):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),void(this[K.expando]=!0)):new K.Event(e,t)},K.Event.prototype={isDefaultPrevented:m,isPropagationStopped:m,isImmediatePropagationStopped:m,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=v,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=v,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=v,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,a=e.handleObj;return r&&(r===i||K.contains(i,r))||(e.type=a.origType,n=a.handler.apply(this,arguments),e.type=t),n}}})),Y.submitBubbles||(K.event.special.submit={setup:function(){return!K.nodeName(this,"form")&&void K.event.add(this,"click._submit keypress._submit",(function(e){var t=e.target,n=K.nodeName(t,"input")||K.nodeName(t,"button")?t.form:void 0;n&&!K._data(n,"submitBubbles")&&(K.event.add(n,"submit._submit",(function(e){e._submit_bubble=!0})),K._data(n,"submitBubbles",!0))}))},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&K.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!K.nodeName(this,"form")&&void K.event.remove(this,"._submit")}}),Y.changeBubbles||(K.event.special.change={setup:function(){return ye.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(K.event.add(this,"propertychange._change",(function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)})),K.event.add(this,"click._change",(function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),K.event.simulate("change",this,e,!0)}))),!1):void K.event.add(this,"beforeactivate._change",(function(e){var t=e.target;ye.test(t.nodeName)&&!K._data(t,"changeBubbles")&&(K.event.add(t,"change._change",(function(e){!this.parentNode||e.isSimulated||e.isTrigger||K.event.simulate("change",this.parentNode,e,!0)})),K._data(t,"changeBubbles",!0))}))},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return K.event.remove(this,"._change"),!ye.test(this.nodeName)}}),Y.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=K._data(i,t);r||i.addEventListener(e,n,!0),K._data(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=K._data(i,t)-1;r?K._data(i,t,r):(i.removeEventListener(e,n,!0),K._removeData(i,t))}}})),K.fn.extend({on:function(e,t,n,i,r){var a,o;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(a in e)this.on(a,t,n,e[a],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=m;else if(!i)return this;return 1===r&&(o=i,i=function(e){return K().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=K.guid++)),this.each((function(){K.event.add(this,e,i,n,t)}))},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,K(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=m),this.each((function(){K.event.remove(this,e,n,t)}))},trigger:function(e,t){return this.each((function(){K.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return K.event.trigger(e,t,n,!0)}});var be="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",we=/ jQuery\d+="(?:null|\d+)"/g,De=new RegExp("<(?:"+be+")[\\s/>]","i"),Re=/^\s+/,Ce=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Ne=/<([\w:]+)/,Oe=/<tbody/i,xe=/<|&#?\w+;/,Pe=/<(?:script|style|link)/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,ke=/^$|\/(?:java|ecma)script/i,Ve=/^true\/(.*)/,Fe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Me={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:Y.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ue=E(ie),Be=Ue.appendChild(ie.createElement("div"));Me.optgroup=Me.option,Me.tbody=Me.tfoot=Me.colgroup=Me.caption=Me.thead,Me.th=Me.td,K.extend({clone:function(e,t,n){var i,r,a,o,s,u=K.contains(e.ownerDocument,e);if(Y.html5Clone||K.isXMLDoc(e)||!De.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(Be.innerHTML=e.outerHTML,Be.removeChild(a=Be.firstChild)),!(Y.noCloneEvent&&Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(i=y(a),s=y(e),o=0;null!=(r=s[o]);++o)i[o]&&D(r,i[o]);if(t)if(n)for(s=s||y(e),i=i||y(a),o=0;null!=(r=s[o]);o++)w(r,i[o]);else w(e,a);return i=y(a,"script"),i.length>0&&b(i,!u&&y(e,"script")),i=s=r=null,a},buildFragment:function(e,t,n,i){for(var r,a,o,s,u,c,l,d=e.length,f=E(t),p=[],g=0;g<d;g++)if(a=e[g],a||0===a)if("object"===K.type(a))K.merge(p,a.nodeType?[a]:a);else if(xe.test(a)){for(s=s||f.appendChild(t.createElement("div")),u=(Ne.exec(a)||["",""])[1].toLowerCase(),l=Me[u]||Me._default,s.innerHTML=l[1]+a.replace(Ce,"<$1></$2>")+l[2],r=l[0];r--;)s=s.lastChild;if(!Y.leadingWhitespace&&Re.test(a)&&p.push(t.createTextNode(Re.exec(a)[0])),!Y.tbody)for(a="table"!==u||Oe.test(a)?"<table>"!==l[1]||Oe.test(a)?0:s:s.firstChild,r=a&&a.childNodes.length;r--;)K.nodeName(c=a.childNodes[r],"tbody")&&!c.childNodes.length&&a.removeChild(c);for(K.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(a));for(s&&f.removeChild(s),Y.appendChecked||K.grep(y(p,"input"),I),g=0;a=p[g++];)if((!i||K.inArray(a,i)===-1)&&(o=K.contains(a.ownerDocument,a),s=y(f.appendChild(a),"script"),o&&b(s),n))for(r=0;a=s[r++];)ke.test(a.type||"")&&n.push(a);return s=null,f},cleanData:function(e,t){for(var n,i,r,a,o=0,s=K.expando,u=K.cache,c=Y.deleteExpando,l=K.event.special;null!=(n=e[o]);o++)if((t||K.acceptData(n))&&(r=n[s],a=r&&u[r])){if(a.events)for(i in a.events)l[i]?K.event.remove(n,i):K.removeEvent(n,i,a.handle);u[r]&&(delete u[r],c?delete n[s]:typeof n.removeAttribute!==fe?n.removeAttribute(s):n[s]=null,F.push(r))}}}),K.fn.extend({text:function(e){return _e(this,(function(e){return void 0===e?K.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ie).createTextNode(e))}),null,e,arguments.length)},append:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.appendChild(e)}}))},prepend:function(){return this.domManip(arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=T(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return this.domManip(arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},remove:function(e,t){for(var n,i=e?K.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||K.cleanData(y(n)),n.parentNode&&(t&&K.contains(n.ownerDocument,n)&&b(y(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&K.cleanData(y(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&K.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return K.clone(this,e,t)}))},html:function(e){return _e(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(we,""):void 0;if("string"==typeof e&&!Pe.test(e)&&(Y.htmlSerialize||!De.test(e))&&(Y.leadingWhitespace||!Re.test(e))&&!Me[(Ne.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ce,"<$1></$2>");try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(K.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,(function(t){e=this.parentNode,K.cleanData(y(this)),e&&e.replaceChild(t,this)})),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=U.apply([],e);var n,i,r,a,o,s,u=0,c=this.length,l=this,d=c-1,f=e[0],p=K.isFunction(f);if(p||c>1&&"string"==typeof f&&!Y.checkClone&&Le.test(f))return this.each((function(n){var i=l.eq(n);p&&(e[0]=f.call(this,n,i.html())),i.domManip(e,t)}));if(c&&(s=K.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(a=K.map(y(s,"script"),S),r=a.length;u<c;u++)i=s,u!==d&&(i=K.clone(i,!0,!0),r&&K.merge(a,y(i,"script"))),t.call(this[u],i,u);if(r)for(o=a[a.length-1].ownerDocument,K.map(a,A),u=0;u<r;u++)i=a[u],ke.test(i.type||"")&&!K._data(i,"globalEval")&&K.contains(o,i)&&(i.src?K._evalUrl&&K._evalUrl(i.src):K.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Fe,"")));s=n=null}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){K.fn[e]=function(e){for(var n,i=0,r=[],a=K(e),o=a.length-1;i<=o;i++)n=i===o?this:this.clone(!0),K(a[i])[t](n),B.apply(r,n.get());return this.pushStack(r)}}));var Ge,je,ze,He={},Ye=/^margin/,qe=new RegExp("^("+he+")(?!px)[a-z%]+$","i"),Ke=/^(top|right|bottom|left)$/;n.getComputedStyle?(je=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):n.getComputedStyle(e,null)},ze=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==o||K.contains(e.ownerDocument,e)||(o=K.style(e,t)),qe.test(o)&&Ye.test(t)&&(i=s.width,r=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=i,s.minWidth=r,s.maxWidth=a)),void 0===o?o:o+""}):ie.documentElement.currentStyle&&(je=function(e){return e.currentStyle},ze=function(e,t,n){var i,r,a,o,s=e.style;return n=n||je(e),o=n?n[t]:void 0,null==o&&s&&s[t]&&(o=s[t]),qe.test(o)&&!Ke.test(t)&&(i=s.left,r=e.runtimeStyle,a=r&&r.left,a&&(r.left=e.currentStyle.left),s.left="fontSize"===t?"1em":o,o=s.pixelLeft+"px",s.left=i,a&&(r.left=a)),void 0===o?o:o+""||"auto"}),(function(){function e(){var e,t,i,r;t=ie.getElementsByTagName("body")[0],t&&t.style&&(e=ie.createElement("div"),i=ie.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",t.appendChild(i).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a=o=!1,u=!0,n.getComputedStyle&&(a="1%"!==(n.getComputedStyle(e,null)||{}).top,o="4px"===(n.getComputedStyle(e,null)||{width:"4px"}).width,r=e.appendChild(ie.createElement("div")),r.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",r.style.marginRight=r.style.width="0",e.style.width="1px",u=!parseFloat((n.getComputedStyle(r,null)||{}).marginRight),e.removeChild(r)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",r=e.getElementsByTagName("td"),r[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===r[0].offsetHeight,s&&(r[0].style.display="",r[1].style.display="none",s=0===r[0].offsetHeight),t.removeChild(i))}var t,i,r,a,o,s,u;t=ie.createElement("div"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],i=r&&r.style,i&&(i.cssText="float:left;opacity:.5",Y.opacity="0.5"===i.opacity,Y.cssFloat=!!i.cssFloat,t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===t.style.backgroundClip,Y.boxSizing=""===i.boxSizing||""===i.MozBoxSizing||""===i.WebkitBoxSizing,K.extend(Y,{reliableHiddenOffsets:function(){return null==s&&e(),s},boxSizingReliable:function(){return null==o&&e(),o},pixelPosition:function(){return null==a&&e(),a},reliableMarginRight:function(){return null==u&&e(),u}}))})(),K.swap=function(e,t,n,i){var r,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];r=n.apply(e,i||[]);for(a in t)e.style[a]=o[a];return r};var We=/alpha\([^)]*\)/i,Xe=/opacity\s*=\s*([^)]*)/,$e=/^(none|table(?!-c[ea]).+)/,Qe=new RegExp("^("+he+")(.*)$","i"),Je=new RegExp("^([+-])=("+he+")","i"),Ze={position:"absolute",visibility:"hidden",display:"block"},et={letterSpacing:"0",fontWeight:"400"},tt=["Webkit","O","Moz","ms"];K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=ze(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":Y.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,o,s=K.camelCase(t),u=e.style;if(t=K.cssProps[s]||(K.cssProps[s]=O(u,s)),o=K.cssHooks[t]||K.cssHooks[s],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:u[t];if(a=typeof n,"string"===a&&(r=Je.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(K.css(e,t)),a="number"),null!=n&&n===n&&("number"!==a||K.cssNumber[s]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),!(o&&"set"in o&&void 0===(n=o.set(e,n,i)))))try{u[t]=n}catch(e){}}},css:function(e,t,n,i){var r,a,o,s=K.camelCase(t);return t=K.cssProps[s]||(K.cssProps[s]=O(e.style,s)),o=K.cssHooks[t]||K.cssHooks[s],o&&"get"in o&&(a=o.get(e,!0,n)),void 0===a&&(a=ze(e,t,i)),"normal"===a&&t in et&&(a=et[t]),""===n||n?(r=parseFloat(a),n===!0||K.isNumeric(r)?r||0:a):a}}),K.each(["height","width"],(function(e,t){K.cssHooks[t]={get:function(e,n,i){if(n)return $e.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,Ze,(function(){return k(e,t,i)})):k(e,t,i)},set:function(e,n,i){var r=i&&je(e);return P(e,n,i?L(e,t,i,Y.boxSizing&&"border-box"===K.css(e,"boxSizing",!1,r),r):0)}}})),Y.opacity||(K.cssHooks.opacity={get:function(e,t){return Xe.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=K.isNumeric(t)?"alpha(opacity="+100*t+")":"",a=i&&i.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===K.trim(a.replace(We,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||i&&!i.filter)||(n.filter=We.test(a)?a.replace(We,r):a+" "+r)}}),K.cssHooks.marginRight=N(Y.reliableMarginRight,(function(e,t){if(t)return K.swap(e,{display:"inline-block"},ze,[e,"marginRight"])})),K.each({margin:"",padding:"",border:"Width"},(function(e,t){K.cssHooks[e+t]={expand:function(n){for(var i=0,r={},a="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ve[i]+t]=a[i]||a[i-2]||a[0];return r}},Ye.test(e)||(K.cssHooks[e+t].set=P)})),K.fn.extend({css:function(e,t){return _e(this,(function(e,t,n){var i,r,a={},o=0;if(K.isArray(t)){for(i=je(e),r=t.length;o<r;o++)a[t[o]]=K.css(e,t[o],!1,i);return a}return void 0!==n?K.style(e,t,n):K.css(e,t)}),e,t,arguments.length>1)},show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){me(this)?K(this).show():K(this).hide()}))}}),K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,(function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)}}))},(function(){var e,t,n,i,r;t=ie.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=t.getElementsByTagName("a")[0],n=ie.createElement("select"),r=n.appendChild(ie.createElement("option")),e=t.getElementsByTagName("input")[0],i.style.cssText="top:1px",Y.getSetAttribute="t"!==t.className,Y.style=/top/.test(i.getAttribute("style")),Y.hrefNormalized="/a"===i.getAttribute("href"),Y.checkOn=!!e.value,Y.optSelected=r.selected,Y.enctype=!!ie.createElement("form").enctype,n.disabled=!0,Y.optDisabled=!r.disabled,e=ie.createElement("input"),e.setAttribute("value",""),Y.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),Y.radioValue="t"===e.value})();var nt=/\r/g;K.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=K.isFunction(e),this.each((function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,K(this).val()):e,null==r?r="":"number"==typeof r?r+="":K.isArray(r)&&(r=K.map(r,(function(e){return null==e?"":e+""}))),t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}));if(r)return t=K.valHooks[r.type]||K.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(nt,""):null==n?"":n)}}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value");return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,a="select-one"===e.type||r<0,o=a?null:[],s=a?r+1:i.length,u=r<0?s:a?r:0;u<s;u++)if(n=i[u],(n.selected||u===r)&&(Y.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!K.nodeName(n.parentNode,"optgroup"))){if(t=K(n).val(),a)return t;o.push(t)}return o},set:function(e,t){for(var n,i,r=e.options,a=K.makeArray(t),o=r.length;o--;)if(i=r[o],K.inArray(K.valHooks.option.get(i),a)>=0)try{i.selected=n=!0}catch(e){i.scrollHeight}else i.selected=!1;return n||(e.selectedIndex=-1),r}}}}),K.each(["radio","checkbox"],(function(){K.valHooks[this]={set:function(e,t){if(K.isArray(t))return e.checked=K.inArray(K(e).val(),t)>=0}},Y.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}));var it,rt,at=K.expr.attrHandle,ot=/^(?:checked|selected)$/i,st=Y.getSetAttribute,ut=Y.input;K.fn.extend({attr:function(e,t){return _e(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){K.removeAttr(this,e)}))}}),K.extend({attr:function(e,t,n){var i,r,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===fe?K.prop(e,t,n):(1===a&&K.isXMLDoc(e)||(t=t.toLowerCase(),i=K.attrHooks[t]||(K.expr.match.bool.test(t)?rt:it)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=K.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void K.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,a=t&&t.match(ue);if(a&&1===e.nodeType)for(;n=a[r++];)i=K.propFix[n]||n,K.expr.match.bool.test(n)?ut&&st||!ot.test(n)?e[i]=!1:e[K.camelCase("default-"+n)]=e[i]=!1:K.attr(e,n,""),e.removeAttribute(st?n:i)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),rt={set:function(e,t,n){return t===!1?K.removeAttr(e,n):ut&&st||!ot.test(n)?e.setAttribute(!st&&K.propFix[n]||n,n):e[K.camelCase("default-"+n)]=e[n]=!0,n}},K.each(K.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=at[t]||K.find.attr;at[t]=ut&&st||!ot.test(t)?function(e,t,i){var r,a;return i||(a=at[t],at[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,at[t]=a),r}:function(e,t,n){if(!n)return e[K.camelCase("default-"+t)]?t.toLowerCase():null}})),ut&&st||(K.attrHooks.value={set:function(e,t,n){return K.nodeName(e,"input")?void(e.defaultValue=t):it&&it.set(e,t,n)}}),st||(it={set:function(e,t,n){var i=e.getAttributeNode(n);if(i||e.setAttributeNode(i=e.ownerDocument.createAttribute(n)),i.value=t+="","value"===n||t===e.getAttribute(n))return t}},at.id=at.name=at.coords=function(e,t,n){var i;if(!n)return(i=e.getAttributeNode(t))&&""!==i.value?i.value:null},K.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);if(n&&n.specified)return n.value},set:it.set},K.attrHooks.contenteditable={set:function(e,t,n){it.set(e,""!==t&&t,n)}},K.each(["width","height"],(function(e,t){K.attrHooks[t]={set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}}}))),Y.style||(K.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var ct=/^(?:input|select|textarea|button|object)$/i,lt=/^(?:a|area)$/i;K.fn.extend({prop:function(e,t){return _e(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return e=K.propFix[e]||e,this.each((function(){try{this[e]=void 0,delete this[e]}catch(e){}}))}}),K.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,a,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return a=1!==o||!K.isXMLDoc(e),a&&(t=K.propFix[t]||t,r=K.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=K.find.attr(e,"tabindex");return t?parseInt(t,10):ct.test(e.nodeName)||lt.test(e.nodeName)&&e.href?0:-1}}}}),Y.hrefNormalized||K.each(["href","src"],(function(e,t){K.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),Y.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){K.propFix[this.toLowerCase()]=this})),Y.enctype||(K.propFix.enctype="encoding");var dt=/[\t\r\n\f]/g;K.fn.extend({addClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c="string"==typeof e&&e;if(K.isFunction(e))return this.each((function(t){K(this).addClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):" ")){for(a=0;r=t[a++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o=K.trim(i),n.className!==o&&(n.className=o)}return this},removeClass:function(e){var t,n,i,r,a,o,s=0,u=this.length,c=0===arguments.length||"string"==typeof e&&e;if(K.isFunction(e))return this.each((function(t){K(this).removeClass(e.call(this,t,this.className))}));if(c)for(t=(e||"").match(ue)||[];s<u;s++)if(n=this[s],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(dt," "):"")){for(a=0;r=t[a++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");o=e?K.trim(i):"",n.className!==o&&(n.className=o)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):K.isFunction(e)?this.each((function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)})):this.each((function(){if("string"===n)for(var t,i=0,r=K(this),a=e.match(ue)||[];t=a[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else n!==fe&&"boolean"!==n||(this.className&&K._data(this,"__className__",this.className),this.className=this.className||e===!1?"":K._data(this,"__className__")||"")}))},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(dt," ").indexOf(t)>=0)return!0;return!1}}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),(function(e,t){K.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),K.fn.extend({wrapAll:function(e){if(K.isFunction(e))return this.each((function(t){K(this).wrapAll(e.call(this,t))}));if(this[0]){var t=K(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e})).append(this)}return this},wrapInner:function(e){return K.isFunction(e)?this.each((function(t){K(this).wrapInner(e.call(this,t))})):this.each((function(){var t=K(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=K.isFunction(e);return this.each((function(n){K(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(){return this.parent().each((function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)})).end()}}),K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!Y.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||K.css(e,"display"))},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)};var ft=/%20/g,pt=/\[\]$/,gt=/\r?\n/g,ht=/^(?:submit|button|image|reset|file)$/i,vt=/^(?:input|select|textarea|keygen)/i;K.param=function(e,t){var n,i=[],r=function(e,t){t=K.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,(function(){r(this.name,this.value)}));else for(n in e)V(n,e[n],t,r);return i.join("&").replace(ft,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=K.prop(this,"elements");return e?K.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!K(this).is(":disabled")&&vt.test(this.nodeName)&&!ht.test(e)&&(this.checked||!Ee.test(e))})).map((function(e,t){var n=K(this).val();return null==n?null:K.isArray(n)?K.map(n,(function(e){return{name:t.name,value:e.replace(gt,"\r\n")}})):{name:t.name,value:n.replace(gt,"\r\n")}})).get()}}),K.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ie;var i=ee.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=K.buildFragment([e],t,r),r&&r.length&&K(r).remove(),K.merge([],i.childNodes))},i=[],r=function(){return K}.apply(t,i),!(void 0!==r&&(e.exports=r));var mt=n.jQuery,_t=n.$;return K.noConflict=function(e){return n.$===K&&(n.$=_t),e&&n.jQuery===K&&(n.jQuery=mt),K},typeof a===fe&&(n.jQuery=n.$=K),K}))}),(function(e,t,n){var i=n(67),r="optimizelyDataApi";t.registerFunction=function(e,t){var n=i.getGlobal(r);n||(n={},
i.setGlobal(r,n)),n[e]||(n[e]=t)},t.getFunction=function(e){return i.getGlobal(r)[e]}}),(function(e,t,n){var i=n(66),r=n(11),a=n(84);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);if(i.write('<script id="'+o+'" src="'+e+'"></script>'),!i.querySelector("#"+o))throw new Error("Document.write failed to append script");n&&n()}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var s=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:s})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){function i(){var e=null;b.isNumber(e)&&0===ge.getCount()?(W.log("Activating after delay of",e,"ms because no Experiments are running"),H.dispatch(N.SET_RUM_DATA,{data:{activateDfd:!0}}),setTimeout(x.emitActivateEvent,e)):x.emitActivateEvent()}function r(e){be.handleError(e.data.error,e.data.metadata)}function a(){b.isArray(window.optimizely)&&(window.optimizely=b.filter(window.optimizely,(function(e){var t=!0;return!Ae.push(e,t)})))}function o(e){return b.each(e,(function(e,t){K.setItem(t,e)})),e}function s(){var e=fe.getAccountId(),t="https://a3013110282.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+e+"."),n="/client_storage/a"+e+".html";oe.subscribe(K.setItem);var i=oe.fetchAll().then((function(e){var t=Se.getCanonicalOrigins();if(t){var n=oe.getXDomainUserId(e,t);n&&(W.log("Syncing cross-origin visitor randomId:",n),ae.persistVisitorId({randomId:n}))}return e})).then(o);return Z.all([oe.load(t,n),i.then((function(){ae.loadForeignData()})).then((function(){W.log("Loaded visitor data from foreign origins"),x.emitOriginsSyncedEvent()}),(function(e){W.debug("Ignored error syncing foreign data (expected if waitForOriginSync used:",e.message),W.debug("Enqueuing sync to happen after visitorId set."),H.dispatch(N.ADD_CLEANUP_FN,{lifecycle:B.Lifecycle.postVisitorProfileLoad,cleanupFn:x.emitOriginsSyncedEvent})}))])}function u(e){var t=_e.getVisitorProfile();return ae.populateEagerVisitorData(e,t)}function c(e,t,n){e=e||[];var i=me.getAllPlugins(B.PluginTypes.visitorProfileProviders),r=fe.getGlobalHoldbackThreshold(),a=_e.getVisitorProfile();ae.populateLazyVisitorData(i,a);var o=Ie.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=_e.getVisitorProfile();if(t){var c=Te.getVariationIdMap();s=c[t.id]}var l={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&F.isPageIdRelevant(t)?b.map(n,(function(e){return F.createTicket(b.extend({},l,{pageId:e}))})):[F.createTicket(l)]}function l(e){return{bucketingId:Ie.getBucketingId(),preferredLayerId:Te.getPreferredLayerMap()[e.id]}}function d(e){var t=ge.getAllByPageIds(e),n=de.getForceVariationIds(),i=de.getForceAudienceIds(),r=b.reduce(t,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=pe.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});W.log("Deciding Campaigns/Experiments for Page(s)",e);var a=b.map(r.groups,Y.description).join(", ");W.log("Groups:",a);var o=b.map(r.individual,q.description).join(", ");W.log("Campaigns/Experiments not in Groups (by Campaign id):",o);var s=b.map(r.groups,b.partial(f,n,i,e))||[],u=b.map(r.individual,(function(t){var r=b.filter(t.pageIds,b.partial(b.includes,e));return p(n,i,r,t)})),c=s.concat(u);return Z.all(c).then((function(t){var n=b.filter(t,(function(e){return!!e}));return W.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",b.map(n,q.description).join(", ")),n}))}function f(e,n,i,r){try{var a=l(r),o=F.decideGroup(r,a);if(o.reason)return W.debug("Not activating Group",Y.description(r),"; reason:",o.reason),Z.resolve();var s=ge.get(o.layerId);if(!s)return W.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),Z.resolve();var u=b.filter(s.pageIds,b.partial(b.includes,i));return b.isEmpty(u)?(W.debug("Not activating Group",Y.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),Z.resolve()):t.decideAndExecuteLayerASAP(e,n,u,s)}catch(e){return W.error("Error getting decision for Group",Y.description(r),"; ",e),Z.reject(e)}}function p(e,t,n,i){return new Z(function(r,a){try{m(i,e,t,n,(function(a){b.each(a,(function(r){var a=r.pageId?[r.pageId]:n;W.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),g(i,e,t,a,r)})),r(i)}))}catch(e){W.error("Error getting decision for Campaign: "+q.description(i),e),a(e)}})}function g(e,t,n,i,r){var a=q.description(e);W.log("Activating Campaign",a,"on Page(s)",i);var o=I(e,r,t,n),s=!(!t.length&&!n.length),u=S(e,o,s)||[],c=A(u,i);if(h(c,e,o,i),b.forEach(i,(function(){O.trackDecisionEvent(o,r)})),o.error)throw o.error;return F.isInCohort(o)?void v(c,e,o,i):void W.log("Not activating Campaign: "+q.description(e)+"; not in the cohort because:",o.reason)}function h(e,t,n,i){var r=q.description(t);W.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),b.forEach(e,C.prepareAction)}function v(e,t,n,i){var r=q.description(t);return W.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),Z.all(b.map(e,(function(e){return C.executePreparedAction(e).then(b.partial(x.emitActionAppliedEvent,e))}))).then((function(){W.log("All page actions for",n,"applied:",e),x.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){W.warn("Error evaluating page actions for decision",n,"because:",e)}))}function m(e,t,n,i,r){if(t.length||n.length)return void r(c([],void 0,i));var a=q.relatedAudienceIds(e),o=b.reduce(a,(function(e,t){var n=ue.get(t);return n&&e.push(n),e}),[]);y(o,q.getActivationTimeout(e),(function(){var t=c(o,e,i);b.map(t,(function(t){_(t,o,e)})),r(t)}))}function _(e,t,n){var i=b.map(e.audienceIds,ue.get.bind(ue)),r=b.filter(t,(function(t){return!b.includes(e.audienceIds,t.id)}));W.log("When deciding Campaign",q.description(n),"visitor is in audiences:",E(i),"and not in audiences:",E(r))}function E(e){var t=[];return b.each(e,(function(e){t.push(e.name,e)})),t}function y(e,t,n){var i={},r=me.getAllPlugins(B.PluginTypes.audienceMatchers);b.each(e,(function(e){var t=P.requiredAudienceFields(e,r);b.each(t,(function(e){i[e]=!0}))}));var a=b.reduce(i,(function(e,t,n){if(b.isUndefined(ae.getAttribute(n))){var i=ae.getPendingAttributeValue(n);b.isUndefined(i)||e.push(i)}return e}),[]);if(0===a.length)return n();var o=[].concat(e),s=ee.firstToResolve(b.map(a,(function(e){return Z.resolve(e).then((function(){var e=_e.getVisitorProfile();if(o=b.filter(o,(function(t){return b.isUndefined(P.isInAudience(e,t,r))})),!b.isEmpty(o))throw new Error("At least one audience is still pending")}))})));Z.race([s,new Z(function(e,n){setTimeout(n,t)})]).then((function(){W.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){W.log("Activating Campaign after timeout on Audiences",e),n()}))}function I(e,t,n,i){var r,a=q.description(e);return n.length?r=F.getDummyLayerDecision(e,n):(i.length&&(W.log("Applying force audienceIds:",i,"to Campaign",a),t=b.cloneDeep(t),t.audienceIds=i),r=F.decideLayer(e,t)),W.log("Recording decision for Campaign",a,t,"->",r),q.recordLayerDecision(e.id,t,r),r.variationId&&r.experimentId&&ae.updateVariationIdMap(e.id,r.experimentId,r.variationId),e.groupId&&ae.updatePreferredLayerMap(e.groupId,e.id),x.emitLayerDecided({layer:e,decisionTicket:t,decision:r}),r}function T(e){var t=le.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();H.dispatch(N.CLEAR_CLEANUP_FN,{lifecycle:e})}}function S(e,t,n){var i=q.description(e),r="NOT applying changes for Campaign";if(!n&&fe.isGlobalHoldback())return W.log(r,i,"(visitor is in global holdback)"),null;if(t.isLayerHoldback)return W.log(r,i,"(visitor is in layer holdback)"),null;if(!t.experimentId||!t.variationId)return W.log(r,i,"(visitor is not eligible for any Experiments)"),null;var a=[].concat(ce.getLayerActions(t.layerId)||[],ce.getExperimentActions(t.experimentId)||[],ce.getExperimentVariationActions(t.experimentId,t.variationId)||[]);return W.log("Got Actions for Campaign:",i,a),a}function A(e,t){return b.filter(e,(function(e){return b.isUndefined(e.pageId)||b.includes(t,e.pageId)}))}var b=n(2),w=n(68).create,D=t.ActivationCodeError=w("ActivationCodeError"),R=t.ProjectJSError=w("ProjectJSError"),C=n(126),N=n(15),O=n(100),x=n(107),P=n(130),L=n(65),k=n(75),V=n(14),F=n(131),M=n(17),U=n(66),B=n(12),G=n(76),j=n(101),z=n(136),H=n(8),Y=n(135),q=n(104),K=n(72).LocalStorage,W=n(11),X=n(137),$=n(74),Q=n(113),J=n(82),Z=n(77).Promise,ee=n(138),te=n(105),ne=n(106),ie=n(128),re=n(114),ae=n(64),oe=n(81),M=n(17),se=M.get("stores/session"),ue=M.get("stores/audience_data"),ce=M.get("stores/action_data"),le=M.get("stores/cleanup"),de=M.get("stores/directive"),fe=M.get("stores/global"),pe=M.get("stores/group_data"),ge=M.get("stores/layer_data"),he=M.get("stores/layer"),ve=M.get("stores/pending_events"),me=M.get("stores/plugins"),_e=M.get("stores/visitor"),Ee=M.get("stores/view_data"),ye=M.get("stores/view"),Ie=M.get("stores/visitor_id"),Te=M.get("stores/visitor_bucketing"),Se=M.get("stores/xdomain"),Ae=n(86),be=n(139),we=1e3,De=!1,Re=1e3,Ce=t;t.initialize=function(e){if(G.on({filter:{type:"error"},handler:r}),H.dispatch(N.DATA_LOADED,{data:e.clientData}),W.log("Initialized with DATA:",e.clientData),a(),de.isDisabled()||de.shouldOptOut())return void W.log("Controller / Is disabled");U.isReady()?H.dispatch(N.SET_DOMCONTENTLOADED):U.addReadyHandler((function(){H.dispatch(N.SET_DOMCONTENTLOADED)}));var n=!1,o=L.get(B.COOKIES.REDIRECT);if(o){var u=o.match(/^(\d+)\|(.*)/);if(u){W.debug("Found legacy redirect data:",o);var c=u[1],l=u[2];H.dispatch(N.INITIALIZE_STATE,{effectiveVariationId:c,effectiveReferrer:l}),n=!0}}$.time("projectJS");var d=fe.getProjectJS();if(b.isFunction(d))try{z.apply(d)}catch(e){W.error("Error while executing projectJS: ",e),k.emitError(new R(e))}$.timeEnd("projectJS"),b.each(e.plugins||[],(function(e){try{e(Q)}catch(e){k.emitInternalError(e)}})),b.each(fe.getPlugins()||[],(function(e){try{z.apply(e,[Q])}catch(e){k.emitError(e)}})),n||te.load();var f=G.on({filter:{type:"lifecycle",name:"activated"},handler:function(){_e.observe(ae.persistVisitorProfile),he.observe(ae.persistLayerStates),se.observe(ae.persistSessionState),ve.observe(X.persistPendingEvents),Te.observe(ae.persistVisitorBucketingStore),G.off(f)}});G.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),G.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var p=X.getPendingEvents();if(p&&(H.dispatch(N.LOAD_PENDING_EVENTS,{events:p}),X.retryPendingEvents(p)),G.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),x.emitInitializedEvent(),!de.shouldActivate())return Z.resolve();var g=[],h=s();if(g.push(h),Se.getCanonicalOrigins()){var v=ne.makeTimeoutPromise(Re);Z.race([h,v])["catch"]((function(e){W.error("Failed to initialize xDomain storage: ",e)})).then(i)["catch"](be.handleError)}else i();return Z.all(g)},t.activate=function(){try{var e=[];W.log("Activated client"),b.forEach(ye.getActiveViewStates(),(function(e){re.deactivate(Ee.get(e.id))})),T(B.Lifecycle.preActivate);var t=V.now();H.dispatch(N.ACTIVATE,{activationId:String(t),activationTimestamp:t});var n=Ee.getAll();re.registerViews(n),ae.setId(ae.getIdFromCookies()),e.push(O.trackPostRedirectDecisionEvent()),H.dispatch(N.MERGE_VARIATION_ID_MAP,{variationIdMap:ae.getVariationIdMap()}),H.dispatch(N.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:ae.getPreferredLayerMap()}),T(B.Lifecycle.postVisitorProfileLoad),e.push(u(me.getAllPlugins(B.PluginTypes.visitorProfileProviders)).then((function(){W.log("Populated visitor profile")})));var i=c(),r=F.decideGlobal(i);W.log("Made global decision",i,"->",r),H.dispatch(N.RECORD_GLOBAL_DECISION,r);var a=O.trackClientActivation();a?W.log("Tracked activation event",a):W.log("Not tracking activation event");var o=Ce.setUpViewActivation(n);return De?re.activateMultiple(o):b.each(o,(function(e){re.activateMultiple([e])})),T(B.Lifecycle.postViewsActivated),T(B.Lifecycle.postActivate),x.emitActivatedEvent(),Z.all(e).then((function(){G.emit({type:j.TYPES.LIFECYCLE,name:"activateDeferredDone"}),W.log("All immediate effects of activation resolved")}),k.emitError)}catch(e){return k.emitError(e),Z.reject(e)}},Ce.setUpViewActivation=function(e){var t=[];return b.each(e,(function(e){re.shouldTriggerImmediately(e.activationType)||!e.activationType?t.push(e):e.activationType===B.ViewActivationTypes.callback?(W.debug("Setting up conditional activation for Page",re.description(e)),Ce.activateViewOnCallback(e)):e.activationType===B.ViewActivationTypes.polling?(W.debug("Setting up polling activation for Page",re.description(e)),J.pollFor(b.partial(z.apply,e.activationCode),null,b.partial(ie.isTimedOut,V.now())).then((function(){re.activateMultiple([e])}))["catch"]((function(t){W.warn("Failed to activate view ",e,t)}))):e.activationType!==B.ViewActivationTypes.manual&&x.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},Ce.activateViewOnCallback=function(e){var t=function(t){var n=b.extend({},t,{pageName:e.apiName,type:"page"});Ae.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return ye.isViewActive(e.id)}});try{z.apply(e.activationCode,[t,n])}catch(t){var i=new D("("+t.toString()+") in activationCode for "+re.description(e));k.emitError(i,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,n=e.data.views,i=b.map(n,"id");try{if(!Ie.getBucketingId())throw new Error("View activated with no visitorId set");var r=d(i)["catch"](k.emitError);return t=Z.all(b.map(n,(function(e){var t=function(){re.parseViewTags(e);var t=O.trackViewActivation(e);t?W.log("Tracked activation for Page",re.description(e),t):W.log("Not Tracking activation for Page",re.description(e))};return U.isReady()?Z.resolve(t()):J.pollFor(U.isReady,we).then(t)}))),Z.all([r,t])}catch(e){k.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=ce.getAllActionIdsByPageId(t.id);b.each(n,(function(e){var n=ce.getActionState(e);n&&(b.each(n,(function(e){if(e.cancel)try{e.cancel()}catch(e){W.error("Controller / Error cancelling change observation upon deactivation of page.",e)}})),H.dispatch(N.REMOVE_ACTION_STATE,{actionId:e}),W.debug("Controller / Cancelled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={get:Ae.get,push:Ae.push},t=window.optimizely;b.isArray(t)&&b.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.decideAndExecuteLayerASAP=p}),(function(e,t,n){function i(e,t,n){var i=h.getActionState(t.id);if(!i)return void d.warn("Action / Attempted to prepare change for inactive action: ",t);var r=h.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void d.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:_.create(e,t,n)};l.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void d.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var c=v.getChange(t);if(!c){var l="Change with id "+t+" is absent";return o.length&&(l+=" but listed as a dependency for "+o[o.length-1]),void d.warn(l)}e[t]=new f(function(l){var g=a.map(c.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(c.src){var m="change_"+c.src,_=s.makeAsyncRequest(m,(function(){return p.addScriptAsync("https://cdn.optimizely.com/public/3013110282/data"+c.src,(function(){s.resolveRequest(m)}))})).then((function(){c=v.getChange(c.id),i(c,n,u.now())}));g.push(_)}f.all(g).then((function(){var e=u.now(),i=h.getChangeApplier(t,n.id);return i?(d.debug("Action / Applying change:",c),i.apply().then((function(){d.debug("Action / Applied change for the first time in "+(u.now()-e)+"ms:",c),l()}))):(d.debug("Action / Not applying change ",t," - No changeApplier found."),void l())}))["catch"]((function(e){d.error("Action / Failed to apply change:",c,e),l()}))})}return e[t]}var a=n(2),o=n(15),s=n(109),u=n(14),c=n(17),l=n(8),d=n(11),f=n(77).Promise,p=n(124),g=c.get("stores/global"),h=c.get("stores/action_data"),v=c.get("stores/change_data"),m=c.get("stores/session"),_=n(127),E=n(128);E.initialize(),t.prepareAction=function(e){d.debug("Action / Preparing:",e),l.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:m.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:u.now(),activationId:g.getActivationId()});var t=u.now();a.forEach(e.changeSet,(function(n){var r=v.getChange(n.id);r||(l.dispatch(o.ADD_CHANGE,n),r=v.getChange(n.id)),r.src||i(r,e,t)}))},t.executePreparedAction=function(e){d.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){return r(t,n.id,e,[])}));return f.all(n).then((function(){d.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(78).Promise,r=n(14),a=n(17),o=a.get("stores/plugins"),s=n(12),u=n(11);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var c=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!c)throw new Error("Unrecognized change type "+e.type);return new c(e,a)}catch(e){u.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(129),a=n(17).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t){var n={};return o.each(e,(function(e){if(o.isArray(e))o.extend(n,i(e,t));else if(o.isObject(e)){var r=t[e.type];r&&o.each(r.fieldsNeeded,(function(e){n[e]=!0}))}})),n}function r(e,t){return function(n){var i=n.type,r=t[i];if(!r)throw new Error("Audience / No matcher found for type="+i);if(r.fieldsNeeded)for(var a,s,c=0;c<r.fieldsNeeded.length;c++)if(a=r.fieldsNeeded[c],s=e[a],o.isUndefined(s))return void u.debug("Audience / Required field",a,"for type",i,"has no value");u.debug("Matching condition:",n,"to values:",e);var l=r.match(e,n);if(!o.isUndefined(l))return!!l}}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(115),u=n(11);t.isInAudience=function(e,t,n){var i=r(e,n);u.groupCollapsed("Checking audience",t.name,t.id,t),u.debug("Visitor Profile:",e);var o;try{var c=s.evaluate(t.conditions,i)}catch(e){o=e,c=!1}return u.groupEnd(),o&&u.error("Audience / Error evaluating audience",a(t),":",o),u.log("Is "+(c?"in":"NOT in")+" audience:",a(t)),c},t.requiredAudienceFields=function(e,t){return o.keys(i(e.conditions,t))}}),(function(e,t,n){function i(e,t){d.debug("Decision / Deciding layer for group: ",m.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)d.debug("Decision / Using preferredLayerMap to select layer for group:",m.description(e)),n=r;else try{n=u.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",c="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new h(c);return{layerId:null,reason:c}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=E.getPlugin(l.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=E.getAllPlugins(l.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return g.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),u=n(132),c=n(133),l=n(12),d=n(11),f=n(35),p=n(75),g=n(130),h=n(134).DecisionError,v=n(104),m=n(135),_=n(17),E=_.get("stores/plugins"),y=_.get("stores/global"),I=_.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:y.getActivationId()}),t},t.decideGlobal=function(e){var t=u.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){d.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new h("No experiments in layer.");try{if(r.decideLayer){d.debug("Decision / Using decider's custom decideLayer.");var l=r.decideLayer(e,t);n=l.experiment,i=l.variation}else d.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=c.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof h?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",p.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(d.log("Decision / Applying force variation:",i.variationId,"to Campaign",v.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(d.log("No variation matches ids:",t,"in Campaign",v.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=I.get(e.layerId);return!(f.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(55),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(132),a=n(134).DecisionError,o=n(115),s=n(11),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||o.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,o,c){if(!e.variations||0===e.variations.length)throw new a('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new a('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=o;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var p=i.find(e.variations,{id:l});if(p)return s.debug("Decision / Selected variation:",p),p;throw new a('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new a("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(69),Logger=__webpack_require__(11),di=__webpack_require__(17),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(75),a=n(12),o=n(16),s=n(72).LocalStorage,u=n(11),c=n(84),l=n(17),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),n(81).setItem(f,e)}catch(e){u.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){c.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||u.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(77).Promise,r=n(2);t.firstToResolve=function(e){return new i(function(t){r.each(e,(function(e){i.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){var i=n(2),r=n(88),a=n(68).BaseError,o=n(14),s=n(17),u=n(66),c=n(11),l=n(67),d=n(84),f=s.get("stores/global"),p="https://errors.client.optimizely.com";t.handleError=function(e,t){function n(){return d.request({url:p+"/log",method:"POST",data:v,contentType:"application/json"}).then((function(e){c.log("Error Monitor / Logged error with response: ",e)}),(function(e){c.error("Failed to log error, response was: ",e)}))}var s=e.name||"Error",g=e.message,h=e.stack||null;e instanceof a&&(g instanceof Error?(g=g.message,h=e.message.stack):h=null);var v={timestamp:o.now(),clientEngine:r.ENGINE,clientVersion:r.VERSION,accountId:f.getAccountId(),projectId:f.getProjectId(),errorClass:s,message:g,stacktrace:h};t&&(v.metadata=i.reduce(t,(function(e,t,n){return i.isObject(t)||e.push({key:n,value:String(t)}),e}),[])),c.error("Logging error",v),u.isLoaded()?n():l.addEventListener("load",n)}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){u.on({filter:{type:o.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),u.on({filter:{type:o.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),u.on({filter:{type:o.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),u.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(101),s=n(67),u=n(76),c=n(17),l=c.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=s.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){s.getGlobal(d)||s.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(142))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(144)),e.registerAudienceMatcher("behavior",n(146))}}),(function(e,t,n){var i=n(145);e.exports={provides:"events",isTransient:!0,getter:["stores/visitor_events",function(e){return i.getEvents(e)}]}}),(function(e,t,n){var i=n(2),r=n(7);t.getEvents=function(e){var t=r.getEvents(),n=[].concat.apply([],i.values(e.getForeignEvents())),a=[].concat.apply([],i.values(e.getForeignEventQueues()));return r.mergeAllEvents([t,n,a])}}),(function(e,t,n){var i=n(2),r=n(147),a=n(148),o=n(16);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=o.parse(t.value);return n=i.isUndefined(s.version)?[s]:r.buildFromSpecV0_1(s),i.every(n,(function(t){return a.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),c=s.groupField(r);return d.extend(i,{select:[{field:c}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return d.extend(i,{orderBy:[{field:[u.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(d.isUndefined(e))throw new Error("rule is undefined");if(!d.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(d.isArray(e["filter"])?d.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+f.stringify(e["reduce"]["aggregator"])+" to unsorted items"),d.isArray(e["sort"])?d.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var u=o(e["direction"]);u&&t.push("sort["+r+"]: "+u)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],u="aggregator "+(f.stringify(a)||String(a)),c=e["reduce"]["n"],l="index "+(f.stringify(c)||String(c));d.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+u+" is unknown"),d.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+u+" is impossible to use because no values have been picked")),"nth"===a?((!d.isNumber(c)||isNaN(c)||parseInt(c,10)!==c||c<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+u+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):d.isUndefined(c)||t.push("reduce: "+l+" is defined (not mandated by "+u+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(f.stringify(e)||String(e));
if(!d.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u={FIELDS:n(54).FIELDS,FIELDS_V0_2:n(54).FIELDS_V0_2},c=n(148),l=n(11),d=n(2),f=n(16);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return d.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,[c.generateAlias(e,t)]},s.groupField=function(e){return d.isString(e)&&(e=[e]),e=e||c.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),d.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[u.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return d.isArray(e)?{op:"between",args:[{field:[u.FIELDS.TIME]},{value:e[0]||+new Date(0)},{value:e[1]||+new Date}]}:(l.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return d.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",DEFAULT_BEHAVIOR:"default_behavior",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return d.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||d.includes(d.values(u.FIELDS),e)||(n=[u.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+f.stringify(e));var t=s.fieldComparison("gt",u.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",u.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",u.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else l.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&d.each(e.filters,(function(r){var a,o,c=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",u.FIELDS.TIME),o=s.aggregateField("max",u.FIELDS.TIME)),a){var l=c,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,c,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+f.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:d.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return d.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(d.each(e["sort"],(function(e){d.includes(["ascending","descending"],e["direction"])&&(d.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=d.filter(d.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&d.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return d.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[c.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?d.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):d.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(d.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return d.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[u.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(f.stringify(e)||String(e));if(!d.isArray(e)||!d.every(e,d.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=d.keys(u.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),d.includes(r,e[0])?n+" is not supported here":d.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(f.stringify(e)||String(e)),i="value "+(f.stringify(t)||String(t));if(!d.isString(e)&&!d.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!d.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!d.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(d.isArray(t)&&2===t.length&&d.isNumber(t[0])&&d.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(d.isString(t)||d.isArray(t)&&2===t.length&&d.isString(t[0])&&d.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!d.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(12),a=n(11),o=a.log.bind(a),s=n(14),u=n(57).getFieldValue,c=n(16),l=t;l.getValueOrDefault=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);var i=u(e,t);return"undefined"==typeof i&&(i=n),i},l.maybeTrimLowerCase=function(e){return"string"==typeof e?e.trim().toLowerCase():e},l.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},l.DEFAULT_FIELD=["*"],l.booleanOperators={eq:function(e){var t=i.map(e,l.maybeTrimLowerCase);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],l.maybeTrimLowerCase);return i.includes(t,l.maybeTrimLowerCase(e[0]))},between:function(e){return e[1]<=e[0]&&e[0]<=e[2]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},l.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},l.aggregateOperators={sum:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=0,r=0;r<t.length;r++)i+=l.getValueOrDefault(t[r],n,0);return i},avg:function(e,t){if(0===t.length)return 0;for(var n=e[0]||l.DEFAULT_FIELD,i=0,r=0;r<t.length;r++)i+=l.getValueOrDefault(t[r],n,0);return i/t.length},max:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=Number.NEGATIVE_INFINITY,r=0;r<t.length;r++)i=Math.max(i,l.getValueOrDefault(t[r],n,Number.NEGATIVE_INFINITY));return i},min:function(e,t){for(var n=e[0]||l.DEFAULT_FIELD,i=Number.POSITIVE_INFINITY,r=0;r<t.length;r++)i=Math.min(i,l.getValueOrDefault(t[r],n,Number.POSITIVE_INFINITY));return i},count:function(e,t){return t.length}},l.functions={now:function(){return s.now()}},l.getScalarOperator=function(e){return e in l.booleanOperators?l.booleanOperators[e]:e in l.arithmeticOperators?l.arithmeticOperators[e]:null},l.operate=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l.getValueOrDefault(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in l.functions?l.functions[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+c.stringify(t));var n=l.getScalarOperator(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(l.operate,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},l.groupBy=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],p=l.getValueOrDefault(o,f),g=f.join(".");u[g]=p,s.push(encodeURIComponent(g)+"="+encodeURIComponent(c.stringify(p)))}var h=s.join("&");n.hasOwnProperty(h)||(n[h]={fieldValues:u,events:[]}),n[h].events.push(o)}return n},l.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")},l.aggregate=function(e,t){var n={};return i.each(t,(function(t,i){n[i]={};for(var r=0;r<e.length;r++){var o=e[r],s=o["op"];if(s in l.aggregateOperators){var u=(o["args"]&&o["args"][0]||{})["field"]||l.DEFAULT_FIELD,c=l.generateAlias(s,u),d=l.aggregateOperators[s]([u],t.events);n[i][c]=d}else a.error("Rules","Unknown aggregate operator "+s)}})),n},l.project=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},l.orderBy=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],u=l.getValueOrDefault(t,s,0),c=l.getValueOrDefault(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)},l.rewrite=function(e){function t(e,o){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(o&&e["op"]in l.aggregateOperators){var s=(e["args"]&&e["args"][0]||{})["field"]||l.DEFAULT_FIELD,u=l.generateAlias(e["op"],s);return u in r||(n.push({op:e["op"],args:e["args"]}),r[u]=!0),{field:[u]}}for(var c=[],d=e["args"]||[],f=0;f<d.length;f++)c[f]=t(d[f],o);return{op:e["op"],args:c}}var n=[],r={},o={};e.hasOwnProperty(l.clause.WHERE)&&(o[l.clause.WHERE]=t(e[l.clause.WHERE],!1)),e.hasOwnProperty(l.clause.HAVING)&&(o[l.clause.HAVING]=t(e[l.clause.HAVING],!0)),(e.hasOwnProperty(l.clause.AGGREGATE)||n.length>0)&&(o[l.clause.AGGREGATE]=(e[l.clause.AGGREGATE]||[]).concat(n));for(var s=[l.clause.GROUP_BY,l.clause.ORDER_BY,l.clause.SELECT,l.clause.OFFSET,l.clause.LIMIT],u=0;u<s.length;u++)e.hasOwnProperty(s[u])&&(o[s[u]]=e[s[u]]);return e.hasOwnProperty(l.clause.FROM)&&(o[l.clause.FROM]=l.rewrite(e[l.clause.FROM])),o},l.verify=function(e,t){t=t||0;var n=[];if(e.hasOwnProperty(l.clause.WHERE)?e[l.clause.WHERE]["op"]?e[l.clause.WHERE]["op"]in l.booleanOperators||n.push("Non-boolean WHERE clause operator"):n.push("Missing WHERE clause operator"):n.push("Missing WHERE clause"),e.hasOwnProperty(l.clause.HAVING)&&(e[l.clause.HAVING]["op"]?e[l.clause.HAVING]["op"]in l.booleanOperators||n.push("Non-boolean HAVING clause operator"):n.push("Missing HAVING clause operator")),e.hasOwnProperty(l.clause.GROUP_BY)&&!e.hasOwnProperty(l.clause.AGGREGATE)&&n.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(l.clause.SELECT)){var r=e[l.clause.SELECT];if(i.isArray(r))for(var a=0;a<r.length;a++)r[a]["op"]&&r[a]["op"]in l.aggregateOperators&&n.push('In SELECT clause, aggregate operator "'+r[a]["op"]+'" specified in selector at index '+a);else n.push("SELECT clause must be an array")}if(e.hasOwnProperty(l.clause.OFFSET)){var o=e[l.clause.OFFSET];(!i.isNumber(o)||Number(o)<0||Number(o)!==Math.floor(Number(o)))&&n.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(l.clause.LIMIT)){var s=e[l.clause.LIMIT];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&n.push("LIMIT must be a non-negative integer")}return t>0&&(n=i.map(n,(function(e){return"Sub-rule "+t+": "+e}))),e.hasOwnProperty(l.clause.FROM)&&(n=n.concat(l.verify(e[l.clause.FROM],t+1))),n},l.select=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return l.operate(t,e)}))}))},l.executeRecursively=function(e,t){var n=t;if(e.hasOwnProperty(l.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[l.clause.FROM]),n=l.executeRecursively(e[l.clause.FROM],n),a.debug("Results after FROM:",n)),a.debug("Evaluating WHERE clause:",e[l.clause.WHERE]),n=i.filter(n,(function(t){return l.operate(t,e[l.clause.WHERE])})),a.debug("Results after WHERE:",n),e.hasOwnProperty(l.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[l.clause.AGGREGATE]);var r=l.groupBy(e[l.clause.GROUP_BY],n),o=l.aggregate(e[l.clause.AGGREGATE],r);n=l.project(r,o),a.debug("Results after AGGREGATE:",n)}e.hasOwnProperty(l.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[l.clause.HAVING]),n=i.filter(n,(function(t){return l.operate(t,e[l.clause.HAVING])})),a.debug("Results after HAVING:",n)),e.hasOwnProperty(l.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[l.clause.ORDER_BY]),n=l.orderBy(e[l.clause.ORDER_BY],n),a.debug("Results after ORDER_BY:",n));var s=0;e.hasOwnProperty(l.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[l.clause.OFFSET]),s=Number(e[l.clause.OFFSET]));var u;return e.hasOwnProperty(l.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[l.clause.LIMIT]),u=s+Number(e[l.clause.LIMIT])),(s>0||!i.isUndefined(u))&&(n=n.slice(s,u),a.debug("Results after OFFSET/LIMIT:",n)),e.hasOwnProperty(l.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[l.clause.SELECT]),n=l.select(e[l.clause.SELECT],n),a.debug("Results after SELECT:",n)),n},l.execute=function(e,t){e=l.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",t);var n=l.verify(e);if(n.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+n.join("\n"));var i=l.executeRecursively(e,t);return a.debug("Rule result:",i),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),i},l.isSatisfied=function(e,t){try{return l.execute(e,t).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(150))}}),(function(e,t,n){var i=n(151),r=n(145),a=n(147),o=n(2),s=n(16);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity","stores/visitor_events","stores/visitor",function(e,t,n){var u=e.getProjectId(),c=o.filter(o.map(t.getCustomBehavioralAttributes(u),(function(e){try{return{id:e.id,granularity:i.GRANULARITY.ALL,rule:a.buildFromSpecV0_2(s.parse(e.rule_json))}}catch(e){return}}))),l=r.getEvents(n);return i.evaluate(c,l)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*u.MILLIS_IN_A_DAY;n-=n%u.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(11),o={FIELDS:n(54).FIELDS},s=n(148),u=n(147);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var u=0;u<e.length;u++)o[e[u].id]=e[u].defaultValue;return o}var c=i(n),l=r(n,60);for(u=0;u<e.length;u++){var d=e[u],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=s.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(153)),e.registerAudienceMatcher("first_session",n(154))}}),(function(e,t,n){var i=n(2),r=n(145),a=n(57).getFieldValue,o=n(54);e.exports={provides:"first_session",shouldTrack:!0,getter:["stores/visitor_events",function(e){var t=r.getEvents(e);if(t&&t.length>0){var n=a(t[0],[o.FIELDS.SESSION_ID]);return i.every(t,(function(e){return e[o.FIELDS.SESSION_ID]===n}))}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(156))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(2),l=n(145),d=n(147),f=n(148);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(158)),e.registerVisitorProfileProvider(n(163)),e.registerVisitorProfileProvider(n(164)),e.registerAudienceMatcher("browser_version",n(165))}}),(function(e,t,n){var i=n(159);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(67),a=n(160),o=n(8),s=n(17),u=n(15),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=a.parseUA(r.getUserAgent()),o.dispatch(u.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){function i(e){if(e=(e||"").toLowerCase(),e in s)return e;var t=a.keys(s);return a.find(t,(function(t){var n=s[t];return a.includes(n,e)}))||"unknown"}var r=n(161),a=n(2);t.parseUA=function(e){var t=new r(e),n=t.getBrowser(),a=t.getOS(),s=t.getDevice(),c=(a.name||"unknown").toLowerCase(),l=o(s.type,c);return{browser:{id:i(n.name),version:n.version},platform:{name:c,version:a.version},device:{model:u[s.model]||"unknown",type:s.type||"unknown",isMobile:l}}};var o=function(e,t){if(a.includes(["mobile","tablet"],e))return!0;var n=["android","blackberry","ios","windows phone"];return!!a.includes(n,t)},s={gc:["chrome","chromium","silk","yandex","maxthon"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},u={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.12",s="",u="?",c="function",l="undefined",d="object",f="string",p="major",g="model",h="name",v="type",m="vendor",_="version",E="architecture",y="console",I="mobile",T="tablet",S="smarttv",A="wearable",b="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(){for(var e,t,n,i,r,o,s,u=0,f=arguments;u<f.length&&!o;){var p=f[u],g=f[u+1];if(typeof e===l){e={};for(i in g)g.hasOwnProperty(i)&&(r=g[i],typeof r===d?e[r[0]]=a:e[r]=a)}for(t=n=0;t<p.length&&!o;)if(o=p[t++].exec(this.getUA()))for(i=0;i<g.length;i++)s=o[++n],r=g[i],typeof r===d&&r.length>0?2==r.length?typeof r[1]==c?e[r[0]]=r[1].call(this,s):e[r[0]]=r[1]:3==r.length?typeof r[1]!==c||r[1].exec&&r[1].test?e[r[0]]=s?s.replace(r[1],r[2]):a:e[r[0]]=s?r[1].call(this,s,r[2]):a:4==r.length&&(e[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):a):e[r]=s?s:a;u+=2}return e},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===u?a:n}else if(w.has(t[n],e))return n===u?a:n;return e}},R={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},C={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,_],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],_],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],_],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[h,_],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],_],[/(edge)\/((\d+)?[\w\.]+)/i],[h,_],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],_],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],_],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],_],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[_,[h,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],_],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[_,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[h,_],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],_],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],_],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],_],[/;fbav\/([\w\.]+);/i],[_,[h,"Facebook"]],[/fxios\/([\w\.-]+)/i],[_,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[_,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[_,h],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[_,D.str,R.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,_],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],_],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,_]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[E,"amd64"]],[/(ia32(?=;))/i],[[E,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[E,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[E,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[E,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[E,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[E,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[g,m,[v,T]],[/applecoremedia\/[\w\.]+ \((ipad)/],[g,[m,"Apple"],[v,T]],[/(apple\s{0,1}tv)/i],[[g,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,g,[v,T]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[g,[m,"Amazon"],[v,T]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[g,D.str,R.device.amazon.model],[m,"Amazon"],[v,I]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[g,m,[v,I]],[/\((ip[honed|\s\w*]+);/i],[g,[m,"Apple"],[v,I]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,g,[v,I]],[/\(bb10;\s(\w+)/i],[g,[m,"BlackBerry"],[v,I]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[g,[m,"Asus"],[v,T]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[g,"Xperia Tablet"],[v,T]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[m,"Sony"],[g,"Xperia Phone"],[v,I]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,g,[v,y]],[/android.+;\s(shield)\sbuild/i],[g,[m,"Nvidia"],[v,y]],[/(playstation\s[34portablevi]+)/i],[g,[m,"Sony"],[v,y]],[/(sprint\s(\w+))/i],[[m,D.str,R.device.sprint.vendor],[g,D.str,R.device.sprint.model],[v,I]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,g,[v,T]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[g,/_/g," "],[v,I]],[/(nexus\s9)/i],[g,[m,"HTC"],[v,T]],[/(nexus\s6p)/i],[g,[m,"Huawei"],[v,I]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,g,[v,I]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[g,[m,"Microsoft"],[v,y]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[m,"Microsoft"],[v,I]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[g,[m,"Motorola"],[v,I]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[g,[m,"Motorola"],[v,T]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,w.trim],[g,w.trim],[v,S]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[m,"Samsung"],[v,S]],[/\(dtv[\);].+(aquos)/i],[g,[m,"Sharp"],[v,S]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],g,[v,T]],[/smart-tv.+(samsung)/i],[m,[v,S],g],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],g,[v,I]],[/sie-(\w+)*/i],[g,[m,"Siemens"],[v,I]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],g,[v,I]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[g,[m,"Acer"],[v,T]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],g,[v,T]],[/(lg) netcast\.tv/i],[m,g,[v,S]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[g,[m,"LG"],[v,I]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[g,[m,"Lenovo"],[v,T]],[/linux;.+((jolla));/i],[m,g,[v,I]],[/((pebble))app\/[\d\.]+\s/i],[m,g,[v,A]],[/android.+;\s(glass)\s\d/i],[g,[m,"Google"],[v,A]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[g,/_/g," "],[m,"Xiaomi"],[v,I]],[/android.+a000(1)\s+build/i],[g,[m,"OnePlus"],[v,I]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[v,w.lowerize],m,g]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[_,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,_],[/rv\:([\w\.]+).*(gecko)/i],[_,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,_],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[_,D.str,R.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[_,D.str,R.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],_],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,_],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],_],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],_],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,_],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],_],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],_],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,_],[/(haiku)\s(\w+)/i],[h,_],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[h,"iOS"],[_,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[_,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,_]]},N=function(e,t){if(!(this instanceof N))return new N(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(C,t):C;return this.getBrowser=function(){var e=D.rgx.apply(this,i.browser);return e.major=w.major(e.version),e},this.getCPU=function(){return D.rgx.apply(this,i.cpu)},this.getDevice=function(){return D.rgx.apply(this,i.device)},this.getEngine=function(){return D.rgx.apply(this,i.engine)},this.getOS=function(){return D.rgx.apply(this,i.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};N.VERSION=o,N.BROWSER={NAME:h,MAJOR:p,VERSION:_},N.CPU={ARCHITECTURE:E},N.DEVICE={MODEL:g,
VENDOR:m,TYPE:v,CONSOLE:y,MOBILE:I,SMARTTV:S,TABLET:T,WEARABLE:A,EMBEDDED:b},N.ENGINE={NAME:h,VERSION:_},N.OS={NAME:h,VERSION:_},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=N),t.UAParser=N):"function"===c&&n(162)?(i=function(){return N}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r.UAParser=N;var O=r.jQuery||r.Zepto;if(typeof O!==l){var x=new N;O.ua=x.getResult(),O.ua.get=function(){return x.getUA()},O.ua.set=function(e){x.setUA(e);var t=x.getResult();for(var n in t)O.ua[n]=t[n]}}})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(166).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(168)),e.registerAudienceMatcher("campaign",n(169))}}),(function(e,t,n){var i=n(111);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(170);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){e.exports=function(e){e.registerAudienceMatcher("code",n(172))}}),(function(e,t,n){var i=n(2),r=n(136);t.fieldsNeeded=[],t.match=function(e,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(174)),e.registerAudienceMatcher("cookies",n(175))}}),(function(e,t,n){var i=n(65);e.exports={provides:"cookies",isLazy:!0,getter:[function(){return i.getAll()}]}}),(function(e,t,n){var i=n(170);e.exports={fieldsNeeded:["cookies"],match:function(e,t){var n=t.name,r=t.value,a=t.match,o=e.cookies[n];return i.hasMatch(r,a,o)}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(177));var t=n(178);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(11),a=n(12),o=n(17),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:a.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var a=t,o=n,u=s.getByApiName(n),c=s.getById(n);return i.isObject(t)&&!t.id&&(u&&!c?(o=u.id,a={id:u.segmentId||u.id,value:t.value}):c||r.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled.")),e[o]=a,e}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(170);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(180)),e.registerVisitorProfileProvider(n(181)),e.registerAudienceMatcher("device",n(182))}}),(function(e,t,n){var i=n(159);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(184)),e.registerAudienceMatcher("location",n(186))}}),(function(e,t,n){var i=n(185);e.exports={provides:"location",shouldTrack:!0,isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}}),(function(e,t,n){function i(){a.addScriptAsync(s)}var r=n(109),a=n(124),o="cdn3";t.getIP=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.ip}))},t.getIPDerivedGeolocation=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.location}))};var s="//cdn3.optimizely.com/js/geo2.js"}),(function(e,t){t.fieldsNeeded=["location"],t.match=function(e,t){if(!e.hasOwnProperty("location"))return!1;var n=e.location,i=t.value,r=i.split("|"),a=(r[0]||"").trim(),o=(r[1]||"").trim(),s=(r[2]||"").trim(),u=(r[3]||"").trim();switch(r.length){case 1:if(n.country===a)return!0;break;case 2:if(n.region===o&&n.country===a)return!0;break;case 3:if(n.city===s&&(n.region===o||""===o)&&n.country===a)return!0;break;case 4:if(n.continent===u)return!0}return!1}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/platform",n(188)),e.registerVisitorProfileProvider(n(189)),e.registerAudienceMatcher("platform",n(190))}}),(function(e,t,n){var i=n(159);t.getPlatform=function(){return i.get().platform}}),(function(e,t){e.exports={provides:"platform",isSticky:!0,getter:["sources/platform",function(e){return e.getPlatform()}]}}),(function(e,t,n){var i=n(166).compareVersion;t.fieldsNeeded=["platform"],t.match=function(e,t){var n=e.platform,r=t.value,a=r.split("_"),o=a[0],s=a.slice(1);return o===n.name&&(0===s.length||(s.length>1?i(n.version,s[0])>=0&&i(n.version,s[1])<=0:0===i(n.version,s[0])))}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(192)),e.registerAudienceMatcher("query",n(193))}}),(function(e,t,n){var i=n(111);e.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}}),(function(e,t,n){var i=n(2),r=n(170);t.fieldsNeeded=["queryParams"],t.match=function(e,t){var n=i.find(e.queryParams,(function(e){return e[0]===t.name}));return r.hasMatch(t.value,t.match,n?n[1]:null)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(195)),e.registerAudienceMatcher("referrer",n(196))}}),(function(e,t,n){var i=n(66),r=n(90);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(197);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(c)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(199)),e.registerAudienceMatcher("source_type",n(201))}}),(function(e,t,n){var i=n(66),r=n(200),a=n(111),o=n(90),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(a.getQueryParamValue("utm_source")||a.getQueryParamValue("gclid")||a.getQueryParamValue("otm_source"))return"campaign";for(var e=o.getReferrer()||i.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&r.getDomain(e)!==r.getDomain(a.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.getDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(170);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(203)),e.registerVisitorProfileProvider(n(204)),e.registerAudienceMatcher("time_and_day",n(205))}}),(function(e,t,n){var i=n(14);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(206);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){function i(e){return"kx"+e+"_segs_partner"}function r(e,t){try{return e.getGlobal("localStorage")&&e.getGlobal("localStorage").getItem(t)||e.getGlobal("localStorage").getItem(u)}catch(e){o.warn("Error reading from local storage for "+c,":",e)}}var a=n(2),o=n(11),s=n(67),u="kxsegs_partner",c="krux",l={provider:{getter:["stores/integration_settings",function(e){var t=e.get(c)&&e.get(c).krux_namespace,n=u;t&&(n=i(t));var o=r(s,n);if(a.isString(o))return{audiences:o.split(",")}}]},matcher:n(208),vendor:c};e.exports=function(e){e.registerAudiencePlugin(l)}}),(function(e,t,n){var i=n(2),r=n(170),a=n(57).getFieldValue;e.exports=function(e,t){var n=a(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(r.hasMatch,t.value,t.match)):r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){function i(e,t){if(t["sVariableReference"])return t["sVariableReference"]||null;var n=t["sVariable"]?t["sVariable"]:f;return e.getGlobal(n)}function r(e){var t=["events","linkTrackEvents","linkTrackVars"];a.each(t,(function(t){a.isString(e[t])||(e[t]="")}))}var a=n(2),o=n(11),s=n(82),u=n(90),c=n(67),l=n(102),d=n(16),f="s",p=255,g="o",h="adobe_analytics",v="optimizelyLayerEvent",m="OptimizelyLayerDecision",_=n(89),E=n(17),y=E.get("stores/integration_settings"),I=["stores/layer_data",function(e){return function(t){var n=t.decision.layerId,i=t.decision.experimentId,r=t.decision.isLayerHoldback,s=t.decision.variationId,u=e.get(n),c=a.find(u.experiments,{id:i});if(c){var l=c["integrationSettings"]||u["integrationSettings"]||{},d=l[h];if(d){var f=a.find(c.variations,{id:s});if(f){var g=_.generateAnalyticsString(u,c,f,r,p,!0);if(g)return S(g,d)["catch"]((function(e){o.warn("Tracker for",h,"failed:",e)}))}}}}}],T=function(e){var t=e.integrationSettings;if(t&&t[h]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},r={id:e.variationId,name:e.variationName},a=e.isLayerHoldback,s=_.generateAnalyticsString(n,i,r,a,p,!0);if(s)return S(s,t[h])["catch"]((function(e){o.warn("Tracker for",h,"failed:",e)}))}},S=function(e,t){var n,o=50,l=200;return s.pollFor((function(){var e=y.getReference(h);return n=a.extend({},e,t),i(c,n)}),l,o).then((function(t){var i,o,s=n.site_catalyst_eVar||null,c=n.site_catalyst_prop||null;s&&(i="eVar"+s),c&&(o="prop"+c),r(t);var l=t.linkTrackVars.split(",");i&&(e=e.substring(0,p),t[i]=e,l.indexOf(i)===-1&&l.push(i)),o&&(t[o]=e,l.indexOf(o)===-1&&l.push(o));var d=u.getReferrer();if(d&&(t.referrer=d),t.linkTrackVars.indexOf("events")===-1&&l.push("events"),t.linkTrackVars=a.filter(l).join(","),t.linkTrackEvents.indexOf(v)===-1){var f=t.linkTrackEvents.split(",");f.push(v),t.linkTrackEvents=a.filter(f).join(",")}if(t.events.indexOf(v)===-1){var h=t.events.split(",");h.push(v),t.events=a.filter(h).join(",")}t.tl(!0,g,m)}))},A={preRedirectPolicy:l.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:l.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:l.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:I,trackLayerDecision:T,serializeSettings:d.stringify,deserializeSettings:d.parse};e.exports=function(e){e.registerAnalyticsTracker("adobe_analytics",A)}}),(function(e,t,n){e.exports=function(e){e.registerAnalyticsTracker("avro",n(211))}}),(function(e,t,n){function i(e){function t(e,t,n){var i=h({type:R,name:n,value:t});return i&&e.push(i),e}var n=E.keys(j),i=E.omit(e,n),r=E.pick(e,n),a=E.reduce(i,t,[]),o=E.reduce(r,(function(e,n,i){var r=j[i];r.excludeFeature||t(a,n,i);try{r.validate(n),n=r.sanitize(n),e.push({name:i,value:n})}catch(e){y.emitError(new G("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),[]);return{eventFeatures:a,eventMetrics:o}}function r(e,t){var n=u(e,t),r=i(e.eventTags);return r.eventFeatures.push(h({type:D,name:"",value:e.viewCategory})),E.extend(n,r,{eventEntityId:e.pageId,eventType:C,eventName:e.pageId})}function a(e,t,n){var i=u(e,t),r=e.event.pageId,a=[],o=[];if(a.push(h({type:b,name:"selector",value:e.selector})),a.push(h({type:b,name:"view_id",value:e.event.pageId})),r){var s=n.getActivationEventId(e.event.pageId);s&&o.push({eventId:n.getActivationEventId(e.event.pageId),relationship:z.VIEW_ACTIVATED})}return E.forOwn(e.eventTags,(function(e,t){var n=h({type:R,name:t,value:e},L);n&&a.push(n)})),E.extend(i,{eventEntityId:e.event.id,eventType:e.event.category,eventName:e.event.apiName,eventFeatures:a,relatedEvents:o})}function o(e,t){var n=u(e,t),r=i(e.eventTags);return E.extend(n,r,{eventEntityId:e.eventEntityId,eventType:e.eventCategory,eventName:e.eventApiName})}function s(e,t){var n=u(e,t);return n.layerStates=[],E.extend(n,{eventType:O,eventName:N})}function u(e,t){var n=f(e.userFeatures),i=p(e.activeViewStates,t),r=d(e.layerStates),a=E.isNull(U.getAnonymizeIP())?void 0:U.getAnonymizeIP();return{eventId:e.eventId,anonymizeIP:a,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:e.visitorId,visitorUUID:e.visitorUUID,eventFeatures:[],eventMetrics:[],relatedEvents:[],layerStates:r,userFeatures:n,activeViews:i,isGlobalHoldback:e.isGlobalHoldback}}function c(e){var t=E.map(e.decisionTicketAudienceIds,(function(e){return{id:e}})),n=f(e.userFeatures);return{decisionId:e.decisionId,anonymizeIP:e.anonymizeIP,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,layerId:e.layerId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:e.visitorId,visitorUUID:e.visitorUUID,decisionTicket:{audiences:t,bucketingId:e.visitorUUID||e.visitorId},decision:g(e),userFeatures:n,isGlobalHoldback:!1}}function l(e){var t=e.decisionTicket,n=e.decision,i=E.map(t.audienceIds,(function(e){return{id:e}})),r=f(e.userFeatures),a=E.isNull(U.getAnonymizeIP())?void 0:U.getAnonymizeIP();return{decisionId:e.decisionId,anonymizeIP:a,timestamp:e.timestamp,revision:e.revision,clientEngine:e.clientEngine,clientVersion:e.clientVersion,projectId:e.projectId,accountId:e.accountId,layerId:n.layerId,activationId:e.activationId,sessionId:_(e.sessionId),visitorId:B.getRandomId(),visitorUUID:B.getUUID(),decisionTicket:{audiences:i,bucketingId:t.bucketingId},decision:g(n),userFeatures:r,isGlobalHoldback:U.isGlobalHoldback()}}function d(e){return E.map(e,(function(e){var t=null,n=e.decisionTicket;if(n){var i=E.map(n.audienceIds,(function(e){return{id:e}}));t={audiences:i,bucketingId:n.bucketingId}}return{layerId:e.layerId,revision:e.revision,decisionTicket:t,decision:g(e.decision),decisionActivationId:e.decisionActivationId,decisionSessionId:e.decisionSessionId,decisionEventId:e.decisionEventId,decisionTimestamp:e.decisionTimestamp,actionTriggered:e.actionTriggered,actionSessionId:e.actionSessionId,actionActivationId:e.actionActivationId,actionTimestamp:e.actionTimestamp}}))}function f(e){return E.reduce(e,(function(e,t){try{v(t.value),e.push(E.pick(t,["id","type","name","shouldIndex","value"]))}catch(e){L.warn("Error evaluating user feature",t,e)}return e}),[])}function p(e,t){return E.map(e,(function(e){var n=[];try{var i=t.get(e.id);n.push(h({type:D,name:"",value:i.category}))}catch(t){L.error("Unable to find Page category for Page with id",e.id)}return E.forOwn(e.metadata,(function(e,t){var i=h({type:w,name:t,value:e},L);i&&n.push(i)})),{viewId:e.id,activatedTimestamp:e.activatedTimestamp,viewFeatures:n}}))}function g(e){return E.pick(e,["experimentId","variationId","isLayerHoldback"])}function h(e){var t=E.extend({id:null,shouldIndex:!0},e);try{v(e.value)}catch(t){return void L.error("Error evaluating feature:",e,t)}return t}function v(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=k.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function m(e){if(null==e)throw new Error("Metric value is null");if(!E.isNumber(e))throw new Error("Metric value is not numeric")}function _(e){return x?P:e}var E=n(2),y=n(75),I=n(102),T="https://logx.optimizely.com",S=T+"/log/decision",A=T+"/log/event",b="event",w="view_tag",D="view_category",R="tags",C="view_activated",N="client_activation",O="client_activation",x=!0,P="AUTO",L=n(11),k=n(16),V=n(84),F=n(68).create,M=n(17),U=M.get("stores/global"),B=M.get("stores/visitor_id"),G=t.Error=F("AvroError"),j={revenue:{validate:m,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:m,sanitize:Math.floor,excludeFeature:!0},value:{validate:m,sanitize:E.identity}},z={VIEW_ACTIVATED:"view_activation"};t.preRedirectPolicy=I.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT,t.postRedirectPolicy=I.PostRedirectPolicies.TRACK_AFTER_SYNC,t.nonRedirectPolicy=I.NonRedirectPolicies.TRACK_IMMEDIATELY,t.trackLayerDecision=function(e){var t=c(e);V.retryableRequest({url:S,method:"POST",data:t},t.decisionId)},t.onLayerDecision=[function(){return function(e){var t=l(e);V.retryableRequest({url:S,method:"POST",data:t},t.decisionId)}}],t.onPageActivated=["stores/view_data",function(e){return function(t){var n=r(t,e,L);V.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onClientActivation=["stores/view_data",function(e){return function(t){var n=s(t,e,L);V.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onCustomEvent=["stores/view_data",function(e){return function(t){var n=o(t,e);V.retryableRequest({url:A,method:"POST",data:n},n.eventId)}}],t.onClickEvent=["stores/view_data","stores/view",function(e,t){return function(n){var i=a(n,e,t);V.retryableRequest({url:A,method:"POST",data:i},i.eventId)}}]}),(function(e,t,n){var i=n(2),r=n(11),a=n(82),o=n(90),s=n(67),u=n(102),c=n(16),l="google_classic_analytics",d="Optimizely",f="_gaq",p=128,g=p-d.length,h=n(89),v=["stores/layer_data",function(e){return function(t){var n=t.decision.experimentId,a=t.decision.variationId,o=t.decision.isLayerHoldback,s=e.get(t.decision.layerId),u=i.find(s.experiments,{id:n});if(u){var c=u["integrationSettings"]||s["integrationSettings"]||{},d=c[l];if(d){var f=i.find(u.variations,{id:a});if(f){var p=h.generateAnalyticsString(s,u,f,o,g,!0);if(p)return _(p,d)["catch"]((function(e){r.warn("Tracker for",l,"failed:",e)}))}}}}}],m=function(e){var t=e.integrationSettings;if(t&&t[l]&&e.experimentId&&e.variationId){var n={id:e.layerId,name:e.layerName,policy:e.layerPolicy,integrationStringVersion:e.integrationStringVersion},i={id:e.experimentId,name:e.experimentName},a={id:e.variationId,name:e.variationName},o=e.isLayerHoldback,s=h.generateAnalyticsString(n,i,a,o,g,!0);if(s)return _(s,t[l])["catch"]((function(e){r.warn("Tracker for",l,"failed:",e)}))}},_=function(e,t){var n=50,u=200;return a.pollFor((function(){var e=s.getGlobal(f);if(e&&!i.isArray(e))return e}),u,n).then((function(n){var i=null,a=null,s=!0,u=t.google_analytics_tracker,c=u?u+".":"",l=parseInt(t.google_analytics_slot,10);if(isNaN(l))return void r.warn('Google Analytics custom variable slot cannot be parsed to an integer: "',t.google_analytics_slot,'".  No data can be sent to Google Analytics.');var f=o.getReferrer();f&&n.push([c+"_setReferrerOverride",f]),n.push([c+"_setCustomVar",l,d,e],[c+"_trackEvent","Optimizely","Assigned to Campaign",i,a,s])}))},E={preRedirectPolicy:u.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:u.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:u.NonRedirectPolicies.TRACK_IMMEDIATELY,onLayerDecision:v,trackLayerDecision:m,serializeSettings:c.stringify,deserializeSettings:c.parse};e.exports=function(e){e.registerAnalyticsTracker("google_classic_analytics",E)}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(214)),e.registerViewMatcher("url",n(215))}}),(function(e,t,n){var i=n(111);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(197);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(217),a=n(100),o=n(11),s=n(114);e.exports=function(e){var t=new r(function(e){s.updateAllViewTags();var t=a.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=function(e){a.forEach(this.events,function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){c.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}.bind(this))}.bind(this)}function r(e,t,n){for(var i=e.target,r=0;i;){var o;try{o=s(i,t)}catch(o){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:o.message,eventId:n.id};return c.emitError(new l("Unable to evaluate match for element"),u),!1}if(o)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(68).create,s=n(218),u=n(66),c=n(75),l=t.Error=o("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(219)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){this.change=r.cloneDeep(e),this.change=p.transformVisibilityAttributesToCSS(this.change),this.identifier=t.identifier,this.startTime=t.startTime}var r=n(2),a=n(129),o=n(221),s=n(222),u=n(17).get("stores/directive"),c=n(66),l=n(223),d=n(11),f=n(128),p=n(224),g=n(91).create();i.prototype.apply=function(){this.applyDeferred=s();try{var e={};u.shouldObserveChangesIndefinitely()||(e={timeout:r.partial(f.isTimedOut,this.startTime),onTimeout:r.partial(this.applyDeferred.reject,new Error("Unable to find selector."))}),this.unobserveSelector=g.observeSelector(this.change.selector,this.applyToElement.bind(this),e);var t=c.querySelectorAll(this.change.selector);r.each(t,this.applyToElement.bind(this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.applyToElement=function(e){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t)){var n="AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+e;return d.debug(n),void this.applyDeferred.reject(n)}var i={};r.forOwn(this.change.attributes,(function(n,a){switch(a){case l.selectorChangeType.CLASS:r.isUndefined(e.className)||(i[l.selectorChangeType.CLASS]=e.className,e.className=n);break;case l.selectorChangeType.HREF:r.isUndefined(e.href)||(i[l.selectorChangeType.HREF]=e.href,e.href=n);break;case l.selectorChangeType.HTML:r.isUndefined(e.innerHTML)||(i[l.selectorChangeType.HTML]=e.innerHTML,e.innerHTML=n,r.each(c.childrenOf(e),(function(e){e.setAttribute(t,"")})));break;case l.selectorChangeType.SRC:r.isUndefined(e.src)||(i[l.selectorChangeType.SRC]=e.src,e.src=n);break;case l.selectorChangeType.STYLE:break;case l.selectorChangeType.TEXT:r.isUndefined(e.textContent)||(i[l.selectorChangeType.TEXT]=e.textContent,e.textContent=n);break;default:throw new Error("Unrecognized attribute: "+a)}}));var s=p.createStylesFromChange(e.style.cssText,this.change);r.isString(s)&&(i[l.selectorChangeType.STYLE]=e.style.cssText,e.style.cssText=s),e.setAttribute(t,""),o.setData(e,this.change.id,this.identifier,i),this.applyDeferred.resolve()},i.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},e.exports=function(e){e.registerChangeApplier(l.changeType.ATTRIBUTE,i)}}),(function(e,t,n){function i(e,t){return[e,t].join("_")}var r=n(2),a=n(129).CHANGE_DATA_KEY;t.getData=function(e,t,n){var r=i(t,n);return e[a]&&e[a][r]?e[a][r]:null},t.hasData=function(e){return Boolean(e&&e[a]&&!r.isEmpty(e[a]))},t.removeData=function(e,t,n){e[a]&&delete e[a][i(t,n)]},t.setData=function(e,t,n,r){if("object"!=typeof r)throw new Error("setData expects an object");e[a]||(e[a]={}),e[a][i(t,n)]=r}}),(function(e,t,n){var i=n(2),r=n(77).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(13);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){var i=n(2),r=n(223);t.transformVisibilityAttributesToCSS=function(e){if(!e.attributes)return e;if(e.attributes[r.selectorChangeType.HIDE]||e.attributes[r.selectorChangeType.REMOVE]){var t=i.extend({css:{}},i.cloneDeep(e));return e.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),e.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return e},t.createStylesFromChange=function(e,t){if(i.isEmpty(t.css))return t.attributes.style;var n="",r=t.attributes.style||"";return i.each(t.css,(function(e,t){var i=new RegExp(t+"\\s?:");i.test(r)||(n+=t+":"+e+";")})),i.isUndefined(t.attributes.style)?(e||"")+n:n+r}}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(222),o=n(223),s=n(136);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){function i(e,t){if(this.change=e,this.config=t,this.reasonShouldNotRedirect=this._checkForReasonNotToRedirect(),!this.reasonShouldNotRedirect){if(!r.isString(this.change.dest)&&!r.isFunction(this.change.dest))throw new Error("Redirect destination is not a string or function:",this.change.dest);if(r.isFunction(this.change.dest)&&(this.change.dest=this.change.dest(),!r.isString(this.change.dest)))throw new Error("Redirect destination function did not evaluate to a string");if(!this.config.action)throw new Error("Redirect changes require an action to be passed in the config.");o.dispatch(s.ANNOUNCE_PENDING_REDIRECT,{layerId:this.config.action.layerId})}}var r=n(2),a=n(77).Promise,o=n(8),s=n(15),u=n(12),c=n(66),l=n(67),d=n(65),f=n(11),p=n(227),g=n(223),h=n(17),v=h.get("stores/action_data"),m="COOKIE";i.prototype.apply=function(){if(this.reasonShouldNotRedirect)return f.warn("Redirect change is not being applied because: "+this.reasonShouldNotRedirect),a.resolve(g.changeState.IGNORED);if(this.reasonInvalid)return f.error("Redirect change cannot be applied because:",this.reasonInvalid),a.reject(this.reasonInvalid);try{this.Lt(this.kt())}catch(e){return a.reject(e)}return a.resolve(g.changeState.APPLIED)},i.prototype.kt=function(){var e=p.create(this.change.dest);if(this.change.preserveParameters){var t=l.getLocation().search;t&&(e.search?e.search+="&"+t.substr(1):e.search=t)}return e.toString()},i.prototype.Vt=function(){var e=c.createElement("style");e.setAttribute("type","text/css"),e.innerHTML="body{display:none;visibility:hidden;}",c.appendToHead(e)},i.prototype.Lt=function(e){if(!m){var t,n=v.getByChangeId(this.config.identifier);n&&(t=n.variationId);var i=(t||"unknown variation")+"|"+c.getReferrer();f.debug("Change / Redirect / Setting redirect data:",i),d.set(u.COOKIES.REDIRECT,i,{maxAge:5})}var r=!this.change.hasOwnProperty("hidePage")||this.change.hidePage;r&&this.Vt(),l.setLocation(e)},i.prototype._checkForReasonNotToRedirect=function(){var e=d.get(u.COOKIES.REDIRECT);if(!this.change.allowAdditionalRedirect&&!r.isUndefined(e))return"Page was already redirected."},e.exports=function(e){e.registerChangeApplier(g.changeType.REDIRECT,i)}}),(function(e,t,n){var i=n(2);t.create=function(e){if(i.isEmpty(e))return null;var t=document.createElement("a");return t.href=e,t}}),(function(e,t,n){function i(e,t){this.change=r.extend({},e),this.identifier=t.identifier}var r=n(2),a=n(97),o=n(223),s=n(222),u="showWidget";i.prototype.apply=function(){return a.emit({type:u,name:this.change.widget_id,data:this.change
}),s().resolve(o.changeState.APPLIED)},e.exports=function(e){e.registerChangeApplier(o.changeType.WIDGET,i)}}),(function(e,t,n){function i(e,t,n,i){var l,d=e.decisionMetadata.experimentPriorities[i],f=function(n,i){var r=s.getExperimentById(e,i.entityId);return s.isValidExperiment(t,r)&&n.push(i.entityId),n},p=o.reduce(d,f,[]);if(!o.isEmpty(p)){var g,h=o.filter(d,{endOfRange:null});if(h&&h.length===d.length)g=r(p);else{if(0!==h.length)throw new c("You must specify weights for all or none of the experiments in each priority layer.");g=a(p,d)}if(l=u.chooseWeightedCandidate(n,e.id,g)){var v=s.getExperimentById(e,l);if(v)return v}}}function r(e){for(var t=[],n=Math.round(1e4/e.length),i=0;i<e.length;i++)t.push({entityId:e[i],endOfRange:n*(i+1)});return t[t.length-1].endOfRange=1e4,t}function a(e,t){for(var n=[],i=[],r=0,a=0;a<t.length;a++){var s=0;e.indexOf(t[a].entityId)>=0&&(s=0===a?t[0].endOfRange:t[a].endOfRange-t[a-1].endOfRange,r+=s,i.push({entityId:t[a].entityId,points:s}))}if(o.isEmpty(n))for(var u=0,c=0;c<i.length;c++){var l=Math.round(1e4*i[c].points/r)+u;n.push({entityId:i[c].entityId,endOfRange:l}),u=l}return n[n.length-1].endOfRange=1e4,n}var o=n(2),s=n(133),u=n(132),c=n(134).DecisionError,l="equal_priority",d={decideLayer:function(e,t){if(!e.decisionMetadata||!e.decisionMetadata.experimentPriorities)throw new c("No decisionMetadata.experimentPriorities on layer.");for(var n=e.decisionMetadata.experimentPriorities.length,r=0;r<n;r++){var a=i(e,t.audienceIds,t.bucketingId,r);if(a){var o=s.selectVariation(a,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap);if(!e.decisionMetadata.offerConsistency||s.hasVariationActionsOnView(o,t.pageId))return{experiment:a,variation:o}}}throw new c("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(e){return!(!e.decisionMetadata||!e.decisionMetadata.offerConsistency)}};e.exports=function(e){e.registerDecider(l,d)}}),(function(e,t,n){var i=n(133),r=n(134).DecisionError,a="single_experiment",o="multivariate",s={selectExperiment:function(e,t,n){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!i.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,s),e.registerDecider(o,s)}})]);