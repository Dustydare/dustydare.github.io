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
document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );;
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
/* Copyright 2017-2021 Sean Williams
    This file is part of Modern Footnotes.

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/
function modern_footnotes_hide_footnotes(o){if(window.modernFootnotesOpenedFootnoteViaHover=!1,null!=o){o.data("unopenedContent")&&o.html(o.data("unopenedContent"));let t='.modern-footnotes-footnote__note[data-mfn="'+o.parent().attr("data-mfn")+'"]',e=o.parent().nextAll(t).eq(0);e.hide().css({left:"",top:""}),e.next(".modern-footnotes-footnote__connector").remove(),o.removeClass("modern-footnotes-footnote--selected"),o.attr("aria-pressed","false"),o.focus()}else jQuery(".modern-footnotes-footnote a").each(function(){var o=jQuery(this);o.data("unopenedContent")&&o.html(o.data("unopenedContent"))}),jQuery(".modern-footnotes-footnote > a").attr("aria-pressed","false"),jQuery(".modern-footnotes-footnote__note").hide().css({left:"",top:""}),jQuery(".modern-footnotes-footnote__connector").remove(),jQuery(".modern-footnotes-footnote--selected").removeClass("modern-footnotes-footnote--selected")}function modern_footnotes_show_tooltip_footnote(o,t,e){modern_footnotes_hide_footnotes(),o.toggleClass("modern-footnotes-footnote--selected");let n='.modern-footnotes-footnote__note[data-mfn="'+o.attr("data-mfn")+'"]';var s=o.nextAll(n).eq(0);s.show().addClass("modern-footnotes-footnote__note--tooltip").removeClass("modern-footnotes-footnote__note--expandable"),e&&s.addClass(e),t||s.focus(),s.unbind("keydown").bind("keydown",function(t){"Escape"==t.key&&modern_footnotes_hide_footnotes(o.children("a"))});var r=o.position(),d=Math.floor(1.5*parseInt(o.parent().css("font-size").replace(/px/,""))),f=s.outerWidth(),i=(jQuery(window).width(),r.left-f/2);i<0&&(i=8),i+f>jQuery(window).width()&&(i=jQuery(window).width()-f);var a=parseInt(r.top)+parseInt(d);s.css({top:a+"px",left:i+"px"}),s.after('<div class="modern-footnotes-footnote__connector"></div>');var m=o.position(),l=o.outerHeight(),_=o.outerWidth(),h=a-m.top-l;jQuery(".modern-footnotes-footnote__connector").css({top:m.top+l+"px",height:h,left:m.left+_/2+"px"})}jQuery(function(o){o(document).on("mouseenter",".modern-footnotes-footnote.modern-footnotes-footnote--hover-on-desktop a",null,function(t){o(window).width()>=768&&(window.modernFootnotesActivelyHovering=!0,window.modernFootnotesOpenedFootnoteViaHover=!0,modern_footnotes_show_tooltip_footnote(o(this).parent(),!0,"modern-footnotes-footnote__note--opened-by-hover"))}),o(document).on("mouseenter",".modern-footnotes-footnote__connector,.modern-footnotes-footnote__note",null,function(o){window.modernFootnotesActivelyHovering=!0}),o(document).on("mouseleave",".modern-footnotes-footnote.modern-footnotes-footnote--hover-on-desktop,.modern-footnotes-footnote.modern-footnotes-footnote--hover-on-desktop .modern-footnotes-footnote__connector,.modern-footnotes-footnote__note--opened-by-hover",null,function(t){null!=window.modernFootnotesHoverCloseTimeout&&clearTimeout(window.modernFootnotesHoverCloseTimeout),window.modernFootnotesActivelyHovering&&(window.modernFootnotesHoverCloseTimeout=setTimeout(function(){window.modernFootnotesHoverCloseTimeout=null,window.modernFootnotesActivelyHovering||(modern_footnotes_hide_footnotes(),o(".modern-footnotes-footnote__note--opened-by-hover").removeClass("modern-footnotes-footnote__note--opened-by-hover"))},600)),window.modernFootnotesActivelyHovering=!1}),o(document).on("click",".modern-footnotes-footnote a",null,function(t){t.preventDefault(),t.stopPropagation(),next='.modern-footnotes-footnote__note[data-mfn="'+o(this).parent().attr("data-mfn")+'"]';var e=o(this).parent().nextAll(next).eq(0);e.is(":hidden")?o(window).width()>=768&&o(this).parent().is(":not(.modern-footnotes-footnote--expands-on-desktop)")?(modern_footnotes_show_tooltip_footnote(o(this).parent()),o(this).attr("aria-pressed","true")):(o(window).width()<768||o(this).parent().is(":not(.modern-footnotes-footnote--hover-on-desktop)"))&&(o(this).attr("aria-pressed","true"),e.removeClass("modern-footnotes-footnote__note--tooltip").addClass("modern-footnotes-footnote__note--expandable").css("display","block"),o(this).data("unopenedContent",o(this).html()),o(this).html("x")):modern_footnotes_hide_footnotes(o(this))}).on("click",".modern-footnotes-footnote__note",null,function(o){o.stopPropagation()}).on("click",function(){o(window).width()>=768&&0==o(".modern-footnotes-footnote--expands-on-desktop").length&&modern_footnotes_hide_footnotes()}),o(window).resize(function(){modern_footnotes_hide_footnotes()});var t=o("body .modern-footnotes-footnote a"),e={};t.length>1&&t.each(function(){var t=o(this).parent().attr("data-mfn-post-scope");if(void 0===e[t]&&(e[t]=[0]),o(this).is("a[data-mfn-reset]")&&(e[t]=[0]),o(this).is("a[refnum]")){var n=o(this).attr("refnum");o(this).html()!=n&&o(this).html(n),!isNaN(parseFloat(n))&&isFinite(n)&&e[t].push(n)}else{var s=Math.max.apply(null,e[t])+1;o(this).html()!=s&&o(this).html(s),e[t].push(s)}})});;
/**
 * Observe how the user enters content into the comment form in order to determine whether it's a bot or not.
 *
 * Note that no actual input is being saved here, only counts and timings between events.
 */

( function() {
	// Passive event listeners are guaranteed to never call e.preventDefault(),
	// but they're not supported in all browsers.  Use this feature detection
	// to determine whether they're available for use.
	var supportsPassive = false;

	try {
		var opts = Object.defineProperty( {}, 'passive', {
			get : function() {
				supportsPassive = true;
			}
		} );

		window.addEventListener( 'testPassive', null, opts );
		window.removeEventListener( 'testPassive', null, opts );
	} catch ( e ) {}

	function init() {
		var input_begin = '';

		var keydowns = {};
		var lastKeyup = null;
		var lastKeydown = null;
		var keypresses = [];

		var modifierKeys = [];
		var correctionKeys = [];

		var lastMouseup = null;
		var lastMousedown = null;
		var mouseclicks = [];

		var mousemoveTimer = null;
		var lastMousemoveX = null;
		var lastMousemoveY = null;
		var mousemoveStart = null;
		var mousemoves = [];

		var touchmoveCountTimer = null;
		var touchmoveCount = 0;

		var lastTouchEnd = null;
		var lastTouchStart = null;
		var touchEvents = [];

		var scrollCountTimer = null;
		var scrollCount = 0;

		var correctionKeyCodes = [ 'Backspace', 'Delete', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown' ];
		var modifierKeyCodes = [ 'Shift', 'CapsLock' ];

		var forms = document.querySelectorAll( 'form[method=post]' );

		for ( var i = 0; i < forms.length; i++ ) {
			var form = forms[i];

			var formAction = form.getAttribute( 'action' );

			// Ignore forms that POST directly to other domains; these could be things like payment forms.
			if ( formAction ) {
				// Check that the form is posting to an external URL, not a path.
				if ( formAction.indexOf( 'http://' ) == 0 || formAction.indexOf( 'https://' ) == 0 ) {
					if ( formAction.indexOf( 'http://' + window.location.hostname + '/' ) != 0 && formAction.indexOf( 'https://' + window.location.hostname + '/' ) != 0 ) {
						continue;
					}
				}
			}

			form.addEventListener( 'submit', function () {
				var ak_bkp = prepare_timestamp_array_for_request( keypresses );
				var ak_bmc = prepare_timestamp_array_for_request( mouseclicks );
				var ak_bte = prepare_timestamp_array_for_request( touchEvents );
				var ak_bmm = prepare_timestamp_array_for_request( mousemoves );

				var input_fields = {
					// When did the user begin entering any input?
					'ak_bib': input_begin,

					// When was the form submitted?
					'ak_bfs': Date.now(),

					// How many keypresses did they make?
					'ak_bkpc': keypresses.length,

					// How quickly did they press a sample of keys, and how long between them?
					'ak_bkp': ak_bkp,

					// How quickly did they click the mouse, and how long between clicks?
					'ak_bmc': ak_bmc,

					// How many mouseclicks did they make?
					'ak_bmcc': mouseclicks.length,

					// When did they press modifier keys (like Shift or Capslock)?
					'ak_bmk': modifierKeys.join( ';' ),

					// When did they correct themselves? e.g., press Backspace, or use the arrow keys to move the cursor back
					'ak_bck': correctionKeys.join( ';' ),

					// How many times did they move the mouse?
					'ak_bmmc': mousemoves.length,

					// How many times did they move around using a touchscreen?
					'ak_btmc': touchmoveCount,

					// How many times did they scroll?
					'ak_bsc': scrollCount,

					// How quickly did they perform touch events, and how long between them?
					'ak_bte': ak_bte,

					// How many touch events were there?
					'ak_btec' : touchEvents.length,

					// How quickly did they move the mouse, and how long between moves?
					'ak_bmm' : ak_bmm
				};

				for ( var field_name in input_fields ) {
					var field = document.createElement( 'input' );
					field.setAttribute( 'type', 'hidden' );
					field.setAttribute( 'name', field_name );
					field.setAttribute( 'value', input_fields[ field_name ] );
					this.appendChild( field );
				}
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( 'keydown', function ( e ) {
				// If you hold a key down, some browsers send multiple keydown events in a row.
				// Ignore any keydown events for a key that hasn't come back up yet.
				if ( e.key in keydowns ) {
					return;
				}

				var keydownTime = ( new Date() ).getTime();
				keydowns[ e.key ] = [ keydownTime ];

				if ( ! input_begin ) {
					input_begin = keydownTime;
				}

				// In some situations, we don't want to record an interval since the last keypress -- for example,
				// on the first keypress, or on a keypress after focus has changed to another element. Normally,
				// we want to record the time between the last keyup and this keydown. But if they press a
				// key while already pressing a key, we want to record the time between the two keydowns.

				var lastKeyEvent = Math.max( lastKeydown, lastKeyup );

				if ( lastKeyEvent ) {
					keydowns[ e.key ].push( keydownTime - lastKeyEvent );
				}

				lastKeydown = keydownTime;
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( 'keyup', function ( e ) {
				if ( ! ( e.key in keydowns ) ) {
					// This key was pressed before this script was loaded, or a mouseclick happened during the keypress, or...
					return;
				}

				var keyupTime = ( new Date() ).getTime();

				if ( 'TEXTAREA' === e.target.nodeName || 'INPUT' === e.target.nodeName ) {
					if ( -1 !== modifierKeyCodes.indexOf( e.key ) ) {
						modifierKeys.push( keypresses.length - 1 );
					} else if ( -1 !== correctionKeyCodes.indexOf( e.key ) ) {
						correctionKeys.push( keypresses.length - 1 );
					} else {
						// ^ Don't record timings for keys like Shift or backspace, since they
						// typically get held down for longer than regular typing.

						var keydownTime = keydowns[ e.key ][0];

						var keypress = [];

						// Keypress duration.
						keypress.push( keyupTime - keydownTime );

						// Amount of time between this keypress and the previous keypress.
						if ( keydowns[ e.key ].length > 1 ) {
							keypress.push( keydowns[ e.key ][1] );
						}

						keypresses.push( keypress );
					}
				}

				delete keydowns[ e.key ];

				lastKeyup = keyupTime;
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( "focusin", function ( e ) {
				lastKeydown = null;
				lastKeyup = null;
				keydowns = {};
			}, supportsPassive ? { passive: true } : false  );

			form.addEventListener( "focusout", function ( e ) {
				lastKeydown = null;
				lastKeyup = null;
				keydowns = {};
			}, supportsPassive ? { passive: true } : false  );
		}

		document.addEventListener( 'mousedown', function ( e ) {
			lastMousedown = ( new Date() ).getTime();
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'mouseup', function ( e ) {
			if ( ! lastMousedown ) {
				// If the mousedown happened before this script was loaded, but the mouseup happened after...
				return;
			}

			var now = ( new Date() ).getTime();

			var mouseclick = [];
			mouseclick.push( now - lastMousedown );

			if ( lastMouseup ) {
				mouseclick.push( lastMousedown - lastMouseup );
			}

			mouseclicks.push( mouseclick );

			lastMouseup = now;

			// If the mouse has been clicked, don't record this time as an interval between keypresses.
			lastKeydown = null;
			lastKeyup = null;
			keydowns = {};
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'mousemove', function ( e ) {
			if ( mousemoveTimer ) {
				clearTimeout( mousemoveTimer );
				mousemoveTimer = null;
			}
			else {
				mousemoveStart = ( new Date() ).getTime();
				lastMousemoveX = e.offsetX;
				lastMousemoveY = e.offsetY;
			}

			mousemoveTimer = setTimeout( function ( theEvent, originalMousemoveStart ) {
				var now = ( new Date() ).getTime() - 500; // To account for the timer delay.

				var mousemove = [];
				mousemove.push( now - originalMousemoveStart );
				mousemove.push(
					Math.round(
						Math.sqrt(
							Math.pow( theEvent.offsetX - lastMousemoveX, 2 ) +
							Math.pow( theEvent.offsetY - lastMousemoveY, 2 )
						)
					)
				);

				if ( mousemove[1] > 0 ) {
					// If there was no measurable distance, then it wasn't really a move.
					mousemoves.push( mousemove );
				}

				mousemoveStart = null;
				mousemoveTimer = null;
			}, 500, e, mousemoveStart );
		}, supportsPassive ? { passive: true } : false  );

		document.addEventListener( 'touchmove', function ( e ) {
			if ( touchmoveCountTimer ) {
				clearTimeout( touchmoveCountTimer );
			}

			touchmoveCountTimer = setTimeout( function () {
				touchmoveCount++;
			}, 500 );
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'touchstart', function ( e ) {
			lastTouchStart = ( new Date() ).getTime();
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'touchend', function ( e ) {
			if ( ! lastTouchStart ) {
				// If the touchstart happened before this script was loaded, but the touchend happened after...
				return;
			}

			var now = ( new Date() ).getTime();

			var touchEvent = [];
			touchEvent.push( now - lastTouchStart );

			if ( lastTouchEnd ) {
				touchEvent.push( lastTouchStart - lastTouchEnd );
			}

			touchEvents.push( touchEvent );

			lastTouchEnd = now;

			// Don't record this time as an interval between keypresses.
			lastKeydown = null;
			lastKeyup = null;
			keydowns = {};
		}, supportsPassive ? { passive: true } : false );

		document.addEventListener( 'scroll', function ( e ) {
			if ( scrollCountTimer ) {
				clearTimeout( scrollCountTimer );
			}

			scrollCountTimer = setTimeout( function () {
				scrollCount++;
			}, 500 );
		}, supportsPassive ? { passive: true } : false );
	}

	/**
	 * For the timestamp data that is collected, don't send more than `limit` data points in the request.
	 * Choose a random slice and send those.
	 */
	function prepare_timestamp_array_for_request( a, limit ) {
		if ( ! limit ) {
			limit = 100;
		}

		var rv = '';

		if ( a.length > 0 ) {
			var random_starting_point = Math.max( 0, Math.floor( Math.random() * a.length - limit ) );

			for ( var i = 0; i < limit && i < a.length; i++ ) {
				rv += a[ random_starting_point + i ][0];

				if ( a[ random_starting_point + i ].length >= 2 ) {
					rv += "," + a[ random_starting_point + i ][1];
				}

				rv += ";";
			}
		}

		return rv;
	}

	if ( document.readyState !== 'loading' ) {
		init();
	} else {
		document.addEventListener( 'DOMContentLoaded', init );
	}
})();;
!function(){var e=document.currentScript;function t(t){var n=document.createElement("script"),o=e||document.getElementsByTagName("script")[0];n.setAttribute("async",!0),n.setAttribute("src",t),o.parentNode.insertBefore(n,o)}function n(e,t){return Element.prototype.matches?e.matches(t):Element.prototype.msMatchesSelector?e.msMatchesSelector(t):void 0}function o(e,t){if(e.closest)return e.closest(t);var o=e;do{if(n(o,t))return o;o=o.parentElement||o.parentNode}while(null!==o&&1===o.nodeType);return null}function i(e,t){for(var n=0;n<e.length;n++)t(e[n],n,e)}var r=".sharing-hidden .inner",s="data-sharing-more-button-id";function a(e){this.button=e,this.pane=o(e,"div").querySelector(r),this.openedBy=null,this.recentlyOpenedByHover=!1,a.instances.push(this),this.pane.setAttribute(s,a.instances.length-1),this.attachHandlers()}if(a.instances=[],a.hoverOpenDelay=200,a.recentOpenDelay=400,a.hoverCloseDelay=300,a.instantiateOrReuse=function(e){var t=o(e,"div").querySelector(r),n=t&&t.getAttribute(s),i=a.instances[n];return i||new a(e)},a.getButtonInstanceFromPane=function(e){var t=e&&e.getAttribute(s);return a.instances[t]},a.closeAll=function(){for(var e=0;e<a.instances.length;e++)a.instances[e].close()},a.prototype.open=function(){var e,t,n=[0,0];function o(e){var t=e.getBoundingClientRect();return[t.left+(window.scrollX||window.pageXOffset||0),t.top+(window.scrollY||window.pageYOffset||0)]}function i(e,t){return parseInt(getComputedStyle(e).getPropertyValue(t)||0)}for(e=o(this.button),t=this.button.offsetParent||document.documentElement;t&&(t===document.body||t===document.documentElement)&&"static"===getComputedStyle(t).getPropertyValue("position");)t=t.parentNode;t&&t!==this.button&&1===t.nodeType&&(n=[(n=o(t))[0]+i(t,"border-left-width"),n[1]+i(t,"border-top-width")]);var r,s=e[0]-n[0]-i(this.button,"margin-left"),a=e[1]-n[1]-i(this.button,"margin-top");this.pane.style.left=s+"px",this.pane.style.top=a+this.button.offsetHeight+3+"px",(r=this.pane)&&r.style.removeProperty("display")},a.prototype.close=function(){var e;(e=this.pane)&&(e.style.display="none"),this.openedBy=null},a.prototype.toggle=function(){var e;(e=this.pane)&&"none"!==e.style.display?this.close():this.open()},a.prototype.nonHoverOpen=function(){clearTimeout(this.openTimer),clearTimeout(this.closeTimer),this.recentlyOpenedByHover?(this.recentlyOpenedByHover=!1,clearTimeout(this.hoverOpenTimer),this.open()):this.toggle()},a.prototype.resetCloseTimer=function(){clearTimeout(this.closeTimer),this.closeTimer=setTimeout(this.close.bind(this),a.hoverCloseDelay)},a.prototype.attachHandlers=function(){this.buttonClick=function(e){e.preventDefault(),e.stopPropagation(),this.openedBy="click",this.nonHoverOpen()}.bind(this),this.buttonKeydown=function(e){13!==e.keyCode&&32!==e.keyCode||(e.preventDefault(),e.stopPropagation(),this.openedBy="keydown",this.nonHoverOpen())}.bind(this),this.buttonEnter=function(){this.openedBy||(this.openTimer=setTimeout(function(){this.open(),this.openedBy="hover",this.recentlyOpenedByHover=!0,this.hoverOpenTimer=setTimeout(function(){this.recentlyOpenedByHover=!1}.bind(this),a.recentOpenDelay)}.bind(this),a.hoverOpenDelay)),clearTimeout(this.closeTimer)}.bind(this),this.buttonLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer(),clearTimeout(this.openTimer)}.bind(this),this.paneEnter=function(){clearTimeout(this.closeTimer)}.bind(this),this.paneLeave=function(){"hover"===this.openedBy&&this.resetCloseTimer()}.bind(this),this.documentClick=function(){this.close()}.bind(this),this.button.addEventListener("click",this.buttonClick),this.button.addEventListener("keydown",this.buttonKeydown),document.addEventListener("click",this.documentClick),void 0===document.ontouchstart&&(this.button.addEventListener("mouseenter",this.buttonEnter),this.button.addEventListener("mouseleave",this.buttonLeave),this.pane.addEventListener("mouseenter",this.paneEnter),this.pane.addEventListener("mouseleave",this.paneLeave))},window.sharing_js_options&&window.sharing_js_options.counts){var c={done_urls:[],get_counts:function(){var e,n,o,i,r;if("undefined"!=typeof WPCOM_sharing_counts)for(e in WPCOM_sharing_counts)if(o=WPCOM_sharing_counts[e],void 0===c.done_urls[o]){for(i in n={pinterest:[window.location.protocol+"//api.pinterest.com/v1/urls/count.json?callback=WPCOMSharing.update_pinterest_count&url="+encodeURIComponent(e)]})if(document.querySelector("a[data-shared=sharing-"+i+"-"+o+"]")){for(;r=n[i].pop();)t(r);window.sharing_js_options.is_stats_active&&c.bump_sharing_count_stat(i)}c.done_urls[o]=!0}},update_pinterest_count:function(e){void 0!==e.count&&1*e.count>0&&c.inject_share_count("sharing-pinterest-"+WPCOM_sharing_counts[e.url],e.count)},inject_share_count:function(e,t){i(document.querySelectorAll("a[data-shared="+e+"] > span"),(function(e){var n,o=e.querySelector(".share-count");(n=o)&&n.parentNode&&n.parentNode.removeChild(n);var i=document.createElement("span");i.className="share-count",i.textContent=c.format_count(t),e.appendChild(i)}))},format_count:function(e){return e<1e3?e:e>=1e3&&e<1e4?String(e).substring(0,1)+"K+":"10K+"},bump_sharing_count_stat:function(e){(new Image).src=document.location.protocol+"//pixel.wp.com/g.gif?v=wpcom-no-pv&x_sharing-count-request="+e+"&r="+Math.random()}};window.WPCOMSharing=c}function u(e,t){e.setAttribute("jetpack-share-click-count",t)}function d(e){var t=e.getAttribute("jetpack-share-click-count");return null===t?0:parseInt(t,10)}function l(e,t){var n,o=new XMLHttpRequest;o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.setRequestHeader("x-requested-with","XMLHttpRequest"),o.send((n=t,(encodeURIComponent("email-share-nonce")+"="+encodeURIComponent(n)).replace(/%20/g,"+")))}function h(){p()}function p(){window.WPCOMSharing&&window.WPCOMSharing.get_counts(),i(document.querySelectorAll(".sharedaddy a"),(function(e){var t=e.getAttribute("href");t&&-1!==t.indexOf("share=")&&-1===t.indexOf("&nb=1")&&e.setAttribute("href",t+"&nb=1")})),i(document.querySelectorAll(".sharedaddy a.sharing-anchor"),(function(e){a.instantiateOrReuse(e)})),void 0!==document.ontouchstart&&document.body.classList.add("jp-sharing-input-touch"),i(document.querySelectorAll(".sharedaddy ul"),(function(e){"true"!==e.getAttribute("data-sharing-events-added")&&(e.setAttribute("data-sharing-events-added","true"),i(e.querySelectorAll("a.share-print"),(function(e){e.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();var n=e.getAttribute("href")||"",i=function(){if(-1===n.indexOf("#print")){var e=(new Date).getTime();t=e,o=n,(i=document.createElement("iframe")).setAttribute("style","position:fixed; top:100; left:100; height:1px; width:1px; border:none;"),i.setAttribute("id","printFrame-"+t),i.setAttribute("name",i.getAttribute("id")),i.setAttribute("src",o),i.setAttribute("onload",'frames["printFrame-'+t+'"].focus();frames["printFrame-'+t+'"].print();'),document.body.appendChild(i)}else window.print();var t,o,i},s=o(e,r);if(s){var c=a.getButtonInstanceFromPane(s);c&&(c.close(),i())}else i()}))})),i(e.querySelectorAll("a.share-press-this"),(function(e){e.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();var n="";if(window.getSelection?n=window.getSelection():document.getSelection?n=document.getSelection():document.selection&&(n=document.selection.createRange().text),n){var o=e.getAttribute("href");e.setAttribute("href",o+"&sel="+encodeURI(n))}window.open(e.getAttribute("href"),"t","toolbar=0,resizable=1,scrollbars=1,status=1,width=720,height=570")||(document.location.href=e.getAttribute("href"))}))})),i(e.querySelectorAll("a.share-email"),(function(t){u(t,0);var n,o,r=t.getAttribute("data-email-share-nonce"),s=t.getAttribute("data-email-share-track-url");r&&s&&(n=s,o=window.location.protocol+"//"+window.location.hostname+"/",0===String(n).indexOf(o))&&t.addEventListener("click",(function(){var n;u(n=t,d(n)+1),d(t)>2&&function(e,t){var n=t.parentElement;if(n.classList.contains("sd-content")){i(n.querySelectorAll(".share-email-error"),(function(e){e.parentElement.removeChild(e)}));var o=document.createElement("div");o.className="share-email-error";var r=document.createElement("h6");r.className="share-email-error-title",r.innerText=e.getAttribute("data-email-share-error-title"),o.appendChild(r);var s=document.createElement("p");s.className="share-email-error-text",s.innerText=e.getAttribute("data-email-share-error-text"),o.appendChild(s),n.appendChild(o)}}(t,e),l(s,r)}))})))})),i(document.querySelectorAll("li.share-email, li.share-custom a.sharing-anchor"),(function(e){e.classList.add("share-service-visible")}))}"loading"!==document.readyState?h():document.addEventListener("DOMContentLoaded",h),document.body.addEventListener("is.post-load",p)}();