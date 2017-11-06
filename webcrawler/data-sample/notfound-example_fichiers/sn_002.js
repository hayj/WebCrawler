/**
 * jQuery OwlCarousel 2.0.0
 * 
 * Copyright (c) 2013 Bartosz Wojciechowski
 * http://www.owlcarousel.owlgraphic.com/
 *
 * Licensed under MIT
 * https://github.com/OwlFonk/OwlCarousel/blob/master/LICENSE
 **/
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);
/*
 * jQuery.fullscreen library v0.4.0
 * Copyright (c) 2013 Vladimir Zhuravlev
 *
 * @license https://github.com/private-face/jquery.fullscreen/blob/master/LICENSE
 *
 * Date: Wed Dec 11 22:45:17 ICT 2013
 **/
(function(e){function t(e){return e!==void 0}function n(t,n,l){var r=function(){};r.prototype=n.prototype,t.prototype=new r,t.prototype.constructor=t,n.prototype.constructor=n,t._super=n.prototype,l&&e.extend(t.prototype,l)}function l(e,n){var l;"string"==typeof e&&(n=e,e=document);for(var i=0;r.length>i;++i){n=n.replace(r[i][0],r[i][1]);for(var o=0;s.length>o;++o)if(l=s[o],l+=0===o?n:n.charAt(0).toUpperCase()+n.substr(1),t(e[l]))return e[l]}return void 0}var r=[["",""],["exit","cancel"],["screen","Screen"]],s=["","o","ms","moz","webkit","webkitCurrent"],i=navigator.userAgent,o=l("fullscreenEnabled"),u=-1!==i.indexOf("Android")&&-1!==i.indexOf("Chrome"),c=!u&&t(l("fullscreenElement"))&&(!t(o)||o===!0),_=e.fn.jquery.split("."),h=2>parseInt(_[0])&&7>parseInt(_[1]),f=function(){this.__options=null,this._fullScreenElement=null,this.__savedStyles={}};f.prototype={_DEFAULT_OPTIONS:{styles:{boxSizing:"border-box",MozBoxSizing:"border-box",WebkitBoxSizing:"border-box"},toggleClass:null},__documentOverflow:"",__htmlOverflow:"",_preventDocumentScroll:function(){this.__documentOverflow=e("body")[0].style.overflow,this.__htmlOverflow=e("html")[0].style.overflow,e("body, html").css("overflow","hidden")},_allowDocumentScroll:function(){e("body")[0].style.overflow=this.__documentOverflow,e("html")[0].style.overflow=this.__htmlOverflow},_fullScreenChange:function(){this.isFullScreen()?(this._preventDocumentScroll(),this._triggerEvents()):(this._allowDocumentScroll(),this._revertStyles(),this._triggerEvents(),this._fullScreenElement=null)},_fullScreenError:function(t){this._revertStyles(),this._fullScreenElement=null,t&&e(document).trigger("fscreenerror",[t])},_triggerEvents:function(){e(this._fullScreenElement).trigger(this.isFullScreen()?"fscreenopen":"fscreenclose"),e(document).trigger("fscreenchange",[this.isFullScreen(),this._fullScreenElement])},_saveAndApplyStyles:function(){var t=e(this._fullScreenElement);this.__savedStyles={};for(var n in this.__options.styles)this.__savedStyles[n]=this._fullScreenElement.style[n],this._fullScreenElement.style[n]=this.__options.styles[n];this.__options.toggleClass&&t.addClass(this.__options.toggleClass)},_revertStyles:function(){var t=e(this._fullScreenElement);for(var n in this.__options.styles)this._fullScreenElement.style[n]=this.__savedStyles[n];this.__options.toggleClass&&t.removeClass(this.__options.toggleClass)},open:function(t,n){t!==this._fullScreenElement&&(this.isFullScreen()&&this.exit(),this._fullScreenElement=t,this.__options=e.extend(!0,{},this._DEFAULT_OPTIONS,n),this._saveAndApplyStyles())},exit:null,isFullScreen:null,isNativelySupported:function(){return c}};var p=function(){p._super.constructor.apply(this,arguments),this.exit=e.proxy(l("exitFullscreen"),document),this._DEFAULT_OPTIONS=e.extend(!0,{},this._DEFAULT_OPTIONS,{styles:{width:"100%",height:"100%"}}),e(document).bind(this._prefixedString("fullscreenchange")+" MSFullscreenChange",e.proxy(this._fullScreenChange,this)).bind(this._prefixedString("fullscreenerror")+" MSFullscreenError",e.proxy(this._fullScreenError,this))};n(p,f,{VENDOR_PREFIXES:["","o","moz","webkit"],_prefixedString:function(t){return e.map(this.VENDOR_PREFIXES,function(e){return e+t}).join(" ")},open:function(e){p._super.open.apply(this,arguments);var t=l(e,"requestFullscreen");t.call(e)},exit:e.noop,isFullScreen:function(){return null!==l("fullscreenElement")},element:function(){return l("fullscreenElement")}});var a=function(){a._super.constructor.apply(this,arguments),this._DEFAULT_OPTIONS=e.extend({},this._DEFAULT_OPTIONS,{styles:{position:"fixed",zIndex:"2147483647",left:0,top:0,bottom:0,right:0}}),this.__delegateKeydownHandler()};n(a,f,{__isFullScreen:!1,__delegateKeydownHandler:function(){var t=e(document);t.delegate("*","keydown.fullscreen",e.proxy(this.__keydownHandler,this));var n=h?t.data("events"):e._data(document).events,l=n.keydown;h?n.live.unshift(n.live.pop()):l.splice(0,0,l.splice(l.delegateCount-1,1)[0])},__keydownHandler:function(e){return this.isFullScreen()&&27===e.which?(this.exit(),!1):!0},_revertStyles:function(){a._super._revertStyles.apply(this,arguments),this._fullScreenElement.offsetHeight},open:function(){a._super.open.apply(this,arguments),this.__isFullScreen=!0,this._fullScreenChange()},exit:function(){this.__isFullScreen=!1,this._fullScreenChange()},isFullScreen:function(){return this.__isFullScreen},element:function(){return this.__isFullScreen?this._fullScreenElement:null}}),e.fullscreen=c?new p:new a,e.fn.fullscreen=function(t){var n=this[0];return t=e.extend({toggleClass:null,overflow:"hidden"},t),t.styles={overflow:t.overflow},delete t.overflow,n&&e.fullscreen.open(n,t),this}})(jQuery);
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

/*! ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

///* ========================================================================
// * Bootstrap: alert.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#alerts
// * ========================================================================
// * Copyright 2013 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // ALERT CLASS DEFINITION
//  // ======================
//
//  var dismiss = '[data-dismiss="alert"]'
//  var Alert   = function (el) {
//    $(el).on('click', dismiss, this.close)
//  }
//
//  Alert.prototype.close = function (e) {
//    var $this    = $(this)
//    var selector = $this.attr('data-target')
//
//    if (!selector) {
//      selector = $this.attr('href')
//      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
//    }
//
//    var $parent = $(selector)
//
//    if (e) e.preventDefault()
//
//    if (!$parent.length) {
//      $parent = $this.hasClass('alert') ? $this : $this.parent()
//    }
//
//    $parent.trigger(e = $.Event('close.bs.alert'))
//
//    if (e.isDefaultPrevented()) return
//
//    $parent.removeClass('in')
//
//    function removeElement() {
//      $parent.trigger('closed.bs.alert').remove()
//    }
//
//    $.support.transition && $parent.hasClass('fade') ?
//      $parent
//        .one($.support.transition.end, removeElement)
//        .emulateTransitionEnd(150) :
//      removeElement()
//  }
//
//
//  // ALERT PLUGIN DEFINITION
//  // =======================
//
//  var old = $.fn.alert
//
//  $.fn.alert = function (option) {
//    return this.each(function () {
//      var $this = $(this)
//      var data  = $this.data('bs.alert')
//
//      if (!data) $this.data('bs.alert', (data = new Alert(this)))
//      if (typeof option == 'string') data[option].call($this)
//    })
//  }
//
//  $.fn.alert.Constructor = Alert
//
//
//  // ALERT NO CONFLICT
//  // =================
//
//  $.fn.alert.noConflict = function () {
//    $.fn.alert = old
//    return this
//  }
//
//
//  // ALERT DATA-API
//  // ==============
//
//  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
//
//}(window.jQuery);

///* ========================================================================
// * Bootstrap: button.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#buttons
// * ========================================================================
// * Copyright 2013 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // BUTTON PUBLIC CLASS DEFINITION
//  // ==============================
//
//  var Button = function (element, options) {
//    this.$element = $(element)
//    this.options  = $.extend({}, Button.DEFAULTS, options)
//  }
//
//  Button.DEFAULTS = {
//    loadingText: 'loading...'
//  }
//
//  Button.prototype.setState = function (state) {
//    var d    = 'disabled'
//    var $el  = this.$element
//    var val  = $el.is('input') ? 'val' : 'html'
//    var data = $el.data()
//
//    state = state + 'Text'
//
//    if (!data.resetText) $el.data('resetText', $el[val]())
//
//    $el[val](data[state] || this.options[state])
//
//    // push to event loop to allow forms to submit
//    setTimeout(function () {
//      state == 'loadingText' ?
//        $el.addClass(d).attr(d, d) :
//        $el.removeClass(d).removeAttr(d);
//    }, 0)
//  }
//
//  Button.prototype.toggle = function () {
//    var $parent = this.$element.closest('[data-toggle="buttons"]')
//
//    if ($parent.length) {
//      var $input = this.$element.find('input')
//        .prop('checked', !this.$element.hasClass('active'))
//        .trigger('change')
//      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
//    }
//
//    this.$element.toggleClass('active')
//  }
//
//
//  // BUTTON PLUGIN DEFINITION
//  // ========================
//
//  var old = $.fn.button
//
//  $.fn.button = function (option) {
//    return this.each(function () {
//      var $this   = $(this)
//      var data    = $this.data('bs.button')
//      var options = typeof option == 'object' && option
//
//      if (!data) $this.data('bs.button', (data = new Button(this, options)))
//
//      if (option == 'toggle') data.toggle()
//      else if (option) data.setState(option)
//    })
//  }
//
//  $.fn.button.Constructor = Button
//
//
//  // BUTTON NO CONFLICT
//  // ==================
//
//  $.fn.button.noConflict = function () {
//    $.fn.button = old
//    return this
//  }
//
//
//  // BUTTON DATA-API
//  // ===============
//
//  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
//    var $btn = $(e.target)
//    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
//    $btn.button('toggle')
//    e.preventDefault()
//  })
//
//}(window.jQuery);

///* ========================================================================
// * Bootstrap: carousel.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#carousel
// * ========================================================================
// * Copyright 2012 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // CAROUSEL CLASS DEFINITION
//  // =========================
//
//  var Carousel = function (element, options) {
//    this.$element    = $(element)
//    this.$indicators = this.$element.find('.carousel-indicators')
//    this.options     = options
//    this.paused      =
//    this.sliding     =
//    this.interval    =
//    this.$active     =
//    this.$items      = null
//
//    this.options.pause == 'hover' && this.$element
//      .on('mouseenter', $.proxy(this.pause, this))
//      .on('mouseleave', $.proxy(this.cycle, this))
//  }
//
//  Carousel.DEFAULTS = {
//    interval: 5000
//  , pause: 'hover'
//  , wrap: true
//  }
//
//  Carousel.prototype.cycle =  function (e) {
//    e || (this.paused = false)
//
//    this.interval && clearInterval(this.interval)
//
//    this.options.interval
//      && !this.paused
//      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
//
//    return this
//  }
//
//  Carousel.prototype.getActiveIndex = function () {
//    this.$active = this.$element.find('.item.active')
//    this.$items  = this.$active.parent().children()
//
//    return this.$items.index(this.$active)
//  }
//
//  Carousel.prototype.to = function (pos) {
//    var that        = this
//    var activeIndex = this.getActiveIndex()
//
//    if (pos > (this.$items.length - 1) || pos < 0) return
//
//    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
//    if (activeIndex == pos) return this.pause().cycle()
//
//    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
//  }
//
//  Carousel.prototype.pause = function (e) {
//    e || (this.paused = true)
//
//    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
//      this.$element.trigger($.support.transition.end)
//      this.cycle(true)
//    }
//
//    this.interval = clearInterval(this.interval)
//
//    return this
//  }
//
//  Carousel.prototype.next = function () {
//    if (this.sliding) return
//    return this.slide('next')
//  }
//
//  Carousel.prototype.prev = function () {
//    if (this.sliding) return
//    return this.slide('prev')
//  }
//
//  Carousel.prototype.slide = function (type, next) {
//    var $active   = this.$element.find('.item.active')
//    var $next     = next || $active[type]()
//    var isCycling = this.interval
//    var direction = type == 'next' ? 'left' : 'right'
//    var fallback  = type == 'next' ? 'first' : 'last'
//    var that      = this
//
//    if (!$next.length) {
//      if (!this.options.wrap) return
//      $next = this.$element.find('.item')[fallback]()
//    }
//
//    this.sliding = true
//
//    isCycling && this.pause()
//
//    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })
//
//    if ($next.hasClass('active')) return
//
//    if (this.$indicators.length) {
//      this.$indicators.find('.active').removeClass('active')
//      this.$element.one('slid', function () {
//        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
//        $nextIndicator && $nextIndicator.addClass('active')
//      })
//    }
//
//    if ($.support.transition && this.$element.hasClass('slide')) {
//      this.$element.trigger(e)
//      if (e.isDefaultPrevented()) return
//      $next.addClass(type)
//      $next[0].offsetWidth // force reflow
//      $active.addClass(direction)
//      $next.addClass(direction)
//      $active
//        .one($.support.transition.end, function () {
//          $next.removeClass([type, direction].join(' ')).addClass('active')
//          $active.removeClass(['active', direction].join(' '))
//          that.sliding = false
//          setTimeout(function () { that.$element.trigger('slid') }, 0)
//        })
//        .emulateTransitionEnd(600)
//    } else {
//      this.$element.trigger(e)
//      if (e.isDefaultPrevented()) return
//      $active.removeClass('active')
//      $next.addClass('active')
//      this.sliding = false
//      this.$element.trigger('slid')
//    }
//
//    isCycling && this.cycle()
//
//    return this
//  }
//
//
//  // CAROUSEL PLUGIN DEFINITION
//  // ==========================
//
//  var old = $.fn.carousel
//
//  $.fn.carousel = function (option) {
//    return this.each(function () {
//      var $this   = $(this)
//      var data    = $this.data('bs.carousel')
//      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
//      var action  = typeof option == 'string' ? option : options.slide
//
//      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
//      if (typeof option == 'number') data.to(option)
//      else if (action) data[action]()
//      else if (options.interval) data.pause().cycle()
//    })
//  }
//
//  $.fn.carousel.Constructor = Carousel
//
//
//  // CAROUSEL NO CONFLICT
//  // ====================
//
//  $.fn.carousel.noConflict = function () {
//    $.fn.carousel = old
//    return this
//  }
//
//
//  // CAROUSEL DATA-API
//  // =================
//
//  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
//    var $this   = $(this), href
//    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
//    var options = $.extend({}, $target.data(), $this.data())
//    var slideIndex = $this.attr('data-slide-to')
//    if (slideIndex) options.interval = false
//
//    $target.carousel(options)
//
//    if (slideIndex = $this.attr('data-slide-to')) {
//      $target.data('bs.carousel').to(slideIndex)
//    }
//
//    e.preventDefault()
//  })
//
//  $(window).on('load', function () {
//    $('[data-ride="carousel"]').each(function () {
//      var $carousel = $(this)
//      $carousel.carousel($carousel.data())
//    })
//  })
//
//}(window.jQuery);

/*! ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/*! ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

///* ========================================================================
// * Bootstrap: modal.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#modals
// * ========================================================================
// * Copyright 2012 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // MODAL CLASS DEFINITION
//  // ======================
//
//  var Modal = function (element, options) {
//    this.options   = options
//    this.$element  = $(element)
//    this.$backdrop =
//    this.isShown   = null
//
//    if (this.options.remote) this.$element.load(this.options.remote)
//  }
//
//  Modal.DEFAULTS = {
//      backdrop: true
//    , keyboard: true
//    , show: true
//  }
//
//  Modal.prototype.toggle = function (_relatedTarget) {
//    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
//  }
//
//  Modal.prototype.show = function (_relatedTarget) {
//    var that = this
//    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })
//
//    this.$element.trigger(e)
//
//    if (this.isShown || e.isDefaultPrevented()) return
//
//    this.isShown = true
//
//    this.escape()
//
//    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
//
//    this.backdrop(function () {
//      var transition = $.support.transition && that.$element.hasClass('fade')
//
//      if (!that.$element.parent().length) {
//        that.$element.appendTo(document.body) // don't move modals dom position
//      }
//
//      that.$element.show()
//
//      if (transition) {
//        that.$element[0].offsetWidth // force reflow
//      }
//
//      that.$element
//        .addClass('in')
//        .attr('aria-hidden', false)
//
//      that.enforceFocus()
//
//      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })
//
//      transition ?
//        that.$element.find('.modal-dialog') // wait for modal to slide in
//          .one($.support.transition.end, function () {
//            that.$element.focus().trigger(e)
//          })
//          .emulateTransitionEnd(300) :
//        that.$element.focus().trigger(e)
//    })
//  }
//
//  Modal.prototype.hide = function (e) {
//    if (e) e.preventDefault()
//
//    e = $.Event('hide.bs.modal')
//
//    this.$element.trigger(e)
//
//    if (!this.isShown || e.isDefaultPrevented()) return
//
//    this.isShown = false
//
//    this.escape()
//
//    $(document).off('focusin.bs.modal')
//
//    this.$element
//      .removeClass('in')
//      .attr('aria-hidden', true)
//      .off('click.dismiss.modal')
//
//    $.support.transition && this.$element.hasClass('fade') ?
//      this.$element
//        .one($.support.transition.end, $.proxy(this.hideModal, this))
//        .emulateTransitionEnd(300) :
//      this.hideModal()
//  }
//
//  Modal.prototype.enforceFocus = function () {
//    $(document)
//      .off('focusin.bs.modal') // guard against infinite focus loop
//      .on('focusin.bs.modal', $.proxy(function (e) {
//        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
//          this.$element.focus()
//        }
//      }, this))
//  }
//
//  Modal.prototype.escape = function () {
//    if (this.isShown && this.options.keyboard) {
//      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
//        e.which == 27 && this.hide()
//      }, this))
//    } else if (!this.isShown) {
//      this.$element.off('keyup.dismiss.bs.modal')
//    }
//  }
//
//  Modal.prototype.hideModal = function () {
//    var that = this
//    this.$element.hide()
//    this.backdrop(function () {
//      that.removeBackdrop()
//      that.$element.trigger('hidden.bs.modal')
//    })
//  }
//
//  Modal.prototype.removeBackdrop = function () {
//    this.$backdrop && this.$backdrop.remove()
//    this.$backdrop = null
//  }
//
//  Modal.prototype.backdrop = function (callback) {
//    var that    = this
//    var animate = this.$element.hasClass('fade') ? 'fade' : ''
//
//    if (this.isShown && this.options.backdrop) {
//      var doAnimate = $.support.transition && animate
//
//      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
//        .appendTo(document.body)
//
//      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
//        if (e.target !== e.currentTarget) return
//        this.options.backdrop == 'static'
//          ? this.$element[0].focus.call(this.$element[0])
//          : this.hide.call(this)
//      }, this))
//
//      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow
//
//      this.$backdrop.addClass('in')
//
//      if (!callback) return
//
//      doAnimate ?
//        this.$backdrop
//          .one($.support.transition.end, callback)
//          .emulateTransitionEnd(150) :
//        callback()
//
//    } else if (!this.isShown && this.$backdrop) {
//      this.$backdrop.removeClass('in')
//
//      $.support.transition && this.$element.hasClass('fade')?
//        this.$backdrop
//          .one($.support.transition.end, callback)
//          .emulateTransitionEnd(150) :
//        callback()
//
//    } else if (callback) {
//      callback()
//    }
//  }
//
//
//  // MODAL PLUGIN DEFINITION
//  // =======================
//
//  var old = $.fn.modal
//
//  $.fn.modal = function (option, _relatedTarget) {
//    return this.each(function () {
//      var $this   = $(this)
//      var data    = $this.data('bs.modal')
//      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
//
//      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
//      if (typeof option == 'string') data[option](_relatedTarget)
//      else if (options.show) data.show(_relatedTarget)
//    })
//  }
//
//  $.fn.modal.Constructor = Modal
//
//
//  // MODAL NO CONFLICT
//  // =================
//
//  $.fn.modal.noConflict = function () {
//    $.fn.modal = old
//    return this
//  }
//
//
//  // MODAL DATA-API
//  // ==============
//
//  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
//    var $this   = $(this)
//    var href    = $this.attr('href')
//    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
//    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
//
//    e.preventDefault()
//
//    $target
//      .modal(option, this)
//      .one('hide', function () {
//        $this.is(':visible') && $this.focus()
//      })
//  })
//
//  $(document)
//    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
//    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })
//
//}(window.jQuery);
//
///* ========================================================================
// * Bootstrap: tooltip.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#tooltip
// * Inspired by the original jQuery.tipsy by Jason Frame
// * ========================================================================
// * Copyright 2012 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // TOOLTIP PUBLIC CLASS DEFINITION
//  // ===============================
//
//  var Tooltip = function (element, options) {
//    this.type       =
//    this.options    =
//    this.enabled    =
//    this.timeout    =
//    this.hoverState =
//    this.$element   = null
//
//    this.init('tooltip', element, options)
//  }
//
//  Tooltip.DEFAULTS = {
//    animation: true
//  , placement: 'top'
//  , selector: false
//  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
//  , trigger: 'hover focus'
//  , title: ''
//  , delay: 0
//  , html: false
//  , container: false
//  }
//
//  Tooltip.prototype.init = function (type, element, options) {
//    this.enabled  = true
//    this.type     = type
//    this.$element = $(element)
//    this.options  = this.getOptions(options)
//
//    var triggers = this.options.trigger.split(' ')
//
//    for (var i = triggers.length; i--;) {
//      var trigger = triggers[i]
//
//      if (trigger == 'click') {
//        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
//      } else if (trigger != 'manual') {
//        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
//        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
//
//        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
//        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
//      }
//    }
//
//    this.options.selector ?
//      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
//      this.fixTitle()
//  }
//
//  Tooltip.prototype.getDefaults = function () {
//    return Tooltip.DEFAULTS
//  }
//
//  Tooltip.prototype.getOptions = function (options) {
//    options = $.extend({}, this.getDefaults(), this.$element.data(), options)
//
//    if (options.delay && typeof options.delay == 'number') {
//      options.delay = {
//        show: options.delay
//      , hide: options.delay
//      }
//    }
//
//    return options
//  }
//
//  Tooltip.prototype.getDelegateOptions = function () {
//    var options  = {}
//    var defaults = this.getDefaults()
//
//    this._options && $.each(this._options, function (key, value) {
//      if (defaults[key] != value) options[key] = value
//    })
//
//    return options
//  }
//
//  Tooltip.prototype.enter = function (obj) {
//    var self = obj instanceof this.constructor ?
//      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
//
//    clearTimeout(self.timeout)
//
//    self.hoverState = 'in'
//
//    if (!self.options.delay || !self.options.delay.show) return self.show()
//
//    self.timeout = setTimeout(function () {
//      if (self.hoverState == 'in') self.show()
//    }, self.options.delay.show)
//  }
//
//  Tooltip.prototype.leave = function (obj) {
//    var self = obj instanceof this.constructor ?
//      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
//
//    clearTimeout(self.timeout)
//
//    self.hoverState = 'out'
//
//    if (!self.options.delay || !self.options.delay.hide) return self.hide()
//
//    self.timeout = setTimeout(function () {
//      if (self.hoverState == 'out') self.hide()
//    }, self.options.delay.hide)
//  }
//
//  Tooltip.prototype.show = function () {
//    var e = $.Event('show.bs.'+ this.type)
//
//    if (this.hasContent() && this.enabled) {
//      this.$element.trigger(e)
//
//      if (e.isDefaultPrevented()) return
//
//      var $tip = this.tip()
//
//      this.setContent()
//
//      if (this.options.animation) $tip.addClass('fade')
//
//      var placement = typeof this.options.placement == 'function' ?
//        this.options.placement.call(this, $tip[0], this.$element[0]) :
//        this.options.placement
//
//      var autoToken = /\s?auto?\s?/i
//      var autoPlace = autoToken.test(placement)
//      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
//
//      $tip
//        .detach()
//        .css({ top: 0, left: 0, display: 'block' })
//        .addClass(placement)
//
//      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
//
//      var pos          = this.getPosition()
//      var actualWidth  = $tip[0].offsetWidth
//      var actualHeight = $tip[0].offsetHeight
//
//      if (autoPlace) {
//        var $parent = this.$element.parent()
//
//        var orgPlacement = placement
//        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
//        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
//        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
//        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left
//
//        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
//                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
//                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
//                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
//                    placement
//
//        $tip
//          .removeClass(orgPlacement)
//          .addClass(placement)
//      }
//
//      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
//
//      this.applyPlacement(calculatedOffset, placement)
//      this.$element.trigger('shown.bs.' + this.type)
//    }
//  }
//
//  Tooltip.prototype.applyPlacement = function(offset, placement) {
//    var replace
//    var $tip   = this.tip()
//    var width  = $tip[0].offsetWidth
//    var height = $tip[0].offsetHeight
//
//    // manually read margins because getBoundingClientRect includes difference
//    var marginTop = parseInt($tip.css('margin-top'), 10)
//    var marginLeft = parseInt($tip.css('margin-left'), 10)
//
//    // we must check for NaN for ie 8/9
//    if (isNaN(marginTop))  marginTop  = 0
//    if (isNaN(marginLeft)) marginLeft = 0
//
//    offset.top  = offset.top  + marginTop
//    offset.left = offset.left + marginLeft
//
//    $tip
//      .offset(offset)
//      .addClass('in')
//
//    // check to see if placing tip in new offset caused the tip to resize itself
//    var actualWidth  = $tip[0].offsetWidth
//    var actualHeight = $tip[0].offsetHeight
//
//    if (placement == 'top' && actualHeight != height) {
//      replace = true
//      offset.top = offset.top + height - actualHeight
//    }
//
//    if (/bottom|top/.test(placement)) {
//      var delta = 0
//
//      if (offset.left < 0) {
//        delta       = offset.left * -2
//        offset.left = 0
//
//        $tip.offset(offset)
//
//        actualWidth  = $tip[0].offsetWidth
//        actualHeight = $tip[0].offsetHeight
//      }
//
//      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
//    } else {
//      this.replaceArrow(actualHeight - height, actualHeight, 'top')
//    }
//
//    if (replace) $tip.offset(offset)
//  }
//
//  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
//    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
//  }
//
//  Tooltip.prototype.setContent = function () {
//    var $tip  = this.tip()
//    var title = this.getTitle()
//
//    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
//    $tip.removeClass('fade in top bottom left right')
//  }
//
//  Tooltip.prototype.hide = function () {
//    var that = this
//    var $tip = this.tip()
//    var e    = $.Event('hide.bs.' + this.type)
//
//    function complete() {
//      if (that.hoverState != 'in') $tip.detach()
//    }
//
//    this.$element.trigger(e)
//
//    if (e.isDefaultPrevented()) return
//
//    $tip.removeClass('in')
//
//    $.support.transition && this.$tip.hasClass('fade') ?
//      $tip
//        .one($.support.transition.end, complete)
//        .emulateTransitionEnd(150) :
//      complete()
//
//    this.$element.trigger('hidden.bs.' + this.type)
//
//    return this
//  }
//
//  Tooltip.prototype.fixTitle = function () {
//    var $e = this.$element
//    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
//      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
//    }
//  }
//
//  Tooltip.prototype.hasContent = function () {
//    return this.getTitle()
//  }
//
//  Tooltip.prototype.getPosition = function () {
//    var el = this.$element[0]
//    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
//      width: el.offsetWidth
//    , height: el.offsetHeight
//    }, this.$element.offset())
//  }
//
//  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
//    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
//           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
//           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
//        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
//  }
//
//  Tooltip.prototype.getTitle = function () {
//    var title
//    var $e = this.$element
//    var o  = this.options
//
//    title = $e.attr('data-original-title')
//      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
//
//    return title
//  }
//
//  Tooltip.prototype.tip = function () {
//    return this.$tip = this.$tip || $(this.options.template)
//  }
//
//  Tooltip.prototype.arrow = function () {
//    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
//  }
//
//  Tooltip.prototype.validate = function () {
//    if (!this.$element[0].parentNode) {
//      this.hide()
//      this.$element = null
//      this.options  = null
//    }
//  }
//
//  Tooltip.prototype.enable = function () {
//    this.enabled = true
//  }
//
//  Tooltip.prototype.disable = function () {
//    this.enabled = false
//  }
//
//  Tooltip.prototype.toggleEnabled = function () {
//    this.enabled = !this.enabled
//  }
//
//  Tooltip.prototype.toggle = function (e) {
//    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
//    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
//  }
//
//  Tooltip.prototype.destroy = function () {
//    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
//  }
//
//
//  // TOOLTIP PLUGIN DEFINITION
//  // =========================
//
//  var old = $.fn.tooltip
//
//  $.fn.tooltip = function (option) {
//    return this.each(function () {
//      var $this   = $(this)
//      var data    = $this.data('bs.tooltip')
//      var options = typeof option == 'object' && option
//
//      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
//      if (typeof option == 'string') data[option]()
//    })
//  }
//
//  $.fn.tooltip.Constructor = Tooltip
//
//
//  // TOOLTIP NO CONFLICT
//  // ===================
//
//  $.fn.tooltip.noConflict = function () {
//    $.fn.tooltip = old
//    return this
//  }
//
//}(window.jQuery);
//
///* ========================================================================
// * Bootstrap: popover.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#popovers
// * ========================================================================
// * Copyright 2012 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // POPOVER PUBLIC CLASS DEFINITION
//  // ===============================
//
//  var Popover = function (element, options) {
//    this.init('popover', element, options)
//  }
//
//  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
//
//  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
//    placement: 'right'
//  , trigger: 'click'
//  , content: ''
//  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
//  })
//
//
//  // NOTE: POPOVER EXTENDS tooltip.js
//  // ================================
//
//  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
//
//  Popover.prototype.constructor = Popover
//
//  Popover.prototype.getDefaults = function () {
//    return Popover.DEFAULTS
//  }
//
//  Popover.prototype.setContent = function () {
//    var $tip    = this.tip()
//    var title   = this.getTitle()
//    var content = this.getContent()
//
//    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
//    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)
//
//    $tip.removeClass('fade top bottom left right in')
//
//    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
//    // this manually by checking the contents.
//    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
//  }
//
//  Popover.prototype.hasContent = function () {
//    return this.getTitle() || this.getContent()
//  }
//
//  Popover.prototype.getContent = function () {
//    var $e = this.$element
//    var o  = this.options
//
//    return $e.attr('data-content')
//      || (typeof o.content == 'function' ?
//            o.content.call($e[0]) :
//            o.content)
//  }
//
//  Popover.prototype.arrow = function () {
//    return this.$arrow = this.$arrow || this.tip().find('.arrow')
//  }
//
//  Popover.prototype.tip = function () {
//    if (!this.$tip) this.$tip = $(this.options.template)
//    return this.$tip
//  }
//
//
//  // POPOVER PLUGIN DEFINITION
//  // =========================
//
//  var old = $.fn.popover
//
//  $.fn.popover = function (option) {
//    return this.each(function () {
//      var $this   = $(this)
//      var data    = $this.data('bs.popover')
//      var options = typeof option == 'object' && option
//
//      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
//      if (typeof option == 'string') data[option]()
//    })
//  }
//
//  $.fn.popover.Constructor = Popover
//
//
//  // POPOVER NO CONFLICT
//  // ===================
//
//  $.fn.popover.noConflict = function () {
//    $.fn.popover = old
//    return this
//  }
//
//}(window.jQuery);
//
///* ========================================================================
// * Bootstrap: scrollspy.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#scrollspy
// * ========================================================================
// * Copyright 2012 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // SCROLLSPY CLASS DEFINITION
//  // ==========================
//
//  function ScrollSpy(element, options) {
//    var href
//    var process  = $.proxy(this.process, this)
//
//    this.$element       = $(element).is('body') ? $(window) : $(element)
//    this.$body          = $('body')
//    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
//    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
//    this.selector       = (this.options.target
//      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
//      || '') + ' .nav li > a'
//    this.offsets        = $([])
//    this.targets        = $([])
//    this.activeTarget   = null
//
//    this.refresh()
//    this.process()
//  }
//
//  ScrollSpy.DEFAULTS = {
//    offset: 10
//  }
//
//  ScrollSpy.prototype.refresh = function () {
//    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'
//
//    this.offsets = $([])
//    this.targets = $([])
//
//    var self     = this
//    var $targets = this.$body
//      .find(this.selector)
//      .map(function () {
//        var $el   = $(this)
//        var href  = $el.data('target') || $el.attr('href')
//        var $href = /^#\w/.test(href) && $(href)
//
//        return ($href
//          && $href.length
//          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
//      })
//      .sort(function (a, b) { return a[0] - b[0] })
//      .each(function () {
//        self.offsets.push(this[0])
//        self.targets.push(this[1])
//      })
//  }
//
//  ScrollSpy.prototype.process = function () {
//    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
//    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
//    var maxScroll    = scrollHeight - this.$scrollElement.height()
//    var offsets      = this.offsets
//    var targets      = this.targets
//    var activeTarget = this.activeTarget
//    var i
//
//    if (scrollTop >= maxScroll) {
//      return activeTarget != (i = targets.last()[0]) && this.activate(i)
//    }
//
//    for (i = offsets.length; i--;) {
//      activeTarget != targets[i]
//        && scrollTop >= offsets[i]
//        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
//        && this.activate( targets[i] )
//    }
//  }
//
//  ScrollSpy.prototype.activate = function (target) {
//    this.activeTarget = target
//
//    $(this.selector)
//      .parents('.active')
//      .removeClass('active')
//
//    var selector = this.selector
//      + '[data-target="' + target + '"],'
//      + this.selector + '[href="' + target + '"]'
//
//    var active = $(selector)
//      .parents('li')
//      .addClass('active')
//
//    if (active.parent('.dropdown-menu').length)  {
//      active = active
//        .closest('li.dropdown')
//        .addClass('active')
//    }
//
//    active.trigger('activate')
//  }
//
//
//  // SCROLLSPY PLUGIN DEFINITION
//  // ===========================
//
//  var old = $.fn.scrollspy
//
//  $.fn.scrollspy = function (option) {
//    return this.each(function () {
//      var $this   = $(this)
//      var data    = $this.data('bs.scrollspy')
//      var options = typeof option == 'object' && option
//
//      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
//      if (typeof option == 'string') data[option]()
//    })
//  }
//
//  $.fn.scrollspy.Constructor = ScrollSpy
//
//
//  // SCROLLSPY NO CONFLICT
//  // =====================
//
//  $.fn.scrollspy.noConflict = function () {
//    $.fn.scrollspy = old
//    return this
//  }
//
//
//  // SCROLLSPY DATA-API
//  // ==================
//
//  $(window).on('load', function () {
//    $('[data-spy="scroll"]').each(function () {
//      var $spy = $(this)
//      $spy.scrollspy($spy.data())
//    })
//  })
//
//}(window.jQuery);
//
///* ========================================================================
// * Bootstrap: tab.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#tabs
// * ========================================================================
// * Copyright 2012 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // TAB CLASS DEFINITION
//  // ====================
//
//  var Tab = function (element) {
//    this.element = $(element)
//  }
//
//  Tab.prototype.show = function () {
//    var $this    = this.element
//    var $ul      = $this.closest('ul:not(.dropdown-menu)')
//    var selector = $this.attr('data-target')
//
//    if (!selector) {
//      selector = $this.attr('href')
//      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
//    }
//
//    if ($this.parent('li').hasClass('active')) return
//
//    var previous = $ul.find('.active:last a')[0]
//    var e        = $.Event('show.bs.tab', {
//      relatedTarget: previous
//    })
//
//    $this.trigger(e)
//
//    if (e.isDefaultPrevented()) return
//
//    var $target = $(selector)
//
//    this.activate($this.parent('li'), $ul)
//    this.activate($target, $target.parent(), function () {
//      $this.trigger({
//        type: 'shown.bs.tab'
//      , relatedTarget: previous
//      })
//    })
//  }
//
//  Tab.prototype.activate = function (element, container, callback) {
//    var $active    = container.find('> .active')
//    var transition = callback
//      && $.support.transition
//      && $active.hasClass('fade')
//
//    function next() {
//      $active
//        .removeClass('active')
//        .find('> .dropdown-menu > .active')
//        .removeClass('active')
//
//      element.addClass('active')
//
//      if (transition) {
//        element[0].offsetWidth // reflow for transition
//        element.addClass('in')
//      } else {
//        element.removeClass('fade')
//      }
//
//      if (element.parent('.dropdown-menu')) {
//        element.closest('li.dropdown').addClass('active')
//      }
//
//      callback && callback()
//    }
//
//    transition ?
//      $active
//        .one($.support.transition.end, next)
//        .emulateTransitionEnd(150) :
//      next()
//
//    $active.removeClass('in')
//  }
//
//
//  // TAB PLUGIN DEFINITION
//  // =====================
//
//  var old = $.fn.tab
//
//  $.fn.tab = function ( option ) {
//    return this.each(function () {
//      var $this = $(this)
//      var data  = $this.data('bs.tab')
//
//      if (!data) $this.data('bs.tab', (data = new Tab(this)))
//      if (typeof option == 'string') data[option]()
//    })
//  }
//
//  $.fn.tab.Constructor = Tab
//
//
//  // TAB NO CONFLICT
//  // ===============
//
//  $.fn.tab.noConflict = function () {
//    $.fn.tab = old
//    return this
//  }
//
//
//  // TAB DATA-API
//  // ============
//
//  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
//    e.preventDefault()
//    $(this).tab('show')
//  })
//
//}(window.jQuery);
//
///* ========================================================================
// * Bootstrap: affix.js v3.0.0
// * http://twbs.github.com/bootstrap/javascript.html#affix
// * ========================================================================
// * Copyright 2012 Twitter, Inc.
// *
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * ======================================================================== */
//
//
//+function ($) { "use strict";
//
//  // AFFIX CLASS DEFINITION
//  // ======================
//
//  var Affix = function (element, options) {
//    this.options = $.extend({}, Affix.DEFAULTS, options)
//    this.$window = $(window)
//      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
//      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))
//
//    this.$element = $(element)
//    this.affixed  =
//    this.unpin    = null
//
//    this.checkPosition()
//  }
//
//  Affix.RESET = 'affix affix-top affix-bottom'
//
//  Affix.DEFAULTS = {
//    offset: 0
//  }
//
//  Affix.prototype.checkPositionWithEventLoop = function () {
//    setTimeout($.proxy(this.checkPosition, this), 1)
//  }
//
//  Affix.prototype.checkPosition = function () {
//    if (!this.$element.is(':visible')) return
//
//    var scrollHeight = $(document).height()
//    var scrollTop    = this.$window.scrollTop()
//    var position     = this.$element.offset()
//    var offset       = this.options.offset
//    var offsetTop    = offset.top
//    var offsetBottom = offset.bottom
//
//    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
//    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
//    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()
//
//    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
//                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
//                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false
//
//    if (this.affixed === affix) return
//    if (this.unpin) this.$element.css('top', '')
//
//    this.affixed = affix
//    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null
//
//    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))
//
//    if (affix == 'bottom') {
//      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
//    }
//  }
//
//
//  // AFFIX PLUGIN DEFINITION
//  // =======================
//
//  var old = $.fn.affix
//
//  $.fn.affix = function (option) {
//    return this.each(function () {
//      var $this   = $(this)
//      var data    = $this.data('bs.affix')
//      var options = typeof option == 'object' && option
//
//      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
//      if (typeof option == 'string') data[option]()
//    })
//  }
//
//  $.fn.affix.Constructor = Affix
//
//
//  // AFFIX NO CONFLICT
//  // =================
//
//  $.fn.affix.noConflict = function () {
//    $.fn.affix = old
//    return this
//  }
//
//
//  // AFFIX DATA-API
//  // ==============
//
//  $(window).on('load', function () {
//    $('[data-spy="affix"]').each(function () {
//      var $spy = $(this)
//      var data = $spy.data()
//
//      data.offset = data.offset || {}
//
//      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
//      if (data.offsetTop)    data.offset.top    = data.offsetTop
//
//      $spy.affix(data)
//    })
//  })
//
//}(window.jQuery);

/*jslint browser: true*/
/*global  $*/
/*! Skynews */
var sn = {
	// Grab different collections of objects to use later
	// Set up global objects
	globalVars: {
		allPanels : function() {
			'use strict';
			return $('#main').find('.panels'); // Grab all panels
		},
		allStoriesLink : function() {
			'use strict';
			return $('#main').find('.all-stories'); // Check and grab all stories links
		},
		allAds : function() {
			'use strict';
			return $('#main').find('.sn-container-top .sn-ad-300x250'); // Grab all ads in panels
		},
		allArticles : function() {
			'use strict';
			return $('#main').find('.sn-container-left article'); // Grab all articles
		},
		allAsides : function() {
			'use strict';
			return $('#main').find('aside'); // Grab all asides
		},
		mcn : function() {
			'use strict';
			try { return _mcn } catch (e) {}; // Return the ad object if it exists
		},
		video : function() {
			'use strict';
			if(typeof videoPlayer === 'object'){
				return videoPlayer; // Return the ad object if it exists
			} else {
				return 'error'
			}
		}
	},

	addLoadEvent: function (func) {
		'use strict';
		var oldonload = window.onload;
		if(typeof window.onload!=='function')	{
			window.onload=func;
		}
		else	{
			window.onload=function(){
				if(oldonload)	{
					oldonload();
				}func();
			};
		}
	},

	manipulation:{
		//Moving around elements based on responsive sizes go here
		//Panels context
		panels:function(mode){
			'use strict';
			// Grabbing variables from global
			var allPanels = sn.globalVars.allPanels(),
			howManyPanels = allPanels.length,
			allStoriesLink = sn.globalVars.allStoriesLink(),
			howManyallStoriesLink = allStoriesLink.length,
			id = '',media= '';
			// Go through collection of panels
			for (var i = 0; i < howManyPanels; i++){
				var snAs = $(allPanels[i]).find('.all-stories'), // set in context all stories link
				panelType = sn.helper.findClass($(allPanels[i]).attr('class'),'type-'),  // Get panel type from class;
				snMedia = $('#main').find('.sn-media-'+i), //Find any moved media type elements
				snCategoryLists = $(allPanels[i]).find('.category-list');
				
				var deviceContext = { 
					'mobile': function() {
						//REPLACED WITH CSS SHOW HIDE FUNCTION 
						//Move All stories link to bottom
						// if(howManyallStoriesLink > 0 && snAs.length > 0) { //Check if exists
						// 	id = 'sn-as-placeholder-' + i;
						// 	snAs
						// 	.before('<div class="' + id + '"></div>')					// Save a DOM "bookmark"
						// 	.addClass('on')
						// 	.appendTo($(allPanels[i]).find('.panels-content').last())				// Move the element to container
						// 	.data('sn-as-placeholder', id); 
						// }
					},
					'tablet' : function() {
						//REPLACED WITH CSS SHOW HIDE FUNCTION 
						// if(howManyallStoriesLink > 0) { //Check if exists
						// 	// Move all stories link back top
						// 	snAs
						// 	.removeClass('on')
						// 	.appendTo('.' + snAs.data('sn-as-placeholder'))  // Move it back to it's proper location
						// 	.unwrap()                               // Remove the placeholder
						// 	.data('sn-as-placeholder', undefined);        // Reset placeholder data
						// }
						//check which panel we are in
						//do panel specific manipulations
						var panelCheck = {
							'type-1': function() {
								// In panel type 1 when moving to tablet add these classes to the visually 5th and 6th element. 
								// In the dom they are the 6th and 7th element. Do not have to remove the classes as they inherit
								var adjustedMedia = $(allPanels[i]).find('.panels-content :nth-child(6)');
								adjustedMedia
								.find('.headline-small')
								.addClass('headline-small-left')
								.end()
								.next()
								.find('.headline-small')
								.addClass('headline-small-left');
								
							},
							'type-2': function() {
								return false;
							},
							'type-3': function() {
								return false;
							},
							'type-4': function() {
								return false;
							},
							'type-5': function() {
								if(snMedia.length < 1) {
									id = 'sn-media-placeholder-' + i;
									media = 'sn-media-' + i;
									$(allPanels[i]).find('.panels-content > div').eq(4).find('article').eq(0)
									.addClass(media)
									.before('<div class="' + id + '"></div>')
									.appendTo($(allPanels[i]).find('.panels-content > div').eq(3))
									.data('sn-media-placeholder', id);
								}
								return false;
							}
						};
						try { throw panelCheck[panelType](); } catch (e) {}
					},
					'desktop': function() {
						if(howManyallStoriesLink > 0) { //Check if exists
							snAs
							.removeClass('on')
							.appendTo('.' + snAs.data('sn-as-placeholder'))  // Move it back to it's proper location
							.unwrap()                               // Remove the placeholder
							.data('sn-as-placeholder', undefined);        // Reset placeholder data
						}
						//do panel specific manipulations
						var panelCheck = {
							'type-1': function() {
								return false;
							},
							'type-2': function() {
								return false;
							},
							'type-3': function() {
								return false;
							},
							'type-4': function() {
								return false;
							},
							'type-5': function() {
								snMedia
								.removeClass('sn-media-'+i)
								.appendTo('.' + snMedia.data('sn-media-placeholder'))  // Move it back to it's proper location
								.unwrap()                               // Remove the placeholder
								.data('sn-media-placeholder', undefined);        // Reset placeholder data
								return false;
							}
						};
						try { throw panelCheck[panelType](); } catch (e) {}
					}
				};
				try { throw deviceContext[mode](); } catch (e) {}	

				// Check if more stories has empty list and hide if so
				if(snCategoryLists.length > 0){
					var snCategoryListsLi = snCategoryLists.find('li');
					//console.log(snCategoryLists.html());
					if(snCategoryListsLi.length === 0){
						snCategoryLists.prev('.category-list-heading').addClass('hide');
						snCategoryLists.hide()
					}
				};
			}
			return false;
		},
		//Article context
		article:function(mode){
			'use strict';
			var allArticles = sn.globalVars.allArticles(),
                allDivs = $( '#main' ).find( '.sn-container-left' ).children(),
                howManyDivs = allDivs.length,
			howManyArticles = allArticles.length;	
			if(howManyDivs > 0 ){ // Only do this in article contexts
			var allAsides = sn.globalVars.allAsides(),
				firstChild = $('#main').find('.sn-container-left').children().eq(0).not('script'),
				secondChild = $('#main').find('.sn-container-left').children().eq(1).not('script'),
				firstChildClass = firstChild.attr('class').split(' ')[0];
                if (secondChild.length > 0) { // Only do this is there's more than 1 component in article
					var secondChildClass = secondChild.attr('class').split(' ')[0];
                }
				// Add class for first article header
				$(allArticles[0]).find('header').addClass('article-header-first');
			}
			// loop through articles to get context
			for (var i = 0; i < howManyDivs; i++){

				var deviceContext = { 
					'mobile': function() {

					},
					'tablet' : function() {

					},
					'desktop': function() {
						// Matching the height of the aside to the header of the article
						// Check if breadcrumb exists
						// Check article index
						var totalHeight = 0,
						aside = $(allAsides[i]);
        				if (firstChildClass != 'sn-crumbs' && firstChildClass != 'articles'){
            				firstChildClass = 'neither'; //set the third case
        				};
						switch (firstChildClass) {
							case 'sn-crumbs':
								var breadcrumbHeight = firstChild.outerHeight(true),
								articleHeaderHeight = (secondChildClass === 'articles' || secondChildClass === 'subcategory-news-list') ? secondChild.find('header').outerHeight(true) : 0;
								if (secondChildClass !== 'articles'){
									$(allArticles[0]).find('header').removeClass('article-header-first');
									$(allArticles[0]).find('header').addClass('article-header-narrow');
								}
								break;
							case 'articles':
								var breadcrumbHeight = 0,
								articleHeaderHeight = firstChild.find('header').outerHeight(true);
								break;
				                           	case 'neither':
				                                var breadcrumbHeight = 0,
				                                articleHeaderHeight = 0;
				                                $(allArticles[0]).find('header').removeClass('article-header-first');
				                                $(allArticles[0]).find('header').addClass('article-header-narrow'); // Set the margins back to zero so there is no overlap with aside content
										};
						totalHeight = articleHeaderHeight + breadcrumbHeight;
						aside.css({'padding-top':totalHeight}); // set padding of the top of the aside to the same as the height of the article header
					}
				};
				try { throw deviceContext[mode](); } catch (e) {}
			}
		}
	},

	mrec:{
		//MREC ad manipulations go here
		// Initialise MREC ad code
		init:function(mode){
			'use strict';
			// Check ad state global variable from main page, if disable then do not do any ad logic
			if(adState != 'disable') {
				// Grab local mcn object and mode
				var mcn = sn.globalVars.mcn(),
				snMode = mode,
				// Check if global variable adArea exists, is not empty
				snAdArea = (adArea) ? adArea : 'other'; 
				// If the ads are set to delay then wrap them in try catch
				if(adState === 'delay') {
					try{
						sn.mrec.mcncode(snMode,snAdArea,mcn);
					}catch(e){}
				} else {
					sn.mrec.mcncode(snMode,snAdArea,mcn);
				};
			};
		},
		//
		mcncode:function(mode,area,mcn){
			'use strict';
			// Check if mcn is not an object, this means that the ad code has not run yet and that we should instantiate it
			if(typeof mcn != 'object'){
				var allPanels = sn.globalVars.allPanels(),
				howManyPanels = allPanels.length,
				allArticles = sn.globalVars.allArticles(),
				howManyArticles = allArticles.length;
				window._mcn={};_mcn.config=[];
				_mcn.config.push(function(){
				  _mcn.publisher("skynews");
				  _mcn.amf.targeting("area",area)
				  _mcn.amf.targeting("device",mode);
				  if(howManyArticles > 0 && howManyPanels === 0){ // NEED TO MAKE THIS A RE-USABLE FUNCTION 20140331
					  _mcn.amf.targeting("pagetype","article");
				  }
				});
				var e=document.createElement("script"),protocol = "https:" == document.location.protocol ? "https:" : "http:";
				e.async=true;e.src=protocol+"//medrx.telstra.com.au/mcn/cube.min.js";
				var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n);
			} else {
				
				if(typeof mcn === 'object'){
					// If mcn is already an object then we are moving between breakpoints and should just refresh the ads that exist
					_mcn.custom.refreshAds(mode);  // Refresh the ads after moving them
				}
			};
		},
		//Panels context
		panels:function(mode){
			'use strict';
			var allPanels = sn.globalVars.allPanels(),
			howManyPanels = allPanels.length,
			snAd = '', id = '', catList = '', allStoriesLast ='',
			featuredTopic = '';
			//Check context panels
			for (var i = 0; i < howManyPanels; i++){
				var snAd = $(allPanels[i]).find('.sn-ad-300x250');
				featuredTopic = $(allPanels[i]).find('.featured-topic');
				snAd = (featuredTopic.length>0) ? featuredTopic : snAd;
				catList = $(allPanels[i]).find('.category-list-heading').parent('div');
				allStoriesLast = $(allPanels[i]).find('.all-stories-last');
				var panelType = sn.helper.findClass($(allPanels[i]).attr('class'),'type-');  // Get panel type from class
				var deviceContext = { 
					'mobile': function() {
						if(snAd.length > 0){ // change this so that it only runs when an ad exists
							//console.log('mobile')
							if(snAd.data('sn-mrec-tablet-placeholder')){  // Reset the position of the MREC to original position if needed
								snAd
								.appendTo('.'+snAd.data('sn-mrec-tablet-placeholder'))  // Move it back to it's proper location
								.unwrap()                               // Remove the placeholder
								.data('sn-mrec-tablet-placeholder', undefined);        // Reset placeholder data
							}
							id = 'sn-mrec-mobile-placeholder-' + i;
							snAd
							.before('<div class="' + id + '"></div>')  // Save a DOM "bookmark"
							.data('sn-mrec-mobile-placeholder', id);
							if(catList.length >= 1) {					// If category list exist move it before that, if not move it to the end of the panel
								snAd
								.insertBefore(catList);
							} 
							else if (allStoriesLast.length >=1) {
								snAd.insertBefore(allStoriesLast);
							}
							else { 
								snAd
								.appendTo($(allPanels[i]).find('.panels-content').last());
							}
						}
					},
					'tablet': function() {
						//moving from mobile to tablet check if placeholder exists
						if(snAd.data('sn-mrec-placeholder')){
							snAd
							.appendTo('.'+snAd.data('sn-mrec-placeholder'))  // Move it back to it's proper location
							.unwrap()                               // Remove the placeholder
							.data('sn-mrec-placeholder', undefined);        // Reset placeholder data
						}
						if(snAd.data('sn-mrec-mobile-placeholder')){  // Reset the position of the MREC to original position if needed
							id = snAd.data('sn-mrec-mobile-placeholder');
							//console.log('snAd = '+snAd.attr('class')+' boom1 = '+id);
							snAd
							.appendTo('.'+ id)  // Move it back to it's proper location
							.unwrap()                               // Remove the placeholder
							.data('sn-mrec-mobile-placeholder', undefined);        // Reset placeholder data
						}

						//check which panel we are in
						var panelCheck = {
							'type-1': function() {
								if(snAd.length > 0){
									id = 'sn-mrec-tablet-placeholder-' + i;
									var mrecDest = snAd.prev();
									snAd
									.before('<div class="' + id + '"></div>')  // Save a DOM "bookmark"
									.data('sn-mrec-tablet-placeholder', id)
									.insertBefore(mrecDest);
								}
							},
							'type-2': function() {
								if(snAd.length > 0){
									id = 'sn-mrec-tablet-placeholder-' + i;
									var mrecDest = snAd.prev();
									snAd
									.before('<div class="' + id + '"></div>')  // Save a DOM "bookmark"
									.data('sn-mrec-tablet-placeholder', id)
									.insertBefore(mrecDest);
								}
							},
							'type-3': function() {
								return false;
							},
							'type-4': function() {
								return false;
							},
							'type-5': function() {
								return false;
							}
						};
						try { throw panelCheck[panelType](); } catch (e) {}
					},
					'desktop': function() {
						//check which panel we are in
						if(snAd.data('sn-mrec-tablet-placeholder')){  // Reset the position of the MREC to original position if needed
							snAd
							.appendTo('.'+snAd.data('sn-mrec-tablet-placeholder'))  // Move it back to it's proper location
							.unwrap()                               // Remove the placeholder
							.data('sn-mrec-tablet-placeholder', undefined);        // Reset placeholder data
						}
						if(snAd.data('sn-mrec-mobile-placeholder')){  // Reset the position of the MREC to original position if needed
							id = snAd.data('sn-mrec-mobile-placeholder');
							//console.log('snAd = '+snAd.attr('class')+' boom1 = '+id);
							snAd
							.appendTo('.'+ id)  // Move it back to it's proper location
							.unwrap()                               // Remove the placeholder
							.data('sn-mrec-mobile-placeholder', undefined);        // Reset placeholder data
						}

					}
				};
				try { throw deviceContext[mode](); } catch (e) {}
			}
		},
		//Article context
		article:function(mode){
			'use strict';
			var allArticles = sn.globalVars.allArticles(),
			howManyArticles = allArticles.length,
			allAsides = sn.globalVars.allAsides(),
			id = '', snAd = $('#main').find('.sn-two-col-fill .sn-ad-300x250').first(), 
			//snAdRemainders = $('#main').find('.sn-two-col-fill .sn-ad-300x250:not(:first)'), // selects every MREC after the first to hide in mobile
			mcn = sn.globalVars.mcn();
			//Check context, make sure in article page
			// Check if exists then grab MREC
			for (var i = 0; i < howManyArticles; i++){
				var howMuchContent = $(allArticles[i]).find('.content > p').length, // How many p tags do we have in the article body
				adInArticle = $(allArticles[i]).find('.sn-ad-300x250').length, // How many ads in the article
				adOff = $('.adOff').length; // Find out if responsive ads are turned on
				// What device context are we in?
				var deviceContext = {
					'mobile': function() {
						if(adOff === 0 && howMuchContent > 3 && adInArticle < 1) {
							id = 'sn-mrec-article-placeholder-' + i;
							snAd
							.before('<div class="' + id + '"></div>')  // Save a DOM "bookmark"
							.addClass('pull-right')
							.insertAfter( $(allArticles[i]).find('.content > p:eq(1)'))
							.data('sn-mrec-article-placeholder', id);
						}
						//Make MREC 100%
						snAd
						.removeClass('pull-right');
						//snAdRemainders.remove(); // hide every MREC after the first in mobile
						return false;
					},
					'tablet': function() {
						//Moving to device
						//Check if there is a second paragraph, move MREC before the second paragraph
						//Check if an ad exists with the article, if so skip moving it around
						if(adOff === 0 && howMuchContent > 3 && adInArticle < 1) {
							var aside = $(allAsides[i]);
							id = 'sn-mrec-article-placeholder-' + i;
							snAd
							.before('<div class="' + id + '"></div>')  // Save a DOM "bookmark"
							.addClass('pull-right')
							.insertAfter( $(allArticles[i]).find('.content > p:eq(1)'))
							.data('sn-mrec-article-placeholder', id);
							aside.css({'padding-top':0}); // reset aside padding. Padding top not needed for devices
						}
						return false;
					},
					'desktop': function() {
						if(snAd.data('sn-mrec-article-placeholder')){
							snAd
							.appendTo('.' + snAd.data('sn-mrec-article-placeholder'))  // Move it back to it's proper location
							.removeClass('pull-right')
							.unwrap()                               // Remove the placeholder
							.data('sn-mrec-article-placeholder', undefined);        // Reset placeholder data
						}
					}
				};
				try { throw deviceContext[mode](); } catch (e) {}
			}
		},
		//Set MCN device context
		device:function(mode){
			'use strict';
			if(typeof TM_SC === 'object'){
				var pageTitle = document.getElementsByTagName('title')[0].innerHTML,
				allPanels = sn.globalVars.allPanels(),
				howManyPanels = allPanels.length,
				allArticles = sn.globalVars.allArticles(),
				howManyArticles = allArticles.length;
				// If page has lef hand side article and no panels then it is an article anything else send through the page title
				if(howManyArticles > 0 && howManyPanels === 0){ // NEED TO MAKE THIS A RE-USABLE FUNCTION 20140331
					TM_SC.recordPageView({
						page: pageTitle,
						article: pageTitle,
						skin: mode
					});
				} else {
					TM_SC.recordPageView({
						page: pageTitle,
						skin: mode
					});
				}
			};
		},
		topLeaderboard:function(mode){
			'use strict'
			var leaderboard = $('#sn-ad-728x90-top'),
			navContainer = $('.sn-ad-header'),
			adCheck = navContainer.find('#sn-ad-728x90-top'), // check if the ad has been moved.
			mcn = sn.globalVars.mcn();
			var deviceContext = {
				'mobile':function(){
					if (leaderboard.length > 0 && adCheck.length > 0){ 
						$('#main').prepend(leaderboard);
					}
				},
				'tablet':function(){
					if (leaderboard.length > 0 && adCheck.length === 0){ 
						navContainer.prepend(leaderboard);
					
					}
				},
				'desktop':function(){
					if (leaderboard.length > 0 && adCheck.length === 0){ 
						navContainer.prepend(leaderboard);

					}
				}
			}
			try {throw deviceContext[mode](); }catch (e) {}
		},
		categoryList:function(){
			'use strict';
			var mcn = sn.globalVars.mcn(),
			subcategoryMore = $('#morenews'),
			subcategoryPrevious = $('#previous'),
			buttonsExist = subcategoryMore.length + subcategoryPrevious.length;
			if (typeof mcn === 'object' && buttonsExist >0){
				subcategoryMore.add(subcategoryPrevious).on('click', function(){
					mcn.amf.refresh();
				});	
			}
		},
	},

	nav:{
		list:function(mode){
			'use strict';
			var subList = $('#sub-categories').find('ul'),
			mainList = $('#main-categories').find('.active'),
			subListWrapper = $('#sub-categories'),
			subListMain = $('#main-categories').find('.navbar-sub'),
			deviceContext = {
				'mobile': function() {
					if (mainList){
						//console.log('navlist mobile');
						mainList.find('li').append(subList);
					}
					return false;
				},
				'tabletAndDesktop': function() {
					if (subListMain) {
						//console.log('navlist tablet');
						subListWrapper.prepend(subListMain);
					}
					return false;
				}
			};
			try { throw deviceContext[mode](); } catch (e){ }
		}
	},

	responsiveImage:{
		load:function(){ 
			'use strict';
			var size='',
			width = $('.container').css('max-width'),
			imageContainer = $('#main').find('.img-load'),
			howManyImages = imageContainer.length,
			inArticle = $('#main').find('.articles'),
			i=0;

			// Set up size context based on window width
			switch (width) {
				case '660px':
					size = 'small';
					break;
				case '880px':
				case '980px':
					size = 'high';
					break;
				default:
					size = 'small';
			}
			// Loop through all images
			for (i=0; i<howManyImages; i++){
				if (imageContainer) {
					// Set up in context variables
					var img = $(imageContainer[i]).find('noscript'),	// Find the noscript
					imageLink = $(imageContainer[i]).find('> :nth-child(2)'),	// Find the 2nd child 
					imgSRC = img.attr('data-src-'+size),	// Grab source
					altTxt = img.attr('data-alt'),			// Grab alt
					titleTxt = img.attr('data-title'),		// Grab title
					images = $(imageLink).find('img').eq(0);// Grab first image in container

					console.log("images.length........." + images.length);
					console.log(imageLink);
					if(images.length > 0 && imgSRC){					// Remove any existing images
						console.log("inside length if.........");
						images.remove();
					}
					if (imgSRC) {
						try {
							console.log("inside length imgSRC.........");
							// Create new image object and fill in with our data
							var imageElement = new Image();
							imageElement.src = imgSRC;
							imageElement.setAttribute('alt', altTxt ? altTxt : '');
							// Only set title if in article page
							if (inArticle.length >0){ 
								imageElement.setAttribute('title', titleTxt ? titleTxt : '');
							}
							// inserts the image inside the <a> tag
							imageLink.append(imageElement);
						} catch (e) {
							console.log('img error = ' + e);
						}
					}
				}
			}
		}
	},

	video: function(){
		'use strict';
		var video = sn.globalVars.video();
		if(video !== 'error'){
			var currentState = video.getState();
			//console.log(currentState);
			$('.start_btn').click(function(){
				video.play();
				$('.sn-vid-img').addClass('hide');
			});
		
		}
	},

	footer:{
		list:function(mode){ 
			'use strict';
			var currentCategory = $('.sn-footer-links').find($('.sn-footer-category')),
			defaultLength = 7, // standard length for columns 
			deviceContext = {
				'double': function(){
					var x=0, i=0;
					if(currentCategory){
						for (i=0; i<currentCategory.length;i++){
							var listLength = $(currentCategory[i]).find($('.first-column li'));
							if ((listLength.length > defaultLength) && (listLength.length <= defaultLength * 2)){
								for (x=0; x<= defaultLength; x++){ //moves all items on the list that's beyond the 8th item to second-column
								$(currentCategory[i]).find($('.second-column')).append($(currentCategory[i]).find($('.first-column li:nth-child(8)')));
								}
							}
							else if (listLength.length > 14){
								var columnLength = Math.ceil(listLength.length/2); // to ensure the first column is at least half as long as the total number of items
								//console.log("column length " + columnLength);
								if ((listLength.length/2) % 1 === 0){ // Check if list is divisible by 2 
									for (x=0; x<columnLength; x++){ // moves all list items positioned greater than half the total number of items to the 2nd column
										$(currentCategory[i]).find($('.second-column')).append($(currentCategory[i]).find($('.first-column li:nth-child(' + (columnLength+1) + ')')));
									}
								}
								else {
									for (x=0; x<columnLength-1; x++){ // moves all list items positioned greater than half the total number of items to the 2nd column
										$(currentCategory[i]).find($('.second-column')).append($(currentCategory[i]).find($('.first-column li:nth-child(' + (columnLength+1) + ')')));
									}
								}
							}
						}
					}
					return false;
				},
				'single': function(){
					var i = 0;
					if(currentCategory){
						for (i=0; i< currentCategory.length; i++){ //moves all list items back to the first column
							$(currentCategory[i]).find($('.first-column')).append($(currentCategory[i]).find($('.second-column li')));
						}
					}
					return false;
				},
			};
			try { throw deviceContext[mode](); } catch (e) {}
		}
	},

	helper:{
		// usage: sn.helper.findClass('the class you want to check','part of the class you are checking')
		// Checks a collection of classes for a text fragment and then returns the full class containing that text fragment
		findClass:function(classToCheck,textToCheck){
			'use strict';
			var theClass = $.grep(classToCheck.split(' '), function(v){ return v.indexOf(textToCheck) === 0; }).join();
			theClass = (theClass) ? theClass : 'error';
			return theClass;
		}
	},

	breakpoint:{

		load:function(){
			'use strict';
			var $wind = $(window),
				breakpoints = ["660px", "880px", "980px"],
				currentBreakpoint = 0,
				mobile = false,
				tablet = false,
				desktop = false;

			var mobileFunctions = function() {
				//console.log("<p>The window is now mobile.</p>");
				sn.mrec.device('Mobile');
				sn.mrec.panels('mobile');
				sn.mrec.article('mobile');
				sn.mrec.topLeaderboard('mobile');
				//sn.manipulation.panels('mobile');
				//sn.nav.list('mobile');
				//sn.footer.list('double');
				sn.responsiveImage.load();
				sn.mrec.init('mobile');
			};

			var tabletFunctions = function() {
				//console.log("<p> The window is now Tablet.</p>"); // DEFER FUNCTIONS
				sn.mrec.device('Tablet');
				sn.mrec.panels('tablet');
				sn.mrec.article('tablet');
				sn.mrec.topLeaderboard('tablet');
				sn.manipulation.panels('tablet');
				//sn.nav.list('tabletAndDesktop');
				//sn.footer.list('single');
				sn.responsiveImage.load();
				sn.mrec.init('tablet');
			};

			var desktopFunctions = function() {
				//console.log("<p>The window is now desktop.</p>"); // DEFER FUNCTIONS
				sn.mrec.device('Desktop');
				sn.mrec.panels('desktop');
				sn.mrec.article('desktop');
				sn.mrec.topLeaderboard('desktop');
				sn.manipulation.panels('desktop');
				sn.manipulation.article('desktop');
				//sn.nav.list('tabletAndDesktop');
				//sn.footer.list('single');
				sn.responsiveImage.load();
				sn.mrec.init('desktop');
			};

			var breakpointHit = function() {
				//console.log("<p>Breakpoint " + breakpoint + " was hit!</p>");
				mobileCheck();
			};

			var mobileCheck = function() {
				var currentMaxWidth = $(".container").css("max-width");
				if ( currentMaxWidth === "660px" ) {
					if ( mobile ) {
						return;
					} else {
						mobileFunctions();
						mobile = true;
						tablet = false;
						desktop = false;
					}
				} else if (currentMaxWidth === "880px") {
					if ( tablet ) {
						return;
					} else {
						tabletFunctions();
						tablet = true;
						mobile = false;
						desktop = false;
					}
				}
				else {
					if ( desktop ) {
						return;
					} else {
						desktopFunctions();
						desktop = true;
						mobile = false;
						tablet = false;
					}
				}
			};
			mobileCheck();
			// Changed from .smartresize to .resize due to issue not happening
			$(window).resize( function() {
		        var i=0, len=0;
				var currentMaxWidth = $(".container").css("max-width");
				for (i=0, len = breakpoints.length; i < len; i++) {
					var testPoint = breakpoints[i];
					if (currentMaxWidth === testPoint) {
						if (testPoint === currentBreakpoint)
						break;
						currentBreakpoint = testPoint;
						breakpointHit(testPoint);
						break;
					}
				}
			});

		}
	},

	nonBreakpoint:{
		load:function(){
			sn.mrec.categoryList();
		}
	},

	init:function(){
		'use strict';
		this.addLoadEvent(sn.breakpoint.load);
		this.addLoadEvent(sn.video);
		this.addLoadEvent(sn.nonBreakpoint.load);
	}
};
try{
	sn.init();
}catch(err){}

// Windows phone IE viewport fix
(function() {
	if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style");
		msViewportStyle.appendChild(
			document.createTextNode("@-ms-viewport{width:auto!important}")
		);
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	}
})();

// COMMENTED OUT FOR NOW - issue appears to be gone
/*(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');*/

/*
  Pagination for news list pages.
  Component: SubCategory-news-list
*/
$(document).ready(function(){
	if(typeof hasNext != 'undefined'){
	    setVisibilityPaginationButton(hasNext,hasPrevious);
	    if(overwrite){
	    	getNewsItems(start, offset, count);
	    }
	}
    function getNewsItems(startVal, offsetVal, countVal){
    	if (startVal < 0) {
    		startVal = 0;
    	}
        $.ajax({
            url:generateUrl(startVal, offsetVal, countVal, searchPeriod),
            type:'GET',
            dataType: 'json',
            success: function(data) {
                if (typeof data['articles'] != 'undefined') {
                    var jdata = data['articles'];
                    var articleListItem ="";
                    for(var i=0; i<jdata.length; i++){
                        articleListItem += createArticleListItem(jdata[i]);
                    }
                    $("div#newslist").html(articleListItem);
                    hasNext = data['hasNext']+'';
                    hasPrevious = data['hasPrevious']+'';
                    $("div#newslist").css({"visibility":"visible"});
                    setVisibilityPaginationButton(hasNext, hasPrevious);
                    window.location = "#" + startVal + "stat";
                    $("html,body").animate({scrollTop: $('#list-header').offset().top}, 0);
                }
            },
            statusCode: {
                404: function (data) {
                    window.location.href= currentPage+"/404.html";
                }
            }
        });
    }
    $("a.pull-right").click(function(event) {
        // Preventing default click functionality for Show more
        event.preventDefault();
        start = parseInt(start)+parseInt(count);
        getNewsItems(start, offset,count);
        
    });
    $("a.pull-left").click(function(event) {
        // Preventing default click functionality for Show more
        event.preventDefault();
        if(parseInt(start) > 0){
            start = parseInt(start)-parseInt(count);
            getNewsItems(start, offset,count);
        }
    });
    function createArticleListItem (data) {
        var snippet1 = "<article class='media'>"+
            "<div class='thumbnail pull-left'>"+
                "<a href='" + data.externalPath + ".html'>"+
                    "<img class='media-object' src='" + data.imageSmall + "' alt='" + data.imageCaption + "' title='" + data.imageCaption + "' />"+
                        "</a>";
        if(typeof data.video != 'undefined'){
            snippet1 = snippet1 +"<a href='" + data.path + ".html'>"+
                "<div class='vid-play'><p>"+data.video.duration+"</p><span class='sn-icon'></span></div></a>";
        }
        var snippet3 =   "</div>"+
            "<div class='media-body'>"+
                "<h3><a href='"+data.externalPath+".html'>"+data.title+"</a></h3>"+
                    "<p class='article-intro'>"+data.description+"</p>"+
                        "</div>"+
                            "</article>";
        return snippet1 + snippet3;
    }
    function generateUrl(startVal, offsetVal, countVal, searchPeriod){
    	categoryPath = categoryPath.replace(/ |\//g,"~");
        var url = currentPage;
        var selectors = ".newslistsearch." + categoryPath + "." + orderBy;
        if (startVal != null && countVal != null && searchPeriod!=null) {
            selectors += "." + startVal + "." + countVal + "." + searchPeriod + "." + offsetVal;
        }
        url = url + selectors + ".html";
        return url;
    }
    function setVisibilityPaginationButton(hasNext, hasPrevious){
        if(hasPrevious != 'true'){
            $("a#previous").css({"visibility":"hidden"});
        }else{
            $("a#previous").css({"visibility":"visible"});
        }
        if(hasNext != 'true'){
            $("a#morenews").css({"visibility":"hidden"});
        }else{
            $("a#morenews").css({"visibility":"visible"});
        }
    }
});


var snCarousel={
    view:function(){'use strict';
        var winWidth=parseInt($(window).width(),10),label='large';
        if(winWidth<=715){
          label='small';
        }
        return label;
    },
    content:function(json,share,view){'use strict';
      var data=$.parseJSON(json),template={social:'',content:''},idata={},loc=window.location.origin;
      $.each(data.items,function(i){//loop through json objects and build html string
        idata.counter=(i+1);
        idata.imglarge=data.items[i].imageLarge;
        idata.imgsmall=data.items[i].imageSmall;
        idata.captiontext=data.items[i].captionText;
        idata.imageorient=data.items[i].imageOrientation;
        template.content+='<div class="item"><div class="sn-img-'+idata.imageorient+'"><img class="owl-lazy" data-src="';
        if(view==='small'){//'mobile' images
            template.content+=idata.imgsmall;
        }
        else{//'desktop' images
            template.content+=idata.imglarge;
        }
        template.content+='" alt="'+idata.captiontext+'"></div><span class="sn-counter">'+idata.counter+' of '+data.items.length+'</span>';
          if(idata.captiontext!==''){
            template.content+='<span class="sn-caption">'+idata.captiontext+'</span>';
          }
          template.content+='</div>';
      });
      return(template.content);
    },
    options:function(carousel,view){'use strict';
      var autoplay=false,loop=false,nav=false,share=false;
      //autoplay option
      if(carousel.is('[data-autoplay]')){
        if(carousel.data('autoplay').toString()==='true'){
          autoplay=true;
          loop=true;
        }
      }
      //navigation option
      if(carousel.is('[data-shownav]')){
        if(view==='small'||carousel.data('shownav').toString()==='true'){
          nav=true;
        }
      }
      //share images on social media option
      if(carousel.is('[data-share]')){
        if(carousel.data('share').toString()==='true'){
          share=true;
        }
      }
      return({'autoplay':autoplay,'loop':loop,'nav':nav,'share':share});
    },
    fullscreenmode:function(){'use strict';
        var fs={};
        if($.fullscreen.isNativelySupported()){
            // open in fullscreen
            $('.sn-fullscreen.sn-open').click(function(){
                $(this).closest('.sn-gallery').fullscreen();
                return false;
            });
            // exit fullscreen
            $('.sn-fullscreen.sn-close').click(function() {
                $.fullscreen.exit();
                return false;
            });
            fs.fullsize='height:'+screen.height+'px;width:'+screen.width+'px';
            fs.initsize='';
            // document's event
            $(document).bind('fscreenchange',function(e,state,elem){
                fs.gallery=$(elem);
                // if we currently in fullscreen mode
                if($.fullscreen.isFullScreen()){
                    fs.gallery.addClass('sn-fullscreen-active');
                    if(!fs.gallery.data('initsize')){
                        fs.initsize=fs.gallery.find('.owl-item.active:eq(0)').attr('style');
                        fs.gallery.attr('data-initsize',fs.initsize);
                    }
                    fs.gallery.find('.owl-item').attr('style',fs.fullsize);
                }
                else {
                    fs.gallery.removeClass('sn-fullscreen-active');
                    fs.initsize=fs.gallery.data('initsize');
                    fs.gallery.find('.owl-item').attr('style',fs.initsize);
                }
            });
            //left and right arrow key navigation in fullscreen mode
            $(window).keydown(function(e){
                if(e.keyCode===37){
                    if(fs.gallery.is('.sn-fullscreen-active')){
                        fs.gallery.find('.owl-prev:not(".inactive")').click();
                    }
                }
                else if(e.keyCode===39){
                    if(fs.gallery.is('.sn-fullscreen-active')){
                        fs.gallery.find('.owl-next:not(".inactive")').click();
                    }
                }
            });
        }
    },
    socialtext:function(carousel,item){'use strict';
      var caption=carousel.find('.owl-item:eq('+item+') .sn-caption:eq(0)'),socialtitle='';
      if(caption.text()){
        socialtitle=caption.text();
      }
      carousel.parent().find('.sn-social:eq(0) .addthis_toolbox').attr({'data-title':socialtitle,'data-description':socialtitle});
    },
    init:function(view){'use strict';
      var gallerycarousel=$('#main').find('.sn-gallery .owl-carousel');
      $.each(gallerycarousel,function(){//loop through gallery objects and create owl carousels
        var carousel=$(this),len,options=snCarousel.options(carousel,view),jsoncontent=$('script.json',carousel).html(),share={icon:'',classname:'',html:'',button:''},
            owl={obj:''},shownum,addthis={},getheight={};
        if($.trim(jsoncontent)!==''){//call method to convert json to html
          carousel.html(snCarousel.content(jsoncontent,options.share,view));
        }
        carousel.on('initialized.owl.carousel',function(){// on owl initialized update custom nav and write social icons
          if(options.loop===false){
            carousel.parent().find('.sn-nav-left').addClass('inactive');
            carousel.parent().find('.owl-prev').addClass('inactive');
          }
          if(options.share===true){
            $.ajax({
              url:'//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-53638e066f78c547',
              dataType:'script',
              cache:true
            })
            .done(function(){
              share.html='<div class="sn-social">'+
              '<div class="addthis_toolbox addthis_default_style addthis_32x32_style">'+
              '<a class="addthis_button_facebook" displaytext="Facebook"></a><a class="addthis_button_twitter" displaytext="Twitter"></a>'+
              '<a class="addthis_button_email" displaytext="Email"></a></div>'+
              '</div>';
              carousel.parent().append('<div class="sn-social sn-show">'+share.html+'</div>');
              snCarousel.socialtext(carousel,0);
            });
          }
          carousel.parents('.sn-loading').removeClass('sn-loading');//remove loading class (pre init styles)
        });
        owl=carousel.owlCarousel({//create carousel object
          loop:options.loop,
          items:1,
          nav:options.nav,
          dots:false,
          autoplay:options.autoplay,
          navText:['&#60;','&#62;'],
          lazyLoad:true//,
          // responsive:{
          //   0:{
          //       autoHeight:true
          //   },
          //   715:{
          //       autoHeight:false
          //   }
          // }
        });
        // if(view==='small'){
        //   carousel.on('loaded.owl.lazy',function(e){// on lazy loaded, preload next image (work-around for height bug when lazyload and autoheight are both true)
        //     $(e.currentTarget).find('.owl-height').attr('style','height:'+$(e.element).parents('.owl-item').outerHeight()+'px');
        //   });
        // }
        // if(view==='small'){
        //   window.addEventListener("resize",function(){
        //       getheight.stage=carousel.find('.owl-stage').height(),getheight.item=carousel.find('.owl-item.active').outerHeight();
        //       if(getheight.item<getheight.stage){
        //           $('.owl-item.active',carousel).attr('style','margin-bottom:'+(getheight.stage-getheight.item)+'px');
        //       }
        //   }, false);
        // }
        len=carousel.find('.owl-item:not(.cloned)').length;
        if(len<=1){//write counter
          carousel.parent().find('.sn-nav-left,.sn-nav-right').addClass('inactive');
        }
        $('.owl-nav',carousel).prepend('<span class="sn-counter"><span class="current">1</span> of '+len+'</span>');

        $('.owl-nav',carousel).append(''+
          '<a class="sn-fullscreen sn-open" role="button">'+
          '<span class="sn-icon">Open in full screen mode</span>'+
          '</a>'+
          '<a class="sn-fullscreen sn-close" role="button">'+
          '<span class="sn-icon">Exit full screen mode</span>'+
          '</a>'+
        '');
        
        owl.on('changed.owl.carousel',function(e){//update counter and hide/show nav arrows
          shownum=e.item.index-1;
          if(options.loop===true){
              if(shownum>e.item.count){
                shownum=1;
              }
              else if(shownum<1){
                shownum=e.item.count;
              }
          }
          else{
            shownum=(e.item.index+1);
          }
          $(e.target).find('.current').text(shownum);
          if(options.loop===false){
            if(e.item.index===0){
              carousel.parent().find('.sn-nav-left,.owl-prev').addClass('inactive');
              carousel.parent().find('.sn-nav-right,.owl-next').removeClass('inactive');
            }
            else if((e.item.index+1)===e.item.count){
              carousel.parent().find('.sn-nav-right,.owl-next').addClass('inactive');
              carousel.parent().find('.sn-nav-left,.owl-prev').removeClass('inactive');
            }
            else{
              carousel.parent().find('.sn-nav-left,.owl-prev,.sn-nav-right,.owl-next').removeClass('inactive');
            }
          }
          if(options.share===true){
            snCarousel.socialtext(carousel,e.item.index);
          }
        });
        $(owl).parent().find('.sn-nav-left').click(function(){//event for custom nav - previous item
          owl.trigger('prev.owl.carousel');
        });
        $(owl).parent().find('.sn-nav-right').click(function(){//event for custom nav - next item
          owl.trigger('next.owl.carousel');
        });
      });
      snCarousel.fullscreenmode();
    }
};
$(document).ready(function(){'use strict';
  var carousel=$('.owl-carousel'),view=snCarousel.view();
  if(carousel.length){
    snCarousel.init(view);
  }
});
var snVideo={
    data:function(jsonobj, num){'use strict';
        /**
         * used to return an object that contains the HTML and some settings / params for the video
         jsonobj: dom node which is a script elem containing some json
         num: a unique number we can use for a dom node id attribute
         intended use: return all the details / items needed to create the video
         */
        var obj, video = {};
        var isJsonValid = true;
        console.log("Inside sn video data>>>>>>>>>>>>>>>>>>>>>>>>." + jsonobj.html());

        //get video details from HTML
        try {
            obj = $.parseJSON(jsonobj.html());
         }
        catch (e) {
            isJsonValid = false;
            console.log("error: "+e);
        };

        console.log("exception flag   + "+ isJsonValid);
        if(isJsonValid)
        {
        //set some defaults
        video.skymodallogo = '/content/dam/skynews/banner/images/skymodallogo.png';
        video.title = '';
        video.modaltitle = '';
        video.alt = '';
        video.desc = '';
        video.modaldesc = '';
        video.image = '<img src="/content/dam/skynews/default-images/sn-default.jpg/_jcr_content/renditions/skynews.img.368.276.jpeg" style="width:100%;min-height:60px;max-height:220px;background-color:#CCC">';
        video.playicon = '';
        video.oodiv = '';
        video.oodivid = '';
        video.vertical = '';
        video.autoplay = false;
        video.duration='';
        video.article = '';
        video.size='large';
        video.articlePath = '';


        console.debug(jsonobj.html());
        console.log(obj);

        console.log("obj.size 1<<<<<<<<<<<<<<<<<<<"+obj.video.size);

        if(obj.video.size !=='')    {
            console.log("obj.size 2<<<<<<<<<<<<<<<<<<<"+obj.video.size);
            video.size = obj.video.size;
        }

        if(obj.video.duration !=='')    {
            console.log("obj.duration<<<<<<<<<<<<<<<<<<<"+obj.video.duration);
            video.duration = obj.video.duration;
        }

        if(obj.article !=='')    {
            console.log("obj.article<<<<<<<<<<<<<<<<<<<"+obj.article);
            video.article = obj.article;
        }

        if(obj.articlePath !=='')    {
            console.log("obj.articlePath<<<<<<<<<<<<<<<<<<<"+obj.articlePath);
            video.articlePath = obj.articlePath;
        }

        //TITLE
        if ( obj.title !== '' ) {
            video.title = '<h2>' + obj.title + '</h2>';//play-in-place
            video.modaltitle = '<span class="tm-title">' + obj.title + '</span>';//modal
            video.alt = obj.title;//use title for alt text
        }

        //DESCRIPTION
        if ( obj.description !== '' || obj.description === 'null' ) {
            video.desc = obj.description;
            video.deschtml = $.parseHTML( video.desc );//parse HTML since the description may contain some limited HTML such as links

            //wrap nodeValue assignment in try / catch in case of malformed HTML
            try {
                video.desc = video.deschtml[0].nodeValue;
            }
            catch(ignore){
            }
            video.desc = video.desc;//play-in-place
            video.modaldesc = '<div class="tm-desc">' + video.desc + '</div>';//modal
        }

        //IMAGE
        if ( obj.image !== '' ) {
            video.image = '<img src="' + obj.image + ' " alt="' + video.alt + ' " style="width:100%;cursor:pointer">';
        }

        //VERTICAL
        //if no vertical, then...
        if ( obj.video.vertical === '' ) {
            obj.video.vertical = 'unspecified';//write a default
        }

        console.log("hiding...."+ "#"+video.article+"-no-json");
        console.log("hiding...."+ "#"+video.article+"-vid-no-json");
        console.log($("#"+video.article+"-no-json"));
        $("#"+video.article+"-no-json").hide();
        $("#"+video.article+"-vid-no-json").hide();
        //removed non-alpha chars from vertical string and make lowercase
        video.vertical = obj.video.vertical.replace(/[^a-zA-Z]+/g, '').toLowerCase();

        //ID STRINGS
        video.oodivid = 'tmv' + video.vertical + num;//id value for video node
        video.modalid = 'tm-modal-' + video.vertical + num;//modal id value

        //PLAY ICON
        //video.playicon = '<span class="vid-play"><p>'+video.duration+'</p><span class="sn-icon"></span></span>';//play icon node
        video.playicon = '<span class="icon-play"></span>';//play icon node

        //OOYALA DIV
        //HTML required for Ooyala, set background

        if((obj.video.playinplace  === 'true' || 
            (obj.noticeFlag === 'false' || obj.noticeFlag === 'undefined')) && video.size === 'small')
        {
            video.oodiv = '' +
            '<div class="ooyalaVideoDiv sn-small" id="' + video.oodivid + '" style="background:#333 url(' + obj.image + ') no-repeat center top;background-size:cover;margin-bottom:50px"></div>';
        }
        else if((obj.video.playinplace  === 'true' || 
            (obj.noticeFlag === 'false' || obj.noticeFlag === 'undefined')) && video.size === 'medium')
        {
            video.oodiv = '' +
            '<div class="ooyalaVideoDiv sn-medium" id="' + video.oodivid + '" style="background:#333 url(' + obj.image + ') no-repeat center top;background-size:cover;margin-bottom:50px"></div>';
        }
        else if((obj.video.playinplace  === 'true' || 
            (obj.noticeFlag === 'false' || obj.noticeFlag === 'undefined')) && video.size === 'large')
        {
            video.oodiv = '' +
            '<div class="ooyalaVideoDiv sn-large" id="' + video.oodivid + '" style="background:#333 url(' + obj.image + ') no-repeat center top;background-size:cover;margin-bottom:50px"></div>';
        }
        else
        {
            video.oodiv = '' +
            '<div class="ooyalaVideoDiv" id="' + video.oodivid + '" style="background:#333 url(' + obj.image + ') no-repeat center top;background-size:cover;overflow:hidden;margin-bottom:0px"></div>';
        }

        //PLAY-IN-PLACE
        //if playinplace selected, then...
        if (obj.video.playinplace === 'true' ) {
            console.log("obj.video.playinplace::"+obj.video.playinplace);
            //if autoplay option selected, then...
            if ( obj.video.autoplay  === 'true' ) {
                video.autoplay = true;//set autoplay boolean
                video.template = '' +
                    '<div class="tm-content"><div class="videoplacer clearfix">' + video.oodiv + '</div></div>';
                video.template1 = '';
            }
            //else return alternate HTML
            else{
                console.log("image..................."+video.image);
                 video.template = '' +
                    '<div class="tm-link"><span class="tm-imgwrap">' +
                    '<div class="vid-play"><p>'+video.duration+'</p><span class="sn-icon"></span></div>' +
                    video.image +
                    '</span></div>' +
                    '<div class="tm-content" style="display:none">' +
                    '<div class="videoplacer">' + video.oodiv + '</div>' +
                    '</div>';
				video.template1 = '';
                console.log("video.template..................."+video.template);
            }
        }
        //MODAL
        //else create HTML for modal
        else {
            if( obj.noticeFlag === 'true'){
                video.template = '' +
    
                    '<label for="' + video.modalid + '" class="tm-modal-link">' +
                    '<span class="tm-imgwrap">' +
                    '<span class="vid-play"><p>'+video.duration+'</p><span class="sn-icon"></span></span>' +
                    video.image +
                    '</span>' +
                    '</label>' ;

                video.template1 = '' +
                    '<input type="checkbox" class="tm-modal-check" id="' + video.modalid + '">' +
                    '<div class="tm-modal-content notice-modal" id="tm-modal-content-'+num+'">' +
                    '<div class="tm-modal-inner">' +
                    '<a href="/news.html" title="Sky News" class="tm-modal-logo">Skynews Modal</a>'+
                    '<span class="tm-modal-close" id="tm-modal-close-'+num+'">' +
                    '<label for="' + video.modalid + '">Close <span class="tm-icon">X</span></label>' +
                    '</span>' +
                    '<div class="videoplacer clearfix">' + video.oodiv + '</div>' +
                    video.modaltitle + video.modaldesc +
                    '</div>' +
                    '</div>';
            }
            else{
                //video-play button class
                if(obj.vidPlay === '' || typeof obj.vidPlay === 'undefined'){
                    console.log("-----obj.vidPlay undefined---------------------");
                    video.vidPlay = 'vid-play';
                }else{
                    console.log("-----obj.vidPlay-------------------");
                    video.vidPlay = obj.vidPlay;
                }

                video.template = '' +
                    '<input type="checkbox" class="tm-modal-check" id="' + video.modalid + '">' +
                    '<label for="' + video.modalid + '" class="tm-modal-link">' +
                    '<span class="tm-imgwrap">' +
                    '<span class="' + video.vidPlay + '"><p>'+video.duration+'</p><span class="sn-icon"></span></span>' +
                    video.image +
                    '</span>' +
                    '</label>' +
                    '<div class="tm-modal-content">' +
                    '<div class="tm-modal-inner">' +
                    '<a href="/news.html" title="Sky News" class="tm-modal-logo">Skynews Modal</a>'+
                    '<span class="tm-modal-close">' +
                    '<label for="' + video.modalid + '">Close <span class="tm-icon">X</span></label>' +
                    '</span>' +
                    '<div class="videoplacer clearfix">' + video.oodiv + '</div>' +
                     video.modaltitle + video.modaldesc +
                     '</div>' +
                     '</div>';

				video.template1 = '';
    
                console.log("video description is -------------->>>>>>>>>>>>>>>>>>>> "+ video.desc);
                console.log(video);
            }
        }
        //return object
        return ({
            'template' : video.template,//video HTML
            'template1' : video.template1,//video HTML
            'player' : obj.video.player,//player ID for Ooyala HTTP request (string)
            'embed' : obj.video.embed,//embedCode for Ooyala request param (string)
            'adset' : obj.video.adset,//adSetCode for Ooyala request request (string)
            'vertical' : video.vertical,//vertical for LiveRail param (string)
            'autoplay' : video.autoplay,//autoplay option for Ooyala param (boolean)
            'oodiv' : video.oodivid,//node ID for Ooyala create method param (string)
            'article' : video.article,
            'duration': video.duration,
            'articlePath': obj.articlePath
        });
        }
        else {
            $("#"+video.article+"-no-json").show();
            $("#"+video.article+"-vid-no-json").show();
            return '';
        }
    },
    embeded: [
    /**
     * used to to hold a collection of video embedcodes
     intended use: pause all other videos when selected video is playing
     */
    ]
};
$(document).ready(function(){'use strict';

    console.log("document.ready called.......................................................js loading");
    var nsStr = '',//variable to hold namespace string (using vertical string val)
        nsList = {};//object to hold a collection of videos grouped by namespace, e.g. nsList: { nrl[], sportsfan[], tmmedia[] }
    var isPlaying = 0;
    //iterate through video nodes found in dom and add them to nsList object
    $('#main').find('.ooyala-json').each(function(i){
        //call tmh.video.data method to return template and options
        var use = snVideo.data($(this), i);
        console.log("Inside sn video");
        console.log(use);

        if(use !=='')
        {
            //create parent <article> and appen d to HTML
            //use.articleid = 'tmvarticle'+i;
            //use.article='<article id="' + use.articleid + '">' + use.template + '</article>';
            console.log("video.template before appending......................."+use.template);
            $(this).parent().append(use.template);
            console.log($(this).parent());
            //----------------sol for noticeboard component popup---

           if(use.template1 === ''){
					console.log("........not in template1...............");
            }else{
				console.log("........in template1...............");
                $(".owl-wrapper-outer").append(use.template1);
                $(".notice-modal").hide();
                $('.tm-modal-close').click(function(){
                    $(".notice-modal").hide();
                    //$("div:contains(tm-modal-content-)").hide(); 
                    $("#"+"tm-modal-content-"+i).hide();
                 });
                 ($(this).parent()).click(function(){
					if(window.matchMedia('(min-width: 768px)').matches)
					{
						$("#"+"tm-modal-content-"+i).show();
					}
					else if(use.articlePath !== 'undefined')
					 {
						 window.location = use.articlePath+".html";
					 } 
    
                 });
            }
            console.log("use.player----------->"+use.player);

            //if there is a playerid, then...
            if ( use.player !== '' ){
                console.log("player id is not blank");
                //use vertical value to create namespace string
                nsStr = ''+use.vertical;
                //if there is no array for the namespace, then...
                if (typeof nsList[nsStr] === 'undefined') {
                    //create an array
                    nsList[nsStr] = [];
                }

                console.log("nsStr....."+ nsStr);
                //push video item into (namespace) array
                nsList[nsStr].push({
                    'player' : use.player,//player ID
                    'embed' : use.embed,//embedCode
                    'adset' : use.adset,//adSetCode
                    'vertical' : use.vertical,//LiveRail vertical
                    'autoplay' : use.autoplay,//option param
                    'vid' : use.oodiv,//node ID
                    'article' : use.article,//parent ID
                    'duration': use.duration,
                    'articlePath': use.articlePath
                });

                console.log("use.article???????????????????"+ use.article);
            }

            //add video embedCode to tmh.video.embeded array
            snVideo.embeded.push(use.article);
        }
    });

    //iternate through nsList by namespace group
    $.each( nsList, function( ns ) {

        var item = {};
        item.ns = 'tmOO'+ns;//set namespace value

        //send request to Ooyala Player API using player id and namespace
        //the namespace allows multiple independant players (used for  verticals)
        $.ajax({
                url: '//player.ooyala.com/v3/' + nsList[ns][0].player + '?namespace='+item.ns,
                dataType: 'script',
                cache:true
            })
            .success(function(){

                //on success, iternate through all videos in namespace group
                $.each( nsList[ns], function( i, obj ) {
                    console.log("printing object now+++++++++++++++");

                    var tmOO = window[item.ns],//video object
                        video = obj.embed,//get embedCode
                        article;

                    document.tmOO = document.tmOO || {};//create document object if not existing
                    console.log(obj);
                    //wrap player create in ready method to ensure the script is initialised and loaded
                    tmOO.ready(function(){

                        //create the player and set parameters
                        document.tmOO[obj.article + "-" + i] = tmOO.Player.create(
                            obj.vid,//ID of the dom node to which attach the player object
                            video,//embedCode for this video
                            {
                                adSetCode: obj.adset,
                                autoplay: obj.autoplay,

                                //using onCreate method to ensure the player is ready before attaching events etc
                                onCreate: function(video) {

                                    //create object for listening to messageBus events
                                    window.messageBus = video.mb;
                                    //parent dom node
                                    article = tmOO.$('#'+obj.article);
                                    console.log("printing articles " + video.embedCode);
                                    console.log(obj.article + "-" + i);
                                    console.log(document.tmOO);
                                    console.log(document.tmOO[video.embedCode]);
                                    console.log(article.find('.tm-modal-close'));

                                    //attach event handler to modal close
                                    article.find('.tm-modal-close').on('click',function(){
                                        //pause video

                                        console.log("Pause video/////////////////////"+obj.article + "-" + i);
                                        console.log(article);
                                        document.tmOO[obj.article + "-" + i].pause();
                                        console.log("printing pause");
                                        console.log(document.tmOO);
                                    });

                                    console.log("video.oodivid................>>>>>>>>"+video.oodivid);

                                    //attach event handler to modal open
                                    article.find(".tm-modal-link").on('click',function(){
                                        if(window.matchMedia('(min-width: 768px)').matches)
                                        {
                                            //play video
                                            console.log("play modal-link video/////////////////////"+obj.article + "-" + i);
                                            console.log(article);
                                            document.tmOO[obj.article + "-" + i].play();
                                        }
                                        else if(obj.articlePath !== 'undefined')
                                        {
                                            console.log("article path is" + obj.articlePath);
                                            console.log(obj);
                                            $(".tm-modal-content").hide();
                                            window.location = obj.articlePath+".html";
                                        }
                                    });

                                    //attach event handler to play-in-place click
                                    article.find('.tm-link').on('click',function(){
                                        if(window.matchMedia('(min-width: 768px)').matches)
                                        {
                                            console.log("play tm-link video/////////////////////");
                                            article.find('.tm-imgwrap').hide();//hide video image
                                            article.find('.tm-content').show();//show video
                                            article.find('.caption').hide();//hide caption
                                            //play video
                                            document.tmOO[obj.article + "-" + i].play();
                                        }
                                        else if(obj.articlePath !== 'undefined')
                                        {
                                            console.log("article path is" + obj.articlePath);
                                            console.log(obj);
                                            window.location = obj.articlePath+".html";
                                        }
                                    });

                                    //subscribe to PLAYING event
                                    //used to pause any other videos so only one plays at a time
                                    window.messageBus.subscribe(tmOO.EVENTS.PLAYING,'tmvideo',function(eventName, payload){
                                        //iternate through array of embedCodes
                                        $.each(snVideo.embeded, function(index, item) {
                                            console.log("Searching video"+ obj.article + "-" + i);
                                            //if the embedCode doesn't match the currently playing video, then...
                                            if ( item + "-" + index !== (obj.article + "-" + i) ) {
                                                console.log("pausing video"+ obj.article + "-" + i);
                                                console.log(item);
                                                console.log(document.tmOO[item + "-" + index]);
                                                console.log(document.tmOO);
                                                //pause video
                                                document.tmOO[item + "-" + index].pause();
                                            }
                                        });
                                    });

                                    //call additionalEmbed function (in file: videoplayer.js)
                                    try {
                                        window.s = window.s || {};//create s object if not existing
                                        additionalEmbed(video, item.ns);//pass in video object and namespace
                                    }
                                    catch(ignore){}
                                }
                            });
                    });
                });
            });
    });
});

$(document).ready(function() {
    var backColor=$("#backColor").val();
    if(backColor==undefined || backColor==''){
        backColor="#be2819";
    }
     $('.block').css('background',backColor);
    var backHoverColor=$("#backHoverColor").val();
    if(backHoverColor==undefined || backHoverColor==''){
        backHoverColor="#800000";
    }
    var fontColor=$("#fontColor").val();
    if(fontColor==undefined || fontColor==''){
        fontColor="white";
    }
    $(".white").css('color',fontColor);
    var fontSize=$("#fontSize").val();
    if(fontSize==undefined || fontSize==''){
        fontSize="1.229em";
    }else if(!fontSize.endsWith("px") && !fontSize.endsWith("em")){
        fontSize="1.229em";
    }
    $(".block h4").css('font-size',fontSize);
    var titleFontSize=$("#titleFontSize").val();
    if(titleFontSize==undefined || titleFontSize==''){
        titleFontSize="0.857em";
    }else if(!titleFontSize.endsWith("px") && !titleFontSize.endsWith("em")){
        titleFontSize="0.857em";
    }
    $(".block p").css('font-size',titleFontSize);
$(".container-fluid .tab-content").hide();
$(".container-fluid >.tab-content:first-child").show();
    $("#tab-list li" ).on('click',function(e){
		e.preventDefault(); 
		$(this).parent().parent().parent().find( "#tab-list li" ).each(function( index ) {
		$(this).css('text-decoration','none');

		})
   $(this).css('text-decoration','overline');
        $(this).css('-moz-text-decoration-color','#00BFFF');
        $(this).css('text-decoration-color','#00BFFF');
  var s= $( this ).attr('id').slice(-1);
  $(this).parent().parent().parent().find(".container-fluid .tab-content").hide();
	$(this).parent().parent().parent().find("#tab-content"+s).show();
});

$('div.wrapper img').hover(
  function() {
     $( this ).parent().next().css('background',backHoverColor);
      $( this ).css("-webkit-transform","translateZ(0) scale(1.08)");
      $( this ).css("-moz-transform","translateZ(0) scale(1.08)");
      $( this ).css("-ms-transform","translateZ(0) scale(1.08)");
      $( this ).css("-o-transform","translateZ(0) scale(1.08)");
      $( this ).css("transform","translateZ(0) scale(1.08)");
  },
  function() {
    $( this ).parent().next().css('background',backColor);
       $( this ).prev().find('img').css("-webkit-transform","translateZ(0) scale(1)");
      $( this ).css("transform","translateZ(0) scale(1)");
      $( this ).css("-webkit-transition","all .4s ease-in-out");
      $( this ).css("transition","all .4s ease-in-out");
  }
);

     $('.block').hover(
  function() {
     $( this ).css('background',backHoverColor);
	 $( this ).prev().find('img').removeClass('zoom-out');
      $( this ).prev().find('img').addClass('zoom-in');
      $( this ).prev().find('img').css("-webkit-transform","translateZ(0) scale(1.08)");
      $( this ).prev().find('img').css("-moz-transform","translateZ(0) scale(1.08)");
      $( this ).prev().find('img').css("-ms-transform","translateZ(0) scale(1.08)");
      $( this ).prev().find('img').css("-o-transform","translateZ(0) scale(1.08)");
      $( this ).prev().find('img').css("transform","translateZ(0) scale(1.08)");
	  
  },
  function() {
    $( this ).css('background',backColor);
	$( this ).prev().find('img').removeClass('zoom-in');
      $( this ).prev().find('img').addClass('zoom-out');


       $( this ).prev().find('img').css("-webkit-transform","translateZ(0) scale(1)");
      $( this ).prev().find('img').css("transform","translateZ(0) scale(1)");
      $( this ).prev().find('img').css("-webkit-transition","all .4s ease-in-out");
      $( this ).prev().find('img').css("transition","all .4s ease-in-out");

  }
);

});
/*

 @name		 Dug.js — A JSONP to HTML Script
 @author     Rogie King <rogiek@gmail.com>
 @version	 1.0
 @license    WTFPL — http://en.wikipedia.org/wiki/WTFPL
 @donate	 My paypal email is rogiek@gmail.com if you want to buy me a brew.

*/

var dug = function( opts ){

	if(this.constructor != dug ){
		dug.instance = new dug( opts ).show();
		return dug.instance;
	}

	var options = {
			target: null,
			endpoint: '',
			templateDelimiters: ['{{','}}'],
			callbackParam: 'callback',
			cacheExpire: 1000 * 60 * 2,
			beforeRender: function(){},
			afterRender: function(){},
			success: function(){},
			error: function(){},
			template: 'You need a template, silly :P'
		},
		getTemplate = function( template ){
			var template = template || options.template,
				tpl;
			if( template.match(/^(#|\.)\w/) ){
				if( 'querySelectorAll' in document ){
					tpl = document.querySelectorAll( template );
					if( tpl.length > 0 ){
						tpl = tpl[0];
					}
				} else {
					tpl = document.getElementById( template.replace(/^#/,'') );
				}
				if( tpl && 'tagName' in tpl ){
					template = tpl.innerHTML;
				}
			}
			return template;
		},
		ext = function(o1,o2){
			for(var key in o2){
				if( key in o1 ){
					if( o1[key] && o1[key].constructor == Object ){
						ext(o1[key],o2[key]);
					}else{
						o1[key] = o2[key];
					}
				}
			}
		},
		limit = function(array,lim){
			if( typeof array.slice == 'function'){
				return array.slice(0,lim);
			}else{
				return array;
			}
		},
		ago = function(time){
			var date = new Date((time || "")),
				diff = (((new Date()).getTime() - date.getTime()) / 1000),
				day_diff = Math.floor(diff / 86400);
			if ( isNaN(day_diff) || day_diff < 0)
				return;
			return day_diff == 0 && (
					diff < 60 && "just now" ||
					diff < 120 && "1 minute ago" ||
					diff < 3600 && Math.floor(diff/60) + " minutes ago" ||
					diff < 7200 && "1 hour ago" ||
					diff < 86400 && Math.floor(diff/3600) + " hours ago") ||
				  day_diff == 1 && "Yesterday" ||
				  day_diff < 7 && day_diff + " days ago" ||
				  day_diff < 31 && Math.ceil(day_diff/7) + " week" + (Math.ceil(day_diff/7) > 1? 's' : '') + " ago" ||
				  day_diff < 365 && Math.ceil(day_diff/30) + " months ago" ||
				  day_diff >= 365 && Math.ceil(day_diff/365) + " year" + (Math.ceil(day_diff/365)>1?"s":"") + " ago";
		},
		cache = function( key, json ){
			if( (typeof localStorage !== undefined) && (typeof JSON !== undefined) ){
				var now = new Date().getTime(),
					cachedData = null;
				if( json == undefined ){
					try{ cachedData = JSON.parse(unescape(localStorage.getItem(key))); }catch(e){}
					if( cachedData ){
						if( (now - cachedData.time) < options.cacheExpire ){
							cachedData = cachedData.data;
						} else {
							localStorage.removeItem(key);
							cachedData = null;
						}
					}else{
						cachedData = null;
					}
					return cachedData;
				}else{
					try{
						localStorage.setItem(key, escape(JSON.stringify({time:now,data:json})));
					}catch(e){
						console.log(e);
					}
				}
			}else{
				return null;
			}
		},
		get = function(){
			dug.requests = (dug.requests == undefined? 1:dug.requests+1);
			var get = document.createElement('script');
			var	callkey = 'callback' + dug.requests,
				kids = document.body.children,
				script = document.scripts[document.scripts.length-1],
				url = render(options.endpoint),
				scriptInBody = script.parentNode.nodeName != 'head';
				dug[callkey] = function(json,cached){
					json = json.results? json.results : json;
					if( cached !== true ){
						cache(url,json);
					}
					var vessel = document.createElement('div');
					options.beforeRender.call(this,json);
					vessel.innerHTML = render( getTemplate() ,json, options.templateDelimiters);
					if( options.target == null ){
						script.parentNode.insertBefore(vessel,script);
						options.target = vessel;
					}else{
						if( options.target.nodeName ){
							options.target.innerHTML = vessel.innerHTML;
						}else if (typeof options.target == 'string' ){
							document.getElementById(options.target).innerHTML = vessel.innerHTML;
						}
					}
					options.afterRender.call(this,options.target);
					options.success.call(this,json);
				}
				get.onerror = options.error;
			if( cachedData = cache(url) ){
				dug[callkey](cachedData,true);
			}else{
				get.src = url + (url.indexOf('?') > -1? '&': '?') + options.callbackParam + '=dug.' + callkey;
				document.getElementsByTagName('head')[0].appendChild(get);
			}
		},
		init = function( opts ){
			if( opts && opts != undefined ){
				if (opts.constructor == Object) {
					ext(options,opts);
				}
			}
		};

	//private methods
	function render( tpl, data, delims ){

		tpl = unescape(tpl);

		function dotData( d,dotKey ){
   	   		var invert = '';

   	   		//run filters
   	   		var filters = dotKey.split('|'),
   	   			name 	= filters.shift();

   	   		if( name.indexOf("!") > -1 ){
   	   			name = name.replace(/!/ig,'');
   	   			invert = '!';
   	   		}
   	   		try{
   	   			val = eval(invert + "d['" + name.split('.').join("']['") + "']");
   	   			if( filters ){
   	   				for( var i =0, max = filters.length; i < max; ++i ){
   	   					var chunks = filters[i].split(':'),
   	   						filter = chunks.shift(),
   	   						params = chunks;

   	   					f = eval(filter);

	   	   				if( typeof f == 'function' ){
	   	   					newval = f.apply(d,[val].concat(params) );
	   	   				}
	   	   				console.log( 'FILTERS:', newval );
	   	   				val = newval;
	   	   			}
   	   			}
   	   		}catch(e){
   	   			val = '';
   	   		}
   	   		return val;
   		}
   		var delims = delims || ['{{','}}'];
   		var scopeMatch = new RegExp(delims[0] + '[^' + delims[1] + ']*' + delims[1], 'igm' );
        var matches = tpl.match(scopeMatch);

        if (!matches)
        	return tpl;

       	for( var i=0, matchCount = matches.length, m; m = matches[i], i < matchCount; i++ ){

            tagMatch 	= new RegExp(delims[0] + '|' + delims[1],'ig'),
            scopeName 	= m.replace(tagMatch,'');

		   	// # = scope iterator
		   	if( scopeName[0] == '#' ){
		   		name = scopeName.slice(1,scopeName.length);
		   		startFrag 	= tpl.indexOf( m );
		   		endFrag 	= tpl.indexOf( m.replace('#','/') ) + m.length;
		   		frag 		= tpl.substring( startFrag + m.length , endFrag - m.length );
		   		dataFrag    = dotData( data, name );
		   		rendered    = '';

		   		console.log('RETURNED FROM dotData: ',dataFrag);

		   		//loop over the scope
		   		if( dataFrag ){
			   		if( dataFrag.constructor == Array ){
			   			for( var i = 0, max = dataFrag.length; i < max; ++i ){
			   				rendered += render( frag, dataFrag[i] );
			   			}
			   		}else{
			   			rendered = render( frag, dataFrag, delims );
			   		}
			   		//recalculate fragment position (as contents may have shifted in flight)
			   		startFrag 	= tpl.indexOf( m );
		   			endFrag 	= tpl.indexOf( m.replace('#','/') ) + m.length;
			   		tpl = tpl.slice(0,startFrag) + rendered + tpl.slice(endFrag,tpl.length);
		   		}

		   	// regular variable
		   	} else {

		   		val = dotData(data,scopeName) || '';
		   		tpl = tpl.replace( m, val );
		   	}
		}

	   return tpl;
	}

	//public methods (getter/setters)
	for( var o in options ){
		(function(methodName){
			this[methodName] = function( arg ){
			if( arguments.length ){
				options[methodName] = arg;
			} else {
				return options[methodName];
			}
		}
		}).call(this,o);
	}

	this.show = function( opts ){
		init( opts );
		get();
		return this;
	}

	//utility methods
	dug.render = render;
	dug.extend = ext;
	dug.cache  = cache;
	dug.ago    = ago;
	dug.limit  = limit;

	init( opts );
}
//so that we can read vars
dug._script = document.scripts[document.scripts.length-1];


(function($){$.fn.extend({hideMaxListItems:function(options){var defaults={max:3,speed:1e3,moreText:"READ MORE",lessText:"READ LESS",moreHTML:'<p class="maxlist-more"><a href="#"></a></p>'};var options=$.extend(defaults,options);return this.each(function(){var op=options;var totalListItems=$(this).children("li").length;var speedPerLI;if(totalListItems>0&&op.speed>0){speedPerLI=Math.round(op.speed/totalListItems);if(speedPerLI<1){speedPerLI=1}}else{speedPerLI=0}if(totalListItems>0&&totalListItems>op.max){$(this).children("li").each(function(index){if(index+1>op.max){$(this).hide(0);$(this).addClass("maxlist-hidden")}});var howManyMore=totalListItems-op.max;var newMoreText=op.moreText;var newLessText=op.lessText;if(howManyMore>0){newMoreText=newMoreText.replace("[COUNT]",howManyMore);newLessText=newLessText.replace("[COUNT]",howManyMore)}$(this).after(op.moreHTML);$(this).next(".maxlist-more").children("a").html(newMoreText);$(this).next(".maxlist-more").children("a").click(function(e){var listElements=$(this).parent().prev("ul, ol").children("li");listElements=listElements.slice(op.max);if($(this).html()==newMoreText){$(this).html(newLessText);var i=0;(function(){$(listElements[i++]||[]).slideToggle(speedPerLI,arguments.callee)})()}else{$(this).html(newMoreText);var i=listElements.length-1;(function(){$(listElements[i--]||[]).slideToggle(speedPerLI,arguments.callee)})()}e.preventDefault()})}})}})})(jQuery);
var tileCarousel={
	view:function(){'use strict';
        var winWidth=parseInt($(window).width(),10),label='large';
        if(winWidth<=715){
          label='small';
        }
        return label;
    },

    options:function(carousel,view){'use strict';
      var autoplay=false,loop=false,nav=false,share=false;
      //autoplay option
      if(carousel.is('[data-autoplay]')){
        if(carousel.data('autoplay').toString()==='true'){
          autoplay=true;
          //loop=true;
        }
      }
      //navigation option
      if(carousel.is('[data-shownav]')){
        if(view==='small'||carousel.data('shownav').toString()==='true'){
          nav=true;
        }
      }
      //share images on social media option
      if(carousel.is('[data-share]')){
        if(carousel.data('share').toString()==='true'){
          share=true;
        }
      }
      //transition option value
		if(carousel.is('[data-transition]')){
			if(carousel.data('transition')==='fade'){
				transition='fade';
			}
		}
      return({'autoplay':autoplay,'loop':loop,'nav':nav,'share':share});
    },

    init:function(view){'use strict';
      var carousel,pagewrap=$('#main').find('.owl-carousel-video');
      var fivetilewrap = $('#main').find('.owl-carousel-video.noticeboard');
      var seventilewrap = $('#main').find('.owl-carousel-video.row.panels-content');
      var content,clone,options,speed=200,breakpoint=false,images={};  

      if(fivetilewrap.length >= 1){ 
		  var gallerycarousel=$('#main').find('.owl-carousel-video.noticeboard');
 		  gallerycarousel.each(function(index){
			carousel=$(this);
			options=tileCarousel.options(carousel,view);
			carousel.owlCarouselVideo({
				items:5,
				itemsDesktop:[1199,5],
				itemsTablet:[700,5],
				itemsTabletSmall:[500,5],
				itemsMobile: [479, 5],
				navigation:true,
				slideBy : 2,
				pagination:false,
				autoPlay:options.autoplay,
				transitionStyle:options.transition,
				navigationText:['<a><span class="sn-left-icon"></span></a>','<a><span class="sn-right-icon"></span></a>'],

				afterAction:function(el){
					//hide and show the arrows for slider nav
					if(this.currentItem===0){$('.owl-prev',gallerycarousel[index]).addClass('disabled-grey');$('.notice-heading').addClass('disabled-margin');}
					else{$('.owl-prev',gallerycarousel[index]).removeClass('disabled-grey'); $('.notice-heading').removeClass('disabled-margin');}
					if(this.currentItem===this.maximumItem){$('.owl-next',gallerycarousel[index]).addClass('disabled-grey');}
					else{$('.owl-next',gallerycarousel[index]).removeClass('disabled-grey');}
				}
			});
			$("#5tilediv").find('.owl-wrapper-outer').find('.owl-wrapper').attr({id:'owlwrapper5'});

		});
	} 

    if(seventilewrap.length >= 1){
        var gallerycarousel1=$('#main').find('.owl-carousel-video.row.panels-content');
		gallerycarousel1.each(function(index){
   		 //$('.owl-carousel.row.panels-content').attr({id:'7tilediv'+index});
         //var divId =  $('.owl-carousel.row.panels-content').attr('id')  ; 
         	//carousel=$(this);
            $(this).attr({id:'7tilediv'+index});
            carousel = $('#'+$(this).attr('id'));
            var divId = $(this).attr('id');

			options=tileCarousel.options(carousel,view);
			carousel.owlCarouselVideo({
				items:5,
				itemsDesktop:[1199,5],
				itemsTablet:[700,5],
				itemsTabletSmall:[500,5],
				itemsMobile: [479, 5],
				navigation:true,
				slideBy : 2,
				pagination:false,
				autoPlay:options.autoplay,
				transitionStyle:options.transition,
				navigationText:['<a><span class="sn-left-icon" style="margin-top:30px"></span></a>','<a><span class="sn-right-icon" style="margin-top:30px"></span></a>'],

				afterAction:function(el){
					//hide and show the arrows for slider nav
					if(this.currentItem===0){$('.owl-prev',gallerycarousel1[index]).addClass('disabled-grey');$('.mobile-view-header').addClass('disabled-margin');}
					else{$('.owl-prev',gallerycarousel1[index]).removeClass('disabled-grey');$('.mobile-view-header').removeClass('disabled-margin');}
					if(this.currentItem===this.maximumItem){$('.owl-next',gallerycarousel1[index]).addClass('disabled-grey');}
					else{$('.owl-next',gallerycarousel1[index]).removeClass('disabled-grey');}
				}
			});

            $("#" +divId).find('.owl-wrapper-outer').find('.owl-wrapper').attr({id:'owlwrapper7'});
			  if(window.matchMedia('(max-width: 768px)').matches)
			  {
				  $( "#" +divId ).addClass( "owl-theme noticeboard" );
			  }else
			  {
          		  $( "#" +divId ).removeClass( "owl-theme noticeboard" );
				  $( "#" +divId ).css({
						   "height": "auto",
						  });

                  if($("#" +divId).find('.owl-wrapper-outer').find('.owl-wrapper').attr('id') == 'owlwrapper7'){
                    var cnt = $("#owlwrapper7").contents();
                    $("#owlwrapper7").replaceWith(cnt);
                    //var cnt1 = $("#" +divId).find('.owl-wrapper-outer').find('.owl-item').contents();
                    //$("#" +divId).find('.owl-wrapper-outer').find('.owl-item').replaceWith(cnt1);
                    var owlitem = $("#" +divId).find('.owl-wrapper-outer').find('.owl-item');
                    owlitem.each(function(index){
						$(this).attr({id:'owlitem'+index});
                        var cnt1 = $(this).contents();
                    	$(this).replaceWith(cnt1);

                     });
                 } 

			  }


		});

    }

   }
};
$(document).ready(function(){'use strict';
  var carousel=$('.owl-carousel-video'),view=tileCarousel.view();
  if(carousel.length){
	    tileCarousel.init(view);
  }
});
/**
 * jQuery OwlCarousel v1.3.3
 *
 * Copyright (c) 2013 Bartosz Wojciechowski
 * http://owlgraphic.com/owlcarousel/
 *
 * Licensed under MIT
 * https://github.com/OwlFonk/OwlCarousel/blob/master/LICENSE
 *
 * ----  CHROME FIX FOR TRANSITION DETECTION  ----
 *
 */
if (typeof Object.create !== "function") {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F()
    }
}(function($, window, document) {
    var videoCarousel = {
        init: function(options, el) {
            var base = this;
            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarouselVideo.options, base.$elem.data(), options);
            base.userOptions = options;
            base.loadContent()
        },
        loadContent: function() {
            var base = this,
                url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data])
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item
                        }
                    }
                    base.$elem.html(content)
                }
                base.logIn()
            }
            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem])
            }
            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData)
            } else {
                base.logIn()
            }

        },
        logIn: function() {
            var base = this;
            base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
            base.$elem.data("owl-originalClasses", base.$elem.attr("class"));
            base.$elem.css({
                opacity: 0
            });
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars()
        },
        setVars: function() {

            var base = this;
            if (base.$elem.children().length === 0) {
                return false
            }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup()
        },
        onStartup: function() {

            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();
            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle)
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000
            }
            base.play();
            base.$elem.find(".owl-carousel-video").css("display", "block");
            base.$elem.find(".owl-wrapper").css("display", "block");
            if (!base.$elem.is(":visible")) {
                base.watchVisibility()
            } else {
                base.$elem.css("opacity", 1)
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem])
            }

        },
        eachMoveUpdate: function() {
            var base = this;
            if (base.options.lazyLoad === true) {
                base.lazyLoad()
            }
            if (base.options.autoHeight === true) {
                base.autoHeight()
            }
            base.onVisibleItems();
            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem])
            }
        },
       updateVarFor7Tile: function() {
           //--This method req when swtiching between desktop and mobile view for 7TILE component
           var sevenTileCarousel = $('#main').find('.owl-carousel-video.row.panels-content');
           var base = this;
           sevenTileCarousel.each(function(index){
  		        var divId = $(this).attr('id');
                if(window.matchMedia('(max-width: 768px)').matches)
                {
					//--Add carousel classes for mobile view for 7TILE component
                    if($("#" +divId).find('.owl-wrapper-outer').find('.owl-wrapper').length == 0){
                        $("#" +divId ).addClass( "owl-theme noticeboard" );
                        $("#" +divId).find('.owl-wrapper-outer').find('.col-md-4').wrap("<div class=\"owl-item pull-left headline-small-left img-load fl-none\"></div>");
                        $("#" +divId).find('.owl-wrapper-outer').find('.owl-item').wrapAll('<div class=\"owl-wrapper\"></div>');
                        $("#" +divId).find('.owl-wrapper-outer').find('.owl-wrapper').attr({id:'owlwrapper7'});

                	}
                }else{
                    //--Remove carousel classes for mobile view for 7TILE component
                    $( "#" +divId ).removeClass( "owl-theme noticeboard" );
                    $( "#" +divId ).css({
                       "height": 400,
                      });
                    $("#" +divId).find('.owl-wrapper-outer').find('.owl-wrapper').attr({id:'owlwrapper7'});
                    if($("#" +divId).find('.owl-wrapper-outer').find('.owl-wrapper').attr('id') == 'owlwrapper7'){
                        var cnt = $("#owlwrapper7").contents();
                        $("#owlwrapper7").replaceWith(cnt);
                        var owlitem = $("#" +divId).find('.owl-wrapper-outer').find('.owl-item');
                        owlitem.each(function(index){
                            $(this).attr({id:'owlitem'+index});
                            var cnt1 = $(this).contents();
                            $(this).replaceWith(cnt1);
    
                         });
                    } 

                }
         });
       },
        updateVars: function() {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem])
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem])
            }
        },
        reload: function() {
            var base = this;
            window.setTimeout(function() {
                base.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var base = this;
            if (base.$elem.is(":visible") === false) {
                base.$elem.css({
                    opacity: 0
                });
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible)
            } else {
                return false
            }
            base.checkVisible = window.setInterval(function() {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({
                        opacity: 1
                    }, 200);
                    window.clearInterval(base.checkVisible)
                }
            }, 500)
        },
        wrapItems: function() {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item pull-left headline-small-left img-load fl-none\"></div>");
	        base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block")
        },
        baseClass: function() {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);
            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass)
            }
            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme)
            }
        },
        updateItems: function() {
            var base = this,
                width,height, i;
            if (base.options.responsive === false) {
                return false
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false
            }
            width = $(base.options.responsiveBaseWidth).width();
            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems
            }
            if (base.options.itemsCustom !== false) {
                base.options.itemsCustom.sort(function(a, b) {
                    return a[0] - b[0]
                });
                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1]
                    }
                }
            } else {
                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1]
                }
                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1]
                }
                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1]
                }
                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1]
                }
                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1]
                }
            }

            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount
            }
        },
        response: function() {
            var base = this,
                smallDelay, lastWindowWidth;
            if (base.options.responsive !== true) {
                return false
            }
            lastWindowWidth = $(window).width();
            base.resizer = function() {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval)
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function() {
                        lastWindowWidth = $(window).width();
                        base.updateVarFor7Tile();
                        base.updateVars()
                    }, base.options.responsiveRefreshRate)
                }
            };
            $(window).resize(base.resizer)
        },
        updatePosition: function() {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp()
            }
        },
        appendItemsSizes: function() {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;
            var windowWidth = $(window).width();
            var itemHeight = 0.210 * windowWidth; //set height to 21.0 % of window width for mobile view
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlItems.each(function(index) {
                var $this = $(this);
                //---------Media-------------------
            if(window.matchMedia('(max-width: 768px)').matches)
            {

                $this.css({
                    "width": 100+"%",
                   "height": itemHeight + "px"
                 }).data("owl-item", Number(index));
            }else{
                $this.css({
                    "width": base.itemWidth,
                    "height":200 + "px"
                }).data("owl-item", Number(index));
            }

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1
                    }
                }
                $this.data("owl-roundPages", roundPages)
            })

        },
        appendWrapperSizes: function() {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;
			base.$elem.find(".owl-wrapper").css("display", "block");
			//---------Media-----------
            if(window.matchMedia('(max-width: 768px)').matches)
            {
                base.appendItemsSizes();
                var currentItemHeight = ($(base.$owlItems[0]).height());
                //set owl-wrapper class div height
                if(base.$owlItems.length <5){
                    var height = (currentItemHeight + 20) * base.$owlItems.length ;
                }else{
                    var height = (currentItemHeight + 20) * 5;
                }

                base.wrapperCarousel = base.$elem.find(".owl-carousel-video");
                base.$elem.css("height", height+45);
                base.$owlWrapper = base.$elem.find(".owl-wrapper");
                base.$owlWrapper.css({
                   "width": 100+"%",
                   "height": height,
                   "top": 0
                });
            }else{
                base.wrapperCarousel = base.$elem.find(".owl-carousel-video");
                var divId = base.$elem.attr('id')  ;
                if(divId.indexOf('7tilediv') >= 0){//for 7-TILE
                    base.$elem.css({
                    	"height": 400
                    });
                }else{//for 5-TILE
					base.$elem.css("height", 220);
                }

                base.$owlWrapper.css({
                "width": width * 2,
                "height": 200 + "px",
                "left": 0
                });

                base.appendItemsSizes();

            }

            //---------------------------------

        },
        calculateAll: function() {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max()
        },
        calculateWidth: function() {
            var base = this;
            //alert("base.$elem.width():"+base.$elem.width());

            base.itemWidth = Math.round(base.$elem.width() / base.options.items)
        },

        max: function() {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum
            }
            return maximum
        },
        min: function() {
            return 0
        },
        loops: function() {
            var base = this,
                prev = 0,
                elWidth = 0,
                i, item, roundPageNum;
            base.positionsInArray = [0];
            base.pagesInArray = [];
            var currentItemHeight = ($(base.$owlItems[0]).height())+22;
	        for (i = 0; i < base.itemsAmount; i += 1) {
                if(window.matchMedia('(max-width: 768px)').matches)
                {
                    elWidth += currentItemHeight; 
                }else{
                	elWidth += base.itemWidth;
                }
                base.positionsInArray.push(-elWidth);
                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum
                    }
                }
            }
        },
        buildControls: function() {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem)
            }
            if (base.options.pagination === true) {
                base.buildPagination()
            }
            if (base.options.navigation === true) {
                base.buildButtons()
            }
        },
        buildButtons: function() {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);
            base.buttonPrev = $("<div/>", {
                "class": "owl-prev",
                "html": base.options.navigationText[0] || ""
            });
            base.buttonNext = $("<div/>", {
                "class": "owl-next",
                "html": base.options.navigationText[1] || ""
            });
            buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);
            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event) {
                event.preventDefault()
            });
            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next()
                } else {
                    base.prev()
                }
            })
        },
        buildPagination: function() {
            var base = this;
            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);
            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true)
                }
            })
        },
        updatePagination: function() {
            var base = this,
                counter, lastPage, lastItem, i, paginationButton, paginationButtonInner;
            if (base.options.pagination === false) {
                return false
            }
            base.paginationWrapper.html("");
            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;
            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items
                    }
                    paginationButton = $("<div/>", {
                        "class": "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);
                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);
                    base.paginationWrapper.append(paginationButton)
                }
            }
            base.checkPagination()
        },
        checkPagination: function() {
            var base = this;
            if (base.options.pagination === false) {
                return false
            }
            base.paginationWrapper.find(".owl-page").each(function() {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper.find(".owl-page").removeClass("active");
                    $(this).addClass("active")
                }
            })
        },
        checkNavigation: function() {
            var base = this;
            if (base.options.navigation === false) {
                return false
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled")
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled")
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled")
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled")
                }
            }
        },
        updateControls: function() {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide()
                } else {
                    base.owlControls.show()
                }
            }
        },
        destroyControls: function() {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove()
            }
        },
        next: function(speed) {
            var base = this;
            if (base.isTransition) {
                return false
            }
            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind"
                } else {
                    base.currentItem = base.maximumItem;
                    return false
                }
            }
            base.goTo(base.currentItem, speed)
        },
        prev: function(speed) {
            var base = this;
            if (base.isTransition) {
                return false
            }
            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind"
                } else {
                    base.currentItem = 0;
                    return false
                }
            }
            base.goTo(base.currentItem, speed)
        },
        goTo: function(position, speed, drag) {
            var base = this,
                goToPixel;
            if (base.isTransition) {
                return false
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem])
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem
            } else if (position <= 0) {
                position = 0
            }
            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position])
                } else {
                    base.css2slide(base.positionsInArray[position], 1)
                }
                base.afterGo();
                base.singleItemTransition();
                return false
            }
            goToPixel = base.positionsInArray[position];
            if (base.browser.support3d === true) {
                base.isCss3Finish = false;
                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function() {
                        base.isCss3Finish = true
                    }, base.options.paginationSpeed)
                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function() {
                        base.isCss3Finish = true
                    }, base.options.rewindSpeed)
                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function() {
                        base.isCss3Finish = true
                    }, base.options.slideSpeed)
                }
                base.transition3d(goToPixel)
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed)
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed)
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed)
                }
            }
            base.afterGo()
        },
        jumpTo: function(position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem])
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem
            } else if (position <= 0) {
                position = 0
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position])
            } else {
                base.css2slide(base.positionsInArray[position], 1)
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo()
        },
        afterGo: function() {
            var base = this;
            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);
            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();
                if (base.options.autoPlay !== false) {
                    base.checkAp()
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem])
            }
        },
        stop: function() {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval)
        },
        checkAp: function() {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play()
            }
        },
        play: function() {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function() {
                base.next(true)
            }, base.options.autoPlay)
        },
        swapSpeed: function(action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed))
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed))
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action))
            }
        },
        addCssSpeed: function(speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            }
        },
        doTranslate: function(pixels) {
            if(window.matchMedia('(max-width: 768px)').matches)
                {
                     return {
                   "-webkit-transform": "translate3d(0px, " + pixels + "px, 0px)",
                    "-moz-transform": "translate3d(0px, " + pixels + "px, 0px)",
                    "-o-transform": "translate3d(0px, " + pixels + "px, 0px)",
                    "-ms-transform": "translate3d(0px, " + pixels + "px, 0px)",
                    "transform": "translate3d(0px, " + pixels + "px,0px)"
    
                }
                }else{
                    return {
                        "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                        "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                        "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                        "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                        "transform": "translate3d(" + pixels + "px, 0px,0px)"
                    }

                }


        },
        transition3d: function(value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value))
        },
        css2move: function(value) {
            var base = this;
		if(window.matchMedia('(max-width: 768px)').matches)
            {
                base.$owlWrapper.css({"top" : "-" +value});
            }
            else
                base.$owlWrapper.css({"left" : value});

        },
        css2slide: function(value, speed) {
            var base = this;
            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left": value
            }, {
                duration: speed || base.options.slideSpeed,
                complete: function() {
                    base.isCssFinish = true
                }
            })
        },
        checkBrowser: function() {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex, asSupport, support3d, isTouch;
            tempElem.style.cssText = "  -moz-transform:" + translate3D + "; -o-transform:" + translate3D + "; -webkit-transform:" + translate3D + "; transform:" + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length >= 1);
            if (window.navigator.userAgent.match(/MSIE/)) {
                support3d = false
            }
            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;
            base.browser = {
                "support3d": support3d,
                "isTouch": isTouch
            }
        },
        moveEvents: function() {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents()
            }
        },
        eventTypes: function() {
            var base = this,
                types = ["s", "e", "x"];
            base.ev_types = {};
            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"]
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"]
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]
            }
            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2]
        },
        disabledEvents: function() {
            var base = this;
            base.$elem.on("dragstart.owl", function(event) {
                event.preventDefault()
            });
            base.$elem.on("mousedown.disableTextSelect", function(e) {
                return $(e.target).is('input, textarea, select, option')
            })
        },
        gestures: function() {
            var base = this,
                locals = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x: event.touches[0].pageX,
                        y: event.touches[0].pageY
                    }
                }
                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x: event.pageX,
                            y: event.pageY
                        }
                    }
                    if (event.pageX === undefined) {
                        return {
                            x: event.clientX,
                            y: event.clientY
                        }
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd)
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end)
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;
                if (ev.which === 3) {
                    return false
                }
                if (base.itemsAmount <= base.options.items) {
                    return
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false
                }
                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval)
                }
                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing")
                }
                base.newPosX = 0;
                base.newRelativeX = 0;
                $(this).css(base.removeTransition());
                position = $(this).position();
                if(window.matchMedia('(max-width: 768px)').matches)
                {
                    locals.relativePos = position.top;
                }else{
                	locals.relativePos = position.left;
                }
                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;
                swapEvents("on");
                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe, maxSwipe;
                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;
                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem])
                }
                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault()
                    } else {
                        ev.returnValue = false
                    }
                    locals.sliding = true
                }
                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl")
                }
                minSwipe = function() {
                    return base.newRelativeX / 5
                };
                maxSwipe = function() {
                    return base.maximumPixels + base.newRelativeX / 5
                };
                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX)
                } else {
                    base.css2move(base.newPosX)
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition, handlers, owlStopEvent;
                ev.target = ev.target || ev.srcElement;
                locals.dragging = false;
                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing")
                }

                if(window.matchMedia('(max-width: 768px)').matches)
                {
                    if (base.newRelativeX < 0) {
                        base.dragDirection = base.owl.dragDirection = "top"
                    } else {
                        base.dragDirection = base.owl.dragDirection = "bottom"
                    }
                }else{
                    if (base.newRelativeX < 0) {
                        base.dragDirection = base.owl.dragDirection = "left"
                    } else {
                        base.dragDirection = base.owl.dragDirection = "right"
                    }
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function(ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable")
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent)
                    }
                }
                swapEvents("off")
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart)
        },
        getNewPosition: function() {
            var base = this,
                newPosition = base.closestItem();
            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition = base.maximumItem
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0
            }
            return newPosition
        },
        closestItem: function() {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;
            $.each(array, function(i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray)
                    } else {
                        base.currentItem = i
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray)
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1
                    }
                }
            });
            return base.currentItem
        },
        moveDirection: function() {
            var base = this,
                direction;


            if(window.matchMedia('(max-width: 768px)').matches)
                {
                    if (base.newRelativeX < 0) {
                        direction = "bottom";
                        base.playDirection = "next"
                    } else {
                        direction = "top";
                        base.playDirection = "prev"
                    }
                }else{
                    if (base.newRelativeX < 0) {
                        direction = "right";
                        base.playDirection = "next"
                    } else {
                        direction = "left";
                        base.playDirection = "prev"
                    }
                }

            return direction
        },
        customEvents: function() {
            var base = this;
            base.$elem.on("owl.next", function() {
                base.next()
            });
            base.$elem.on("owl.prev", function() {
                base.prev()
            });
            base.$elem.on("owl.play", function(event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play"
            });
            base.$elem.on("owl.stop", function() {
                base.stop();
                base.hoverStatus = "stop"
            });
            base.$elem.on("owl.goTo", function(event, item) {
                base.goTo(item)
            });
            base.$elem.on("owl.jumpTo", function(event, item) {
                base.jumpTo(item)
            })
        },
        stopOnHover: function() {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function() {
                    base.stop()
                });
                base.$elem.on("mouseout", function() {
                    if (base.hoverStatus !== "stop") {
                        base.play()
                    }
                })
            }
        },
        lazyLoad: function() {
            var base = this,
                i, $item, itemNumber, $lazyImg, follow;
            if (base.options.lazyLoad === false) {
                return false
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);
                if ($item.data("owl-loaded") === "loaded") {
                    continue
                }
                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");
                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked")
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem
                } else {
                    follow = true
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg)
                }
            }
        },
        lazyPreload: function($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;
            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true
            } else {
                $lazyImg[0].src = $lazyImg.data("src")
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400)
                } else {
                    $lazyImg.show()
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem])
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage()
                } else if (iterations <= 100) {
                    window.setTimeout(checkLazyImage, 100)
                } else {
                    showImage()
                }
            }
            checkLazyImage()
        },
        autoHeight: function() {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                 var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function() {
                        base.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight()
                } else if (iterations <= 100) {
                    window.setTimeout(checkImage, 100)
                } else {
                    base.wrapperOuter.css("height", "")
                }
            }
            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage()
            } else {
                addHeight()
            }
        },
        completeImg: function(img) {
            var naturalWidthType;
            if (!img.complete) {
                return false
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false
            }
            return true
        },
        onVisibleItems: function() {
            var base = this,
                i;
            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active")
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);
                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active")
                }
            }
            base.owl.visibleItems = base.visibleItems
        },
        transitionTypes: function(className) {
            var base = this;
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in"
        },
        singleItemTransition: function() {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
            base.isTransition = true;
            base.$owlWrapper.addClass('owl-origin').css({
                "-webkit-transform-origin": origin + "px",
                "-moz-perspective-origin": origin + "px",
                "perspective-origin": origin + "px"
            });

            function transStyles(prevPos) {

			if(window.matchMedia('(max-width: 768px)').matches)
            {
                return {
                    "position": "relative",
                    "top" : prevPos + "px"
                }
            }else{
                    return {
                        "position": "relative",
                        "left" : prevPos + "px"
                    }
                }    


            }
            $prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function() {
                base.endPrev = true;
                $prevItem.off(animEnd);
                base.clearTransStyle($prevItem, outClass)
            });
            $currentItem.addClass(inClass).on(animEnd, function() {
                base.endCurrent = true;
                $currentItem.off(animEnd);
                base.clearTransStyle($currentItem, inClass)
            })
        },
        clearTransStyle: function(item, classToRemove) {
            var base = this;
			if(window.matchMedia('(max-width: 768px)').matches)
            {
               item.css({
                "position": "",
                "top" : ""
                }).removeClass(classToRemove);   
            }else{
                 item.css({
                    "position": "",
                    "left" : ""
                }).removeClass(classToRemove);
            }

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false
            }
        },
        owlStatus: function() {
            var base = this;
            base.owl = {
                "userOptions": base.userOptions,
                "baseElement": base.$elem,
                "userItems": base.$userItems,
                "owlItems": base.$owlItems,
                "currentItem": base.currentItem,
                "prevItem": base.prevItem,
                "visibleItems": base.visibleItems,
                "isTouch": base.browser.isTouch,
                "browser": base.browser,
                "dragDirection": base.dragDirection
            }
        },
        clearEvents: function() {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer)
        },
        unWrap: function() {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove()
                }
            }
            base.clearEvents();
            base.$elem.attr("style", base.$elem.data("owl-originalStyles") || "").attr("class", base.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData()
        },
        reinit: function(newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem)
        },
        addItem: function(htmlString, targetPosition) {
            var base = this,
                position;
            if (!htmlString) {
                return false
            }
            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1
            } else {
                position = targetPosition
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString)
            } else {
                base.$userItems.eq(position).before(htmlString)
            }
            base.setVars()
        },
        removeItem: function(targetPosition) {
            var base = this,
                position;
            if (base.$elem.children().length === 0) {
                return false
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1
            } else {
                position = targetPosition
            }
            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars()
        }
    };
    $.fn.owlCarouselVideo = function(options) {
        return this.each(function() {
            if ($(this).data("owl-init") === true) {
                return false
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(videoCarousel);
            carousel.init(options, this);
            $.data(this, "owlCarouselVideo", carousel)
        })
    };
    $.fn.owlCarouselVideo.options = {
        items: 5,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        autoPlay: false,
        stopOnHover: false,
        navigation: false,
        navigationText: ["prev", "next"],
        rewindNav: true,
        scrollPerPage: false,
        pagination: true,
        paginationNumbers: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        baseClass: "owl-carousel-video",
        theme: "owl-theme",
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",
        autoHeight: false,
        jsonPath: false,
        jsonSuccess: false,
        dragBeforeAnimFinish: true,
        mouseDrag: false,
        touchDrag: false,
        addClassActive: false,
        transitionStyle: false,
        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
    }
}(jQuery, window, document));
