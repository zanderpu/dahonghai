$(function(){$(document.body).delegate(".screen_options .screen_option_item","click",function(e){var t=$(this),s=$(this).parents(".screen_options");"checkbox"==s.attr("type")?t.hasClass("active")?t.removeClass("active"):t.addClass("active"):($(s).find(".active").removeClass("active"),t.addClass("active"))})});
window.smartscroll=function(l,n){if(n&&!l.data("isBindScroll")){var c={posY:0,maxscroll:0};l.on({touchstart:function(l){var e,t=l.touches[0]||l,o=$(l.target);o.length&&(o.is(n)?e=o:0==(e=o.parents(n)).length&&(e=null),e&&(c.elScroll=e,c.posY=t.pageY,c.scrollY=e.scrollTop(),c.maxscroll=e[0].scrollHeight-e[0].clientHeight))},touchmove:function(){c.maxscroll<=0&&event.preventDefault();var l=c.elScroll,e=l.scrollTop(),t=(event.touches[0]||event).pageY-c.posY;0<t&&0==e?event.preventDefault():t<0&&e+1>=c.maxscroll&&event.preventDefault()},touchend:function(){c.maxscroll=0}}),l.data("isBindScroll",!0)}};
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.weui=t():e.weui=t()}(this,function(){return function(n){function i(e){if(a[e])return a[e].exports;var t=a[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}var a={};return i.m=n,i.c=a,i.p="",i(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(1)),o=i(n(7)),r=i(n(8)),u=i(n(9)),l=i(n(11)),s=i(n(13)),d=i(n(15)),f=i(n(17)),c=i(n(18)),p=i(n(19)),h=i(n(20)),v=n(24),m=i(n(30)),y=i(n(32));t.default={dialog:a.default,alert:o.default,confirm:r.default,toast:u.default,loading:l.default,actionSheet:s.default,topTips:d.default,searchBar:f.default,tab:c.default,form:p.default,uploader:h.default,picker:v.picker,datePicker:v.datePicker,gallery:m.default,slider:y.default},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(2)),l=i(n(6)),s=void 0;t.default=function(){function n(e){var t;t=e,u.default.noop,r.addClass("weui-animate-fade-out"),o.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){a.remove(),s=!1,t&&t()})}var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(s)return s;var e=u.default.os.android;i=u.default.extend({title:null,content:"",className:"",buttons:[{label:"确定",type:"primary",onClick:u.default.noop}],isAndroid:e},i);var a=(0,u.default)(u.default.render(l.default,i)),o=a.find(".weui-dialog"),r=a.find(".weui-mask");return(0,u.default)("body").append(a),r.addClass("weui-animate-fade-in"),o.addClass("weui-animate-fade-in"),a.on("click",".weui-dialog__btn",function(e){var t=(0,u.default)(this).index();i.buttons[t].onClick?!1!==i.buttons[t].onClick.call(this,e)&&n():n()}),(s=a[0]).hide=n,s},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n(3);var a=i(n(4)),r=i(n(5));(function(e){var t=this.os={},n=e.match(/(Android);?[\s\/]+([\d.]+)?/);n&&(t.android=!0,t.version=n[2])}).call(r.default,navigator.userAgent),(0,a.default)(r.default.fn,{append:function(t){return t instanceof HTMLElement||(t=t[0]),this.forEach(function(e){e.appendChild(t)}),this},remove:function(){return this.forEach(function(e){e.parentNode.removeChild(e)}),this},find:function(e){return(0,r.default)(e,this)},addClass:function(t){return this.forEach(function(e){e.classList.add(t)}),this},removeClass:function(t){return this.forEach(function(e){e.classList.remove(t)}),this},eq:function(e){return(0,r.default)(this[e])},show:function(){return this.forEach(function(e){e.style.display="block"}),this},hide:function(){return this.forEach(function(e){e.style.display="none"}),this},html:function(t){return this.forEach(function(e){e.innerHTML=t}),this},css:function(n){var e=this;return Object.keys(n).forEach(function(t){e.forEach(function(e){e.style[t]=n[t]})}),this},on:function(e,n,i){var a="string"==typeof n&&"function"==typeof i;return a||(i=n),this.forEach(function(t){e.split(" ").forEach(function(e){t.addEventListener(e,function(e){a?this.contains(e.target.closest(n))&&i.call(e.target,e):i.call(this,e)})})}),this},off:function(t,n,i){return"function"==typeof n&&(i=n,n=null),this.forEach(function(e){t.split(" ").forEach(function(t){"string"==typeof n?e.querySelectorAll(n).forEach(function(e){e.removeEventListener(t,i)}):e.removeEventListener(t,i)})}),this},index:function(){var e=this[0],t=e.parentNode;return Array.prototype.indexOf.call(t.children,e)},offAll:function(){var i=this;return this.forEach(function(e,t){var n=e.cloneNode(!0);e.parentNode.replaceChild(n,e),i[t]=n}),this},val:function(){var t=arguments;return arguments.length?(this.forEach(function(e){e.value=t[0]}),this):this[0].value},attr:function(){var n,e,t=arguments,i=this;if("object"==o(arguments[0])){var a=(n=t[0],e=i,Object.keys(n).forEach(function(t){e.forEach(function(e){e.setAttribute(t,n[t])})}),{v:i});if("object"===(void 0===a?"undefined":o(a)))return a.v}return"string"==typeof arguments[0]&&arguments.length<2?this[0].getAttribute(arguments[0]):(this.forEach(function(e){e.setAttribute(t[0],t[1])}),this)}}),(0,a.default)(r.default,{extend:a.default,noop:function(){},render:function(e,t){var n="var p=[];with(this){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');";return new Function(n).apply(t)},getStyle:function(e,t){var n,i,a,o,r=(e.ownerDocument||document).defaultView;return r&&r.getComputedStyle?(t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),r.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle?(t=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),n=e.currentStyle[t],/^\d+(em|pt|%|ex)?$/i.test(n)?(i=n,a=e.style.left,o=e.runtimeStyle.left,e.runtimeStyle.left=e.currentStyle.left,e.style.left=i||0,i=e.style.pixelLeft+"px",e.style.left=a,e.runtimeStyle.left=o,i):n):void 0}}),t.default=r.default,e.exports=t.default},function(e,t){var n;"function"!=typeof(n=window.Element.prototype).matches&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=0;t[n]&&t[n]!==this;)++n;return Boolean(t[n])}),"function"!=typeof n.closest&&(n.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})},function(e,t){"use strict";var l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),o=1;o<arguments.length;o++){for(var r in n=Object(arguments[o]))l.call(n,r)&&(a[r]=n[r]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(n);for(var u=0;u<i.length;u++)s.call(n,i[u])&&(a[i[u]]=n[i[u]])}}return a}},function(e,t,n){var i,a;a=function(i,a,o){function r(e,t,n){return n=Object.create(r.fn),e&&n.push.apply(n,e[a]?[e]:""+e===e?/</.test(e)?((t=i.createElement(t||a)).innerHTML=e,t.children):t?(t=r(t)[0])?t[o](e):n:i[o](e):"function"==typeof e?i.readyState[7]?e():i[a]("DOMContentLoaded",e):e),n}return r.fn=[],r.one=function(e,t){return r(e,t)[0]||null},r}(document,"addEventListener","querySelectorAll"),void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)},function(e,t){e.exports='<div class="<%=className%>"> <div class=weui-mask></div> <div class="weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class="weui-dialog__btn weui-dialog__btn_<%=buttons[i][\'type\']%>"><%=buttons[i][\'label\']%></a> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(n(2)),r=i(n(1));t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.default.noop,n=arguments[2];return"object"===(void 0===t?"undefined":a(t))&&(n=t,t=o.default.noop),n=o.default.extend({content:e,buttons:[{label:"确定",type:"primary",onClick:t}]},n),(0,r.default)(n)},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(n(2)),r=i(n(1));t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.default.noop,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:o.default.noop,i=arguments[3];return"object"===(void 0===t?"undefined":a(t))?(i=t,t=o.default.noop):"object"===(void 0===n?"undefined":a(n))&&(i=n,n=o.default.noop),i=o.default.extend({content:e,buttons:[{label:"取消",type:"default",onClick:n},{label:"确定",type:"primary",onClick:t}]},i),(0,r.default)(i)},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(2)),r=i(n(10)),u=void 0;t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(u)return u;"number"==typeof t&&(t={duration:t}),"function"==typeof t&&(t={callback:t}),t=o.default.extend({content:e,duration:3e3,callback:o.default.noop,className:""},t);var n=(0,o.default)(o.default.render(r.default,t)),i=n.find(".weui-toast"),a=n.find(".weui-mask");return(0,o.default)("body").append(n),i.addClass("weui-animate-fade-in"),a.addClass("weui-animate-fade-in"),setTimeout(function(){a.addClass("weui-animate-fade-out"),i.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){n.remove(),u=!1,t.callback()})},t.duration),u=n[0],n[0]},e.exports=t.default},function(e,t){e.exports='<div class="<%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-icon_toast weui-icon-success-no-circle"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(2)),r=i(n(12)),u=void 0;t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(u)return u;t=o.default.extend({content:e,className:""},t);var n=(0,o.default)(o.default.render(r.default,t)),i=n.find(".weui-toast"),a=n.find(".weui-mask");return(0,o.default)("body").append(n),i.addClass("weui-animate-fade-in"),a.addClass("weui-animate-fade-in"),(u=n[0]).hide=function(e){var t;t=e,o.default.noop,a.addClass("weui-animate-fade-out"),i.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){n.remove(),u=!1,t&&t()})},u},e.exports=t.default},function(e,t){e.exports='<div class="weui-loading_toast <%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-loading weui-icon_toast"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(2)),d=i(n(14)),f=void 0;t.default=function(){function n(e){var t;t=e,s.default.noop,u.addClass(o.isAndroid?"weui-animate-fade-out":"weui-animate-slide-down"),l.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){r.remove(),f=!1,o.onClose(),t&&t()})}var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(f)return f;var e=s.default.os.android;o=s.default.extend({menus:i,actions:a,className:"",isAndroid:e,onClose:s.default.noop},o);var r=(0,s.default)(s.default.render(d.default,o)),u=r.find(".weui-actionsheet"),l=r.find(".weui-mask");return(0,s.default)("body").append(r),s.default.getStyle(u[0],"transform"),u.addClass(o.isAndroid?"weui-animate-fade-in":"weui-animate-slide-up"),l.addClass("weui-animate-fade-in").on("click",function(){n()}),r.find(".weui-actionsheet__menu").on("click",".weui-actionsheet__cell",function(e){var t=(0,s.default)(this).index();i[t].onClick.call(this,e),n()}),r.find(".weui-actionsheet__action").on("click",".weui-actionsheet__cell",function(e){var t=(0,s.default)(this).index();a[t].onClick.call(this,e),n()}),(f=r[0]).hide=n,f},e.exports=t.default},function(e,t){e.exports='<div class="<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(2)),o=i(n(16)),r=null;t.default=function(e){function t(e){var t;t=e,a.default.noop,i.remove(),t&&t(),n.callback(),r=null}var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};"number"==typeof n&&(n={duration:n}),"function"==typeof n&&(n={callback:n}),n=a.default.extend({content:e,duration:3e3,callback:a.default.noop,className:""},n);var i=(0,a.default)(a.default.render(o.default,n));return(0,a.default)("body").append(i),r&&(clearTimeout(r.timeout),r.hide()),(r={hide:t}).timeout=setTimeout(t,n.duration),i[0].hide=t,i[0]},e.exports=t.default},function(e,t){e.exports='<div class="weui-toptips weui-toptips_warn <%= className %>" style=display:block><%= content %></div> '},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=n(2),u=(i=a)&&i.__esModule?i:{default:i};t.default=function(e){var t=(0,u.default)(e);return t.forEach(function(e){function t(){a.val(""),n.removeClass("weui-search-bar_focusing")}var n=(0,u.default)(e),i=n.find(".weui-search-bar__label"),a=n.find(".weui-search-bar__input"),o=n.find(".weui-icon-clear"),r=n.find(".weui-search-bar__cancel-btn");i.on("click",function(){n.addClass("weui-search-bar_focusing"),a[0].focus()}),a.on("blur",function(){this.value.length||t()}),o.on("click",function(){a.val(""),a[0].focus()}),r.on("click",function(){t(),a[0].blur()})}),t},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=n(2),o=(i=a)&&i.__esModule?i:{default:i};t.default=function(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=(0,o.default)(e);return a=o.default.extend({defaultIndex:0,onChange:o.default.noop},a),t.forEach(function(e){var t=(0,o.default)(e),n=t.find(".weui-navbar__item, .weui-tabbar__item"),i=t.find(".weui-tab__content");n.eq(a.defaultIndex).addClass("weui-bar__item_on"),i.eq(a.defaultIndex).show(),n.on("click",function(){var e=(0,o.default)(this),t=e.index();n.removeClass("weui-bar__item_on"),e.addClass("weui-bar__item_on"),i.hide(),i.eq(t).show(),a.onChange.call(this,t)})}),this},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return e&&e.classList?e.classList.contains("weui-cell")?e:o(e.parentNode):null}function d(e,i,t){var a=e[0],n=e.val();if("INPUT"==a.tagName||"TEXTAREA"==a.tagName){var o=a.getAttribute("pattern")||"";if("radio"==a.type){for(var r=i.find('input[type="radio"][name="'+a.name+'"]'),u=0,l=r.length;u<l;++u)if(r[u].checked)return null;return"empty"}if("checkbox"!=a.type){if(o){if(/^REG_/.test(o)){if(!t)throw"RegExp "+o+" is empty.";if(!t[o=o.replace(/^REG_/,"")])throw"RegExp "+o+" has not found.";o=t[o]}return new RegExp(o).test(n)?null:e.val().length?"notMatch":"empty"}return e.val().length?null:"empty"}if(!o)return a.checked?null:"empty";var s=function(){var e=i.find('input[type="checkbox"][name="'+a.name+'"]'),t=o.replace(/[{\s}]/g,"").split(","),n=0;if(2!=t.length)throw a.outerHTML+" regexp is wrong.";return e.forEach(function(e){e.checked&&++n}),""===t[1]?n>=parseInt(t[0])?{v:null}:{v:0==n?"empty":"notMatch"}:parseInt(t[0])<=n&&n<=parseInt(t[1])?{v:null}:{v:0==n?"empty":"notMatch"}}();if("object"===(void 0===s?"undefined":c(s)))return s.v}else if(n.length)return null;return"empty"}function f(e){if(e){var t=(0,p.default)(e.ele),n=e.msg,i=t.attr(n+"Tips")||t.attr("tips")||t.attr("placeholder");if(i&&(0,r.default)(i),"checkbox"==e.ele.type||"radio"==e.ele.type)return;var a=o(e.ele);a&&a.classList.add("weui-cell_warn")}}function a(e){var t=o(e);t&&t.classList.remove("weui-cell_warn")}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=i(n(2)),r=i(n(15));t.default={showErrorTips:f,hideErrorTips:a,validate:function(e){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:p.default.noop,s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return(0,p.default)(e).forEach(function(e){var t=(0,p.default)(e),n=t.find("[required]");"function"!=typeof l&&(l=f);for(var i=0,a=n.length;i<a;++i){var o=n.eq(i),r=d(o,t,s.regexp),u={ele:o[0],msg:r};if(r)return void(l(u)||f(u))}l(null)}),this},checkIfBlur:function(e){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return(0,p.default)(e).forEach(function(e){var n=(0,p.default)(e);n.find("[required]").on("blur",function(){if("checkbox"!=this.type&&"radio"!=this.type){var e=(0,p.default)(this);if(!(e.val().length<1)){var t=d(e,n,i.regexp);t&&f({ele:e[0],msg:t})}}}).on("focus",function(){a(this)})}),this}},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var p=i(n(2)),h=i(n(21)),v=n(22),m=i(n(23)),y=0;t.default=function(e,n){function i(e,t){var n=e.find('[data-id="'+t+'"]'),i=n.find(".weui-uploader__file-content");return i.length||(i=(0,p.default)('<div class="weui-uploader__file-content"></div>'),n.append(i)),n.addClass("weui-uploader__file_status"),i}function a(e,t){e.find('[data-id="'+t+'"]').removeClass("weui-uploader__file_status").find(".weui-uploader__file-content").remove()}function o(e){e.url=c.createObjectURL(e),e.status="ready",e.upload=function(){(0,m.default)(p.default.extend({$uploader:f,file:e},n))},e.stop=function(){this.xhr.abort()},n.onQueued(e),n.auto&&e.upload()}var r,u,l,s,t,d,f=(0,p.default)(e),c=window.URL||window.webkitURL||window.mozURL;!1!==(n=p.default.extend({url:"",auto:!0,type:"file",fileVal:"file",xhrFields:{},onBeforeQueued:p.default.noop,onQueued:p.default.noop,onBeforeSend:p.default.noop,onSuccess:p.default.noop,onProgress:p.default.noop,onError:p.default.noop},n)).compress&&(n.compress=p.default.extend({width:1600,height:1600,quality:.8},n.compress)),n.onBeforeQueued&&(d=n.onBeforeQueued,n.onBeforeQueued=function(e,t){var n=d.call(e,t);if(!1===n)return!1;if(!0!==n){var i=(0,p.default)(p.default.render(h.default,{id:e.id}));f.find(".weui-uploader__files").append(i)}}),n.onQueued&&(t=n.onQueued,n.onQueued=function(e){t.call(e)||(f.find('[data-id="'+e.id+'"]').css({backgroundImage:'url("'+(e.base64||e.url)+'")'}),n.auto||a(f,e.id))}),n.onBeforeSend&&(s=n.onBeforeSend,n.onBeforeSend=function(e,t,n){if(!1===s.call(e,t,n))return!1}),n.onSuccess&&(l=n.onSuccess,n.onSuccess=function(e,t){e.status="success",l.call(e,t)||a(f,e.id)}),n.onProgress&&(u=n.onProgress,n.onProgress=function(e,t){u.call(e,t)||i(f,e.id).html(t+"%")}),n.onError&&(r=n.onError,n.onError=function(e,t){e.status="fail",r.call(e,t)||i(f,e.id).html('<i class="weui-icon-warn"></i>')}),f.find('input[type="file"]').on("change",function(e){var t=e.target.files;0!==t.length&&(!1===n.compress&&"file"==n.type?Array.prototype.forEach.call(t,function(e){e.id=++y,!1!==n.onBeforeQueued(e,t)&&o(e)}):Array.prototype.forEach.call(t,function(e){e.id=++y,!1!==n.onBeforeQueued(e,t)&&(0,v.compress)(e,n,function(e){e&&o(e)})}),this.value="")})},e.exports=t.default},function(e,t){e.exports='<li class="weui-uploader__file weui-uploader__file_status" data-id="<%= id %>"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> '},function(e,t){"use strict";function y(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default={compress:function(h,v,m){var e=new FileReader;e.onload=function(e){if(!1===v.compress)return h.base64=e.target.result,void m(h);var p=new Image;p.onload=function(){var e,t,n,i,a=function(e){var t,n=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=n;var a=i.getContext("2d");a.drawImage(e,0,0);try{t=a.getImageData(0,0,1,n).data}catch(e){return 1}for(var o=0,r=n,u=n;o<u;)0===t[4*(u-1)+3]?r=u:o=u,u=r+o>>1;var l=u/n;return 0===l?1:l}(p),o=function(e){var t=new DataView(e);if(65496!=t.getUint16(0,!1))return-2;for(var n=t.byteLength,i=2;i<n;){var a=t.getUint16(i,!1);if(i+=2,65505==a){if(1165519206!=t.getUint32(i+=2,!1))return-1;var o=18761==t.getUint16(i+=6,!1);i+=t.getUint32(i+4,o);var r=t.getUint16(i,o);i+=2;for(var u=0;u<r;u++)if(274==t.getUint16(i+12*u,o))return t.getUint16(i+12*u+8,o)}else{if(65280!=(65280&a))break;i+=t.getUint16(i,!1)}}return-1}(y(p.src)),r=document.createElement("canvas"),u=r.getContext("2d"),l=v.compress.width,s=v.compress.height,d=p.width,f=p.height;if(d<f&&s<f?(d=parseInt(s*p.width/p.height),f=s):f<=d&&l<d&&(f=parseInt(l*p.height/p.width),d=l),r.width=d,r.height=f,0<o&&function(e,t,n){var i=e.width,a=e.height;switch(4<n&&(e.width=a,e.height=i),n){case 2:t.translate(i,0),t.scale(-1,1);break;case 3:t.translate(i,a),t.rotate(Math.PI);break;case 4:t.translate(0,a),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-a);break;case 7:t.rotate(.5*Math.PI),t.translate(i,-a),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-i,0)}}(r,u,o),u.drawImage(p,0,0,d,f/a),e=/image\/jpeg/.test(h.type)||/image\/jpg/.test(h.type)?r.toDataURL("image/jpeg",v.compress.quality):r.toDataURL(h.type),"file"==v.type)if(/;base64,null/.test(e)||/;base64,$/.test(e))m(h);else{var c=(n=(t=e).split(",")[0].split(":")[1].split(";")[0],i=y(t),new Blob([i],{type:n}));c.id=h.id,c.name=h.name,c.lastModified=h.lastModified,c.lastModifiedDate=h.lastModifiedDate,m(c)}else/;base64,null/.test(e)||/;base64,$/.test(e)?(v.onError(h,new Error("Compress fail, dataURL is "+e+".")),m()):(h.base64=e,m(h))},p.src=e.target.result},e.readAsDataURL(h)}},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.url,n=e.file,i=e.fileVal,a=e.onBeforeSend,o=e.onProgress,r=e.onError,u=e.onSuccess,l=e.xhrFields,s=n.name,d=n.type,f=n.lastModifiedDate,c={name:s,type:d,size:"file"==e.type?n.size:n.base64.length,lastModifiedDate:f},p={};if(!1!==a(n,c,p)){n.status="progress",o(n,0);var h=new FormData,v=new XMLHttpRequest;n.xhr=v,Object.keys(c).forEach(function(e){h.append(e,c[e])}),"file"==e.type?h.append(i,n,s):h.append(i,n.base64),v.onreadystatechange=function(){if(4==v.readyState)if(200==v.status)try{var e=JSON.parse(v.responseText);u(n,e)}catch(e){r(n,e)}else r(n,new Error("XMLHttpRequest response status is "+v.status))},v.upload.addEventListener("progress",function(e){if(0!=e.total){var t=100*Math.ceil(e.loaded/e.total);o(n,t)}},!1),v.open("POST",t),Object.keys(l).forEach(function(e){v[e]=l[e]}),Object.keys(p).forEach(function(e){v.setRequestHeader(e,p[e])}),v.send(h)}},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function p(e){"object"!=(void 0===e?"undefined":h(e))&&(e={label:e,value:e}),v.default.extend(this,e)}function f(){function e(e){var t;t=e,v.default.noop,d.find(".weui-mask").addClass("weui-animate-fade-out"),d.find(".weui-picker").addClass("weui-animate-slide-down").on("animationend webkitAnimationEnd",function(){d.remove(),g=!1,r.onClose(),t&&t()})}function o(e,n){if(void 0===s[n]&&r.defaultValue&&void 0!==r.defaultValue[n]){var t=r.defaultValue[n],i=0,a=e.length;if("object"==h(e[i]))for(;i<a&&t!=e[i].value;++i);else for(;i<a&&t!=e[i];++i);i<a&&(s[n]=i)}d.find(".weui-picker__group").eq(n).scroll({items:e,temp:s[n],onChange:function(e,t){if(l[n]=e?new p(e):null,s[n]=t,u)l.length==f&&r.onChange(l);else if(e.children&&0<e.children.length)d.find(".weui-picker__group").eq(n+1).show(),!u&&o(e.children,n+1);else{d.find(".weui-picker__group").forEach(function(e,t){n<t&&(0,v.default)(e).hide()}),l.splice(n+1),r.onChange(l)}},onConfirm:r.onConfirm})}if(g)return g;var t=arguments[arguments.length-1],r=v.default.extend({id:"default",className:"",container:"body",onChange:v.default.noop,onConfirm:v.default.noop,onClose:v.default.noop},t),n=void 0,u=!1;if(2<arguments.length){var i=0;for(n=[];i<arguments.length-1;)n.push(arguments[i++]);u=!0}else n=arguments[0];_[r.id]=_[r.id]||[];for(var l=[],s=_[r.id],d=(0,v.default)(v.default.render(y.default,r)),f=t.depth||(u?n.length:m.depthOf(n[0])),a="",c=f;c--;)a+=w.default;return d.find(".weui-picker__bd").html(a),(0,v.default)(r.container).append(d),v.default.getStyle(d[0],"transform"),d.find(".weui-mask").addClass("weui-animate-fade-in"),d.find(".weui-picker").addClass("weui-animate-slide-up"),u?n.forEach(function(e,t){o(e,t)}):o(n,0),d.on("click",".weui-mask",function(){e()}).on("click",".weui-picker__action",function(){e()}).on("click","#weui-picker-confirm",function(){r.onConfirm(l)}),(g=d[0]).hide=e,g}Object.defineProperty(t,"__esModule",{value:!0});var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v=i(n(2)),c=i(n(25));n(26);var m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(27)),y=i(n(28)),w=i(n(29));p.prototype.toString=function(){return this.value},p.prototype.valueOf=function(){return this.value};var g=void 0,_={};t.default={picker:f,datePicker:function(e){var t=v.default.extend({id:"datePicker",onChange:v.default.noop,onConfirm:v.default.noop,start:2e3,end:2030,cron:"* * *"},e);"number"==typeof t.start?t.start=new Date(t.start+"/01/01"):"string"==typeof t.start&&(t.start=new Date(t.start.replace(/-/g,"/"))),"number"==typeof t.end?t.end=new Date(t.end+"/12/31"):"string"==typeof t.end&&(t.end=new Date(t.end.replace(/-/g,"/")));var n=function(e,t,n){for(var i=0,a=e.length;i<a;i++){var o=e[i];if(o[t]==n)return o}},i=[],a=c.default.parse(t.cron,t.start,t.end),o=void 0;do{var r=(o=a.next()).value.getFullYear(),u=o.value.getMonth()+1,l=o.value.getDate(),s=n(i,"value",r);s||(s={label:r+"年",value:r,children:[]},i.push(s));var d=n(s.children,"value",u);d||(d={label:u+"月",value:u,children:[]},s.children.push(d)),d.children.push({label:l+"日",value:l})}while(!o.done);return f(i,t)}},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),d=/^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g,o=[[1,31],[1,12],[0,6]],r=function(){function i(e,t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,i),this._dates=e[0],this._months=e[1],this._days=e[2],this._start=t,this._end=n,this._pointer=t}return n(i,[{key:"_findNext",value:function(){for(var e=void 0;;){if(this._end.getTime()-this._pointer.getTime()<0)throw new Error("out of range, end is "+this._end+", current is "+this._pointer);var t=this._pointer.getMonth(),n=this._pointer.getDate(),i=this._pointer.getDay();if(-1!==this._months.indexOf(t+1))if(-1!==this._dates.indexOf(n)){if(-1!==this._days.indexOf(i)){e=new Date(this._pointer);break}this._pointer.setDate(n+1)}else this._pointer.setDate(n+1);else this._pointer.setMonth(t+1),this._pointer.setDate(1)}return e}},{key:"next",value:function(){var e=this._findNext();return this._pointer.setDate(this._pointer.getDate()+1),{value:e,done:!this.hasNext()}}},{key:"hasNext",value:function(){try{return this._findNext(),!0}catch(e){return!1}}}]),i}();t.default={parse:function(e,t,n){var i=e.replace(/^\s\s*|\s\s*$/g,"").split(/\s+/),a=[];return i.forEach(function(e,t){var n=o[t];a.push(function(e,t){for(var a=t[0],o=t[1],r=[],u=void 0,n=(e=e.replace(/\*/g,a+"-"+o)).split(","),i=0,l=n.length;i<l;i++){var s=n[i];s.match(d)&&s.replace(d,function(e,t,n,i){for(i=parseInt(i)||1,t=Math.min(Math.max(a,~~Math.abs(t)),o),n=n?Math.min(o,~~Math.abs(n)):t,u=t;r.push(u),(u+=i)<=n;);})}return r}(e,n))}),new r(a,t,n)}},e.exports=t.default},function(e,t,n){"use strict";var i,b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(2),k=(i=a)&&i.__esModule?i:{default:i},x=function(e,t){return e.css({"-webkit-transition":"all "+t+"s",transition:"all "+t+"s"})},C=function(e,t){return e.css({"-webkit-transform":"translate3d(0, "+t+"px, 0)",transform:"translate3d(0, "+t+"px, 0)"})},M=function(e){for(var t=Math.floor(e.length/2),n=0;e[t]&&e[t].disabled;)if(t=++t%e.length,++n>e.length)throw new Error("No selectable item.");return t};k.default.fn.scroll=function(e){function t(e){c=e,h=+new Date}function n(e){var t=(p=e)-c;x(f,0),C(f,v+t),h=+new Date,m.push({time:h,y:p}),40<m.length&&m.shift()}function i(e){if(c){var t=(new Date).getTime(),n=y-d.bodyHeight/2;if(p=e,100<t-h)_(10<Math.abs(p-c)?p-c:n-p);else if(10<Math.abs(p-c)){for(var i=m.length-1,a=i,o=i;0<o&&h-m[o].time<100;o--)a=o;if(a!==i){var r=m[i],u=m[a],l=r.time-u.time,s=r.y-u.y;_(150*(s/l)+(p-c))}else _(0)}else _(n-p);c=null}}var s=this,d=k.default.extend({items:[],scrollable:".weui-picker__content",offset:3,rowHeight:34,onChange:k.default.noop,temp:null,bodyHeight:238},e),a=d.items.map(function(e){return'<div class="weui-picker__item'+(e.disabled?" weui-picker__item_disabled":"")+'">'+("object"==(void 0===e?"undefined":b(e))?e.label:e)+"</div>"}).join(""),o=(0,k.default)(this);o.find(".weui-picker__content").html(a);var r,u,l,f=o.find(d.scrollable),c=void 0,p=void 0,h=void 0,v=void 0,m=[],y=window.innerHeight;if(null!==d.temp&&d.temp<d.items.length){var w=d.temp;d.onChange.call(this,d.items[w],w),v=(d.offset-w)*d.rowHeight}else{var g=M(d.items);d.onChange.call(this,d.items[g],g),r=d.offset,u=d.rowHeight,l=d.items,v=(r-M(l))*u}C(f,v);var _=function(e){v+=e,v=Math.round(v/d.rowHeight)*d.rowHeight;var t,n,i,a,o,r=(a=d.offset,o=d.rowHeight,a*o),u=(t=d.offset,n=d.rowHeight,i=d.items.length,-n*(i-t-1));r<v&&(v=r),v<u&&(v=u);for(var l=d.offset-v/d.rowHeight;d.items[l]&&d.items[l].disabled;)0<e?++l:--l;v=(d.offset-l)*d.rowHeight,x(f,.3),C(f,v),d.onChange.call(s,d.items[l],l)};f=o.offAll().on("touchstart",function(e){t(e.changedTouches[0].pageY)}).on("touchmove",function(e){n(e.changedTouches[0].pageY),e.preventDefault()}).on("touchend",function(e){i(e.changedTouches[0].pageY)}).find(d.scrollable),"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch||o.on("mousedown",function(e){t(e.pageY),e.stopPropagation(),e.preventDefault()}).on("mousemove",function(e){c&&(n(e.pageY),e.stopPropagation(),e.preventDefault())}).on("mouseup mouseleave",function(e){i(e.pageY),e.stopPropagation(),e.preventDefault()})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.depthOf=function e(t){var n=1;return t.children&&t.children[0]&&(n=e(t.children[0])+1),n}},function(e,t){e.exports='<div class="<%= className %>"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div class=weui-picker__bd></div> </div> </div> '},function(e,t){e.exports="<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(2)),o=i(n(31)),r=void 0;t.default=function(e){function t(e){var t;t=e,a.default.noop,i.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){i.remove(),r=!1,t&&t()})}var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(r)return r;n=a.default.extend({className:"",onDelete:a.default.noop},n);var i=(0,a.default)(a.default.render(o.default,a.default.extend({url:e},n)));return(0,a.default)("body").append(i),i.find(".weui-gallery__img").on("click",function(){t()}),i.find(".weui-gallery__del").on("click",function(){n.onDelete.call(this,e)}),i.show().addClass("weui-animate-fade-in"),(r=i[0]).hide=t,r},e.exports=t.default},function(e,t){e.exports='<div class="weui-gallery <%= className %>"> <span class=weui-gallery__img style="background-image:url(<%= url %>)"></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class="weui-icon-delete weui-icon_gallery-delete"></i> </a> </div> </div> '},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=n(2),p=(i=a)&&i.__esModule?i:{default:i};t.default=function(e){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=(0,p.default)(e);if(void 0!==(c=p.default.extend({step:void 0,defaultValue:0,onChange:p.default.noop},c)).step&&(c.step=parseFloat(c.step),!c.step||c.step<0))throw new Error("Slider step must be a positive number.");if(void 0!==c.defaultValue&&c.defaultValue<0||100<c.defaultValue)throw new Error("Slider defaultValue must be >= 0 and <= 100.");return t.forEach(function(i){function t(){var e=p.default.getStyle(r[0],"left");return/%/.test(e)?u*parseFloat(e)/100:parseFloat(e)}function n(e){var t,n=void 0;c.step&&(e=Math.round(e/f)*f),t=100*(n=(n=s+e)<0?0:u<n?u:n)/u,o.css({width:t+"%"}),r.css({left:t+"%"}),c.onChange.call(i,t)}var e=(0,p.default)(i),a=e.find(".weui-slider__inner"),o=e.find(".weui-slider__track"),r=e.find(".weui-slider__handler"),u=parseInt(p.default.getStyle(a[0],"width")),l=a[0].offsetLeft,s=0,d=0,f=void 0;c.step&&(f=u*c.step/100),c.defaultValue&&n(u*c.defaultValue/100),e.on("click",function(e){e.preventDefault(),s=t(),n(e.pageX-l-s)}),r.on("touchstart",function(e){s=t(),d=e.changedTouches[0].clientX}).on("touchmove",function(e){e.preventDefault(),n(e.changedTouches[0].clientX-d)})}),this},e.exports=t.default}])});