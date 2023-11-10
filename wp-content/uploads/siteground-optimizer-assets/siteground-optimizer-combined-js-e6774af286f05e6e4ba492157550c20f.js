fbq('init', '153194283504427', {}, {
    "agent": "woocommerce-8.2.2-3.1.3"
});

				fbq( 'track', 'PageView', {
    "source": "woocommerce",
    "version": "8.2.2",
    "pluginVersion": "3.1.3"
} );

				document.addEventListener( 'DOMContentLoaded', function() {
					jQuery && jQuery( function( $ ) {
						// Insert placeholder for events injected when a product is added to the cart through AJAX.
						$( document.body ).append( '<div class=\"wc-facebook-pixel-event-placeholder\"></div>' );
					} );
				}, false );;
function showCheckoutWindow(e) {
      e.preventDefault();

      const url = document.getElementById('embedded-checkout-modal-checkout-button').getAttribute('data-url');
      const title = 'Square Online Checkout';

      // Some platforms embed in an iframe, so we want to top window to calculate sizes correctly
      const topWindow = window.top ? window.top : window;

      // Fixes dual-screen position                                Most browsers          Firefox
      const dualScreenLeft = topWindow.screenLeft !==  undefined ? topWindow.screenLeft : topWindow.screenX;
      const dualScreenTop = topWindow.screenTop !==  undefined   ? topWindow.screenTop  : topWindow.screenY;

      const width = topWindow.innerWidth ? topWindow.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      const height = topWindow.innerHeight ? topWindow.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      const h = height * .75;
      const w = 500;

      const systemZoom = width / topWindow.screen.availWidth;
      const left = (width - w) / 2 / systemZoom + dualScreenLeft;
      const top = (height - h) / 2 / systemZoom + dualScreenTop;
      const newWindow = window.open(url, title, `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`);

      if (window.focus) newWindow.focus();
    }

    // This overrides the default checkout button click handler to show the embed modal
    // instead of opening a new tab with the given link url
    document.getElementById('embedded-checkout-modal-checkout-button').addEventListener('click', function (e) {
      showCheckoutWindow(e);
    });;
(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();;
/*!
 * accounting.js v0.4.2
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */
!function(n,r){var e={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},t=Array.prototype.map,o=Array.isArray,a=Object.prototype.toString;function i(n){return!!(""===n||n&&n.charCodeAt&&n.substr)}function u(n){return o?o(n):"[object Array]"===a.call(n)}function c(n){return n&&"[object Object]"===a.call(n)}function s(n,r){var e;for(e in n=n||{},r=r||{})r.hasOwnProperty(e)&&null==n[e]&&(n[e]=r[e]);return n}function f(n,r,e){var o,a,i=[];if(!n)return i;if(t&&n.map===t)return n.map(r,e);for(o=0,a=n.length;o<a;o++)i[o]=r.call(e,n[o],o,n);return i}function p(n,r){return n=Math.round(Math.abs(n)),isNaN(n)?r:n}function l(n){var r=e.settings.currency.format;return"function"==typeof n&&(n=n()),i(n)&&n.match("%v")?{pos:n,neg:n.replace("-","").replace("%v","-%v"),zero:n}:n&&n.pos&&n.pos.match("%v")?n:i(r)?e.settings.currency.format={pos:r,neg:r.replace("%v","-%v"),zero:r}:r}var m,d=e.unformat=e.parse=function(n,r){if(u(n))return f(n,function(n){return d(n,r)});if("number"==typeof(n=n||0))return n;r=r||e.settings.number.decimal;var t=new RegExp("[^0-9-"+r+"]",["g"]),o=parseFloat((""+n).replace(/\((.*)\)/,"-$1").replace(t,"").replace(r,"."));return isNaN(o)?0:o},g=e.toFixed=function(n,r){r=p(r,e.settings.number.precision);var t=Math.pow(10,r);return(Math.round(e.unformat(n)*t)/t).toFixed(r)},h=e.formatNumber=e.format=function(n,r,t,o){if(u(n))return f(n,function(n){return h(n,r,t,o)});n=d(n);var a=s(c(r)?r:{precision:r,thousand:t,decimal:o},e.settings.number),i=p(a.precision),l=n<0?"-":"",m=parseInt(g(Math.abs(n||0),i),10)+"",y=m.length>3?m.length%3:0;return l+(y?m.substr(0,y)+a.thousand:"")+m.substr(y).replace(/(\d{3})(?=\d)/g,"$1"+a.thousand)+(i?a.decimal+g(Math.abs(n),i).split(".")[1]:"")},y=e.formatMoney=function(n,r,t,o,a,i){if(u(n))return f(n,function(n){return y(n,r,t,o,a,i)});n=d(n);var m=s(c(r)?r:{symbol:r,precision:t,thousand:o,decimal:a,format:i},e.settings.currency),g=l(m.format);return(n>0?g.pos:n<0?g.neg:g.zero).replace("%s",m.symbol).replace("%v",h(Math.abs(n),p(m.precision),m.thousand,m.decimal))};e.formatColumn=function(n,r,t,o,a,m){if(!n)return[];var g=s(c(r)?r:{symbol:r,precision:t,thousand:o,decimal:a,format:m},e.settings.currency),y=l(g.format),b=y.pos.indexOf("%s")<y.pos.indexOf("%v"),v=0;return f(f(n,function(n,r){if(u(n))return e.formatColumn(n,g);var t=((n=d(n))>0?y.pos:n<0?y.neg:y.zero).replace("%s",g.symbol).replace("%v",h(Math.abs(n),p(g.precision),g.thousand,g.decimal));return t.length>v&&(v=t.length),t}),function(n,r){return i(n)&&n.length<v?b?n.replace(g.symbol,g.symbol+new Array(v-n.length+1).join(" ")):new Array(v-n.length+1).join(" ")+n:n})},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=e),exports.accounting=e):"function"==typeof define&&define.amd?define([],function(){return e}):(e.noConflict=(m=n.accounting,function(){return n.accounting=m,e.noConflict=void 0,e}),n.accounting=e)}(this);;
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(e){e.fn._fadeIn=e.fn.fadeIn;var t=e.noop||function(){},o=/MSIE/.test(navigator.userAgent),n=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),i=(document.documentMode,"function"==typeof document.createElement("div").style.setExpression&&document.createElement("div").style.setExpression);e.blockUI=function(e){d(window,e)},e.unblockUI=function(e){a(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.on("mouseover",function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).on("mouseout",function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),this;var o=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var t=e(this);o.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,d(this,t)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){a(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var s=null,l=[];function d(d,c){var u,b,h=d==window,k=c&&c.message!==undefined?c.message:undefined;if(!(c=e.extend({},e.blockUI.defaults,c||{})).ignoreIfBlocked||!e(d).data("blockUI.isBlocked")){if(c.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,c.overlayCSS||{}),u=e.extend({},e.blockUI.defaults.css,c.css||{}),c.onOverlayClick&&(c.overlayCSS.cursor="pointer"),b=e.extend({},e.blockUI.defaults.themedCSS,c.themedCSS||{}),k=k===undefined?c.message:k,h&&s&&a(window,{fadeOut:0}),k&&"string"!=typeof k&&(k.parentNode||k.jquery)){var y=k.jquery?k[0]:k,m={};e(d).data("blockUI.history",m),m.el=y,m.parent=y.parentNode,m.display=y.style.display,m.position=y.style.position,m.parent&&m.parent.removeChild(y)}e(d).data("blockUI.onUnblock",c.onUnblock);var g,v,I,w,U=c.baseZ;g=o||c.forceIframe?e('<iframe class="blockUI" style="z-index:'+U+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+c.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),v=c.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+U+++';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+U+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),c.theme&&h?(w='<div class="blockUI '+c.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(U+10)+';display:none;position:fixed">',c.title&&(w+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(c.title||"&nbsp;")+"</div>"),w+='<div class="ui-widget-content ui-dialog-content"></div>',w+="</div>"):c.theme?(w='<div class="blockUI '+c.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(U+10)+';display:none;position:absolute">',c.title&&(w+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(c.title||"&nbsp;")+"</div>"),w+='<div class="ui-widget-content ui-dialog-content"></div>',w+="</div>"):w=h?'<div class="blockUI '+c.blockMsgClass+' blockPage" style="z-index:'+(U+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+c.blockMsgClass+' blockElement" style="z-index:'+(U+10)+';display:none;position:absolute"></div>',I=e(w),k&&(c.theme?(I.css(b),I.addClass("ui-widget-content")):I.css(u)),c.theme||v.css(c.overlayCSS),v.css("position",h?"fixed":"absolute"),(o||c.forceIframe)&&g.css("opacity",0);var x=[g,v,I],C=e(h?"body":d);e.each(x,function(){this.appendTo(C)}),c.theme&&c.draggable&&e.fn.draggable&&I.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var S=i&&(!e.support.boxModel||e("object,embed",h?null:d).length>0);if(n||S){if(h&&c.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(n||!e.support.boxModel)&&!h)var E=p(d,"borderTopWidth"),O=p(d,"borderLeftWidth"),T=E?"(0 - "+E+")":0,M=O?"(0 - "+O+")":0;e.each(x,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)h?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+c.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),h?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),M&&o.setExpression("left",M),T&&o.setExpression("top",T);else if(c.centerY)h&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!c.centerY&&h){var n="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(c.css&&c.css.top?parseInt(c.css.top,10):0)+') + "px"';o.setExpression("top",n)}})}if(k&&(c.theme?I.find(".ui-widget-content").append(k):I.append(k),(k.jquery||k.nodeType)&&e(k).show()),(o||c.forceIframe)&&c.showOverlay&&g.show(),c.fadeIn){var B=c.onBlock?c.onBlock:t,j=c.showOverlay&&!k?B:t,H=k?B:t;c.showOverlay&&v._fadeIn(c.fadeIn,j),k&&I._fadeIn(c.fadeIn,H)}else c.showOverlay&&v.show(),k&&I.show(),c.onBlock&&c.onBlock.bind(I)();if(r(1,d,c),h?(s=I[0],l=e(c.focusableElements,s),c.focusInput&&setTimeout(f,20)):function(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-p(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-p(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0");o&&(i.top=l>0?l+"px":"0")}(I[0],c.centerX,c.centerY),c.timeout){var z=setTimeout(function(){h?e.unblockUI(c):e(d).unblock(c)},c.timeout);e(d).data("blockUI.timeout",z)}}}function a(t,o){var n,i,d=t==window,a=e(t),u=a.data("blockUI.history"),f=a.data("blockUI.timeout");f&&(clearTimeout(f),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),r(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock")),i=d?e(document.body).children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(i.length>1&&(i[1].style.cursor=o.cursorReset),i.length>2&&(i[2].style.cursor=o.cursorReset)),d&&(s=l=null),o.fadeOut?(n=i.length,i.stop().fadeOut(o.fadeOut,function(){0==--n&&c(i,u,o,t)})):c(i,u,o,t)}function c(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function r(t,o,n){var i=o==window,l=e(o);if((t||(!i||s)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).on(d,n,u):e(document).off(d,u)}}function u(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&s&&t.data.constrainTabKey){var o=l,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){f(i)},10),!1}var d=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&d.onOverlayClick&&d.onOverlayClick(t),a.parents("div."+d.blockMsgClass).length>0||0===a.parents().children().filter("div.blockUI").length}function f(e){if(l){var t=l[!0===e?l.length-1:0];t&&t.trigger("focus")}}function p(t,o){return parseInt(e.css(t,o),10)||0}}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();;
!function(t,a,i,e){var r=function(t){var a=this;a.$form=t,a.$attributeFields=t.find(".variations select"),a.$singleVariation=t.find(".single_variation"),a.$singleVariationWrap=t.find(".single_variation_wrap"),a.$resetVariations=t.find(".reset_variations"),a.$product=t.closest(".product"),a.variationData=t.data("product_variations"),a.useAjax=!1===a.variationData,a.xhr=!1,a.loading=!0,a.$singleVariationWrap.show(),a.$form.off(".wc-variation-form"),a.getChosenAttributes=a.getChosenAttributes.bind(a),a.findMatchingVariations=a.findMatchingVariations.bind(a),a.isMatch=a.isMatch.bind(a),a.toggleResetLink=a.toggleResetLink.bind(a),t.on("click.wc-variation-form",".reset_variations",{variationForm:a},a.onReset),t.on("reload_product_variations",{variationForm:a},a.onReload),t.on("hide_variation",{variationForm:a},a.onHide),t.on("show_variation",{variationForm:a},a.onShow),t.on("click",".single_add_to_cart_button",{variationForm:a},a.onAddToCart),t.on("reset_data",{variationForm:a},a.onResetDisplayedVariation),t.on("reset_image",{variationForm:a},a.onResetImage),t.on("change.wc-variation-form",".variations select",{variationForm:a},a.onChange),t.on("found_variation.wc-variation-form",{variationForm:a},a.onFoundVariation),t.on("check_variations.wc-variation-form",{variationForm:a},a.onFindVariation),t.on("update_variation_values.wc-variation-form",{variationForm:a},a.onUpdateAttributes),setTimeout(function(){t.trigger("check_variations"),t.trigger("wc_variation_form",a),a.loading=!1},100)};r.prototype.onReset=function(t){t.preventDefault(),t.data.variationForm.$attributeFields.val("").trigger("change"),t.data.variationForm.$form.trigger("reset_data")},r.prototype.onReload=function(t){var a=t.data.variationForm;a.variationData=a.$form.data("product_variations"),a.useAjax=!1===a.variationData,a.$form.trigger("check_variations")},r.prototype.onHide=function(t){t.preventDefault(),t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-is-unavailable").addClass("disabled wc-variation-selection-needed"),t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")},r.prototype.onShow=function(a,i,e){a.preventDefault(),e?(a.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable"),a.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-disabled").addClass("woocommerce-variation-add-to-cart-enabled")):(a.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-selection-needed").addClass("disabled wc-variation-is-unavailable"),a.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")),wp.mediaelement&&a.data.variationForm.$form.find(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function(){return!t(this).parent().hasClass("mejs-mediaelement")}).mediaelementplayer(wp.mediaelement.settings)},r.prototype.onAddToCart=function(i){t(this).is(".disabled")&&(i.preventDefault(),t(this).is(".wc-variation-is-unavailable")?a.alert(wc_add_to_cart_variation_params.i18n_unavailable_text):t(this).is(".wc-variation-selection-needed")&&a.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))},r.prototype.onResetDisplayedVariation=function(t){var a=t.data.variationForm;a.$product.find(".product_meta").find(".sku").wc_reset_content(),a.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value").wc_reset_content(),a.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value").wc_reset_content(),a.$form.trigger("reset_image"),a.$singleVariation.slideUp(200).trigger("hide_variation")},r.prototype.onResetImage=function(t){t.data.variationForm.$form.wc_variations_image_update(!1)},r.prototype.onFindVariation=function(a,i){var e=a.data.variationForm,r=void 0!==i?i:e.getChosenAttributes(),o=r.data;if(r.count&&r.count===r.chosenCount)if(e.useAjax)e.xhr&&e.xhr.abort(),e.$form.block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),o.product_id=parseInt(e.$form.data("product_id"),10),o.custom_data=e.$form.data("custom_data"),e.xhr=t.ajax({url:wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%","get_variation"),type:"POST",data:o,success:function(t){t?e.$form.trigger("found_variation",[t]):(e.$form.trigger("reset_data"),r.chosenCount=0,e.loading||(e.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),e.$form.find(".wc-no-matching-variations").slideDown(200)))},complete:function(){e.$form.unblock()}});else{e.$form.trigger("update_variation_values");var n=e.findMatchingVariations(e.variationData,o).shift();n?e.$form.trigger("found_variation",[n]):(e.$form.trigger("reset_data"),r.chosenCount=0,e.loading||(e.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">'+wc_add_to_cart_variation_params.i18n_no_matching_variations_text+"</p>"),e.$form.find(".wc-no-matching-variations").slideDown(200)))}else e.$form.trigger("update_variation_values"),e.$form.trigger("reset_data");e.toggleResetLink(r.chosenCount>0)},r.prototype.onFoundVariation=function(a,i){var e=a.data.variationForm,r=e.$product.find(".product_meta").find(".sku"),n=e.$product.find(".product_weight, .woocommerce-product-attributes-item--weight .woocommerce-product-attributes-item__value"),s=e.$product.find(".product_dimensions, .woocommerce-product-attributes-item--dimensions .woocommerce-product-attributes-item__value"),c=e.$singleVariationWrap.find('.quantity input.qty[name="quantity"]'),_=c.closest(".quantity"),d=!0,m=!1,v="";if(i.sku?r.wc_set_content(i.sku):r.wc_reset_content(),i.weight?n.wc_set_content(i.weight_html):n.wc_reset_content(),i.dimensions?s.wc_set_content(t.parseHTML(i.dimensions_html)[0].data):s.wc_reset_content(),e.$form.wc_variations_image_update(i),i.variation_is_visible?(m=o("variation-template"),i.variation_id):m=o("unavailable-variation-template"),v=(v=(v=m({variation:i})).replace("/*<![CDATA[*/","")).replace("/*]]>*/",""),e.$singleVariation.html(v),e.$form.find('input[name="variation_id"], input.variation_id').val(i.variation_id).trigger("change"),"yes"===i.is_sold_individually)c.val("1").attr("min","1").attr("max","").trigger("change"),_.hide();else{var l=parseFloat(c.val());l=isNaN(l)?i.min_qty:(l=l>parseFloat(i.max_qty)?i.max_qty:l)<parseFloat(i.min_qty)?i.min_qty:l,c.attr("min",i.min_qty).attr("max",i.max_qty).val(l).trigger("change"),_.show()}i.is_purchasable&&i.is_in_stock&&i.variation_is_visible||(d=!1),e.$singleVariation.text().trim()?e.$singleVariation.slideDown(200).trigger("show_variation",[i,d]):e.$singleVariation.show().trigger("show_variation",[i,d])},r.prototype.onChange=function(t){var a=t.data.variationForm;a.$form.find('input[name="variation_id"], input.variation_id').val("").trigger("change"),a.$form.find(".wc-no-matching-variations").remove(),a.useAjax?a.$form.trigger("check_variations"):(a.$form.trigger("woocommerce_variation_select_change"),a.$form.trigger("check_variations")),a.$form.trigger("woocommerce_variation_has_changed")},r.prototype.addSlashes=function(t){return t=(t=t.replace(/'/g,"\\'")).replace(/"/g,'\\"')},r.prototype.onUpdateAttributes=function(a){var i=a.data.variationForm,e=i.getChosenAttributes().data;i.useAjax||(i.$attributeFields.each(function(a,r){var o,n=t(r),s=n.data("attribute_name")||n.attr("name"),c=t(r).data("show_option_none"),_=":gt(0)",d=t("<select/>"),m=n.val()||"",v=!0;if(!n.data("attribute_html")){var l=n.clone();l.find("option").removeAttr("attached").prop("disabled",!1).prop("selected",!1),n.data("attribute_options",l.find("option"+_).get()),n.data("attribute_html",l.html())}d.html(n.data("attribute_html"));var g=t.extend(!0,{},e);g[s]="";var f=i.findMatchingVariations(i.variationData,g);for(var u in f)if("undefined"!=typeof f[u]){var h=f[u].attributes;for(var p in h)if(h.hasOwnProperty(p)){var w=h[p],b="";if(p===s)if(f[u].variation_is_active&&(b="enabled"),w){w=t("<div/>").html(w).text();var $=d.find("option");if($.length)for(var y=0,F=$.length;y<F;y++){var C=t($[y]);if(w===C.val()){C.addClass("attached "+b);break}}}else d.find("option:gt(0)").addClass("attached "+b)}}o=d.find("option.attached").length,m&&(v=!1,0!==o&&d.find("option.attached.enabled").each(function(){var a=t(this).val();if(m===a)return v=!0,!1})),o>0&&m&&v&&"no"===c&&(d.find("option:first").remove(),_=""),d.find("option"+_+":not(.attached)").remove(),n.html(d.html()),n.find("option"+_+":not(.enabled)").prop("disabled",!0),m?v?n.val(m):n.val("").trigger("change"):n.val("")}),i.$form.trigger("woocommerce_update_variation_values"))},r.prototype.getChosenAttributes=function(){var a={},i=0,e=0;return this.$attributeFields.each(function(){var r=t(this).data("attribute_name")||t(this).attr("name"),o=t(this).val()||"";o.length>0&&e++,i++,a[r]=o}),{count:i,chosenCount:e,data:a}},r.prototype.findMatchingVariations=function(t,a){for(var i=[],e=0;e<t.length;e++){var r=t[e];this.isMatch(r.attributes,a)&&i.push(r)}return i},r.prototype.isMatch=function(t,a){var i=!0;for(var e in t)if(t.hasOwnProperty(e)){var r=t[e],o=a[e];void 0!==r&&void 0!==o&&0!==r.length&&0!==o.length&&r!==o&&(i=!1)}return i},r.prototype.toggleResetLink=function(t){t?"hidden"===this.$resetVariations.css("visibility")&&this.$resetVariations.css("visibility","visible").hide().fadeIn():this.$resetVariations.css("visibility","hidden")},t.fn.wc_variation_form=function(){return new r(this),this},t.fn.wc_set_content=function(t){void 0===this.attr("data-o_content")&&this.attr("data-o_content",this.text()),this.text(t)},t.fn.wc_reset_content=function(){void 0!==this.attr("data-o_content")&&this.text(this.attr("data-o_content"))},t.fn.wc_set_variation_attr=function(t,a){void 0===this.attr("data-o_"+t)&&this.attr("data-o_"+t,this.attr(t)?this.attr(t):""),!1===a?this.removeAttr(t):this.attr(t,a)},t.fn.wc_reset_variation_attr=function(t){void 0!==this.attr("data-o_"+t)&&this.attr(t,this.attr("data-o_"+t))},t.fn.wc_maybe_trigger_slide_position_reset=function(a){var i=t(this),e=i.closest(".product").find(".images"),r=!1,o=a&&a.image_id?a.image_id:"";i.attr("current-image")!==o&&(r=!0),i.attr("current-image",o),r&&e.trigger("woocommerce_gallery_reset_slide_position")},t.fn.wc_variations_image_update=function(i){var e=this,r=e.closest(".product"),o=r.find(".images"),n=r.find(".flex-control-nav"),s=n.find("li:eq(0) img"),c=o.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),_=c.find(".wp-post-image"),d=c.find("a").eq(0);if(i&&i.image&&i.image.src&&i.image.src.length>1){n.find('li img[data-o_src="'+i.image.gallery_thumbnail_src+'"]').length>0&&e.wc_variations_image_reset();var m=n.find('li img[src="'+i.image.gallery_thumbnail_src+'"]');if(m.length>0)return m.trigger("click"),e.attr("current-image",i.image_id),void a.setTimeout(function(){t(a).trigger("resize"),o.trigger("woocommerce_gallery_init_zoom")},20);_.wc_set_variation_attr("src",i.image.src),_.wc_set_variation_attr("height",i.image.src_h),_.wc_set_variation_attr("width",i.image.src_w),_.wc_set_variation_attr("srcset",i.image.srcset),_.wc_set_variation_attr("sizes",i.image.sizes),_.wc_set_variation_attr("title",i.image.title),_.wc_set_variation_attr("data-caption",i.image.caption),_.wc_set_variation_attr("alt",i.image.alt),_.wc_set_variation_attr("data-src",i.image.full_src),_.wc_set_variation_attr("data-large_image",i.image.full_src),_.wc_set_variation_attr("data-large_image_width",i.image.full_src_w),_.wc_set_variation_attr("data-large_image_height",i.image.full_src_h),c.wc_set_variation_attr("data-thumb",i.image.src),s.wc_set_variation_attr("src",i.image.gallery_thumbnail_src),d.wc_set_variation_attr("href",i.image.full_src)}else e.wc_variations_image_reset();a.setTimeout(function(){t(a).trigger("resize"),e.wc_maybe_trigger_slide_position_reset(i),o.trigger("woocommerce_gallery_init_zoom")},20)},t.fn.wc_variations_image_reset=function(){var t=this.closest(".product"),a=t.find(".images"),i=t.find(".flex-control-nav").find("li:eq(0) img"),e=a.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),r=e.find(".wp-post-image"),o=e.find("a").eq(0);r.wc_reset_variation_attr("src"),r.wc_reset_variation_attr("width"),r.wc_reset_variation_attr("height"),r.wc_reset_variation_attr("srcset"),r.wc_reset_variation_attr("sizes"),r.wc_reset_variation_attr("title"),r.wc_reset_variation_attr("data-caption"),r.wc_reset_variation_attr("alt"),r.wc_reset_variation_attr("data-src"),r.wc_reset_variation_attr("data-large_image"),r.wc_reset_variation_attr("data-large_image_width"),r.wc_reset_variation_attr("data-large_image_height"),e.wc_reset_variation_attr("data-thumb"),i.wc_reset_variation_attr("src"),o.wc_reset_variation_attr("href")},t(function(){"undefined"!=typeof wc_add_to_cart_variation_params&&t(".variations_form").each(function(){t(this).wc_variation_form()})});var o=function(t){var e=i.getElementById("tmpl-"+t).textContent,r=!1;return(r=(r=(r=r||/<#\s?data\./.test(e))||/{{{?\s?data\.(?!variation\.).+}}}?/.test(e))||/{{{?\s?data\.variation\.[\w-]*[^\s}]/.test(e))?wp.template(t):function(t){var i=t.variation||{};return e.replace(/({{{?)\s?data\.variation\.([\w-]*)\s?(}}}?)/g,function(t,e,r,o){if(e.length!==o.length)return"";var n=i[r]||"";return 2===e.length?a.escape(n):n})}}}(jQuery,window,document);;
jQuery(function(t){if("undefined"==typeof wc_add_to_cart_params)return!1;var a=function(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),t(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("ajax_request_not_sent.adding_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)};a.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},a.prototype.run=function(){var a=this,e=a.requests[0].complete;a.requests[0].complete=function(){"function"==typeof e&&e(),a.requests.shift(),a.requests.length>0&&a.run()},t.ajax(this.requests[0])},a.prototype.onAddToCart=function(a){var e=t(this);if(e.is(".ajax_add_to_cart")){if(!e.attr("data-product_id"))return!0;if(a.preventDefault(),e.removeClass("added"),e.addClass("loading"),!1===t(document.body).triggerHandler("should_send_ajax_request.adding_to_cart",[e]))return t(document.body).trigger("ajax_request_not_sent.adding_to_cart",[!1,!1,e]),!0;var r={};t.each(e.data(),function(t,a){r[t]=a}),t.each(e[0].dataset,function(t,a){r[t]=a}),t(document.body).trigger("adding_to_cart",[e,r]),a.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:r,success:function(a){a&&(a.error&&a.product_url?window.location=a.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,e]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},a.prototype.onRemoveFromCart=function(a){var e=t(this),r=e.closest(".woocommerce-mini-cart-item");a.preventDefault(),r.block({message:null,overlayCSS:{opacity:.6}}),a.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:e.data("cart_item_key")},success:function(a){a&&a.fragments?t(document.body).trigger("removed_from_cart",[a.fragments,a.cart_hash,e]):window.location=e.attr("href")},error:function(){window.location=e.attr("href")},dataType:"json"})},a.prototype.updateButton=function(a,e,r,d){(d=void 0!==d&&d)&&(d.removeClass("loading"),e&&d.addClass("added"),e&&!wc_add_to_cart_params.is_cart&&0===d.parent().find(".added_to_cart").length&&d.after('<a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),t(document.body).trigger("wc_cart_button_updated",[d]))},a.prototype.updateFragments=function(a,e){e&&(t.each(e,function(a){t(a).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),t.each(e,function(a,e){t(a).replaceWith(e),t(a).stop(!0).css("opacity","1").unblock()}),t(document.body).trigger("wc_fragments_loaded"))},new a});;
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}(function(){})});;
jQuery(function(o){o(".woocommerce-ordering").on("change","select.orderby",function(){o(this).closest("form").trigger("submit")}),o("input.qty:not(.product-quantity input.qty)").each(function(){var e=parseFloat(o(this).attr("min"));e>=0&&parseFloat(o(this).val())<e&&o(this).val(e)});var e="store_notice"+(o(".woocommerce-store-notice").data("noticeId")||"");"hidden"===Cookies.get(e)?o(".woocommerce-store-notice").hide():o(".woocommerce-store-notice").show(),o(".woocommerce-store-notice__dismiss-link").on("click",function(s){Cookies.set(e,"hidden",{path:"/"}),o(".woocommerce-store-notice").hide(),s.preventDefault()}),o(".woocommerce-input-wrapper span.description").length&&o(document.body).on("click",function(){o(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),o(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),o(".woocommerce-input-wrapper :input").on("keydown",function(e){var s=o(this).parent().find("span.description");if(27===e.which&&s.length&&s.is(":visible"))return s.prop("aria-hidden",!0).slideUp(250),e.preventDefault(),!1}).on("click focus",function(){var e=o(this).parent(),s=e.find("span.description");e.addClass("currentTarget"),o(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),s.length&&s.is(":hidden")&&s.prop("aria-hidden",!1).slideDown(250),e.removeClass("currentTarget")}),o.scroll_to_notices=function(e){e.length&&o("html, body").animate({scrollTop:e.offset().top-100},1e3)},o('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),o(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),o(".password-input").append('<span class="show-password-input"></span>'),o(".show-password-input").on("click",function(){o(this).hasClass("display-password")?o(this).removeClass("display-password"):o(this).addClass("display-password"),o(this).hasClass("display-password")?o(this).siblings(['input[type="password"]']).prop("type","text"):o(this).siblings('input[type="text"]').prop("type","password")})});;
/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});;
/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2020 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.6-beta.20
 */
!function webpackUniversalModuleDefinition(root,factory){if("object"==typeof exports&&"object"==typeof module)module.exports=factory(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],factory);else{var a="object"==typeof exports?factory(require("jquery")):factory(root.jQuery);for(var i in a)("object"==typeof exports?exports:root)[i]=a[i]}}(this,function(__WEBPACK_EXTERNAL_MODULE__10__){return modules=[function(module){module.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"CONTROL":17,"KEY_229":229}')},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.caret=caret,exports.determineLastRequiredPosition=determineLastRequiredPosition,exports.determineNewCaretPosition=determineNewCaretPosition,exports.getBuffer=getBuffer,exports.getBufferTemplate=getBufferTemplate,exports.getLastValidPosition=getLastValidPosition,exports.isMask=isMask,exports.resetMaskSet=resetMaskSet,exports.seekNext=seekNext,exports.seekPrevious=seekPrevious,exports.translatePosition=translatePosition;var _validationTests=__webpack_require__(3),_validation=__webpack_require__(4),_mask=__webpack_require__(11);function caret(input,begin,end,notranslate,isDelete){var inputmask=this,opts=this.opts,range;if(void 0===begin)return"selectionStart"in input&&"selectionEnd"in input?(begin=input.selectionStart,end=input.selectionEnd):window.getSelection?(range=window.getSelection().getRangeAt(0),range.commonAncestorContainer.parentNode!==input&&range.commonAncestorContainer!==input||(begin=range.startOffset,end=range.endOffset)):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),begin=0-range.duplicate().moveStart("character",-input.inputmask._valueGet().length),end=begin+range.text.length),{begin:notranslate?begin:translatePosition.call(this,begin),end:notranslate?end:translatePosition.call(this,end)};if(Array.isArray(begin)&&(end=this.isRTL?begin[0]:begin[1],begin=this.isRTL?begin[1]:begin[0]),void 0!==begin.begin&&(end=this.isRTL?begin.begin:begin.end,begin=this.isRTL?begin.end:begin.begin),"number"==typeof begin){begin=notranslate?begin:translatePosition.call(this,begin),end=notranslate?end:translatePosition.call(this,end),end="number"==typeof end?end:begin;var scrollCalc=parseInt(((input.ownerDocument.defaultView||window).getComputedStyle?(input.ownerDocument.defaultView||window).getComputedStyle(input,null):input.currentStyle).fontSize)*end;if(input.scrollLeft=scrollCalc>input.scrollWidth?scrollCalc:0,input.inputmask.caretPos={begin:begin,end:end},opts.insertModeVisual&&!1===opts.insertMode&&begin===end&&(isDelete||end++),input===(input.inputmask.shadowRoot||document).activeElement)if("setSelectionRange"in input)input.setSelectionRange(begin,end);else if(window.getSelection){if(range=document.createRange(),void 0===input.firstChild||null===input.firstChild){var textNode=document.createTextNode("");input.appendChild(textNode)}range.setStart(input.firstChild,begin<input.inputmask._valueGet().length?begin:input.inputmask._valueGet().length),range.setEnd(input.firstChild,end<input.inputmask._valueGet().length?end:input.inputmask._valueGet().length),range.collapse(!0);var sel=window.getSelection();sel.removeAllRanges(),sel.addRange(range)}else input.createTextRange&&(range=input.createTextRange(),range.collapse(!0),range.moveEnd("character",end),range.moveStart("character",begin),range.select())}}function determineLastRequiredPosition(returnDefinition){var inputmask=this,maskset=this.maskset,$=this.dependencyLib,buffer=_validationTests.getMaskTemplate.call(this,!0,getLastValidPosition.call(this),!0,!0),bl=buffer.length,pos,lvp=getLastValidPosition.call(this),positions={},lvTest=maskset.validPositions[lvp],ndxIntlzr=void 0!==lvTest?lvTest.locator.slice():void 0,testPos;for(pos=lvp+1;pos<buffer.length;pos++)testPos=_validationTests.getTestTemplate.call(this,pos,ndxIntlzr,pos-1),ndxIntlzr=testPos.locator.slice(),positions[pos]=$.extend(!0,{},testPos);var lvTestAlt=lvTest&&void 0!==lvTest.alternation?lvTest.locator[lvTest.alternation]:void 0;for(pos=bl-1;lvp<pos&&(testPos=positions[pos],(testPos.match.optionality||testPos.match.optionalQuantifier&&testPos.match.newBlockMarker||lvTestAlt&&(lvTestAlt!==positions[pos].locator[lvTest.alternation]&&1!=testPos.match.static||!0===testPos.match.static&&testPos.locator[lvTest.alternation]&&_validation.checkAlternationMatch.call(this,testPos.locator[lvTest.alternation].toString().split(","),lvTestAlt.toString().split(","))&&""!==_validationTests.getTests.call(this,pos)[0].def))&&buffer[pos]===_validationTests.getPlaceholder.call(this,pos,testPos.match));pos--)bl--;return returnDefinition?{l:bl,def:positions[bl]?positions[bl].match:void 0}:bl}function determineNewCaretPosition(selectedCaret,tabbed){var inputmask=this,maskset=this.maskset,opts=this.opts;function doRadixFocus(clickPos){if(""!==opts.radixPoint&&0!==opts.digits){var vps=maskset.validPositions;if(void 0===vps[clickPos]||vps[clickPos].input===_validationTests.getPlaceholder.call(inputmask,clickPos)){if(clickPos<seekNext.call(inputmask,-1))return!0;var radixPos=getBuffer.call(inputmask).indexOf(opts.radixPoint);if(-1!==radixPos){for(var vp in vps)if(vps[vp]&&radixPos<vp&&vps[vp].input!==_validationTests.getPlaceholder.call(inputmask,vp))return!1;return!0}}}return!1}if(tabbed&&(inputmask.isRTL?selectedCaret.end=selectedCaret.begin:selectedCaret.begin=selectedCaret.end),selectedCaret.begin===selectedCaret.end){switch(opts.positionCaretOnClick){case"none":break;case"select":selectedCaret={begin:0,end:getBuffer.call(inputmask).length};break;case"ignore":selectedCaret.end=selectedCaret.begin=seekNext.call(inputmask,getLastValidPosition.call(inputmask));break;case"radixFocus":if(doRadixFocus(selectedCaret.begin)){var radixPos=getBuffer.call(inputmask).join("").indexOf(opts.radixPoint);selectedCaret.end=selectedCaret.begin=opts.numericInput?seekNext.call(inputmask,radixPos):radixPos;break}default:var clickPosition=selectedCaret.begin,lvclickPosition=getLastValidPosition.call(inputmask,clickPosition,!0),lastPosition=seekNext.call(inputmask,-1!==lvclickPosition||isMask.call(inputmask,0)?lvclickPosition:-1);if(clickPosition<=lastPosition)selectedCaret.end=selectedCaret.begin=isMask.call(inputmask,clickPosition,!1,!0)?clickPosition:seekNext.call(inputmask,clickPosition);else{var lvp=maskset.validPositions[lvclickPosition],tt=_validationTests.getTestTemplate.call(inputmask,lastPosition,lvp?lvp.match.locator:void 0,lvp),placeholder=_validationTests.getPlaceholder.call(inputmask,lastPosition,tt.match);if(""!==placeholder&&getBuffer.call(inputmask)[lastPosition]!==placeholder&&!0!==tt.match.optionalQuantifier&&!0!==tt.match.newBlockMarker||!isMask.call(inputmask,lastPosition,opts.keepStatic,!0)&&tt.match.def===placeholder){var newPos=seekNext.call(inputmask,lastPosition);(newPos<=clickPosition||clickPosition===lastPosition)&&(lastPosition=newPos)}selectedCaret.end=selectedCaret.begin=lastPosition}}return selectedCaret}}function getBuffer(noCache){var inputmask=this,maskset=this.maskset;return void 0!==maskset.buffer&&!0!==noCache||(maskset.buffer=_validationTests.getMaskTemplate.call(this,!0,getLastValidPosition.call(this),!0),void 0===maskset._buffer&&(maskset._buffer=maskset.buffer.slice())),maskset.buffer}function getBufferTemplate(){var inputmask=this,maskset=this.maskset;return void 0===maskset._buffer&&(maskset._buffer=_validationTests.getMaskTemplate.call(this,!1,1),void 0===maskset.buffer&&(maskset.buffer=maskset._buffer.slice())),maskset._buffer}function getLastValidPosition(closestTo,strict,validPositions){var maskset=this.maskset,before=-1,after=-1,valids=validPositions||maskset.validPositions;for(var posNdx in void 0===closestTo&&(closestTo=-1),valids){var psNdx=parseInt(posNdx);valids[psNdx]&&(strict||!0!==valids[psNdx].generatedInput)&&(psNdx<=closestTo&&(before=psNdx),closestTo<=psNdx&&(after=psNdx))}return-1===before||before==closestTo?after:-1==after?before:closestTo-before<after-closestTo?before:after}function isMask(pos,strict,fuzzy){var inputmask=this,maskset=this.maskset,test=_validationTests.getTestTemplate.call(this,pos).match;if(""===test.def&&(test=_validationTests.getTest.call(this,pos).match),!0!==test.static)return test.fn;if(!0===fuzzy&&void 0!==maskset.validPositions[pos]&&!0!==maskset.validPositions[pos].generatedInput)return!0;if(!0!==strict&&-1<pos){if(fuzzy){var tests=_validationTests.getTests.call(this,pos);return tests.length>1+(""===tests[tests.length-1].match.def?1:0)}var testTemplate=_validationTests.determineTestTemplate.call(this,pos,_validationTests.getTests.call(this,pos)),testPlaceHolder=_validationTests.getPlaceholder.call(this,pos,testTemplate.match);return testTemplate.match.def!==testPlaceHolder}return!1}function resetMaskSet(soft){var maskset=this.maskset;maskset.buffer=void 0,!0!==soft&&(maskset.validPositions={},maskset.p=0)}function seekNext(pos,newBlock,fuzzy){var inputmask=this;void 0===fuzzy&&(fuzzy=!0);for(var position=pos+1;""!==_validationTests.getTest.call(this,position).match.def&&(!0===newBlock&&(!0!==_validationTests.getTest.call(this,position).match.newBlockMarker||!isMask.call(this,position,void 0,!0))||!0!==newBlock&&!isMask.call(this,position,void 0,fuzzy));)position++;return position}function seekPrevious(pos,newBlock){var inputmask=this,position=pos-1;if(pos<=0)return 0;for(;0<position&&(!0===newBlock&&(!0!==_validationTests.getTest.call(this,position).match.newBlockMarker||!isMask.call(this,position,void 0,!0))||!0!==newBlock&&!isMask.call(this,position,void 0,!0));)position--;return position}function translatePosition(pos){var inputmask=this,opts=this.opts,el=this.el;return!this.isRTL||"number"!=typeof pos||opts.greedy&&""===opts.placeholder||!el||(pos=Math.abs(this._valueGet().length-pos)),pos}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(17),__webpack_require__(18);var _mask=__webpack_require__(11),_inputmask=_interopRequireDefault(__webpack_require__(13)),_window=_interopRequireDefault(__webpack_require__(8)),_maskLexer=__webpack_require__(19),_validationTests=__webpack_require__(3),_positioning=__webpack_require__(1),_validation=__webpack_require__(4),_inputHandling=__webpack_require__(5),_eventruler=__webpack_require__(12),_definitions=_interopRequireDefault(__webpack_require__(20)),_defaults=_interopRequireDefault(__webpack_require__(21)),_canUseDOM=_interopRequireDefault(__webpack_require__(9));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var document=_window.default.document,dataKey="_inputmask_opts";function Inputmask(alias,options,internal){if(_canUseDOM.default){if(!(this instanceof Inputmask))return new Inputmask(alias,options,internal);this.dependencyLib=_inputmask.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==internal&&("[object Object]"===Object.prototype.toString.call(alias)?options=alias:(options=options||{},alias&&(options.alias=alias)),this.opts=_inputmask.default.extend(!0,{},this.defaults,options),this.noMasksCache=options&&void 0!==options.definitions,this.userOptions=options||{},resolveAlias(this.opts.alias,options,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0,this.isComposing=!1}}function resolveAlias(aliasStr,options,opts){var aliasDefinition=Inputmask.prototype.aliases[aliasStr];return aliasDefinition?(aliasDefinition.alias&&resolveAlias(aliasDefinition.alias,void 0,opts),_inputmask.default.extend(!0,opts,aliasDefinition),_inputmask.default.extend(!0,opts,options),!0):(null===opts.mask&&(opts.mask=aliasStr),!1)}function importAttributeOptions(npt,opts,userOptions,dataAttribute){function importOption(option,optionData){var attrOption=""===dataAttribute?option:dataAttribute+"-"+option;optionData=void 0!==optionData?optionData:npt.getAttribute(attrOption),null!==optionData&&("string"==typeof optionData&&(0===option.indexOf("on")?optionData=_window.default[optionData]:"false"===optionData?optionData=!1:"true"===optionData&&(optionData=!0)),userOptions[option]=optionData)}if(!0===opts.importDataAttributes){var attrOptions=npt.getAttribute(dataAttribute),option,dataoptions,optionData,p;if(attrOptions&&""!==attrOptions&&(attrOptions=attrOptions.replace(/'/g,'"'),dataoptions=JSON.parse("{"+attrOptions+"}")),dataoptions)for(p in optionData=void 0,dataoptions)if("alias"===p.toLowerCase()){optionData=dataoptions[p];break}for(option in importOption("alias",optionData),userOptions.alias&&resolveAlias(userOptions.alias,userOptions,opts),opts){if(dataoptions)for(p in optionData=void 0,dataoptions)if(p.toLowerCase()===option.toLowerCase()){optionData=dataoptions[p];break}importOption(option,optionData)}}return _inputmask.default.extend(!0,opts,userOptions),"rtl"!==npt.dir&&!opts.rightAlign||(npt.style.textAlign="right"),"rtl"!==npt.dir&&!opts.numericInput||(npt.dir="ltr",npt.removeAttribute("dir"),opts.isRTL=!0),Object.keys(userOptions).length}Inputmask.prototype={dataAttribute:"data-inputmask",defaults:_defaults.default,definitions:_definitions.default,aliases:{},masksCache:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function mask(elems){var that=this;return"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:Array.isArray(elems)?elems:Array.from(elems),elems.forEach(function(el,ndx){var scopedOpts=_inputmask.default.extend(!0,{},that.opts);if(importAttributeOptions(el,scopedOpts,_inputmask.default.extend(!0,{},that.userOptions),that.dataAttribute)){var maskset=(0,_maskLexer.generateMaskSet)(scopedOpts,that.noMasksCache);void 0!==maskset&&(void 0!==el.inputmask&&(el.inputmask.opts.autoUnmask=!0,el.inputmask.remove()),el.inputmask=new Inputmask(void 0,void 0,!0),el.inputmask.opts=scopedOpts,el.inputmask.noMasksCache=that.noMasksCache,el.inputmask.userOptions=_inputmask.default.extend(!0,{},that.userOptions),el.inputmask.el=el,el.inputmask.$el=(0,_inputmask.default)(el),el.inputmask.maskset=maskset,_inputmask.default.data(el,dataKey,that.userOptions),_mask.mask.call(el.inputmask))}}),elems&&elems[0]&&elems[0].inputmask||this},option:function option(options,noremask){return"string"==typeof options?this.opts[options]:"object"===_typeof(options)?(_inputmask.default.extend(this.userOptions,options),this.el&&!0!==noremask&&this.mask(this.el),this):void 0},unmaskedvalue:function unmaskedvalue(value){if(this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==value){var valueBuffer=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,value,this.opts)||value).split("");_inputHandling.checkVal.call(this,void 0,!1,!1,valueBuffer),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,_positioning.getBuffer.call(this),0,this.opts)}return _inputHandling.unmaskedvalue.call(this,this.el)},remove:function remove(){if(this.el){_inputmask.default.data(this.el,dataKey,null);var cv=this.opts.autoUnmask?(0,_inputHandling.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask),valueProperty;cv!==_positioning.getBufferTemplate.call(this).join("")?this._valueSet(cv,this.opts.autoUnmask):this._valueSet(""),_eventruler.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(valueProperty=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value"),valueProperty&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0})):document.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function getemptymask(){return this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),_positioning.getBufferTemplate.call(this).join("")},hasMaskedValue:function hasMaskedValue(){return!this.opts.autoUnmask},isComplete:function isComplete(){return this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),_validation.isComplete.call(this,_positioning.getBuffer.call(this))},getmetadata:function getmetadata(){if(this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){var maskTarget=_validationTests.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach(function(mtdt){return mtdt.mask!==maskTarget||(maskTarget=mtdt,!1)}),maskTarget}return this.maskset.metadata},isValid:function isValid(value){if(this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache),value){var valueBuffer=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,value,this.opts)||value).split("");_inputHandling.checkVal.call(this,void 0,!0,!1,valueBuffer)}else value=this.isRTL?_positioning.getBuffer.call(this).slice().reverse().join(""):_positioning.getBuffer.call(this).join("");for(var buffer=_positioning.getBuffer.call(this),rl=_positioning.determineLastRequiredPosition.call(this),lmib=buffer.length-1;rl<lmib&&!_positioning.isMask.call(this,lmib);lmib--);return buffer.splice(rl,lmib+1-rl),_validation.isComplete.call(this,buffer)&&value===(this.isRTL?_positioning.getBuffer.call(this).slice().reverse().join(""):_positioning.getBuffer.call(this).join(""))},format:function format(value,metadata){this.maskset=this.maskset||(0,_maskLexer.generateMaskSet)(this.opts,this.noMasksCache);var valueBuffer=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,value,this.opts)||value).split("");_inputHandling.checkVal.call(this,void 0,!0,!1,valueBuffer);var formattedValue=this.isRTL?_positioning.getBuffer.call(this).slice().reverse().join(""):_positioning.getBuffer.call(this).join("");return metadata?{value:formattedValue,metadata:this.getmetadata()}:formattedValue},setValue:function setValue(value){this.el&&(0,_inputmask.default)(this.el).trigger("setvalue",[value])},analyseMask:_maskLexer.analyseMask},Inputmask.extendDefaults=function(options){_inputmask.default.extend(!0,Inputmask.prototype.defaults,options)},Inputmask.extendDefinitions=function(definition){_inputmask.default.extend(!0,Inputmask.prototype.definitions,definition)},Inputmask.extendAliases=function(alias){_inputmask.default.extend(!0,Inputmask.prototype.aliases,alias)},Inputmask.format=function(value,options,metadata){return Inputmask(options).format(value,metadata)},Inputmask.unmask=function(value,options){return Inputmask(options).unmaskedvalue(value)},Inputmask.isValid=function(value,options){return Inputmask(options).isValid(value)},Inputmask.remove=function(elems){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,elems.forEach(function(el){el.inputmask&&el.inputmask.remove()})},Inputmask.setValue=function(elems,value){"string"==typeof elems&&(elems=document.getElementById(elems)||document.querySelectorAll(elems)),elems=elems.nodeName?[elems]:elems,elems.forEach(function(el){el.inputmask?el.inputmask.setValue(value):(0,_inputmask.default)(el).trigger("setvalue",[value])})},Inputmask.dependencyLib=_inputmask.default,_window.default.Inputmask=Inputmask;var _default=Inputmask;exports.default=_default},function(module,exports,__webpack_require__){"use strict";function getLocator(tst,align){var locator=(null!=tst.alternation?tst.mloc[getDecisionTaker(tst)]:tst.locator).join("");if(""!==locator)for(;locator.length<align;)locator+="0";return locator}function getDecisionTaker(tst){var decisionTaker=tst.locator[tst.alternation];return"string"==typeof decisionTaker&&0<decisionTaker.length&&(decisionTaker=decisionTaker.split(",")[0]),void 0!==decisionTaker?decisionTaker.toString():""}function getPlaceholder(pos,test,returnPL){var inputmask=this,opts=this.opts,maskset=this.maskset;if(test=test||getTest.call(this,pos).match,void 0!==test.placeholder||!0===returnPL)return"function"==typeof test.placeholder?test.placeholder(opts):test.placeholder;if(!0!==test.static)return opts.placeholder.charAt(pos%opts.placeholder.length);if(-1<pos&&void 0===maskset.validPositions[pos]){var tests=getTests.call(this,pos),staticAlternations=[],prevTest;if(tests.length>1+(""===tests[tests.length-1].match.def?1:0))for(var i=0;i<tests.length;i++)if(""!==tests[i].match.def&&!0!==tests[i].match.optionality&&!0!==tests[i].match.optionalQuantifier&&(!0===tests[i].match.static||void 0===prevTest||!1!==tests[i].match.fn.test(prevTest.match.def,maskset,pos,!0,opts))&&(staticAlternations.push(tests[i]),!0===tests[i].match.static&&(prevTest=tests[i]),1<staticAlternations.length&&/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)))return opts.placeholder.charAt(pos%opts.placeholder.length)}return test.def}function getMaskTemplate(baseOnInput,minimalPos,includeMode,noJit,clearOptionalTail){var inputmask=this,opts=this.opts,maskset=this.maskset,greedy=opts.greedy;clearOptionalTail&&(opts.greedy=!1),minimalPos=minimalPos||0;var maskTemplate=[],ndxIntlzr,pos=0,test,testPos,jitRenderStatic;do{if(!0===baseOnInput&&maskset.validPositions[pos])testPos=clearOptionalTail&&!0===maskset.validPositions[pos].match.optionality&&void 0===maskset.validPositions[pos+1]&&(!0===maskset.validPositions[pos].generatedInput||maskset.validPositions[pos].input==opts.skipOptionalPartCharacter&&0<pos)?determineTestTemplate.call(this,pos,getTests.call(this,pos,ndxIntlzr,pos-1)):maskset.validPositions[pos],test=testPos.match,ndxIntlzr=testPos.locator.slice(),maskTemplate.push(!0===includeMode?testPos.input:!1===includeMode?test.nativeDef:getPlaceholder.call(this,pos,test));else{testPos=getTestTemplate.call(this,pos,ndxIntlzr,pos-1),test=testPos.match,ndxIntlzr=testPos.locator.slice();var jitMasking=!0!==noJit&&(!1!==opts.jitMasking?opts.jitMasking:test.jit);jitRenderStatic=jitRenderStatic&&test.static&&test.def!==opts.groupSeparator&&null===test.fn||maskset.validPositions[pos-1]&&test.static&&test.def!==opts.groupSeparator&&null===test.fn,jitRenderStatic||!1===jitMasking||void 0===jitMasking||"number"==typeof jitMasking&&isFinite(jitMasking)&&pos<jitMasking?maskTemplate.push(!1===includeMode?test.nativeDef:getPlaceholder.call(this,pos,test)):jitRenderStatic=!1}pos++}while((void 0===this.maxLength||pos<this.maxLength)&&(!0!==test.static||""!==test.def)||pos<minimalPos);return""===maskTemplate[maskTemplate.length-1]&&maskTemplate.pop(),!1===includeMode&&void 0!==maskset.maskLength||(maskset.maskLength=pos-1),opts.greedy=greedy,maskTemplate}function getTestTemplate(pos,ndxIntlzr,tstPs){var inputmask=this,maskset=this.maskset;return maskset.validPositions[pos]||determineTestTemplate.call(this,pos,getTests.call(this,pos,ndxIntlzr?ndxIntlzr.slice():ndxIntlzr,tstPs))}function determineTestTemplate(pos,tests){var inputmask=this,opts=this.opts;pos=0<pos?pos-1:0;for(var altTest=getTest.call(this,pos),targetLocator=getLocator(altTest),tstLocator,closest,bestMatch,ndx=0;ndx<tests.length;ndx++){var tst=tests[ndx];tstLocator=getLocator(tst,targetLocator.length);var distance=Math.abs(tstLocator-targetLocator);(void 0===closest||""!==tstLocator&&distance<closest||bestMatch&&!opts.greedy&&bestMatch.match.optionality&&"master"===bestMatch.match.newBlockMarker&&(!tst.match.optionality||!tst.match.newBlockMarker)||bestMatch&&bestMatch.match.optionalQuantifier&&!tst.match.optionalQuantifier)&&(closest=distance,bestMatch=tst)}return bestMatch}function getTest(pos,tests){var inputmask=this,maskset=this.maskset;return maskset.validPositions[pos]?maskset.validPositions[pos]:(tests||getTests.call(this,pos))[0]}function getTests(pos,ndxIntlzr,tstPs){var inputmask=this,$=this.dependencyLib,maskset=this.maskset,opts=this.opts,el=this.el,maskTokens=maskset.maskToken,testPos=ndxIntlzr?tstPs:0,ndxInitializer=ndxIntlzr?ndxIntlzr.slice():[0],matches=[],insertStop=!1,latestMatch,cacheDependency=ndxIntlzr?ndxIntlzr.join(""):"";function resolveTestFromToken(maskToken,ndxInitializer,loopNdx,quantifierRecurse){function handleMatch(match,loopNdx,quantifierRecurse){function isFirstMatch(latestMatch,tokenGroup){var firstMatch=0===tokenGroup.matches.indexOf(latestMatch);return firstMatch||tokenGroup.matches.every(function(match,ndx){return!0===match.isQuantifier?firstMatch=isFirstMatch(latestMatch,tokenGroup.matches[ndx-1]):Object.prototype.hasOwnProperty.call(match,"matches")&&(firstMatch=isFirstMatch(latestMatch,match)),!firstMatch}),firstMatch}function resolveNdxInitializer(pos,alternateNdx,targetAlternation){var bestMatch,indexPos;if((maskset.tests[pos]||maskset.validPositions[pos])&&(maskset.tests[pos]||[maskset.validPositions[pos]]).every(function(lmnt,ndx){if(lmnt.mloc[alternateNdx])return bestMatch=lmnt,!1;var alternation=void 0!==targetAlternation?targetAlternation:lmnt.alternation,ndxPos=void 0!==lmnt.locator[alternation]?lmnt.locator[alternation].toString().indexOf(alternateNdx):-1;return(void 0===indexPos||ndxPos<indexPos)&&-1!==ndxPos&&(bestMatch=lmnt,indexPos=ndxPos),!0}),bestMatch){var bestMatchAltIndex=bestMatch.locator[bestMatch.alternation],locator=bestMatch.mloc[alternateNdx]||bestMatch.mloc[bestMatchAltIndex]||bestMatch.locator;return locator.slice((void 0!==targetAlternation?targetAlternation:bestMatch.alternation)+1)}return void 0!==targetAlternation?resolveNdxInitializer(pos,alternateNdx):void 0}function isSubsetOf(source,target){function expand(pattern){for(var expanded=[],start=-1,end,i=0,l=pattern.length;i<l;i++)if("-"===pattern.charAt(i))for(end=pattern.charCodeAt(i+1);++start<end;)expanded.push(String.fromCharCode(start));else start=pattern.charCodeAt(i),expanded.push(pattern.charAt(i));return expanded.join("")}return source.match.def===target.match.nativeDef||!(!(opts.regex||source.match.fn instanceof RegExp&&target.match.fn instanceof RegExp)||!0===source.match.static||!0===target.match.static)&&-1!==expand(target.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(expand(source.match.fn.toString().replace(/[[\]/]/g,"")))}function staticCanMatchDefinition(source,target){return!0===source.match.static&&!0!==target.match.static&&target.match.fn.test(source.match.def,maskset,pos,!1,opts,!1)}function setMergeLocators(targetMatch,altMatch){var alternationNdx=targetMatch.alternation,shouldMerge=void 0===altMatch||alternationNdx===altMatch.alternation&&-1===targetMatch.locator[alternationNdx].toString().indexOf(altMatch.locator[alternationNdx]);if(!shouldMerge&&alternationNdx>altMatch.alternation)for(var i=altMatch.alternation;i<alternationNdx;i++)if(targetMatch.locator[i]!==altMatch.locator[i]){alternationNdx=i,shouldMerge=!0;break}if(shouldMerge){targetMatch.mloc=targetMatch.mloc||{};var locNdx=targetMatch.locator[alternationNdx];if(void 0!==locNdx){if("string"==typeof locNdx&&(locNdx=locNdx.split(",")[0]),void 0===targetMatch.mloc[locNdx]&&(targetMatch.mloc[locNdx]=targetMatch.locator.slice()),void 0!==altMatch){for(var ndx in altMatch.mloc)"string"==typeof ndx&&(ndx=ndx.split(",")[0]),void 0===targetMatch.mloc[ndx]&&(targetMatch.mloc[ndx]=altMatch.mloc[ndx]);targetMatch.locator[alternationNdx]=Object.keys(targetMatch.mloc).join(",")}return!0}targetMatch.alternation=void 0}return!1}function isSameLevel(targetMatch,altMatch){if(targetMatch.locator.length!==altMatch.locator.length)return!1;for(var locNdx=targetMatch.alternation+1;locNdx<targetMatch.locator.length;locNdx++)if(targetMatch.locator[locNdx]!==altMatch.locator[locNdx])return!1;return!0}if(testPos>pos+opts._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+maskset.mask;if(testPos===pos&&void 0===match.matches)return matches.push({match:match,locator:loopNdx.reverse(),cd:cacheDependency,mloc:{}}),!0;if(void 0!==match.matches){if(match.isGroup&&quantifierRecurse!==match){if(match=handleMatch(maskToken.matches[maskToken.matches.indexOf(match)+1],loopNdx,quantifierRecurse),match)return!0}else if(match.isOptional){var optionalToken=match,mtchsNdx=matches.length;if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match){if(matches.forEach(function(mtch,ndx){mtchsNdx<=ndx&&(mtch.match.optionality=!0)}),latestMatch=matches[matches.length-1].match,void 0!==quantifierRecurse||!isFirstMatch(latestMatch,optionalToken))return!0;insertStop=!0,testPos=pos}}else if(match.isAlternator){var alternateToken=match,malternateMatches=[],maltMatches,currentMatches=matches.slice(),loopNdxCnt=loopNdx.length,unMatchedAlternation=!1,altIndex=0<ndxInitializer.length?ndxInitializer.shift():-1;if(-1===altIndex||"string"==typeof altIndex){var currentPos=testPos,ndxInitializerClone=ndxInitializer.slice(),altIndexArr=[],amndx;if("string"==typeof altIndex)altIndexArr=altIndex.split(",");else for(amndx=0;amndx<alternateToken.matches.length;amndx++)altIndexArr.push(amndx.toString());if(void 0!==maskset.excludes[pos]){for(var altIndexArrClone=altIndexArr.slice(),i=0,exl=maskset.excludes[pos].length;i<exl;i++){var excludeSet=maskset.excludes[pos][i].toString().split(":");loopNdx.length==excludeSet[1]&&altIndexArr.splice(altIndexArr.indexOf(excludeSet[0]),1)}0===altIndexArr.length&&(delete maskset.excludes[pos],altIndexArr=altIndexArrClone)}(!0===opts.keepStatic||isFinite(parseInt(opts.keepStatic))&&currentPos>=opts.keepStatic)&&(altIndexArr=altIndexArr.slice(0,1));for(var ndx=0;ndx<altIndexArr.length;ndx++){amndx=parseInt(altIndexArr[ndx]),matches=[],ndxInitializer="string"==typeof altIndex&&resolveNdxInitializer(testPos,amndx,loopNdxCnt)||ndxInitializerClone.slice();var tokenMatch=alternateToken.matches[amndx];if(tokenMatch&&handleMatch(tokenMatch,[amndx].concat(loopNdx),quantifierRecurse))match=!0;else if(0===ndx&&(unMatchedAlternation=!0),tokenMatch&&tokenMatch.matches&&tokenMatch.matches.length>alternateToken.matches[0].matches.length)break;maltMatches=matches.slice(),testPos=currentPos,matches=[];for(var ndx1=0;ndx1<maltMatches.length;ndx1++){var altMatch=maltMatches[ndx1],dropMatch=!1;altMatch.match.jit=altMatch.match.jit||unMatchedAlternation,altMatch.alternation=altMatch.alternation||loopNdxCnt,setMergeLocators(altMatch);for(var ndx2=0;ndx2<malternateMatches.length;ndx2++){var altMatch2=malternateMatches[ndx2];if("string"!=typeof altIndex||void 0!==altMatch.alternation&&altIndexArr.includes(altMatch.locator[altMatch.alternation].toString())){if(altMatch.match.nativeDef===altMatch2.match.nativeDef){dropMatch=!0,setMergeLocators(altMatch2,altMatch);break}if(isSubsetOf(altMatch,altMatch2)){setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch));break}if(isSubsetOf(altMatch2,altMatch)){setMergeLocators(altMatch2,altMatch);break}if(staticCanMatchDefinition(altMatch,altMatch2)){isSameLevel(altMatch,altMatch2)||void 0!==el.inputmask.userOptions.keepStatic?setMergeLocators(altMatch,altMatch2)&&(dropMatch=!0,malternateMatches.splice(malternateMatches.indexOf(altMatch2),0,altMatch)):opts.keepStatic=!0;break}}}dropMatch||malternateMatches.push(altMatch)}}matches=currentMatches.concat(malternateMatches),testPos=pos,insertStop=0<matches.length,match=0<malternateMatches.length,ndxInitializer=ndxInitializerClone.slice()}else match=handleMatch(alternateToken.matches[altIndex]||maskToken.matches[altIndex],[altIndex].concat(loopNdx),quantifierRecurse);if(match)return!0}else if(match.isQuantifier&&quantifierRecurse!==maskToken.matches[maskToken.matches.indexOf(match)-1])for(var qt=match,qndx=0<ndxInitializer.length?ndxInitializer.shift():0;qndx<(isNaN(qt.quantifier.max)?qndx+1:qt.quantifier.max)&&testPos<=pos;qndx++){var tokenGroup=maskToken.matches[maskToken.matches.indexOf(qt)-1];if(match=handleMatch(tokenGroup,[qndx].concat(loopNdx),tokenGroup),match){if(latestMatch=matches[matches.length-1].match,latestMatch.optionalQuantifier=qndx>=qt.quantifier.min,latestMatch.jit=(qndx||1)*tokenGroup.matches.indexOf(latestMatch)>=qt.quantifier.jit,latestMatch.optionalQuantifier&&isFirstMatch(latestMatch,tokenGroup)){insertStop=!0,testPos=pos;break}return latestMatch.jit&&(maskset.jitOffset[pos]=tokenGroup.matches.length-tokenGroup.matches.indexOf(latestMatch)),!0}}else if(match=resolveTestFromToken(match,ndxInitializer,loopNdx,quantifierRecurse),match)return!0}else testPos++}for(var tndx=0<ndxInitializer.length?ndxInitializer.shift():0;tndx<maskToken.matches.length;tndx++)if(!0!==maskToken.matches[tndx].isQuantifier){var match=handleMatch(maskToken.matches[tndx],[tndx].concat(loopNdx),quantifierRecurse);if(match&&testPos===pos)return match;if(pos<testPos)break}}function mergeLocators(pos,tests){var locator=[],alternation;return Array.isArray(tests)||(tests=[tests]),0<tests.length&&(void 0===tests[0].alternation||!0===opts.keepStatic?(locator=determineTestTemplate.call(inputmask,pos,tests.slice()).locator.slice(),0===locator.length&&(locator=tests[0].locator.slice())):tests.forEach(function(tst){""!==tst.def&&(0===locator.length?(alternation=tst.alternation,locator=tst.locator.slice()):tst.locator[alternation]&&-1===locator[alternation].toString().indexOf(tst.locator[alternation])&&(locator[alternation]+=","+tst.locator[alternation]))})),locator}if(-1<pos&&(void 0===inputmask.maxLength||pos<inputmask.maxLength)){if(void 0===ndxIntlzr){for(var previousPos=pos-1,test;void 0===(test=maskset.validPositions[previousPos]||maskset.tests[previousPos])&&-1<previousPos;)previousPos--;void 0!==test&&-1<previousPos&&(ndxInitializer=mergeLocators(previousPos,test),cacheDependency=ndxInitializer.join(""),testPos=previousPos)}if(maskset.tests[pos]&&maskset.tests[pos][0].cd===cacheDependency)return maskset.tests[pos];for(var mtndx=ndxInitializer.shift();mtndx<maskTokens.length;mtndx++){var match=resolveTestFromToken(maskTokens[mtndx],ndxInitializer,[mtndx]);if(match&&testPos===pos||pos<testPos)break}}return 0!==matches.length&&!insertStop||matches.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:cacheDependency}),void 0!==ndxIntlzr&&maskset.tests[pos]?$.extend(!0,[],matches):(maskset.tests[pos]=$.extend(!0,[],matches),maskset.tests[pos])}Object.defineProperty(exports,"__esModule",{value:!0}),exports.determineTestTemplate=determineTestTemplate,exports.getDecisionTaker=getDecisionTaker,exports.getMaskTemplate=getMaskTemplate,exports.getPlaceholder=getPlaceholder,exports.getTest=getTest,exports.getTests=getTests,exports.getTestTemplate=getTestTemplate},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.alternate=alternate,exports.checkAlternationMatch=checkAlternationMatch,exports.isComplete=isComplete,exports.isValid=isValid,exports.refreshFromBuffer=refreshFromBuffer,exports.revalidateMask=revalidateMask,exports.handleRemove=handleRemove;var _validationTests=__webpack_require__(3),_keycode=_interopRequireDefault(__webpack_require__(0)),_positioning=__webpack_require__(1),_eventhandlers=__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function alternate(maskPos,c,strict,fromIsValid,rAltPos,selection){var inputmask=this,$=this.dependencyLib,opts=this.opts,maskset=this.maskset,validPsClone=$.extend(!0,{},maskset.validPositions),tstClone=$.extend(!0,{},maskset.tests),lastAlt,alternation,isValidRslt=!1,returnRslt=!1,altPos,prevAltPos,i,validPos,decisionPos,lAltPos=void 0!==rAltPos?rAltPos:_positioning.getLastValidPosition.call(this),nextPos,input,begin,end;if(selection&&(begin=selection.begin,end=selection.end,selection.begin>selection.end&&(begin=selection.end,end=selection.begin)),-1===lAltPos&&void 0===rAltPos)lastAlt=0,prevAltPos=_validationTests.getTest.call(this,lastAlt),alternation=prevAltPos.alternation;else for(;0<=lAltPos;lAltPos--)if(altPos=maskset.validPositions[lAltPos],altPos&&void 0!==altPos.alternation){if(prevAltPos&&prevAltPos.locator[altPos.alternation]!==altPos.locator[altPos.alternation])break;lastAlt=lAltPos,alternation=maskset.validPositions[lastAlt].alternation,prevAltPos=altPos}if(void 0!==alternation){decisionPos=parseInt(lastAlt),maskset.excludes[decisionPos]=maskset.excludes[decisionPos]||[],!0!==maskPos&&maskset.excludes[decisionPos].push((0,_validationTests.getDecisionTaker)(prevAltPos)+":"+prevAltPos.alternation);var validInputs=[],resultPos=-1;for(i=decisionPos;i<_positioning.getLastValidPosition.call(this,void 0,!0)+1;i++)-1===resultPos&&maskPos<=i&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1),validPos=maskset.validPositions[i],validPos&&!0!==validPos.generatedInput&&(void 0===selection||i<begin||end<=i)&&validInputs.push(validPos.input),delete maskset.validPositions[i];for(-1===resultPos&&void 0!==c&&(validInputs.push(c),resultPos=validInputs.length-1);void 0!==maskset.excludes[decisionPos]&&maskset.excludes[decisionPos].length<10;){for(maskset.tests={},_positioning.resetMaskSet.call(this,!0),isValidRslt=!0,i=0;i<validInputs.length&&(nextPos=isValidRslt.caret||_positioning.getLastValidPosition.call(this,void 0,!0)+1,input=validInputs[i],isValidRslt=isValid.call(this,nextPos,input,!1,fromIsValid,!0));i++)i===resultPos&&(returnRslt=isValidRslt),1==maskPos&&isValidRslt&&(returnRslt={caretPos:i});if(isValidRslt)break;if(_positioning.resetMaskSet.call(this),prevAltPos=_validationTests.getTest.call(this,decisionPos),maskset.validPositions=$.extend(!0,{},validPsClone),maskset.tests=$.extend(!0,{},tstClone),!maskset.excludes[decisionPos]){returnRslt=alternate.call(this,maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}var decisionTaker=(0,_validationTests.getDecisionTaker)(prevAltPos);if(-1!==maskset.excludes[decisionPos].indexOf(decisionTaker+":"+prevAltPos.alternation)){returnRslt=alternate.call(this,maskPos,c,strict,fromIsValid,decisionPos-1,selection);break}for(maskset.excludes[decisionPos].push(decisionTaker+":"+prevAltPos.alternation),i=decisionPos;i<_positioning.getLastValidPosition.call(this,void 0,!0)+1;i++)delete maskset.validPositions[i]}}return returnRslt&&!1===opts.keepStatic||delete maskset.excludes[decisionPos],returnRslt}function casing(elem,test,pos){var opts=this.opts,maskset=this.maskset;switch(opts.casing||test.casing){case"upper":elem=elem.toUpperCase();break;case"lower":elem=elem.toLowerCase();break;case"title":var posBefore=maskset.validPositions[pos-1];elem=0===pos||posBefore&&posBefore.input===String.fromCharCode(_keycode.default.SPACE)?elem.toUpperCase():elem.toLowerCase();break;default:if("function"==typeof opts.casing){var args=Array.prototype.slice.call(arguments);args.push(maskset.validPositions),elem=opts.casing.apply(this,args)}}return elem}function checkAlternationMatch(altArr1,altArr2,na){for(var opts=this.opts,altArrC=opts.greedy?altArr2:altArr2.slice(0,1),isMatch=!1,naArr=void 0!==na?na.split(","):[],naNdx,i=0;i<naArr.length;i++)-1!==(naNdx=altArr1.indexOf(naArr[i]))&&altArr1.splice(naNdx,1);for(var alndx=0;alndx<altArr1.length;alndx++)if(altArrC.includes(altArr1[alndx])){isMatch=!0;break}return isMatch}function handleRemove(input,k,pos,strict,fromIsValid){var inputmask=this,maskset=this.maskset,opts=this.opts;if((opts.numericInput||this.isRTL)&&(k===_keycode.default.BACKSPACE?k=_keycode.default.DELETE:k===_keycode.default.DELETE&&(k=_keycode.default.BACKSPACE),this.isRTL)){var pend=pos.end;pos.end=pos.begin,pos.begin=pend}var lvp=_positioning.getLastValidPosition.call(this,void 0,!0),offset;if(pos.end>=_positioning.getBuffer.call(this).length&&lvp>=pos.end&&(pos.end=lvp+1),k===_keycode.default.BACKSPACE?pos.end-pos.begin<1&&(pos.begin=_positioning.seekPrevious.call(this,pos.begin)):k===_keycode.default.DELETE&&pos.begin===pos.end&&(pos.end=_positioning.isMask.call(this,pos.end,!0,!0)?pos.end+1:_positioning.seekNext.call(this,pos.end)+1),!1!==(offset=revalidateMask.call(this,pos))){if(!0!==strict&&!1!==opts.keepStatic||null!==opts.regex&&-1!==_validationTests.getTest.call(this,pos.begin).match.def.indexOf("|")){var result=alternate.call(this,!0);if(result){var newPos=void 0!==result.caret?result.caret:result.pos?_positioning.seekNext.call(this,result.pos.begin?result.pos.begin:result.pos):_positioning.getLastValidPosition.call(this,-1,!0);(k!==_keycode.default.DELETE||pos.begin>newPos)&&pos.begin}}!0!==strict&&(maskset.p=k===_keycode.default.DELETE?pos.begin+offset:pos.begin)}}function isComplete(buffer){var inputmask=this,opts=this.opts,maskset=this.maskset;if("function"==typeof opts.isComplete)return opts.isComplete(buffer,opts);if("*"!==opts.repeat){var complete=!1,lrp=_positioning.determineLastRequiredPosition.call(this,!0),aml=_positioning.seekPrevious.call(this,lrp.l);if(void 0===lrp.def||lrp.def.newBlockMarker||lrp.def.optionality||lrp.def.optionalQuantifier){complete=!0;for(var i=0;i<=aml;i++){var test=_validationTests.getTestTemplate.call(this,i).match;if(!0!==test.static&&void 0===maskset.validPositions[i]&&!0!==test.optionality&&!0!==test.optionalQuantifier||!0===test.static&&buffer[i]!==_validationTests.getPlaceholder.call(this,i,test)){complete=!1;break}}}return complete}}function isValid(pos,c,strict,fromIsValid,fromAlternate,validateOnly,fromCheckval){var inputmask=this,$=this.dependencyLib,opts=this.opts,el=inputmask.el,maskset=inputmask.maskset;function isSelection(posObj){return inputmask.isRTL?1<posObj.begin-posObj.end||posObj.begin-posObj.end==1:1<posObj.end-posObj.begin||posObj.end-posObj.begin==1}strict=!0===strict;var maskPos=pos;function processCommandObject(commandObj){if(void 0!==commandObj){if(void 0!==commandObj.remove&&(Array.isArray(commandObj.remove)||(commandObj.remove=[commandObj.remove]),commandObj.remove.sort(function(a,b){return b.pos-a.pos}).forEach(function(lmnt){revalidateMask.call(inputmask,{begin:lmnt,end:lmnt+1})}),commandObj.remove=void 0),void 0!==commandObj.insert&&(Array.isArray(commandObj.insert)||(commandObj.insert=[commandObj.insert]),commandObj.insert.sort(function(a,b){return a.pos-b.pos}).forEach(function(lmnt){""!==lmnt.c&&isValid.call(inputmask,lmnt.pos,lmnt.c,void 0===lmnt.strict||lmnt.strict,void 0!==lmnt.fromIsValid?lmnt.fromIsValid:fromIsValid)}),commandObj.insert=void 0),commandObj.refreshFromBuffer&&commandObj.buffer){var refresh=commandObj.refreshFromBuffer;refreshFromBuffer.call(inputmask,!0===refresh?refresh:refresh.start,refresh.end,commandObj.buffer),commandObj.refreshFromBuffer=void 0}void 0!==commandObj.rewritePosition&&(maskPos=commandObj.rewritePosition,commandObj=!0)}return commandObj}function _isValid(position,c,strict){var rslt=!1;return _validationTests.getTests.call(inputmask,position).every(function(tst,ndx){var test=tst.match;if(_positioning.getBuffer.call(inputmask,!0),rslt=null!=test.fn?test.fn.test(c,maskset,position,strict,opts,isSelection(pos)):(c===test.def||c===opts.skipOptionalPartCharacter)&&""!==test.def&&{c:_validationTests.getPlaceholder.call(inputmask,position,test,!0)||test.def,pos:position},!1===rslt)return!0;var elem=void 0!==rslt.c?rslt.c:c,validatedPos=position;return elem=elem===opts.skipOptionalPartCharacter&&!0===test.static?_validationTests.getPlaceholder.call(inputmask,position,test,!0)||test.def:elem,rslt=processCommandObject(rslt),!0!==rslt&&void 0!==rslt.pos&&rslt.pos!==position&&(validatedPos=rslt.pos),!0!==rslt&&void 0===rslt.pos&&void 0===rslt.c||!1===revalidateMask.call(inputmask,pos,$.extend({},tst,{input:casing.call(inputmask,elem,test,validatedPos)}),fromIsValid,validatedPos)&&(rslt=!1),!1}),rslt}void 0!==pos.begin&&(maskPos=inputmask.isRTL?pos.end:pos.begin);var result=!0,positionsClone=$.extend(!0,{},maskset.validPositions);if(!1===opts.keepStatic&&void 0!==maskset.excludes[maskPos]&&!0!==fromAlternate&&!0!==fromIsValid)for(var i=maskPos;i<(inputmask.isRTL?pos.begin:pos.end);i++)void 0!==maskset.excludes[i]&&(maskset.excludes[i]=void 0,delete maskset.tests[i]);if("function"==typeof opts.preValidation&&!0!==fromIsValid&&!0!==validateOnly&&(result=opts.preValidation.call(inputmask,_positioning.getBuffer.call(inputmask),maskPos,c,isSelection(pos),opts,maskset,pos,strict||fromAlternate),result=processCommandObject(result)),!0===result){if(void 0===inputmask.maxLength||maskPos<_positioning.translatePosition.call(inputmask,inputmask.maxLength)){if(result=_isValid(maskPos,c,strict),(!strict||!0===fromIsValid)&&!1===result&&!0!==validateOnly){var currentPosValid=maskset.validPositions[maskPos];if(!currentPosValid||!0!==currentPosValid.match.static||currentPosValid.match.def!==c&&c!==opts.skipOptionalPartCharacter){if(opts.insertMode||void 0===maskset.validPositions[_positioning.seekNext.call(inputmask,maskPos)]||pos.end>maskPos){var skip=!1;if(maskset.jitOffset[maskPos]&&void 0===maskset.validPositions[_positioning.seekNext.call(inputmask,maskPos)]&&(result=isValid.call(inputmask,maskPos+maskset.jitOffset[maskPos],c,!0),!1!==result&&(!0!==fromAlternate&&(result.caret=maskPos),skip=!0)),pos.end>maskPos&&(maskset.validPositions[maskPos]=void 0),!skip&&!_positioning.isMask.call(inputmask,maskPos,opts.keepStatic&&0===maskPos))for(var nPos=maskPos+1,snPos=_positioning.seekNext.call(inputmask,maskPos,!1,0!==maskPos);nPos<=snPos;nPos++)if(result=_isValid(nPos,c,strict),!1!==result){result=trackbackPositions.call(inputmask,maskPos,void 0!==result.pos?result.pos:nPos)||result,maskPos=nPos;break}}}else result={caret:_positioning.seekNext.call(inputmask,maskPos)}}}else result=!1;!1!==result||!opts.keepStatic||!isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&0!==maskPos||strict||!0===fromAlternate?isSelection(pos)&&maskset.tests[maskPos]&&1<maskset.tests[maskPos].length&&opts.keepStatic&&!strict&&!0!==fromAlternate&&(result=alternate.call(inputmask,!0)):result=alternate.call(inputmask,maskPos,c,strict,fromIsValid,void 0,pos),!0===result&&(result={pos:maskPos})}if("function"==typeof opts.postValidation&&!0!==fromIsValid&&!0!==validateOnly){var postResult=opts.postValidation.call(inputmask,_positioning.getBuffer.call(inputmask,!0),void 0!==pos.begin?inputmask.isRTL?pos.end:pos.begin:pos,c,result,opts,maskset,strict,fromCheckval);void 0!==postResult&&(result=!0===postResult?result:postResult)}result&&void 0===result.pos&&(result.pos=maskPos),!1===result||!0===validateOnly?(_positioning.resetMaskSet.call(inputmask,!0),maskset.validPositions=$.extend(!0,{},positionsClone)):trackbackPositions.call(inputmask,void 0,maskPos,!0);var endResult=processCommandObject(result);return endResult}function positionCanMatchDefinition(pos,testDefinition,opts){for(var inputmask=this,maskset=this.maskset,valid=!1,tests=_validationTests.getTests.call(this,pos),tndx=0;tndx<tests.length;tndx++){if(tests[tndx].match&&(!(tests[tndx].match.nativeDef!==testDefinition.match[opts.shiftPositions?"def":"nativeDef"]||opts.shiftPositions&&testDefinition.match.static)||tests[tndx].match.nativeDef===testDefinition.match.nativeDef)){valid=!0;break}if(tests[tndx].match&&tests[tndx].match.def===testDefinition.match.nativeDef){valid=void 0;break}}return!1===valid&&void 0!==maskset.jitOffset[pos]&&(valid=positionCanMatchDefinition.call(this,pos+maskset.jitOffset[pos],testDefinition,opts)),valid}function refreshFromBuffer(start,end,buffer){var inputmask=this,maskset=this.maskset,opts=this.opts,$=this.dependencyLib,el=this.el,i,p,skipOptionalPartCharacter=opts.skipOptionalPartCharacter,bffr=this.isRTL?buffer.slice().reverse():buffer;if(opts.skipOptionalPartCharacter="",!0===start)_positioning.resetMaskSet.call(this),maskset.tests={},start=0,end=buffer.length,p=_positioning.determineNewCaretPosition.call(this,{begin:0,end:0},!1).begin;else{for(i=start;i<end;i++)delete maskset.validPositions[i];p=start}var keypress=new $.Event("keypress");for(i=start;i<end;i++){keypress.which=bffr[i].toString().charCodeAt(0),this.ignorable=!1;var valResult=_eventhandlers.EventHandlers.keypressEvent.call(el,keypress,!0,!1,!1,p);!1!==valResult&&(p=valResult.forwardPosition)}opts.skipOptionalPartCharacter=skipOptionalPartCharacter}function trackbackPositions(originalPos,newPos,fillOnly){var inputmask=this,maskset=this.maskset,$=this.dependencyLib;if(void 0===originalPos)for(originalPos=newPos-1;0<originalPos&&!maskset.validPositions[originalPos];originalPos--);for(var ps=originalPos;ps<newPos;ps++)if(void 0===maskset.validPositions[ps]&&!_positioning.isMask.call(this,ps,!0)){var vp=0==ps?_validationTests.getTest.call(this,ps):maskset.validPositions[ps-1];if(vp){var tests=_validationTests.getTests.call(this,ps).slice();""===tests[tests.length-1].match.def&&tests.pop();var bestMatch=_validationTests.determineTestTemplate.call(this,ps,tests),np;if(bestMatch&&(!0!==bestMatch.match.jit||"master"===bestMatch.match.newBlockMarker&&(np=maskset.validPositions[ps+1])&&!0===np.match.optionalQuantifier)&&(bestMatch=$.extend({},bestMatch,{input:_validationTests.getPlaceholder.call(this,ps,bestMatch.match,!0)||bestMatch.match.def}),bestMatch.generatedInput=!0,revalidateMask.call(this,ps,bestMatch,!0),!0!==fillOnly)){var cvpInput=maskset.validPositions[newPos].input;return maskset.validPositions[newPos]=void 0,isValid.call(this,newPos,cvpInput,!0,!0)}}}}function revalidateMask(pos,validTest,fromIsValid,validatedPos){var inputmask=this,maskset=this.maskset,opts=this.opts,$=this.dependencyLib;function IsEnclosedStatic(pos,valids,selection){var posMatch=valids[pos];if(void 0===posMatch||!0!==posMatch.match.static||!0===posMatch.match.optionality||void 0!==valids[0]&&void 0!==valids[0].alternation)return!1;var prevMatch=selection.begin<=pos-1?valids[pos-1]&&!0===valids[pos-1].match.static&&valids[pos-1]:valids[pos-1],nextMatch=selection.end>pos+1?valids[pos+1]&&!0===valids[pos+1].match.static&&valids[pos+1]:valids[pos+1];return prevMatch&&nextMatch}var offset=0,begin=void 0!==pos.begin?pos.begin:pos,end=void 0!==pos.end?pos.end:pos;if(pos.begin>pos.end&&(begin=pos.end,end=pos.begin),validatedPos=void 0!==validatedPos?validatedPos:begin,begin!==end||opts.insertMode&&void 0!==maskset.validPositions[validatedPos]&&void 0===fromIsValid||void 0===validTest){var positionsClone=$.extend(!0,{},maskset.validPositions),lvp=_positioning.getLastValidPosition.call(this,void 0,!0),i;for(maskset.p=begin,i=lvp;begin<=i;i--)delete maskset.validPositions[i],void 0===validTest&&delete maskset.tests[i+1];var valid=!0,j=validatedPos,posMatch=j,t,canMatch;for(validTest&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest),posMatch++,j++),i=validTest?end:end-1;i<=lvp;i++){if(void 0!==(t=positionsClone[i])&&!0!==t.generatedInput&&(end<=i||begin<=i&&IsEnclosedStatic(i,positionsClone,{begin:begin,end:end}))){for(;""!==_validationTests.getTest.call(this,posMatch).match.def;){if(!1!==(canMatch=positionCanMatchDefinition.call(this,posMatch,t,opts))||"+"===t.match.def){"+"===t.match.def&&_positioning.getBuffer.call(this,!0);var result=isValid.call(this,posMatch,t.input,"+"!==t.match.def,"+"!==t.match.def);if(valid=!1!==result,j=(result.pos||posMatch)+1,!valid&&canMatch)break}else valid=!1;if(valid){void 0===validTest&&t.match.static&&i===pos.begin&&offset++;break}if(!valid&&posMatch>maskset.maskLength)break;posMatch++}""==_validationTests.getTest.call(this,posMatch).match.def&&(valid=!1),posMatch=j}if(!valid)break}if(!valid)return maskset.validPositions=$.extend(!0,{},positionsClone),_positioning.resetMaskSet.call(this,!0),!1}else validTest&&_validationTests.getTest.call(this,validatedPos).match.cd===validTest.match.cd&&(maskset.validPositions[validatedPos]=$.extend(!0,{},validTest));return _positioning.resetMaskSet.call(this,!0),offset}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyInputValue=applyInputValue,exports.clearOptionalTail=clearOptionalTail,exports.checkVal=checkVal,exports.HandleNativePlaceholder=HandleNativePlaceholder,exports.unmaskedvalue=unmaskedvalue,exports.writeBuffer=writeBuffer;var _keycode=_interopRequireDefault(__webpack_require__(0)),_validationTests=__webpack_require__(3),_positioning=__webpack_require__(1),_validation=__webpack_require__(4),_environment=__webpack_require__(7),_eventhandlers=__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function applyInputValue(input,value){var inputmask=input?input.inputmask:this,opts=inputmask.opts;input.inputmask.refreshValue=!1,"function"==typeof opts.onBeforeMask&&(value=opts.onBeforeMask.call(inputmask,value,opts)||value),value=value.toString().split(""),checkVal(input,!0,!1,value),inputmask.undoValue=_positioning.getBuffer.call(inputmask).join(""),(opts.clearMaskOnLostFocus||opts.clearIncomplete)&&input.inputmask._valueGet()===_positioning.getBufferTemplate.call(inputmask).join("")&&-1===_positioning.getLastValidPosition.call(inputmask)&&input.inputmask._valueSet("")}function clearOptionalTail(buffer){var inputmask=this;buffer.length=0;for(var template=_validationTests.getMaskTemplate.call(this,!0,0,!0,void 0,!0),lmnt;void 0!==(lmnt=template.shift());)buffer.push(lmnt);return buffer}function checkVal(input,writeOut,strict,nptvl,initiatingEvent){var inputmask=input?input.inputmask:this,maskset=inputmask.maskset,opts=inputmask.opts,$=inputmask.dependencyLib,inputValue=nptvl.slice(),charCodes="",initialNdx=-1,result=void 0,skipOptionalPartCharacter=opts.skipOptionalPartCharacter;function isTemplateMatch(ndx,charCodes){for(var targetTemplate=_validationTests.getMaskTemplate.call(inputmask,!0,0).slice(ndx,_positioning.seekNext.call(inputmask,ndx,!1,!1)).join("").replace(/'/g,""),charCodeNdx=targetTemplate.indexOf(charCodes);0<charCodeNdx&&" "===targetTemplate[charCodeNdx-1];)charCodeNdx--;var match=0===charCodeNdx&&!_positioning.isMask.call(inputmask,ndx)&&(_validationTests.getTest.call(inputmask,ndx).match.nativeDef===charCodes.charAt(0)||!0===_validationTests.getTest.call(inputmask,ndx).match.static&&_validationTests.getTest.call(inputmask,ndx).match.nativeDef==="'"+charCodes.charAt(0)||" "===_validationTests.getTest.call(inputmask,ndx).match.nativeDef&&(_validationTests.getTest.call(inputmask,ndx+1).match.nativeDef===charCodes.charAt(0)||!0===_validationTests.getTest.call(inputmask,ndx+1).match.static&&_validationTests.getTest.call(inputmask,ndx+1).match.nativeDef==="'"+charCodes.charAt(0)));if(!match&&0<charCodeNdx&&!_positioning.isMask.call(inputmask,ndx,!1,!0)){var nextPos=_positioning.seekNext.call(inputmask,ndx);inputmask.caretPos.begin<nextPos&&(inputmask.caretPos={begin:nextPos})}return match}opts.skipOptionalPartCharacter="",_positioning.resetMaskSet.call(inputmask),maskset.tests={},initialNdx=opts.radixPoint?_positioning.determineNewCaretPosition.call(inputmask,{begin:0,end:0}).begin:0,maskset.p=initialNdx,inputmask.caretPos={begin:initialNdx};var staticMatches=[],prevCaretPos=inputmask.caretPos;if(inputValue.forEach(function(charCode,ndx){if(void 0!==charCode)if(void 0===maskset.validPositions[ndx]&&inputValue[ndx]===_validationTests.getPlaceholder.call(inputmask,ndx)&&_positioning.isMask.call(inputmask,ndx,!0)&&!1===_validation.isValid.call(inputmask,ndx,inputValue[ndx],!0,void 0,void 0,!0))maskset.p++;else{var keypress=new $.Event("_checkval");keypress.which=charCode.toString().charCodeAt(0),charCodes+=charCode;var lvp=_positioning.getLastValidPosition.call(inputmask,void 0,!0);isTemplateMatch(initialNdx,charCodes)?result=_eventhandlers.EventHandlers.keypressEvent.call(inputmask,keypress,!0,!1,strict,lvp+1):(result=_eventhandlers.EventHandlers.keypressEvent.call(inputmask,keypress,!0,!1,strict,inputmask.caretPos.begin),result&&(initialNdx=inputmask.caretPos.begin+1,charCodes="")),result?(void 0!==result.pos&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static&&void 0===maskset.validPositions[result.pos].alternation&&(staticMatches.push(result.pos),inputmask.isRTL||(result.forwardPosition=result.pos+1)),writeBuffer.call(inputmask,void 0,_positioning.getBuffer.call(inputmask),result.forwardPosition,keypress,!1),inputmask.caretPos={begin:result.forwardPosition,end:result.forwardPosition},prevCaretPos=inputmask.caretPos):inputmask.caretPos=prevCaretPos}}),0<staticMatches.length){var sndx,validPos,nextValid=_positioning.seekNext.call(inputmask,-1,void 0,!1);if(!_validation.isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&staticMatches.length<=nextValid||_validation.isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&0<staticMatches.length&&staticMatches.length!==nextValid&&0===staticMatches[0])for(var nextSndx=nextValid;void 0!==(sndx=staticMatches.shift());){var keypress=new $.Event("_checkval");if(validPos=maskset.validPositions[sndx],validPos.generatedInput=!0,keypress.which=validPos.input.charCodeAt(0),result=_eventhandlers.EventHandlers.keypressEvent.call(inputmask,keypress,!0,!1,strict,nextSndx),result&&void 0!==result.pos&&result.pos!==sndx&&maskset.validPositions[result.pos]&&!0===maskset.validPositions[result.pos].match.static)staticMatches.push(result.pos);else if(!result)break;nextSndx++}}writeOut&&writeBuffer.call(inputmask,input,_positioning.getBuffer.call(inputmask),result?result.forwardPosition:inputmask.caretPos.begin,initiatingEvent||new $.Event("checkval"),initiatingEvent&&"input"===initiatingEvent.type&&inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join("")),opts.skipOptionalPartCharacter=skipOptionalPartCharacter}function HandleNativePlaceholder(npt,value){var inputmask=npt?npt.inputmask:this;if(_environment.ie){if(npt.inputmask._valueGet()!==value&&(npt.placeholder!==value||""===npt.placeholder)){var buffer=_positioning.getBuffer.call(inputmask).slice(),nptValue=npt.inputmask._valueGet();if(nptValue!==value){var lvp=_positioning.getLastValidPosition.call(inputmask);-1===lvp&&nptValue===_positioning.getBufferTemplate.call(inputmask).join("")?buffer=[]:-1!==lvp&&clearOptionalTail.call(inputmask,buffer),writeBuffer(npt,buffer)}}}else npt.placeholder!==value&&(npt.placeholder=value,""===npt.placeholder&&npt.removeAttribute("placeholder"))}function unmaskedvalue(input){var inputmask=input?input.inputmask:this,opts=inputmask.opts,maskset=inputmask.maskset;if(input){if(void 0===input.inputmask)return input.value;input.inputmask&&input.inputmask.refreshValue&&applyInputValue(input,input.inputmask._valueGet(!0))}var umValue=[],vps=maskset.validPositions;for(var pndx in vps)vps[pndx]&&vps[pndx].match&&(1!=vps[pndx].match.static||Array.isArray(maskset.metadata)&&!0!==vps[pndx].generatedInput)&&umValue.push(vps[pndx].input);var unmaskedValue=0===umValue.length?"":(inputmask.isRTL?umValue.reverse():umValue).join("");if("function"==typeof opts.onUnMask){var bufferValue=(inputmask.isRTL?_positioning.getBuffer.call(inputmask).slice().reverse():_positioning.getBuffer.call(inputmask)).join("");unmaskedValue=opts.onUnMask.call(inputmask,bufferValue,unmaskedValue,opts)}return unmaskedValue}function writeBuffer(input,buffer,caretPos,event,triggerEvents){var inputmask=input?input.inputmask:this,opts=inputmask.opts,$=inputmask.dependencyLib;if(event&&"function"==typeof opts.onBeforeWrite){var result=opts.onBeforeWrite.call(inputmask,event,buffer,caretPos,opts);if(result){if(result.refreshFromBuffer){var refresh=result.refreshFromBuffer;_validation.refreshFromBuffer.call(inputmask,!0===refresh?refresh:refresh.start,refresh.end,result.buffer||buffer),buffer=_positioning.getBuffer.call(inputmask,!0)}void 0!==caretPos&&(caretPos=void 0!==result.caret?result.caret:caretPos)}}if(void 0!==input&&(input.inputmask._valueSet(buffer.join("")),void 0===caretPos||void 0!==event&&"blur"===event.type||_positioning.caret.call(inputmask,input,caretPos,void 0,void 0,void 0!==event&&"keydown"===event.type&&(event.keyCode===_keycode.default.DELETE||event.keyCode===_keycode.default.BACKSPACE)),!0===triggerEvents)){var $input=$(input),nptVal=input.inputmask._valueGet();input.inputmask.skipInputEvent=!0,$input.trigger("input"),setTimeout(function(){nptVal===_positioning.getBufferTemplate.call(inputmask).join("")?$input.trigger("cleared"):!0===_validation.isComplete.call(inputmask,buffer)&&$input.trigger("complete")},0)}}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventHandlers=void 0;var _positioning=__webpack_require__(1),_keycode=_interopRequireDefault(__webpack_require__(0)),_environment=__webpack_require__(7),_validation=__webpack_require__(4),_inputHandling=__webpack_require__(5),_validationTests=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var EventHandlers={keydownEvent:function keydownEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,$=inputmask.dependencyLib,maskset=inputmask.maskset,input=this,$input=$(input),k=e.keyCode,pos=_positioning.caret.call(inputmask,input),kdResult=opts.onKeyDown.call(this,e,_positioning.getBuffer.call(inputmask),pos,opts);if(void 0!==kdResult)return kdResult;if(k===_keycode.default.BACKSPACE||k===_keycode.default.DELETE||_environment.iphone&&k===_keycode.default.BACKSPACE_SAFARI||e.ctrlKey&&k===_keycode.default.X&&!("oncut"in input))e.preventDefault(),_validation.handleRemove.call(inputmask,input,k,pos),(0,_inputHandling.writeBuffer)(input,_positioning.getBuffer.call(inputmask,!0),maskset.p,e,input.inputmask._valueGet()!==_positioning.getBuffer.call(inputmask).join(""));else if(k===_keycode.default.END||k===_keycode.default.PAGE_DOWN){e.preventDefault();var caretPos=_positioning.seekNext.call(inputmask,_positioning.getLastValidPosition.call(inputmask));_positioning.caret.call(inputmask,input,e.shiftKey?pos.begin:caretPos,caretPos,!0)}else k===_keycode.default.HOME&&!e.shiftKey||k===_keycode.default.PAGE_UP?(e.preventDefault(),_positioning.caret.call(inputmask,input,0,e.shiftKey?pos.begin:0,!0)):(opts.undoOnEscape&&k===_keycode.default.ESCAPE||90===k&&e.ctrlKey)&&!0!==e.altKey?((0,_inputHandling.checkVal)(input,!0,!1,inputmask.undoValue.split("")),$input.trigger("click")):!0===opts.tabThrough&&k===_keycode.default.TAB?!0===e.shiftKey?(pos.end=_positioning.seekPrevious.call(inputmask,pos.end,!0),!0===_validationTests.getTest.call(inputmask,pos.end-1).match.static&&pos.end--,pos.begin=_positioning.seekPrevious.call(inputmask,pos.end,!0),0<=pos.begin&&0<pos.end&&(e.preventDefault(),_positioning.caret.call(inputmask,input,pos.begin,pos.end))):(pos.begin=_positioning.seekNext.call(inputmask,pos.begin,!0),pos.end=_positioning.seekNext.call(inputmask,pos.begin,!0),pos.end<maskset.maskLength&&pos.end--,pos.begin<=maskset.maskLength&&(e.preventDefault(),_positioning.caret.call(inputmask,input,pos.begin,pos.end))):e.shiftKey||opts.insertModeVisual&&!1===opts.insertMode&&(k===_keycode.default.RIGHT?setTimeout(function(){var caretPos=_positioning.caret.call(inputmask,input);_positioning.caret.call(inputmask,input,caretPos.begin)},0):k===_keycode.default.LEFT&&setTimeout(function(){var caretPos_begin=_positioning.translatePosition.call(inputmask,input.inputmask.caretPos.begin),caretPos_end=_positioning.translatePosition.call(inputmask,input.inputmask.caretPos.end);inputmask.isRTL?_positioning.caret.call(inputmask,input,caretPos_begin+(caretPos_begin===maskset.maskLength?0:1)):_positioning.caret.call(inputmask,input,caretPos_begin-(0===caretPos_begin?0:1))},0));inputmask.ignorable=opts.ignorables.includes(k)},keypressEvent:function keypressEvent(e,checkval,writeOut,strict,ndx){var inputmask=this.inputmask||this,opts=inputmask.opts,$=inputmask.dependencyLib,maskset=inputmask.maskset,input=inputmask.el,$input=$(input),k=e.which||e.charCode||e.keyCode;if(!(!0===checkval||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||inputmask.ignorable))return k===_keycode.default.ENTER&&inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join("")&&(inputmask.undoValue=_positioning.getBuffer.call(inputmask).join(""),setTimeout(function(){$input.trigger("change")},0)),inputmask.skipInputEvent=!0,!0;if(k){44!==k&&46!==k||3!==e.location||""===opts.radixPoint||(k=opts.radixPoint.charCodeAt(0));var pos=checkval?{begin:ndx,end:ndx}:_positioning.caret.call(inputmask,input),forwardPosition,c=String.fromCharCode(k);maskset.writeOutBuffer=!0;var valResult=_validation.isValid.call(inputmask,pos,c,strict,void 0,void 0,void 0,checkval);if(!1!==valResult&&(_positioning.resetMaskSet.call(inputmask,!0),forwardPosition=void 0!==valResult.caret?valResult.caret:_positioning.seekNext.call(inputmask,valResult.pos.begin?valResult.pos.begin:valResult.pos),maskset.p=forwardPosition),forwardPosition=opts.numericInput&&void 0===valResult.caret?_positioning.seekPrevious.call(inputmask,forwardPosition):forwardPosition,!1!==writeOut&&(setTimeout(function(){opts.onKeyValidation.call(input,k,valResult)},0),maskset.writeOutBuffer&&!1!==valResult)){var buffer=_positioning.getBuffer.call(inputmask);(0,_inputHandling.writeBuffer)(input,buffer,forwardPosition,e,!0!==checkval)}if(e.preventDefault(),checkval)return!1!==valResult&&(valResult.forwardPosition=forwardPosition),valResult}},keyupEvent:function keyupEvent(e){var inputmask=this.inputmask;!inputmask.isComposing||e.keyCode!==_keycode.default.KEY_229&&e.keyCode!==_keycode.default.ENTER||inputmask.$el.trigger("input")},pasteEvent:function pasteEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,input=this,inputValue=inputmask._valueGet(!0),caretPos=_positioning.caret.call(inputmask,this),tempValue;inputmask.isRTL&&(tempValue=caretPos.end,caretPos.end=caretPos.begin,caretPos.begin=tempValue);var valueBeforeCaret=inputValue.substr(0,caretPos.begin),valueAfterCaret=inputValue.substr(caretPos.end,inputValue.length);if(valueBeforeCaret==(inputmask.isRTL?_positioning.getBufferTemplate.call(inputmask).slice().reverse():_positioning.getBufferTemplate.call(inputmask)).slice(0,caretPos.begin).join("")&&(valueBeforeCaret=""),valueAfterCaret==(inputmask.isRTL?_positioning.getBufferTemplate.call(inputmask).slice().reverse():_positioning.getBufferTemplate.call(inputmask)).slice(caretPos.end).join("")&&(valueAfterCaret=""),window.clipboardData&&window.clipboardData.getData)inputValue=valueBeforeCaret+window.clipboardData.getData("Text")+valueAfterCaret;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;inputValue=valueBeforeCaret+e.clipboardData.getData("text/plain")+valueAfterCaret}var pasteValue=inputValue;if("function"==typeof opts.onBeforePaste){if(pasteValue=opts.onBeforePaste.call(inputmask,inputValue,opts),!1===pasteValue)return e.preventDefault();pasteValue=pasteValue||inputValue}return(0,_inputHandling.checkVal)(this,!0,!1,pasteValue.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function inputFallBackEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,$=inputmask.dependencyLib;function ieMobileHandler(input,inputValue,caretPos){if(_environment.iemobile){var inputChar=inputValue.replace(_positioning.getBuffer.call(inputmask).join(""),"");if(1===inputChar.length){var iv=inputValue.split("");iv.splice(caretPos.begin,0,inputChar),inputValue=iv.join("")}}return inputValue}function analyseChanges(inputValue,buffer,caretPos){for(var frontPart=inputValue.substr(0,caretPos.begin).split(""),backPart=inputValue.substr(caretPos.begin).split(""),frontBufferPart=buffer.substr(0,caretPos.begin).split(""),backBufferPart=buffer.substr(caretPos.begin).split(""),fpl=frontPart.length>=frontBufferPart.length?frontPart.length:frontBufferPart.length,bpl=backPart.length>=backBufferPart.length?backPart.length:backBufferPart.length,bl,i,action="",data=[],marker="~",placeholder;frontPart.length<fpl;)frontPart.push("~");for(;frontBufferPart.length<fpl;)frontBufferPart.push("~");for(;backPart.length<bpl;)backPart.unshift("~");for(;backBufferPart.length<bpl;)backBufferPart.unshift("~");var newBuffer=frontPart.concat(backPart),oldBuffer=frontBufferPart.concat(backBufferPart);for(i=0,bl=newBuffer.length;i<bl;i++)switch(placeholder=_validationTests.getPlaceholder.call(inputmask,_positioning.translatePosition.call(inputmask,i)),action){case"insertText":oldBuffer[i-1]===newBuffer[i]&&caretPos.begin==newBuffer.length-1&&data.push(newBuffer[i]),i=bl;break;case"insertReplacementText":"~"===newBuffer[i]?caretPos.end++:i=bl;break;case"deleteContentBackward":"~"===newBuffer[i]?caretPos.end++:i=bl;break;default:newBuffer[i]!==oldBuffer[i]&&("~"!==newBuffer[i+1]&&newBuffer[i+1]!==placeholder&&void 0!==newBuffer[i+1]||(oldBuffer[i]!==placeholder||"~"!==oldBuffer[i+1])&&"~"!==oldBuffer[i]?"~"===oldBuffer[i+1]&&oldBuffer[i]===newBuffer[i+1]?(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--):newBuffer[i]!==placeholder&&"~"!==newBuffer[i]&&("~"===newBuffer[i+1]||oldBuffer[i]!==newBuffer[i]&&oldBuffer[i+1]===newBuffer[i+1])?(action="insertReplacementText",data.push(newBuffer[i]),caretPos.begin--):"~"===newBuffer[i]?(action="deleteContentBackward",!_positioning.isMask.call(inputmask,_positioning.translatePosition.call(inputmask,i),!0)&&oldBuffer[i]!==opts.radixPoint||caretPos.end++):i=bl:(action="insertText",data.push(newBuffer[i]),caretPos.begin--,caretPos.end--));break}return{action:action,data:data,caret:caretPos}}var input=this,inputValue=input.inputmask._valueGet(!0),buffer=(inputmask.isRTL?_positioning.getBuffer.call(inputmask).slice().reverse():_positioning.getBuffer.call(inputmask)).join(""),caretPos=_positioning.caret.call(inputmask,input,void 0,void 0,!0);if(buffer!==inputValue){inputValue=ieMobileHandler(input,inputValue,caretPos);var changes=analyseChanges(inputValue,buffer,caretPos);switch((input.inputmask.shadowRoot||document).activeElement!==input&&input.focus(),(0,_inputHandling.writeBuffer)(input,_positioning.getBuffer.call(inputmask)),_positioning.caret.call(inputmask,input,caretPos.begin,caretPos.end,!0),changes.action){case"insertText":case"insertReplacementText":changes.data.forEach(function(entry,ndx){var keypress=new $.Event("keypress");keypress.which=entry.charCodeAt(0),inputmask.ignorable=!1,EventHandlers.keypressEvent.call(input,keypress)}),setTimeout(function(){inputmask.$el.trigger("keyup")},0);break;case"deleteContentBackward":var keydown=new $.Event("keydown");keydown.keyCode=_keycode.default.BACKSPACE,EventHandlers.keydownEvent.call(input,keydown);break;default:(0,_inputHandling.applyInputValue)(input,inputValue);break}e.preventDefault()}},compositionendEvent:function compositionendEvent(e){var inputmask=this.inputmask;inputmask.isComposing=!1,inputmask.$el.trigger("input")},setValueEvent:function setValueEvent(e,argument_1,argument_2){var inputmask=this.inputmask,input=this,value=e&&e.detail?e.detail[0]:argument_1;void 0===value&&(value=this.inputmask._valueGet(!0)),(0,_inputHandling.applyInputValue)(this,value),(e.detail&&void 0!==e.detail[1]||void 0!==argument_2)&&_positioning.caret.call(inputmask,this,e.detail?e.detail[1]:argument_2)},focusEvent:function focusEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,input=this,nptValue=this.inputmask._valueGet();opts.showMaskOnFocus&&nptValue!==_positioning.getBuffer.call(inputmask).join("")&&(0,_inputHandling.writeBuffer)(this,_positioning.getBuffer.call(inputmask),_positioning.seekNext.call(inputmask,_positioning.getLastValidPosition.call(inputmask))),!0!==opts.positionCaretOnTab||!1!==inputmask.mouseEnter||_validation.isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&-1!==_positioning.getLastValidPosition.call(inputmask)||EventHandlers.clickEvent.apply(this,[e,!0]),inputmask.undoValue=_positioning.getBuffer.call(inputmask).join("")},invalidEvent:function invalidEvent(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function mouseleaveEvent(){var inputmask=this.inputmask,opts=inputmask.opts,input=this;inputmask.mouseEnter=!1,opts.clearMaskOnLostFocus&&(this.inputmask.shadowRoot||document).activeElement!==this&&(0,_inputHandling.HandleNativePlaceholder)(this,inputmask.originalPlaceholder)},clickEvent:function clickEvent(e,tabbed){var inputmask=this.inputmask,input=this;if((this.inputmask.shadowRoot||document).activeElement===this){var newCaretPosition=_positioning.determineNewCaretPosition.call(inputmask,_positioning.caret.call(inputmask,this),tabbed);void 0!==newCaretPosition&&_positioning.caret.call(inputmask,this,newCaretPosition)}},cutEvent:function cutEvent(e){var inputmask=this.inputmask,maskset=inputmask.maskset,input=this,pos=_positioning.caret.call(inputmask,this),clipboardData=window.clipboardData||e.clipboardData,clipData=inputmask.isRTL?_positioning.getBuffer.call(inputmask).slice(pos.end,pos.begin):_positioning.getBuffer.call(inputmask).slice(pos.begin,pos.end);clipboardData.setData("text",inputmask.isRTL?clipData.reverse().join(""):clipData.join("")),document.execCommand&&document.execCommand("copy"),_validation.handleRemove.call(inputmask,this,_keycode.default.DELETE,pos),(0,_inputHandling.writeBuffer)(this,_positioning.getBuffer.call(inputmask),maskset.p,e,inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join(""))},blurEvent:function blurEvent(e){var inputmask=this.inputmask,opts=inputmask.opts,$=inputmask.dependencyLib,$input=$(this),input=this;if(this.inputmask){(0,_inputHandling.HandleNativePlaceholder)(this,inputmask.originalPlaceholder);var nptValue=this.inputmask._valueGet(),buffer=_positioning.getBuffer.call(inputmask).slice();""!==nptValue&&(opts.clearMaskOnLostFocus&&(-1===_positioning.getLastValidPosition.call(inputmask)&&nptValue===_positioning.getBufferTemplate.call(inputmask).join("")?buffer=[]:_inputHandling.clearOptionalTail.call(inputmask,buffer)),!1===_validation.isComplete.call(inputmask,buffer)&&(setTimeout(function(){$input.trigger("incomplete")},0),opts.clearIncomplete&&(_positioning.resetMaskSet.call(inputmask),buffer=opts.clearMaskOnLostFocus?[]:_positioning.getBufferTemplate.call(inputmask).slice())),(0,_inputHandling.writeBuffer)(this,buffer,void 0,e)),inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join("")&&(inputmask.undoValue=_positioning.getBuffer.call(inputmask).join(""),$input.trigger("change"))}},mouseenterEvent:function mouseenterEvent(){var inputmask=this.inputmask,opts=inputmask.opts,input=this;inputmask.mouseEnter=!0,(this.inputmask.shadowRoot||document).activeElement!==this&&(null==inputmask.originalPlaceholder&&this.placeholder!==inputmask.originalPlaceholder&&(inputmask.originalPlaceholder=this.placeholder),opts.showMaskOnHover&&(0,_inputHandling.HandleNativePlaceholder)(this,(inputmask.isRTL?_positioning.getBufferTemplate.call(inputmask).slice().reverse():_positioning.getBufferTemplate.call(inputmask)).join("")))},submitEvent:function submitEvent(){var inputmask=this.inputmask,opts=inputmask.opts;inputmask.undoValue!==_positioning.getBuffer.call(inputmask).join("")&&inputmask.$el.trigger("change"),opts.clearMaskOnLostFocus&&-1===_positioning.getLastValidPosition.call(inputmask)&&inputmask._valueGet&&inputmask._valueGet()===_positioning.getBufferTemplate.call(inputmask).join("")&&inputmask._valueSet(""),opts.clearIncomplete&&!1===_validation.isComplete.call(inputmask,_positioning.getBuffer.call(inputmask))&&inputmask._valueSet(""),opts.removeMaskOnSubmit&&(inputmask._valueSet(inputmask.unmaskedvalue(),!0),setTimeout(function(){(0,_inputHandling.writeBuffer)(inputmask.el,_positioning.getBuffer.call(inputmask))},0))},resetEvent:function resetEvent(){var inputmask=this.inputmask;inputmask.refreshValue=!0,setTimeout(function(){(0,_inputHandling.applyInputValue)(inputmask.el,inputmask._valueGet(!0))},0)}};exports.EventHandlers=EventHandlers},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.iphone=exports.iemobile=exports.mobile=exports.ie=exports.ua=void 0;var _window=_interopRequireDefault(__webpack_require__(8));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ua=_window.default.navigator&&_window.default.navigator.userAgent||"",ie=0<ua.indexOf("MSIE ")||0<ua.indexOf("Trident/"),mobile="ontouchstart"in _window.default,iemobile=/iemobile/i.test(ua),iphone=/iphone/i.test(ua)&&!iemobile;exports.iphone=iphone,exports.iemobile=iemobile,exports.mobile=mobile,exports.ie=ie,exports.ua=ua},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _canUseDOM=_interopRequireDefault(__webpack_require__(9));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=_canUseDOM.default?window:{};exports.default=_default},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),_default=canUseDOM;exports.default=_default},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE__10__},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.mask=mask;var _keycode=_interopRequireDefault(__webpack_require__(0)),_positioning=__webpack_require__(1),_inputHandling=__webpack_require__(5),_eventruler=__webpack_require__(12),_environment=__webpack_require__(7),_validation=__webpack_require__(4),_eventhandlers=__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function mask(){var inputmask=this,opts=this.opts,el=this.el,$=this.dependencyLib;function isElementTypeSupported(input,opts){function patchValueProperty(npt){var valueGet,valueSet;function patchValhook(type){if($.valHooks&&(void 0===$.valHooks[type]||!0!==$.valHooks[type].inputmaskpatch)){var valhookGet=$.valHooks[type]&&$.valHooks[type].get?$.valHooks[type].get:function(elem){return elem.value},valhookSet=$.valHooks[type]&&$.valHooks[type].set?$.valHooks[type].set:function(elem,value){return elem.value=value,elem};$.valHooks[type]={get:function get(elem){if(elem.inputmask){if(elem.inputmask.opts.autoUnmask)return elem.inputmask.unmaskedvalue();var result=valhookGet(elem);return-1!==_positioning.getLastValidPosition.call(inputmask,void 0,void 0,elem.inputmask.maskset.validPositions)||!0!==opts.nullable?result:""}return valhookGet(elem)},set:function set(elem,value){var result=valhookSet(elem,value);return elem.inputmask&&(0,_inputHandling.applyInputValue)(elem,value),result},inputmaskpatch:!0}}}function getter(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==_positioning.getLastValidPosition.call(inputmask)||!0!==opts.nullable?(this.inputmask.shadowRoot||document.activeElement)===this&&opts.clearMaskOnLostFocus?(inputmask.isRTL?_inputHandling.clearOptionalTail.call(inputmask,_positioning.getBuffer.call(inputmask).slice()).reverse():_inputHandling.clearOptionalTail.call(inputmask,_positioning.getBuffer.call(inputmask).slice())).join(""):valueGet.call(this):"":valueGet.call(this)}function setter(value){valueSet.call(this,value),this.inputmask&&(0,_inputHandling.applyInputValue)(this,value)}function installNativeValueSetFallback(npt){_eventruler.EventRuler.on(npt,"mouseenter",function(){var input=this,value=this.inputmask._valueGet(!0);value!==(inputmask.isRTL?_positioning.getBuffer.call(inputmask).reverse():_positioning.getBuffer.call(inputmask)).join("")&&(0,_inputHandling.applyInputValue)(this,value)})}if(!npt.inputmask.__valueGet){if(!0!==opts.noValuePatching){if(Object.getOwnPropertyDescriptor){var valueProperty=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt),"value"):void 0;valueProperty&&valueProperty.get&&valueProperty.set?(valueGet=valueProperty.get,valueSet=valueProperty.set,Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0})):"input"!==npt.tagName.toLowerCase()&&(valueGet=function valueGet(){return this.textContent},valueSet=function valueSet(value){this.textContent=value},Object.defineProperty(npt,"value",{get:getter,set:setter,configurable:!0}))}else document.__lookupGetter__&&npt.__lookupGetter__("value")&&(valueGet=npt.__lookupGetter__("value"),valueSet=npt.__lookupSetter__("value"),npt.__defineGetter__("value",getter),npt.__defineSetter__("value",setter));npt.inputmask.__valueGet=valueGet,npt.inputmask.__valueSet=valueSet}npt.inputmask._valueGet=function(overruleRTL){return inputmask.isRTL&&!0!==overruleRTL?valueGet.call(this.el).split("").reverse().join(""):valueGet.call(this.el)},npt.inputmask._valueSet=function(value,overruleRTL){valueSet.call(this.el,null==value?"":!0!==overruleRTL&&inputmask.isRTL?value.split("").reverse().join(""):value)},void 0===valueGet&&(valueGet=function valueGet(){return this.value},valueSet=function valueSet(value){this.value=value},patchValhook(npt.type),installNativeValueSetFallback(npt))}}"textarea"!==input.tagName.toLowerCase()&&opts.ignorables.push(_keycode.default.ENTER);var elementType=input.getAttribute("type"),isSupported="input"===input.tagName.toLowerCase()&&opts.supportsInputType.includes(elementType)||input.isContentEditable||"textarea"===input.tagName.toLowerCase();if(!isSupported)if("input"===input.tagName.toLowerCase()){var el=document.createElement("input");el.setAttribute("type",elementType),isSupported="text"===el.type,el=null}else isSupported="partial";return!1!==isSupported?patchValueProperty(input):input.inputmask=void 0,isSupported}_eventruler.EventRuler.off(el);var isSupported=isElementTypeSupported(el,opts);if(!1!==isSupported){inputmask.originalPlaceholder=el.placeholder,inputmask.maxLength=void 0!==el?el.maxLength:void 0,-1===inputmask.maxLength&&(inputmask.maxLength=void 0),"inputMode"in el&&null===el.getAttribute("inputmode")&&(el.inputMode=opts.inputmode,el.setAttribute("inputmode",opts.inputmode)),!0===isSupported&&(opts.showMaskOnFocus=opts.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(el.autocomplete),_environment.iphone&&(opts.insertModeVisual=!1),_eventruler.EventRuler.on(el,"submit",_eventhandlers.EventHandlers.submitEvent),_eventruler.EventRuler.on(el,"reset",_eventhandlers.EventHandlers.resetEvent),_eventruler.EventRuler.on(el,"blur",_eventhandlers.EventHandlers.blurEvent),_eventruler.EventRuler.on(el,"focus",_eventhandlers.EventHandlers.focusEvent),_eventruler.EventRuler.on(el,"invalid",_eventhandlers.EventHandlers.invalidEvent),_eventruler.EventRuler.on(el,"click",_eventhandlers.EventHandlers.clickEvent),_eventruler.EventRuler.on(el,"mouseleave",_eventhandlers.EventHandlers.mouseleaveEvent),_eventruler.EventRuler.on(el,"mouseenter",_eventhandlers.EventHandlers.mouseenterEvent),_eventruler.EventRuler.on(el,"paste",_eventhandlers.EventHandlers.pasteEvent),_eventruler.EventRuler.on(el,"cut",_eventhandlers.EventHandlers.cutEvent),_eventruler.EventRuler.on(el,"complete",opts.oncomplete),_eventruler.EventRuler.on(el,"incomplete",opts.onincomplete),_eventruler.EventRuler.on(el,"cleared",opts.oncleared),!0!==opts.inputEventOnly&&(_eventruler.EventRuler.on(el,"keydown",_eventhandlers.EventHandlers.keydownEvent),_eventruler.EventRuler.on(el,"keypress",_eventhandlers.EventHandlers.keypressEvent),_eventruler.EventRuler.on(el,"keyup",_eventhandlers.EventHandlers.keyupEvent)),(_environment.mobile||opts.inputEventOnly)&&el.removeAttribute("maxLength"),_eventruler.EventRuler.on(el,"input",_eventhandlers.EventHandlers.inputFallBackEvent),_eventruler.EventRuler.on(el,"compositionend",_eventhandlers.EventHandlers.compositionendEvent)),_eventruler.EventRuler.on(el,"setvalue",_eventhandlers.EventHandlers.setValueEvent),inputmask.undoValue=_positioning.getBufferTemplate.call(inputmask).join("");var activeElement=(el.inputmask.shadowRoot||document).activeElement;if(""!==el.inputmask._valueGet(!0)||!1===opts.clearMaskOnLostFocus||activeElement===el){(0,_inputHandling.applyInputValue)(el,el.inputmask._valueGet(!0),opts);var buffer=_positioning.getBuffer.call(inputmask).slice();!1===_validation.isComplete.call(inputmask,buffer)&&opts.clearIncomplete&&_positioning.resetMaskSet.call(inputmask),opts.clearMaskOnLostFocus&&activeElement!==el&&(-1===_positioning.getLastValidPosition.call(inputmask)?buffer=[]:_inputHandling.clearOptionalTail.call(inputmask,buffer)),(!1===opts.clearMaskOnLostFocus||opts.showMaskOnFocus&&activeElement===el||""!==el.inputmask._valueGet(!0))&&(0,_inputHandling.writeBuffer)(el,buffer),activeElement===el&&_positioning.caret.call(inputmask,el,_positioning.seekNext.call(inputmask,_positioning.getLastValidPosition.call(inputmask)))}}}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventRuler=void 0;var _inputmask=_interopRequireDefault(__webpack_require__(2)),_keycode=_interopRequireDefault(__webpack_require__(0)),_positioning=__webpack_require__(1),_inputHandling=__webpack_require__(5);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var EventRuler={on:function on(input,eventName,eventHandler){var $=input.inputmask.dependencyLib,ev=function ev(e){e.originalEvent&&(e=e.originalEvent||e,arguments[0]=e);var that=this,args,inputmask=that.inputmask,opts=inputmask?inputmask.opts:void 0;if(void 0===inputmask&&"FORM"!==this.nodeName){var imOpts=$.data(that,"_inputmask_opts");$(that).off(),imOpts&&new _inputmask.default(imOpts).mask(that)}else{if(["submit","reset","setvalue"].includes(e.type)||"FORM"===this.nodeName||!(that.disabled||that.readOnly&&!("keydown"===e.type&&e.ctrlKey&&67===e.keyCode||!1===opts.tabThrough&&e.keyCode===_keycode.default.TAB))){switch(e.type){case"input":if(!0===inputmask.skipInputEvent||e.inputType&&"insertCompositionText"===e.inputType)return inputmask.skipInputEvent=!1,e.preventDefault();break;case"keydown":inputmask.skipKeyPressEvent=!1,inputmask.skipInputEvent=inputmask.isComposing=e.keyCode===_keycode.default.KEY_229;break;case"keyup":case"compositionend":inputmask.isComposing&&(inputmask.skipInputEvent=!1);break;case"keypress":if(!0===inputmask.skipKeyPressEvent)return e.preventDefault();inputmask.skipKeyPressEvent=!0;break;case"click":case"focus":return inputmask.validationEvent?(inputmask.validationEvent=!1,input.blur(),(0,_inputHandling.HandleNativePlaceholder)(input,(inputmask.isRTL?_positioning.getBufferTemplate.call(inputmask).slice().reverse():_positioning.getBufferTemplate.call(inputmask)).join("")),setTimeout(function(){input.focus()},3e3)):(args=arguments,setTimeout(function(){input.inputmask&&eventHandler.apply(that,args)},0)),!1}var returnVal=eventHandler.apply(that,arguments);return!1===returnVal&&(e.preventDefault(),e.stopPropagation()),returnVal}e.preventDefault()}};["submit","reset"].includes(eventName)?(ev=ev.bind(input),null!==input.form&&$(input.form).on(eventName,ev)):$(input).on(eventName,ev),input.inputmask.events[eventName]=input.inputmask.events[eventName]||[],input.inputmask.events[eventName].push(ev)},off:function off(input,event){if(input.inputmask&&input.inputmask.events){var $=input.inputmask.dependencyLib,events=input.inputmask.events;for(var eventName in event&&(events=[],events[event]=input.inputmask.events[event]),events){for(var evArr=events[eventName];0<evArr.length;){var ev=evArr.pop();["submit","reset"].includes(eventName)?null!==input.form&&$(input.form).off(eventName,ev):$(input).off(eventName,ev)}delete input.inputmask.events[eventName]}}}};exports.EventRuler=EventRuler},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _jquery=_interopRequireDefault(__webpack_require__(10));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}if(void 0===_jquery.default)throw"jQuery not loaded!";var _default=_jquery.default;exports.default=_default},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=_default;var escapeRegexRegex=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim");function _default(str){return str.replace(escapeRegexRegex,"\\$1")}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(16),__webpack_require__(22),__webpack_require__(23),__webpack_require__(24);var _inputmask2=_interopRequireDefault(__webpack_require__(2));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default=_inputmask2.default;exports.default=_default},function(module,exports,__webpack_require__){"use strict";var _inputmask=_interopRequireDefault(__webpack_require__(2)),_positioning=__webpack_require__(1),_validationTests=__webpack_require__(3);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}_inputmask.default.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var ipValidatorRegex=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function ipValidator(chrs,maskset,pos,strict,opts){return chrs=-1<pos-1&&"."!==maskset.buffer[pos-1]?(chrs=maskset.buffer[pos-1]+chrs,-1<pos-2&&"."!==maskset.buffer[pos-2]?maskset.buffer[pos-2]+chrs:"0"+chrs):"00"+chrs,ipValidatorRegex.test(chrs)}_inputmask.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i[i[i]].j[j[j]].k[k[k]].l[l[l]]",definitions:{i:{validator:ipValidator},j:{validator:ipValidator},k:{validator:ipValidator},l:{validator:ipValidator}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function onBeforePaste(pastedValue,opts){return pastedValue=pastedValue.toLowerCase(),pastedValue.replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return maskedValue},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){var bffr=_validationTests.getMaskTemplate.call(this,!0,_positioning.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(bffr.join(""))}}})},function(module,exports,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===_typeof("test".__proto__)?function(object){return object.__proto__}:function(object){return object.constructor.prototype})},function(module,exports,__webpack_require__){"use strict";Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function value(searchElement,fromIndex){if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),len=o.length>>>0;if(0==len)return!1;for(var n=0|fromIndex,k=Math.max(0<=n?n:len-Math.abs(n),0);k<len;){if(o[k]===searchElement)return!0;k++}return!1}})},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generateMaskSet=generateMaskSet,exports.analyseMask=analyseMask;var _inputmask=_interopRequireDefault(__webpack_require__(13));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function generateMaskSet(opts,nocache){var ms;function generateMask(mask,metadata,opts){var regexMask=!1,masksetDefinition,maskdefKey;if(null!==mask&&""!==mask||(regexMask=null!==opts.regex,mask=regexMask?(mask=opts.regex,mask.replace(/^(\^)(.*)(\$)$/,"$2")):(regexMask=!0,".*")),1===mask.length&&!1===opts.greedy&&0!==opts.repeat&&(opts.placeholder=""),0<opts.repeat||"*"===opts.repeat||"+"===opts.repeat){var repeatStart="*"===opts.repeat?0:"+"===opts.repeat?1:opts.repeat;mask=opts.groupmarker[0]+mask+opts.groupmarker[1]+opts.quantifiermarker[0]+repeatStart+","+opts.repeat+opts.quantifiermarker[1]}return maskdefKey=regexMask?"regex_"+opts.regex:opts.numericInput?mask.split("").reverse().join(""):mask,!1!==opts.keepStatic&&(maskdefKey="ks_"+maskdefKey),void 0===Inputmask.prototype.masksCache[maskdefKey]||!0===nocache?(masksetDefinition={mask:mask,maskToken:Inputmask.prototype.analyseMask(mask,regexMask,opts),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:metadata,maskLength:void 0,jitOffset:{}},!0!==nocache&&(Inputmask.prototype.masksCache[maskdefKey]=masksetDefinition,masksetDefinition=_inputmask.default.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]))):masksetDefinition=_inputmask.default.extend(!0,{},Inputmask.prototype.masksCache[maskdefKey]),masksetDefinition}if("function"==typeof opts.mask&&(opts.mask=opts.mask(opts)),Array.isArray(opts.mask)){if(1<opts.mask.length){null===opts.keepStatic&&(opts.keepStatic=!0);var altMask=opts.groupmarker[0];return(opts.isRTL?opts.mask.reverse():opts.mask).forEach(function(msk){1<altMask.length&&(altMask+=opts.groupmarker[1]+opts.alternatormarker+opts.groupmarker[0]),void 0!==msk.mask&&"function"!=typeof msk.mask?altMask+=msk.mask:altMask+=msk}),altMask+=opts.groupmarker[1],generateMask(altMask,opts.mask,opts)}opts.mask=opts.mask.pop()}return null===opts.keepStatic&&(opts.keepStatic=!1),ms=opts.mask&&void 0!==opts.mask.mask&&"function"!=typeof opts.mask.mask?generateMask(opts.mask.mask,opts.mask,opts):generateMask(opts.mask,opts.mask,opts),ms}function analyseMask(mask,regexMask,opts){var tokenizer=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,regexTokenizer=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,escaped=!1,currentToken=new MaskToken,match,m,openenings=[],maskTokens=[],openingToken,currentOpeningToken,alternator,lastMatch,closeRegexGroup=!1;function MaskToken(isGroup,isOptional,isQuantifier,isAlternator){this.matches=[],this.openGroup=isGroup||!1,this.alternatorGroup=!1,this.isGroup=isGroup||!1,this.isOptional=isOptional||!1,this.isQuantifier=isQuantifier||!1,this.isAlternator=isAlternator||!1,this.quantifier={min:1,max:1}}function insertTestDefinition(mtoken,element,position){position=void 0!==position?position:mtoken.matches.length;var prevMatch=mtoken.matches[position-1];if(regexMask)0===element.indexOf("[")||escaped&&/\\d|\\s|\\w]/i.test(element)||"."===element?mtoken.matches.splice(position++,0,{fn:new RegExp(element,opts.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element,casing:null,def:element,placeholder:void 0,nativeDef:element}):(escaped&&(element=element[element.length-1]),element.split("").forEach(function(lmnt,ndx){prevMatch=mtoken.matches[position-1],mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||lmnt)?new RegExp("["+(opts.staticDefinitionSymbol||lmnt)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==lmnt&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||lmnt,placeholder:void 0!==opts.staticDefinitionSymbol?lmnt:void 0,nativeDef:(escaped?"'":"")+lmnt})})),escaped=!1;else{var maskdef=opts.definitions&&opts.definitions[element]||opts.usePrototypeDefinitions&&Inputmask.prototype.definitions[element];maskdef&&!escaped?mtoken.matches.splice(position++,0,{fn:maskdef.validator?"string"==typeof maskdef.validator?new RegExp(maskdef.validator,opts.casing?"i":""):new function(){this.test=maskdef.validator}:new RegExp("."),static:maskdef.static||!1,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==(maskdef.definitionSymbol||element),casing:maskdef.casing,def:maskdef.definitionSymbol||element,placeholder:maskdef.placeholder,nativeDef:element,generated:maskdef.generated}):(mtoken.matches.splice(position++,0,{fn:/[a-z]/i.test(opts.staticDefinitionSymbol||element)?new RegExp("["+(opts.staticDefinitionSymbol||element)+"]",opts.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===prevMatch?"master":prevMatch.def!==element&&!0!==prevMatch.static,casing:null,def:opts.staticDefinitionSymbol||element,placeholder:void 0!==opts.staticDefinitionSymbol?element:void 0,nativeDef:(escaped?"'":"")+element}),escaped=!1)}}function verifyGroupMarker(maskToken){maskToken&&maskToken.matches&&maskToken.matches.forEach(function(token,ndx){var nextToken=maskToken.matches[ndx+1];(void 0===nextToken||void 0===nextToken.matches||!1===nextToken.isQuantifier)&&token&&token.isGroup&&(token.isGroup=!1,regexMask||(insertTestDefinition(token,opts.groupmarker[0],0),!0!==token.openGroup&&insertTestDefinition(token,opts.groupmarker[1]))),verifyGroupMarker(token)})}function defaultCase(){if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],insertTestDefinition(currentOpeningToken,m),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup&&(alternator.matches[mndx].isGroup=!1);0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else insertTestDefinition(currentToken,m)}function reverseTokens(maskToken){function reverseStatic(st){return st===opts.optionalmarker[0]?st=opts.optionalmarker[1]:st===opts.optionalmarker[1]?st=opts.optionalmarker[0]:st===opts.groupmarker[0]?st=opts.groupmarker[1]:st===opts.groupmarker[1]&&(st=opts.groupmarker[0]),st}for(var match in maskToken.matches=maskToken.matches.reverse(),maskToken.matches)if(Object.prototype.hasOwnProperty.call(maskToken.matches,match)){var intMatch=parseInt(match);if(maskToken.matches[match].isQuantifier&&maskToken.matches[intMatch+1]&&maskToken.matches[intMatch+1].isGroup){var qt=maskToken.matches[match];maskToken.matches.splice(match,1),maskToken.matches.splice(intMatch+1,0,qt)}void 0!==maskToken.matches[match].matches?maskToken.matches[match]=reverseTokens(maskToken.matches[match]):maskToken.matches[match]=reverseStatic(maskToken.matches[match])}return maskToken}function groupify(matches){var groupToken=new MaskToken(!0);return groupToken.openGroup=!1,groupToken.matches=matches,groupToken}function closeGroup(){if(openingToken=openenings.pop(),openingToken.openGroup=!1,void 0!==openingToken)if(0<openenings.length){if(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(openingToken),currentOpeningToken.isAlternator){alternator=openenings.pop();for(var mndx=0;mndx<alternator.matches.length;mndx++)alternator.matches[mndx].isGroup=!1,alternator.matches[mndx].alternatorGroup=!1;0<openenings.length?(currentOpeningToken=openenings[openenings.length-1],currentOpeningToken.matches.push(alternator)):currentToken.matches.push(alternator)}}else currentToken.matches.push(openingToken);else defaultCase()}function groupQuantifier(matches){var lastMatch=matches.pop();return lastMatch.isQuantifier&&(lastMatch=groupify([matches.pop(),lastMatch])),lastMatch}for(regexMask&&(opts.optionalmarker[0]=void 0,opts.optionalmarker[1]=void 0);match=regexMask?regexTokenizer.exec(mask):tokenizer.exec(mask);){if(m=match[0],regexMask)switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}";break;case"|":if(0===openenings.length){var altRegexGroup=groupify(currentToken.matches);altRegexGroup.openGroup=!0,openenings.push(altRegexGroup),currentToken.matches=[],closeRegexGroup=!0}break}if(escaped)defaultCase();else switch(m.charAt(0)){case"$":case"^":regexMask||defaultCase();break;case"(?=":break;case"(?!":break;case"(?<=":break;case"(?<!":break;case opts.escapeChar:escaped=!0,regexMask&&defaultCase();break;case opts.optionalmarker[1]:case opts.groupmarker[1]:closeGroup();break;case opts.optionalmarker[0]:openenings.push(new MaskToken(!1,!0));break;case opts.groupmarker[0]:openenings.push(new MaskToken(!0));break;case opts.quantifiermarker[0]:var quantifier=new MaskToken(!1,!1,!0);m=m.replace(/[{}]/g,"");var mqj=m.split("|"),mq=mqj[0].split(","),mq0=isNaN(mq[0])?mq[0]:parseInt(mq[0]),mq1=1===mq.length?mq0:isNaN(mq[1])?mq[1]:parseInt(mq[1]);"*"!==mq0&&"+"!==mq0||(mq0="*"===mq1?0:1),quantifier.quantifier={min:mq0,max:mq1,jit:mqj[1]};var matches=0<openenings.length?openenings[openenings.length-1].matches:currentToken.matches;if(match=matches.pop(),match.isAlternator){matches.push(match),matches=match.matches;var groupToken=new MaskToken(!0),tmpMatch=matches.pop();matches.push(groupToken),matches=groupToken.matches,match=tmpMatch}match.isGroup||(match=groupify([match])),matches.push(match),matches.push(quantifier);break;case opts.alternatormarker:if(0<openenings.length){currentOpeningToken=openenings[openenings.length-1];var subToken=currentOpeningToken.matches[currentOpeningToken.matches.length-1];lastMatch=currentOpeningToken.openGroup&&(void 0===subToken.matches||!1===subToken.isGroup&&!1===subToken.isAlternator)?openenings.pop():groupQuantifier(currentOpeningToken.matches)}else lastMatch=groupQuantifier(currentToken.matches);if(lastMatch.isAlternator)openenings.push(lastMatch);else if(lastMatch.alternatorGroup?(alternator=openenings.pop(),lastMatch.alternatorGroup=!1):alternator=new MaskToken(!1,!1,!1,!0),alternator.matches.push(lastMatch),openenings.push(alternator),lastMatch.openGroup){lastMatch.openGroup=!1;var alternatorGroup=new MaskToken(!0);alternatorGroup.alternatorGroup=!0,openenings.push(alternatorGroup)}break;default:defaultCase()}}for(closeRegexGroup&&closeGroup();0<openenings.length;)openingToken=openenings.pop(),currentToken.matches.push(openingToken);return 0<currentToken.matches.length&&(verifyGroupMarker(currentToken),maskTokens.push(currentToken)),(opts.numericInput||opts.isRTL)&&reverseTokens(maskTokens[0]),maskTokens}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}};exports.default=_default},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:function oncomplete(){},onincomplete:function onincomplete(){},oncleared:function oncleared(){},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:function onKeyDown(){},onBeforeMask:null,onBeforePaste:function onBeforePaste(pastedValue,opts){return"function"==typeof opts.onBeforeMask?opts.onBeforeMask.call(this,pastedValue,opts):pastedValue},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:function onKeyValidation(){},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[8,9,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0};exports.default=_default},function(module,exports,__webpack_require__){"use strict";var _inputmask=_interopRequireDefault(__webpack_require__(2)),_keycode=_interopRequireDefault(__webpack_require__(0)),_escapeRegex=_interopRequireDefault(__webpack_require__(14)),_positioning=__webpack_require__(1);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var $=_inputmask.default.dependencyLib,currentYear=(new Date).getFullYear(),formatCode={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return pad(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return pad(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return pad(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return pad(Date.prototype.getHours.call(this),2)}],Hx:[function(x){return"[0-9]{".concat(x,"}")},Date.prototype.setHours,"hours",function(x){return function(){return pad(Date.prototype.getHours.call(this),x)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return pad(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return pad(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return pad(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},formatAlias={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function formatcode(match){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(dynMatches&&void 0!==dynMatches[0]){var fcode=formatCode[match[0][0]+"x"].slice("");return fcode[0]=fcode[0](dynMatches[0]),fcode[3]=fcode[3](dynMatches[0]),fcode}if(formatCode[match[0]])return formatCode[match[0]]}function getTokenizer(opts){if(!opts.tokenizer){var tokens=[],dyntokens=[];for(var ndx in formatCode)if(/\.*x$/.test(ndx)){var dynToken=ndx[0]+"\\d+";-1===dyntokens.indexOf(dynToken)&&dyntokens.push(dynToken)}else-1===tokens.indexOf(ndx[0])&&tokens.push(ndx[0]);opts.tokenizer="("+(0<dyntokens.length?dyntokens.join("|")+"|":"")+tokens.join("+|")+")+?|.",opts.tokenizer=new RegExp(opts.tokenizer,"g")}return opts.tokenizer}function prefillYear(dateParts,currentResult,opts){if(dateParts.year!==dateParts.rawyear){var crrntyear=currentYear.toString(),enteredPart=dateParts.rawyear.replace(/[^0-9]/g,""),currentYearPart=crrntyear.slice(0,enteredPart.length),currentYearNextPart=crrntyear.slice(enteredPart.length);if(2===enteredPart.length&&enteredPart===currentYearPart){var entryCurrentYear=new Date(currentYear,dateParts.month-1,dateParts.day);dateParts.day==entryCurrentYear.getDate()&&(!opts.max||opts.max.date.getTime()>=entryCurrentYear.getTime())&&(dateParts.date.setFullYear(currentYear),dateParts.year=crrntyear,currentResult.insert=[{pos:currentResult.pos+1,c:currentYearNextPart[0]},{pos:currentResult.pos+2,c:currentYearNextPart[1]}])}}return currentResult}function isValidDate(dateParts,currentResult,opts){if(void 0===dateParts.rawday||!isFinite(dateParts.rawday)&&new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day||"29"==dateParts.day&&!isFinite(dateParts.rawyear)||new Date(dateParts.date.getFullYear(),isFinite(dateParts.rawmonth)?dateParts.month:dateParts.date.getMonth()+1,0).getDate()>=dateParts.day)return currentResult;if("29"==dateParts.day){var tokenMatch=getTokenMatch(currentResult.pos,opts);if("yyyy"===tokenMatch.targetMatch[0]&&currentResult.pos-tokenMatch.targetMatchIndex==2)return currentResult.remove=currentResult.pos+1,currentResult}else if("02"==dateParts.month&&"30"==dateParts.day)return dateParts.day="03",dateParts.date.setDate(3),dateParts.date.setMonth(1),currentResult.insert=[{pos:currentResult.pos,c:"0"},{pos:currentResult.pos+1,c:currentResult.c}],currentResult.caret=_positioning.seekNext.call(this,currentResult.pos+1),currentResult;return!1}function isDateInRange(dateParts,result,opts,maskset,fromCheckval){if(!result)return result;if(opts.min){if(dateParts.rawyear){var rawYear=dateParts.rawyear.replace(/[^0-9]/g,""),minYear=opts.min.year.substr(0,rawYear.length),maxYear;if(rawYear<minYear){var tokenMatch=getTokenMatch(result.pos,opts);if(rawYear=dateParts.rawyear.substr(0,result.pos-tokenMatch.targetMatchIndex+1).replace(/[^0-9]/g,"0"),minYear=opts.min.year.substr(0,rawYear.length),minYear<=rawYear)return result.remove=tokenMatch.targetMatchIndex+rawYear.length,result;if(rawYear="yyyy"===tokenMatch.targetMatch[0]?dateParts.rawyear.substr(1,1):dateParts.rawyear.substr(0,1),minYear=opts.min.year.substr(2,1),maxYear=opts.max?opts.max.year.substr(2,1):rawYear,1===rawYear.length&&minYear<=rawYear&&rawYear<=maxYear&&!0!==fromCheckval)return"yyyy"===tokenMatch.targetMatch[0]?(result.insert=[{pos:result.pos+1,c:rawYear,strict:!0}],result.caret=result.pos+2,maskset.validPositions[result.pos].input=opts.min.year[1]):(result.insert=[{pos:result.pos+1,c:opts.min.year[1],strict:!0},{pos:result.pos+2,c:rawYear,strict:!0}],result.caret=result.pos+3,maskset.validPositions[result.pos].input=opts.min.year[0]),result;result=!1}}result&&dateParts.year&&dateParts.year===dateParts.rawyear&&opts.min.date.getTime()==opts.min.date.getTime()&&(result=opts.min.date.getTime()<=dateParts.date.getTime())}return result&&opts.max&&opts.max.date.getTime()==opts.max.date.getTime()&&(result=opts.max.date.getTime()>=dateParts.date.getTime()),result}function parse(format,dateObjValue,opts,raw){var mask="",match,fcode;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);)if(void 0===dateObjValue)if(fcode=formatcode(match))mask+="("+fcode[0]+")";else switch(match[0]){case"[":mask+="(";break;case"]":mask+=")?";break;default:mask+=(0,_escapeRegex.default)(match[0])}else if(fcode=formatcode(match))if(!0!==raw&&fcode[3]){var getFn=fcode[3];mask+=getFn.call(dateObjValue.date)}else fcode[2]?mask+=dateObjValue["raw"+fcode[2]]:mask+=match[0];else mask+=match[0];return mask}function pad(val,len){for(val=String(val),len=len||2;val.length<len;)val="0"+val;return val}function analyseMask(maskString,format,opts){var dateObj={date:new Date(1,0,1)},targetProp,mask=maskString,match,dateOperation;function setValue(dateObj,value,opts){if(dateObj[targetProp]=value.replace(/[^0-9]/g,"0"),dateObj["raw"+targetProp]=value,void 0!==dateOperation){var datavalue=dateObj[targetProp];"day"===targetProp&&0===parseInt(datavalue)&&(datavalue=1),"month"===targetProp&&(datavalue=parseInt(datavalue),0<datavalue)&&(datavalue-=1),dateOperation.call(dateObj.date,datavalue)}}if("string"==typeof mask){for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(format);){var dynMatches=new RegExp("\\d+$").exec(match[0]),fcode=dynMatches?match[0][0]+"x":match[0],value=void 0;if(dynMatches){var lastIndex=getTokenizer(opts).lastIndex,tokanMatch=getTokenMatch(match.index,opts);getTokenizer(opts).lastIndex=lastIndex,value=mask.slice(0,mask.indexOf(tokanMatch.nextMatch[0]))}else value=mask.slice(0,fcode.length);Object.prototype.hasOwnProperty.call(formatCode,fcode)&&(targetProp=formatCode[fcode][2],dateOperation=formatCode[fcode][1],setValue(dateObj,value,opts)),mask=mask.slice(value.length)}return dateObj}if(mask&&"object"===_typeof(mask)&&Object.prototype.hasOwnProperty.call(mask,"date"))return mask}function importDate(dateObj,opts){return parse(opts.inputFormat,{date:dateObj},opts)}function getTokenMatch(pos,opts){var calcPos=0,targetMatch,match,matchLength=0;for(getTokenizer(opts).lastIndex=0;match=getTokenizer(opts).exec(opts.inputFormat);){var dynMatches=new RegExp("\\d+$").exec(match[0]);if(matchLength=dynMatches?parseInt(dynMatches[0]):match[0].length,calcPos+=matchLength,pos<=calcPos){targetMatch=match,match=getTokenizer(opts).exec(opts.inputFormat);break}}return{targetMatchIndex:calcPos-matchLength,nextMatch:match,targetMatch:targetMatch}}_inputmask.default.extendAliases({datetime:{mask:function mask(opts){return opts.numericInput=!1,formatCode.S=opts.i18n.ordinalSuffix.join("|"),opts.inputFormat=formatAlias[opts.inputFormat]||opts.inputFormat,opts.displayFormat=formatAlias[opts.displayFormat]||opts.displayFormat||opts.inputFormat,opts.outputFormat=formatAlias[opts.outputFormat]||opts.outputFormat||opts.inputFormat,opts.placeholder=""!==opts.placeholder?opts.placeholder:opts.inputFormat.replace(/[[\]]/,""),opts.regex=parse(opts.inputFormat,void 0,opts),opts.min=analyseMask(opts.min,opts.inputFormat,opts),opts.max=analyseMask(opts.max,opts.inputFormat,opts),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(strict)return!0;if(isNaN(c)&&buffer[pos]!==c){var tokenMatch=getTokenMatch(pos,opts);if(tokenMatch.nextMatch&&tokenMatch.nextMatch[0]===c&&1<tokenMatch.targetMatch[0].length){var validator=formatCode[tokenMatch.targetMatch[0]][0];if(new RegExp(validator).test("0"+buffer[pos-1]))return buffer[pos]=buffer[pos-1],buffer[pos-1]="0",{fuzzy:!0,buffer:buffer,refreshFromBuffer:{start:pos-1,end:pos+1},pos:pos+1}}}return!0},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict,fromCheckval){var inputmask=this,tokenMatch,validator;if(strict)return!0;if(!1===currentResult)return tokenMatch=getTokenMatch(pos+1,opts),tokenMatch.targetMatch&&tokenMatch.targetMatchIndex===pos&&1<tokenMatch.targetMatch[0].length&&void 0!==formatCode[tokenMatch.targetMatch[0]]&&(validator=formatCode[tokenMatch.targetMatch[0]][0],new RegExp(validator).test("0"+c))?{insert:[{pos:pos,c:"0"},{pos:pos+1,c:c}],pos:pos+1}:currentResult;if(currentResult.fuzzy&&(buffer=currentResult.buffer,pos=currentResult.pos),tokenMatch=getTokenMatch(pos,opts),tokenMatch.targetMatch&&tokenMatch.targetMatch[0]&&void 0!==formatCode[tokenMatch.targetMatch[0]]){validator=formatCode[tokenMatch.targetMatch[0]][0];var part=buffer.slice(tokenMatch.targetMatchIndex,tokenMatch.targetMatchIndex+tokenMatch.targetMatch[0].length);!1===new RegExp(validator).test(part.join(""))&&2===tokenMatch.targetMatch[0].length&&maskset.validPositions[tokenMatch.targetMatchIndex]&&maskset.validPositions[tokenMatch.targetMatchIndex+1]&&(maskset.validPositions[tokenMatch.targetMatchIndex+1].input="0")}var result=currentResult,dateParts=analyseMask(buffer.join(""),opts.inputFormat,opts);return result&&dateParts.date.getTime()==dateParts.date.getTime()&&(result=prefillYear(dateParts,result,opts),result=isValidDate.call(this,dateParts,result,opts),result=isDateInRange(dateParts,result,opts,maskset,fromCheckval)),pos&&result&&currentResult.pos!==pos?{buffer:parse(opts.inputFormat,dateParts,opts).split(""),refreshFromBuffer:{start:pos,end:currentResult.pos}}:result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var input=this;e.ctrlKey&&e.keyCode===_keycode.default.RIGHT&&(this.inputmask._valueSet(importDate(new Date,opts)),$(this).trigger("setvalue"))},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){return unmaskedValue?parse(opts.outputFormat,analyseMask(maskedValue,opts.inputFormat,opts),opts,!0):unmaskedValue},casing:function casing(elem,test,pos,validPositions){return 0==test.nativeDef.indexOf("[ap]")?elem.toLowerCase():0==test.nativeDef.indexOf("[AP]")?elem.toUpperCase():elem},onBeforeMask:function onBeforeMask(initialValue,opts){return"[object Date]"===Object.prototype.toString.call(initialValue)&&(initialValue=importDate(initialValue,opts)),initialValue},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric"}})},function(module,exports,__webpack_require__){"use strict";var _inputmask=_interopRequireDefault(__webpack_require__(2)),_keycode=_interopRequireDefault(__webpack_require__(0)),_escapeRegex=_interopRequireDefault(__webpack_require__(14));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var $=_inputmask.default.dependencyLib;function autoEscape(txt,opts){for(var escapedTxt="",i=0;i<txt.length;i++)_inputmask.default.prototype.definitions[txt.charAt(i)]||opts.definitions[txt.charAt(i)]||opts.optionalmarker[0]===txt.charAt(i)||opts.optionalmarker[1]===txt.charAt(i)||opts.quantifiermarker[0]===txt.charAt(i)||opts.quantifiermarker[1]===txt.charAt(i)||opts.groupmarker[0]===txt.charAt(i)||opts.groupmarker[1]===txt.charAt(i)||opts.alternatormarker===txt.charAt(i)?escapedTxt+="\\"+txt.charAt(i):escapedTxt+=txt.charAt(i);return escapedTxt}function alignDigits(buffer,digits,opts,force){if(0<buffer.length&&0<digits&&(!opts.digitsOptional||force)){var radixPosition=buffer.indexOf(opts.radixPoint),negationBack=!1;opts.negationSymbol.back===buffer[buffer.length-1]&&(negationBack=!0,buffer.length--),-1===radixPosition&&(buffer.push(opts.radixPoint),radixPosition=buffer.length-1);for(var i=1;i<=digits;i++)isFinite(buffer[radixPosition+i])||(buffer[radixPosition+i]="0")}return negationBack&&buffer.push(opts.negationSymbol.back),buffer}function findValidator(symbol,maskset){var posNdx=0;if("+"===symbol){for(posNdx in maskset.validPositions);posNdx=parseInt(posNdx)}for(var tstNdx in maskset.tests)if(tstNdx=parseInt(tstNdx),posNdx<=tstNdx)for(var ndx=0,ndxl=maskset.tests[tstNdx].length;ndx<ndxl;ndx++)if((void 0===maskset.validPositions[tstNdx]||"-"===symbol)&&maskset.tests[tstNdx][ndx].match.def===symbol)return tstNdx+(void 0!==maskset.validPositions[tstNdx]&&"-"!==symbol?1:0);return posNdx}function findValid(symbol,maskset){var ret=-1;for(var ndx in maskset.validPositions){var tst=maskset.validPositions[ndx];if(tst&&tst.match.def===symbol){ret=parseInt(ndx);break}}return ret}function parseMinMaxOptions(opts){void 0===opts.parseMinMaxOptions&&(null!==opts.min&&(opts.min=opts.min.toString().replace(new RegExp((0,_escapeRegex.default)(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.min=opts.min.replace(opts.radixPoint,".")),opts.min=isFinite(opts.min)?parseFloat(opts.min):NaN,isNaN(opts.min)&&(opts.min=Number.MIN_VALUE)),null!==opts.max&&(opts.max=opts.max.toString().replace(new RegExp((0,_escapeRegex.default)(opts.groupSeparator),"g"),""),","===opts.radixPoint&&(opts.max=opts.max.replace(opts.radixPoint,".")),opts.max=isFinite(opts.max)?parseFloat(opts.max):NaN,isNaN(opts.max)&&(opts.max=Number.MAX_VALUE)),opts.parseMinMaxOptions="done")}function genMask(opts){opts.repeat=0,opts.groupSeparator===opts.radixPoint&&opts.digits&&"0"!==opts.digits&&("."===opts.radixPoint?opts.groupSeparator=",":","===opts.radixPoint?opts.groupSeparator=".":opts.groupSeparator="")," "===opts.groupSeparator&&(opts.skipOptionalPartCharacter=void 0),1<opts.placeholder.length&&(opts.placeholder=opts.placeholder.charAt(0)),"radixFocus"===opts.positionCaretOnClick&&""===opts.placeholder&&(opts.positionCaretOnClick="lvp");var decimalDef="0",radixPointDef=opts.radixPoint;!0===opts.numericInput&&void 0===opts.__financeInput?(decimalDef="1",opts.positionCaretOnClick="radixFocus"===opts.positionCaretOnClick?"lvp":opts.positionCaretOnClick,opts.digitsOptional=!1,isNaN(opts.digits)&&(opts.digits=2),opts._radixDance=!1,radixPointDef=","===opts.radixPoint?"?":"!",""!==opts.radixPoint&&void 0===opts.definitions[radixPointDef]&&(opts.definitions[radixPointDef]={},opts.definitions[radixPointDef].validator="["+opts.radixPoint+"]",opts.definitions[radixPointDef].placeholder=opts.radixPoint,opts.definitions[radixPointDef].static=!0,opts.definitions[radixPointDef].generated=!0)):(opts.__financeInput=!1,opts.numericInput=!0);var mask="[+]",altMask;if(mask+=autoEscape(opts.prefix,opts),""!==opts.groupSeparator?(void 0===opts.definitions[opts.groupSeparator]&&(opts.definitions[opts.groupSeparator]={},opts.definitions[opts.groupSeparator].validator="["+opts.groupSeparator+"]",opts.definitions[opts.groupSeparator].placeholder=opts.groupSeparator,opts.definitions[opts.groupSeparator].static=!0,opts.definitions[opts.groupSeparator].generated=!0),mask+=opts._mask(opts)):mask+="9{+}",void 0!==opts.digits&&0!==opts.digits){var dq=opts.digits.toString().split(",");isFinite(dq[0])&&dq[1]&&isFinite(dq[1])?mask+=radixPointDef+decimalDef+"{"+opts.digits+"}":(isNaN(opts.digits)||0<parseInt(opts.digits))&&(opts.digitsOptional?(altMask=mask+radixPointDef+decimalDef+"{0,"+opts.digits+"}",opts.keepStatic=!0):mask+=radixPointDef+decimalDef+"{"+opts.digits+"}")}return mask+=autoEscape(opts.suffix,opts),mask+="[-]",altMask&&(mask=[altMask+autoEscape(opts.suffix,opts)+"[-]",mask]),opts.greedy=!1,parseMinMaxOptions(opts),mask}function hanndleRadixDance(pos,c,radixPos,maskset,opts){return opts._radixDance&&opts.numericInput&&c!==opts.negationSymbol.back&&pos<=radixPos&&(0<radixPos||c==opts.radixPoint)&&(void 0===maskset.validPositions[pos-1]||maskset.validPositions[pos-1].input!==opts.negationSymbol.back)&&(pos-=1),pos}function decimalValidator(chrs,maskset,pos,strict,opts){var radixPos=maskset.buffer?maskset.buffer.indexOf(opts.radixPoint):-1,result=-1!==radixPos&&new RegExp("[0-9\uff11-\uff19]").test(chrs);return opts._radixDance&&result&&null==maskset.validPositions[radixPos]?{insert:{pos:radixPos===pos?radixPos+1:radixPos,c:opts.radixPoint},pos:pos}:result}function checkForLeadingZeroes(buffer,opts){var numberMatches=new RegExp("(^"+(""!==opts.negationSymbol.front?(0,_escapeRegex.default)(opts.negationSymbol.front)+"?":"")+(0,_escapeRegex.default)(opts.prefix)+")(.*)("+(0,_escapeRegex.default)(opts.suffix)+(""!=opts.negationSymbol.back?(0,_escapeRegex.default)(opts.negationSymbol.back)+"?":"")+"$)").exec(buffer.slice().reverse().join("")),number=numberMatches?numberMatches[2]:"",leadingzeroes=!1;return number&&(number=number.split(opts.radixPoint.charAt(0))[0],leadingzeroes=new RegExp("^[0"+opts.groupSeparator+"]*").exec(number)),!(!leadingzeroes||!(1<leadingzeroes[0].length||0<leadingzeroes[0].length&&leadingzeroes[0].length<number.length))&&leadingzeroes}_inputmask.default.extendAliases({numeric:{mask:genMask,_mask:function _mask(opts){return"("+opts.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"numeric",shortcuts:{k:"000",m:"000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",definitions:{0:{validator:decimalValidator},1:{validator:decimalValidator,definitionSymbol:"9"},"+":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&("-"===chrs||chrs===opts.negationSymbol.front)}},"-":{validator:function validator(chrs,maskset,pos,strict,opts){return opts.allowMinus&&chrs===opts.negationSymbol.back}}},preValidation:function preValidation(buffer,pos,c,isSelection,opts,maskset,caretPos,strict){if(!1!==opts.__financeInput&&c===opts.radixPoint)return!1;var pattern;if(pattern=opts.shortcuts&&opts.shortcuts[c]){if(1<pattern.length)for(var inserts=[],i=0;i<pattern.length;i++)inserts.push({pos:pos+i,c:pattern[i],strict:!1});return{insert:inserts}}var radixPos=buffer.indexOf(opts.radixPoint),initPos=pos;if(pos=hanndleRadixDance(pos,c,radixPos,maskset,opts),"-"===c||c===opts.negationSymbol.front){if(!0!==opts.allowMinus)return!1;var isNegative=!1,front=findValid("+",maskset),back=findValid("-",maskset);return-1!==front&&(isNegative=[front,back]),!1!==isNegative?{remove:isNegative,caret:initPos-opts.negationSymbol.front.length}:{insert:[{pos:findValidator("+",maskset),c:opts.negationSymbol.front,fromIsValid:!0},{pos:findValidator("-",maskset),c:opts.negationSymbol.back,fromIsValid:void 0}],caret:initPos+opts.negationSymbol.back.length}}if(c===opts.groupSeparator)return{caret:initPos};if(strict)return!0;if(-1!==radixPos&&!0===opts._radixDance&&!1===isSelection&&c===opts.radixPoint&&void 0!==opts.digits&&(isNaN(opts.digits)||0<parseInt(opts.digits))&&radixPos!==pos)return{caret:opts._radixDance&&pos===radixPos-1?radixPos+1:radixPos};if(!1===opts.__financeInput)if(isSelection){if(opts.digitsOptional)return{rewritePosition:caretPos.end};if(!opts.digitsOptional){if(caretPos.begin>radixPos&&caretPos.end<=radixPos)return c===opts.radixPoint?{insert:{pos:radixPos+1,c:"0",fromIsValid:!0},rewritePosition:radixPos}:{rewritePosition:radixPos+1};if(caretPos.begin<radixPos)return{rewritePosition:caretPos.begin-1}}}else if(!opts.showMaskOnHover&&!opts.showMaskOnFocus&&!opts.digitsOptional&&0<opts.digits&&""===this.__valueGet.call(this))return{rewritePosition:radixPos};return{rewritePosition:pos}},postValidation:function postValidation(buffer,pos,c,currentResult,opts,maskset,strict){if(!1===currentResult)return currentResult;if(strict)return!0;if(null!==opts.min||null!==opts.max){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min&&(unmasked.toString().length>opts.min.toString().length||unmasked<0))return!1;if(null!==opts.max&&unmasked>opts.max)return!!opts.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:alignDigits(opts.max.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}return currentResult},onUnMask:function onUnMask(maskedValue,unmaskedValue,opts){if(""===unmaskedValue&&!0===opts.nullable)return unmaskedValue;var processValue=maskedValue.replace(opts.prefix,"");return processValue=processValue.replace(opts.suffix,""),processValue=processValue.replace(new RegExp((0,_escapeRegex.default)(opts.groupSeparator),"g"),""),""!==opts.placeholder.charAt(0)&&(processValue=processValue.replace(new RegExp(opts.placeholder.charAt(0),"g"),"0")),opts.unmaskAsNumber?(""!==opts.radixPoint&&-1!==processValue.indexOf(opts.radixPoint)&&(processValue=processValue.replace(_escapeRegex.default.call(this,opts.radixPoint),".")),processValue=processValue.replace(new RegExp("^"+(0,_escapeRegex.default)(opts.negationSymbol.front)),"-"),processValue=processValue.replace(new RegExp((0,_escapeRegex.default)(opts.negationSymbol.back)+"$"),""),Number(processValue)):processValue},isComplete:function isComplete(buffer,opts){var maskedValue=(opts.numericInput?buffer.slice().reverse():buffer).join("");return maskedValue=maskedValue.replace(new RegExp("^"+(0,_escapeRegex.default)(opts.negationSymbol.front)),"-"),maskedValue=maskedValue.replace(new RegExp((0,_escapeRegex.default)(opts.negationSymbol.back)+"$"),""),maskedValue=maskedValue.replace(opts.prefix,""),maskedValue=maskedValue.replace(opts.suffix,""),maskedValue=maskedValue.replace(new RegExp((0,_escapeRegex.default)(opts.groupSeparator)+"([0-9]{3})","g"),"$1"),","===opts.radixPoint&&(maskedValue=maskedValue.replace((0,_escapeRegex.default)(opts.radixPoint),".")),isFinite(maskedValue)},onBeforeMask:function onBeforeMask(initialValue,opts){var radixPoint=opts.radixPoint||",";isFinite(opts.digits)&&(opts.digits=parseInt(opts.digits)),"number"!=typeof initialValue&&"number"!==opts.inputType||""===radixPoint||(initialValue=initialValue.toString().replace(".",radixPoint));var isNagtive="-"===initialValue.charAt(0)||initialValue.charAt(0)===opts.negationSymbol.front,valueParts=initialValue.split(radixPoint),integerPart=valueParts[0].replace(/[^\-0-9]/g,""),decimalPart=1<valueParts.length?valueParts[1].replace(/[^0-9]/g,""):"",forceDigits=1<valueParts.length;initialValue=integerPart+(""!==decimalPart?radixPoint+decimalPart:decimalPart);var digits=0;if(""!==radixPoint&&(digits=opts.digitsOptional?opts.digits<decimalPart.length?opts.digits:decimalPart.length:opts.digits,""!==decimalPart||!opts.digitsOptional)){var digitsFactor=Math.pow(10,digits||1);initialValue=initialValue.replace((0,_escapeRegex.default)(radixPoint),"."),isNaN(parseFloat(initialValue))||(initialValue=(opts.roundingFN(parseFloat(initialValue)*digitsFactor)/digitsFactor).toFixed(digits)),initialValue=initialValue.toString().replace(".",radixPoint)}if(0===opts.digits&&-1!==initialValue.indexOf(radixPoint)&&(initialValue=initialValue.substring(0,initialValue.indexOf(radixPoint))),null!==opts.min||null!==opts.max){var numberValue=initialValue.toString().replace(radixPoint,".");null!==opts.min&&numberValue<opts.min?initialValue=opts.min.toString().replace(".",radixPoint):null!==opts.max&&numberValue>opts.max&&(initialValue=opts.max.toString().replace(".",radixPoint))}return isNagtive&&"-"!==initialValue.charAt(0)&&(initialValue="-"+initialValue),alignDigits(initialValue.toString().split(""),digits,opts,forceDigits).join("")},onBeforeWrite:function onBeforeWrite(e,buffer,caretPos,opts){function stripBuffer(buffer,stripRadix){if(!1!==opts.__financeInput||stripRadix){var position=buffer.indexOf(opts.radixPoint);-1!==position&&buffer.splice(position,1)}if(""!==opts.groupSeparator)for(;-1!==(position=buffer.indexOf(opts.groupSeparator));)buffer.splice(position,1);return buffer}var result,leadingzeroes=checkForLeadingZeroes(buffer,opts);if(leadingzeroes)for(var caretNdx=buffer.join("").lastIndexOf(leadingzeroes[0].split("").reverse().join(""))-(leadingzeroes[0]==leadingzeroes.input?0:1),offset=leadingzeroes[0]==leadingzeroes.input?1:0,i=leadingzeroes[0].length-offset;0<i;i--)delete this.maskset.validPositions[caretNdx+i],delete buffer[caretNdx+i];if(e)switch(e.type){case"blur":case"checkval":if(null!==opts.min){var unmasked=opts.onUnMask(buffer.slice().reverse().join(""),void 0,$.extend({},opts,{unmaskAsNumber:!0}));if(null!==opts.min&&unmasked<opts.min)return{refreshFromBuffer:!0,buffer:alignDigits(opts.min.toString().replace(".",opts.radixPoint).split(""),opts.digits,opts).reverse()}}if(buffer[buffer.length-1]===opts.negationSymbol.front){var nmbrMtchs=new RegExp("(^"+(""!=opts.negationSymbol.front?(0,_escapeRegex.default)(opts.negationSymbol.front)+"?":"")+(0,_escapeRegex.default)(opts.prefix)+")(.*)("+(0,_escapeRegex.default)(opts.suffix)+(""!=opts.negationSymbol.back?(0,_escapeRegex.default)(opts.negationSymbol.back)+"?":"")+"$)").exec(stripBuffer(buffer.slice(),!0).reverse().join("")),number=nmbrMtchs?nmbrMtchs[2]:"";0==number&&(result={refreshFromBuffer:!0,buffer:[0]})}else""!==opts.radixPoint&&buffer[0]===opts.radixPoint&&(result&&result.buffer?result.buffer.shift():(buffer.shift(),result={refreshFromBuffer:!0,buffer:stripBuffer(buffer)}));if(opts.enforceDigitsOnBlur){result=result||{};var bffr=result&&result.buffer||buffer.slice().reverse();result.refreshFromBuffer=!0,result.buffer=alignDigits(bffr,opts.digits,opts,!0).reverse()}}return result},onKeyDown:function onKeyDown(e,buffer,caretPos,opts){var $input=$(this),bffr;if(e.ctrlKey)switch(e.keyCode){case _keycode.default.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(opts.step)),$input.trigger("setvalue"),!1;case _keycode.default.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(opts.step)),$input.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===_keycode.default.DELETE||e.keyCode===_keycode.default.BACKSPACE||e.keyCode===_keycode.default.BACKSPACE_SAFARI)&&caretPos.begin!==buffer.length){if(buffer[e.keyCode===_keycode.default.DELETE?caretPos.begin-1:caretPos.end]===opts.negationSymbol.front)return bffr=buffer.slice().reverse(),""!==opts.negationSymbol.front&&bffr.shift(),""!==opts.negationSymbol.back&&bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin]),!1;if(!0===opts._radixDance){var radixPos=buffer.indexOf(opts.radixPoint);if(opts.digitsOptional){if(0===radixPos)return bffr=buffer.slice().reverse(),bffr.pop(),$input.trigger("setvalue",[bffr.join(""),caretPos.begin>=bffr.length?bffr.length:caretPos.begin]),!1}else if(-1!==radixPos&&(caretPos.begin<radixPos||caretPos.end<radixPos||e.keyCode===_keycode.default.DELETE&&caretPos.begin===radixPos))return caretPos.begin!==caretPos.end||e.keyCode!==_keycode.default.BACKSPACE&&e.keyCode!==_keycode.default.BACKSPACE_SAFARI||caretPos.begin++,bffr=buffer.slice().reverse(),bffr.splice(bffr.length-caretPos.begin,caretPos.begin-caretPos.end+1),bffr=alignDigits(bffr,opts.digits,opts).join(""),$input.trigger("setvalue",[bffr,caretPos.begin>=bffr.length?radixPos+1:caretPos.begin]),!1}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function _mask(opts){return"("+opts.groupSeparator+"99){*|1}("+opts.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}})},function(module,exports,__webpack_require__){"use strict";var _window=_interopRequireDefault(__webpack_require__(8)),_inputmask=_interopRequireDefault(__webpack_require__(2)),_canUseDOM=_interopRequireDefault(__webpack_require__(9));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function _wrapNativeSuper(Class){if(null===Class||!_isNativeFunction(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof _cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)},_wrapNativeSuper(Class)}function _construct(Parent,args,Class){return _construct=_isNativeReflectConstruct()?Reflect.construct:function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a),instance=new Constructor;return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var document=_window.default.document;if(_canUseDOM.default&&document&&document.head&&document.head.attachShadow&&_window.default.customElements&&void 0===_window.default.customElements.get("input-mask")){var InputmaskElement=function(_HTMLElement){_inherits(InputmaskElement,_HTMLElement);var _super=_createSuper(InputmaskElement);function InputmaskElement(){var _this;_classCallCheck(this,InputmaskElement),_this=_super.call(this);var attributeNames=_this.getAttributeNames(),shadow=_this.attachShadow({mode:"closed"}),input=document.createElement("input");for(var attr in input.type="text",shadow.appendChild(input),attributeNames)Object.prototype.hasOwnProperty.call(attributeNames,attr)&&input.setAttribute(attributeNames[attr],_this.getAttribute(attributeNames[attr]));var im=new _inputmask.default;return im.dataAttribute="",im.mask(input),input.inputmask.shadowRoot=shadow,_this}return InputmaskElement}(_wrapNativeSuper(HTMLElement));_window.default.customElements.define("input-mask",InputmaskElement)}},function(module,exports,__webpack_require__){"use strict";var _jquery=_interopRequireDefault(__webpack_require__(10)),_inputmask=_interopRequireDefault(__webpack_require__(2));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}void 0===_jquery.default.fn.inputmask&&(_jquery.default.fn.inputmask=function(fn,options){var nptmask,input=this[0];if(void 0===options&&(options={}),"string"==typeof fn)switch(fn){case"unmaskedvalue":return input&&input.inputmask?input.inputmask.unmaskedvalue():(0,_jquery.default)(input).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return input&&input.inputmask?input.inputmask.getemptymask():"";case"hasMaskedValue":return!(!input||!input.inputmask)&&input.inputmask.hasMaskedValue();case"isComplete":return!input||!input.inputmask||input.inputmask.isComplete();case"getmetadata":return input&&input.inputmask?input.inputmask.getmetadata():void 0;case"setvalue":_inputmask.default.setValue(input,options);break;case"option":if("string"!=typeof options)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(options)});if(input&&void 0!==input.inputmask)return input.inputmask.option(options);break;default:return options.alias=fn,nptmask=new _inputmask.default(options),this.each(function(){nptmask.mask(this)})}else{if(Array.isArray(fn))return options.alias=fn,nptmask=new _inputmask.default(options),this.each(function(){nptmask.mask(this)});if("object"==_typeof(fn))return nptmask=new _inputmask.default(fn),void 0===fn.mask&&void 0===fn.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(fn);nptmask.mask(this)}):this.each(function(){nptmask.mask(this)});if(void 0===fn)return this.each(function(){nptmask=new _inputmask.default(options),nptmask.mask(this)})}})},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _bundle=_interopRequireDefault(__webpack_require__(15));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}__webpack_require__(25);var _default=_bundle.default;exports.default=_default}],installedModules={},__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module.default}:function getModuleExports(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=26);function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var modules,installedModules});;
/*! mailcheck v1.1.2 @licence MIT */var Mailcheck={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu","uk"],run:function(a){a.domains=a.domains||Mailcheck.defaultDomains,a.secondLevelDomains=a.secondLevelDomains||Mailcheck.defaultSecondLevelDomains,a.topLevelDomains=a.topLevelDomains||Mailcheck.defaultTopLevelDomains,a.distanceFunction=a.distanceFunction||Mailcheck.sift4Distance;var b=function(a){return a},c=a.suggested||b,d=a.empty||b,e=Mailcheck.suggest(Mailcheck.encodeEmail(a.email),a.domains,a.secondLevelDomains,a.topLevelDomains,a.distanceFunction);return e?c(e):d()},suggest:function(a,b,c,d,e){a=a.toLowerCase();var f=this.splitEmail(a);if(c&&d&&-1!==c.indexOf(f.secondLevelDomain)&&-1!==d.indexOf(f.topLevelDomain))return!1;var g=this.findClosestDomain(f.domain,b,e,this.domainThreshold);if(g)return g==f.domain?!1:{address:f.address,domain:g,full:f.address+"@"+g};var h=this.findClosestDomain(f.secondLevelDomain,c,e,this.secondLevelThreshold),i=this.findClosestDomain(f.topLevelDomain,d,e,this.topLevelThreshold);if(f.domain){g=f.domain;var j=!1;if(h&&h!=f.secondLevelDomain&&(g=g.replace(f.secondLevelDomain,h),j=!0),i&&i!=f.topLevelDomain&&""!==f.secondLevelDomain&&(g=g.replace(new RegExp(f.topLevelDomain+"$"),i),j=!0),j)return{address:f.address,domain:g,full:f.address+"@"+g}}return!1},findClosestDomain:function(a,b,c,d){d=d||this.topLevelThreshold;var e,f=1/0,g=null;if(!a||!b)return!1;c||(c=this.sift4Distance);for(var h=0;h<b.length;h++){if(a===b[h])return a;e=c(a,b[h]),f>e&&(f=e,g=b[h])}return d>=f&&null!==g?g:!1},sift4Distance:function(a,b,c){if(void 0===c&&(c=5),!a||!a.length)return b?b.length:0;if(!b||!b.length)return a.length;for(var d=a.length,e=b.length,f=0,g=0,h=0,i=0,j=0,k=[];d>f&&e>g;){if(a.charAt(f)==b.charAt(g)){i++;for(var l=!1,m=0;m<k.length;){var n=k[m];if(f<=n.c1||g<=n.c2){l=Math.abs(g-f)>=Math.abs(n.c2-n.c1),l?j++:n.trans||(n.trans=!0,j++);break}f>n.c2&&g>n.c1?k.splice(m,1):m++}k.push({c1:f,c2:g,trans:l})}else{h+=i,i=0,f!=g&&(f=g=Math.min(f,g));for(var o=0;c>o&&(d>f+o||e>g+o);o++){if(d>f+o&&a.charAt(f+o)==b.charAt(g)){f+=o-1,g--;break}if(e>g+o&&a.charAt(f)==b.charAt(g+o)){f--,g+=o-1;break}}}f++,g++,(f>=d||g>=e)&&(h+=i,i=0,f=g=Math.min(f,g))}return h+=i,Math.round(Math.max(d,e)-h+j)},splitEmail:function(a){a=null!==a?a.replace(/^\s*/,"").replace(/\s*$/,""):null;var b=a.split("@");if(b.length<2)return!1;for(var c=0;c<b.length;c++)if(""===b[c])return!1;var d=b.pop(),e=d.split("."),f="",g="";if(0===e.length)return!1;if(1==e.length)g=e[0];else{f=e[0];for(var h=1;h<e.length;h++)g+=e[h]+".";g=g.substring(0,g.length-1)}return{topLevelDomain:g,secondLevelDomain:f,domain:d,address:b.join("@")}},encodeEmail:function(a){var b=encodeURI(a);return b=b.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"function"==typeof define&&define.amd&&define("mailcheck",[],function(){return Mailcheck}),"undefined"!=typeof window&&window.jQuery&&!function(a){a.fn.mailcheck=function(a){var b=this;if(a.suggested){var c=a.suggested;a.suggested=function(a){c(b,a)}}if(a.empty){var d=a.empty;a.empty=function(){d.call(null,b)}}a.email=this.val(),Mailcheck.run(a)}}(jQuery);;
/* global wpforms_settings, grecaptcha, hcaptcha, wpformsRecaptchaCallback, wpforms_validate, wpforms_datepicker, wpforms_timepicker, Mailcheck, Choices, WPFormsPasswordField */

'use strict';

var wpforms = window.wpforms || ( function( document, window, $ ) {

	var app = {

		/**
		 * Start the engine.
		 *
		 * @since 1.2.3
		 */
		init: function() {

			// Document ready.
			$( app.ready );

			// Page load.
			$( window ).on( 'load', app.load );

			app.bindUIActions();
			app.bindOptinMonster();
		},

		/**
		 * Document ready.
		 *
		 * @since 1.2.3
		 */
		ready: function() {

			// Clear URL - remove wpforms_form_id.
			app.clearUrlQuery();

			// Set user identifier.
			app.setUserIndentifier();

			app.loadValidation();
			app.loadDatePicker();
			app.loadTimePicker();
			app.loadInputMask();
			app.loadSmartPhoneField();
			app.loadPayments();
			app.loadMailcheck();
			app.loadChoicesJS();

			// Randomize elements.
			$( '.wpforms-randomize' ).each( function() {
				var $list      = $( this ),
					$listItems = $list.children();
				while ( $listItems.length ) {
					$list.append( $listItems.splice( Math.floor( Math.random() * $listItems.length ), 1 )[0] );
				}
			} );

			// Unlock pagebreak navigation.
			$( '.wpforms-page-button' ).prop( 'disabled', false );

			$( document ).trigger( 'wpformsReady' );
		},

		/**
		 * Page load.
		 *
		 * @since 1.2.3
		 */
		load: function() {

		},

		//--------------------------------------------------------------------//
		// Initializing
		//--------------------------------------------------------------------//

		/**
		 * Remove wpforms_form_id from URL.
		 *
		 * @since 1.5.2
		 */
		clearUrlQuery: function() {
			var loc   = window.location,
				query = loc.search;

			if ( query.indexOf( 'wpforms_form_id=' ) !== -1 ) {
				query = query.replace( /([&?]wpforms_form_id=[0-9]*$|wpforms_form_id=[0-9]*&|[?&]wpforms_form_id=[0-9]*(?=#))/, '' );
				history.replaceState( {}, null, loc.origin + loc.pathname + query );
			}
		},


		/**
		 * Load jQuery Validation.
		 *
		 * @since 1.2.3
		 */
		loadValidation: function() {

			// Only load if jQuery validation library exists.
			if ( typeof $.fn.validate !== 'undefined' ) {

				// jQuery Validation library will not correctly validate
				// fields that do not have a name attribute, so we use the
				// `wpforms-input-temp-name` class to add a temporary name
				// attribute before validation is initialized, then remove it
				// before the form submits.
				$( '.wpforms-input-temp-name' ).each( function( index, el ) {
					var random = Math.floor( Math.random() * 9999 ) + 1;
					$( this ).attr( 'name', 'wpf-temp-' + random );
				} );

				// Prepend URL field contents with http:// if user input doesn't contain a schema.
				$( '.wpforms-validate input[type=url]' ).change( function() {
					var url = $( this ).val();
					if ( ! url ) {
						return false;
					}
					if ( url.substr( 0, 7 ) !== 'http://' && url.substr( 0, 8 ) !== 'https://' ) {
						$( this ).val( 'http://' + url );
					}
				} );

				$.validator.messages.required = wpforms_settings.val_required;
				$.validator.messages.url      = wpforms_settings.val_url;
				$.validator.messages.email    = wpforms_settings.val_email;
				$.validator.messages.number   = wpforms_settings.val_number;

				// Payments: Validate method for Credit Card Number.
				if ( typeof $.fn.payment !== 'undefined' ) {
					$.validator.addMethod( 'creditcard', function( value, element ) {

						//var type  = $.payment.cardType(value);
						var valid = $.payment.validateCardNumber( value );
						return this.optional( element ) || valid;
					}, wpforms_settings.val_creditcard );

					// @todo validate CVC and expiration
				}

				// Validate method for file extensions.
				$.validator.addMethod( 'extension', function( value, element, param ) {
					param = 'string' === typeof param ? param.replace( /,/g, '|' ) : 'png|jpe?g|gif';
					return this.optional( element ) || value.match( new RegExp( '\\.(' + param + ')$', 'i' ) );
				}, wpforms_settings.val_fileextension );

				// Validate method for file size.
				$.validator.addMethod( 'maxsize', function( value, element, param ) {
					var maxSize = param,
						optionalValue = this.optional( element ),
						i, len, file;
					if ( optionalValue ) {
						return optionalValue;
					}
					if ( element.files && element.files.length ) {
						i = 0;
						len = element.files.length;
						for ( ; i < len; i++ ) {
							file = element.files[i];
							if ( file.size > maxSize ) {
								return false;
							}
						}
					}
					return true;
				}, wpforms_settings.val_filesize );

				// Validate email addresses.
				$.validator.methods.email = function( value, element ) {
					return this.optional( element ) || /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/i.test( value );
				};

				// Validate email by allowlist/blocklist.
				$.validator.addMethod( 'restricted-email', function( value, element ) {

					var validator = this,
						$el = $( element ),
						$field = $el.closest( '.wpforms-field' ),
						$form = $el.closest( '.wpforms-form' ),
						isValid = 'pending';

					if ( ! $el.val().length ) {
						return true;
					}

					this.startRequest( element );
					$.post( {
						url: wpforms_settings.ajaxurl,
						type: 'post',
						async: false,
						data: {
							'token': $form.data( 'token' ),
							'action': 'wpforms_restricted_email',
							'form_id': $form.data( 'formid' ),
							'field_id': $field.data( 'field-id' ),
							'email': $el.val(),
						},
						dataType: 'json',
						success: function( response ) {

							var errors = {};

							isValid = response.success && response.data;

							if ( isValid ) {
								validator.resetInternals();
								validator.toHide = validator.errorsFor( element );
								validator.showErrors();
							} else {
								errors[ element.name ] = wpforms_settings.val_email_restricted;
								validator.showErrors( errors );
							}
							validator.stopRequest( element, isValid );
						},
					} );
					return isValid;
				}, wpforms_settings.val_email_restricted );

				// Validate confirmations.
				$.validator.addMethod( 'confirm', function( value, element, param ) {
					return value === $( element ).closest( '.wpforms-field' ).find( 'input:first-child' ).val();
				}, wpforms_settings.val_confirm );

				// Validate required payments.
				$.validator.addMethod( 'required-payment', function( value, element ) {
					return app.amountSanitize( value ) > 0;
				}, wpforms_settings.val_requiredpayment );

				// Validate 12-hour time.
				$.validator.addMethod( 'time12h', function( value, element ) {
					return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
				}, wpforms_settings.val_time12h );

				// Validate 24-hour time.
				$.validator.addMethod( 'time24h', function( value, element ) {
					return this.optional( element ) || /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(\ ?[AP]M)?$/i.test( value );
				}, wpforms_settings.val_time24h );

				// Validate checkbox choice limit.
				$.validator.addMethod( 'check-limit', function( value, element ) {
					var $ul = $( element ).closest( 'ul' ),
						$checked = $ul.find( 'input[type="checkbox"]:checked' ),
						choiceLimit = parseInt( $ul.attr( 'data-choice-limit' ) || 0, 10 );

					if ( 0 === choiceLimit ) {
						return true;
					}
					return $checked.length <= choiceLimit;
				}, function( params, element ) {
					var	choiceLimit = parseInt( $( element ).closest( 'ul' ).attr( 'data-choice-limit' ) || 0, 10 );
					return wpforms_settings.val_checklimit.replace( '{#}', choiceLimit );
				} );

				// Validate Smart Phone Field.
				if ( typeof $.fn.intlTelInput !== 'undefined' ) {
					$.validator.addMethod( 'smart-phone-field', function( value, element ) {
						if ( value.match( /[^\d()\-+\s]/ ) ) {
							return false;
						}
						return this.optional( element ) || $( element ).intlTelInput( 'isValidNumber' );
					}, wpforms_settings.val_phone );
				}

				// Validate Input Mask minimum length.
				$.validator.addMethod( 'empty-blanks', function( value, element ) {
					if ( typeof $.fn.inputmask === 'undefined' ) {
						return true;
					}
					return ! ( value.indexOf( element.inputmask.opts.placeholder ) + 1 );
				}, wpforms_settings.val_empty_blanks );

				// Validate Payment item value on zero.
				$.validator.addMethod( 'required-positive-number', function( value, element ) {

					return app.amountSanitize( value ) > 0;
				}, wpforms_settings.val_number_positive );

				// Validate US Phone Field.
				$.validator.addMethod( 'us-phone-field', function( value, element ) {
					if ( value.match( /[^\d()\-+\s]/ ) ) {
						return false;
					}
					return this.optional( element ) || value.replace( /[^\d]/g, '' ).length === 10;
				}, wpforms_settings.val_phone );

				// Validate International Phone Field.
				$.validator.addMethod( 'int-phone-field', function( value, element ) {
					if ( value.match( /[^\d()\-+\s]/ ) ) {
						return false;
					}
					return this.optional( element ) || value.replace( /[^\d]/g, '' ).length > 0;
				}, wpforms_settings.val_phone );

				// Validate password strength.
				$.validator.addMethod( 'password-strength', function( value, element ) {

					return WPFormsPasswordField.passwordStrength( value, element ) >= Number( $( element ).data( 'password-strength-level' ) );
				}, wpforms_settings.val_password_strength );

				// Finally load jQuery Validation library for our forms.
				$( '.wpforms-validate' ).each( function() {
					var form   = $( this ),
						formID = form.data( 'formid' ),
						properties;

					// TODO: cleanup this BC with wpforms_validate.
					if ( typeof window['wpforms_' + formID] !== 'undefined' && window['wpforms_' + formID].hasOwnProperty( 'validate' ) ) {
						properties = window['wpforms_' + formID].validate;
					} else if ( typeof wpforms_validate !== 'undefined' ) {
						properties = wpforms_validate;
					} else {
						properties = {
							errorClass: 'wpforms-error',
							validClass: 'wpforms-valid',
							errorPlacement: function( error, element ) {

								if ( app.isLikertScaleField( element ) ) {
									element.closest( 'table' ).hasClass( 'single-row' ) ?
										element.closest( '.wpforms-field' ).append( error ) :
										element.closest( 'tr' ).find( 'th' ).append( error );
								} else if ( app.isWrappedField( element ) ) {
									element.closest( '.wpforms-field' ).append( error );
								} else if ( app.isDateTimeField( element ) ) {
									app.dateTimeErrorPlacement( element, error );
								} else if ( app.isFieldInColumn( element ) ) {
									element.parent().append( error );
								} else {
									error.insertAfter( element );
								}
							},
							highlight: function( element, errorClass, validClass ) {
								var $element  = $( element ),
									$field    = $element.closest( '.wpforms-field' ),
									inputName = $element.attr( 'name' );
								if ( 'radio' === $element.attr( 'type' ) || 'checkbox' === $element.attr( 'type' ) ) {
									$field.find( 'input[name="' + inputName + '"]' ).addClass( errorClass ).removeClass( validClass );
								} else {
									$element.addClass( errorClass ).removeClass( validClass );
								}
								$field.addClass( 'wpforms-has-error' );
							},
							unhighlight: function( element, errorClass, validClass ) {
								var $element  = $( element ),
									$field    = $element.closest( '.wpforms-field' ),
									inputName = $element.attr( 'name' );
								if ( 'radio' === $element.attr( 'type' ) || 'checkbox' === $element.attr( 'type' ) ) {
									$field.find( 'input[name="' + inputName + '"]' ).addClass( validClass ).removeClass( errorClass );
								} else {
									$element.addClass( validClass ).removeClass( errorClass );
								}
								$field.removeClass( 'wpforms-has-error' );
							},
							submitHandler: function( form ) {

								var $form       = $( form ),
									$submit     = $form.find( '.wpforms-submit' ),
									altText     = $submit.data( 'alt-text' ),
									recaptchaID = $submit.get( 0 ).recaptchaID;

								if ( $form.data( 'token' ) && 0 === $( '.wpforms-token', $form ).length ) {
									$( '<input type="hidden" class="wpforms-token" name="wpforms[token]" />' )
										.val( $form.data( 'token' ) )
										.appendTo( $form );
								}

								$submit.prop( 'disabled', true );
								$form.find( '#wpforms-field_recaptcha-error' ).remove();

								// Display processing text.
								if ( altText ) {
									$submit.text( altText );
								}

								if ( ! app.empty( recaptchaID ) || recaptchaID === 0 ) {

									// Form contains invisible reCAPTCHA.
									grecaptcha.execute( recaptchaID ).then( null, function( reason ) {

										reason = ( null === reason ) ? '' : '<br>' + reason;
										$form.find( '.wpforms-recaptcha-container' ).append( '<label id="wpforms-field_recaptcha-error" class="wpforms-error"> ' + wpforms_settings.val_recaptcha_fail_msg + reason + '</label>' );
										$submit.prop( 'disabled', false );
									} );
									return false;
								}

								// Remove name attributes if needed.
								$( '.wpforms-input-temp-name' ).removeAttr( 'name' );

								app.formSubmit( $form );
							},
							invalidHandler: function( event, validator ) {

								if ( typeof validator.errorList[0] !== 'undefined' ) {
									app.scrollToError( $( validator.errorList[0].element ) );
								}
							},
							onkeyup: function( element, event ) {

								// This code is copied from JQuery Validate 'onkeyup' method with only one change: 'wpforms-novalidate-onkeyup' class check.
								var excludedKeys = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];

								if ( $( element ).hasClass( 'wpforms-novalidate-onkeyup' ) ) {
									return; // Disable onkeyup validation for some elements (e.g. remote calls).
								}

								if ( 9 === event.which && '' === this.elementValue( element ) || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
									return;
								} else if ( element.name in this.submitted || element.name in this.invalid ) {
									this.element( element );
								}
							},
							onfocusout: function( element ) {

								// This code is copied from JQuery Validate 'onfocusout' method with only one change: 'wpforms-novalidate-onkeyup' class check.
								var validate = false;

								if ( $( element ).hasClass( 'wpforms-novalidate-onkeyup' ) && ! element.value ) {
									validate = true; // Empty value error handling for elements with onkeyup validation disabled.
								}

								if ( ! this.checkable( element ) && ( element.name in this.submitted || ! this.optional( element ) ) ) {
									validate = true;
								}

								if ( validate ) {
									this.element( element );
								}
							},
							onclick: function( element ) {
								var validate = false,
									type = ( element || {} ).type,
									$el = $( element );

								if ( [ 'checkbox', 'radio' ].indexOf( type ) > -1 ) {
									if ( $el.hasClass( 'wpforms-likert-scale-option' ) ) {
										$el = $el.closest( 'tr' );
									} else {
										$el = $el.closest( '.wpforms-field' );
									}
									$el.find( 'label.wpforms-error' ).remove();
									validate = true;
								}

								if ( validate ) {
									this.element( element );
								}
							},
						};
					}
					form.validate( properties );
				} );
			}
		},

		/**
		 * Is field inside column.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 *
		 * @returns {boolean} true/false.
		 */
		isFieldInColumn: function( element ) {

			return element.parent().hasClass( 'wpforms-one-half' ) ||
				element.parent().hasClass( 'wpforms-two-fifths' ) ||
				element.parent().hasClass( 'wpforms-one-fifth' );
		},

		/**
		 * Is datetime field.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 *
		 * @returns {boolean} true/false.
		 */
		isDateTimeField: function( element ) {

			return element.hasClass( 'wpforms-timepicker' ) ||
				element.hasClass( 'wpforms-datepicker' ) ||
				( element.is( 'select' ) && element.attr( 'class' ).match( /date-month|date-day|date-year/ ) );
		},

		/**
		 * Is field wrapped in some container.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 *
		 * @returns {boolean} true/false.
		 */
		isWrappedField: function( element ) { // eslint-disable-line complexity

			return 'checkbox' === element.attr( 'type' ) ||
			'radio' === element.attr( 'type' ) ||
			'range' === element.attr( 'type' ) ||
			'select' === element.is( 'select' ) ||
			element.parent().hasClass( 'iti' ) ||
			element.hasClass( 'wpforms-validation-group-member' ) ||
			element.hasClass( 'choicesjs-select' ) ||
			element.hasClass( 'wpforms-net-promoter-score-option' );
		},

		/**
		 * Is likert scale field.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 *
		 * @returns {boolean} true/false.
		 */
		isLikertScaleField: function( element ) {

			return element.hasClass( 'wpforms-likert-scale-option' );
		},

		/**
		 * Print error message into date time fields.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 * @param {string} error Error message.
		 */
		dateTimeErrorPlacement: function( element, error ) {

			var $wrapper = element.closest( '.wpforms-field-row-block, .wpforms-field-date-time' );
			if ( $wrapper.length ) {
				if ( ! $wrapper.find( 'label.wpforms-error' ).length ) {
					$wrapper.append( error );
				}
			} else {
				element.closest( '.wpforms-field' ).append( error );
			}
		},

		/**
		 * Load jQuery Date Picker.
		 *
		 * @since 1.2.3
		 */
		loadDatePicker: function() {

			// Only load if jQuery datepicker library exists.
			if ( typeof $.fn.flatpickr !== 'undefined' ) {
				$( '.wpforms-datepicker-wrap' ).each( function() {

					var element = $( this ),
						$input  = element.find( 'input' ),
						form    = element.closest( '.wpforms-form' ),
						formID  = form.data( 'formid' ),
						fieldID = element.closest( '.wpforms-field' ).data( 'field-id' ),
						properties;

					if ( typeof window['wpforms_' + formID + '_' + fieldID] !== 'undefined' && window['wpforms_' + formID + '_' + fieldID].hasOwnProperty( 'datepicker' ) ) {
						properties = window['wpforms_' + formID + '_' + fieldID].datepicker;
					} else if ( typeof window['wpforms_' + formID] !== 'undefined' && window['wpforms_' + formID].hasOwnProperty( 'datepicker' ) ) {
						properties = window['wpforms_' + formID].datepicker;
					} else if ( typeof wpforms_datepicker !== 'undefined' ) {
						properties = wpforms_datepicker;
					} else {
						properties = {
							disableMobile: true,
						};
					}

					// Redefine locale only if user doesn't do that manually and we have the locale.
					if (
						! properties.hasOwnProperty( 'locale' ) &&
						typeof wpforms_settings !== 'undefined' &&
						wpforms_settings.hasOwnProperty( 'locale' )
					) {
						properties.locale = wpforms_settings.locale;
					}

					properties.wrap = true;
					properties.dateFormat = $input.data( 'date-format' );
					if ( $input.data( 'disable-past-dates' ) === 1 ) {
						properties.minDate = 'today';
					}

					var limitDays = $input.data( 'limit-days' ),
						weekDays = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];

					if ( limitDays && limitDays !== '' ) {
						limitDays = limitDays.split( ',' );

						properties.disable = [ function( date ) {

							var limitDay;
							for ( var i in limitDays ) {
								limitDay = weekDays.indexOf( limitDays[ i ] );
								if ( limitDay === date.getDay() ) {
									return false;
								}
							}

							return true;
						} ];
					}

					// Toggle clear date icon.
					properties.onChange = function( selectedDates, dateStr, instance ) {

						var display = dateStr === '' ? 'none' : 'block';
						element.find( '.wpforms-datepicker-clear' ).css( 'display', display );
					};

					element.flatpickr( properties );
				} );
			}
		},

		/**
		 * Load jQuery Time Picker.
		 *
		 * @since 1.2.3
		 */
		loadTimePicker: function() {

			// Only load if jQuery timepicker library exists.
			if ( typeof $.fn.timepicker !== 'undefined' ) {
				$( '.wpforms-timepicker' ).each( function() {
					var element = $( this ),
						form    = element.closest( '.wpforms-form' ),
						formID  = form.data( 'formid' ),
						fieldID = element.closest( '.wpforms-field' ).data( 'field-id' ),
						properties;

					if (
						typeof window['wpforms_' + formID + '_' + fieldID] !== 'undefined' &&
						window['wpforms_' + formID + '_' + fieldID].hasOwnProperty( 'timepicker' )
					) {
						properties = window['wpforms_' + formID + '_' + fieldID].timepicker;
					} else if (
						typeof window['wpforms_' + formID] !== 'undefined' &&
						window['wpforms_' + formID].hasOwnProperty( 'timepicker' )
					) {
						properties = window['wpforms_' + formID].timepicker;
					} else if ( typeof wpforms_timepicker !== 'undefined' ) {
						properties = wpforms_timepicker;
					} else {
						properties = {
							scrollDefault: 'now',
							forceRoundTime: true,
						};
					}

					element.timepicker( properties );
				} );
			}
		},

		/**
		 * Load jQuery input masks.
		 *
		 * @since 1.2.3
		 */
		loadInputMask: function() {

			// Only load if jQuery input mask library exists.
			if ( typeof $.fn.inputmask === 'undefined' ) {
				return;
			}

			$( '.wpforms-masked-input' ).inputmask();
		},

		/**
		 * Load smart phone field.
		 *
		 * @since 1.5.2
		 */
		loadSmartPhoneField: function() {

			// Only load if library exists.
			if ( typeof $.fn.intlTelInput === 'undefined' ) {
				return;
			}

			var inputOptions = {};

			// Determine the country by IP if no GDPR restrictions enabled.
			if ( ! wpforms_settings.gdpr ) {
				inputOptions.geoIpLookup = app.currentIpToCountry;
			}

			// Try to kick in an alternative solution if GDPR restrictions are enabled.
			if ( wpforms_settings.gdpr ) {
				var lang = this.getFirstBrowserLanguage(),
					countryCode = lang.indexOf( '-' ) > -1 ? lang.split( '-' ).pop() : '';
			}

			// Make sure the library recognizes browser country code to avoid console error.
			if ( countryCode ) {
				var countryData = window.intlTelInputGlobals.getCountryData();

				countryData = countryData.filter( function( country ) {
					return country.iso2 === countryCode.toLowerCase();
				} );
				countryCode = countryData.length ? countryCode : '';
			}

			// Set default country.
			inputOptions.initialCountry = wpforms_settings.gdpr && countryCode ? countryCode : 'auto';

			$( '.wpforms-smart-phone-field' ).each( function( i, el ) {

				var $el = $( el );

				// Hidden input allows to include country code into submitted data.
				inputOptions.hiddenInput = $el.closest( '.wpforms-field-phone' ).data( 'field-id' );
				inputOptions.utilsScript = wpforms_settings.wpforms_plugin_url + 'pro/assets/js/vendor/jquery.intl-tel-input-utils.js';

				$el.intlTelInput( inputOptions );

				// For proper validation, we should preserve the name attribute of the input field.
				// But we need to modify original input name not to interfere with a hidden input.
				$el.attr( 'name', 'wpf-temp-' + $el.attr( 'name' ) );

				// Add special class to remove name attribute before submitting.
				// So, only the hidden input value will be submitted.
				$el.addClass( 'wpforms-input-temp-name' );

				// Instantly update a hidden form input with a correct data.
				// Previously "blur" only was used, which is broken in case Enter was used to submit the form.
				$el.on( 'blur input', function() {
					if ( $el.intlTelInput( 'isValidNumber' ) || ! app.empty( window.WPFormsEditEntry ) ) {
						$el.siblings( 'input[type="hidden"]' ).val( $el.intlTelInput( 'getNumber' ) );
					}
				} );
			} );

			// Update hidden input of the `Smart` phone field to be sure the latest value will be submitted.
			$( '.wpforms-form' ).on( 'wpformsBeforeFormSubmit', function() {

				$( this ).find( '.wpforms-smart-phone-field' ).trigger( 'input' );
			} );
		},

		/**
		 * Payments: Do various payment-related tasks on load.
		 *
		 * @since 1.2.6
		 */
		loadPayments: function() {

			// Update Total field(s) with latest calculation.
			$( '.wpforms-payment-total' ).each( function( index, el ) {
				app.amountTotal( this );
			} );

			// Credit card validation.
			if ( typeof $.fn.payment !== 'undefined' ) {
				$( '.wpforms-field-credit-card-cardnumber' ).payment( 'formatCardNumber' );
				$( '.wpforms-field-credit-card-cardcvc' ).payment( 'formatCardCVC' );
			}
		},

		/**
		 * Load mailcheck.
		 *
		 * @since 1.5.3
		 */
		loadMailcheck: function() {

			// Skip loading if `wpforms_mailcheck_enabled` filter return false.
			if ( ! wpforms_settings.mailcheck_enabled ) {
				return;
			}

			// Only load if library exists.
			if ( typeof $.fn.mailcheck === 'undefined' ) {
				return;
			}

			if ( wpforms_settings.mailcheck_domains.length > 0 ) {
				Mailcheck.defaultDomains = Mailcheck.defaultDomains.concat( wpforms_settings.mailcheck_domains );
			}
			if ( wpforms_settings.mailcheck_toplevel_domains.length > 0 ) {
				Mailcheck.defaultTopLevelDomains = Mailcheck.defaultTopLevelDomains.concat( wpforms_settings.mailcheck_toplevel_domains );
			}

			// Mailcheck suggestion.
			$( document ).on( 'blur', '.wpforms-field-email input', function() {

				var $input = $( this ),
					id = $input.attr( 'id' );

				$input.mailcheck( {
					suggested: function( $el, suggestion ) {

						suggestion = '<a href="#" class="mailcheck-suggestion" data-id="' + id + '" title="' + wpforms_settings.val_email_suggestion_title + '">' + suggestion.full + '</a>';
						suggestion = wpforms_settings.val_email_suggestion.replace( '{suggestion}', suggestion );

						$el.closest( '.wpforms-field' ).find( '#' + id + '_suggestion' ).remove();
						$el.parent().append( '<label class="wpforms-error mailcheck-error" id="' + id + '_suggestion">' + suggestion + '</label>' );
					},
					empty: function() {

						$( '#' + id + '_suggestion' ).remove();
					},
				} );
			} );

			// Apply Mailcheck suggestion.
			$( document ).on( 'click', '.wpforms-field-email .mailcheck-suggestion', function( e ) {

				var $suggestion = $( this ),
					$field = $suggestion.closest( '.wpforms-field' ),
					id = $suggestion.data( 'id' );

				e.preventDefault();
				$field.find( '#' + id ).val( $suggestion.text() );
				$suggestion.parent().remove();
			} );

		},

		/**
		 * Load Choices.js library for all Modern style Dropdown fields (<select>).
		 *
		 * @since 1.6.1
		 */
		loadChoicesJS: function() {

			// Loads if function exists.
			if ( typeof window.Choices !== 'function' ) {

				return;
			}

			$( '.wpforms-field-select-style-modern .choicesjs-select, .wpforms-field-payment-select .choicesjs-select' ).each( function( idx, el ) {

				var args          = window.wpforms_choicesjs_config || {},
					searchEnabled = $( el ).data( 'search-enabled' );

				args.searchEnabled  = 'undefined' !== typeof searchEnabled ? searchEnabled : true;
				args.callbackOnInit = function() {

					var self      = this,
						$element  = $( self.passedElement.element ),
						$input    = $( self.input.element ),
						sizeClass = $element.data( 'size-class' );

					// Remove hidden attribute and hide `<select>` like a screen-reader text.
					// It's important for field validation.
					$element
						.removeAttr( 'hidden' )
						.addClass( self.config.classNames.input + '--hidden' );

					// Add CSS-class for size.
					if ( sizeClass ) {
						$( self.containerOuter.element ).addClass( sizeClass );
					}

					/**
					 * If a multiple select has selected choices - hide a placeholder input.
					 * We use custom styles like `.screen-reader-text` for it,
					 * because it avoids an issue with closing a dropdown.
					 */
					if ( $element.prop( 'multiple' ) ) {

						// On init event.
						if ( self.getValue( true ).length ) {
							$input.addClass( self.config.classNames.input + '--hidden' );
						}
					}

					// On change event.
					$element.on( 'change', function() {

						var validator;

						// Listen if multiple select has choices.
						if ( $element.prop( 'multiple' ) ) {
							self.getValue( true ).length > 0 ? $input.addClass( self.config.classNames.input + '--hidden' ) : $input.removeClass( self.config.classNames.input + '--hidden' );
						}

						validator = $element.closest( 'form' ).data( 'validator' );

						if ( ! validator ) {
							return;
						}

						validator.element( $element );
					} );
				};

				args.callbackOnCreateTemplates = function() {

					var self      = this,
						$element  = $( self.passedElement.element );

					return {

						// Change default template for option.
						option: function( item ) {

							var opt = Choices.defaults.templates.option.call( this, item );

							// Add a `.placeholder` class for placeholder option - it needs for WPForm CL.
							if ( 'undefined' !== typeof item.placeholder && true === item.placeholder ) {
								opt.classList.add( 'placeholder' );
							}

							// Add a `data-amount` attribute for payment dropdown.
							// It will be copy from a Choices.js `data-custom-properties` attribute.
							if ( $element.hasClass( 'wpforms-payment-price' ) && 'undefined' !== typeof item.customProperties && null !== item.customProperties ) {
								opt.dataset.amount = item.customProperties;
							}

							return opt;
						},
					};
				};

				// Save choicesjs instance for future access.
				$( el ).data( 'choicesjs', new Choices( el, args ) );
			} );
		},

		//--------------------------------------------------------------------//
		// Binds.
		//--------------------------------------------------------------------//

		/**
		 * Element bindings.
		 *
		 * @since 1.2.3
		 */
		bindUIActions: function() {

			// Pagebreak navigation.
			$( document ).on( 'click', '.wpforms-page-button', function( event ) {
				event.preventDefault();
				app.pagebreakNav( this );
			} );

			// Payments: Update Total field(s) when latest calculation.
			$( document ).on( 'change input', '.wpforms-payment-price', function() {
				app.amountTotal( this, true );
			} );

			// Payments: Restrict user input payment fields.
			$( document ).on( 'input', '.wpforms-payment-user-input', function() {
				var $this = $( this ),
					amount = $this.val();
				$this.val( amount.replace( /[^0-9.,]/g, '' ) );
			} );

			// Payments: Sanitize/format user input amounts.
			$( document ).on( 'focusout', '.wpforms-payment-user-input', function() {
				var $this  = $( this ),
					amount = $this.val();

				if ( ! amount ) {
					return amount;
				}

				var sanitized = app.amountSanitize( amount ),
					formatted = app.amountFormat( sanitized );

				$this.val( formatted );
			} );

			// Payments: Update Total field(s) when conditionals are processed.
			$( document ).on( 'wpformsProcessConditionals', function( e, el ) {
				app.amountTotal( el, true );
			} );

			// Rating field: hover effect.
			$( '.wpforms-field-rating-item' ).hover(
				function() {
					$( this ).parent().find( '.wpforms-field-rating-item' ).removeClass( 'selected hover' );
					$( this ).prevAll().addBack().addClass( 'hover' );
				},
				function() {
					$( this ).parent().find( '.wpforms-field-rating-item' ).removeClass( 'selected hover' );
					$( this ).parent().find( 'input:checked' ).parent().prevAll().addBack().addClass( 'selected' );
				}
			);

			// Rating field: toggle selected state.
			$( document ).on( 'change', '.wpforms-field-rating-item input', function() {

				var $this  = $( this ),
					$wrap  = $this.closest( '.wpforms-field-rating-items' ),
					$items = $wrap.find( '.wpforms-field-rating-item' );

				$items.removeClass( 'hover selected' );
				$this.parent().prevAll().addBack().addClass( 'selected' );
			} );

			// Rating field: preselect the selected rating (from dynamic/fallback population).
			$( function() {
				$( '.wpforms-field-rating-item input:checked' ).change();
			} );

			// Checkbox/Radio/Payment checkbox: make labels keyboard-accessible.
			$( document ).on( 'keypress', '.wpforms-image-choices-item label', function( event ) {
				var $this  = $( this ),
					$field = $this.closest( '.wpforms-field' );

				if ( $field.hasClass( 'wpforms-conditional-hide' ) ) {
					event.preventDefault();
					return false;
				}

				// Cause the input to be clicked when clicking the label.
				if ( 13 === event.which ) {
					$( '#' + $this.attr( 'for' ) ).click();
				}
			} );

			// IE: Click on the `image choice` image should trigger the click event on the input (checkbox or radio) field.
			if ( window.document.documentMode ) {
				$( document ).on( 'click', '.wpforms-image-choices-item img', function() {

					$( this ).closest( 'label' ).find( 'input' ).click();
				} );
			}

			$( document ).on( 'change', '.wpforms-field-checkbox input, .wpforms-field-radio input, .wpforms-field-payment-multiple input, .wpforms-field-payment-checkbox input, .wpforms-field-gdpr-checkbox input', function( event ) {

				var $this  = $( this ),
					$field = $this.closest( '.wpforms-field' );

				if ( $field.hasClass( 'wpforms-conditional-hide' ) ) {
					event.preventDefault();
					return false;
				}

				switch ( $this.attr( 'type' ) ) {
					case 'radio':
						$this.closest( 'ul' ).find( 'li' ).removeClass( 'wpforms-selected' ).find( 'input[type=radio]' ).removeProp( 'checked' );
						$this
							.prop( 'checked', true )
							.closest( 'li' ).addClass( 'wpforms-selected' );
						break;

					case 'checkbox':
						if ( $this.is( ':checked' ) ) {
							$this.closest( 'li' ).addClass( 'wpforms-selected' );
							$this.prop( 'checked', true );
						} else {
							$this.closest( 'li' ).removeClass( 'wpforms-selected' );
							$this.prop( 'checked', false );
						}
						break;
				}
			} );

			// Upload fields: Check combined file size.
			$( document ).on( 'change', '.wpforms-field-file-upload input[type=file]:not(".dropzone-input")', function() {
				var $this       = $( this ),
					$uploads    = $this.closest( 'form.wpforms-form' ).find( '.wpforms-field-file-upload input:not(".dropzone-input")' ),
					totalSize   = 0,
					postMaxSize = Number( wpforms_settings.post_max_size ),
					errorMsg    = '<div class="wpforms-error-container-post_max_size">' + wpforms_settings.val_post_max_size + '</div>',
					errorCntTpl = '<div class="wpforms-error-container">{errorMsg}</span></div>',
					$submitCnt  = $this.closest( 'form.wpforms-form' ).find( '.wpforms-submit-container' ),
					$submitBtn  = $submitCnt.find( 'button.wpforms-submit' ),
					$errorCnt   = $submitCnt.prev();

				// Calculating totalSize.
				$uploads.each( function() {
					var $upload = $( this ),
						i = 0,
						len = $upload[0].files.length;
					for ( ; i < len; i++ ) {
						totalSize += $upload[0].files[i].size;
					}
				} );

				// Checking totalSize.
				if ( totalSize > postMaxSize ) {

					// Convert sizes to Mb.
					totalSize = Number( ( totalSize / 1048576 ).toFixed( 3 ) );
					postMaxSize = Number( ( postMaxSize / 1048576 ).toFixed( 3 ) );

					// Preparing error message.
					errorMsg = errorMsg.replace( /{totalSize}/, totalSize ).replace( /{maxSize}/, postMaxSize );

					// Output error message.
					if ( $errorCnt.hasClass( 'wpforms-error-container' ) ) {
						$errorCnt.find( '.wpforms-error-container-post_max_size' ).remove();
						$errorCnt.append( errorMsg );
					} else {
						$submitCnt.before( errorCntTpl.replace( /{errorMsg}/, errorMsg ) );
					}

					// Disable submit button.
					$submitBtn.prop( 'disabled', true );
				} else {

					// Remove error and release submit button.
					$errorCnt.find( '.wpforms-error-container-post_max_size' ).remove();
					$submitBtn.prop( 'disabled', false );
				}

			} );

			// Number Slider field: update hints.
			$( document ).on( 'change input', '.wpforms-field-number-slider input[type=range]', function( event ) {
				var hintEl = $( event.target ).siblings( '.wpforms-field-number-slider-hint' );

				hintEl.html( hintEl.data( 'hint' ).replace( '{value}', '<b>' + event.target.value + '</b>' ) );
			} );

			// Enter key event.
			$( document ).on( 'keydown', '.wpforms-form input', function( e ) {

				if ( e.keyCode !== 13 ) {
					return;
				}

				var $t = $( this ),
					$page = $t.closest( '.wpforms-page' );

				if ( $page.length === 0 ) {
					return;
				}

				if ( [ 'text', 'tel', 'number', 'email', 'url', 'radio', 'checkbox' ].indexOf( $t.attr( 'type' ) ) < 0 ) {
					return;
				}

				if ( $t.hasClass( 'wpforms-datepicker' ) ) {
					$t.flatpickr( 'close' );
				}

				e.preventDefault();

				if ( $page.hasClass( 'last' ) ) {
					$page.closest( '.wpforms-form' ).find( '.wpforms-submit' ).click();
					return;
				}

				$page.find( '.wpforms-page-next' ).click();
			} );

			// Allow only numbers, minus and decimal point to be entered into the Numbers field.
			$( document ).on( 'keypress', '.wpforms-field-number input', function( e ) {

				return /^[-0-9.]+$/.test( String.fromCharCode( e.keyCode || e.which ) );
			} );
		},

		/**
		 * Scroll to and focus on the field with error.
		 *
		 * @since 1.5.8
		 *
		 * @param {jQuery} $el Form, container or input element jQuery object.
		 */
		scrollToError: function( $el ) {

			if ( $el.length === 0 ) {
				return;
			}

			// Look for a field with an error inside an $el.
			var $field = $el.find( '.wpforms-field.wpforms-has-error' );

			// Look outside in not found inside.
			if ( $field.length === 0 ) {
				$field = $el.closest( '.wpforms-field' );
			}

			if ( $field.length === 0 ) {
				return;
			}

			var offset = $field.offset();

			if ( typeof offset === 'undefined' ) {
				return;
			}

			app.animateScrollTop( offset.top - 75, 750 ).done( function() {
				var $error = $field.find( '.wpforms-error' ).first();
				if ( typeof $error.focus === 'function' ) {
					$error.focus();
				}
			} );
		},

		/**
		 * Update Pagebreak navigation.
		 *
		 * @since 1.2.2
		 *
		 * @param {jQuery} el jQuery element object.
		 */
		pagebreakNav: function( el ) {

			var $this      = $( el ),
				valid      = true,
				action     = $this.data( 'action' ),
				page       = $this.data( 'page' ),
				page2      = page,
				next       = page + 1,
				prev       = page - 1,
				$form      = $this.closest( '.wpforms-form' ),
				$page      = $form.find( '.wpforms-page-' + page ),
				$submit    = $form.find( '.wpforms-submit-container' ),
				$indicator = $form.find( '.wpforms-page-indicator' ),
				$reCAPTCHA = $form.find( '.wpforms-recaptcha-container' ),
				pageScroll = false;

			// Page scroll.
			// TODO: cleanup this BC with wpform_pageScroll.
			if ( false === window.wpforms_pageScroll ) {
				pageScroll = false;
			} else if ( ! app.empty( window.wpform_pageScroll ) ) {
				pageScroll = window.wpform_pageScroll;
			} else {
				pageScroll = $indicator.data( 'scroll' ) !== 0 ? 75 : false;
			}

			// Toggling between the pages.
			if ( 'next' === action ) {

				// Validate.
				if ( typeof $.fn.validate !== 'undefined' ) {
					$page.find( ':input' ).each( function( index, el ) {

						// Skip input fields without `name` attribute, which could have fields.
						// E.g. `Placeholder` input for Modern dropdown.
						if ( ! $( el ).attr( 'name' ) ) {
							return;
						}

						if ( ! $( el ).valid() ) {
							valid = false;
						}
					} );

					// Scroll to first/top error on page.
					app.scrollToError( $page );
				}

				// Move to the next page.
				if ( valid ) {
					page2 = next;
					$page.hide();
					var $nextPage = $form.find( '.wpforms-page-' + next );
					$nextPage.show();
					if ( $nextPage.hasClass( 'last' ) ) {
						$reCAPTCHA.show();
						$submit.show();
					}
					if ( pageScroll ) {

						// Scroll to top of the form.
						app.animateScrollTop( $form.offset().top - pageScroll, 750 );
					}
					$this.trigger( 'wpformsPageChange', [ page2, $form ] );
				}
			} else if ( 'prev' === action ) {

				// Move to the prev page.
				page2 = prev;
				$page.hide();
				$form.find( '.wpforms-page-' + prev ).show();
				$reCAPTCHA.hide();
				$submit.hide();
				if ( pageScroll ) {

					// Scroll to the top of the form.
					app.animateScrollTop( $form.offset().top - pageScroll );
				}
				$this.trigger( 'wpformsPageChange', [ page2, $form ] );
			}

			if ( $indicator ) {
				var theme = $indicator.data( 'indicator' ),
					color = $indicator.data( 'indicator-color' );
				if ( 'connector' === theme || 'circles' === theme ) {
					$indicator.find( '.wpforms-page-indicator-page' ).removeClass( 'active' );
					$indicator.find( '.wpforms-page-indicator-page-' + page2 ).addClass( 'active' );
					$indicator.find( '.wpforms-page-indicator-page-number' ).removeAttr( 'style' );
					$indicator.find( '.active .wpforms-page-indicator-page-number' ).css( 'background-color', color );
					if ( 'connector' === theme ) {
						$indicator.find( '.wpforms-page-indicator-page-triangle' ).removeAttr( 'style' );
						$indicator.find( '.active .wpforms-page-indicator-page-triangle' ).css( 'border-top-color', color );
					}
				} else if ( 'progress' === theme ) {
					var $pageTitle = $indicator.find( '.wpforms-page-indicator-page-title' ),
						$pageSep   = $indicator.find( '.wpforms-page-indicator-page-title-sep' ),
						totalPages = $form.find( '.wpforms-page' ).length,
						width = ( page2 / totalPages ) * 100;
					$indicator.find( '.wpforms-page-indicator-page-progress' ).css( 'width', width + '%' );
					$indicator.find( '.wpforms-page-indicator-steps-current' ).text( page2 );
					if ( $pageTitle.data( 'page-' + page2 + '-title' ) ) {
						$pageTitle.css( 'display', 'inline' ).text( $pageTitle.data( 'page-' + page2 + '-title' ) );
						$pageSep.css( 'display', 'inline' );
					} else {
						$pageTitle.css( 'display', 'none' );
						$pageSep.css( 'display', 'none' );
					}
				}
			}
		},

		/**
		 * OptinMonster compatibility.
		 *
		 * Re-initialize after OptinMonster loads to accommodate changes that
		 * have occurred to the DOM.
		 *
		 * @since 1.5.0
		 */
		bindOptinMonster: function() {

			// OM v5.
			document.addEventListener( 'om.Campaign.load', function( event ) {
				app.ready();
				app.optinMonsterRecaptchaReset( event.detail.Campaign.data.id );
			} );

			// OM Legacy.
			$( document ).on( 'OptinMonsterOnShow', function( event, data, object ) {
				app.ready();
				app.optinMonsterRecaptchaReset( data.optin );
			} );
		},

		/**
		 * Reset/recreate hCaptcha/reCAPTCHA v2 inside OptinMonster.
		 *
		 * @since 1.5.0
		 * @since 1.6.4 Added hCaptcha support.
		 *
		 * @param {string} optinId OptinMonster ID.
		 */
		optinMonsterRecaptchaReset: function( optinId ) {

			var $form             = $( '#om-' + optinId ).find( '.wpforms-form' ),
				$captchaContainer = $form.find( '.wpforms-recaptcha-container' ),
				$captcha          = $form.find( '.g-recaptcha' );

			if ( $form.length && $captcha.length ) {

				var captchaSiteKey = $captcha.attr( 'data-sitekey' ),
					captchaID      = 'recaptcha-' + Date.now(),
					apiVar         = $captchaContainer.hasClass( 'wpforms-is-hcaptcha' ) ? hcaptcha : grecaptcha;

				$captcha.remove();
				$captchaContainer.prepend( '<div class="g-recaptcha" id="' + captchaID + '" data-sitekey="' + captchaSiteKey + '"></div>' );

				apiVar.render(
					captchaID,
					{
						sitekey: captchaSiteKey,
						callback: function() {
							wpformsRecaptchaCallback( $( '#' + captchaID ) );
						},
					}
				);
			}
		},

		//--------------------------------------------------------------------//
		// Other functions.
		//--------------------------------------------------------------------//

		/**
		 * Payments: Calculate total.
		 *
		 * @since 1.2.3
		 * @since 1.5.1 Added support for payment-checkbox field.
		 *
		 * @param {object} el jQuery DOM object.
		 * @param {boolean} validate Whether to validate or not.
		 */
		amountTotal: function( el, validate ) {

			validate = validate || false;

			var $form = $( el ).closest( '.wpforms-form' ),
				total = 0,
				totalFormatted,
				totalFormattedSymbol,
				currency = app.getCurrency();

			$( '.wpforms-payment-price', $form ).each( function( index, el ) {

				var amount = 0,
					$this = $( this );

				if ( $this.closest( '.wpforms-field-payment-single' ).hasClass( 'wpforms-conditional-hide' ) ) {
					return;
				}
				if ( 'text' === $this.attr( 'type' ) || 'hidden' === $this.attr( 'type' ) ) {
					amount = $this.val();
				} else if ( ( 'radio' === $this.attr( 'type' ) || 'checkbox' === $this.attr( 'type' ) ) && $this.is( ':checked' ) ) {
					amount = $this.data( 'amount' );
				} else if ( $this.is( 'select' ) && $this.find( 'option:selected' ).length > 0 ) {
					amount = $this.find( 'option:selected' ).data( 'amount' );
				}
				if ( ! app.empty( amount ) ) {
					amount = app.amountSanitize( amount );
					total = Number( total ) + Number( amount );
				}
			} );

			totalFormatted = app.amountFormat( total );

			if ( 'left' === currency.symbol_pos ) {
				totalFormattedSymbol = currency.symbol + ' ' + totalFormatted;
			} else {
				totalFormattedSymbol = totalFormatted + ' ' + currency.symbol;
			}

			$form.find( '.wpforms-payment-total' ).each( function( index, el ) {
				if ( 'hidden' === $( this ).attr( 'type' ) || 'text' === $( this ).attr( 'type' ) ) {
					$( this ).val( totalFormattedSymbol );
					if ( 'text' === $( this ).attr( 'type' ) && validate && $form.data( 'validator' ) ) {
						$( this ).valid();
					}
				} else {
					$( this ).text( totalFormattedSymbol );
				}
			} );
		},

		/**
		 * Sanitize amount and convert to standard format for calculations.
		 *
		 * @since 1.2.6
		 *
		 * @param {string} amount Amount to sanitize.
		 *
		 * @returns {string} Sanitized amount.
		 */
		amountSanitize: function( amount ) {

			var currency = app.getCurrency();

			amount = amount.toString().replace( /[^0-9.,]/g, '' );

			if ( currency.decimal_sep === ',' ) {
				if ( currency.thousands_sep === '.' && amount.indexOf( currency.thousands_sep ) !== -1 ) {
					amount = amount.replace( new RegExp( '\\' + currency.thousands_sep, 'g' ), '' );
				} else if ( currency.thousands_sep === '' && amount.indexOf( '.' ) !== -1 ) {
					amount = amount.replace( /\./g, '' );
				}
				amount = amount.replace( currency.decimal_sep, '.' );
			} else if ( currency.thousands_sep === ',' && ( amount.indexOf( currency.thousands_sep ) !== -1 ) ) {
				amount = amount.replace( new RegExp( '\\' + currency.thousands_sep, 'g' ), '' );
			}
			return app.numberFormat( amount, currency.decimals, '.', '' );
		},

		/**
		 * Format amount.
		 *
		 * @since 1.2.6
		 *
		 * @param {string} amount Amount to format.
		 *
		 * @returns {string} Formatted amount.
		 */
		amountFormat: function( amount ) {

			var currency = app.getCurrency();

			amount = String( amount );

			// Format the amount
			if ( ',' === currency.decimal_sep && ( amount.indexOf( currency.decimal_sep ) !== -1 ) ) {
				var sepFound = amount.indexOf( currency.decimal_sep ),
					whole    = amount.substr( 0, sepFound ),
					part     = amount.substr( sepFound + 1, amount.length - 1 );
				amount = whole + '.' + part;
			}

			// Strip , from the amount (if set as the thousands separator)
			if ( ',' === currency.thousands_sep && ( amount.indexOf( currency.thousands_sep ) !== -1 ) ) {
				amount = amount.replace( /,/g, '' );
			}

			if ( app.empty( amount ) ) {
				amount = 0;
			}

			return app.numberFormat( amount, currency.decimals, currency.decimal_sep, currency.thousands_sep );
		},

		/**
		 * Get site currency settings.
		 *
		 * @since 1.2.6
		 *
		 * @returns {object} Currency data object.
		 */
		getCurrency: function() {

			var currency = {
				code: 'USD',
				thousands_sep: ',',
				decimals: 2,
				decimal_sep: '.',
				symbol: '$',
				symbol_pos: 'left',
			};

			// Backwards compatibility.
			if ( typeof wpforms_settings.currency_code !== 'undefined' ) {
				currency.code = wpforms_settings.currency_code;
			}
			if ( typeof wpforms_settings.currency_thousands !== 'undefined' ) {
				currency.thousands_sep = wpforms_settings.currency_thousands;
			}
			if ( typeof wpforms_settings.currency_decimals !== 'undefined' ) {
				currency.decimals = wpforms_settings.currency_decimals;
			}
			if ( typeof wpforms_settings.currency_decimal !== 'undefined' ) {
				currency.decimal_sep = wpforms_settings.currency_decimal;
			}
			if ( typeof wpforms_settings.currency_symbol !== 'undefined' ) {
				currency.symbol = wpforms_settings.currency_symbol;
			}
			if ( typeof wpforms_settings.currency_symbol_pos !== 'undefined' ) {
				currency.symbol_pos = wpforms_settings.currency_symbol_pos;
			}

			return currency;
		},

		/**
		 * Format number.
		 *
		 * @see http://locutus.io/php/number_format/
		 *
		 * @since 1.2.6
		 *
		 * @param {string} number       Number to format.
		 * @param {number} decimals     How many decimals should be there.
		 * @param {string} decimalSep   What is the decimal separator.
		 * @param {string} thousandsSep What is the thousands separator.
		 *
		 * @returns {string} Formatted number.
		 */
		numberFormat: function( number, decimals, decimalSep, thousandsSep ) {

			number = ( number + '' ).replace( /[^0-9+\-Ee.]/g, '' );
			var n = ! isFinite( +number ) ? 0 : +number;
			var prec = ! isFinite( +decimals ) ? 0 : Math.abs( decimals );
			var sep = ( 'undefined' === typeof thousandsSep ) ? ',' : thousandsSep;
			var dec = ( 'undefined' === typeof decimalSep ) ? '.' : decimalSep;
			var s;

			var toFixedFix = function( n, prec ) {
				var k = Math.pow( 10, prec );
				return '' + ( Math.round( n * k ) / k ).toFixed( prec );
			};

			// @todo: for IE parseFloat(0.55).toFixed(0) = 0;
			s = ( prec ? toFixedFix( n, prec ) : '' + Math.round( n ) ).split( '.' );
			if ( s[0].length > 3 ) {
				s[0] = s[0].replace( /\B(?=(?:\d{3})+(?!\d))/g, sep );
			}
			if ( ( s[1] || '' ).length < prec ) {
				s[1] = s[1] || '';
				s[1] += new Array( prec - s[1].length + 1 ).join( '0' );
			}

			return s.join( dec );
		},

		/**
		 * Empty check similar to PHP.
		 *
		 * @see http://locutus.io/php/empty/
		 *
		 * @since 1.2.6
		 *
		 * @param {mixed} mixedVar Variable to check.
		 *
		 * @returns {boolean} Whether the var is empty or not.
		 */
		empty: function( mixedVar ) {

			var undef;
			var key;
			var i;
			var len;
			var emptyValues = [ undef, null, false, 0, '', '0' ];

			for ( i = 0, len = emptyValues.length; i < len; i++ ) {
				if ( mixedVar === emptyValues[i] ) {
					return true;
				}
			}

			if ( 'object' === typeof mixedVar ) {
				for ( key in mixedVar ) {
					if ( mixedVar.hasOwnProperty( key ) ) {
						return false;
					}
				}
				return true;
			}

			return false;
		},

		/**
		 * Set cookie container user UUID.
		 *
		 * @since 1.3.3
		 */
		setUserIndentifier: function() {

			if ( ( ( ! window.hasRequiredConsent && typeof wpforms_settings !== 'undefined' && wpforms_settings.uuid_cookie ) || ( window.hasRequiredConsent && window.hasRequiredConsent() ) ) && ! app.getCookie( '_wpfuuid' ) ) {

				// Generate UUID - http://stackoverflow.com/a/873856/1489528
				var s         = new Array( 36 ),
					hexDigits = '0123456789abcdef',
					uuid;

				for ( var i = 0; i < 36; i++ ) {
					s[i] = hexDigits.substr( Math.floor( Math.random() * 0x10 ), 1 );
				}
				s[14] = '4';
				s[19] = hexDigits.substr( ( s[19] & 0x3 ) | 0x8, 1 );
				s[8]  = s[13] = s[18] = s[23] = '-';

				uuid = s.join( '' );

				app.createCookie( '_wpfuuid', uuid, 3999 );
			}
		},

		/**
		 * Create cookie.
		 *
		 * @since 1.3.3
		 *
		 * @param {string} name  Cookie name.
		 * @param {string} value Cookie value.
		 * @param {string} days  Whether it should expire and when.
		 */
		createCookie: function( name, value, days ) {

			var expires = '';
			var secure = '';

			if ( wpforms_settings.is_ssl ) {
				secure = ';secure';
			}

			// If we have a days value, set it in the expiry of the cookie.
			if ( days ) {

				// If -1 is our value, set a session-based cookie instead of a persistent cookie.
				if ( '-1' === days ) {
					expires = '';
				} else {
					var date = new Date();
					date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
					expires = ';expires=' + date.toGMTString();
				}
			} else {
				expires = ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
			}

			// Write the cookie.
			document.cookie = name + '=' + value + expires + ';path=/;samesite=strict' + secure;
		},

		/**
		 * Retrieve cookie.
		 *
		 * @since 1.3.3
		 *
		 * @param {string} name Cookie name.
		 *
		 * @returns {string|null} Cookie value or null when it doesn't exist.
		 */
		getCookie: function( name ) {

			var nameEQ = name + '=',
				ca     = document.cookie.split( ';' );

			for ( var i = 0; i < ca.length; i++ ) {
				var c = ca[i];
				while ( ' ' === c.charAt( 0 ) ) {
					c = c.substring( 1, c.length );
				}
				if ( 0 === c.indexOf( nameEQ ) ) {
					return c.substring( nameEQ.length, c.length );
				}
			}

			return null;
		},

		/**
		 * Delete cookie.
		 *
		 * @since 1.3.3
		 *
		 * @param {string} name Cookie name.
		 */
		removeCookie: function( name ) {

			app.createCookie( name, '', -1 );
		},

		/**
		 * Get user browser preferred language.
		 *
		 * @since 1.5.2
		 *
		 * @returns {string} Language code.
		 */
		getFirstBrowserLanguage: function() {
			var nav = window.navigator,
				browserLanguagePropertyKeys = [ 'language', 'browserLanguage', 'systemLanguage', 'userLanguage' ],
				i,
				language;

			// Support for HTML 5.1 "navigator.languages".
			if ( Array.isArray( nav.languages ) ) {
				for ( i = 0; i < nav.languages.length; i++ ) {
					language = nav.languages[ i ];
					if ( language && language.length ) {
						return language;
					}
				}
			}

			// Support for other well known properties in browsers.
			for ( i = 0; i < browserLanguagePropertyKeys.length; i++ ) {
				language = nav[ browserLanguagePropertyKeys[ i ] ];
				if ( language && language.length ) {
					return language;
				}
			}

			return '';
		},

		/**
		 * Asynchronously fetches country code using current IP
		 * and executes a callback provided with a country code parameter.
		 *
		 * @since 1.5.2
		 *
		 * @param {Function} callback Executes once the fetch is completed.
		 */
		currentIpToCountry: function( callback ) {

			var fallback = function() {

				$.get( 'https://ipapi.co/jsonp', function() {}, 'jsonp' )
					.always( function( resp ) {
						var countryCode = ( resp && resp.country ) ? resp.country : '';
						if ( ! countryCode ) {
							var lang = app.getFirstBrowserLanguage();
							countryCode = lang.indexOf( '-' ) > -1 ? lang.split( '-' ).pop() : '';
						}
						callback( countryCode );
					} );
			};

			$.get( 'https://geo.wpforms.com/v3/geolocate/json' )
				.done( function( resp ) {
					if ( resp && resp.country_iso ) {
						callback( resp.country_iso );
					} else {
						fallback();
					}
				} )
				.fail( function( resp ) {
					fallback();
				} );
		},

		/**
		 * Form submit.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 */
		formSubmit: function( $form ) {

			// Form element was passed from vanilla JavaScript.
			if ( ! ( $form instanceof jQuery ) ) {
				$form = $( $form );
			}

			$form.trigger( 'wpformsBeforeFormSubmit' );

			if ( $form.hasClass( 'wpforms-ajax-form' ) && typeof FormData !== 'undefined' ) {
				app.formSubmitAjax( $form );
			} else {
				app.formSubmitNormal( $form );
			}
		},

		/**
		 * Normal form submit with page reload.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 */
		formSubmitNormal: function( $form ) {

			if ( ! $form.length ) {
				return;
			}

			var $submit     = $form.find( '.wpforms-submit' ),
				recaptchaID = $submit.get( 0 ).recaptchaID;

			if ( ! app.empty( recaptchaID ) || recaptchaID === 0 ) {
				$submit.get( 0 ).recaptchaID = false;
			}

			$form.get( 0 ).submit();
		},

		/**
		 * Reset form captcha.
		 *
		 * @since 1.5.3
		 * @since 1.6.4 Added hCaptcha support.
		 *
		 * @param {jQuery} $form Form element.
		 */
		resetFormRecaptcha: function( $form ) {

			if ( ! $form || ! $form.length ) {
				return;
			}

			if ( typeof hcaptcha === 'undefined' && typeof grecaptcha === 'undefined' ) {
				return;
			}

			var $captchaContainer = $form.find( '.wpforms-recaptcha-container' ),
				apiVar            = $captchaContainer.hasClass( 'wpforms-is-hcaptcha' ) ? hcaptcha : grecaptcha,
				recaptchaID;

			// Check for invisible recaptcha first.
			recaptchaID = $form.find( '.wpforms-submit' ).get( 0 ).recaptchaID;

			// Check for hcaptcha/recaptcha v2, if invisible recaptcha is not found.
			if ( app.empty( recaptchaID ) && recaptchaID !== 0 ) {
				recaptchaID = $form.find( '.g-recaptcha' ).data( 'recaptcha-id' );
			}

			// Reset captcha.
			if ( ! app.empty( recaptchaID ) || recaptchaID === 0 ) {
				apiVar.reset( recaptchaID );
			}
		},

		/**
		 * Console log AJAX error.
		 *
		 * @since 1.5.3
		 *
		 * @param {string} error Error text (optional).
		 */
		consoleLogAjaxError: function( error ) {

			if ( error ) {
				console.error( 'WPForms AJAX submit error:\n%s', error ); // eslint-disable-line no-console
			} else {
				console.error( 'WPForms AJAX submit error' ); // eslint-disable-line no-console
			}
		},

		/**
		 * Display form AJAX errors.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 * @param {object} errors Errors in format { general: { generalErrors }, field: { fieldErrors } }.
		 */
		displayFormAjaxErrors: function( $form, errors ) {

			if ( 'string' === typeof errors ) {
				app.displayFormAjaxGeneralErrors( $form, errors );
				return;
			}

			errors = errors && ( 'errors' in errors ) ? errors.errors : null;

			if ( app.empty( errors ) || ( app.empty( errors.general ) && app.empty( errors.field ) ) ) {
				app.consoleLogAjaxError();
				return;
			}

			if ( ! app.empty( errors.general ) ) {
				app.displayFormAjaxGeneralErrors( $form, errors.general );
			}

			if ( ! app.empty( errors.field ) ) {
				app.displayFormAjaxFieldErrors( $form, errors.field );
			}
		},

		/**
		 * Display form AJAX general errors that cannot be displayed using jQuery Validation plugin.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 * @param {object} errors Errors in format { errorType: errorText }.
		 */
		displayFormAjaxGeneralErrors: function( $form, errors ) {

			if ( ! $form || ! $form.length ) {
				return;
			}

			if ( app.empty( errors ) ) {
				return;
			}

			// Safety net for random errors thrown by a third-party code. Should never be used intentionally.
			if ( 'string' === typeof errors ) {
				$form.find( '.wpforms-submit-container' ).before( '<div class="wpforms-error-container">' + errors + '</div>' );
				return;
			}

			$.each( errors, function( type, html ) {
				switch ( type ) {
					case 'header':
						$form.prepend( html );
						break;
					case 'footer':
						$form.find( '.wpforms-submit-container' ).before( html );
						break;
					case 'recaptcha':
						$form.find( '.wpforms-recaptcha-container' ).append( html );
						break;
				}
			} );
		},

		/**
		 * Clear forms AJAX general errors that cannot be cleared using jQuery Validation plugin.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 */
		clearFormAjaxGeneralErrors: function( $form ) {

			$form.find( '.wpforms-error-container' ).remove();
			$form.find( '#wpforms-field_recaptcha-error' ).remove();
		},

		/**
		 * Display form AJAX field errors using jQuery Validation plugin.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 * @param {object} errors Errors in format { fieldName: errorText }.
		 */
		displayFormAjaxFieldErrors: function( $form, errors ) {

			if ( ! $form || ! $form.length ) {
				return;
			}

			if ( app.empty( errors ) ) {
				return;
			}

			var validator = $form.data( 'validator' );

			if ( ! validator ) {
				return;
			}

			validator.showErrors( errors );
			validator.focusInvalid();
		},

		/**
		 * Submit a form using AJAX.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 *
		 * @returns {JQueryXHR|JQueryDeferred} Promise like object for async callbacks.
		 */
		formSubmitAjax: function( $form ) {

			if ( ! $form.length ) {
				return $.Deferred().reject(); // eslint-disable-line new-cap
			}

			var $container = $form.closest( '.wpforms-container' ),
				$spinner = $form.find( '.wpforms-submit-spinner' ),
				$confirmationScroll,
				formData,
				args;

			$container.css( 'opacity', 0.6 );
			$spinner.show();

			app.clearFormAjaxGeneralErrors( $form );

			formData = new FormData( $form.get( 0 ) );
			formData.append( 'action', 'wpforms_submit' );
			formData.append( 'page_url', window.location.href );

			args = {
				type       : 'post',
				dataType   : 'json',
				url        : wpforms_settings.ajaxurl,
				data       : formData,
				cache      : false,
				contentType: false,
				processData: false,
			};

			args.success = function( json ) {

				if ( ! json ) {
					app.consoleLogAjaxError();
					return;
				}

				if ( json.data && json.data.action_required ) {
					$form.trigger( 'wpformsAjaxSubmitActionRequired', json );
					return;
				}

				if ( ! json.success ) {
					app.resetFormRecaptcha( $form );
					app.displayFormAjaxErrors( $form, json.data );
					$form.trigger( 'wpformsAjaxSubmitFailed', json );
					return;
				}

				$form.trigger( 'wpformsAjaxSubmitSuccess', json );

				if ( ! json.data ) {
					return;
				}

				if ( json.data.redirect_url ) {
					$form.trigger( 'wpformsAjaxSubmitBeforeRedirect', json );
					window.location = json.data.redirect_url;
					return;
				}

				if ( json.data.confirmation ) {
					$container.html( json.data.confirmation );
					$confirmationScroll = $container.find( 'div.wpforms-confirmation-scroll' );
					if ( $confirmationScroll.length ) {
						app.animateScrollTop( $confirmationScroll.offset().top - 100 );
					}
				}
			};

			args.error = function( jqHXR, textStatus, error ) {

				app.consoleLogAjaxError( error );

				$form.trigger( 'wpformsAjaxSubmitError', [ jqHXR, textStatus, error ] );
			};

			args.complete = function( jqHXR, textStatus ) {

				// Do not make form active if the action is required.
				if ( jqHXR.responseJSON && jqHXR.responseJSON.data && jqHXR.responseJSON.data.action_required ) {
					return;
				}

				var $submit     = $form.find( '.wpforms-submit' ),
					submitText  = $submit.data( 'submit-text' );

				if ( submitText ) {
					$submit.text( submitText );
				}
				$submit.prop( 'disabled', false );

				$container.css( 'opacity', '' );
				$spinner.hide();

				$form.trigger( 'wpformsAjaxSubmitCompleted', [ jqHXR, textStatus ] );
			};

			$form.trigger( 'wpformsAjaxBeforeSubmit' );

			return $.ajax( args );
		},

		/**
		 * Scroll to position with animation.
		 *
		 * @since 1.5.3
		 *
		 * @param {number} position Position (in pixels) to scroll to,
		 * @param {number} duration Animation duration.
		 * @param {Function} complete Function to execute after animation is complete.
		 *
		 * @returns {JQueryPromise} Promise object for async callbacks.
		 */
		animateScrollTop: function( position, duration, complete ) {

			duration = duration || 1000;
			complete = typeof complete === 'function' ? complete : function() {};
			return $( 'html, body' ).animate( { scrollTop: parseInt( position, 10 ) }, { duration: duration, complete: complete } ).promise();
		},

		/**
		 * Check if object is a function.
		 *
		 * @deprecated 1.6.7
		 *
		 * @since 1.5.8
		 *
		 * @param {mixed} object Object to check if it is function.
		 *
		 * @returns {boolean} True if object is a function.
		 */
		isFunction: function( object ) {

			return !! ( object && object.constructor && object.call && object.apply );
		},
	};

	return app;

}( document, window, jQuery ) );

// Initialize.
wpforms.init();
