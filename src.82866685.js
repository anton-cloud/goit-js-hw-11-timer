parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");class t{constructor({selector:t,targetDate:e}){this.targetDate=new Date(e),this.days=document.querySelector(`${t} .value[data-value="days"]`),this.hours=document.querySelector(`${t} .value[data-value="hours"]`),this.minutes=document.querySelector(`${t} .value[data-value="mins"]`),this.seconds=document.querySelector(`${t} .value[data-value="secs"]`)}pad(t){return String(t).padStart(2,"0")}showTime(){setInterval(()=>{const t=(new Date).getTime(),e=this.targetDate-t;this.days.textContent=this.pad(Math.floor(e/864e5)),this.hours.textContent=this.pad(Math.floor(e%864e5/36e5)),this.minutes.textContent=this.pad(Math.floor(e%36e5/6e4)),this.seconds.textContent=this.pad(Math.floor(e%6e4/1e3))},1e3)}}const e=new t({selector:"#timer-1",targetDate:new Date("Sept 31, 2021")}),a=document.querySelector("button[data-action-start]");function s(){a.setAttribute("disabled",""),e.showTime()}a.addEventListener("click",s);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.82866685.js.map