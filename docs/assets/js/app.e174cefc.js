(function(e){function t(t){for(var o,r,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)r=c[l],i[r]&&f.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function c(e){return s.p+"assets/js/"+({}[e]||e)+"."+{"chunk-e43a9280":"ebe78f04","chunk-74983c22":"01df8328","chunk-f7bbe3fe":"7120db63","chunk-4feae546":"ea5e99e5","chunk-5604a83c":"cd4a6c24","chunk-803a7890":"1a564c11"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-e43a9280":1,"chunk-74983c22":1,"chunk-f7bbe3fe":1,"chunk-4feae546":1,"chunk-5604a83c":1,"chunk-803a7890":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="assets/css/"+({}[e]||e)+"."+{"chunk-e43a9280":"daa8cfe1","chunk-74983c22":"1009418a","chunk-f7bbe3fe":"a283228c","chunk-4feae546":"36cdfe4b","chunk-5604a83c":"821a9c1e","chunk-803a7890":"cddd8466"}[e]+".css",i=s.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===o||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.request=o,delete r[e],d.parentNode.removeChild(d),n(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[e]=0}));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(function(t,n){o=i[e]=[t,n]});t.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("bb71");n("da64");o["a"].use(r["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{style:{height:e.content.calculatedHeight+"px"}},[n("snackbar",{attrs:{message:"You have been redirected from https to http due to Mixed Content issues"},model:{value:e.isSnackbarShown,callback:function(t){e.isSnackbarShown=t},expression:"isSnackbarShown"}}),n("topbar",{attrs:{"extension-height":e.topbarExtension.height}}),n("map-form")],1)],1)},a=[];n("a481");function c(e){if(0===document.cookie.length)return null;var t=document.cookie.indexOf("".concat(e,"="));if(-1===t)return null;t=t+e.length+1;var n=document.cookie.indexOf(";",t);return-1==n&&(n=document.cookie.length),decodeURIComponent(document.cookie.substring(t,n))}function s(e,t,n){if(n>0){var o=new Date;o.setTime(o.getTime()+3600*n*1e3);var r=o.toUTCString();document.cookie=e+"=".concat(encodeURIComponent(t),"; expires=").concat(r,"; path=/")}else document.cookie=e+"=".concat(encodeURIComponent(t),"; path=/")}function u(e){e&&(document.cookie=e+"=''; expires=".concat(new Date(1).toUTCString()))}var l={components:{Topbar:function(){return Promise.all([n.e("chunk-e43a9280"),n.e("chunk-f7bbe3fe")]).then(n.bind(null,"ddc0"))},MapForm:function(){return Promise.all([n.e("chunk-e43a9280"),n.e("chunk-74983c22")]).then(n.bind(null,"efdb"))}},beforeCreate:function(){},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},mounted:function(){if("https:"===location.protocol)return s("____vipmapperredirection____","true",1),location.replace("http://"+location.hostname),!1;setTimeout(function(e){"true"===c("____vipmapperredirection____")&&(e.isSnackbarShown=!0),u("____vipmapperredirection____")},300,this)},destroyed:function(){window.removeEventListener("resize",this.handleResize)},data:function(){return{isSnackbarShown:!1,content:{calculatedHeight:0},topbarExtension:{height:300}}},methods:{handleResize:function(){this.content.calculatedHeight=window.innerHeight>this.topbarExtension.height?window.innerHeight+this.topbarExtension.height:window.innerHeight}}},f=l,d=n("2877"),h=n("6544"),p=n.n(h),g=n("7496"),v=n("549c"),m=Object(d["a"])(f,i,a,!1,null,null,null),b=m.exports;p()(m,{VApp:g["a"],VContent:v["a"]});var k=n("9483");Object(k["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{color:e.color,timeout:e.timeout,vertical:"",top:"",left:"","multi-line":"","auto-height":""},model:{value:e.isShown,callback:function(t){e.isShown=t},expression:"isShown"}},[e._v(e._s(e.message)+"\n    "),n("v-btn",{attrs:{ripple:!1,dark:"",flat:""},on:{click:function(t){e.isShown=!1}}},[e._v(e._s(e.buttonMessage))]),e.timeout>0?n("v-progress-linear",{attrs:{active:e.progress.active,value:e.progress.value,color:e.progress.color}}):e._e()],1)},_=[],y=(n("c5f6"),{name:"snackbar",props:{value:{type:Boolean,default:!1},message:{type:String,required:!0},color:{type:String,required:!1,default:"info"},timeout:{type:Number,required:!1,default:6e3},buttonMessage:{type:String,required:!1,default:"Close"}},data:function(){return{progress:{active:!0,value:0,color:"green",interval:0}}},watch:{value:function(){this.value?this.doProgressBar():clearInterval(this.progress.interval)}},computed:{isShown:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{doProgressBar:function(){var e=this;if(this.timeout>0){this.progress.value=100;var t=100,n=this.timeout,o=n/t,r=100/o;this.progress.interval=setInterval(function(){e.progress.value<=0&&(e.isShown=!1),e.progress.value-=r},t)}}}}),S=y,x=n("8336"),E=n("8e36"),j=n("2db4"),C=Object(d["a"])(S,w,_,!1,null,null,null),O=C.exports;p()(C,{VBtn:x["a"],VProgressLinear:E["a"],VSnackbar:j["a"]});var P=n("2f62");o["a"].use(P["a"]);var T=new P["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,o["a"].component("snackbar",O),new o["a"]({store:T,render:function(e){return e(b)}}).$mount("#root")}});