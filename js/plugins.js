/*! jQuery Migrate v3.1.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+n[i]>+o[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.1.0",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a=s.fn.init,c=s.isNumeric,d=s.find,l=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,p=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),a.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&l.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(p,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return d.apply(this,r)},d)Object.prototype.hasOwnProperty.call(d,i)&&(s.find[i]=d[i]);s.fn.size=function(){return u("jQuery.fn.size() is deprecated and removed; use the .length property"),this.length},s.parseJSON=function(){return u("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},s.isNumeric=function(e){var t,r,n=c(e),o=(r=(t=e)&&t.toString(),!s.isArray(t)&&0<=r-parseFloat(r)+1);return n!==o&&u("jQuery.isNumeric() should not be called on constructed objects"),o},e("3.3.0")&&o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.2.0")&&o(s,"nodeName",s.nodeName,"jQuery.nodeName is deprecated");var f=s.ajax;s.ajax=function(){var e=f.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e};var y=s.fn.removeAttr,m=s.fn.toggleClass,h=/\S+/g;s.fn.removeAttr=function(e){var r=this;return s.each(e.match(h),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),y.apply(this,arguments)};var g=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?m.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":s.data(this,"__className__")||"")}))});s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return g=!0,e=r.apply(this,arguments),g=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in g||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o};var v=s.data;s.data=function(e,t,r){var n;if(t&&"object"==typeof t&&2===arguments.length){n=s.hasData(e)&&v.call(this,e);var o={};for(var i in t)i!==s.camelCase(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return v.call(this,e,o),t}return t&&"string"==typeof t&&t!==s.camelCase(t)&&(n=s.hasData(e)&&v.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):v.apply(this,arguments)};function j(e){return e}var Q=s.Tween.prototype.run;s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=j),Q.apply(this,arguments)};var w=s.fx.interval||13,b="jQuery.fx.interval is deprecated";n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(b),w},set:function(e){u(b),w=e}});var x=s.fn.load,k=s.event.add,A=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=A.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),k.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?x.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});var S=s.fn.offset;s.fn.offset=function(){var e,t=this[0],r={top:0,left:0};return t&&t.nodeType?(e=(t.ownerDocument||n.document).documentElement,s.contains(e,t)?S.apply(this,arguments):(u("jQuery.fn.offset() requires an element connected to a document"),r)):(u("jQuery.fn.offset() requires a valid DOM element"),r)};var q=s.param;s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),q.call(this,e,t)};var C=s.fn.andSelf||s.fn.addBack;s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),C.apply(this,arguments)};var M=s.Deferred,R=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]];return s.Deferred=function(e){var i=M(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(R,function(e,t){var r=s.isFunction(o[e])&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&s.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=M.exceptionHook,s});

function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null},a=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},i=function(t){return"true"===a(t,"was-processed")},c=function(t,e){return s(t,"ll-timeout",e)},l=function(t){return a(t,"ll-timeout")},u=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var d=function(t,e){t&&t(e)},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},b=function(t,e){v(t,"sizes",a(t,e.data_sizes)),v(t,"srcset",a(t,e.data_srcset)),v(t,"src",a(t,e.data_src))},g={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){b(t,e)});b(t,e)},IFRAME:function(t,e){v(t,"src",a(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",a(t,e.data_src))}),v(t,"src",a(t,e.data_src)),t.load()}},m=function(t,e){var n,o,r=e._settings,s=t.tagName,i=g[s];if(i)return i(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=a(t,e.data_src),o=a(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},h=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},p=function(t,e,n){t.addEventListener(e,n)},y=function(t,e,n){t.removeEventListener(e,n)},E=function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)},w=function(t,e,n){var r=n._settings,a=e?r.class_loaded:r.class_error,s=e?r.callback_loaded:r.callback_error,i=t.target;!function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}(i,r.class_loading),h(i,a),d(s,i),f(n,-1)},k=function(t,e){var n=function n(r){w(r,!0,e),E(t,n,o)},o=function o(r){w(r,!1,e),E(t,n,o)};!function(t,e,n){p(t,"load",e),p(t,"loadeddata",e),p(t,"error",n)}(t,n,o)},I=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;z(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},x=function(t){var e=l(t);e&&(clearTimeout(e),c(t,null))},A=function(t,e){var n=e._settings.load_delay,o=l(t);o||(o=setTimeout(function(){L(t,e),x(t)},n),c(t,o))},z=function(t,e,n){var o=e._settings;!n&&i(t)||(I.indexOf(t.tagName)>-1&&(k(t,e),h(t,o.class_loading)),m(t,e),function(t){s(t,"was-processed","true")}(t),d(o.callback_reveal,t),d(o.callback_set,t))},O=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e){var n=e._settings;d(n.callback_enter,t),n.load_delay?A(t,e):L(t,e)}(e.target,t):function(t,e){var n=e._settings;d(n.callback_exit,t),n.load_delay&&x(t)}(e.target,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},N=function(t,e){this._settings=function(t){return _extends({},r,t)}(t),this._loadingCount=0,O(this),this.update(e)};return N.prototype={update:function(t){var n=this,o=this._settings,r=t||o.container.querySelectorAll(o.elements_selector);this._elements=function(t){return t.filter(function(t){return!i(t)})}(Array.prototype.slice.call(r)),!e&&this._observer?this._elements.forEach(function(t){n._observer.observe(t)}):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){z(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)u(t,n);else u(t,e)}(N,window.lazyLoadOptions),N});
//# sourceMappingURL=lazyload.min.js.map

// ==================================================
// fancyBox v3.5.2
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function a(t,e){var o,a,i,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),i=n.fancybox.getInstance(),i&&i.$trigger&&i.$trigger.is(o)||(e.selector?s=n(e.selector):(a=o.attr("data-fancybox")||"",a?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),i=n.fancybox.open(s,e,r),i.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var i={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in a)if(n.style[t]!==o)return a[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,a;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},a=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),a)},b=function(t,e,o){var a=this;a.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(a.opts=h(a.opts,e)),n.fancybox.isMobile&&(a.opts=h(a.opts,a.opts.mobile)),a.id=a.opts.id||++c,a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=!0,a.group=[],a.slides={},a.addContent(t),a.group.length&&a.init()};n.extend(b.prototype,{init:function(){var o,a,i=this,s=i.group[i.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&r.hideScrollbar!==!1&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),a="",n.each(r.buttons,function(t,e){a+=r.btnTpl[e]||""}),o=n(i.translate(i,r.baseTpl.replace("{{buttons}}",a).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+i.id).addClass(r.baseClass).data("FancyBox",i).appendTo(r.parentEl),i.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){i.$refs[t]=o.find(".fancybox-"+t)}),i.trigger("onInit"),i.activate(),i.jumpTo(i.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var a=n[e];return a===o?t:a})},addContent:function(t){var e,a=this,i=n.makeArray(t);n.each(i,function(t,e){var i,s,r,c,l,d={},u={};n.isPlainObject(e)?(d=e,u=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),u=i.data()||{},u=n.extend(!0,{},u,u.options),u.$orig=i,d.src=a.opts.src||u.src||i.attr("href"),d.type||d.src||(d.type="inline",d.src=e)):d={type:"html",src:e+""},d.opts=n.extend(!0,{},a.opts,u),n.isArray(u.buttons)&&(d.opts.buttons=u.buttons),n.fancybox.isMobile&&d.opts.mobile&&(d.opts=h(d.opts,d.opts.mobile)),s=d.type||d.opts.type,c=d.src||"",!s&&c&&((r=c.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(s="video",d.opts.video.format||(d.opts.video.format="video/"+("ogv"===r[1]?"ogg":r[1]))):c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?(s="iframe",d=n.extend(!0,d,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===c.charAt(0)&&(s="inline")),s?d.type=s:a.trigger("objectNeedsType",d),d.contentType||(d.contentType=n.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=a.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=n.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.$thumb=d.opts.$thumb||null,d.opts.$trigger&&d.index===a.opts.index&&(d.$thumb=d.opts.$trigger.find("img:first"),d.$thumb.length&&(d.opts.$orig=d.opts.$trigger)),d.$thumb&&d.$thumb.length||!d.opts.$orig||(d.$thumb=d.opts.$orig.find("img:first")),d.$thumb&&!d.$thumb.length&&(d.$thumb=null),d.thumb=d.opts.thumb||(d.$thumb?d.$thumb[0].src:null),"function"===n.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(e,[a,d])),"function"===n.type(a.opts.caption)&&(d.opts.caption=a.opts.caption.apply(e,[a,d])),d.opts.caption instanceof n||(d.opts.caption=d.opts.caption===o?"":d.opts.caption+""),"ajax"===d.type&&(l=c.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=n.extend(!0,d.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),a.group.push(d)}),Object.keys(a.slides).length&&(a.updateControls(),e=a.Thumbs,e&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,a=o.current,i=t.keyCode||t.which;if(9==i)return void(a.opts.trapFocus&&e.focus(t));if(!(!a.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input")||n(t.target).is("textarea")))return 8===i||27===i?(t.preventDefault(),void e.close(t)):37===i||38===i?(t.preventDefault(),void e.previous()):39===i||40===i?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,i)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){e.idleSecondsCounter++,e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var a,i,s,r,c,l,d,u,f,h=this,g=h.group.length;if(!(h.isDragging||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),s=h.current?h.current.opts.loop:h.opts.loop,!s&&(t<0||t>=g))return!1;if(a=h.firstRun=!Object.keys(h.slides).length,c=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,r=h.createSlide(t),g>1&&((s||r.index<g-1)&&h.createSlide(t+1),(s||r.index>0)&&h.createSlide(t-1)),h.current=r,h.currIndex=r.index,h.currPos=r.pos,h.trigger("beforeShow",a),h.updateControls(),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=h.isMoved(r),r.$slide.addClass("fancybox-slide--current"),a)return r.opts.animationEffect&&e&&h.$refs.container.css("transition-duration",e+"ms"),h.$refs.container.addClass("fancybox-is-open").trigger("focus"),h.loadSlide(r),void h.preload("image");l=n.fancybox.getTranslate(c.$slide),d=n.fancybox.getTranslate(h.$refs.stage),n.each(h.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),c.pos!==r.pos&&(c.isComplete=!1),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(f=l.left-(c.pos*l.width+c.pos*c.opts.gutter),n.each(h.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var a=o.pos*l.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:a-d.left+f}),o.pos!==r.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>r.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-r.pos)*l.width+(o.pos-r.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===h.currPos&&h.complete()})})):e&&r.opts.transitionEffect&&(u="fancybox-animated fancybox-fx-"+r.opts.transitionEffect,c.$slide.addClass("fancybox-slide--"+(c.pos>r.pos?"next":"previous")),n.fancybox.animate(c.$slide,u,e,function(){c.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),r.isLoaded?h.revealContent(r):h.loadSlide(r),h.preload("image")}},createSlide:function(t){var e,o,a=this;return o=t%a.group.length,o=o<0?a.group.length+o:o,!a.slides[t]&&a.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage),a.slides[t]=n.extend(!0,{},a.group[o],{pos:t,$slide:e,isLoaded:!1}),a.updateSlide(a.slides[t])),a.slides[t]},scaleToActual:function(t,e,a){var i,s,r,c,l,d=this,u=d.current,f=u.$content,p=n.fancybox.getTranslate(u.$slide).width,h=n.fancybox.getTranslate(u.$slide).height,g=u.width,b=u.height;d.isAnimating||d.isMoved()||!f||"image"!=u.type||!u.isLoaded||u.hasError||(d.isAnimating=!0,n.fancybox.stop(f),t=t===o?.5*p:t,e=e===o?.5*h:e,i=n.fancybox.getTranslate(f),i.top-=n.fancybox.getTranslate(u.$slide).top,i.left-=n.fancybox.getTranslate(u.$slide).left,c=g/i.width,l=b/i.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=i.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),d.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},a||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,o=this,a=o.current,i=a.$content;o.isAnimating||o.isMoved()||!i||"image"!=a.type||!a.isLoaded||a.hasError||(o.isAnimating=!0,n.fancybox.stop(i),e=o.getFitPos(a),o.updateCursor(e.width,e.height),n.fancybox.animate(i,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,a,i,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),a=Math.min(1,e/l,o/d),l=a*l,d=a*d,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(i=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/i?d=l/i:l>d*i&&(l=d*i)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,a=t&&t.$content,i=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),a&&(i||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(a),n.fancybox.setTranslate(a,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,a=e.current,i=a.$slide;!e.isClosing&&a&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},t===o?0:t,function(){i.css({transform:"",opacity:""}),a.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,a=t||this.current;return!!a&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(a.$slide),!a.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,a,i=this,s=i.current,r=i.$refs.container;s&&!i.isClosing&&i.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=i.canPan(t,e),a=!!o||i.isZoomable(),r.toggleClass("fancybox-is-zoomable",a),n("[data-fancybox-zoom]").prop("disabled",!a),o?r.addClass("fancybox-can-pan"):a&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||i.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if(t=e.getFitPos(n),t&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var a=this,i=!1,s=a.current,r=s.$content;return t!==o&&e!==o?i=t<s.width&&e<s.height:r&&(i=n.fancybox.getTranslate(r),i=i.width<s.width&&i.height<s.height),i},canPan:function(t,e){var a=this,i=a.current,s=null,r=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(r=a.getFitPos(i),t!==o&&e!==o?s={width:t,height:e}:i.isComplete&&(s=n.fancybox.getTranslate(i.$content)),s&&r&&(r=Math.abs(s.width-r.width)>1.5||Math.abs(s.height-r.height)>1.5)),r},loadSlide:function(t){var e,o,a,i=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,i.trigger("beforeLoad",t)===!1)return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.src||t.content);break;case"video":i.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),a=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){a.abort()});break;default:i.setError(t)}return!0}},setImage:function(t){var o,a=this;setTimeout(function(){var e=t.$image;a.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||a.showLoading(t)},50),a.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),t.opts.preload!==!1&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){a.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),a.setBigImage(t)},checkSrcset:function(e){var n,o,a,i,s=e.opts.srcset||e.opts.image.srcset;if(s){a=t.devicePixelRatio||1,i=t.innerWidth*a,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=i||"x"===c.postfix&&c.value>=a){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,a=e.createElement("img"),i=n(a);t.$image=i.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),i.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(a.complete||"complete"==a.readyState)&&i.naturalWidth&&i.naturalHeight?i.trigger("load"):a.error&&i.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),a=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),a>0&&(t.width=Math.floor(a*e/n),t.height=a)},setIframe:function(t){var e,a=this,i=t.opts.iframe,s=t.$slide;n.fancybox.isMobile&&(i.css.overflow="scroll"),t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(s),s.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(a.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),a.afterLoad(t)}),s.on("refresh.fb",function(){var n,a,r=t.$content,c=i.css.width,l=i.css.height;if(1===e[0].isReady){try{n=e.contents(),a=n.find("body")}catch(t){}a&&a.length&&a.children().length&&(s.css("overflow","visible"),r.css({width:"100%","max-width":"100%",height:"9999px"}),c===o&&(c=Math.ceil(Math.max(a[0].clientWidth,a.outerWidth(!0)))),r.css("width",c?c:"").css("max-width",""),l===o&&(l=Math.ceil(Math.max(a[0].clientHeight,a.outerHeight(!0)))),r.css("height",l?l:""),s.css("overflow","auto")),r.removeClass("fancybox-is-hidden")}})):a.afterLoad(t),e.attr("src",t.src),s.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e=this,n=t||e.current,o=n.opts.caption,a=e.$refs.caption,i=!1;n.opts.preventCaptionOverlap&&o&&o.length&&(n.pos!==e.currPos?(a=a.clone().empty().appendTo(a.parent()),a.html(o),i=a.outerHeight(!0),a.empty().remove()):e.$caption&&(i=e.$caption.outerHeight(!0)),n.$slide.css("padding-bottom",i||""))},adjustLayout:function(t){var e,n,o,a,i=this,s=t||i.current;s.isLoaded&&s.opts.disableLayoutFix!==!0&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],a=s.$slide.css("padding-bottom"),parseFloat(a)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=a),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,a,i,s,r=this,c=t.$slide,l=!1,d=!1,u=r.isMoved(t),f=t.isRevealed;return t.isRevealed=!0,e=t.opts[r.firstRun?"animationEffect":"transitionEffect"],i=t.opts[r.firstRun?"animationDuration":"transitionDuration"],i=parseInt(t.forcedDuration===o?i:t.forcedDuration,10),!u&&t.pos===r.currPos&&i||(e=!1),"zoom"===e&&(t.pos===r.currPos&&i&&"image"===t.type&&!t.hasError&&(d=r.getThumbPos(t))?l=r.getFitPos(t):e="fade"),"zoom"===e?(r.isAnimating=!0,l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),p(t.$content),void n.fancybox.animate(t.$content,l,i,function(){r.isAnimating=!1,r.complete()})):(r.updateSlide(t),e?(n.fancybox.stop(c),a="fancybox-slide--"+(t.pos>=r.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,c.addClass(a).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(c),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(c,"fancybox-slide--current",i,function(){c.removeClass(a).css({transform:"",opacity:""}),t.pos===r.currPos&&r.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),f||!u||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===r.currPos&&r.complete())))},getThumbPos:function(t){var e,o,a,i,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),a=parseFloat(c.css("border-right-width")||0),i=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-a-s,height:e.height-o-i,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,a={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?a[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=a),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var a,i,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(a=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),a=a.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),a.length?(i=a.index(e.activeElement),t&&t.shiftKey?(i<0||0==i)&&(t.preventDefault(),a.eq(a.length-1).trigger("focus")):(i<0||i==a.length-1)&&(t&&t.preventDefault(),a.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,a,i,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,u.trigger("beforeClose",t)===!1?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),i=f.$content,o=f.opts.animationEffect,a=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),t!==!0?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),a&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",a+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||i&&a&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(i),s=n.fancybox.getTranslate(i),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(i,c),p(i),n.fancybox.animate(i,l,a,h),!0):(o&&a?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,a,h):t===!0?setTimeout(h,a):h(),
!0)))},cleanUp:function(e){var o,a,i,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(a=t.scrollX,i=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(i).scrollLeft(a))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,a=Array.prototype.slice.call(arguments,1),i=this,s=e&&e.opts?e:i.current;return s?a.unshift(s):s=i,a.unshift(i),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,a)),o===!1?o:void("afterClose"!==t&&i.$refs?i.$refs.container.trigger(t+".fb",a):r.trigger(t+".fb",a))},updateControls:function(){var t=this,o=t.current,a=o.index,i=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),t.$caption=r&&r.length?s.html(r):null,t.hasHiddenControls||t.isIdle||t.showControls(),i.find("[data-fancybox-count]").html(t.group.length),i.find("[data-fancybox-index]").html(a+1),i.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&a<=0),i.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&a>=t.group.length-1),"image"===o.type?i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.2",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",a={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o?n+=" scale("+e.scaleX+", "+e.scaleY+")":e.scaleX!==o&&(n+=" scaleX("+e.scaleX+")"),n.length&&(a.transform=n),e.opacity!==o&&(a.opacity=e.opacity),e.width!==o&&(a.width=e.width),e.height!==o&&(a.height=e.height),t.css(a)},animate:function(t,e,a,i,s){var r,c=this;n.isFunction(a)&&(i=a,a=null),c.stop(t),r=c.getTranslate(t),t.on(f,function(l){(!l||!l.originalEvent||t.is(l.originalEvent.target)&&"z-index"!=l.originalEvent.propertyName)&&(c.stop(t),n.isNumeric(a)&&t.css("transition-duration",""),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&c.setTranslate(t,{top:e.top,left:e.left,width:r.width*e.scaleX,height:r.height*e.scaleY,scaleX:1,scaleY:1}):s!==!0&&t.removeClass(e),n.isFunction(i)&&i(l))}),n.isNumeric(a)&&t.css("transition-duration",a+"ms"),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},a+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},a):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},a),this},r.on("click.fb-start","[data-fancybox]",a),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=".fancybox-button",e="fancybox-focus",o=null;r.on("mousedown mouseup focus blur",t,function(a){switch(a.type){case"mousedown":o=n(this);break;case"mouseup":o=null;break;case"focusin":n(t).removeClass(e),n(this).is(o)||n(this).is("[disabled]")||n(this).addClass(e);break;case"focusout":n(t).removeClass(e)}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube-nocookie.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,a,i){var s,r,c,l,d,u,f,p=i.src||"",h=!1;s=t.extend(!0,{},e,i.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var a=0;a<d.length;++a){var s=d[a].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,i.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,i):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,i):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=r),"iframe"===h&&(i.opts=t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(i,{type:h,src:p,origSrc:i.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(i.type=i.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;return this[t].loaded?void setTimeout(function(){n.done(t)}):void(this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e)))},done:function(e){var n,o,a;"youtube"===e&&delete window.onYouTubeIframeAPIReady,n=t.fancybox.getInstance(),n&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?a=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(a=new Vimeo.Player(o),a.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),a=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),i=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,a=o.length;e<a;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],a=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return a||i},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(a(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var a=this,c=n(o.target),d=a.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&a.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();a.realPoints=a.startPoints=i(o),a.startPoints.length&&(u.touch&&o.stopPropagation(),a.startEvent=o,a.canTap=!0,a.$target=c,a.$content=p,a.opts=u.opts.touch,a.isPanning=!1,a.isSwiping=!1,a.isZooming=!1,a.isScrolling=!1,a.canPan=d.canPan(),a.startTime=(new Date).getTime(),a.distanceX=a.distanceY=a.distance=0,a.canvasWidth=Math.round(f[0].clientWidth),a.canvasHeight=Math.round(f[0].clientHeight),a.contentLastPos=null,a.contentStartPos=n.fancybox.getTranslate(a.$content)||{top:0,left:0},a.sliderStartPos=n.fancybox.getTranslate(f),a.stagePos=n.fancybox.getTranslate(d.$refs.stage),a.sliderStartPos.top-=a.stagePos.top,a.sliderStartPos.left-=a.stagePos.left,a.contentStartPos.top-=a.stagePos.top,a.contentStartPos.left-=a.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(a,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(a,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",a.onscroll,!0),((a.opts||a.canPan)&&(c.is(a.$stage)||a.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.hasClass("fancybox-caption")))&&(a.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&a.isScrollable||o.preventDefault(),(1===a.startPoints.length||u.hasError)&&(a.canPan?(n.fancybox.stop(a.$content),a.isPanning=!0):a.isSwiping=!0,a.$container.addClass("fancybox-is-grabbing")),2===a.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(a.canTap=!1,a.isSwiping=!1,a.isPanning=!1,a.isZooming=!0,n.fancybox.stop(a.$content),a.centerPointStartX=.5*(a.startPoints[0].x+a.startPoints[1].x)-n(t).scrollLeft(),a.centerPointStartY=.5*(a.startPoints[0].y+a.startPoints[1].y)-n(t).scrollTop(),a.percentageOfImageAtPinchPointX=(a.centerPointStartX-a.contentStartPos.left)/a.contentStartPos.width,a.percentageOfImageAtPinchPointY=(a.centerPointStartY-a.contentStartPos.top)/a.contentStartPos.height,a.startDistanceBetweenFingers=s(a.startPoints[0],a.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=i(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var i,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(c!==!0)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(a(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(i=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=i>45&&i<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,a;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),a=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-a.top,s.sliderStartPos.left=o.left-a.left),n.fancybox.setTranslate(e.$slide,{top:o.top-a.top,left:o.left-a.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&a(t.requestId),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,a,i,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return a=h>r?f+l:f,i=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&a>t&&(a=t-1+Math.pow(-t+f+l,.8)||0),l<0&&a<n&&(a=n+1-Math.pow(n-f-l,.8)||0),d>0&&i>e&&(i=e-1+Math.pow(-e+p+d,.8)||0),d<0&&i<o&&(i=o+1-Math.pow(o-p-d,.8)||0),{top:i,left:a}},d.prototype.limitPosition=function(t,e,n,o){var a=this,i=a.canvasWidth,s=a.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,i=e.contentStartPos,r=i.width,c=i.height,l=i.left,d=i.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&a(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;return o.endPoints=i(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(a(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,void(r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)))},d.prototype.endSwiping=function(t,e){var o=this,a=!1,i=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&i>1&&(o.dMs>130&&s>10||s>50),c=300;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),a=o.instance.close(!0,250)):r&&o.distanceX>0?a=o.instance.previous(c):r&&o.distanceX<0&&(a=o.instance.next(c)),a!==!1||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,a=this;a.contentLastPos&&(a.opts.momentum===!1||a.dMs>350?(t=a.contentLastPos.left,e=a.contentLastPos.top):(t=a.contentLastPos.left+500*a.velocityX,e=a.contentLastPos.top+500*a.velocityY),o=a.limitPosition(t,e,a.contentStartPos.width,a.contentStartPos.height),o.width=a.contentStartPos.width,o.height=a.contentStartPos.height,n.fancybox.animate(a.$content,o,330))},d.prototype.endZooming=function(){var t,e,o,a,i=this,s=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,a={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,a),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>s.width||c>s.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.animate(i.$content,o,150)))},d.prototype.onTap=function(e){var o,a=this,s=n(e.target),r=a.instance,c=r.current,l=e&&i(e)||a.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-a.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-a.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(a.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(a.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(a.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(a.tapped){if(clearTimeout(a.tapped),a.tapped=null,Math.abs(d-a.tapX)>50||Math.abs(u-a.tapY)>50)return this;f("dblclick"+o)}else a.tapX=d,a.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?a.tapped=setTimeout(function(){a.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,a=o.current;a&&(t===!0||a.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==a.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},a.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},a.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var a=e&&e.SlideShow;o?a&&n.opts.slideShow.autoStart&&a.start():a&&a.isActive&&a.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,a,i,s){var r=o&&o.SlideShow;!r||!a.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(i.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var a=e[o];if(a&&a[1]in t){for(var i=0;i<a.length;i++)n[e[0][i]]=a[i];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var a;return n?void(e&&e.group[e.currIndex].opts.fullScreen?(a=e.$refs.container,a.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()):void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()},"afterKeydown.fb":function(t,e,n,o,a){e&&e.FullScreen&&70===a&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs",o=n+"-active";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var a=function(t){this.init(t)};e.extend(a.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var a=0,i=n.length;a<i&&(n[a].thumb&&o++,!(o>1));a++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,a=o.instance,i=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(a.$refs.container.find(i).addBack().filter(i)),o.$grid.on("click","a",function(){a.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(a.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+a.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,a=this,i=a.$list,s=a.$grid;a.instance.current&&(e=i.children().removeClass(o).filter('[data-index="'+a.instance.current.index+'"]').addClass(o),n=e.position(),"y"===a.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===a.opts.axis&&(n.left<s.scrollLeft()||n.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new a(e),n.isActive&&n.opts.autoStart===!0&&n.show())},"beforeShow.fb":function(t,e,n,o){var a=e&&e.Thumbs;a&&a.isVisible&&a.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,a){var i=e&&e.Thumbs;i&&i.isActive&&71===a&&(o.preventDefault(),i.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,a=e.fancybox.getInstance(),i=a.current||null;i&&("function"===e.type(i.opts.share.url)&&(t=i.opts.share.url.apply(i,[a,i])),o=i.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===i.type?encodeURIComponent(i.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,a.$caption?encodeURIComponent(a.$caption.text()):""),e.fancybox.open({src:a.translate(a,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){a.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,a=n.join("-");return{hash:e,index:o<1?1:o,gallery:a}}function a(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function i(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""),""!==n&&n)}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)}),n(function(){n.fancybox.defaults.hash!==!1&&(n(e).on({"onInit.fb":function(t,e){var n,a;e.group[e.currIndex].opts.hash!==!1&&(n=o(),a=i(e),a&&n.gallery&&a==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,a,s){var r;a&&a.opts.hash!==!1&&(r=i(o),r&&(o.currentHash=r+(o.group.length>1?"-"+(a.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300))))},"beforeClose.fb":function(n,o,a){a.opts.hash!==!1&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var a=n(o).data("FancyBox");if(a&&a.currentHash)return e=a,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&a(t)}),setTimeout(function(){n.fancybox.getInstance()||a(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,a=(new Date).getTime();e.group.length<2||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,a-n<250||(n=a,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.8
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)
})):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this,b=a.$slider.find("*").is(":focus");a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),b&&a.$slideTrack.find(".slick-active").focus()},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/*! List.js v1.5.0 (http://listjs.com) by Jonny Strömberg (http://javve.com) */
var List=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e,r){function n(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var i=r(4),s=/\s+/;Object.prototype.toString;t.exports=function(t){return new n(t)},n.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array(),r=i(e,t);return~r||e.push(t),this.el.className=e.join(" "),this},n.prototype.remove=function(t){if(this.list)return this.list.remove(t),this;var e=this.array(),r=i(e,t);return~r&&e.splice(r,1),this.el.className=e.join(" "),this},n.prototype.toggle=function(t,e){return this.list?("undefined"!=typeof e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):("undefined"!=typeof e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},n.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),r=e.split(s);return""===r[0]&&r.shift(),r},n.prototype.has=n.prototype.contains=function(t){return this.list?this.list.contains(t):!!~i(this.array(),t)}},function(t,e,r){var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",s="addEventListener"!==n?"on":"",a=r(5);e.bind=function(t,e,r,i){t=a(t);for(var o=0;o<t.length;o++)t[o][n](s+e,r,i||!1)},e.unbind=function(t,e,r,n){t=a(t);for(var o=0;o<t.length;o++)t[o][i](s+e,r,n||!1)}},function(t,e){t.exports=function(t){return function(e,r,n){var i=this;this._values={},this.found=!1,this.filtered=!1;var s=function(e,r,n){if(void 0===r)n?i.values(e,n):i.values(e);else{i.elm=r;var s=t.templater.get(i,e);i.values(s)}};this.values=function(e,r){if(void 0===e)return i._values;for(var n in e)i._values[n]=e[n];r!==!0&&t.templater.set(i,i.values())},this.show=function(){t.templater.show(i)},this.hide=function(){t.templater.hide(i)},this.matching=function(){return t.filtered&&t.searched&&i.found&&i.filtered||t.filtered&&!t.searched&&i.filtered||!t.filtered&&t.searched&&i.found||!t.filtered&&!t.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=t.list)},s(e,r,n)}}},function(t,e){var r=function(t,e,r){return r?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)},n=function(t,e,r){return e="."+e,r?t.querySelector(e):t.querySelectorAll(e)},i=function(t,e,r){for(var n=[],i="*",s=t.getElementsByTagName(i),a=s.length,o=new RegExp("(^|\\s)"+e+"(\\s|$)"),l=0,u=0;l<a;l++)if(o.test(s[l].className)){if(r)return s[l];n[u]=s[l],u++}return n};t.exports=function(){return function(t,e,s,a){return a=a||{},a.test&&a.getElementsByClassName||!a.test&&document.getElementsByClassName?r(t,e,s):a.test&&a.querySelector||!a.test&&document.querySelector?n(t,e,s):i(t,e,s)}}()},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){function r(t){return"[object Array]"===Object.prototype.toString.call(t)}t.exports=function(t){if("undefined"==typeof t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if(r(t))return t;if("number"!=typeof t.length)return[t];if("function"==typeof t&&t instanceof Function)return[t];for(var e=[],n=0;n<t.length;n++)(Object.prototype.hasOwnProperty.call(t,n)||n in t)&&e.push(t[n]);return e.length?e:[]}},function(t,e){t.exports=function(t){return t=void 0===t?"":t,t=null===t?"":t,t=t.toString()}},function(t,e){t.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),n=0;e=r[n];n++)if(e)for(var i in e)t[i]=e[i];return t}},function(t,e){t.exports=function(t){var e=function(r,n,i){var s=r.splice(0,50);i=i||[],i=i.concat(t.add(s)),r.length>0?setTimeout(function(){e(r,n,i)},1):(t.update(),n(i))};return e}},function(t,e){t.exports=function(t){return t.handlers.filterStart=t.handlers.filterStart||[],t.handlers.filterComplete=t.handlers.filterComplete||[],function(e){if(t.trigger("filterStart"),t.i=1,t.reset.filter(),void 0===e)t.filtered=!1;else{t.filtered=!0;for(var r=t.items,n=0,i=r.length;n<i;n++){var s=r[n];e(s)?s.filtered=!0:s.filtered=!1}}return t.update(),t.trigger("filterComplete"),t.visibleItems}}},function(t,e,r){var n=(r(0),r(1)),i=r(7),s=r(6),a=r(3),o=r(19);t.exports=function(t,e){e=e||{},e=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},e);var r={search:function(n,i){for(var s=e.multiSearch?n.replace(/ +$/,"").split(/ +/):[n],a=0,o=t.items.length;a<o;a++)r.item(t.items[a],i,s)},item:function(t,e,n){for(var i=!0,s=0;s<n.length;s++){for(var a=!1,o=0,l=e.length;o<l;o++)r.values(t.values(),e[o],n[s])&&(a=!0);a||(i=!1)}t.found=i},values:function(t,r,n){if(t.hasOwnProperty(r)){var i=s(t[r]).toLowerCase();if(o(i,n,e))return!0}return!1}};return n.bind(a(t.listContainer,e.searchClass),"keyup",function(e){var n=e.target||e.srcElement;t.search(n.value,r.search)}),function(e,n){t.search(e,n,r.search)}}},function(t,e,r){var n=r(18),i=r(3),s=r(7),a=r(4),o=r(1),l=r(6),u=r(0),c=r(17),f=r(5);t.exports=function(t,e,h){var d,v=this,m=r(2)(v),g=r(8)(v),p=r(12)(v);d={start:function(){v.listClass="list",v.searchClass="search",v.sortClass="sort",v.page=1e4,v.i=1,v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.searchColumns=void 0,v.handlers={updated:[]},v.valueNames=[],v.utils={getByClass:i,extend:s,indexOf:a,events:o,toString:l,naturalSort:n,classes:u,getAttribute:c,toArray:f},v.utils.extend(v,e),v.listContainer="string"==typeof t?document.getElementById(t):t,v.listContainer&&(v.list=i(v.listContainer,v.listClass,!0),v.parse=r(13)(v),v.templater=r(16)(v),v.search=r(14)(v),v.filter=r(9)(v),v.sort=r(15)(v),v.fuzzySearch=r(10)(v,e.fuzzySearch),this.handlers(),this.items(),this.pagination(),v.update())},handlers:function(){for(var t in v.handlers)v[t]&&v.on(t,v[t])},items:function(){v.parse(v.list),void 0!==h&&v.add(h)},pagination:function(){if(void 0!==e.pagination){e.pagination===!0&&(e.pagination=[{}]),void 0===e.pagination[0]&&(e.pagination=[e.pagination]);for(var t=0,r=e.pagination.length;t<r;t++)p(e.pagination[t])}}},this.reIndex=function(){v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.parse(v.list)},this.toJSON=function(){for(var t=[],e=0,r=v.items.length;e<r;e++)t.push(v.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(e)return void g(t,e);var r=[],n=!1;void 0===t[0]&&(t=[t]);for(var i=0,s=t.length;i<s;i++){var a=null;n=v.items.length>v.page,a=new m(t[i],void 0,n),v.items.push(a),r.push(a)}return v.update(),r}},this.show=function(t,e){return this.i=t,this.page=e,v.update(),v},this.remove=function(t,e,r){for(var n=0,i=0,s=v.items.length;i<s;i++)v.items[i].values()[t]==e&&(v.templater.remove(v.items[i],r),v.items.splice(i,1),s--,i--,n++);return v.update(),n},this.get=function(t,e){for(var r=[],n=0,i=v.items.length;n<i;n++){var s=v.items[n];s.values()[t]==e&&r.push(s)}return r},this.size=function(){return v.items.length},this.clear=function(){return v.templater.clear(),v.items=[],v},this.on=function(t,e){return v.handlers[t].push(e),v},this.off=function(t,e){var r=v.handlers[t],n=a(r,e);return n>-1&&r.splice(n,1),v},this.trigger=function(t){for(var e=v.handlers[t].length;e--;)v.handlers[t][e](v);return v},this.reset={filter:function(){for(var t=v.items,e=t.length;e--;)t[e].filtered=!1;return v},search:function(){for(var t=v.items,e=t.length;e--;)t[e].found=!1;return v}},this.update=function(){var t=v.items,e=t.length;v.visibleItems=[],v.matchingItems=[],v.templater.clear();for(var r=0;r<e;r++)t[r].matching()&&v.matchingItems.length+1>=v.i&&v.visibleItems.length<v.page?(t[r].show(),v.visibleItems.push(t[r]),v.matchingItems.push(t[r])):t[r].matching()?(v.matchingItems.push(t[r]),t[r].hide()):t[r].hide();return v.trigger("updated"),v},d.start()}},function(t,e,r){var n=r(0),i=r(1),s=r(11);t.exports=function(t){var e=function(e,i){var s,o=t.matchingItems.length,l=t.i,u=t.page,c=Math.ceil(o/u),f=Math.ceil(l/u),h=i.innerWindow||2,d=i.left||i.outerWindow||0,v=i.right||i.outerWindow||0;v=c-v,e.clear();for(var m=1;m<=c;m++){var g=f===m?"active":"";r.number(m,d,v,f,h)?(s=e.add({page:m,dotted:!1})[0],g&&n(s.elm).add(g),a(s.elm,m,u)):r.dotted(e,m,d,v,f,h,e.size())&&(s=e.add({page:"...",dotted:!0})[0],n(s.elm).add("disabled"))}},r={number:function(t,e,r,n,i){return this.left(t,e)||this.right(t,r)||this.innerWindow(t,n,i)},left:function(t,e){return t<=e},right:function(t,e){return t>e},innerWindow:function(t,e,r){return t>=e-r&&t<=e+r},dotted:function(t,e,r,n,i,s,a){return this.dottedLeft(t,e,r,n,i,s)||this.dottedRight(t,e,r,n,i,s,a)},dottedLeft:function(t,e,r,n,i,s){return e==r+1&&!this.innerWindow(e,i,s)&&!this.right(e,n)},dottedRight:function(t,e,r,n,i,s,a){return!t.items[a-1].values().dotted&&(e==n&&!this.innerWindow(e,i,s)&&!this.right(e,n))}},a=function(e,r,n){i.bind(e,"click",function(){t.show((r-1)*n+1,n)})};return function(r){var n=new s(t.listContainer.id,{listClass:r.paginationClass||"pagination",item:"<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});t.on("updated",function(){e(n,r)}),e(n,r)}}},function(t,e,r){t.exports=function(t){var e=r(2)(t),n=function(t){for(var e=t.childNodes,r=[],n=0,i=e.length;n<i;n++)void 0===e[n].data&&r.push(e[n]);return r},i=function(r,n){for(var i=0,s=r.length;i<s;i++)t.items.push(new e(n,r[i]))},s=function(e,r){var n=e.splice(0,50);i(n,r),e.length>0?setTimeout(function(){s(e,r)},1):(t.update(),t.trigger("parseComplete"))};return t.handlers.parseComplete=t.handlers.parseComplete||[],function(){var e=n(t.list),r=t.valueNames;t.indexAsync?s(e,r):i(e,r)}}},function(t,e){t.exports=function(t){var e,r,n,i,s={resetList:function(){t.i=1,t.templater.clear(),i=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?r=t[1]:2==t.length&&"function"==typeof t[1]?(r=void 0,i=t[1]):3==t.length?(r=t[1],i=t[2]):r=void 0},setColumns:function(){0!==t.items.length&&void 0===r&&(r=void 0===t.searchColumns?s.toArray(t.items[0].values()):t.searchColumns)},setSearchString:function(e){e=t.utils.toString(e).toLowerCase(),e=e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=e},toArray:function(t){var e=[];for(var r in t)e.push(r);return e}},a={list:function(){for(var e=0,r=t.items.length;e<r;e++)a.item(t.items[e])},item:function(t){t.found=!1;for(var e=0,n=r.length;e<n;e++)if(a.values(t.values(),r[e]))return void(t.found=!0)},values:function(r,i){return!!(r.hasOwnProperty(i)&&(e=t.utils.toString(r[i]).toLowerCase(),""!==n&&e.search(n)>-1))},reset:function(){t.reset.search(),t.searched=!1}},o=function(e){return t.trigger("searchStart"),s.resetList(),s.setSearchString(e),s.setOptions(arguments),s.setColumns(),""===n?a.reset():(t.searched=!0,i?i(n,r):a.list()),t.update(),t.trigger("searchComplete"),t.visibleItems};return t.handlers.searchStart=t.handlers.searchStart||[],t.handlers.searchComplete=t.handlers.searchComplete||[],t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"keyup",function(e){var r=e.target||e.srcElement,n=""===r.value&&!t.searched;n||o(r.value)}),t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"input",function(t){var e=t.target||t.srcElement;""===e.value&&o("")}),o}},function(t,e){t.exports=function(t){var e={els:void 0,clear:function(){for(var r=0,n=e.els.length;r<n;r++)t.utils.classes(e.els[r]).remove("asc"),t.utils.classes(e.els[r]).remove("desc")},getOrder:function(e){var r=t.utils.getAttribute(e,"data-order");return"asc"==r||"desc"==r?r:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"},getInSensitive:function(e,r){var n=t.utils.getAttribute(e,"data-insensitive");"false"===n?r.insensitive=!1:r.insensitive=!0},setOrder:function(r){for(var n=0,i=e.els.length;n<i;n++){var s=e.els[n];if(t.utils.getAttribute(s,"data-sort")===r.valueName){var a=t.utils.getAttribute(s,"data-order");"asc"==a||"desc"==a?a==r.order&&t.utils.classes(s).add(r.order):t.utils.classes(s).add(r.order)}}}},r=function(){t.trigger("sortStart");var r={},n=arguments[0].currentTarget||arguments[0].srcElement||void 0;n?(r.valueName=t.utils.getAttribute(n,"data-sort"),e.getInSensitive(n,r),r.order=e.getOrder(n)):(r=arguments[1]||r,r.valueName=arguments[0],r.order=r.order||"asc",r.insensitive="undefined"==typeof r.insensitive||r.insensitive),e.clear(),e.setOrder(r);var i,s=r.sortFunction||t.sortFunction||null,a="desc"===r.order?-1:1;i=s?function(t,e){return s(t,e,r)*a}:function(e,n){var i=t.utils.naturalSort;return i.alphabet=t.alphabet||r.alphabet||void 0,!i.alphabet&&r.insensitive&&(i=t.utils.naturalSort.caseInsensitive),i(e.values()[r.valueName],n.values()[r.valueName])*a},t.items.sort(i),t.update(),t.trigger("sortComplete")};return t.handlers.sortStart=t.handlers.sortStart||[],t.handlers.sortComplete=t.handlers.sortComplete||[],e.els=t.utils.getByClass(t.listContainer,t.sortClass),t.utils.events.bind(e.els,"click",r),t.on("searchStart",e.clear),t.on("filterStart",e.clear),r}},function(t,e){var r=function(t){var e,r=this,n=function(){e=r.getItemSource(t.item),e&&(e=r.clearSourceItem(e,t.valueNames))};this.clearSourceItem=function(e,r){for(var n=0,i=r.length;n<i;n++){var s;if(r[n].data)for(var a=0,o=r[n].data.length;a<o;a++)e.setAttribute("data-"+r[n].data[a],"");else r[n].attr&&r[n].name?(s=t.utils.getByClass(e,r[n].name,!0),s&&s.setAttribute(r[n].attr,"")):(s=t.utils.getByClass(e,r[n],!0),s&&(s.innerHTML=""));s=void 0}return e},this.getItemSource=function(e){if(void 0===e){for(var r=t.list.childNodes,n=0,i=r.length;n<i;n++)if(void 0===r[n].data)return r[n].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(e)){var s=document.createElement("tbody");return s.innerHTML=e,s.firstChild}if(e.indexOf("<")!==-1){var a=document.createElement("div");return a.innerHTML=e,a.firstChild}var o=document.getElementById(t.item);if(o)return o}},this.get=function(e,n){r.create(e);for(var i={},s=0,a=n.length;s<a;s++){var o;if(n[s].data)for(var l=0,u=n[s].data.length;l<u;l++)i[n[s].data[l]]=t.utils.getAttribute(e.elm,"data-"+n[s].data[l]);else n[s].attr&&n[s].name?(o=t.utils.getByClass(e.elm,n[s].name,!0),i[n[s].name]=o?t.utils.getAttribute(o,n[s].attr):""):(o=t.utils.getByClass(e.elm,n[s],!0),i[n[s]]=o?o.innerHTML:"");o=void 0}return i},this.set=function(e,n){var i=function(e){for(var r=0,n=t.valueNames.length;r<n;r++)if(t.valueNames[r].data){for(var i=t.valueNames[r].data,s=0,a=i.length;s<a;s++)if(i[s]===e)return{data:e}}else{if(t.valueNames[r].attr&&t.valueNames[r].name&&t.valueNames[r].name==e)return t.valueNames[r];if(t.valueNames[r]===e)return e}},s=function(r,n){var s,a=i(r);a&&(a.data?e.elm.setAttribute("data-"+a.data,n):a.attr&&a.name?(s=t.utils.getByClass(e.elm,a.name,!0),s&&s.setAttribute(a.attr,n)):(s=t.utils.getByClass(e.elm,a,!0),s&&(s.innerHTML=n)),s=void 0)};if(!r.create(e))for(var a in n)n.hasOwnProperty(a)&&s(a,n[a])},this.create=function(t){if(void 0!==t.elm)return!1;if(void 0===e)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var n=e.cloneNode(!0);return n.removeAttribute("id"),t.elm=n,r.set(t,t.values()),!0},this.remove=function(e){e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.show=function(e){r.create(e),t.list.appendChild(e.elm)},this.hide=function(e){void 0!==e.elm&&e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.clear=function(){if(t.list.hasChildNodes())for(;t.list.childNodes.length>=1;)t.list.removeChild(t.list.firstChild)},n()};t.exports=function(t){return new r(t)}},function(t,e){t.exports=function(t,e){var r=t.getAttribute&&t.getAttribute(e)||null;if(!r)for(var n=t.attributes,i=n.length,s=0;s<i;s++)void 0!==e[s]&&e[s].nodeName===e&&(r=e[s].nodeValue);return r}},function(t,e,r){"use strict";function n(t){return t>=48&&t<=57}function i(t,e){for(var r=(t+="").length,i=(e+="").length,s=0,l=0;s<r&&l<i;){var u=t.charCodeAt(s),c=e.charCodeAt(l);if(n(u)){if(!n(c))return u-c;for(var f=s,h=l;48===u&&++f<r;)u=t.charCodeAt(f);for(;48===c&&++h<i;)c=e.charCodeAt(h);for(var d=f,v=h;d<r&&n(t.charCodeAt(d));)++d;for(;v<i&&n(e.charCodeAt(v));)++v;var m=d-f-v+h;if(m)return m;for(;f<d;)if(m=t.charCodeAt(f++)-e.charCodeAt(h++))return m;s=d,l=v}else{if(u!==c)return u<o&&c<o&&a[u]!==-1&&a[c]!==-1?a[u]-a[c]:u-c;++s,++l}}return r-i}var s,a,o=0;i.caseInsensitive=i.i=function(t,e){return i((""+t).toLowerCase(),(""+e).toLowerCase())},Object.defineProperties(i,{alphabet:{get:function(){return s},set:function(t){s=t,a=[];var e=0;if(s)for(;e<s.length;e++)a[s.charCodeAt(e)]=e;for(o=a.length,e=0;e<o;e++)void 0===a[e]&&(a[e]=-1)}}}),t.exports=i},function(t,e){t.exports=function(t,e,r){function n(t,r){var n=t/e.length,i=Math.abs(o-r);return s?n+i/s:i?1:n}var i=r.location||0,s=r.distance||100,a=r.threshold||.4;if(e===t)return!0;if(e.length>32)return!1;var o=i,l=function(){var t,r={};for(t=0;t<e.length;t++)r[e.charAt(t)]=0;for(t=0;t<e.length;t++)r[e.charAt(t)]|=1<<e.length-t-1;return r}(),u=a,c=t.indexOf(e,o);c!=-1&&(u=Math.min(n(0,c),u),c=t.lastIndexOf(e,o+e.length),c!=-1&&(u=Math.min(n(0,c),u)));var f=1<<e.length-1;c=-1;for(var h,d,v,m=e.length+t.length,g=0;g<e.length;g++){for(h=0,d=m;h<d;)n(g,o+d)<=u?h=d:m=d,d=Math.floor((m-h)/2+h);m=d;var p=Math.max(1,o-d+1),C=Math.min(o+d,t.length)+e.length,y=Array(C+2);y[C+1]=(1<<g)-1;for(var b=C;b>=p;b--){var w=l[t.charAt(b-1)];if(0===g?y[b]=(y[b+1]<<1|1)&w:y[b]=(y[b+1]<<1|1)&w|((v[b+1]|v[b])<<1|1)|v[b+1],y[b]&f){var x=n(g,b-1);if(x<=u){if(u=x,c=b-1,!(c>o))break;p=Math.max(1,2*o-c)}}}if(n(g+1,o)>u)break;v=y}return!(c<0)}}]);
/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void 0},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
/*


   Magic Zoom Plus v5.0.1 DEMO
   Copyright 2015 Magic Toolbox
   Buy a license: https://www.magictoolbox.com/magiczoomplus/
   License agreement: https://www.magictoolbox.com/license/


*/
window.MagicZoom = (function() {
    var w, y;
    w = y = (function() {
        var S = {
            version: "v3.3-b3",
            UUID: 0,
            storage: {},
            $uuid: function(V) {
                return (V.$J_UUID || (V.$J_UUID = ++M.UUID))
            },
            getStorage: function(V) {
                return (M.storage[V] || (M.storage[V] = {}))
            },
            $F: function() {},
            $false: function() {
                return false
            },
            $true: function() {
                return true
            },
            stylesId: "mjs-" + Math.floor(Math.random() * new Date().getTime()),
            defined: function(V) {
                return (undefined != V)
            },
            ifndef: function(W, V) {
                return (undefined != W) ? W : V
            },
            exists: function(V) {
                return !!(V)
            },
            jTypeOf: function(V) {
                if (!M.defined(V)) {
                    return false
                }
                if (V.$J_TYPE) {
                    return V.$J_TYPE
                }
                if (!!V.nodeType) {
                    if (1 == V.nodeType) {
                        return "element"
                    }
                    if (3 == V.nodeType) {
                        return "textnode"
                    }
                }
                if (V.length && V.item) {
                    return "collection"
                }
                if (V.length && V.callee) {
                    return "arguments"
                }
                if ((V instanceof window.Object || V instanceof window.Function) && V.constructor === M.Class) {
                    return "class"
                }
                if (V instanceof window.Array) {
                    return "array"
                }
                if (V instanceof window.Function) {
                    return "function"
                }
                if (V instanceof window.String) {
                    return "string"
                }
                if (M.jBrowser.trident) {
                    if (M.defined(V.cancelBubble)) {
                        return "event"
                    }
                } else {
                    if (V === window.event || V.constructor == window.Event || V.constructor == window.MouseEvent || V.constructor == window.UIEvent || V.constructor == window.KeyboardEvent || V.constructor == window.KeyEvent) {
                        return "event"
                    }
                }
                if (V instanceof window.Date) {
                    return "date"
                }
                if (V instanceof window.RegExp) {
                    return "regexp"
                }
                if (V === window) {
                    return "window"
                }
                if (V === document) {
                    return "document"
                }
                return typeof(V)
            },
            extend: function(aa, Z) {
                if (!(aa instanceof window.Array)) {
                    aa = [aa]
                }
                if (!Z) {
                    return aa[0]
                }
                for (var Y = 0, W = aa.length; Y < W; Y++) {
                    if (!M.defined(aa)) {
                        continue
                    }
                    for (var X in Z) {
                        if (!Object.prototype.hasOwnProperty.call(Z, X)) {
                            continue
                        }
                        try {
                            aa[Y][X] = Z[X]
                        } catch (V) {}
                    }
                }
                return aa[0]
            },
            implement: function(Z, Y) {
                if (!(Z instanceof window.Array)) {
                    Z = [Z]
                }
                for (var X = 0, V = Z.length; X < V; X++) {
                    if (!M.defined(Z[X])) {
                        continue
                    }
                    if (!Z[X].prototype) {
                        continue
                    }
                    for (var W in (Y || {})) {
                        if (!Z[X].prototype[W]) {
                            Z[X].prototype[W] = Y[W]
                        }
                    }
                }
                return Z[0]
            },
            nativize: function(X, W) {
                if (!M.defined(X)) {
                    return X
                }
                for (var V in (W || {})) {
                    if (!X[V]) {
                        X[V] = W[V]
                    }
                }
                return X
            },
            $try: function() {
                for (var W = 0, V = arguments.length; W < V; W++) {
                    try {
                        return arguments[W]()
                    } catch (X) {}
                }
                return null
            },
            $A: function(X) {
                if (!M.defined(X)) {
                    return M.$([])
                }
                if (X.toArray) {
                    return M.$(X.toArray())
                }
                if (X.item) {
                    var W = X.length || 0,
                        V = new Array(W);
                    while (W--) {
                        V[W] = X[W]
                    }
                    return M.$(V)
                }
                return M.$(Array.prototype.slice.call(X))
            },
            now: function() {
                return new Date().getTime()
            },
            detach: function(Z) {
                var X;
                switch (M.jTypeOf(Z)) {
                    case "object":
                        X = {};
                        for (var Y in Z) {
                            X[Y] = M.detach(Z[Y])
                        }
                        break;
                    case "array":
                        X = [];
                        for (var W = 0, V = Z.length; W < V; W++) {
                            X[W] = M.detach(Z[W])
                        }
                        break;
                    default:
                        return Z
                }
                return M.$(X)
            },
            $: function(X) {
                var V = true;
                if (!M.defined(X)) {
                    return null
                }
                if (X.$J_EXT) {
                    return X
                }
                switch (M.jTypeOf(X)) {
                    case "array":
                        X = M.nativize(X, M.extend(M.Array, {
                            $J_EXT: M.$F
                        }));
                        X.jEach = X.forEach;
                        return X;
                        break;
                    case "string":
                        var W = document.getElementById(X);
                        if (M.defined(W)) {
                            return M.$(W)
                        }
                        return null;
                        break;
                    case "window":
                    case "document":
                        M.$uuid(X);
                        X = M.extend(X, M.Doc);
                        break;
                    case "element":
                        M.$uuid(X);
                        X = M.extend(X, M.Element);
                        break;
                    case "event":
                        X = M.extend(X, M.Event);
                        break;
                    case "textnode":
                    case "function":
                    case "array":
                    case "date":
                    default:
                        V = false;
                        break
                }
                if (V) {
                    return M.extend(X, {
                        $J_EXT: M.$F
                    })
                } else {
                    return X
                }
            },
            $new: function(V, X, W) {
                return M.$(M.doc.createElement(V)).setProps(X || {}).jSetCss(W || {})
            },
            addCSS: function(W, Y, ac) {
                var Z, X, aa, ab = [],
                    V = -1;
                ac || (ac = M.stylesId);
                Z = M.$(ac) || M.$new("style", {
                    id: ac,
                    type: "text/css"
                }).jAppendTo((document.head || document.body), "top");
                X = Z.sheet || Z.styleSheet;
                if ("string" != M.jTypeOf(Y)) {
                    for (var aa in Y) {
                        ab.push(aa + ":" + Y[aa])
                    }
                    Y = ab.join(";")
                }
                if (X.insertRule) {
                    V = X.insertRule(W + " {" + Y + "}", X.cssRules.length)
                } else {
                    V = X.addRule(W, Y)
                }
                return V
            },
            removeCSS: function(Y, V) {
                var X, W;
                X = M.$(Y);
                if ("element" !== M.jTypeOf(X)) {
                    return
                }
                W = X.sheet || X.styleSheet;
                if (W.deleteRule) {
                    W.deleteRule(V)
                } else {
                    if (W.removeRule) {
                        W.removeRule(V)
                    }
                }
            },
            generateUUID: function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(X) {
                    var W = Math.random() * 16 | 0,
                        V = X == "x" ? W : (W & 3 | 8);
                    return V.toString(16)
                }).toUpperCase()
            },
            getAbsoluteURL: (function() {
                var V;
                return function(W) {
                    if (!V) {
                        V = document.createElement("a")
                    }
                    V.setAttribute("href", W);
                    return ("!!" + V.href).replace("!!", "")
                }
            })(),
            getHashCode: function(X) {
                var Y = 0,
                    V = X.length;
                for (var W = 0; W < V; ++W) {
                    Y = 31 * Y + X.charCodeAt(W);
                    Y %= 4294967296
                }
                return Y
            }
        };
        var M = S;
        var N = S.$;
        if (!window.magicJS) {
            window.magicJS = S;
            window.$mjs = S.$
        }
        M.Array = {
            $J_TYPE: "array",
            indexOf: function(Y, Z) {
                var V = this.length;
                for (var W = this.length, X = (Z < 0) ? Math.max(0, W + Z) : Z || 0; X < W; X++) {
                    if (this[X] === Y) {
                        return X
                    }
                }
                return -1
            },
            contains: function(V, W) {
                return this.indexOf(V, W) != -1
            },
            forEach: function(V, Y) {
                for (var X = 0, W = this.length; X < W; X++) {
                    if (X in this) {
                        V.call(Y, this[X], X, this)
                    }
                }
            },
            filter: function(V, aa) {
                var Z = [];
                for (var Y = 0, W = this.length; Y < W; Y++) {
                    if (Y in this) {
                        var X = this[Y];
                        if (V.call(aa, this[Y], Y, this)) {
                            Z.push(X)
                        }
                    }
                }
                return Z
            },
            map: function(V, Z) {
                var Y = [];
                for (var X = 0, W = this.length; X < W; X++) {
                    if (X in this) {
                        Y[X] = V.call(Z, this[X], X, this)
                    }
                }
                return Y
            }
        };
        M.implement(String, {
            $J_TYPE: "string",
            jTrim: function() {
                return this.replace(/^\s+|\s+$/g, "")
            },
            eq: function(V, W) {
                return (W || false) ? (this.toString() === V.toString()) : (this.toLowerCase().toString() === V.toLowerCase().toString())
            },
            jCamelize: function() {
                return this.replace(/-\D/g, function(V) {
                    return V.charAt(1).toUpperCase()
                })
            },
            dashize: function() {
                return this.replace(/[A-Z]/g, function(V) {
                    return ("-" + V.charAt(0).toLowerCase())
                })
            },
            jToInt: function(V) {
                return parseInt(this, V || 10)
            },
            toFloat: function() {
                return parseFloat(this)
            },
            jToBool: function() {
                return !this.replace(/true/i, "").jTrim()
            },
            has: function(W, V) {
                V = V || "";
                return (V + this + V).indexOf(V + W + V) > -1
            }
        });
        S.implement(Function, {
            $J_TYPE: "function",
            jBind: function() {
                var W = M.$A(arguments),
                    V = this,
                    X = W.shift();
                return function() {
                    return V.apply(X || null, W.concat(M.$A(arguments)))
                }
            },
            jBindAsEvent: function() {
                var W = M.$A(arguments),
                    V = this,
                    X = W.shift();
                return function(Y) {
                    return V.apply(X || null, M.$([Y || (M.jBrowser.ieMode ? window.event : null)]).concat(W))
                }
            },
            jDelay: function() {
                var W = M.$A(arguments),
                    V = this,
                    X = W.shift();
                return window.setTimeout(function() {
                    return V.apply(V, W)
                }, X || 0)
            },
            jDefer: function() {
                var W = M.$A(arguments),
                    V = this;
                return function() {
                    return V.jDelay.apply(V, W)
                }
            },
            interval: function() {
                var W = M.$A(arguments),
                    V = this,
                    X = W.shift();
                return window.setInterval(function() {
                    return V.apply(V, W)
                }, X || 0)
            }
        });
        var L = navigator.userAgent.toLowerCase(),
            K = L.match(/(webkit|gecko|trident|presto)\/(\d+\.?\d*)/i),
            P = L.match(/(edge|opr)\/(\d+\.?\d*)/i) || L.match(/(crios|chrome|safari|firefox|opera|opr)\/(\d+\.?\d*)/i),
            R = L.match(/version\/(\d+\.?\d*)/i),
            G = document.documentElement.style;

        function H(W) {
            var V = W.charAt(0).toUpperCase() + W.slice(1);
            return W in G || ("Webkit" + V) in G || ("Moz" + V) in G || ("ms" + V) in G || ("O" + V) in G
        }
        M.jBrowser = {
            features: {
                xpath: !!(document.evaluate),
                air: !!(window.runtime),
                query: !!(document.querySelector),
                fullScreen: !!(document.fullscreenEnabled || document.msFullscreenEnabled || document.exitFullscreen || document.cancelFullScreen || document.webkitexitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.oCancelFullScreen || document.msCancelFullScreen),
                xhr2: !!(window.ProgressEvent) && !!(window.FormData) && (window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                transition: H("transition"),
                transform: H("transform"),
                perspective: H("perspective"),
                animation: H("animation"),
                requestAnimationFrame: false,
                multibackground: false,
                cssFilters: false,
                svg: (function() {
                    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
                })()
            },
            touchScreen: function() {
                return "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            mobile: L.match(/(android|bb\d+|meego).+|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(jBrowser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/) ? true : false,
            engine: (K && K[1]) ? K[1].toLowerCase() : (window.opera) ? "presto" : !!(window.ActiveXObject) ? "trident" : (undefined !== document.getBoxObjectFor || null != window.mozInnerScreenY) ? "gecko" : (null !== window.WebKitPoint || !navigator.taintEnabled) ? "webkit" : "unknown",
            version: (K && K[2]) ? parseFloat(K[2]) : 0,
            uaName: (P && P[1]) ? P[1].toLowerCase() : "",
            uaVersion: (P && P[2]) ? parseFloat(P[2]) : 0,
            cssPrefix: "",
            cssDomPrefix: "",
            domPrefix: "",
            ieMode: 0,
            platform: L.match(/ip(?:ad|od|hone)/) ? "ios" : (L.match(/(?:webos|android)/) || navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(),
            backCompat: document.compatMode && "backcompat" == document.compatMode.toLowerCase(),
            scrollbarsWidth: 0,
            getDoc: function() {
                return (document.compatMode && "backcompat" == document.compatMode.toLowerCase()) ? document.body : document.documentElement
            },
            requestAnimationFrame: window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || undefined,
            cancelAnimationFrame: window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || undefined,
            ready: false,
            onready: function() {
                if (M.jBrowser.ready) {
                    return
                }
                var Y, X;
                M.jBrowser.ready = true;
                M.body = M.$(document.body);
                M.win = M.$(window);
                try {
                    var W = M.$new("div").jSetCss({
                        width: 100,
                        height: 100,
                        overflow: "scroll",
                        position: "absolute",
                        top: -9999
                    }).jAppendTo(document.body);
                    M.jBrowser.scrollbarsWidth = W.offsetWidth - W.clientWidth;
                    W.jRemove()
                } catch (V) {}
                try {
                    Y = M.$new("div");
                    X = Y.style;
                    X.cssText = "background:url(https://),url(https://),red url(https://)";
                    M.jBrowser.features.multibackground = (/(url\s*\(.*?){3}/).test(X.background);
                    X = null;
                    Y = null
                } catch (V) {}
                if (!M.jBrowser.cssTransformProp) {
                    M.jBrowser.cssTransformProp = M.normalizeCSS("transform").dashize()
                }
                try {
                    Y = M.$new("div");
                    Y.style.cssText = M.normalizeCSS("filter").dashize() + ":blur(2px);";
                    M.jBrowser.features.cssFilters = !!Y.style.length && (!M.jBrowser.ieMode || M.jBrowser.ieMode > 9);
                    Y = null
                } catch (V) {}
                if (!M.jBrowser.features.cssFilters) {
                    M.$(document.documentElement).jAddClass("no-cssfilters-magic")
                }
                M.Doc.jCallEvent.call(M.$(document), "domready")
            }
        };
        (function() {
            var Z = [],
                Y, X, W;

            function V() {
                return !!(arguments.callee.caller)
            }
            switch (M.jBrowser.engine) {
                case "trident":
                    if (!M.jBrowser.version) {
                        M.jBrowser.version = !!(window.XMLHttpRequest) ? 3 : 2
                    }
                    break;
                case "gecko":
                    M.jBrowser.version = (P && P[2]) ? parseFloat(P[2]) : 0;
                    break
            }
            M.jBrowser[M.jBrowser.engine] = true;
            if (P && "crios" === P[1]) {
                M.jBrowser.uaName = "chrome"
            }
            if (!!window.chrome) {
                M.jBrowser.chrome = true
            }
            if (P && "opr" === P[1]) {
                M.jBrowser.uaName = "opera";
                M.jBrowser.opera = true
            }
            if ("safari" === M.jBrowser.uaName && (R && R[1])) {
                M.jBrowser.uaVersion = parseFloat(R[1])
            }
            Y = ({
                gecko: ["-moz-", "Moz", "moz"],
                webkit: ["-webkit-", "Webkit", "webkit"],
                trident: ["-ms-", "ms", "ms"],
                presto: ["-o-", "O", "o"]
            })[M.jBrowser.engine] || ["", "", ""];
            M.jBrowser.cssPrefix = Y[0];
            M.jBrowser.cssDomPrefix = Y[1];
            M.jBrowser.domPrefix = Y[2];
            M.jBrowser.ieMode = (!M.jBrowser.trident) ? undefined : (document.documentMode) ? document.documentMode : function() {
                var aa = 0;
                if (M.jBrowser.backCompat) {
                    return 5
                }
                switch (M.jBrowser.version) {
                    case 2:
                        aa = 6;
                        break;
                    case 3:
                        aa = 7;
                        break
                }
                return aa
            }();
            if (M.jBrowser.mobile) {
                Z.push("mobile-magic")
            }
            if (M.jBrowser.ieMode) {
                M.jBrowser.uaName = "ie";
                M.jBrowser.uaVersion = M.jBrowser.ieMode;
                Z.push("ie" + M.jBrowser.ieMode + "-magic");
                for (X = 11; X > M.jBrowser.ieMode; X--) {
                    Z.push("lt-ie" + X + "-magic")
                }
            }
            if (M.jBrowser.webkit && M.jBrowser.version < 536) {
                M.jBrowser.features.fullScreen = false
            }
            if (M.jBrowser.requestAnimationFrame) {
                M.jBrowser.requestAnimationFrame.call(window, function() {
                    M.jBrowser.features.requestAnimationFrame = true
                })
            }
            if (M.jBrowser.features.svg) {
                Z.push("svg-magic")
            } else {
                Z.push("no-svg-magic")
            }
            W = (document.documentElement.className || "").match(/\S+/g) || [];
            document.documentElement.className = M.$(W).concat(Z).join(" ");
            if (M.jBrowser.ieMode && M.jBrowser.ieMode < 9) {
                document.createElement("figure");
                document.createElement("figcaption")
            }
        })();
        (function() {
            M.jBrowser.fullScreen = {
                capable: M.jBrowser.features.fullScreen,
                enabled: function() {
                    return !!(document.fullscreenElement || document[M.jBrowser.domPrefix + "FullscreenElement"] || document.fullScreen || document.webkitIsFullScreen || document[M.jBrowser.domPrefix + "FullScreen"])
                },
                request: function(V, W) {
                    W || (W = {});
                    if (this.capable) {
                        M.$(document).jAddEvent(this.changeEventName, this.onchange = function(X) {
                            if (this.enabled()) {
                                W.onEnter && W.onEnter()
                            } else {
                                M.$(document).jRemoveEvent(this.changeEventName, this.onchange);
                                W.onExit && W.onExit()
                            }
                        }.jBindAsEvent(this));
                        M.$(document).jAddEvent(this.errorEventName, this.onerror = function(X) {
                            W.fallback && W.fallback();
                            M.$(document).jRemoveEvent(this.errorEventName, this.onerror)
                        }.jBindAsEvent(this));
                        (V[M.jBrowser.domPrefix + "RequestFullscreen"] || V[M.jBrowser.domPrefix + "RequestFullScreen"] || V.requestFullscreen || function() {}).call(V)
                    } else {
                        if (W.fallback) {
                            W.fallback()
                        }
                    }
                },
                cancel: (document.exitFullscreen || document.cancelFullScreen || document[M.jBrowser.domPrefix + "ExitFullscreen"] || document[M.jBrowser.domPrefix + "CancelFullScreen"] || function() {}).jBind(document),
                changeEventName: document.msExitFullscreen ? "MSFullscreenChange" : (document.exitFullscreen ? "" : M.jBrowser.domPrefix) + "fullscreenchange",
                errorEventName: document.msExitFullscreen ? "MSFullscreenError" : (document.exitFullscreen ? "" : M.jBrowser.domPrefix) + "fullscreenerror",
                prefix: M.jBrowser.domPrefix,
                activeElement: null
            }
        })();
        var U = /\S+/g,
            J = /^(border(Top|Bottom|Left|Right)Width)|((padding|margin)(Top|Bottom|Left|Right))$/,
            O = {
                "float": ("undefined" === typeof(G.styleFloat)) ? "cssFloat" : "styleFloat"
            },
            Q = {
                fontWeight: true,
                lineHeight: true,
                opacity: true,
                zIndex: true,
                zoom: true
            },
            I = (window.getComputedStyle) ? function(X, V) {
                var W = window.getComputedStyle(X, null);
                return W ? W.getPropertyValue(V) || W[V] : null
            } : function(Y, W) {
                var X = Y.currentStyle,
                    V = null;
                V = X ? X[W] : null;
                if (null == V && Y.style && Y.style[W]) {
                    V = Y.style[W]
                }
                return V
            };

        function T(X) {
            var V, W;
            W = (M.jBrowser.webkit && "filter" == X) ? false : (X in G);
            if (!W) {
                V = M.jBrowser.cssDomPrefix + X.charAt(0).toUpperCase() + X.slice(1);
                if (V in G) {
                    return V
                }
            }
            return X
        }
        M.normalizeCSS = T;
        M.Element = {
            jHasClass: function(V) {
                return !(V || "").has(" ") && (this.className || "").has(V, " ")
            },
            jAddClass: function(Z) {
                var W = (this.className || "").match(U) || [],
                    Y = (Z || "").match(U) || [],
                    V = Y.length,
                    X = 0;
                for (; X < V; X++) {
                    if (!M.$(W).contains(Y[X])) {
                        W.push(Y[X])
                    }
                }
                this.className = W.join(" ");
                return this
            },
            jRemoveClass: function(aa) {
                var W = (this.className || "").match(U) || [],
                    Z = (aa || "").match(U) || [],
                    V = Z.length,
                    Y = 0,
                    X;
                for (; Y < V; Y++) {
                    if ((X = M.$(W).indexOf(Z[Y])) > -1) {
                        W.splice(X, 1)
                    }
                }
                this.className = aa ? W.join(" ") : "";
                return this
            },
            jToggleClass: function(V) {
                return this.jHasClass(V) ? this.jRemoveClass(V) : this.jAddClass(V)
            },
            jGetCss: function(W) {
                var X = W.jCamelize(),
                    V = null;
                W = O[X] || (O[X] = T(X));
                V = I(this, W);
                if ("auto" === V) {
                    V = null
                }
                if (null !== V) {
                    if ("opacity" == W) {
                        return M.defined(V) ? parseFloat(V) : 1
                    }
                    if (J.test(W)) {
                        V = parseInt(V, 10) ? V : "0px"
                    }
                }
                return V
            },
            jSetCssProp: function(W, V) {
                var Y = W.jCamelize();
                try {
                    if ("opacity" == W) {
                        this.jSetOpacity(V);
                        return this
                    }
                    W = O[Y] || (O[Y] = T(Y));
                    this.style[W] = V + (("number" == M.jTypeOf(V) && !Q[Y]) ? "px" : "")
                } catch (X) {}
                return this
            },
            jSetCss: function(W) {
                for (var V in W) {
                    this.jSetCssProp(V, W[V])
                }
                return this
            },
            jGetStyles: function() {
                var V = {};
                M.$A(arguments).jEach(function(W) {
                    V[W] = this.jGetCss(W)
                }, this);
                return V
            },
            jSetOpacity: function(X, V) {
                var W;
                V = V || false;
                this.style.opacity = X;
                X = parseInt(parseFloat(X) * 100);
                if (V) {
                    if (0 === X) {
                        if ("hidden" != this.style.visibility) {
                            this.style.visibility = "hidden"
                        }
                    } else {
                        if ("visible" != this.style.visibility) {
                            this.style.visibility = "visible"
                        }
                    }
                }
                if (M.jBrowser.ieMode && M.jBrowser.ieMode < 9) {
                    if (!isNaN(X)) {
                        if (!~this.style.filter.indexOf("Alpha")) {
                            this.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity=" + X + ")"
                        } else {
                            this.style.filter = this.style.filter.replace(/Opacity=\d*/i, "Opacity=" + X)
                        }
                    } else {
                        this.style.filter = this.style.filter.replace(/progid:DXImageTransform.Microsoft.Alpha\(Opacity=\d*\)/i, "").jTrim();
                        if ("" === this.style.filter) {
                            this.style.removeAttribute("filter")
                        }
                    }
                }
                return this
            },
            setProps: function(V) {
                for (var W in V) {
                    if ("class" === W) {
                        this.jAddClass("" + V[W])
                    } else {
                        this.setAttribute(W, "" + V[W])
                    }
                }
                return this
            },
            hide: function() {
                return this.jSetCss({
                    display: "none",
                    visibility: "hidden"
                })
            },
            show: function() {
                return this.jSetCss({
                    display: "",
                    visibility: "visible"
                })
            },
            jGetSize: function() {
                return {
                    width: this.offsetWidth,
                    height: this.offsetHeight
                }
            },
            getInnerSize: function(W) {
                var V = this.jGetSize();
                V.width -= (parseFloat(this.jGetCss("border-left-width") || 0) + parseFloat(this.jGetCss("border-right-width") || 0));
                V.height -= (parseFloat(this.jGetCss("border-top-width") || 0) + parseFloat(this.jGetCss("border-bottom-width") || 0));
                if (!W) {
                    V.width -= (parseFloat(this.jGetCss("padding-left") || 0) + parseFloat(this.jGetCss("padding-right") || 0));
                    V.height -= (parseFloat(this.jGetCss("padding-top") || 0) + parseFloat(this.jGetCss("padding-bottom") || 0))
                }
                return V
            },
            jGetScroll: function() {
                return {
                    top: this.scrollTop,
                    left: this.scrollLeft
                }
            },
            jGetFullScroll: function() {
                var V = this,
                    W = {
                        top: 0,
                        left: 0
                    };
                do {
                    W.left += V.scrollLeft || 0;
                    W.top += V.scrollTop || 0;
                    V = V.parentNode
                } while (V);
                return W
            },
            jGetPosition: function() {
                var Z = this,
                    W = 0,
                    Y = 0;
                if (M.defined(document.documentElement.getBoundingClientRect)) {
                    var V = this.getBoundingClientRect(),
                        X = M.$(document).jGetScroll(),
                        aa = M.jBrowser.getDoc();
                    return {
                        top: V.top + X.y - aa.clientTop,
                        left: V.left + X.x - aa.clientLeft
                    }
                }
                do {
                    W += Z.offsetLeft || 0;
                    Y += Z.offsetTop || 0;
                    Z = Z.offsetParent
                } while (Z && !(/^(?:body|html)$/i).test(Z.tagName));
                return {
                    top: Y,
                    left: W
                }
            },
            jGetRect: function() {
                var W = this.jGetPosition();
                var V = this.jGetSize();
                return {
                    top: W.top,
                    bottom: W.top + V.height,
                    left: W.left,
                    right: W.left + V.width
                }
            },
            changeContent: function(W) {
                try {
                    this.innerHTML = W
                } catch (V) {
                    this.innerText = W
                }
                return this
            },
            jRemove: function() {
                return (this.parentNode) ? this.parentNode.removeChild(this) : this
            },
            kill: function() {
                M.$A(this.childNodes).jEach(function(V) {
                    if (3 == V.nodeType || 8 == V.nodeType) {
                        return
                    }
                    M.$(V).kill()
                });
                this.jRemove();
                this.jClearEvents();
                if (this.$J_UUID) {
                    M.storage[this.$J_UUID] = null;
                    delete M.storage[this.$J_UUID]
                }
                return null
            },
            append: function(X, W) {
                W = W || "bottom";
                var V = this.firstChild;
                ("top" == W && V) ? this.insertBefore(X, V): this.appendChild(X);
                return this
            },
            jAppendTo: function(X, W) {
                var V = M.$(X).append(this, W);
                return this
            },
            enclose: function(V) {
                this.append(V.parentNode.replaceChild(this, V));
                return this
            },
            hasChild: function(V) {
                if ("element" !== M.jTypeOf("string" == M.jTypeOf(V) ? V = document.getElementById(V) : V)) {
                    return false
                }
                return (this == V) ? false : (this.contains && !(M.jBrowser.webkit419)) ? (this.contains(V)) : (this.compareDocumentPosition) ? !!(this.compareDocumentPosition(V) & 16) : M.$A(this.byTag(V.tagName)).contains(V)
            }
        };
        M.Element.jGetStyle = M.Element.jGetCss;
        M.Element.jSetStyle = M.Element.jSetCss;
        if (!window.Element) {
            window.Element = M.$F;
            if (M.jBrowser.engine.webkit) {
                window.document.createElement("iframe")
            }
            window.Element.prototype = (M.jBrowser.engine.webkit) ? window["[[DOMElement.prototype]]"] : {}
        }
        M.implement(window.Element, {
            $J_TYPE: "element"
        });
        M.Doc = {
            jGetSize: function() {
                if (M.jBrowser.touchScreen || M.jBrowser.presto925 || M.jBrowser.webkit419) {
                    return {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                }
                return {
                    width: M.jBrowser.getDoc().clientWidth,
                    height: M.jBrowser.getDoc().clientHeight
                }
            },
            jGetScroll: function() {
                return {
                    x: window.pageXOffset || M.jBrowser.getDoc().scrollLeft,
                    y: window.pageYOffset || M.jBrowser.getDoc().scrollTop
                }
            },
            jGetFullSize: function() {
                var V = this.jGetSize();
                return {
                    width: Math.max(M.jBrowser.getDoc().scrollWidth, V.width),
                    height: Math.max(M.jBrowser.getDoc().scrollHeight, V.height)
                }
            }
        };
        M.extend(document, {
            $J_TYPE: "document"
        });
        M.extend(window, {
            $J_TYPE: "window"
        });
        M.extend([M.Element, M.Doc], {
            jFetch: function(Y, W) {
                var V = M.getStorage(this.$J_UUID),
                    X = V[Y];
                if (undefined !== W && undefined === X) {
                    X = V[Y] = W
                }
                return (M.defined(X) ? X : null)
            },
            jStore: function(X, W) {
                var V = M.getStorage(this.$J_UUID);
                V[X] = W;
                return this
            },
            jDel: function(W) {
                var V = M.getStorage(this.$J_UUID);
                delete V[W];
                return this
            }
        });
        if (!(window.HTMLElement && window.HTMLElement.prototype && window.HTMLElement.prototype.getElementsByClassName)) {
            M.extend([M.Element, M.Doc], {
                getElementsByClassName: function(V) {
                    return M.$A(this.getElementsByTagName("*")).filter(function(X) {
                        try {
                            return (1 == X.nodeType && X.className.has(V, " "))
                        } catch (W) {}
                    })
                }
            })
        }
        M.extend([M.Element, M.Doc], {
            byClass: function() {
                return this.getElementsByClassName(arguments[0])
            },
            byTag: function() {
                return this.getElementsByTagName(arguments[0])
            }
        });
        if (M.jBrowser.fullScreen.capable && !document.requestFullScreen) {
            M.Element.requestFullScreen = function() {
                M.jBrowser.fullScreen.request(this)
            }
        }
        M.Event = {
            $J_TYPE: "event",
            isQueueStopped: M.$false,
            stop: function() {
                return this.stopDistribution().stopDefaults()
            },
            stopDistribution: function() {
                if (this.stopPropagation) {
                    this.stopPropagation()
                } else {
                    this.cancelBubble = true
                }
                return this
            },
            stopDefaults: function() {
                if (this.preventDefault) {
                    this.preventDefault()
                } else {
                    this.returnValue = false
                }
                return this
            },
            stopQueue: function() {
                this.isQueueStopped = M.$true;
                return this
            },
            getClientXY: function() {
                var W, V;
                W = ((/touch/i).test(this.type)) ? this.changedTouches[0] : this;
                return (!M.defined(W)) ? {
                    x: 0,
                    y: 0
                } : {
                    x: W.clientX,
                    y: W.clientY
                }
            },
            jGetPageXY: function() {
                var W, V;
                W = ((/touch/i).test(this.type)) ? this.changedTouches[0] : this;
                return (!M.defined(W)) ? {
                    x: 0,
                    y: 0
                } : {
                    x: W.pageX || W.clientX + M.jBrowser.getDoc().scrollLeft,
                    y: W.pageY || W.clientY + M.jBrowser.getDoc().scrollTop
                }
            },
            getTarget: function() {
                var V = this.target || this.srcElement;
                while (V && 3 == V.nodeType) {
                    V = V.parentNode
                }
                return V
            },
            getRelated: function() {
                var W = null;
                switch (this.type) {
                    case "mouseover":
                    case "pointerover":
                    case "MSPointerOver":
                        W = this.relatedTarget || this.fromElement;
                        break;
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        W = this.relatedTarget || this.toElement;
                        break;
                    default:
                        return W
                }
                try {
                    while (W && 3 == W.nodeType) {
                        W = W.parentNode
                    }
                } catch (V) {
                    W = null
                }
                return W
            },
            getButton: function() {
                if (!this.which && this.button !== undefined) {
                    return (this.button & 1 ? 1 : (this.button & 2 ? 3 : (this.button & 4 ? 2 : 0)))
                }
                return this.which
            },
            isTouchEvent: function() {
                return (this.pointerType && ("touch" === this.pointerType || this.pointerType === this.MSPOINTER_TYPE_TOUCH)) || (/touch/i).test(this.type)
            },
            isPrimaryTouch: function() {
                return this.pointerType ? (("touch" === this.pointerType || this.MSPOINTER_TYPE_TOUCH === this.pointerType) && this.isPrimary) : 1 === this.changedTouches.length && (this.targetTouches.length ? this.targetTouches[0].identifier == this.changedTouches[0].identifier : true)
            }
        };
        M._event_add_ = "addEventListener";
        M._event_del_ = "removeEventListener";
        M._event_prefix_ = "";
        if (!document.addEventListener) {
            M._event_add_ = "attachEvent";
            M._event_del_ = "detachEvent";
            M._event_prefix_ = "on"
        }
        M.Event.Custom = {
            type: "",
            x: null,
            y: null,
            timeStamp: null,
            button: null,
            target: null,
            relatedTarget: null,
            $J_TYPE: "event.custom",
            isQueueStopped: M.$false,
            events: M.$([]),
            pushToEvents: function(V) {
                var W = V;
                this.events.push(W)
            },
            stop: function() {
                return this.stopDistribution().stopDefaults()
            },
            stopDistribution: function() {
                this.events.jEach(function(W) {
                    try {
                        W.stopDistribution()
                    } catch (V) {}
                });
                return this
            },
            stopDefaults: function() {
                this.events.jEach(function(W) {
                    try {
                        W.stopDefaults()
                    } catch (V) {}
                });
                return this
            },
            stopQueue: function() {
                this.isQueueStopped = M.$true;
                return this
            },
            getClientXY: function() {
                return {
                    x: this.clientX,
                    y: this.clientY
                }
            },
            jGetPageXY: function() {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            getTarget: function() {
                return this.target
            },
            getRelated: function() {
                return this.relatedTarget
            },
            getButton: function() {
                return this.button
            },
            getOriginalTarget: function() {
                return this.events.length > 0 ? this.events[0].getTarget() : undefined
            }
        };
        M.extend([M.Element, M.Doc], {
            jAddEvent: function(X, Z, aa, ad) {
                var ac, V, Y, ab, W;
                if ("string" == M.jTypeOf(X)) {
                    W = X.split(" ");
                    if (W.length > 1) {
                        X = W
                    }
                }
                if (M.jTypeOf(X) == "array") {
                    M.$(X).jEach(this.jAddEvent.jBindAsEvent(this, Z, aa, ad));
                    return this
                }
                if (!X || !Z || M.jTypeOf(X) != "string" || M.jTypeOf(Z) != "function") {
                    return this
                }
                if (X == "domready" && M.jBrowser.ready) {
                    Z.call(this);
                    return this
                }
                aa = parseInt(aa || 50);
                if (!Z.$J_EUID) {
                    Z.$J_EUID = Math.floor(Math.random() * M.now())
                }
                ac = M.Doc.jFetch.call(this, "_EVENTS_", {});
                V = ac[X];
                if (!V) {
                    ac[X] = V = M.$([]);
                    Y = this;
                    if (M.Event.Custom[X]) {
                        M.Event.Custom[X].handler.add.call(this, ad)
                    } else {
                        V.handle = function(ae) {
                            ae = M.extend(ae || window.e, {
                                $J_TYPE: "event"
                            });
                            M.Doc.jCallEvent.call(Y, X, M.$(ae))
                        };
                        this[M._event_add_](M._event_prefix_ + X, V.handle, false)
                    }
                }
                ab = {
                    type: X,
                    fn: Z,
                    priority: aa,
                    euid: Z.$J_EUID
                };
                V.push(ab);
                V.sort(function(af, ae) {
                    return af.priority - ae.priority
                });
                return this
            },
            jRemoveEvent: function(ab) {
                var Z = M.Doc.jFetch.call(this, "_EVENTS_", {}),
                    X, V, W, ac, aa, Y;
                aa = arguments.length > 1 ? arguments[1] : -100;
                if ("string" == M.jTypeOf(ab)) {
                    Y = ab.split(" ");
                    if (Y.length > 1) {
                        ab = Y
                    }
                }
                if (M.jTypeOf(ab) == "array") {
                    M.$(ab).jEach(this.jRemoveEvent.jBindAsEvent(this, aa));
                    return this
                }
                if (!ab || M.jTypeOf(ab) != "string" || !Z || !Z[ab]) {
                    return this
                }
                X = Z[ab] || [];
                for (W = 0; W < X.length; W++) {
                    V = X[W];
                    if (-100 == aa || !!aa && aa.$J_EUID === V.euid) {
                        ac = X.splice(W--, 1)
                    }
                }
                if (0 === X.length) {
                    if (M.Event.Custom[ab]) {
                        M.Event.Custom[ab].handler.jRemove.call(this)
                    } else {
                        this[M._event_del_](M._event_prefix_ + ab, X.handle, false)
                    }
                    delete Z[ab]
                }
                return this
            },
            jCallEvent: function(Z, ab) {
                var Y = M.Doc.jFetch.call(this, "_EVENTS_", {}),
                    X, V, W;
                if (!Z || M.jTypeOf(Z) != "string" || !Y || !Y[Z]) {
                    return this
                }
                try {
                    ab = M.extend(ab || {}, {
                        type: Z
                    })
                } catch (aa) {}
                if (undefined === ab.timeStamp) {
                    ab.timeStamp = M.now()
                }
                X = Y[Z] || [];
                for (W = 0; W < X.length && !(ab.isQueueStopped && ab.isQueueStopped()); W++) {
                    X[W].fn.call(this, ab)
                }
            },
            jRaiseEvent: function(W, V) {
                var Z = ("domready" == W) ? false : true,
                    Y = this,
                    X;
                if (!Z) {
                    M.Doc.jCallEvent.call(this, W);
                    return this
                }
                if (Y === document && document.createEvent && !Y.dispatchEvent) {
                    Y = document.documentElement
                }
                if (document.createEvent) {
                    X = document.createEvent(W);
                    X.initEvent(V, true, true)
                } else {
                    X = document.createEventObject();
                    X.eventType = W
                }
                if (document.createEvent) {
                    Y.dispatchEvent(X)
                } else {
                    Y.fireEvent("on" + V, X)
                }
                return X
            },
            jClearEvents: function() {
                var W = M.Doc.jFetch.call(this, "_EVENTS_");
                if (!W) {
                    return this
                }
                for (var V in W) {
                    M.Doc.jRemoveEvent.call(this, V)
                }
                M.Doc.jDel.call(this, "_EVENTS_");
                return this
            }
        });
        (function(V) {
            if ("complete" === document.readyState) {
                return V.jBrowser.onready.jDelay(1)
            }
            if (V.jBrowser.webkit && V.jBrowser.version < 420) {
                (function() {
                    (V.$(["loaded", "complete"]).contains(document.readyState)) ? V.jBrowser.onready(): arguments.callee.jDelay(50)
                })()
            } else {
                if (V.jBrowser.trident && V.jBrowser.ieMode < 9 && window == top) {
                    (function() {
                        (V.$try(function() {
                            V.jBrowser.getDoc().doScroll("left");
                            return true
                        })) ? V.jBrowser.onready(): arguments.callee.jDelay(50)
                    })()
                } else {
                    V.Doc.jAddEvent.call(V.$(document), "DOMContentLoaded", V.jBrowser.onready);
                    V.Doc.jAddEvent.call(V.$(window), "load", V.jBrowser.onready)
                }
            }
        })(S);
        M.Class = function() {
            var Z = null,
                W = M.$A(arguments);
            if ("class" == M.jTypeOf(W[0])) {
                Z = W.shift()
            }
            var V = function() {
                for (var ac in this) {
                    this[ac] = M.detach(this[ac])
                }
                if (this.constructor.$parent) {
                    this.$parent = {};
                    var ae = this.constructor.$parent;
                    for (var ad in ae) {
                        var ab = ae[ad];
                        switch (M.jTypeOf(ab)) {
                            case "function":
                                this.$parent[ad] = M.Class.wrap(this, ab);
                                break;
                            case "object":
                                this.$parent[ad] = M.detach(ab);
                                break;
                            case "array":
                                this.$parent[ad] = M.detach(ab);
                                break
                        }
                    }
                }
                var aa = (this.init) ? this.init.apply(this, arguments) : this;
                delete this.caller;
                return aa
            };
            if (!V.prototype.init) {
                V.prototype.init = M.$F
            }
            if (Z) {
                var Y = function() {};
                Y.prototype = Z.prototype;
                V.prototype = new Y;
                V.$parent = {};
                for (var X in Z.prototype) {
                    V.$parent[X] = Z.prototype[X]
                }
            } else {
                V.$parent = null
            }
            V.constructor = M.Class;
            V.prototype.constructor = V;
            M.extend(V.prototype, W[0]);
            M.extend(V, {
                $J_TYPE: "class"
            });
            return V
        };
        S.Class.wrap = function(V, W) {
            return function() {
                var Y = this.caller;
                var X = W.apply(V, arguments);
                return X
            }
        };
        M.Event.Custom.btnclick = new M.Class(M.extend(M.Event.Custom, {
            type: "btnclick",
            init: function(X, W) {
                var V = W.jGetPageXY();
                this.x = V.x;
                this.y = V.y;
                this.clientX = W.clientX;
                this.clientY = W.clientY;
                this.timeStamp = W.timeStamp;
                this.button = W.getButton();
                this.target = X;
                this.pushToEvents(W)
            }
        }));
        M.Event.Custom.btnclick.handler = {
            options: {
                threshold: 200,
                button: 1
            },
            add: function(V) {
                this.jStore("event:btnclick:options", M.extend(M.detach(M.Event.Custom.btnclick.handler.options), V || {}));
                this.jAddEvent("mousedown", M.Event.Custom.btnclick.handler.handle, 1);
                this.jAddEvent("mouseup", M.Event.Custom.btnclick.handler.handle, 1);
                this.jAddEvent("click", M.Event.Custom.btnclick.handler.onclick, 1);
                if (M.jBrowser.trident && M.jBrowser.ieMode < 9) {
                    this.jAddEvent("dblclick", M.Event.Custom.btnclick.handler.handle, 1)
                }
            },
            jRemove: function() {
                this.jRemoveEvent("mousedown", M.Event.Custom.btnclick.handler.handle);
                this.jRemoveEvent("mouseup", M.Event.Custom.btnclick.handler.handle);
                this.jRemoveEvent("click", M.Event.Custom.btnclick.handler.onclick);
                if (M.jBrowser.trident && M.jBrowser.ieMode < 9) {
                    this.jRemoveEvent("dblclick", M.Event.Custom.btnclick.handler.handle)
                }
            },
            onclick: function(V) {
                V.stopDefaults()
            },
            handle: function(Y) {
                var X, V, W;
                V = this.jFetch("event:btnclick:options");
                if (Y.type != "dblclick" && Y.getButton() != V.button) {
                    return
                }
                if (this.jFetch("event:btnclick:ignore")) {
                    this.jDel("event:btnclick:ignore");
                    return
                }
                if ("mousedown" == Y.type) {
                    X = new M.Event.Custom.btnclick(this, Y);
                    this.jStore("event:btnclick:btnclickEvent", X)
                } else {
                    if ("mouseup" == Y.type) {
                        X = this.jFetch("event:btnclick:btnclickEvent");
                        if (!X) {
                            return
                        }
                        W = Y.jGetPageXY();
                        this.jDel("event:btnclick:btnclickEvent");
                        X.pushToEvents(Y);
                        if (Y.timeStamp - X.timeStamp <= V.threshold && X.x == W.x && X.y == W.y) {
                            this.jCallEvent("btnclick", X)
                        }
                        document.jCallEvent("mouseup", Y)
                    } else {
                        if (Y.type == "dblclick") {
                            X = new M.Event.Custom.btnclick(this, Y);
                            this.jCallEvent("btnclick", X)
                        }
                    }
                }
            }
        };
        (function(W) {
            var V = W.$;
            W.Event.Custom.mousedrag = new W.Class(W.extend(W.Event.Custom, {
                type: "mousedrag",
                state: "dragstart",
                dragged: false,
                init: function(aa, Z, Y) {
                    var X = Z.jGetPageXY();
                    this.x = X.x;
                    this.y = X.y;
                    this.clientX = Z.clientX;
                    this.clientY = Z.clientY;
                    this.timeStamp = Z.timeStamp;
                    this.button = Z.getButton();
                    this.target = aa;
                    this.pushToEvents(Z);
                    this.state = Y
                }
            }));
            W.Event.Custom.mousedrag.handler = {
                add: function() {
                    var Y = W.Event.Custom.mousedrag.handler.handleMouseMove.jBindAsEvent(this),
                        X = W.Event.Custom.mousedrag.handler.handleMouseUp.jBindAsEvent(this);
                    this.jAddEvent("mousedown", W.Event.Custom.mousedrag.handler.handleMouseDown, 1);
                    this.jAddEvent("mouseup", W.Event.Custom.mousedrag.handler.handleMouseUp, 1);
                    document.jAddEvent("mousemove", Y, 1);
                    document.jAddEvent("mouseup", X, 1);
                    this.jStore("event:mousedrag:listeners:document:move", Y);
                    this.jStore("event:mousedrag:listeners:document:end", X)
                },
                jRemove: function() {
                    this.jRemoveEvent("mousedown", W.Event.Custom.mousedrag.handler.handleMouseDown);
                    this.jRemoveEvent("mouseup", W.Event.Custom.mousedrag.handler.handleMouseUp);
                    V(document).jRemoveEvent("mousemove", this.jFetch("event:mousedrag:listeners:document:move") || W.$F);
                    V(document).jRemoveEvent("mouseup", this.jFetch("event:mousedrag:listeners:document:end") || W.$F);
                    this.jDel("event:mousedrag:listeners:document:move");
                    this.jDel("event:mousedrag:listeners:document:end")
                },
                handleMouseDown: function(Y) {
                    var X;
                    if (1 != Y.getButton()) {
                        return
                    }
                    Y.stopDefaults();
                    X = new W.Event.Custom.mousedrag(this, Y, "dragstart");
                    this.jStore("event:mousedrag:dragstart", X)
                },
                handleMouseUp: function(Y) {
                    var X;
                    X = this.jFetch("event:mousedrag:dragstart");
                    if (!X) {
                        return
                    }
                    Y.stopDefaults();
                    X = new W.Event.Custom.mousedrag(this, Y, "dragend");
                    this.jDel("event:mousedrag:dragstart");
                    this.jCallEvent("mousedrag", X)
                },
                handleMouseMove: function(Y) {
                    var X;
                    X = this.jFetch("event:mousedrag:dragstart");
                    if (!X) {
                        return
                    }
                    Y.stopDefaults();
                    if (!X.dragged) {
                        X.dragged = true;
                        this.jCallEvent("mousedrag", X)
                    }
                    X = new W.Event.Custom.mousedrag(this, Y, "dragmove");
                    this.jCallEvent("mousedrag", X)
                }
            }
        })(S);
        M.Event.Custom.dblbtnclick = new M.Class(M.extend(M.Event.Custom, {
            type: "dblbtnclick",
            timedout: false,
            tm: null,
            init: function(X, W) {
                var V = W.jGetPageXY();
                this.x = V.x;
                this.y = V.y;
                this.clientX = W.clientX;
                this.clientY = W.clientY;
                this.timeStamp = W.timeStamp;
                this.button = W.getButton();
                this.target = X;
                this.pushToEvents(W)
            }
        }));
        M.Event.Custom.dblbtnclick.handler = {
            options: {
                threshold: 200
            },
            add: function(V) {
                this.jStore("event:dblbtnclick:options", M.extend(M.detach(M.Event.Custom.dblbtnclick.handler.options), V || {}));
                this.jAddEvent("btnclick", M.Event.Custom.dblbtnclick.handler.handle, 1)
            },
            jRemove: function() {
                this.jRemoveEvent("btnclick", M.Event.Custom.dblbtnclick.handler.handle)
            },
            handle: function(X) {
                var W, V;
                W = this.jFetch("event:dblbtnclick:event");
                V = this.jFetch("event:dblbtnclick:options");
                if (!W) {
                    W = new M.Event.Custom.dblbtnclick(this, X);
                    W.tm = setTimeout(function() {
                        W.timedout = true;
                        X.isQueueStopped = M.$false;
                        this.jCallEvent("btnclick", X);
                        this.jDel("event:dblbtnclick:event")
                    }.jBind(this), V.threshold + 10);
                    this.jStore("event:dblbtnclick:event", W);
                    X.stopQueue()
                } else {
                    clearTimeout(W.tm);
                    this.jDel("event:dblbtnclick:event");
                    if (!W.timedout) {
                        W.pushToEvents(X);
                        X.stopQueue().stop();
                        this.jCallEvent("dblbtnclick", W)
                    } else {}
                }
            }
        };
        (function(ab) {
            var aa = ab.$;

            function V(ac) {
                return ac.pointerType ? (("touch" === ac.pointerType || ac.MSPOINTER_TYPE_TOUCH === ac.pointerType) && ac.isPrimary) : 1 === ac.changedTouches.length && (ac.targetTouches.length ? ac.targetTouches[0].identifier == ac.changedTouches[0].identifier : true)
            }

            function X(ac) {
                if (ac.pointerType) {
                    return ("touch" === ac.pointerType || ac.MSPOINTER_TYPE_TOUCH === ac.pointerType) ? ac.pointerId : null
                } else {
                    return ac.changedTouches[0].identifier
                }
            }

            function Y(ac) {
                if (ac.pointerType) {
                    return ("touch" === ac.pointerType || ac.MSPOINTER_TYPE_TOUCH === ac.pointerType) ? ac : null
                } else {
                    return ac.changedTouches[0]
                }
            }
            ab.Event.Custom.tap = new ab.Class(ab.extend(ab.Event.Custom, {
                type: "tap",
                id: null,
                init: function(ad, ac) {
                    var ae = Y(ac);
                    this.id = ae.pointerId || ae.identifier;
                    this.x = ae.pageX;
                    this.y = ae.pageY;
                    this.pageX = ae.pageX;
                    this.pageY = ae.pageY;
                    this.clientX = ae.clientX;
                    this.clientY = ae.clientY;
                    this.timeStamp = ac.timeStamp;
                    this.button = 0;
                    this.target = ad;
                    this.pushToEvents(ac)
                }
            }));
            var W = 10,
                Z = 200;
            ab.Event.Custom.tap.handler = {
                add: function(ac) {
                    this.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], ab.Event.Custom.tap.handler.onTouchStart, 1);
                    this.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], ab.Event.Custom.tap.handler.onTouchEnd, 1);
                    this.jAddEvent("click", ab.Event.Custom.tap.handler.onClick, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], ab.Event.Custom.tap.handler.onTouchStart);
                    this.jRemoveEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], ab.Event.Custom.tap.handler.onTouchEnd);
                    this.jRemoveEvent("click", ab.Event.Custom.tap.handler.onClick)
                },
                onClick: function(ac) {
                    ac.stopDefaults()
                },
                onTouchStart: function(ac) {
                    if (!V(ac)) {
                        this.jDel("event:tap:event");
                        return
                    }
                    this.jStore("event:tap:event", new ab.Event.Custom.tap(this, ac));
                    this.jStore("event:btnclick:ignore", true)
                },
                onTouchEnd: function(af) {
                    var ad = ab.now(),
                        ae = this.jFetch("event:tap:event"),
                        ac = this.jFetch("event:tap:options");
                    if (!ae || !V(af)) {
                        return
                    }
                    this.jDel("event:tap:event");
                    if (ae.id == X(af) && af.timeStamp - ae.timeStamp <= Z && Math.sqrt(Math.pow(Y(af).pageX - ae.x, 2) + Math.pow(Y(af).pageY - ae.y, 2)) <= W) {
                        this.jDel("event:btnclick:btnclickEvent");
                        af.stop();
                        ae.pushToEvents(af);
                        this.jCallEvent("tap", ae)
                    }
                }
            }
        })(S);
        M.Event.Custom.dbltap = new M.Class(M.extend(M.Event.Custom, {
            type: "dbltap",
            timedout: false,
            tm: null,
            init: function(W, V) {
                this.x = V.x;
                this.y = V.y;
                this.clientX = V.clientX;
                this.clientY = V.clientY;
                this.timeStamp = V.timeStamp;
                this.button = 0;
                this.target = W;
                this.pushToEvents(V)
            }
        }));
        M.Event.Custom.dbltap.handler = {
            options: {
                threshold: 300
            },
            add: function(V) {
                this.jStore("event:dbltap:options", M.extend(M.detach(M.Event.Custom.dbltap.handler.options), V || {}));
                this.jAddEvent("tap", M.Event.Custom.dbltap.handler.handle, 1)
            },
            jRemove: function() {
                this.jRemoveEvent("tap", M.Event.Custom.dbltap.handler.handle)
            },
            handle: function(X) {
                var W, V;
                W = this.jFetch("event:dbltap:event");
                V = this.jFetch("event:dbltap:options");
                if (!W) {
                    W = new M.Event.Custom.dbltap(this, X);
                    W.tm = setTimeout(function() {
                        W.timedout = true;
                        X.isQueueStopped = M.$false;
                        this.jCallEvent("tap", X)
                    }.jBind(this), V.threshold + 10);
                    this.jStore("event:dbltap:event", W);
                    X.stopQueue()
                } else {
                    clearTimeout(W.tm);
                    this.jDel("event:dbltap:event");
                    if (!W.timedout) {
                        W.pushToEvents(X);
                        X.stopQueue().stop();
                        this.jCallEvent("dbltap", W)
                    } else {}
                }
            }
        };
        (function(aa) {
            var Z = aa.$;

            function V(ab) {
                return ab.pointerType ? (("touch" === ab.pointerType || ab.MSPOINTER_TYPE_TOUCH === ab.pointerType) && ab.isPrimary) : 1 === ab.changedTouches.length && (ab.targetTouches.length ? ab.targetTouches[0].identifier == ab.changedTouches[0].identifier : true)
            }

            function X(ab) {
                if (ab.pointerType) {
                    return ("touch" === ab.pointerType || ab.MSPOINTER_TYPE_TOUCH === ab.pointerType) ? ab.pointerId : null
                } else {
                    return ab.changedTouches[0].identifier
                }
            }

            function Y(ab) {
                if (ab.pointerType) {
                    return ("touch" === ab.pointerType || ab.MSPOINTER_TYPE_TOUCH === ab.pointerType) ? ab : null
                } else {
                    return ab.changedTouches[0]
                }
            }
            var W = 10;
            aa.Event.Custom.touchdrag = new aa.Class(aa.extend(aa.Event.Custom, {
                type: "touchdrag",
                state: "dragstart",
                id: null,
                dragged: false,
                init: function(ad, ac, ab) {
                    var ae = Y(ac);
                    this.id = ae.pointerId || ae.identifier;
                    this.clientX = ae.clientX;
                    this.clientY = ae.clientY;
                    this.pageX = ae.pageX;
                    this.pageY = ae.pageY;
                    this.x = ae.pageX;
                    this.y = ae.pageY;
                    this.timeStamp = ac.timeStamp;
                    this.button = 0;
                    this.target = ad;
                    this.pushToEvents(ac);
                    this.state = ab
                }
            }));
            aa.Event.Custom.touchdrag.handler = {
                add: function() {
                    var ac = aa.Event.Custom.touchdrag.handler.onTouchMove.jBind(this),
                        ab = aa.Event.Custom.touchdrag.handler.onTouchEnd.jBind(this);
                    this.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], aa.Event.Custom.touchdrag.handler.onTouchStart, 1);
                    this.jAddEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], aa.Event.Custom.touchdrag.handler.onTouchEnd, 1);
                    this.jAddEvent(["touchmove", window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove"], aa.Event.Custom.touchdrag.handler.onTouchMove, 1);
                    this.jStore("event:touchdrag:listeners:document:move", ac);
                    this.jStore("event:touchdrag:listeners:document:end", ab);
                    Z(document).jAddEvent(window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove", ac, 1);
                    Z(document).jAddEvent(window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp", ab, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], aa.Event.Custom.touchdrag.handler.onTouchStart);
                    this.jRemoveEvent(["touchend", window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp"], aa.Event.Custom.touchdrag.handler.onTouchEnd);
                    this.jRemoveEvent(["touchmove", window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove"], aa.Event.Custom.touchdrag.handler.onTouchMove);
                    Z(document).jRemoveEvent(window.navigator.pointerEnabled ? "pointermove" : "MSPointerMove", this.jFetch("event:touchdrag:listeners:document:move") || aa.$F, 1);
                    Z(document).jRemoveEvent(window.navigator.pointerEnabled ? "pointerup" : "MSPointerUp", this.jFetch("event:touchdrag:listeners:document:end") || aa.$F, 1);
                    this.jDel("event:touchdrag:listeners:document:move");
                    this.jDel("event:touchdrag:listeners:document:end")
                },
                onTouchStart: function(ac) {
                    var ab;
                    if (!V(ac)) {
                        return
                    }
                    ab = new aa.Event.Custom.touchdrag(this, ac, "dragstart");
                    this.jStore("event:touchdrag:dragstart", ab)
                },
                onTouchEnd: function(ac) {
                    var ab;
                    ab = this.jFetch("event:touchdrag:dragstart");
                    if (!ab || !ab.dragged || ab.id != X(ac)) {
                        return
                    }
                    ab = new aa.Event.Custom.touchdrag(this, ac, "dragend");
                    this.jDel("event:touchdrag:dragstart");
                    this.jCallEvent("touchdrag", ab)
                },
                onTouchMove: function(ac) {
                    var ab;
                    ab = this.jFetch("event:touchdrag:dragstart");
                    if (!ab || !V(ac)) {
                        return
                    }
                    if (ab.id != X(ac)) {
                        this.jDel("event:touchdrag:dragstart");
                        return
                    }
                    if (!ab.dragged && Math.sqrt(Math.pow(Y(ac).pageX - ab.x, 2) + Math.pow(Y(ac).pageY - ab.y, 2)) > W) {
                        ab.dragged = true;
                        this.jCallEvent("touchdrag", ab)
                    }
                    if (!ab.dragged) {
                        return
                    }
                    ab = new aa.Event.Custom.touchdrag(this, ac, "dragmove");
                    this.jCallEvent("touchdrag", ab)
                }
            }
        })(S);
        M.Event.Custom.touchpinch = new M.Class(M.extend(M.Event.Custom, {
            type: "touchpinch",
            scale: 1,
            previousScale: 1,
            curScale: 1,
            state: "pinchstart",
            init: function(W, V) {
                this.timeStamp = V.timeStamp;
                this.button = 0;
                this.target = W;
                this.x = V.touches[0].clientX + (V.touches[1].clientX - V.touches[0].clientX) / 2;
                this.y = V.touches[0].clientY + (V.touches[1].clientY - V.touches[0].clientY) / 2;
                this._initialDistance = Math.sqrt(Math.pow(V.touches[0].clientX - V.touches[1].clientX, 2) + Math.pow(V.touches[0].clientY - V.touches[1].clientY, 2));
                this.pushToEvents(V)
            },
            update: function(V) {
                var W;
                this.state = "pinchupdate";
                if (V.changedTouches[0].identifier != this.events[0].touches[0].identifier || V.changedTouches[1].identifier != this.events[0].touches[1].identifier) {
                    return
                }
                W = Math.sqrt(Math.pow(V.changedTouches[0].clientX - V.changedTouches[1].clientX, 2) + Math.pow(V.changedTouches[0].clientY - V.changedTouches[1].clientY, 2));
                this.previousScale = this.scale;
                this.scale = W / this._initialDistance;
                this.curScale = this.scale / this.previousScale;
                this.x = V.changedTouches[0].clientX + (V.changedTouches[1].clientX - V.changedTouches[0].clientX) / 2;
                this.y = V.changedTouches[0].clientY + (V.changedTouches[1].clientY - V.changedTouches[0].clientY) / 2;
                this.pushToEvents(V)
            }
        }));
        M.Event.Custom.touchpinch.handler = {
            add: function() {
                this.jAddEvent("touchstart", M.Event.Custom.touchpinch.handler.handleTouchStart, 1);
                this.jAddEvent("touchend", M.Event.Custom.touchpinch.handler.handleTouchEnd, 1);
                this.jAddEvent("touchmove", M.Event.Custom.touchpinch.handler.handleTouchMove, 1)
            },
            jRemove: function() {
                this.jRemoveEvent("touchstart", M.Event.Custom.touchpinch.handler.handleTouchStart);
                this.jRemoveEvent("touchend", M.Event.Custom.touchpinch.handler.handleTouchEnd);
                this.jRemoveEvent("touchmove", M.Event.Custom.touchpinch.handler.handleTouchMove)
            },
            handleTouchStart: function(W) {
                var V;
                if (W.touches.length != 2) {
                    return
                }
                W.stopDefaults();
                V = new M.Event.Custom.touchpinch(this, W);
                this.jStore("event:touchpinch:event", V)
            },
            handleTouchEnd: function(W) {
                var V;
                V = this.jFetch("event:touchpinch:event");
                if (!V) {
                    return
                }
                W.stopDefaults();
                this.jDel("event:touchpinch:event")
            },
            handleTouchMove: function(W) {
                var V;
                V = this.jFetch("event:touchpinch:event");
                if (!V) {
                    return
                }
                W.stopDefaults();
                V.update(W);
                this.jCallEvent("touchpinch", V)
            }
        };
        (function(aa) {
            var Y = aa.$;
            aa.Event.Custom.mousescroll = new aa.Class(aa.extend(aa.Event.Custom, {
                type: "mousescroll",
                init: function(ag, af, ai, ac, ab, ah, ad) {
                    var ae = af.jGetPageXY();
                    this.x = ae.x;
                    this.y = ae.y;
                    this.timeStamp = af.timeStamp;
                    this.target = ag;
                    this.delta = ai || 0;
                    this.deltaX = ac || 0;
                    this.deltaY = ab || 0;
                    this.deltaZ = ah || 0;
                    this.deltaFactor = ad || 0;
                    this.deltaMode = af.deltaMode || 0;
                    this.isMouse = false;
                    this.pushToEvents(af)
                }
            }));
            var Z, W;

            function V() {
                Z = null
            }

            function X(ab, ac) {
                return (ab > 50) || (1 === ac && !("win" == aa.jBrowser.platform && ab < 1)) || (0 === ab % 12) || (0 == ab % 4.000244140625)
            }
            aa.Event.Custom.mousescroll.handler = {
                eventType: "onwheel" in document || aa.jBrowser.ieMode > 8 ? "wheel" : "mousewheel",
                add: function() {
                    this.jAddEvent(aa.Event.Custom.mousescroll.handler.eventType, aa.Event.Custom.mousescroll.handler.handle, 1)
                },
                jRemove: function() {
                    this.jRemoveEvent(aa.Event.Custom.mousescroll.handler.eventType, aa.Event.Custom.mousescroll.handler.handle, 1)
                },
                handle: function(ag) {
                    var ah = 0,
                        ae = 0,
                        ac = 0,
                        ab = 0,
                        af, ad;
                    if (ag.detail) {
                        ac = ag.detail * -1
                    }
                    if (ag.wheelDelta !== undefined) {
                        ac = ag.wheelDelta
                    }
                    if (ag.wheelDeltaY !== undefined) {
                        ac = ag.wheelDeltaY
                    }
                    if (ag.wheelDeltaX !== undefined) {
                        ae = ag.wheelDeltaX * -1
                    }
                    if (ag.deltaY) {
                        ac = -1 * ag.deltaY
                    }
                    if (ag.deltaX) {
                        ae = ag.deltaX
                    }
                    if (0 === ac && 0 === ae) {
                        return
                    }
                    ah = 0 === ac ? ae : ac;
                    ab = Math.max(Math.abs(ac), Math.abs(ae));
                    if (!Z || ab < Z) {
                        Z = ab
                    }
                    af = ah > 0 ? "floor" : "ceil";
                    ah = Math[af](ah / Z);
                    ae = Math[af](ae / Z);
                    ac = Math[af](ac / Z);
                    if (W) {
                        clearTimeout(W)
                    }
                    W = setTimeout(V, 200);
                    ad = new aa.Event.Custom.mousescroll(this, ag, ah, ae, ac, 0, Z);
                    ad.isMouse = X(Z, ag.deltaMode || 0);
                    this.jCallEvent("mousescroll", ad)
                }
            }
        })(S);
        M.win = M.$(window);
        M.doc = M.$(document);
        return S
    })();
    (function(H) {
        if (!H) {
            throw "MagicJS not found"
        }
        if (H.FX) {
            return
        }
        var G = H.$;
        H.FX = new H.Class({
            init: function(J, I) {
                var K;
                this.el = H.$(J);
                this.options = H.extend(this.options, I);
                this.timer = false;
                this.easeFn = this.cubicBezierAtTime;
                K = H.FX.Transition[this.options.transition] || this.options.transition;
                if ("function" === H.jTypeOf(K)) {
                    this.easeFn = K
                } else {
                    this.cubicBezier = this.parseCubicBezier(K) || this.parseCubicBezier("ease")
                }
                if ("string" == H.jTypeOf(this.options.cycles)) {
                    this.options.cycles = "infinite" === this.options.cycles ? Infinity : parseInt(this.options.cycles) || 1
                }
            },
            options: {
                fps: 60,
                duration: 600,
                transition: "ease",
                cycles: 1,
                direction: "normal",
                onStart: H.$F,
                onComplete: H.$F,
                onBeforeRender: H.$F,
                onAfterRender: H.$F,
                forceAnimation: false,
                roundCss: false
            },
            styles: null,
            cubicBezier: null,
            easeFn: null,
            start: function(K) {
                var I = /\%$/,
                    J;
                this.styles = K;
                this.cycle = 0;
                this.state = 0;
                this.curFrame = 0;
                this.pStyles = {};
                this.alternate = "alternate" === this.options.direction || "alternate-reverse" === this.options.direction;
                this.continuous = "continuous" === this.options.direction || "continuous-reverse" === this.options.direction;
                for (J in this.styles) {
                    I.test(this.styles[J][0]) && (this.pStyles[J] = true);
                    if ("reverse" === this.options.direction || "alternate-reverse" === this.options.direction || "continuous-reverse" === this.options.direction) {
                        this.styles[J].reverse()
                    }
                }
                this.startTime = H.now();
                this.finishTime = this.startTime + this.options.duration;
                this.options.onStart.call();
                if (0 === this.options.duration) {
                    this.render(1);
                    this.options.onComplete.call()
                } else {
                    this.loopBind = this.loop.jBind(this);
                    if (!this.options.forceAnimation && H.jBrowser.features.requestAnimationFrame) {
                        this.timer = H.jBrowser.requestAnimationFrame.call(window, this.loopBind)
                    } else {
                        this.timer = this.loopBind.interval(Math.round(1000 / this.options.fps))
                    }
                }
                return this
            },
            stopAnimation: function() {
                if (this.timer) {
                    if (!this.options.forceAnimation && H.jBrowser.features.requestAnimationFrame && H.jBrowser.cancelAnimationFrame) {
                        H.jBrowser.cancelAnimationFrame.call(window, this.timer)
                    } else {
                        clearInterval(this.timer)
                    }
                    this.timer = false
                }
            },
            stop: function(I) {
                I = H.defined(I) ? I : false;
                this.stopAnimation();
                if (I) {
                    this.render(1);
                    this.options.onComplete.jDelay(10)
                }
                return this
            },
            calc: function(K, J, I) {
                K = parseFloat(K);
                J = parseFloat(J);
                return (J - K) * I + K
            },
            loop: function() {
                var J = H.now(),
                    I = (J - this.startTime) / this.options.duration,
                    K = Math.floor(I);
                if (J >= this.finishTime && K >= this.options.cycles) {
                    this.stopAnimation();
                    this.render(1);
                    this.options.onComplete.jDelay(10);
                    return this
                }
                if (this.alternate && this.cycle < K) {
                    for (var L in this.styles) {
                        this.styles[L].reverse()
                    }
                }
                this.cycle = K;
                if (!this.options.forceAnimation && H.jBrowser.features.requestAnimationFrame) {
                    this.timer = H.jBrowser.requestAnimationFrame.call(window, this.loopBind)
                }
                this.render((this.continuous ? K : 0) + this.easeFn(I % 1))
            },
            render: function(I) {
                var J = {},
                    L = I;
                for (var K in this.styles) {
                    if ("opacity" === K) {
                        J[K] = Math.round(this.calc(this.styles[K][0], this.styles[K][1], I) * 100) / 100
                    } else {
                        J[K] = this.calc(this.styles[K][0], this.styles[K][1], I);
                        this.pStyles[K] && (J[K] += "%")
                    }
                }
                this.options.onBeforeRender(J, this.el);
                this.set(J);
                this.options.onAfterRender(J, this.el)
            },
            set: function(I) {
                return this.el.jSetCss(I)
            },
            parseCubicBezier: function(I) {
                var J, K = null;
                if ("string" !== H.jTypeOf(I)) {
                    return null
                }
                switch (I) {
                    case "linear":
                        K = G([0, 0, 1, 1]);
                        break;
                    case "ease":
                        K = G([0.25, 0.1, 0.25, 1]);
                        break;
                    case "ease-in":
                        K = G([0.42, 0, 1, 1]);
                        break;
                    case "ease-out":
                        K = G([0, 0, 0.58, 1]);
                        break;
                    case "ease-in-out":
                        K = G([0.42, 0, 0.58, 1]);
                        break;
                    case "easeInSine":
                        K = G([0.47, 0, 0.745, 0.715]);
                        break;
                    case "easeOutSine":
                        K = G([0.39, 0.575, 0.565, 1]);
                        break;
                    case "easeInOutSine":
                        K = G([0.445, 0.05, 0.55, 0.95]);
                        break;
                    case "easeInQuad":
                        K = G([0.55, 0.085, 0.68, 0.53]);
                        break;
                    case "easeOutQuad":
                        K = G([0.25, 0.46, 0.45, 0.94]);
                        break;
                    case "easeInOutQuad":
                        K = G([0.455, 0.03, 0.515, 0.955]);
                        break;
                    case "easeInCubic":
                        K = G([0.55, 0.055, 0.675, 0.19]);
                        break;
                    case "easeOutCubic":
                        K = G([0.215, 0.61, 0.355, 1]);
                        break;
                    case "easeInOutCubic":
                        K = G([0.645, 0.045, 0.355, 1]);
                        break;
                    case "easeInQuart":
                        K = G([0.895, 0.03, 0.685, 0.22]);
                        break;
                    case "easeOutQuart":
                        K = G([0.165, 0.84, 0.44, 1]);
                        break;
                    case "easeInOutQuart":
                        K = G([0.77, 0, 0.175, 1]);
                        break;
                    case "easeInQuint":
                        K = G([0.755, 0.05, 0.855, 0.06]);
                        break;
                    case "easeOutQuint":
                        K = G([0.23, 1, 0.32, 1]);
                        break;
                    case "easeInOutQuint":
                        K = G([0.86, 0, 0.07, 1]);
                        break;
                    case "easeInExpo":
                        K = G([0.95, 0.05, 0.795, 0.035]);
                        break;
                    case "easeOutExpo":
                        K = G([0.19, 1, 0.22, 1]);
                        break;
                    case "easeInOutExpo":
                        K = G([1, 0, 0, 1]);
                        break;
                    case "easeInCirc":
                        K = G([0.6, 0.04, 0.98, 0.335]);
                        break;
                    case "easeOutCirc":
                        K = G([0.075, 0.82, 0.165, 1]);
                        break;
                    case "easeInOutCirc":
                        K = G([0.785, 0.135, 0.15, 0.86]);
                        break;
                    case "easeInBack":
                        K = G([0.6, -0.28, 0.735, 0.045]);
                        break;
                    case "easeOutBack":
                        K = G([0.175, 0.885, 0.32, 1.275]);
                        break;
                    case "easeInOutBack":
                        K = G([0.68, -0.55, 0.265, 1.55]);
                        break;
                    default:
                        I = I.replace(/\s/g, "");
                        if (I.match(/^cubic-bezier\((?:-?[0-9\.]{0,}[0-9]{1,},){3}(?:-?[0-9\.]{0,}[0-9]{1,})\)$/)) {
                            K = I.replace(/^cubic-bezier\s*\(|\)$/g, "").split(",");
                            for (J = K.length - 1; J >= 0; J--) {
                                K[J] = parseFloat(K[J])
                            }
                        }
                }
                return G(K)
            },
            cubicBezierAtTime: function(U) {
                var I = 0,
                    T = 0,
                    Q = 0,
                    V = 0,
                    S = 0,
                    O = 0,
                    P = this.options.duration;

                function N(W) {
                    return ((I * W + T) * W + Q) * W
                }

                function M(W) {
                    return ((V * W + S) * W + O) * W
                }

                function K(W) {
                    return (3 * I * W + 2 * T) * W + Q
                }

                function R(W) {
                    return 1 / (200 * W)
                }

                function J(W, X) {
                    return M(L(W, X))
                }

                function L(ad, ae) {
                    var ac, ab, aa, X, W, Z;

                    function Y(af) {
                        if (af >= 0) {
                            return af
                        } else {
                            return 0 - af
                        }
                    }
                    for (aa = ad, Z = 0; Z < 8; Z++) {
                        X = N(aa) - ad;
                        if (Y(X) < ae) {
                            return aa
                        }
                        W = K(aa);
                        if (Y(W) < 0.000001) {
                            break
                        }
                        aa = aa - X / W
                    }
                    ac = 0;
                    ab = 1;
                    aa = ad;
                    if (aa < ac) {
                        return ac
                    }
                    if (aa > ab) {
                        return ab
                    }
                    while (ac < ab) {
                        X = N(aa);
                        if (Y(X - ad) < ae) {
                            return aa
                        }
                        if (ad > X) {
                            ac = aa
                        } else {
                            ab = aa
                        }
                        aa = (ab - ac) * 0.5 + ac
                    }
                    return aa
                }
                Q = 3 * this.cubicBezier[0];
                T = 3 * (this.cubicBezier[2] - this.cubicBezier[0]) - Q;
                I = 1 - Q - T;
                O = 3 * this.cubicBezier[1];
                S = 3 * (this.cubicBezier[3] - this.cubicBezier[1]) - O;
                V = 1 - O - S;
                return J(U, R(P))
            }
        });
        H.FX.Transition = {
            linear: "linear",
            sineIn: "easeInSine",
            sineOut: "easeOutSine",
            expoIn: "easeInExpo",
            expoOut: "easeOutExpo",
            quadIn: "easeInQuad",
            quadOut: "easeOutQuad",
            cubicIn: "easeInCubic",
            cubicOut: "easeOutCubic",
            backIn: "easeInBack",
            backOut: "easeOutBack",
            elasticIn: function(J, I) {
                I = I || [];
                return Math.pow(2, 10 * --J) * Math.cos(20 * J * Math.PI * (I[0] || 1) / 3)
            },
            elasticOut: function(J, I) {
                return 1 - H.FX.Transition.elasticIn(1 - J, I)
            },
            bounceIn: function(K) {
                for (var J = 0, I = 1; 1; J += I, I /= 2) {
                    if (K >= (7 - 4 * J) / 11) {
                        return I * I - Math.pow((11 - 6 * J - 11 * K) / 4, 2)
                    }
                }
            },
            bounceOut: function(I) {
                return 1 - H.FX.Transition.bounceIn(1 - I)
            },
            none: function(I) {
                return 0
            }
        }
    })(w);
    (function(H) {
        if (!H) {
            throw "MagicJS not found"
        }
        if (H.PFX) {
            return
        }
        var G = H.$;
        H.PFX = new H.Class(H.FX, {
            init: function(I, J) {
                this.el_arr = I;
                this.options = H.extend(this.options, J);
                this.timer = false;
                this.$parent.init()
            },
            start: function(M) {
                var I = /\%$/,
                    L, K, J = M.length;
                this.styles_arr = M;
                this.pStyles_arr = new Array(J);
                for (K = 0; K < J; K++) {
                    this.pStyles_arr[K] = {};
                    for (L in M[K]) {
                        I.test(M[K][L][0]) && (this.pStyles_arr[K][L] = true);
                        if ("reverse" === this.options.direction || "alternate-reverse" === this.options.direction || "continuous-reverse" === this.options.direction) {
                            this.styles_arr[K][L].reverse()
                        }
                    }
                }
                this.$parent.start([]);
                return this
            },
            render: function(I) {
                for (var J = 0; J < this.el_arr.length; J++) {
                    this.el = H.$(this.el_arr[J]);
                    this.styles = this.styles_arr[J];
                    this.pStyles = this.pStyles_arr[J];
                    this.$parent.render(I)
                }
            }
        })
    })(w);
    (function(I) {
        if (!I) {
            throw "MagicJS not found"
        }
        var H = I.$;
        var G = window.URL || window.webkitURL || null;
        w.ImageLoader = new I.Class({
            img: null,
            ready: false,
            options: {
                onprogress: I.$F,
                onload: I.$F,
                onabort: I.$F,
                onerror: I.$F,
                oncomplete: I.$F,
                onxhrerror: I.$F,
                xhr: false,
                progressiveLoad: true
            },
            size: null,
            _timer: null,
            loadedBytes: 0,
            _handlers: {
                onprogress: function(J) {
                    if (J.target && (200 === J.target.status || 304 === J.target.status) && J.lengthComputable) {
                        this.options.onprogress.jBind(null, (J.loaded - (this.options.progressiveLoad ? this.loadedBytes : 0)) / J.total).jDelay(1);
                        this.loadedBytes = J.loaded
                    }
                },
                onload: function(J) {
                    if (J) {
                        H(J).stop()
                    }
                    this._unbind();
                    if (this.ready) {
                        return
                    }
                    this.ready = true;
                    this._cleanup();
                    !this.options.xhr && this.options.onprogress.jBind(null, 1).jDelay(1);
                    this.options.onload.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                },
                onabort: function(J) {
                    if (J) {
                        H(J).stop()
                    }
                    this._unbind();
                    this.ready = false;
                    this._cleanup();
                    this.options.onabort.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                },
                onerror: function(J) {
                    if (J) {
                        H(J).stop()
                    }
                    this._unbind();
                    this.ready = false;
                    this._cleanup();
                    this.options.onerror.jBind(null, this).jDelay(1);
                    this.options.oncomplete.jBind(null, this).jDelay(1)
                }
            },
            _bind: function() {
                H(["load", "abort", "error"]).jEach(function(J) {
                    this.img.jAddEvent(J, this._handlers["on" + J].jBindAsEvent(this).jDefer(1))
                }, this)
            },
            _unbind: function() {
                if (this._timer) {
                    try {
                        clearTimeout(this._timer)
                    } catch (J) {}
                    this._timer = null
                }
                H(["load", "abort", "error"]).jEach(function(K) {
                    this.img.jRemoveEvent(K)
                }, this)
            },
            _cleanup: function() {
                this.jGetSize();
                if (this.img.jFetch("new")) {
                    var J = this.img.parentNode;
                    this.img.jRemove().jDel("new").jSetCss({
                        position: "static",
                        top: "auto"
                    });
                    J.kill()
                }
            },
            loadBlob: function(K) {
                var L = new XMLHttpRequest(),
                    J;
                H(["abort", "progress"]).jEach(function(M) {
                    L["on" + M] = H(function(N) {
                        this._handlers["on" + M].call(this, N)
                    }).jBind(this)
                }, this);
                L.onerror = H(function() {
                    this.options.onxhrerror.jBind(null, this).jDelay(1);
                    this.options.xhr = false;
                    this._bind();
                    this.img.src = K
                }).jBind(this);
                L.onload = H(function() {
                    if (200 !== L.status && 304 !== L.status) {
                        this._handlers.onerror.call(this);
                        return
                    }
                    J = L.response;
                    this._bind();
                    if (G && !I.jBrowser.trident && !("ios" === I.jBrowser.platform && I.jBrowser.version < 537)) {
                        this.img.setAttribute("src", G.createObjectURL(J))
                    } else {
                        this.img.src = K
                    }
                }).jBind(this);
                L.open("GET", K);
                L.responseType = "blob";
                L.send()
            },
            init: function(K, J) {
                this.options = I.extend(this.options, J);
                this.img = H(K) || I.$new("img", {}, {
                    "max-width": "none",
                    "max-height": "none"
                }).jAppendTo(I.$new("div").jAddClass("magic-temporary-img").jSetCss({
                    position: "absolute",
                    top: -10000,
                    width: 10,
                    height: 10,
                    overflow: "hidden"
                }).jAppendTo(document.body)).jStore("new", true);
                if (I.jBrowser.features.xhr2 && this.options.xhr && "string" == I.jTypeOf(K)) {
                    this.loadBlob(K);
                    return
                }
                var L = function() {
                    if (this.isReady()) {
                        this._handlers.onload.call(this)
                    } else {
                        this._handlers.onerror.call(this)
                    }
                    L = null
                }.jBind(this);
                this._bind();
                if ("string" == I.jTypeOf(K)) {
                    this.img.src = K
                } else {
                    if (I.jBrowser.trident && 5 == I.jBrowser.version && I.jBrowser.ieMode < 9) {
                        this.img.onreadystatechange = function() {
                            if (/loaded|complete/.test(this.img.readyState)) {
                                this.img.onreadystatechange = null;
                                L && L()
                            }
                        }.jBind(this)
                    }
                    this.img.src = K.getAttribute("src")
                }
                this.img && this.img.complete && L && (this._timer = L.jDelay(100))
            },
            destroy: function() {
                this._unbind();
                this._cleanup();
                this.ready = false;
                return this
            },
            isReady: function() {
                var J = this.img;
                return (J.naturalWidth) ? (J.naturalWidth > 0) : (J.readyState) ? ("complete" == J.readyState) : J.width > 0
            },
            jGetSize: function() {
                return this.size || (this.size = {
                    width: this.img.naturalWidth || this.img.width,
                    height: this.img.naturalHeight || this.img.height
                })
            }
        })
    })(w);
    (function(H) {
        if (!H) {
            throw "MagicJS not found";
            return
        }
        if (H.Tooltip) {
            return
        }
        var G = H.$;
        H.Tooltip = function(J, K) {
            var I = this.tooltip = H.$new("div", null, {
                position: "absolute",
                "z-index": 999
            }).jAddClass("MagicToolboxTooltip");
            H.$(J).jAddEvent("mouseover", function() {
                I.jAppendTo(document.body)
            });
            H.$(J).jAddEvent("mouseout", function() {
                I.jRemove()
            });
            H.$(J).jAddEvent("mousemove", function(P) {
                var R = 20,
                    O = H.$(P).jGetPageXY(),
                    N = I.jGetSize(),
                    M = H.$(window).jGetSize(),
                    Q = H.$(window).jGetScroll();

                function L(U, S, T) {
                    return (T < (U - S) / 2) ? T : ((T > (U + S) / 2) ? (T - S) : (U - S) / 2)
                }
                I.jSetCss({
                    left: Q.x + L(M.width, N.width + 2 * R, O.x - Q.x) + R,
                    top: Q.y + L(M.height, N.height + 2 * R, O.y - Q.y) + R
                })
            });
            this.text(K)
        };
        H.Tooltip.prototype.text = function(I) {
            this.tooltip.firstChild && this.tooltip.removeChild(this.tooltip.firstChild);
            this.tooltip.append(document.createTextNode(I))
        }
    })(w);
    (function(H) {
        if (!H) {
            throw "MagicJS not found";
            return
        }
        if (H.MessageBox) {
            return
        }
        var G = H.$;
        H.Message = function(L, K, J, I) {
            this.hideTimer = null;
            this.messageBox = H.$new("span", null, {
                position: "absolute",
                "z-index": 999,
                visibility: "hidden",
                opacity: 0.8
            }).jAddClass(I || "").jAppendTo(J || document.body);
            this.setMessage(L);
            this.show(K)
        };
        H.Message.prototype.show = function(I) {
            this.messageBox.show();
            this.hideTimer = this.hide.jBind(this).jDelay(H.ifndef(I, 5000))
        };
        H.Message.prototype.hide = function(I) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
            if (this.messageBox && !this.hideFX) {
                this.hideFX = new w.FX(this.messageBox, {
                    duration: H.ifndef(I, 500),
                    onComplete: function() {
                        this.messageBox.kill();
                        delete this.messageBox;
                        this.hideFX = null
                    }.jBind(this)
                }).start({
                    opacity: [this.messageBox.jGetCss("opacity"), 0]
                })
            }
        };
        H.Message.prototype.setMessage = function(I) {
            this.messageBox.firstChild && this.tooltip.removeChild(this.messageBox.firstChild);
            this.messageBox.append(document.createTextNode(I))
        }
    })(w);
    (function(H) {
        if (!H) {
            throw "MagicJS not found"
        }
        if (H.Options) {
            return
        }
        var K = H.$,
            G = null,
            O = {
                "boolean": 1,
                array: 2,
                number: 3,
                "function": 4,
                string: 100
            },
            I = {
                "boolean": function(R, Q, P) {
                    if ("boolean" != H.jTypeOf(Q)) {
                        if (P || "string" != H.jTypeOf(Q)) {
                            return false
                        } else {
                            if (!/^(true|false)$/.test(Q)) {
                                return false
                            } else {
                                Q = Q.jToBool()
                            }
                        }
                    }
                    if (R.hasOwnProperty("enum") && !K(R["enum"]).contains(Q)) {
                        return false
                    }
                    G = Q;
                    return true
                },
                string: function(R, Q, P) {
                    if ("string" !== H.jTypeOf(Q)) {
                        return false
                    } else {
                        if (R.hasOwnProperty("enum") && !K(R["enum"]).contains(Q)) {
                            return false
                        } else {
                            G = "" + Q;
                            return true
                        }
                    }
                },
                number: function(S, R, Q) {
                    var P = false,
                        U = /%$/,
                        T = (H.jTypeOf(R) == "string" && U.test(R));
                    if (Q && !"number" == typeof R) {
                        return false
                    }
                    R = parseFloat(R);
                    if (isNaN(R)) {
                        return false
                    }
                    if (isNaN(S.minimum)) {
                        S.minimum = Number.NEGATIVE_INFINITY
                    }
                    if (isNaN(S.maximum)) {
                        S.maximum = Number.POSITIVE_INFINITY
                    }
                    if (S.hasOwnProperty("enum") && !K(S["enum"]).contains(R)) {
                        return false
                    }
                    if (S.minimum > R || R > S.maximum) {
                        return false
                    }
                    G = T ? (R + "%") : R;
                    return true
                },
                array: function(S, Q, P) {
                    if ("string" === H.jTypeOf(Q)) {
                        try {
                            Q = window.JSON.parse(Q)
                        } catch (R) {
                            return false
                        }
                    }
                    if (H.jTypeOf(Q) === "array") {
                        G = Q;
                        return true
                    } else {
                        return false
                    }
                },
                "function": function(R, Q, P) {
                    if (H.jTypeOf(Q) === "function") {
                        G = Q;
                        return true
                    } else {
                        return false
                    }
                }
            },
            J = function(U, T, Q) {
                var S;
                S = U.hasOwnProperty("oneOf") ? U.oneOf : [U];
                if ("array" != H.jTypeOf(S)) {
                    return false
                }
                for (var R = 0, P = S.length - 1; R <= P; R++) {
                    if (I[S[R].type](S[R], T, Q)) {
                        return true
                    }
                }
                return false
            },
            M = function(U) {
                var S, R, T, P, Q;
                if (U.hasOwnProperty("oneOf")) {
                    P = U.oneOf.length;
                    for (S = 0; S < P; S++) {
                        for (R = S + 1; R < P; R++) {
                            if (O[U.oneOf[S]["type"]] > O[U.oneOf[R].type]) {
                                Q = U.oneOf[S];
                                U.oneOf[S] = U.oneOf[R];
                                U.oneOf[R] = Q
                            }
                        }
                    }
                }
                return U
            },
            N = function(S) {
                var R;
                R = S.hasOwnProperty("oneOf") ? S.oneOf : [S];
                if ("array" != H.jTypeOf(R)) {
                    return false
                }
                for (var Q = R.length - 1; Q >= 0; Q--) {
                    if (!R[Q].type || !O.hasOwnProperty(R[Q].type)) {
                        return false
                    }
                    if (H.defined(R[Q]["enum"])) {
                        if ("array" !== H.jTypeOf(R[Q]["enum"])) {
                            return false
                        }
                        for (var P = R[Q]["enum"].length - 1; P >= 0; P--) {
                            if (!I[R[Q].type]({
                                    type: R[Q].type
                                }, R[Q]["enum"][P], true)) {
                                return false
                            }
                        }
                    }
                }
                if (S.hasOwnProperty("default") && !J(S, S["default"], true)) {
                    return false
                }
                return true
            },
            L = function(P) {
                this.schema = {};
                this.options = {};
                this.parseSchema(P)
            };
        H.extend(L.prototype, {
            parseSchema: function(R) {
                var Q, P, S;
                for (Q in R) {
                    if (!R.hasOwnProperty(Q)) {
                        continue
                    }
                    P = (Q + "").jTrim().jCamelize();
                    if (!this.schema.hasOwnProperty(P)) {
                        this.schema[P] = M(R[Q]);
                        if (!N(this.schema[P])) {
                            throw "Incorrect definition of the '" + Q + "' parameter in " + R
                        }
                        this.options[P] = undefined
                    }
                }
            },
            set: function(Q, P) {
                Q = (Q + "").jTrim().jCamelize();
                if (H.jTypeOf(P) == "string") {
                    P = P.jTrim()
                }
                if (this.schema.hasOwnProperty(Q)) {
                    G = P;
                    if (J(this.schema[Q], P)) {
                        this.options[Q] = G
                    }
                    G = null
                }
            },
            get: function(P) {
                P = (P + "").jTrim().jCamelize();
                if (this.schema.hasOwnProperty(P)) {
                    return H.defined(this.options[P]) ? this.options[P] : this.schema[P]["default"]
                }
            },
            fromJSON: function(Q) {
                for (var P in Q) {
                    this.set(P, Q[P])
                }
            },
            getJSON: function() {
                var Q = H.extend({}, this.options);
                for (var P in Q) {
                    if (undefined === Q[P] && undefined !== this.schema[P]["default"]) {
                        Q[P] = this.schema[P]["default"]
                    }
                }
                return Q
            },
            fromString: function(P) {
                K(P.split(";")).jEach(K(function(Q) {
                    Q = Q.split(":");
                    this.set(Q.shift().jTrim(), Q.join(":"))
                }).jBind(this))
            },
            exists: function(P) {
                P = (P + "").jTrim().jCamelize();
                return this.schema.hasOwnProperty(P)
            },
            isset: function(P) {
                P = (P + "").jTrim().jCamelize();
                return this.exists(P) && H.defined(this.options[P])
            },
            jRemove: function(P) {
                P = (P + "").jTrim().jCamelize();
                if (this.exists(P)) {
                    delete this.options[P];
                    delete this.schema[P]
                }
            }
        });
        H.Options = L
    }(w));
    (function(K) {
        if (!K) {
            throw "MagicJS not found";
            return
        }
        var J = K.$;
        if (K.SVGImage) {
            return
        }
        var I = "http://www.w3.org/2000/svg",
            H = "http://www.w3.org/1999/xlink";
        var G = function(L) {
            this.filters = {};
            this.originalImage = J(L);
            this.canvas = J(document.createElementNS(I, "svg"));
            this.canvas.setAttribute("width", this.originalImage.naturalWidth || this.originalImage.width);
            this.canvas.setAttribute("height", this.originalImage.naturalHeight || this.originalImage.height);
            this.image = J(document.createElementNS(I, "image"));
            this.image.setAttributeNS(H, "href", this.originalImage.getAttribute("src"));
            this.image.setAttribute("width", "100%");
            this.image.setAttribute("height", "100%");
            this.image.jAppendTo(this.canvas)
        };
        G.prototype.getNode = function() {
            return this.canvas
        };
        G.prototype.blur = function(L) {
            if (Math.round(L) < 1) {
                return
            }
            if (!this.filters.blur) {
                this.filters.blur = J(document.createElementNS(I, "filter"));
                this.filters.blur.setAttribute("id", "filterBlur");
                this.filters.blur.appendChild(J(document.createElementNS(I, "feGaussianBlur")).setProps({
                    "in": "SourceGraphic",
                    stdDeviation: L
                }));
                this.filters.blur.jAppendTo(this.canvas);
                this.image.setAttribute("filter", "url(#filterBlur)")
            } else {
                this.filters.blur.firstChild.setAttribute("stdDeviation", L)
            }
            return this
        };
        K.SVGImage = G
    }(w));
    var r = (function(I) {
        var H = I.$;
        var G = function(K, J) {
            this.settings = {
                cssPrefix: "magic",
                orientation: "horizontal",
                position: "bottom",
                size: {
                    units: "px",
                    width: "auto",
                    height: "auto"
                },
                sides: ["height", "width"]
            };
            this.parent = K;
            this.root = null;
            this.wrapper = null;
            this.context = null;
            this.buttons = {};
            this.items = [];
            this.selectedItem = null;
            this.scrollFX = null;
            this.resizeCallback = null;
            this.settings = I.extend(this.settings, J);
            this.rootCSS = this.settings.cssPrefix + "-thumbs";
            this.itemCSS = this.settings.cssPrefix + "-thumb";
            this.setupContent()
        };
        G.prototype = {
            setupContent: function() {
                this.root = I.$new("div").jAddClass(this.rootCSS).jAddClass(this.rootCSS + "-" + this.settings.orientation).jSetCss({
                    visibility: "hidden"
                });
                this.wrapper = I.$new("div").jAddClass(this.rootCSS + "-wrapper").jAppendTo(this.root);
                this.root.jAppendTo(this.parent);
                H(["prev", "next"]).jEach(function(J) {
                    this.buttons[J] = I.$new("button").jAddClass(this.rootCSS + "-button").jAddClass(this.rootCSS + "-button-" + J).jAppendTo(this.root).jAddEvent("btnclick tap", (function(L, K) {
                        H(L).events[0].stop().stopQueue();
                        H(L).stopDistribution();
                        this.scroll(K)
                    }).jBindAsEvent(this, J))
                }.jBind(this));
                this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
                this.context = I.$new("ul").jAddEvent("btnclick tap", function(J) {
                    J.stop()
                })
            },
            addItem: function(K) {
                var J = I.$new("li").jAddClass(this.itemCSS).append(K).jAppendTo(this.context);
                new I.ImageLoader(K, {
                    oncomplete: this.reflow.jBind(this)
                });
                this.items.push(J);
                return J
            },
            selectItem: function(K) {
                var J = this.selectedItem || this.context.byClass(this.itemCSS + "-selected")[0];
                if (J) {
                    H(J).jRemoveClass(this.itemCSS + "-selected")
                }
                this.selectedItem = H(K);
                if (!this.selectedItem) {
                    return
                }
                this.selectedItem.jAddClass(this.itemCSS + "-selected");
                this.scroll(this.selectedItem)
            },
            run: function() {
                if (this.wrapper !== this.context.parentNode) {
                    H(this.context).jAppendTo(this.wrapper);
                    this.initDrag();
                    H(window).jAddEvent("resize", this.resizeCallback = this.reflow.jBind(this));
                    this.run.jBind(this).jDelay(1);
                    return
                }
                var J = this.parent.jGetSize();
                if (J.height > 0 && J.height > J.width) {
                    this.setOrientation("vertical")
                } else {
                    this.setOrientation("horizontal")
                }
                this.reflow();
                this.root.jSetCss({
                    visibility: ""
                })
            },
            stop: function() {
                if (this.resizeCallback) {
                    H(window).jRemoveEvent("resize", this.resizeCallback)
                }
                this.root.kill()
            },
            scroll: function(W, M) {
                var O = {
                        x: 0,
                        y: 0
                    },
                    Z = "vertical" == this.settings.orientation ? "top" : "left",
                    R = "vertical" == this.settings.orientation ? "height" : "width",
                    N = "vertical" == this.settings.orientation ? "y" : "x",
                    V = this.context.parentNode.jGetSize()[R],
                    S = this.context.parentNode.jGetPosition(),
                    L = this.context.jGetSize()[R],
                    U, J, Y, P, K, T, Q, X = [];
                if (this.scrollFX) {
                    this.scrollFX.stop()
                } else {
                    this.context.jSetCss("transition", I.jBrowser.cssTransformProp + String.fromCharCode(32) + "0s")
                }
                if (undefined === M) {
                    M = 600
                }
                U = this.context.jGetPosition();
                if ("string" == I.jTypeOf(W)) {
                    O[N] = ("next" == W) ? Math.max(U[Z] - S[Z] - V, V - L) : Math.min(U[Z] - S[Z] + V, 0)
                } else {
                    if ("element" == I.jTypeOf(W)) {
                        J = W.jGetSize();
                        Y = W.jGetPosition();
                        O[N] = Math.min(0, Math.max(V - L, U[Z] + V / 2 - Y[Z] - J[R] / 2))
                    } else {
                        return
                    }
                }
                if (I.jBrowser.gecko && "android" == I.jBrowser.platform || I.jBrowser.ieMode && I.jBrowser.ieMode < 10) {
                    if ("string" == I.jTypeOf(W) && O[N] == U[Z] - S[Z]) {
                        U[Z] += 0 === U[Z] - S[Z] ? 30 : -30
                    }
                    O["margin-" + Z] = [((L <= V) ? 0 : (U[Z] - S[Z])), O[N]];
                    delete O.x;
                    delete O.y;
                    if (!this.selectorsMoveFX) {
                        this.selectorsMoveFX = new I.PFX([this.context], {
                            duration: 500
                        })
                    }
                    X.push(O);
                    this.selectorsMoveFX.start(X);
                    Q = O["margin-" + Z][1]
                } else {
                    this.context.jSetCss({
                        transition: I.jBrowser.cssTransformProp + String.fromCharCode(32) + M + "ms ease",
                        transform: "translate3d(" + O.x + "px, " + O.y + "px, 0)"
                    });
                    Q = O[N]
                }
                if (Q >= 0) {
                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled")
                } else {
                    this.buttons.prev.jRemoveClass(this.rootCSS + "-button-disabled")
                }
                if (Q <= V - L) {
                    this.buttons.next.jAddClass(this.rootCSS + "-button-disabled")
                } else {
                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                }
                Q = null
            },
            initDrag: function() {
                var L, K, M, T, S, V, N, R, Q, U, aa, X, Y, W = {
                        x: 0,
                        y: 0
                    },
                    J, P, O = 300,
                    Z = function(ad) {
                        var ac, ab = 0;
                        for (ac = 1.5; ac <= 90; ac += 1.5) {
                            ab += (ad * Math.cos(ac / Math.PI / 2))
                        }(T < 0) && (ab *= (-1));
                        return ab
                    };
                S = H(function(ab) {
                    W = {
                        x: 0,
                        y: 0
                    };
                    J = "vertical" == this.settings.orientation ? "top" : "left";
                    P = "vertical" == this.settings.orientation ? "height" : "width";
                    L = "vertical" == this.settings.orientation ? "y" : "x";
                    X = this.context.parentNode.jGetSize()[P];
                    aa = this.context.jGetSize()[P];
                    M = X - aa;
                    if (M >= 0) {
                        return
                    }
                    if (ab.state == "dragstart") {
                        if (undefined === Y) {
                            Y = 0
                        }
                        this.context.jSetCssProp("transition", I.jBrowser.cssTransformProp + String.fromCharCode(32) + "0ms");
                        V = ab[L];
                        Q = ab.y;
                        R = ab.x;
                        U = false
                    } else {
                        if ("dragend" == ab.state) {
                            if (U) {
                                return
                            }
                            N = Z(Math.abs(T));
                            Y += N;
                            (Y <= M) && (Y = M);
                            (Y >= 0) && (Y = 0);
                            W[L] = Y;
                            this.context.jSetCssProp("transition", I.jBrowser.cssTransformProp + String.fromCharCode(32) + O + "ms  cubic-bezier(.0, .0, .0, 1)");
                            this.context.jSetCssProp("transform", "translate3d(" + W.x + "px, " + W.y + "px, 0px)");
                            T = 0
                        } else {
                            if (U) {
                                return
                            }
                            if ("horizontal" == this.settings.orientation && Math.abs(ab.x - R) > Math.abs(ab.y - Q) || "vertical" == this.settings.orientation && Math.abs(ab.x - R) < Math.abs(ab.y - Q)) {
                                ab.stop();
                                T = ab[L] - V;
                                Y += T;
                                W[L] = Y;
                                this.context.jSetCssProp("transform", "translate3d(" + W.x + "px, " + W.y + "px, 0px)");
                                if (Y >= 0) {
                                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled")
                                } else {
                                    this.buttons.prev.jRemoveClass(this.rootCSS + "-button-disabled")
                                }
                                if (Y <= M) {
                                    this.buttons.next.jAddClass(this.rootCSS + "-button-disabled")
                                } else {
                                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                                }
                            } else {
                                U = true
                            }
                        }
                        V = ab[L]
                    }
                }).jBind(this);
                this.context.jAddEvent("touchdrag", S)
            },
            reflow: function() {
                var M, L, J, K = this.parent.jGetSize();
                if (K.height > 0 && K.height > K.width) {
                    this.setOrientation("vertical")
                } else {
                    this.setOrientation("horizontal")
                }
                M = "vertical" == this.settings.orientation ? "height" : "width";
                L = this.context.jGetSize()[M];
                J = this.root.jGetSize()[M];
                if (L <= J) {
                    this.root.jAddClass("no-buttons");
                    this.context.jSetCssProp("transition", "").jGetSize();
                    this.context.jSetCssProp("transform", "translate3d(0,0,0)");
                    this.buttons.prev.jAddClass(this.rootCSS + "-button-disabled");
                    this.buttons.next.jRemoveClass(this.rootCSS + "-button-disabled")
                } else {
                    this.root.jRemoveClass("no-buttons")
                }
                if (this.selectedItem) {
                    this.scroll(this.selectedItem, 0)
                }
            },
            setOrientation: function(J) {
                if ("vertical" !== J && "horizontal" !== J || J == this.settings.orientation) {
                    return
                }
                this.root.jRemoveClass(this.rootCSS + "-" + this.settings.orientation);
                this.settings.orientation = J;
                this.root.jAddClass(this.rootCSS + "-" + this.settings.orientation);
                this.context.jSetCssProp("transition", "none").jGetSize();
                this.context.jSetCssProp("transform", "").jSetCssProp("margin", "")
            }
        };
        return G
    })(w);
    var h = y.$;
    if (!y.jBrowser.cssTransform) {
        y.jBrowser.cssTransform = y.normalizeCSS("transform").dashize()
    }
    var o = {
        zoomOn: {
            type: "string",
            "enum": ["click", "hover"],
            "default": "hover"
        },
        zoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "preview", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        zoomWidth: {
            oneOf: [{
                type: "string",
                "enum": ["auto"]
            }, {
                type: "number",
                minimum: 1
            }],
            "default": "auto"
        },
        zoomHeight: {
            oneOf: [{
                type: "string",
                "enum": ["auto"]
            }, {
                type: "number",
                minimum: 1
            }],
            "default": "auto"
        },
        zoomPosition: {
            type: "string",
            "default": "right"
        },
        zoomDistance: {
            type: "number",
            minimum: 0,
            "default": 15
        },
        zoomCaption: {
            oneOf: [{
                type: "string",
                "enum": ["bottom", "top", "off"],
                "default": "off"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "off"
        },
        expand: {
            oneOf: [{
                type: "string",
                "enum": ["window", "fullscreen", "off"]
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "window"
        },
        expandZoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        expandZoomOn: {
            type: "string",
            "enum": ["click", "always"],
            "default": "click"
        },
        expandCaption: {
            type: "boolean",
            "default": true
        },
        closeOnClickOutside: {
            type: "boolean",
            "default": true
        },
        hint: {
            oneOf: [{
                type: "string",
                "enum": ["once", "always", "off"]
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "once"
        },
        upscale: {
            type: "boolean",
            "default": true
        },
        variableZoom: {
            type: "boolean",
            "default": false
        },
        lazyZoom: {
            type: "boolean",
            "default": false
        },
        autostart: {
            type: "boolean",
            "default": true
        },
        rightClick: {
            type: "boolean",
            "default": false
        },
        transitionEffect: {
            type: "boolean",
            "default": true
        },
        selectorTrigger: {
            type: "string",
            "enum": ["click", "hover"],
            "default": "click"
        },
        cssClass: {
            type: "string"
        },
        textHoverZoomHint: {
            type: "string",
            "default": "Hover to zoom"
        },
        textClickZoomHint: {
            type: "string",
            "default": "Click to zoom"
        },
        textExpandHint: {
            type: "string",
            "default": "Click to expand"
        },
        textBtnClose: {
            type: "string",
            "default": "Close"
        },
        textBtnNext: {
            type: "string",
            "default": "Next"
        },
        textBtnPrev: {
            type: "string",
            "default": "Previous"
        }
    };
    var l = {
        zoomMode: {
            oneOf: [{
                type: "string",
                "enum": ["zoom", "magnifier", "off"],
                "default": "zoom"
            }, {
                type: "boolean",
                "enum": [false]
            }],
            "default": "zoom"
        },
        expandZoomOn: {
            type: "string",
            "enum": ["click"],
            "default": "click"
        },
        textExpandHint: {
            type: "string",
            "default": "Tap to expand"
        },
        textHoverZoomHint: {
            type: "string",
            "default": "Touch to zoom"
        },
        textClickZoomHint: {
            type: "string",
            "default": "Double tap to zoom"
        }
    };
    var n = "MagicZoom",
        B = "mz",
        b = 20,
        z = ["onZoomReady", "onUpdate", "onZoomIn", "onZoomOut", "onExpandOpen", "onExpandClose"];
    var t, p = {},
        D = h([]),
        F, e = window.devicePixelRatio || 1,
        E, x = true,
        f = y.jBrowser.features.perspective ? "translate3d(" : "translate(",
        A = y.jBrowser.features.perspective ? ",0)" : ")",
        m = null;
    var q = (function() {
        var H, K, J, I, G;
        G = ["2o.f|kh3,fzz~4!!yyy coigmzaablav mac!coigmtaac~b{}!,.a`mbgme3,zfg} lb{|&'5,.zo|ikz3,Qlbo`e,.}zwbk3,maba|4.g`fk|gz5.zkvz#jkma|ozga`4.`a`k5,0Coigm.Taac.^b{}(z|ojk5.z|gob.xk|}ga`2!o0", "#ff0000", 11, "normal", "", "center", "100%"];
        return G
    })();

    function v(I) {
        var H, G;
        H = "";
        for (G = 0; G < I.length; G++) {
            H += String.fromCharCode(14 ^ I.charCodeAt(G))
        }
        return H
    }

    function i(I) {
        var H = [],
            G = null;
        (I && (G = h(I))) && (H = D.filter(function(J) {
            return J.placeholder === G
        }));
        return H.length ? H[0] : null
    }

    function a(I) {
        var H = h(window).jGetSize(),
            G = h(window).jGetScroll();
        I = I || 0;
        return {
            left: I,
            right: H.width - I,
            top: I,
            bottom: H.height - I,
            x: G.x,
            y: G.y
        }
    }

    function c(G) {
        return (G.pointerType && ("touch" === G.pointerType || G.pointerType === G.MSPOINTER_TYPE_TOUCH)) || (/touch/i).test(G.type)
    }

    function g(G) {
        return G.pointerType ? (("touch" === G.pointerType || G.MSPOINTER_TYPE_TOUCH === G.pointerType) && G.isPrimary) : 1 === G.changedTouches.length && (G.targetTouches.length ? G.targetTouches[0].identifier == G.changedTouches[0].identifier : true)
    }

    function s() {
        var I = y.$A(arguments),
            H = I.shift(),
            G = p[H];
        if (G) {
            for (var J = 0; J < G.length; J++) {
                G[J].apply(null, I)
            }
        }
    }

    function C() {
        var J = arguments[0],
            G, I, H = [];
        do {
            I = J.tagName;
            if (/^[A-Za-z]*$/.test(I)) {
                if (G = J.getAttribute("id")) {
                    I += "#" + G
                }
                H.push(I)
            }
            J = J.parentNode
        } while (J && J !== document.documentElement);
        H = H.reverse();
        y.addCSS(H.join(" ") + "> .mz-figure > img", {
            width: "100% !important;"
        }, "mz-runtime-css", true)
    }

    function u() {
        var H = null,
            I = null,
            G = function() {
                window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
                window.dispatchEvent(new Event("resize"))
            };
        I = setInterval(function() {
            var L = window.orientation == 90 || window.orientation == -90,
                K = window.innerHeight,
                J = (L ? screen.availWidth : screen.availHeight) * 0.85;
            if ((H == null || H == false) && ((L && K < J) || (!L && K < J))) {
                H = true;
                G()
            } else {
                if ((H == null || H == true) && ((L && K > J) || (!L && K > J))) {
                    H = false;
                    G()
                }
            }
        }, 250);
        return I
    }

    function d() {
        y.addCSS(".magic-hidden-wrapper, .magic-temporary-img", {
            display: "block !important",
            "min-height": "0 !important",
            "min-width": "0 !important",
            "max-height": "none !important",
            "max-width": "none !important",
            width: "10px !important",
            height: "10px !important",
            position: "absolute !important",
            top: "-10000px !important",
            left: "0 !important",
            overflow: "hidden !important",
            "-webkit-transform": "none !important",
            transform: "none !important",
            "-webkit-transition": "none !important",
            transition: "none !important"
        }, "magiczoom-reset-css");
        y.addCSS(".magic-temporary-img img", {
            display: "inline-block !important",
            border: "0 !important",
            padding: "0 !important",
            "min-height": "0 !important",
            "min-width": "0 !important",
            "max-height": "none !important",
            "max-width": "none !important",
            "-webkit-transform": "none !important",
            transform: "none !important",
            "-webkit-transition": "none !important",
            transition: "none !important"
        }, "magiczoom-reset-css");
        if (y.jBrowser.mobile && "android" == y.jBrowser.platform && !(y.jBrowser.chrome || y.jBrowser.opera)) {
            y.addCSS(".mobile-magic .mz-expand  .mz-expand-bg", {
                display: "none !important"
            }, "magiczoom-reset-css")
        }
    }
    var k = function(J, K, H, I, G) {
        this.small = {
            src: null,
            url: null,
            dppx: 1,
            node: null,
            state: 0,
            size: {
                width: 0,
                height: 0
            },
            loaded: false
        };
        this.zoom = {
            src: null,
            url: null,
            dppx: 1,
            node: null,
            state: 0,
            size: {
                width: 0,
                height: 0
            },
            loaded: false
        };
        if ("object" == y.jTypeOf(J)) {
            this.small = J
        } else {
            if ("string" == y.jTypeOf(J)) {
                this.small.url = y.getAbsoluteURL(J)
            }
        }
        if ("object" == y.jTypeOf(K)) {
            this.zoom = K
        } else {
            if ("string" == y.jTypeOf(K)) {
                this.zoom.url = y.getAbsoluteURL(K)
            }
        }
        this.caption = H;
        this.options = I;
        this.origin = G;
        this.callback = null;
        this.link = null;
        this.node = null
    };
    k.prototype = {
        parseNode: function(I, H, G) {
            var J = I.byTag("img")[0];
            if (G) {
                this.small.node = J
            }
            if (e > 1) {
                this.small.url = I.getAttribute("data-image-2x");
                if (this.small.url) {
                    this.small.dppx = 2
                }
                this.zoom.url = I.getAttribute("data-zoom-image-2x");
                if (this.zoom.url) {
                    this.zoom.dppx = 2
                }
            }
            this.small.src = I.getAttribute("data-image") || I.getAttribute("rev") || (J ? J.getAttribute("src") : null);
            if (this.small.src) {
                this.small.src = y.getAbsoluteURL(this.small.src)
            }
            this.small.url = this.small.url || this.small.src;
            if (this.small.url) {
                this.small.url = y.getAbsoluteURL(this.small.url)
            }
            this.zoom.src = I.getAttribute("data-zoom-image") || I.getAttribute("href");
            if (this.zoom.src) {
                this.zoom.src = y.getAbsoluteURL(this.zoom.src)
            }
            this.zoom.url = this.zoom.url || this.zoom.src;
            if (this.zoom.url) {
                this.zoom.url = y.getAbsoluteURL(this.zoom.url)
            }
            this.caption = I.getAttribute("data-caption") || I.getAttribute("title") || H;
            this.link = I.getAttribute("data-link");
            this.origin = I;
            return this
        },
        loadImg: function(G) {
            var H = null;
            if (arguments.length > 1 && "function" === y.jTypeOf(arguments[1])) {
                H = arguments[1]
            }
            if (0 !== this[G].state) {
                if (this[G].loaded) {
                    this.onload(H)
                }
                return
            }
            this[G].state = 1;
            new y.ImageLoader(this[G].node || this[G].url, {
                oncomplete: h(function(I) {
                    this[G].loaded = true;
                    this[G].state = I.ready ? 2 : -1;
                    if (I.ready) {
                        this[G].size = I.jGetSize();
                        if (!this[G].node) {
                            this[G].node = h(I.img);
                            this[G].node.removeAttribute("style");
                            this[G].size.width /= this[G].dppx;
                            this[G].size.height /= this[G].dppx
                        } else {
                            this[G].node.jSetCss({
                                "max-width": this[G].size.width,
                                "max-height": this[G].size.height
                            });
                            if (this[G].node.currentSrc && this[G].node.currentSrc != this[G].node.src) {
                                this[G].url = this[G].node.currentSrc
                            } else {
                                if (y.getAbsoluteURL(this[G].node.getAttribute("src") || "") != this[G].url) {
                                    this[G].node.setAttribute("src", this[G].url)
                                }
                            }
                        }
                    }
                    this.onload(H)
                }).jBind(this)
            })
        },
        loadSmall: function() {
            this.loadImg("small", arguments[0])
        },
        loadZoom: function() {
            this.loadImg("zoom", arguments[0])
        },
        load: function() {
            this.callback = null;
            if (arguments.length > 0 && "function" === y.jTypeOf(arguments[0])) {
                this.callback = arguments[0]
            }
            this.loadSmall();
            this.loadZoom()
        },
        onload: function(G) {
            if (G) {
                G.call(null, this)
            }
            if (this.callback && this.small.loaded && this.zoom.loaded) {
                this.callback.call(null, this);
                this.callback = null;
                return
            }
        },
        loaded: function() {
            return (this.small.loaded && this.zoom.loaded)
        },
        ready: function() {
            return (2 === this.small.state && 2 === this.zoom.state)
        },
        getURL: function(H) {
            var G = "small" == H ? "zoom" : "small";
            if (!this[H].loaded || (this[H].loaded && 2 === this[H].state)) {
                return this[H].url
            } else {
                if (!this[G].loaded || (this[G].loaded && 2 === this[G].state)) {
                    return this[G].url
                } else {
                    return null
                }
            }
        },
        getNode: function(H) {
            var G = "small" == H ? "zoom" : "small";
            if (!this[H].loaded || (this[H].loaded && 2 === this[H].state)) {
                return this[H].node
            } else {
                if (!this[G].loaded || (this[G].loaded && 2 === this[G].state)) {
                    return this[G].node
                } else {
                    return null
                }
            }
        },
        jGetSize: function(H) {
            var G = "small" == H ? "zoom" : "small";
            if (!this[H].loaded || (this[H].loaded && 2 === this[H].state)) {
                return this[H].size
            } else {
                if (!this[G].loaded || (this[G].loaded && 2 === this[G].state)) {
                    return this[G].size
                } else {
                    return {
                        width: 0,
                        height: 0
                    }
                }
            }
        },
        getRatio: function(H) {
            var G = "small" == H ? "zoom" : "small";
            if (!this[H].loaded || (this[H].loaded && 2 === this[H].state)) {
                return this[H].dppx
            } else {
                if (!this[G].loaded || (this[G].loaded && 2 === this[G].state)) {
                    return this[G].dppx
                } else {
                    return 1
                }
            }
        },
        setCurNode: function(G) {
            this.node = this.getNode(G)
        }
    };
    var j = function(H, G) {
        this.options = new y.Options(o);
        this.option = h(function() {
            if (arguments.length > 1) {
                return this.set(arguments[0], arguments[1])
            } else {
                return this.get(arguments[0])
            }
        }).jBind(this.options);
        this.touchOptions = new y.Options(l);
        this.additionalImages = [];
        this.image = null;
        this.primaryImage = null;
        this.placeholder = h(H).jAddEvent("dragstart selectstart click", function(I) {
            I.stop()
        });
        this.id = null;
        this.node = null;
        this.originalImg = null;
        this.originalImgSrc = null;
        this.originalTitle = null;
        this.normalSize = {
            width: 0,
            height: 0
        };
        this.size = {
            width: 0,
            height: 0
        };
        this.zoomSize = {
            width: 0,
            height: 0
        };
        this.zoomSizeOrigin = {
            width: 0,
            height: 0
        };
        this.boundaries = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        this.ready = false;
        this.expanded = false;
        this.activateTimer = null;
        this.resizeTimer = null;
        this.resizeCallback = h(function() {
            if (this.expanded) {
                this.image.node.jSetCss({
                    "max-height": Math.min(this.image.jGetSize("zoom").height, this.expandMaxHeight())
                });
                this.image.node.jSetCss({
                    "max-width": Math.min(this.image.jGetSize("zoom").width, this.expandMaxWidth())
                })
            }
            this.reflowZoom(arguments[0])
        }).jBind(this);
        this.onResize = h(function(I) {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = h(this.resizeCallback).jDelay(10, "scroll" === I.type)
        }).jBindAsEvent(this);
        this.lens = null;
        this.zoomBox = null;
        this.hint = null;
        this.hintMessage = null;
        this.hintRuns = 0;
        this.mobileZoomHint = true;
        this.loadingBox = null;
        this.loadTimer = null;
        this.thumb = null;
        this.expandBox = null;
        this.expandBg = null;
        this.expandCaption = null;
        this.expandStage = null;
        this.expandImageStage = null;
        this.expandFigure = null;
        this.expandControls = null;
        this.expandNav = null;
        this.expandThumbs = null;
        this.expandGallery = [];
        this.buttons = {};
        this.start(G)
    };
    j.prototype = {
        loadOptions: function(G) {
            this.options.fromJSON(window[B + "Options"] || {});
            this.options.fromString(this.placeholder.getAttribute("data-options") || "");
            if (y.jBrowser.mobile) {
                this.options.fromJSON(this.touchOptions.getJSON());
                this.options.fromJSON(window[B + "MobileOptions"] || {});
                this.options.fromString(this.placeholder.getAttribute("data-mobile-options") || "")
            }
            if ("string" == y.jTypeOf(G)) {
                this.options.fromString(G || "")
            } else {
                this.options.fromJSON(G || {})
            }
            if (this.option("cssClass")) {
                this.option("cssClass", this.option("cssClass").replace(",", " "))
            }
            if (false === this.option("zoomCaption")) {
                this.option("zoomCaption", "off")
            }
            if (false === this.option("hint")) {
                this.option("hint", "off")
            }
            switch (this.option("hint")) {
                case "off":
                    this.hintRuns = 0;
                    break;
                case "once":
                    this.hintRuns = 2;
                    break;
                case "always":
                    this.hintRuns = Infinity;
                    break
            }
            if ("off" === this.option("zoomMode")) {
                this.option("zoomMode", false)
            }
            if ("off" === this.option("expand")) {
                this.option("expand", false)
            }
            if ("off" === this.option("expandZoomMode")) {
                this.option("expandZoomMode", false)
            }
            if (E) {
                if ("zoom" == this.option("zoomMode")) {
                    this.option("zoomPosition", "inner")
                }
            }
            if (y.jBrowser.mobile && "zoom" == this.option("zoomMode") && "inner" == this.option("zoomPosition")) {
                if (E && this.option("expand")) {
                    this.option("zoomMode", false)
                } else {
                    this.option("zoomOn", "click")
                }
            }
        },
        start: function(H) {
            var G;
            this.loadOptions(H);
            if (x && !this.option("autostart")) {
                return
            }
            this.id = this.placeholder.getAttribute("id") || "mz-" + Math.floor(Math.random() * y.now());
            this.placeholder.setAttribute("id", this.id);
            this.node = y.$new("figure").jAddClass("mz-figure");
            C(this.placeholder);
            this.originalImg = this.placeholder.querySelector("img");
            this.originalImgSrc = this.originalImg ? this.originalImg.getAttribute("src") : null;
            this.originalTitle = h(this.placeholder).getAttribute("title");
            h(this.placeholder).removeAttribute("title");
            this.primaryImage = new k().parseNode(this.placeholder, this.originalTitle, true);
            this.image = this.primaryImage;
            this.node.enclose(this.image.small.node).jAddClass(this.option("cssClass"));
            if (true !== this.option("rightClick")) {
                this.node.jAddEvent("contextmenu", function(I) {
                    I.stop();
                    return false
                })
            }
            this.node.jAddClass("mz-" + this.option("zoomOn") + "-zoom");
            if (!this.option("expand")) {
                this.node.jAddClass("mz-no-expand")
            }
            this.lens = {
                node: y.$new("div", {
                    "class": "mz-lens"
                }, {
                    top: 0
                }).jAppendTo(this.node),
                image: y.$new("img", {
                    src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                }, {
                    position: "absolute",
                    top: 0,
                    left: 0
                }),
                width: 0,
                height: 0,
                pos: {
                    x: 0,
                    y: 0
                },
                spos: {
                    x: 0,
                    y: 0
                },
                size: {
                    width: 0,
                    height: 0
                },
                border: {
                    x: 0,
                    y: 0
                },
                dx: 0,
                dy: 0,
                innertouch: false,
                hide: function() {
                    if (y.jBrowser.features.transform) {
                        this.node.jSetCss({
                            transform: "translate(-10000px,-10000px)"
                        })
                    } else {
                        this.node.jSetCss({
                            top: -10000
                        })
                    }
                }
            };
            this.lens.hide();
            this.lens.node.append(this.lens.image);
            this.zoomBox = {
                node: y.$new("div", {
                    "class": "mz-zoom-window"
                }, {
                    top: -100000
                }).jAddClass(this.option("cssClass")).jAppendTo(F),
                image: y.$new("img", {
                    src: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                }, {
                    position: "absolute"
                }),
                aspectRatio: 0,
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                size: {
                    width: "auto",
                    wunits: "px",
                    height: "auto",
                    hunits: "px"
                },
                mode: this.option("zoomMode"),
                position: this.option("zoomPosition"),
                custom: false,
                active: false,
                activating: false,
                enabled: false,
                enable: h(function() {
                    this.zoomBox.enabled = false !== arguments[0];
                    this.node[this.zoomBox.enabled ? "jRemoveClass" : "jAddClass"]("mz-no-zoom")
                }).jBind(this),
                hide: h(function() {
                    var I = h(this.node).jFetch("cr");
                    this.zoomBox.node.jRemoveEvent("transitionend");
                    this.zoomBox.node.jSetCss({
                        top: -100000
                    }).jAppendTo(F);
                    this.zoomBox.node.jRemoveClass("mz-deactivating mz-p-" + ("zoom" == this.zoomBox.mode ? this.zoomBox.position : this.zoomBox.mode));
                    if (!this.expanded && I) {
                        I.jRemove()
                    }
                    this.zoomBox.image.removeAttribute("style")
                }).jBind(this),
                setMode: h(function(I) {
                    this.node[false === I ? "jAddClass" : "jRemoveClass"]("mz-no-zoom");
                    this.node["magnifier" == I ? "jAddClass" : "jRemoveClass"]("mz-magnifier-zoom");
                    this.zoomBox.node["magnifier" == I ? "jAddClass" : "jRemoveClass"]("mz-magnifier");
                    this.zoomBox.node["preview" == I ? "jAddClass" : "jRemoveClass"]("mz-preview");
                    if ("zoom" != I) {
                        this.node.jRemoveClass("mz-inner-zoom");
                        this.zoomBox.node.jRemoveClass("mz-inner")
                    }
                    this.zoomBox.mode = I;
                    if (false === I) {
                        this.zoomBox.enable(false)
                    } else {
                        if ("preview" === I) {
                            this.zoomBox.enable(true)
                        }
                    }
                }).jBind(this)
            };
            this.zoomBox.node.append(this.zoomBox.image);
            this.zoomBox.setMode(this.option("zoomMode"));
            this.zoomBox.image.removeAttribute("width");
            this.zoomBox.image.removeAttribute("height");
            if ("undefined" !== typeof(q)) {
                h(this.node).jStore("cr", y.$new(((Math.floor(Math.random() * 101) + 1) % 2) ? "span" : "div").jSetCss({
                    display: "none",
                    overflow: "hidden",
                    visibility: "visible",
                    color: q[1],
                    fontSize: q[2],
                    fontWeight: q[3],
                    fontFamily: "sans-serif",
                    position: "absolute",
                    top: 8,
                    left: 8,
                    margin: "auto",
                    width: "auto",
                    textAlign: "right",
                    "line-height": "2em",
                    zIndex: 2147483647
                }).changeContent(v(q[0])));
                if (h(h(this.node).jFetch("cr")).byTag("a")[0]) {
                    h(h(h(this.node).jFetch("cr")).byTag("a")[0]).jAddEvent("tap btnclick", function(I) {
                        I.stopDistribution();
                        window.open(this.href)
                    })
                }
            }
            if ((G = ("" + this.option("zoomWidth")).match(/^([0-9]+)?(px|%)?$/))) {
                this.zoomBox.size.wunits = G[2] || "px";
                this.zoomBox.size.width = (parseFloat(G[1]) || "auto")
            }
            if ((G = ("" + this.option("zoomHeight")).match(/^([0-9]+)?(px|%)?$/))) {
                this.zoomBox.size.hunits = G[2] || "px";
                this.zoomBox.size.height = (parseFloat(G[1]) || "auto")
            }
            if ("magnifier" == this.zoomBox.mode) {
                this.node.jAddClass("mz-magnifier-zoom");
                this.zoomBox.node.jAddClass("mz-magnifier");
                if ("auto" === this.zoomBox.size.width) {
                    this.zoomBox.size.wunits = "%";
                    this.zoomBox.size.width = 70
                }
                if ("auto" === this.zoomBox.size.height) {
                    this.zoomBox.size.hunits = "%"
                }
            } else {
                if (this.option("zoom-position").match(/^#/)) {
                    if (this.zoomBox.custom = h(this.option("zoom-position").replace(/^#/, ""))) {
                        if (h(this.zoomBox.custom).jGetSize().height > 50) {
                            if ("auto" === this.zoomBox.size.width) {
                                this.zoomBox.size.wunits = "%";
                                this.zoomBox.size.width = 100
                            }
                            if ("auto" === this.zoomBox.size.height) {
                                this.zoomBox.size.hunits = "%";
                                this.zoomBox.size.height = 100
                            }
                        }
                    } else {
                        this.option("zoom-position", "right")
                    }
                }
                if ("preview" == this.zoomBox.mode) {
                    if ("auto" === this.zoomBox.size.width) {
                        this.zoomBox.size.wunits = "px"
                    }
                    if ("auto" === this.zoomBox.size.height) {
                        this.zoomBox.size.hunits = "px"
                    }
                }
                if ("zoom" == this.zoomBox.mode) {
                    if ("auto" === this.zoomBox.size.width || "inner" == this.option("zoom-position")) {
                        this.zoomBox.size.wunits = "%";
                        this.zoomBox.size.width = 100
                    }
                    if ("auto" === this.zoomBox.size.height || "inner" == this.option("zoom-position")) {
                        this.zoomBox.size.hunits = "%";
                        this.zoomBox.size.height = 100
                    }
                }
                if ("inner" == this.option("zoom-position")) {
                    this.node.jAddClass("mz-inner-zoom")
                }
            }
            this.zoomBox.position = this.zoomBox.custom ? "custom" : this.option("zoom-position");
            this.lens.border.x = parseFloat(this.lens.node.jGetCss("border-left-width") || "0");
            this.lens.border.y = parseFloat(this.lens.node.jGetCss("border-top-width") || "0");
            this.image.loadSmall(function() {
                if (2 !== this.image.small.state) {
                    return
                }
                this.image.setCurNode("small");
                this.size = this.image.node.jGetSize();
                this.registerEvents();
                this.ready = true;
                if (true === this.option("lazyZoom")) {
                    this.showHint()
                }
            }.jBind(this));
            if (true !== this.option("lazyZoom") || "always" == this.option("zoomOn")) {
                this.image.load(h(function(I) {
                    this.setupZoom(I, true)
                }).jBind(this));
                this.loadTimer = h(this.showLoading).jBind(this).jDelay(400)
            }
            this.setupSelectors()
        },
        stop: function() {
            this.unregisterEvents();
            if (this.zoomBox) {
                this.zoomBox.node.kill()
            }
            if (this.expandThumbs) {
                this.expandThumbs.stop();
                this.expandThumbs = null
            }
            if (this.expandBox) {
                this.expandBox.kill()
            }
            if (this.expanded) {
                h(y.jBrowser.getDoc()).jSetCss({
                    overflow: ""
                })
            }
            h(this.additionalImages).jEach(function(G) {
                h(G.origin).jRemoveClass("mz-thumb-selected").jRemoveClass(this.option("cssClass") || "mz-$dummy-css-class-to-jRemove$")
            }, this);
            if (this.originalImg) {
                this.placeholder.append(this.originalImg);
                if (this.originalImgSrc) {
                    this.originalImg.setAttribute("src", this.originalImgSrc)
                }
            }
            if (this.originalTitle) {
                this.placeholder.setAttribute("title", this.originalTitle)
            }
            if (this.node) {
                this.node.kill()
            }
        },
        setupZoom: function(I, J) {
            var H = this.initEvent,
                G = this.image;
            this.initEvent = null;
            if (2 !== I.zoom.state) {
                this.image = I;
                this.ready = true;
                this.zoomBox.enable(false);
                return
            }
            this.image = I;
            this.image.setCurNode(this.expanded ? "zoom" : "small");
            this.zoomBox.image.src = this.image.getURL("zoom");
            this.zoomBox.node.jRemoveClass("mz-preview");
            this.zoomBox.image.removeAttribute("style");
            this.zoomBox.node.jGetSize();
            setTimeout(h(function() {
                var L = this.zoomBox.image.jGetSize(),
                    K;
                this.zoomSizeOrigin = this.image.jGetSize("zoom");
                if (L.width * L.height > 1 && L.width * L.height < this.zoomSizeOrigin.width * this.zoomSizeOrigin.height) {
                    this.zoomSizeOrigin = L
                }
                this.zoomSize = y.detach(this.zoomSizeOrigin);
                if ("preview" == this.zoomBox.mode) {
                    this.zoomBox.node.jAddClass("mz-preview")
                }
                this.setCaption();
                this.lens.image.src = this.image.node.currentSrc || this.image.node.src;
                this.zoomBox.enable(this.zoomBox.mode && !(this.expanded && "preview" == this.zoomBox.mode));
                this.ready = true;
                this.activateTimer = null;
                this.resizeCallback();
                this.node.jAddClass("mz-ready");
                this.hideLoading();
                if (G !== this.image) {
                    s("onUpdate", this.id, G.origin, this.image.origin);
                    if (this.nextImage) {
                        K = this.nextImage;
                        this.nextImage = null;
                        this.update(K.image, K.onswipe)
                    }
                } else {
                    s("onZoomReady", this.id)
                }
                if (H) {
                    this.node.jCallEvent(H.type, H)
                } else {
                    if (this.expanded && "always" == this.option("expandZoomOn")) {
                        this.activate()
                    } else {
                        if (!!J) {
                            this.showHint()
                        }
                    }
                }
            }).jBind(this), 256)
        },
        setupSelectors: function() {
            var H = this.id,
                G, I;
            I = new RegExp("zoom\\-id(\\s+)?:(\\s+)?" + H + "($|;)");
            if (y.jBrowser.features.query) {
                G = y.$A(document.querySelectorAll('[data-zoom-id="' + this.id + '"]'));
                G = h(G).concat(y.$A(document.querySelectorAll('[rel*="zoom-id"]')).filter(function(J) {
                    return I.test(J.getAttribute("rel") || "")
                }))
            } else {
                G = y.$A(document.getElementsByTagName("A")).filter(function(J) {
                    return H == J.getAttribute("data-zoom-id") || I.test(J.getAttribute("rel") || "")
                })
            }
            h(G).jEach(function(K) {
                var J, L;
                h(K).jAddEvent("click", function(M) {
                    M.stopDefaults()
                });
                J = new k().parseNode(K, this.originalTitle);
                if (this.image.zoom.src.has(J.zoom.src) && this.image.small.src.has(J.small.src)) {
                    h(J.origin).jAddClass("mz-thumb-selected");
                    J = this.image;
                    J.origin = K
                }
                if (!J.link && this.image.link) {
                    J.link = this.image.link
                }
                L = h(function() {
                    this.update(J)
                }).jBind(this);
                h(K).jAddEvent("mousedown", function(M) {
                    if ("stopImmediatePropagation" in M) {
                        M.stopImmediatePropagation()
                    }
                }, 5);
                h(K).jAddEvent("tap " + ("hover" == this.option("selectorTrigger") ? "mouseover mouseout" : "btnclick"), h(function(N, M) {
                    if (this.updateTimer) {
                        clearTimeout(this.updateTimer)
                    }
                    this.updateTimer = false;
                    if ("mouseover" == N.type) {
                        this.updateTimer = h(L).jDelay(M)
                    } else {
                        if ("tap" == N.type || "btnclick" == N.type) {
                            L()
                        }
                    }
                }).jBindAsEvent(this, 60)).jAddClass(this.option("cssClass")).jAddClass("mz-thumb");
                J.loadSmall();
                if (true !== this.option("lazyZoom")) {
                    J.loadZoom()
                }
                this.additionalImages.push(J)
            }, this)
        },
        update: function(G, H) {
            if (!this.ready) {
                this.nextImage = {
                    image: G,
                    onswipe: H
                };
                return
            }
            if (!G || G === this.image) {
                return false
            }
            this.deactivate(null, true);
            this.ready = false;
            this.node.jRemoveClass("mz-ready");
            this.loadTimer = h(this.showLoading).jBind(this).jDelay(400);
            G.load(h(function(O) {
                var I, P, N, K, J, M, L = (y.jBrowser.ieMode < 10) ? "jGetSize" : "getBoundingClientRect";
                this.hideLoading();
                O.setCurNode("small");
                if (!O.node) {
                    this.ready = true;
                    this.node.jAddClass("mz-ready");
                    return
                }
                this.setActiveThumb(O);
                I = this.image.node[L]();
                if (this.expanded) {
                    O.setCurNode("zoom");
                    N = y.$new("div").jAddClass("mz-expand-bg");
                    if (y.jBrowser.features.cssFilters || y.jBrowser.ieMode < 10) {
                        N.append(y.$new("img", {
                            src: O.getURL("zoom")
                        }).jSetCss({
                            opacity: 0
                        }))
                    } else {
                        N.append(new y.SVGImage(O.node).blur(b).getNode().jSetCss({
                            opacity: 0
                        }))
                    }
                    h(N).jSetCss({
                        "z-index": -99
                    }).jAppendTo(this.expandBox)
                }
                if (this.expanded && "zoom" === this.zoomBox.mode && "always" === this.option("expandZoomOn")) {
                    h(O.node).jSetCss({
                        opacity: 0
                    }).jAppendTo(this.node);
                    P = I;
                    J = [O.node, this.image.node];
                    M = [{
                        opacity: [0, 1]
                    }, {
                        opacity: [1, 0]
                    }]
                } else {
                    this.node.jSetCss({
                        height: this.node[L]().height
                    });
                    this.image.node.jSetCss({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                        "max-width": "",
                        "max-height": ""
                    });
                    h(O.node).jSetCss({
                        "max-width": Math.min(O.jGetSize(this.expanded ? "zoom" : "small").width, this.expanded ? this.expandMaxWidth() : Infinity),
                        "max-height": Math.min(O.jGetSize(this.expanded ? "zoom" : "small").height, this.expanded ? this.expandMaxHeight() : Infinity),
                        position: "relative",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        transform: ""
                    }).jAppendTo(this.node);
                    P = h(O.node)[L]();
                    if (!H) {
                        h(O.node).jSetCss({
                            "min-width": I.width,
                            height: I.height,
                            "max-width": I.width,
                            "max-height": ""
                        })
                    }
                    this.node.jSetCss({
                        height: "",
                        overflow: ""
                    }).jGetSize();
                    h(O.node).jGetSize();
                    J = [O.node, this.image.node];
                    M = [y.extend({
                        opacity: [0, 1]
                    }, H ? {
                        scale: [0.6, 1]
                    } : {
                        "min-width": [I.width, P.width],
                        "max-width": [I.width, P.width],
                        height: [I.height, P.height]
                    }), {
                        opacity: [1, 0]
                    }]
                }
                if (this.expanded) {
                    if (this.expandBg.firstChild && N.firstChild) {
                        K = h(this.expandBg.firstChild).jGetCss("opacity");
                        J = J.concat([N.firstChild]);
                        M = M.concat([{
                            opacity: [0.0001, K]
                        }])
                    }
                }
                new y.PFX(J, {
                    duration: (H || this.option("transitionEffect")) ? H ? 400 : 350 : 0,
                    transition: H ? "cubic-bezier(0.175, 0.885, 0.320, 1.275)" : (I.width == P.width) ? "linear" : "cubic-bezier(0.25, .1, .1, 1)",
                    onComplete: h(function() {
                        this.image.node.jRemove().removeAttribute("style");
                        h(O.node).jSetCss(this.expanded ? {
                            width: "auto",
                            height: "auto"
                        } : {
                            width: "",
                            height: ""
                        }).jSetCss({
                            "min-width": "",
                            "min-height": "",
                            opacity: "",
                            "max-width": Math.min(O.jGetSize(this.expanded ? "zoom" : "small").width, this.expanded ? this.expandMaxWidth() : Infinity),
                            "max-height": Math.min(O.jGetSize(this.expanded ? "zoom" : "small").height, this.expanded ? this.expandMaxHeight() : Infinity)
                        });
                        if (this.expanded) {
                            this.expandBg.jRemove();
                            this.expandBg = undefined;
                            this.expandBg = N.jSetCssProp("z-index", -100);
                            h(this.expandBg.firstChild).jSetCss({
                                opacity: ""
                            });
                            if (this.expandCaption) {
                                if (O.caption) {
                                    if (O.link) {
                                        this.expandCaption.changeContent("").append(y.$new("a", {
                                            href: O.link
                                        }).jAddEvent("tap btnclick", this.openLink.jBind(this)).changeContent(O.caption))
                                    } else {
                                        this.expandCaption.changeContent(O.caption).jAddClass("mz-show")
                                    }
                                } else {
                                    this.expandCaption.jRemoveClass("mz-show")
                                }
                            }
                        }
                        this.setupZoom(O)
                    }).jBind(this),
                    onBeforeRender: h(function(Q, R) {
                        if (undefined !== Q.scale) {
                            R.jSetCssProp("transform", "scale(" + Q.scale + ")")
                        }
                    })
                }).start(M)
            }).jBind(this))
        },
        setActiveThumb: function(H) {
            var G = false;
            h(this.additionalImages).jEach(function(I) {
                h(I.origin).jRemoveClass("mz-thumb-selected");
                if (I === H) {
                    G = true
                }
            });
            if (G && H.origin) {
                h(H.origin).jAddClass("mz-thumb-selected")
            }
            if (this.expandThumbs) {
                this.expandThumbs.selectItem(H.selector)
            }
        },
        setCaption: function(G) {
            if (this.image.caption && "off" !== this.option("zoomCaption") && "magnifier" !== this.zoomBox.mode) {
                if (!this.zoomBox.caption) {
                    this.zoomBox.caption = y.$new("div", {
                        "class": "mz-caption"
                    }).jAppendTo(this.zoomBox.node.jAddClass("caption-" + this.option("zoomCaption")))
                }
                this.zoomBox.caption.changeContent(this.image.caption)
            }
        },
        showHint: function(G, I) {
            var H;
            if (!this.expanded) {
                if (this.hintRuns <= 0) {
                    return
                }
                this.hintRuns--
            }
            if (undefined === I) {
                if (!this.zoomBox.active && !this.zoomBox.activating) {
                    if (this.option("zoomMode")) {
                        if ("hover" == this.option("zoomOn")) {
                            I = this.option("textHoverZoomHint")
                        } else {
                            if ("click" == this.option("zoomOn")) {
                                I = this.option("textClickZoomHint")
                            }
                        }
                    } else {
                        I = this.option("expand") ? this.option("textExpandHint") : ""
                    }
                } else {
                    I = this.option("expand") ? this.option("textExpandHint") : ""
                }
            }
            if (!I) {
                this.hideHint();
                return
            }
            H = this.node;
            if (!this.hint) {
                this.hint = y.$new("div", {
                    "class": "mz-hint"
                });
                this.hintMessage = y.$new("span", {
                    "class": "mz-hint-message"
                }).append(document.createTextNode(I)).jAppendTo(this.hint);
                h(this.hint).jAppendTo(this.node)
            } else {
                h(this.hintMessage).changeContent(I)
            }
            this.hint.jSetCss({
                "transition-delay": ""
            }).jRemoveClass("mz-hint-hidden");
            if (this.expanded) {
                H = this.expandFigure
            } else {
                if ((this.zoomBox.active || this.zoomBox.activating) && "magnifier" !== this.zoomBox.mode && "inner" == this.zoomBox.position) {
                    H = this.zoomBox.node
                }
            }
            if (true === G) {
                setTimeout(h(function() {
                    this.hint.jAddClass("mz-hint-hidden")
                }).jBind(this), 16)
            }
            this.hint.jAppendTo(H)
        },
        hideHint: function() {
            if (this.hint) {
                this.hint.jSetCss({
                    "transition-delay": "0ms"
                }).jAddClass("mz-hint-hidden")
            }
        },
        showLoading: function() {
            if (!this.loadingBox) {
                this.loadingBox = y.$new("div", {
                    "class": "mz-loading"
                });
                this.node.append(this.loadingBox);
                this.loadingBox.jGetSize()
            }
            this.loadingBox.jAddClass("shown")
        },
        hideLoading: function() {
            clearTimeout(this.loadTimer);
            this.loadTimer = null;
            if (this.loadingBox) {
                h(this.loadingBox).jRemoveClass("shown")
            }
        },
        setSize: function(I, M) {
            var L = y.detach(this.zoomBox.size),
                K = (!this.expanded && this.zoomBox.custom) ? h(this.zoomBox.custom).jGetSize() : {
                    width: 0,
                    height: 0
                },
                H, G, J = this.size,
                N = {
                    x: 0,
                    y: 0
                };
            M = M || this.zoomBox.position;
            this.normalSize = this.image.node.jGetSize();
            this.size = this.image.node.jGetSize();
            this.boundaries = this.image.node.getBoundingClientRect();
            if (!K.height) {
                K = this.size
            }
            if (false === this.option("upscale") || false === this.zoomBox.mode || "preview" === this.zoomBox.mode) {
                I = false
            }
            if ("preview" == this.zoomBox.mode) {
                if ("auto" === L.width) {
                    L.width = this.zoomSizeOrigin.width
                }
                if ("auto" === L.height) {
                    L.height = this.zoomSizeOrigin.height
                }
            }
            if (this.expanded && "magnifier" == this.zoomBox.mode) {
                L.width = 70;
                L.height = "auto"
            }
            if ("magnifier" == this.zoomBox.mode && "auto" === L.height) {
                this.zoomBox.width = parseFloat(L.width / 100) * Math.min(K.width, K.height);
                this.zoomBox.height = this.zoomBox.width
            } else {
                if ("zoom" == this.zoomBox.mode && "inner" == M) {
                    this.size = this.node.jGetSize();
                    K = this.size;
                    this.boundaries = this.node.getBoundingClientRect();
                    this.zoomBox.width = K.width;
                    this.zoomBox.height = K.height
                } else {
                    this.zoomBox.width = ("%" === L.wunits) ? parseFloat(L.width / 100) * K.width : parseInt(L.width);
                    this.zoomBox.height = ("%" === L.hunits) ? parseFloat(L.height / 100) * K.height : parseInt(L.height)
                }
            }
            if ("preview" == this.zoomBox.mode) {
                G = Math.min(Math.min(this.zoomBox.width / this.zoomSizeOrigin.width, this.zoomBox.height / this.zoomSizeOrigin.height), 1);
                this.zoomBox.width = this.zoomSizeOrigin.width * G;
                this.zoomBox.height = this.zoomSizeOrigin.height * G
            }
            this.zoomBox.width = Math.ceil(this.zoomBox.width);
            this.zoomBox.height = Math.ceil(this.zoomBox.height);
            this.zoomBox.aspectRatio = this.zoomBox.width / this.zoomBox.height;
            this.zoomBox.node.jSetCss({
                width: this.zoomBox.width,
                height: this.zoomBox.height
            });
            if (I) {
                K = this.expanded ? this.expandBox.jGetSize() : this.zoomBox.node.jGetSize();
                if (!this.expanded && (this.normalSize.width * this.normalSize.height) / (this.zoomSizeOrigin.width * this.zoomSizeOrigin.height) > 0.8) {
                    this.zoomSize.width = 1.5 * this.zoomSizeOrigin.width;
                    this.zoomSize.height = 1.5 * this.zoomSizeOrigin.height
                } else {
                    this.zoomSize = y.detach(this.zoomSizeOrigin)
                }
            }
            if (!this.zoomBox.active && I && !(this.expanded && "always" == this.option("expandZoomOn"))) {
                if ((this.normalSize.width * this.normalSize.height) / (this.zoomSize.width * this.zoomSize.height) > 0.8) {
                    this.zoomSize = y.detach(this.zoomSizeOrigin);
                    this.zoomBox.enable(false)
                } else {
                    this.zoomBox.enable(true)
                }
            }
            this.zoomBox.image.jSetCss({
                width: this.zoomSize.width,
                height: this.zoomSize.height
            });
            H = this.zoomBox.node.getInnerSize();
            this.zoomBox.innerWidth = Math.ceil(H.width);
            this.zoomBox.innerHeight = Math.ceil(H.height);
            this.lens.width = Math.ceil(this.zoomBox.innerWidth / (this.zoomSize.width / this.size.width));
            this.lens.height = Math.ceil(this.zoomBox.innerHeight / (this.zoomSize.height / this.size.height));
            this.lens.node.jSetCss({
                width: this.lens.width,
                height: this.lens.height
            });
            this.lens.image.jSetCss(this.size);
            y.extend(this.lens, this.lens.node.jGetSize());
            if (this.zoomBox.active) {
                clearTimeout(this.moveTimer);
                this.moveTimer = null;
                if (this.lens.innertouch) {
                    this.lens.pos.x *= (this.size.width / J.width);
                    this.lens.pos.y *= (this.size.height / J.height);
                    N.x = this.lens.spos.x;
                    N.y = this.lens.spos.y
                } else {
                    N.x = this.boundaries.left + this.lens.width / 2 + (this.lens.pos.x * (this.size.width / J.width));
                    N.y = this.boundaries.top + this.lens.height / 2 + (this.lens.pos.y * (this.size.height / J.height))
                }
                this.animate(null, N)
            }
        },
        reflowZoom: function(K) {
            var N, M, G, L, J, I, H = h(this.node).jFetch("cr");
            G = a(5);
            J = this.zoomBox.position;
            L = this.expanded ? "inner" : this.zoomBox.custom ? "custom" : this.option("zoom-position");
            I = this.expanded && "zoom" == this.zoomBox.mode ? this.expandBox : document.body;
            if (this.expanded) {
                G.y = 0;
                G.x = 0
            }
            if (!K) {
                this.setSize(true, L)
            }
            if (!this.zoomBox.activating && !this.zoomBox.active) {
                return
            }
            N = this.boundaries.top;
            if ("magnifier" !== this.zoomBox.mode) {
                if (K) {
                    this.setSize(false);
                    return
                }
                switch (L) {
                    case "inner":
                    case "custom":
                        N = 0;
                        M = 0;
                        break;
                    case "top":
                        N = this.boundaries.top - this.zoomBox.height - this.option("zoom-distance");
                        if (G.top > N) {
                            N = this.boundaries.bottom + this.option("zoom-distance");
                            L = "bottom"
                        }
                        M = this.boundaries.left;
                        break;
                    case "bottom":
                        N = this.boundaries.bottom + this.option("zoom-distance");
                        if (G.bottom < N + this.zoomBox.height) {
                            N = this.boundaries.top - this.zoomBox.height - this.option("zoom-distance");
                            L = "top"
                        }
                        M = this.boundaries.left;
                        break;
                    case "left":
                        M = this.boundaries.left - this.zoomBox.width - this.option("zoom-distance");
                        if (G.left > M && G.right >= this.boundaries.right + this.option("zoom-distance") + this.zoomBox.width) {
                            M = this.boundaries.right + this.option("zoom-distance");
                            L = "right"
                        }
                        break;
                    case "right":
                    default:
                        M = this.boundaries.right + this.option("zoom-distance");
                        if (G.right < M + this.zoomBox.width && G.left <= this.boundaries.left - this.zoomBox.width - this.option("zoom-distance")) {
                            M = this.boundaries.left - this.zoomBox.width - this.option("zoom-distance");
                            L = "left"
                        }
                        break
                }
                switch (this.option("zoom-position")) {
                    case "top":
                    case "bottom":
                        if (G.top > N || G.bottom < N + this.zoomBox.height) {
                            L = "inner"
                        }
                        break;
                    case "left":
                    case "right":
                        if (G.left > M || G.right < M + this.zoomBox.width) {
                            L = "inner"
                        }
                        break
                }
                this.zoomBox.position = L;
                this.setSize(false);
                if (K) {
                    return
                }
                if ("custom" == L) {
                    I = this.zoomBox.custom;
                    G.y = 0;
                    G.x = 0
                }
                if ("inner" == L) {
                    if ("preview" !== this.zoomBox.mode) {
                        this.zoomBox.node.jAddClass("mz-inner");
                        this.node.jAddClass("mz-inner-zoom")
                    }
                    this.lens.hide();
                    N = this.boundaries.top + G.y;
                    M = this.boundaries.left + G.x;
                    if (!this.expanded && y.jBrowser.ieMode && y.jBrowser.ieMode < 11) {
                        N = 0;
                        M = 0;
                        I = this.node
                    }
                } else {
                    N += G.y;
                    M += G.x;
                    this.node.jRemoveClass("mz-inner-zoom");
                    this.zoomBox.node.jRemoveClass("mz-inner")
                }
                this.zoomBox.node.jSetCss({
                    top: N,
                    left: M
                })
            } else {
                this.setSize(false);
                if (y.jBrowser.ieMode && y.jBrowser.ieMode < 11) {
                    I = this.node
                }
            }
            this.zoomBox.node[this.expanded ? "jAddClass" : "jRemoveClass"]("mz-expanded");
            if (!this.expanded && H) {
                H.jAppendTo("zoom" == this.zoomBox.mode && "inner" == L ? this.zoomBox.node : this.node, ((Math.floor(Math.random() * 101) + 1) % 2) ? "top" : "bottom")
            }
            this.zoomBox.node.jAppendTo(I)
        },
        changeZoomLevel: function(M) {
            var I, G, K, J, L = false,
                H = M.isMouse ? 5 : 3 / 54;
            h(M).stop();
            H = (100 + H * Math.abs(M.deltaY)) / 100;
            if (M.deltaY < 0) {
                H = 1 / H
            }
            if ("magnifier" == this.zoomBox.mode) {
                G = Math.max(100, Math.round(this.zoomBox.width * H));
                G = Math.min(G, this.size.width * 0.9);
                K = G / this.zoomBox.aspectRatio;
                this.zoomBox.width = Math.ceil(G);
                this.zoomBox.height = Math.ceil(K);
                this.zoomBox.node.jSetCss({
                    width: this.zoomBox.width,
                    height: this.zoomBox.height
                });
                I = this.zoomBox.node.getInnerSize();
                this.zoomBox.innerWidth = Math.ceil(I.width);
                this.zoomBox.innerHeight = Math.ceil(I.height);
                L = true
            } else {
                if (!this.expanded && "zoom" == this.zoomBox.mode) {
                    G = Math.max(50, Math.round(this.lens.width * H));
                    G = Math.min(G, this.size.width * 0.9);
                    K = G / this.zoomBox.aspectRatio;
                    this.zoomSize.width = Math.ceil((this.zoomBox.innerWidth / G) * this.size.width);
                    this.zoomSize.height = Math.ceil((this.zoomBox.innerHeight / K) * this.size.height);
                    this.zoomBox.image.jSetCss({
                        width: this.zoomSize.width,
                        height: this.zoomSize.height
                    })
                } else {
                    return
                }
            }
            J = h(window).jGetScroll();
            this.lens.width = Math.ceil(this.zoomBox.innerWidth / (this.zoomSize.width / this.size.width));
            this.lens.height = Math.ceil(this.zoomBox.innerHeight / (this.zoomSize.height / this.size.height));
            this.lens.node.jSetCss({
                width: this.lens.width,
                height: this.lens.height
            });
            y.extend(this.lens, this.lens.node.jGetSize());
            if (this.zoomBox.active) {
                clearTimeout(this.moveTimer);
                this.moveTimer = null;
                if (L) {
                    this.moveTimer = true
                }
                this.animate(null, {
                    x: M.x - J.x,
                    y: M.y - J.y
                });
                if (L) {
                    this.moveTimer = null
                }
            }
        },
        registerActivateEvent: function(I) {
            var H, G = I ? "dbltap btnclick" : "touchstart" + (!y.jBrowser.mobile ? (window.navigator.pointerEnabled ? " pointermove" : window.navigator.msPointerEnabled ? " MSPointerMove" : " mousemove") : ""),
                J = this.node.jFetch("mz:handlers:activate:fn", (!I) ? h(function(K) {
                    H = (y.jBrowser.ieMode < 9) ? y.extend({}, K) : K;
                    if (!this.activateTimer) {
                        clearTimeout(this.activateTimer);
                        this.activateTimer = setTimeout(h(function() {
                            this.activate(H)
                        }).jBind(this), 120)
                    }
                }).jBindAsEvent(this) : h(this.activate).jBindAsEvent(this));
            this.node.jStore("mz:handlers:activate:event", G).jAddEvent(G, J, 10)
        },
        unregisterActivateEvent: function(H) {
            var G = this.node.jFetch("mz:handlers:activate:event"),
                I = this.node.jFetch("mz:handlers:activate:fn");
            this.node.jRemoveEvent(G, I);
            this.node.jDel("mz:handlers:activate:fn")
        },
        registerDeactivateEvent: function(H) {
            var G = H ? "dbltap btnclick" : "touchend" + (!y.jBrowser.mobile ? (window.navigator.pointerEnabled ? " pointerout" : window.navigator.msPointerEnabled ? " MSPointerOut" : " mouseout") : ""),
                I = this.node.jFetch("mz:handlers:deactivate:fn", h(function(J) {
                    if (c(J) && !g(J)) {
                        return
                    }
                    if (this.zoomBox.node !== J.getRelated() && !(("inner" == this.zoomBox.position || "magnifier" == this.zoomBox.mode) && this.zoomBox.node.hasChild(J.getRelated())) && !this.node.hasChild(J.getRelated())) {
                        this.deactivate(J)
                    }
                }).jBindAsEvent(this));
            this.node.jStore("mz:handlers:deactivate:event", G).jAddEvent(G, I, 20)
        },
        unregisterDeactivateEvent: function() {
            var G = this.node.jFetch("mz:handlers:deactivate:event"),
                H = this.node.jFetch("mz:handlers:deactivate:fn");
            this.node.jRemoveEvent(G, H);
            this.node.jDel("mz:handlers:deactivate:fn")
        },
        registerEvents: function() {
            this.moveBind = this.move.jBind(this);
            this.node.jAddEvent(["touchstart", window.navigator.pointerEnabled ? "pointerdown" : "MSPointerDown"], h(function(G) {
                if (!this.zoomBox.active) {
                    return
                }
                if ("inner" === this.zoomBox.position) {
                    this.lens.spos = G.getClientXY()
                }
            }).jBindAsEvent(this), 10);
            this.node.jAddEvent(["touchmove", window.navigator.pointerEnabled ? "pointermove" : window.navigator.msPointerEnabled ? "MSPointerMove" : "mousemove"], h(this.animate).jBindAsEvent(this));
            if (this.option("zoomMode")) {
                this.registerActivateEvent("click" === this.option("zoomOn"));
                this.registerDeactivateEvent("click" === this.option("zoomOn") && !this.option("expand"))
            }
            this.node.jAddEvent("mousedown", function(G) {
                G.stopDistribution()
            }, 10).jAddEvent("btnclick", h(function(G) {
                this.jRaiseEvent("MouseEvent", "click")
            }).jBind(this.node), 15);
            if (this.option("expand")) {
                this.node.jAddEvent("tap btnclick", h(this.expand).jBindAsEvent(this), 15)
            } else {
                this.node.jAddEvent("tap btnclick", h(this.openLink).jBindAsEvent(this), 15)
            }
            if (this.additionalImages.length > 1) {
                this.swipe()
            }
            if (!y.jBrowser.mobile && this.option("variableZoom")) {
                this.node.jAddEvent("mousescroll", this.changeZoomLevel.jBindAsEvent(this))
            }
            h(window).jAddEvent("resize scroll", this.onResize)
        },
        unregisterEvents: function() {
            if (this.node) {
                this.node.jRemoveEvent("mousescroll")
            }
            h(window).jRemoveEvent("resize scroll", this.onResize);
            h(this.additionalImages).jEach(function(G) {
                h(G.origin).jClearEvents()
            })
        },
        activate: function(M) {
            var N, L, J, K, G, H = 0,
                I = 0;
            if (!this.ready || !this.zoomBox.enabled || this.zoomBox.active || this.zoomBox.activating) {
                if (!this.image.loaded()) {
                    if (M) {
                        this.initEvent = y.extend({}, M);
                        M.stopQueue()
                    }
                    this.image.load(this.setupZoom.jBind(this));
                    if (!this.loadTimer) {
                        this.loadTimer = h(this.showLoading).jBind(this).jDelay(400)
                    }
                }
                return
            }
            if (M && "pointermove" == M.type && "touch" == M.pointerType) {
                return
            }
            if (!this.option("zoomMode") && this.option("expand") && !this.expanded) {
                this.zoomBox.active = true;
                return
            }
            this.zoomBox.activating = true;
            if (this.expanded && "zoom" == this.zoomBox.mode) {
                K = this.image.node.jGetRect();
                this.expandStage.jAddClass("mz-zoom-in");
                G = this.expandFigure.jGetRect();
                I = ((K.left + K.right) / 2 - (G.left + G.right) / 2);
                H = ((K.top + K.bottom) / 2 - (G.top + G.bottom) / 2)
            }
            this.zoomBox.image.jRemoveEvent("transitionend");
            this.zoomBox.node.jRemoveClass("mz-deactivating").jRemoveEvent("transitionend");
            this.zoomBox.node.jAddClass("mz-activating");
            this.node.jAddClass("mz-activating");
            this.reflowZoom();
            L = ("zoom" == this.zoomBox.mode) ? this.zoomBox.position : this.zoomBox.mode;
            if (y.jBrowser.features.transition && !(this.expanded && "always" == this.option("expandZoomOn"))) {
                if ("inner" == L) {
                    J = this.image.node.jGetSize();
                    this.zoomBox.image.jSetCss({
                        transform: "translate3d(0," + H + "px, 0) scale(" + J.width / this.zoomSize.width + ", " + J.height / this.zoomSize.height + ")"
                    }).jGetSize();
                    this.zoomBox.image.jAddEvent("transitionend", h(function() {
                        this.zoomBox.image.jRemoveEvent("transitionend");
                        this.zoomBox.node.jRemoveClass("mz-activating mz-p-" + L);
                        this.zoomBox.activating = false;
                        this.zoomBox.active = true
                    }).jBind(this));
                    this.zoomBox.node.jAddClass("mz-p-" + L).jGetSize();
                    if (y.jBrowser.chrome && ("chrome" === y.jBrowser.uaName || "opera" === y.jBrowser.uaName)) {
                        this.zoomBox.activating = false;
                        this.zoomBox.active = true
                    }
                } else {
                    this.zoomBox.node.jAddEvent("transitionend", h(function() {
                        this.zoomBox.node.jRemoveEvent("transitionend");
                        this.zoomBox.node.jRemoveClass("mz-activating mz-p-" + L)
                    }).jBind(this));
                    this.zoomBox.node.jAddClass("mz-p-" + L).jGetSize();
                    this.zoomBox.node.jRemoveClass("mz-p-" + L);
                    this.zoomBox.activating = false;
                    this.zoomBox.active = true
                }
            } else {
                this.zoomBox.node.jRemoveClass("mz-activating");
                this.zoomBox.activating = false;
                this.zoomBox.active = true
            }
            if (!this.expanded) {
                this.showHint(true)
            }
            if (M) {
                M.stop().stopQueue();
                N = M.getClientXY();
                if ("magnifier" == this.zoomBox.mode && (/tap/i).test(M.type)) {
                    N.y -= this.zoomBox.height / 2 + 10
                }
                if ("inner" == L && ((/tap/i).test(M.type) || c(M))) {
                    this.lens.pos = {
                        x: 0,
                        y: 0
                    };
                    N.x = -(N.x - this.boundaries.left - this.size.width / 2) * (this.zoomSize.width / this.size.width);
                    N.y = -(N.y - this.boundaries.top - this.size.height / 2) * (this.zoomSize.height / this.size.height)
                }
            } else {
                N = {
                    x: this.boundaries.left + (this.boundaries.right - this.boundaries.left) / 2,
                    y: this.boundaries.top + (this.boundaries.bottom - this.boundaries.top) / 2
                }
            }
            this.node.jRemoveClass("mz-activating").jAddClass("mz-active");
            N.x += -I;
            N.y += -H;
            this.lens.spos = {
                x: 0,
                y: 0
            };
            this.lens.dx = 0;
            this.lens.dy = 0;
            this.animate(M, N, true);
            s("onZoomIn", this.id)
        },
        deactivate: function(I, N) {
            var L, J, G, H, K = 0,
                M = 0,
                O = this.zoomBox.active;
            this.initEvent = null;
            if (!this.ready) {
                return
            }
            if (I && "pointerout" == I.type && "touch" == I.pointerType) {
                return
            }
            clearTimeout(this.moveTimer);
            this.moveTimer = null;
            clearTimeout(this.activateTimer);
            this.activateTimer = null;
            this.zoomBox.activating = false;
            this.zoomBox.active = false;
            if (true !== N && !this.expanded) {
                if (O) {
                    this.showHint()
                }
            }
            if (!this.zoomBox.enabled) {
                return
            }
            if (I) {
                I.stop()
            }
            this.zoomBox.image.jRemoveEvent("transitionend");
            this.zoomBox.node.jRemoveClass("mz-activating").jRemoveEvent("transitionend");
            if (this.expanded) {
                H = this.expandFigure.jGetRect();
                if ("always" !== this.option("expandZoomOn")) {
                    this.expandStage.jRemoveClass("mz-zoom-in")
                }
                this.image.node.jSetCss({
                    "max-height": this.expandMaxHeight()
                });
                G = this.image.node.jGetRect();
                M = ((G.left + G.right) / 2 - (H.left + H.right) / 2);
                K = ((G.top + G.bottom) / 2 - (H.top + H.bottom) / 2)
            }
            L = ("zoom" == this.zoomBox.mode) ? this.zoomBox.position : this.zoomBox.mode;
            if (y.jBrowser.features.transition && I && !(this.expanded && "always" == this.option("expandZoomOn"))) {
                if ("inner" == L) {
                    this.zoomBox.image.jAddEvent("transitionend", h(function() {
                        this.zoomBox.image.jRemoveEvent("transitionend");
                        this.node.jRemoveClass("mz-active");
                        setTimeout(h(function() {
                            this.zoomBox.hide()
                        }).jBind(this), 32)
                    }).jBind(this));
                    J = this.image.node.jGetSize();
                    this.zoomBox.node.jAddClass("mz-deactivating mz-p-" + L).jGetSize();
                    this.zoomBox.image.jSetCss({
                        transform: "translate3d(0," + K + "px,0) scale(" + J.width / this.zoomSize.width + ", " + J.height / this.zoomSize.height + ")"
                    })
                } else {
                    this.zoomBox.node.jAddEvent("transitionend", h(function() {
                        this.zoomBox.hide();
                        this.node.jRemoveClass("mz-active")
                    }).jBind(this));
                    this.zoomBox.node.jGetCss("opacity");
                    this.zoomBox.node.jAddClass("mz-deactivating mz-p-" + L);
                    this.node.jRemoveClass("mz-active")
                }
            } else {
                this.zoomBox.hide();
                this.node.jRemoveClass("mz-active")
            }
            this.lens.dx = 0;
            this.lens.dy = 0;
            this.lens.spos = {
                x: 0,
                y: 0
            };
            this.lens.hide();
            if (O) {
                s("onZoomOut", this.id)
            }
        },
        animate: function(Q, P, O) {
            var I = P,
                K, J, M = 0,
                H, L = 0,
                G, R, N = false;
            if (this.initEvent && !this.image.loaded()) {
                this.initEvent = Q
            }
            if (!this.zoomBox.active && !O) {
                return
            }
            if (Q) {
                h(Q).stopDefaults();
                if (c(Q) && !g(Q)) {
                    return
                }
                N = (/tap/i).test(Q.type) || c(Q);
                this.lens.touchmovement = N;
                if (!I) {
                    I = Q.getClientXY()
                }
            }
            if ("preview" == this.zoomBox.mode) {
                return
            }
            if ("zoom" == this.zoomBox.mode && "inner" === this.zoomBox.position && (Q && N || !Q && this.lens.innertouch)) {
                this.lens.innertouch = true;
                K = this.lens.pos.x + (I.x - this.lens.spos.x);
                J = this.lens.pos.y + (I.y - this.lens.spos.y);
                this.lens.spos = I;
                M = Math.min(0, this.zoomBox.innerWidth - this.zoomSize.width) / 2;
                H = -M;
                L = Math.min(0, this.zoomBox.innerHeight - this.zoomSize.height) / 2;
                G = -L
            } else {
                this.lens.innertouch = false;
                K = I.x - this.boundaries.left;
                J = I.y - this.boundaries.top;
                H = this.size.width - this.lens.width;
                G = this.size.height - this.lens.height;
                K -= this.lens.width / 2;
                J -= this.lens.height / 2
            }
            if ("magnifier" !== this.zoomBox.mode) {
                K = Math.max(M, Math.min(K, H));
                J = Math.max(L, Math.min(J, G))
            }
            this.lens.pos.x = K = Math.round(K);
            this.lens.pos.y = J = Math.round(J);
            if ("zoom" == this.zoomBox.mode && "inner" != this.zoomBox.position) {
                if (y.jBrowser.features.transform) {
                    this.lens.node.jSetCss({
                        transform: "translate(" + this.lens.pos.x + "px," + this.lens.pos.y + "px)"
                    });
                    this.lens.image.jSetCss({
                        transform: "translate(" + -(this.lens.pos.x + this.lens.border.x) + "px, " + -(this.lens.pos.y + this.lens.border.y) + "px)"
                    })
                } else {
                    this.lens.node.jSetCss({
                        top: this.lens.pos.y,
                        left: this.lens.pos.x
                    });
                    this.lens.image.jSetCss({
                        top: -(this.lens.pos.y + this.lens.border.y),
                        left: -(this.lens.pos.x + this.lens.border.x)
                    })
                }
            }
            if ("magnifier" == this.zoomBox.mode) {
                if (this.lens.touchmovement && !(Q && "dbltap" == Q.type)) {
                    I.y -= this.zoomBox.height / 2 + 10
                }
                R = h(window).jGetScroll();
                this.zoomBox.node.jSetCss((y.jBrowser.ieMode && y.jBrowser.ieMode < 11) ? {
                    top: I.y - this.boundaries.top - this.zoomBox.height / 2,
                    left: I.x - this.boundaries.left - this.zoomBox.width / 2
                } : {
                    top: I.y + R.y - this.zoomBox.height / 2,
                    left: I.x + R.x - this.zoomBox.width / 2
                })
            }
            if (!this.moveTimer) {
                this.lens.dx = 0;
                this.lens.dy = 0;
                this.move(1)
            }
        },
        move: function(I) {
            var H, G;
            if (!isFinite(I)) {
                I = this.lens.innertouch ? 0.2 : 0.1
            }
            H = ((this.lens.pos.x - this.lens.dx) * I);
            G = ((this.lens.pos.y - this.lens.dy) * I);
            this.lens.dx += H;
            this.lens.dy += G;
            if (!this.moveTimer || Math.abs(H) > 0.000001 || Math.abs(G) > 0.000001) {
                this.zoomBox.image.jSetCss(y.jBrowser.features.transform ? {
                    transform: f + (this.lens.innertouch ? this.lens.dx : -(this.lens.dx * (this.zoomSize.width / this.size.width) - Math.max(0, this.zoomSize.width - this.zoomBox.innerWidth) / 2)) + "px," + (this.lens.innertouch ? this.lens.dy : -(this.lens.dy * (this.zoomSize.height / this.size.height) - Math.max(0, this.zoomSize.height - this.zoomBox.innerHeight) / 2)) + "px" + A + " scale(1)"
                } : {
                    left: -(this.lens.dx * (this.zoomSize.width / this.size.width) + Math.min(0, this.zoomSize.width - this.zoomBox.innerWidth) / 2),
                    top: -(this.lens.dy * (this.zoomSize.height / this.size.height) + Math.min(0, this.zoomSize.height - this.zoomBox.innerHeight) / 2)
                })
            }
            if ("magnifier" == this.zoomBox.mode) {
                return
            }
            this.moveTimer = setTimeout(this.moveBind, 16)
        },
        swipe: function() {
            var S, I, N = 30,
                K = 201,
                P, Q = "",
                H = {},
                G, M, R = 0,
                T = {
                    transition: y.jBrowser.cssTransform + String.fromCharCode(32) + "300ms cubic-bezier(.18,.35,.58,1)"
                },
                J, O, L = h(function(U) {
                    if (!this.ready || this.zoomBox.active) {
                        return
                    }
                    if (U.state == "dragstart") {
                        clearTimeout(this.activateTimer);
                        this.activateTimer = null;
                        R = 0;
                        H = {
                            x: U.x,
                            y: U.y,
                            ts: U.timeStamp
                        };
                        S = this.size.width;
                        I = S / 2;
                        this.image.node.jRemoveEvent("transitionend");
                        this.image.node.jSetCssProp("transition", "");
                        this.image.node.jSetCssProp("transform", "translate3d(0, 0, 0)");
                        O = null
                    } else {
                        G = (U.x - H.x);
                        M = {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                        if (null === O) {
                            O = (Math.abs(U.x - H.x) < Math.abs(U.y - H.y))
                        }
                        if (O) {
                            return
                        }
                        U.stop();
                        if ("dragend" == U.state) {
                            R = 0;
                            J = null;
                            P = U.timeStamp - H.ts;
                            if (Math.abs(G) > I || (P < K && Math.abs(G) > N)) {
                                if ((Q = (G > 0) ? "backward" : (G <= 0) ? "forward" : "")) {
                                    if (Q == "backward") {
                                        J = this.getPrev();
                                        R += S * 10
                                    } else {
                                        J = this.getNext();
                                        R -= S * 10
                                    }
                                }
                            }
                            M.x = R;
                            M.deg = -90 * (M.x / S);
                            this.image.node.jAddEvent("transitionend", h(function(V) {
                                this.image.node.jRemoveEvent("transitionend");
                                this.image.node.jSetCssProp("transition", "");
                                if (J) {
                                    this.image.node.jSetCss({
                                        transform: "translate3d(" + M.x + "px, 0px, 0px)"
                                    });
                                    this.update(J, true)
                                }
                            }).jBind(this));
                            this.image.node.jSetCss(T);
                            this.image.node.jSetCss({
                                "transition-duration": M.x ? "100ms" : "300ms",
                                opacity: 1 - 0.7 * Math.abs(M.x / S),
                                transform: "translate3d(" + M.x + "px, 0px, 0px)"
                            });
                            G = 0;
                            return
                        }
                        M.x = G;
                        M.z = -50 * Math.abs(M.x / I);
                        M.deg = -60 * (M.x / I);
                        this.image.node.jSetCss({
                            opacity: 1 - 0.7 * Math.abs(M.x / I),
                            transform: "translate3d(" + M.x + "px, 0px, " + M.z + "px)"
                        })
                    }
                }).jBind(this);
            this.node.jAddEvent("touchdrag", L)
        },
        setupExpandGallery: function() {
            var H, G;
            if (this.additionalImages.length) {
                this.expandGallery = this.additionalImages
            } else {
                H = this.placeholder.getAttribute("data-gallery");
                if (H) {
                    if (y.jBrowser.features.query) {
                        G = y.$A(document.querySelectorAll('.MagicZoom[data-gallery="' + H + '"]'))
                    } else {
                        G = y.$A(document.getElementsByTagName("A")).filter(function(I) {
                            return H == I.getAttribute("data-gallery")
                        })
                    }
                    h(G).jEach(function(J) {
                        var I, K;
                        I = i(J);
                        if (I && I.additionalImages.length > 0) {
                            return
                        }
                        if (I) {
                            K = new k(I.image.small.url, I.image.zoom.url, I.image.caption, null, I.image.origin)
                        } else {
                            K = new k().parseNode(J, I ? I.originalTitle : null)
                        }
                        if (this.image.zoom.src.has(K.zoom.src) && this.image.small.src.has(K.small.src)) {
                            K = this.image
                        }
                        this.expandGallery.push(K)
                    }, this);
                    this.primaryImage = this.image
                }
            }
            if (this.expandGallery.length > 1) {
                this.expandStage.jAddClass("with-thumbs");
                this.expandNav = y.$new("div", {
                    "class": "mz-expand-thumbnails"
                }).jAppendTo(this.expandStage);
                this.expandThumbs = new r(this.expandNav);
                h(this.expandGallery).jEach(function(I) {
                    var J = h(function(K) {
                        this.setActiveThumb(I);
                        this.update(I)
                    }).jBind(this);
                    I.selector = this.expandThumbs.addItem(y.$new("img", {
                        src: I.getURL("small")
                    }).jAddEvent("tap btnclick", function(K) {
                        K.stop()
                    }).jAddEvent("tap " + ("hover" == this.option("selectorTrigger") ? "mouseover mouseout" : "btnclick"), h(function(L, K) {
                        if (this.updateTimer) {
                            clearTimeout(this.updateTimer)
                        }
                        this.updateTimer = false;
                        if ("mouseover" == L.type) {
                            this.updateTimer = h(J).jDelay(K)
                        } else {
                            if ("tap" == L.type || "btnclick" == L.type) {
                                J()
                            }
                        }
                    }).jBindAsEvent(this, 60)))
                }, this);
                this.buttons.next.show();
                this.buttons.prev.show()
            } else {
                this.expandStage.jRemoveClass("with-thumbs");
                this.buttons.next.hide();
                this.buttons.prev.hide()
            }
        },
        destroyExpandGallery: function() {
            var G;
            if (this.expandThumbs) {
                this.expandThumbs.stop();
                this.expandThumbs = null
            }
            if (this.expandNav) {
                this.expandNav.jRemove();
                this.expandNav = null
            }
            if (this.expandGallery.length > 1 && !this.additionalImages.length) {
                this.node.jRemoveEvent("touchdrag");
                this.image.node.jRemove().removeAttribute("style");
                this.primaryImage.node.jAppendTo(this.node);
                this.setupZoom(this.primaryImage);
                while (G = this.expandGallery.pop()) {
                    if (G !== this.primaryImage) {
                        if (G.small.node) {
                            G.small.node.kill();
                            G.small.node = null
                        }
                        if (G.zoom.node) {
                            G.zoom.node.kill();
                            G.zoom.node = null
                        }
                        G = null
                    }
                }
            }
            this.expandGallery = []
        },
        close: function() {
            if (!this.ready || !this.expanded) {
                return
            }
            if ("ios" == y.jBrowser.platform && "safari" == y.jBrowser.uaName && 7 == parseInt(y.jBrowser.uaVersion)) {
                clearInterval(m);
                m = null
            }
            h(document).jRemoveEvent("keydown", this.keyboardCallback);
            this.deactivate(null, true);
            this.ready = false;
            if (w.jBrowser.fullScreen.capable && w.jBrowser.fullScreen.enabled()) {
                w.jBrowser.fullScreen.cancel()
            } else {
                if (y.jBrowser.features.transition) {
                    this.node.jRemoveEvent("transitionend").jSetCss({
                        transition: ""
                    });
                    this.node.jAddEvent("transitionend", this.onClose);
                    this.expandBg.jRemoveEvent("transitionend").jSetCss({
                        transition: ""
                    });
                    this.expandBg.jSetCss({
                        transition: "all 0.6s cubic-bezier(0.895, 0.030, 0.685, 0.220) 0.0s"
                    }).jGetSize();
                    this.node.jSetCss({
                        transition: "all .4s cubic-bezier(0.600, -0.280, 0.735, 0.045) 0s"
                    }).jGetSize();
                    if ("always" == this.option("expandZoomOn") && "magnifier" !== this.option("expandZoomMode")) {
                        this.image.node.jSetCss({
                            "max-height": this.image.jGetSize("zoom").height
                        });
                        this.image.node.jSetCss({
                            "max-width": this.image.jGetSize("zoom").width
                        })
                    }
                    this.expandBg.jSetCss({
                        opacity: 0.4
                    });
                    this.node.jSetCss({
                        opacity: 0.01,
                        transform: "scale(0.4)"
                    })
                } else {
                    this.onClose()
                }
            }
        },
        expand: function(J) {
            if (!this.image.loaded() || !this.ready || this.expanded) {
                if (!this.image.loaded()) {
                    if (J) {
                        this.initEvent = y.extend({}, J);
                        J.stopQueue()
                    }
                    this.image.load(this.setupZoom.jBind(this));
                    if (!this.loadTimer) {
                        this.loadTimer = h(this.showLoading).jBind(this).jDelay(400)
                    }
                }
                return
            }
            if (J) {
                J.stopQueue()
            }
            var G = h(this.node).jFetch("cr"),
                H = document.createDocumentFragment(),
                I;
            this.hideHint();
            this.hintRuns--;
            this.deactivate(null, true);
            this.unregisterActivateEvent();
            this.unregisterDeactivateEvent();
            this.ready = false;
            if (!this.expandBox) {
                this.expandBox = y.$new("div").jAddClass("mz-expand").jAddClass(this.option("cssClass")).jSetCss({
                    opacity: 0
                });
                this.expandStage = y.$new("div").jAddClass("mz-expand-stage").jAppendTo(this.expandBox);
                this.expandControls = y.$new("div").jAddClass("mz-expand-controls").jAppendTo(this.expandStage);
                h(["prev", "next", "close"]).jEach(function(L) {
                    var K = "mz-button";
                    this.buttons[L] = y.$new("button", {
                        title: this.option("text-btn-" + L)
                    }).jAddClass(K).jAddClass(K + "-" + L);
                    H.appendChild(this.buttons[L]);
                    switch (L) {
                        case "prev":
                            this.buttons[L].jAddEvent("tap btnclick", function(M) {
                                M.stop();
                                this.update(this.getPrev())
                            }.jBindAsEvent(this));
                            break;
                        case "next":
                            this.buttons[L].jAddEvent("tap btnclick", function(M) {
                                M.stop();
                                this.update(this.getNext())
                            }.jBindAsEvent(this));
                            break;
                        case "close":
                            this.buttons[L].jAddEvent("tap btnclick", function(M) {
                                M.stop();
                                this.close()
                            }.jBindAsEvent(this));
                            break
                    }
                }, this);
                this.expandControls.append(H);
                this.expandBox.jAddEvent("mousescroll touchstart dbltap", h(function(K) {
                    h(K).stop()
                }));
                if (this.option("closeOnClickOutside")) {
                    this.expandBox.jAddEvent("tap btnclick", function(K) {
                        if ("always" !== this.option("expandZoomOn") && this.node.hasChild(K.getOriginalTarget())) {
                            return
                        }
                        K.stop();
                        this.close()
                    }.jBindAsEvent(this))
                }
                this.keyboardCallback = h(function(L) {
                    var K = null;
                    if (27 !== L.keyCode && 37 !== L.keyCode && 39 !== L.keyCode) {
                        return
                    }
                    h(L).stop();
                    if (27 === L.keyCode) {
                        this.close()
                    } else {
                        K = (37 === L.keyCode) ? this.getPrev() : this.getNext();
                        if (K) {
                            this.update(K)
                        }
                    }
                }).jBindAsEvent(this);
                this.onExpand = h(function() {
                    var K;
                    this.node.jRemoveEvent("transitionend").jSetCss({
                        transition: "",
                        transform: "translate3d(0,0,0)"
                    });
                    this.expanded = true;
                    this.expandBox.jSetCss({
                        opacity: 1
                    });
                    this.zoomBox.setMode(this.option("expandZoomMode"));
                    this.zoomSize = y.detach(this.zoomSizeOrigin);
                    this.resizeCallback();
                    if (this.expandCaption && this.image.caption) {
                        if (this.image.link) {
                            this.expandCaption.append(y.$new("a", {
                                href: this.image.link
                            }).jAddEvent("tap btnclick", this.openLink.jBind(this)).changeContent(this.image.caption))
                        } else {
                            this.expandCaption.changeContent(this.image.caption)
                        }
                        this.expandCaption.jAddClass("mz-show")
                    }
                    if ("always" !== this.option("expandZoomOn")) {
                        this.registerActivateEvent(true);
                        this.registerDeactivateEvent(true)
                    }
                    this.ready = true;
                    if ("always" === this.option("expandZoomOn")) {
                        this.activate()
                    }
                    if (y.jBrowser.mobile && this.mobileZoomHint && this.zoomBox.enabled) {
                        this.showHint(true, this.option("textClickZoomHint"));
                        this.mobileZoomHint = false
                    }
                    this.expandControls.jRemoveClass("mz-hidden").jAddClass("mz-fade mz-visible");
                    this.expandNav && this.expandNav.jRemoveClass("mz-hidden").jAddClass("mz-fade mz-visible");
                    if (this.expandThumbs) {
                        this.expandThumbs.run();
                        this.setActiveThumb(this.image)
                    }
                    if (G) {
                        G.jAppendTo(this.expandBox, ((Math.floor(Math.random() * 101) + 1) % 2) ? "top" : "bottom")
                    }
                    if (this.expandGallery.length && !this.additionalImages.length) {
                        this.swipe()
                    }
                    h(document).jAddEvent("keydown", this.keyboardCallback);
                    if ("ios" == y.jBrowser.platform && "safari" == y.jBrowser.uaName && 7 == parseInt(y.jBrowser.uaVersion)) {
                        m = u()
                    }
                    s("onExpandOpen", this.id)
                }).jBind(this);
                this.onClose = h(function() {
                    if (this.expanded) {
                        h(document).jRemoveEvent("keydown", this.keyboardCallback);
                        this.deactivate(null, true)
                    }
                    this.node.jRemoveEvent("transitionend");
                    this.destroyExpandGallery();
                    this.expanded = false;
                    this.zoomBox.setMode(this.option("zoomMode"));
                    this.node.replaceChild(this.image.getNode("small"), this.image.node);
                    this.image.setCurNode("small");
                    h(this.image.node).jSetCss({
                        width: "",
                        height: "",
                        "max-width": Math.min(this.image.jGetSize("small").width),
                        "max-height": Math.min(this.image.jGetSize("small").height)
                    });
                    this.node.jSetCss({
                        opacity: "",
                        transition: ""
                    });
                    this.node.jSetCss({
                        transform: "translate3d(0,0,0)"
                    });
                    this.node.jAppendTo(this.placeholder);
                    this.setSize(true);
                    if (this.expandCaption) {
                        this.expandCaption.jRemove();
                        this.expandCaption = null
                    }
                    this.unregisterActivateEvent();
                    this.unregisterDeactivateEvent();
                    if ("always" == this.option("zoomOn")) {
                        this.activate()
                    } else {
                        if (false !== this.option("zoomMode")) {
                            this.registerActivateEvent("click" === this.option("zoomOn"));
                            this.registerDeactivateEvent("click" === this.option("zoomOn") && !this.option("expand"))
                        }
                    }
                    this.showHint();
                    this.expandBg.jRemoveEvent("transitionend");
                    this.expandBox.jRemove();
                    this.expandBg.jRemove();
                    this.expandBg = null;
                    h(y.jBrowser.getDoc()).jSetCss({
                        overflow: ""
                    });
                    this.ready = true;
                    if (y.jBrowser.ieMode < 10) {
                        this.resizeCallback()
                    } else {
                        h(window).jRaiseEvent("UIEvent", "resize")
                    }
                    s("onExpandClose", this.id)
                }).jBind(this);
                this.expandImageStage = y.$new("div", {
                    "class": "mz-image-stage"
                }).jAppendTo(this.expandStage);
                this.expandFigure = y.$new("figure").jAppendTo(this.expandImageStage)
            }
            this.setupExpandGallery();
            I = y.$new("img", {
                src: this.image.getURL("zoom")
            });
            if (y.jBrowser.features.cssFilters || y.jBrowser.ieMode < 10) {
                this.expandBg = y.$new("div").jAddClass("mz-expand-bg").append(I).jAppendTo(this.expandBox)
            } else {
                this.expandBg = y.$new("div").jAddClass("mz-expand-bg").append(new y.SVGImage(I).blur(b).getNode()).jAppendTo(this.expandBox)
            }
            if ("always" === this.option("expandZoomOn")) {
                this.expandStage.jAddClass("mz-always-zoom" + ("zoom" === this.option("expandZoomMode") ? " mz-zoom-in" : "")).jGetSize()
            }
            this.node.replaceChild(this.image.getNode("zoom"), this.image.node);
            this.image.setCurNode("zoom");
            this.expandBox.jAppendTo(document.body);
            h(y.jBrowser.getDoc()).jSetCss({
                overflow: "hidden"
            });
            this.expandMaxWidth = function() {
                var K = this.expandImageStage;
                if (h(this.expandFigure).jGetSize().width > 50) {
                    K = this.expandFigure
                }
                return function() {
                    return Math.round(h(K).getInnerSize().width)
                }
            }.call(this);
            this.expandMaxHeight = function() {
                var K = this.expandImageStage;
                if (h(this.expandFigure).jGetSize().height > 50) {
                    K = this.expandFigure
                }
                return function() {
                    return Math.round(h(K).getInnerSize().height)
                }
            }.call(this);
            this.expandControls.jRemoveClass("mz-fade mz-visible").jAddClass("mz-hidden");
            this.expandNav && this.expandNav.jRemoveClass("mz-fade mz-visible").jAddClass("mz-hidden");
            this.image.node.jSetCss({
                "max-height": Math.min(this.image.jGetSize("zoom").height, "always" == this.option("expandZoomOn") && "magnifier" !== this.option("expandZoomMode") ? Infinity : this.expandMaxHeight())
            });
            this.image.node.jSetCss({
                "max-width": Math.min(this.image.jGetSize("zoom").width, "always" == this.option("expandZoomOn") && "magnifier" !== this.option("expandZoomMode") ? Infinity : this.expandMaxWidth())
            });
            this.expandFigure.append(this.node);
            if (this.option("expandCaption")) {
                this.expandCaption = y.$new("figcaption", {
                    "class": "mz-caption"
                }).jAppendTo(this.expandFigure)
            }
            if ("fullscreen" == this.option("expand")) {
                w.jBrowser.fullScreen.request(this.expandBox, {
                    onEnter: h(function() {
                        this.onExpand()
                    }).jBind(this),
                    onExit: this.onClose,
                    fallback: h(function() {
                        this.expandToWindow()
                    }).jBind(this)
                })
            } else {
                this.expandToWindow()
            }
        },
        expandToWindow: function() {
            this.node.jSetCss({
                transition: ""
            });
            this.node.jSetCss({
                transform: "scale(0.6)"
            }).jGetSize();
            this.node.jSetCss({
                transition: y.jBrowser.cssTransform + " 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0s"
            });
            if (y.jBrowser.features.transition) {
                this.node.jAddEvent("transitionend", this.onExpand)
            } else {
                this.onExpand.jDelay(16, this)
            }
            this.expandBox.jSetCss({
                opacity: 1
            });
            this.node.jSetCss({
                transform: "scale(1)"
            })
        },
        openLink: function() {
            if (this.image.link) {
                window.open(this.image.link, "_self")
            }
        },
        getNext: function() {
            var G = (this.expanded ? this.expandGallery : this.additionalImages).filter(function(J) {
                    return (-1 !== J.small.state || -1 !== J.zoom.state)
                }),
                H = G.length,
                I = h(G).indexOf(this.image) + 1;
            return (1 >= H) ? null : G[(I >= H) ? 0 : I]
        },
        getPrev: function() {
            var G = (this.expanded ? this.expandGallery : this.additionalImages).filter(function(J) {
                    return (-1 !== J.small.state || -1 !== J.zoom.state)
                }),
                H = G.length,
                I = h(G).indexOf(this.image) - 1;
            return (1 >= H) ? null : G[(I < 0) ? H - 1 : I]
        },
        imageByURL: function(H, I) {
            var G = this.additionalImages.filter(function(J) {
                return ((J.zoom.src.has(H) || J.zoom.url.has(H)) && (J.small.src.has(I) || J.small.url.has(I)))
            }) || [];
            return G[0] || ((I && H && "string" === y.jTypeOf(I) && "string" === y.jTypeOf(H)) ? new k(I, H) : null)
        },
        imageByOrigin: function(H) {
            var G = this.additionalImages.filter(function(I) {
                return (I.origin === H)
            }) || [];
            return G[0]
        },
        imageByIndex: function(G) {
            return this.additionalImages[G]
        }
    };
    t = {
        version: "v5.0.1",
        start: function(J, H) {
            var I = null,
                G = [];
            y.$A((J ? [h(J)] : y.$A(document.byClass("MagicZoom")).concat(y.$A(document.byClass("MagicZoomPlus"))))).jEach((function(K) {
                if (h(K)) {
                    if (!i(K)) {
                        I = new j(K, H);
                        if (x && !I.option("autostart")) {
                            I.stop();
                            I = null
                        } else {
                            D.push(I);
                            G.push(I)
                        }
                    }
                }
            }).jBind(this));
            return J ? G[0] : G
        },
        stop: function(J) {
            var H, I, G;
            if (J) {
                (I = i(J)) && (I = D.splice(D.indexOf(I), 1)) && I[0].stop() && (delete I[0]);
                return
            }
            while (H = D.length) {
                I = D.splice(H - 1, 1);
                I[0].stop();
                delete I[0]
            }
        },
        refresh: function(G) {
            this.stop(G);
            return this.start(G)
        },
        update: function(L, K, J, H) {
            var I = i(L),
                G;
            if (I) {
                G = "element" === y.jTypeOf(K) ? I.imageByOrigin(K) : I.imageByURL(K, J);
                if (G) {
                    I.update(G)
                }
            }
        },
        switchTo: function(J, I) {
            var H = i(J),
                G;
            if (H) {
                switch (y.jTypeOf(I)) {
                    case "element":
                        G = H.imageByOrigin(I);
                        break;
                    case "number":
                        G = H.imageByIndex(I);
                        break;
                    default:
                }
                if (G) {
                    H.update(G)
                }
            }
        },
        prev: function(H) {
            var G;
            (G = i(H)) && G.update(G.getPrev())
        },
        next: function(H) {
            var G;
            (G = i(H)) && G.update(G.getNext())
        },
        zoomIn: function(H) {
            var G;
            (G = i(H)) && G.activate()
        },
        zoomOut: function(H) {
            var G;
            (G = i(H)) && G.deactivate()
        },
        expand: function(H) {
            var G;
            (G = i(H)) && G.expand()
        },
        close: function(H) {
            var G;
            (G = i(H)) && G.close()
        },
        registerCallback: function(G, H) {
            if (!p[G]) {
                p[G] = []
            }
            if ("function" == y.jTypeOf(H)) {
                p[G].push(H)
            }
        },
        running: function(G) {
            return !!i(G)
        }
    };
    h(document).jAddEvent("domready", function() {
        var H = window[B + "Options"] || {};
        d();
        F = y.$new("div", {
            "class": "magic-hidden-wrapper"
        }).jAppendTo(document.body);
        E = (y.jBrowser.mobile && window.matchMedia && window.matchMedia("(max-device-width: 767px), (max-device-height: 767px)").matches);
        if (y.jBrowser.mobile) {
            y.extend(o, l)
        }
        for (var G = 0; G < z.length; G++) {
            if (H[z[G]] && y.$F !== H[z[G]]) {
                t.registerCallback(z[G], H[z[G]])
            }
        }
        t.start();
        x = false
    });
    window.MagicZoomPlus = window.MagicZoomPlus || {};
    return t
})();