(()=>{var e={226:(e,t,s)=>{e.exports=s(687)},687:(e,t,s)=>{"use strict";s.d(t,{default:()=>l});const l=class{_getElements(e){return"object"==typeof e?[e]:document.querySelectorAll(e)}hide(e){this._hideElements(this._getElements(e))}_hideElements(e){var t,s=e.length;for(t=0;t<s;t++)this._hideElement(e[t])}_hideElement(e){this._styleElement(e,"display","none")}show(e,t){var s=this._getElements(e);t&&this._hideElements(s),this._showElements(s)}_showElements(e){var t,s=e.length;for(t=0;t<s;t++)this._showElement(e[t])}_showElement(e){this._styleElement(e,"display","block")}addStyle(e,t,s){this._styleElements(this._getElements(e),t,s)}_styleElements(e,t,s){var l,a=e.length;for(l=0;l<a;l++)this._styleElement(e[l],t,s)}_styleElement(e,t,s){e.style.setProperty(t,s)}toggleShow(e){var t,s=this._getElements(e),l=s.length;for(t=0;t<l;t++)"none"==s[t].style.display?this._styleElement(s[t],"display","block"):this._styleElement(s[t],"display","none")}addClass(e,t){this._addClassElements(this._getElements(e),t)}_addClassElements(e,t){var s,l=e.length;for(s=0;s<l;s++)this._addClassElement(e[s],t)}_addClassElement(e,t){var s,l,a;for(l=e.className.split(" "),a=t.split(" "),s=0;s<a.length;s++)-1==l.indexOf(a[s])&&(e.className+=" "+a[s])}removeClass(e,t){this._removeClassElements(this._getElements(e),t)}_removeClassElements(e,t){var s,l=e.length;for(s=0;s<l;s++)this._removeClassElement(e[s],t)}_removeClassElement(e,t){var s,l,a;for(l=e.className.split(" "),a=t.split(" "),s=0;s<a.length;s++)for(;l.indexOf(a[s])>-1;)l.splice(l.indexOf(a[s]),1);e.className=l.join(" ")}toggleClass(e,t,s){this._toggleClassElements(this._getElements(e),t,s)}_toggleClassElements(e,t,s){var l,a=e.length;for(l=0;l<a;l++)this._toggleClassElement(e[l],t,s)}_toggleClassElement(e,t,s){var l,a,n,r,i,o,d;if(a=s||"",n=(l=t||"").split(" "),r=a.split(" "),o=e.className.split(" "),0==r.length){for(d=!0,i=0;i<n.length;i++)-1==o.indexOf(n[i])&&(d=!1);d?this._removeClassElement(e,l):this._addClassElement(e,l)}else{for(d=!0,i=0;i<n.length;i++)-1==o.indexOf(n[i])&&(d=!1);d?(this._removeClassElement(e,l),this._addClassElement(e,a)):(this._removeClassElement(e,a),this._addClassElement(e,l))}}getBrowser(e){switch(e){case"chrome":return-1!=navigator.userAgent.indexOf("Chrome")&&!navigator.userAgent.match(/edg/i)||navigator.userAgent.indexOf("CriOS")>=0;case"safari":return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!(navigator.userAgent.indexOf("CriOS")>=0);case"firefox":return"undefined"!=typeof InstallTrigger;case"ie":return!!document.documentMode;case"edge":return!(!navigator.userAgent.match(/edg/i)&&-1==navigator.userAgent.indexOf("Edge/"));default:return null}}getTypeDevice(e){var t=navigator.userAgent||navigator.vendor||window.opera;switch(e){case"touch":return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;case"android":return/android/i.test(t);case"ios":return"boolean"==typeof navigator.standalone;default:return null}}}}},t={};function s(l){var a=t[l];if(void 0!==a)return a.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,s),n.exports}s.d=(e,t)=>{for(var l in t)s.o(t,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=s(226);new class{constructor(){this.init()}init(){new class{constructor(){this.jsutil=new e.default,this.selector=document.querySelectorAll('[data-ds-element="collapse"]'),this.events()}events(){this.selector.forEach((e=>{e.addEventListener("click",(t=>{alert("clicko"),t.preventDefault();var s={targetID:e.getAttribute("data-collapse-id"),targetClass:e.getAttribute("data-target-class"),objectId:e,objectClass:e.getAttribute("data-self-class")};this.collapseEvent(s)}))}))}collapseEvent(e){document.getElementById(e.targetID).classList.contains(e.targetClass)?this.jsutil.addStyle(document.getElementById(e.targetID),"height","0px"):(document.getElementById(e.targetID).scrollHeight,this.jsutil.addStyle(document.getElementById(e.targetID),"height","auto")),this.jsutil.toggleClass(document.getElementById(e.targetID),e.targetClass),this.jsutil.toggleClass(e.objectId,e.objectClass)}}}}})()})();