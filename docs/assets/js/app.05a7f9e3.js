(function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],p=0,d=[];p<s.length;p++)a=s[p],i[a]&&d.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,s=1;s<o.length;s++){var l=o[s];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},i={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=o("bb71");o("da64");n["a"].use(i["a"],{iconfont:"md"});var r=o("e11e"),a=o.n(r);o("6cc5");delete a.a.Icon.Default.prototype._getIconUrl,a.a.Icon.Default.mergeOptions({iconRetinaUrl:o("584d"),iconUrl:o("6397"),shadowUrl:o("e2b9")});var s=a.a,l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-content",{style:{height:e.content.calculatedHeight+"px"}},[o("snackbar",{model:{value:e.isSnackbarShown,callback:function(t){e.isSnackbarShown=t},expression:"isSnackbarShown"}}),o("topbar",{attrs:{"extension-height":e.topbarExtension.height}}),o("map-form")],1)],1)},c=[],u=(o("a481"),o("28a5"),o("ac6a"),o("d225")),p=o("b0b4"),d=function(){function e(){Object(u["a"])(this,e)}return Object(p["a"])(e,null,[{key:"get",value:function(e){if(0===document.cookie.length)return null;var t=document.cookie.indexOf("".concat(e,"="));if(-1===t)return null;t=t+e.length+1;var o=document.cookie.indexOf(";",t);return-1==o&&(o=document.cookie.length),decodeURIComponent(document.cookie.substring(t,o))}},{key:"set",value:function(e,t,o){if(o>0){var n=new Date;n.setTime(n.getTime()+3600*o*1e3);var i=n.toUTCString();document.cookie=e+"=".concat(encodeURIComponent(t),"; expires=").concat(i,"; path=/")}else document.cookie=e+"=".concat(encodeURIComponent(t),"; path=/")}},{key:"remove",value:function(e){e&&(document.cookie=e+"=''; expires=".concat(new Date(1).toUTCString()))}},{key:"getAll",value:function(){if(0===document.cookie.length)return null;var e={};return document.cookie.split(";").forEach(function(t){var o=t.split("=");e[(o[0]+"").trim()]=decodeURIComponent(o[1])}),e}},{key:"check",value:function(e){return e=this.get(e),!(!e||""===e)}}]),e}(),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-snackbar",{attrs:{color:e.snackbar.color,timeout:e.snackbar.timeout,vertical:"",top:"",left:"","multi-line":"","auto-height":""},model:{value:e.isShown,callback:function(t){e.isShown=t},expression:"isShown"}},[e._v(e._s(e.snackbar.message)+"\n\n    "),o("v-btn",{attrs:{ripple:!1,dark:"",flat:""},on:{click:function(t){e.isShown=!1}}},[e._v(e._s(e.snackbar.button.message))]),o("v-progress-linear",{attrs:{active:e.progress.active,value:e.progress.value,color:e.progress.color}})],1)},m=[],f={props:{value:{type:Boolean,default:!1}},data:function(){return{snackbar:{color:"info",message:"You have been redirected from https to http due to Mixed Content issues",multi:!0,timeout:0,button:{message:"Close"}},progress:{timeout:6e3,active:!0,value:0,color:"green",interval:0}}},watch:{value:function(){this.value?this.doProgressBar():clearInterval(this.progress.interval)}},computed:{isShown:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{doProgressBar:function(){var e=this;this.progress.value=99;var t=100,o=this.progress.timeout,n=o/t,i=100/n;this.progress.interval=setInterval(function(){e.progress.value<=0&&(e.isShown=!1),e.progress.value-=i},t)}}},v=f,g=o("2877"),b=o("6544"),y=o.n(b),k=o("8336"),_=o("8e36"),w=o("2db4"),x=Object(g["a"])(v,h,m,!1,null,null,null),S=x.exports;y()(x,{VBtn:k["a"],VProgressLinear:_["a"],VSnackbar:w["a"]});var C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-toolbar",{attrs:{color:"primary",dark:"",fixed:"",flat:"",app:"",prominent:""}},[o("v-spacer"),o("a",{staticStyle:{"margin-top":"5px"},attrs:{href:e.logo.url,rel:e.logo.rel,target:"_blank"}},[o("img",{style:e.logo.style,attrs:{src:e.logo.image,alt:e.logo.alt}})]),o("v-spacer")],1),o("v-toolbar",{ref:"welcome_message",attrs:{color:"primary",dark:"",flat:"",height:e.extensionHeight,id:"welcome_message"}},[o("v-container",{attrs:{"fill-height":""}},[o("v-layout",{attrs:{"text-xs-center":"",row:""}},[o("v-flex",[o("span",{staticStyle:{"margin-right":"30%"}},[e._v("\n                        "+e._s(e.message.header)+"\n                    ")]),o("v-flex",{staticClass:"display-3 font-weight-light font-italic"},[e._v("\n                        "+e._s(e.message.subHeader)+"\n                    ")]),o("span",{staticClass:"caption",staticStyle:{"margin-left":"30%"}},[e._v("\n                        "+e._s(e.message.author)+"\n                    ")])],1)],1)],1)],1)],1)},I=[],P=(o("c5f6"),{props:{extensionHeight:{type:Number,default:64}},computed:{},data:function(){return{message:{header:"Welcome to IPVue!",subHeader:"MAP PUBLIC IP ADDRESSES",author:"Made by Matthew Oestreich"},logo:{url:"https://github.com/oze4",image:"./assets/img/ostrike_logo.png",rel:"noopener noreferrer",alt:"matt_oestreich_github",style:"width:56px; height:52px;"}}}}),V=P,T=(o("ff78"),o("a523")),j=o("0e8f"),O=o("a722"),M=o("9910"),q=o("71d9"),R=Object(g["a"])(V,C,I,!1,null,"2f337c53",null),z=R.exports;y()(R,{VContainer:T["a"],VFlex:j["a"],VLayout:O["a"],VSpacer:M["a"],VToolbar:q["a"]});var E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-container",[o("v-layout",{attrs:{"justify-center":"",wrap:""}},[o("v-flex",{attrs:{xs12:"",md10:""}},[o("v-card",{staticClass:"elevation-10"},[o("v-form",{ref:"form",model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[o("v-container",[o("v-layout",{attrs:{"justify-center":"",wrap:""}},[o("v-flex",{attrs:{xs12:"",md4:""}},[o("provider-select",{on:{cleared:e.resetForm},model:{value:e.selectedProvider,callback:function(t){e.selectedProvider=t},expression:"selectedProvider"}})],1),e.hostIpShow?o("v-flex",{attrs:{xs12:"",md4:""}},[o("v-text-field",{ref:"host_ip_field",attrs:{label:"Hostname or IP","hide-details":"",clearable:"",required:"",rules:e.rules.requiredFieldWithToggle,disabled:e.toggleChecked},model:{value:e.map.options.host,callback:function(t){e.$set(e.map.options,"host",t)},expression:"map.options.host"}}),o("toggle-current-ip",{model:{value:e.toggleChecked,callback:function(t){e.toggleChecked=t},expression:"toggleChecked"}})],1):e._e(),e.apiKeyShow?o("v-flex",{attrs:{xs12:"",md4:""}},[o("v-text-field",{attrs:{label:"API Key","hide-details":"",clearable:"",required:"",rules:e.rules.requiredField},model:{value:e.map.options.apiKey,callback:function(t){e.$set(e.map.options,"apiKey",t)},expression:"map.options.apiKey"}})],1):e._e()],1)],1)],1)],1),o("v-container",{staticClass:"text-xs-center"},[o("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{color:"green",disabled:!e.formIsValid},on:{click:function(t){e.showMap=!0}}},[e._v("Generate Map")]),o("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{color:"red",disabled:!e.map.show},on:{click:function(t){e.showMap=!1}}},[e._v("Clear Map")])],1)],1)],1)],1),e.map.show?o("generate-map",{key:e.map.key,attrs:{"map-options":e.map.options}}):e._e()],1)},$=[],K=o("0a0d"),H=o.n(K),F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-select",{attrs:{label:e.dropdown.label,items:e.apiProviders,"item-text":"name",clearable:"","return-object":"","persistent-hint":"",hint:e.dropdown.hint,required:"",rules:e.rules.requiredField},on:{"click:clear":e.cleared},scopedSlots:e._u([{key:"selection",fn:function(t){return[e._v("\n        "+e._s(t.item.name)+"\n        "),t.item.isKeyRequired?o("span",{staticClass:"mdi mdi-key red--text"}):e._e()]}},{key:"item",fn:function(t){return[e._v("\n        "+e._s(t.item.name)+"\n        "),t.item.isKeyRequired?o("span",{staticClass:"mdi mdi-key red--text"}):e._e()]}}]),model:{value:e.selectedProvider,callback:function(t){e.selectedProvider=t},expression:"selectedProvider"}})},U=[],A={props:{value:{type:[String,Object]}},data:function(){return{apiProviders:[{name:"http://ip-api.com",isKeyRequired:!1},{name:"http://ipstack.com",isKeyRequired:!0}],dropdown:{label:"Select API Provider",hint:"<small><i class='mdi mdi-key red--text'></i> means API key is required</small>"},rules:{requiredField:[function(e){return!!e||"This field is required!"}]}}},computed:{selectedProvider:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{cleared:function(){this.$emit("cleared",!0)}}},L=A,D=o("b56d"),B=Object(g["a"])(L,F,U,!1,null,null,null),W=B.exports;y()(B,{VSelect:D["a"]});var N=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-switch",{ref:"toggler",attrs:{height:e.height,label:e.label},on:{mouseup:function(e){e.stopPropagation()},mousedown:function(e){e.stopPropagation()}},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})},Z=[],G={props:{value:{type:Boolean,default:!1}},data:function(){return{label:"Use Current IP",height:4,fontSize:11}},computed:{state:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},setToggleLabelTextSize:function(){return this.$refs.toggler.$el.querySelector("label").style.fontSize=this.fontSize+"px",null}},mounted:function(){this.setToggleLabelTextSize},methods:{}},J=G,Y=o("b73d"),Q=Object(g["a"])(J,N,Z,!1,null,null,null),X=Q.exports;y()(Q,{VSwitch:Y["a"]});var ee=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-layout",{attrs:{row:"",wrap:"","justify-center":"","mb-5":""}},[o("v-flex",{attrs:{xs10:"",sm10:"",md10:"",lg10:""}},[o("v-card",{ref:"map_container",attrs:{id:"map-container"}},[o("v-card-title",{staticClass:"justify-center"},[o("h3",[e._v("Click Marker For More Info")])]),o("div",{ref:"map_card",style:{height:e.mapHeight+"px"},attrs:{id:"map-card"}})],1)],1)],1)],1)},te=[],oe=(o("7f7f"),o("f499")),ne=o.n(oe),ie=o("bc3a"),re=o.n(ie),ae={props:{mapOptions:{type:Object}},computed:{jsonResponse:function(){return ne()(this.response,void 0,2)},mapHeight:function(){return this.resizeMap(),this.$vuetify.breakpoint.height-125}},data:function(){return{response:null,map:null,mapAttribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',mapTileLayer:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",mapDivId:"map-card"}},mounted:function(){this.initMap(this.mapOptions)},methods:{resizeMap:function(){null!==this.map&&setTimeout(function(e){e.map.invalidateSize()},200,this)},clearMap:function(){null!==this.map&&this.map.remove()},handleAxiosError:function(e,t){alert("Unable to gather map data from ".concat(e,"! We encountered the following error: ").concat(t))},initMap:function(e){var t=this;switch(e.provider.name){case"http://ip-api.com":if(!1===e.provider.isKeyRequired){var o=void 0===e.host?"":"/".concat(e.host),n="http://ip-api.com/json".concat(String(o));re.a.get(n).then(function(e){t.buildMap(e,e.data.query,e.data.lat,e.data.lon)}).catch(function(e){t.handleAxiosError(n,e)})}break;case"http://ipstack.com":if(!0===e.provider.isKeyRequired){var i=void 0===e.host?"check":e.host,r="http://api.ipstack.com/".concat(String(i),"?access_key=").concat(String(e.apiKey));re.a.get(r).then(function(e){t.buildMap(e,e.data.ip,e.data.latitude,e.data.longitude)}).catch(function(e){t.handleAxiosError(r,e)})}break}},buildMap:function(e,t,o,n){this.clearMap(),this.response=e.data,this.map=s.map(this.mapDivId,{zoomControl:!1}).setView([o,n],13),this.map.scrollWheelZoom.disable(),s.control.zoom({position:"bottomright"}).addTo(this.map),s.tileLayer(this.mapTileLayer,{attribution:this.mapAttribution,maxZoom:14,minZoom:10}).addTo(this.map),s.marker([o,n],{title:"IP: ".concat(t," | lat: ").concat(o," | lon: ").concat(n),riseOnHover:!0}).bindPopup("<h3>Host Information:</h3><v-card><pre id='json-pre'>".concat(this.jsonResponse,"</pre></v-card>"),{maxWidth:200,maxHeight:200,keepInView:!0}).addTo(this.map),setTimeout(function(e){e.map.invalidateSize()},200,this)}}},se=ae,le=(o("ee97"),o("b0af")),ce=o("12b2"),ue=Object(g["a"])(se,ee,te,!1,null,"1aef403c",null),pe=ue.exports;y()(ue,{VCard:le["a"],VCardTitle:ce["a"],VFlex:j["a"],VLayout:O["a"]});var de={components:{ToggleCurrentIp:X,ProviderSelect:W,GenerateMap:pe},data:function(){var e=this;return{formIsValid:!1,hostIpShow:!1,apiKeyShow:!1,toggleIsChecked:!1,rules:{requiredField:[function(e){return!!e||"This field is required!"}],requiredFieldWithToggle:[function(t){return!!e.toggleChecked||(!!t||"This field is required!")}]},map:{show:!1,key:H()(),options:{provider:null,host:null,apiKey:null}}}},computed:{selectedProvider:{get:function(){return this.map.options.provider},set:function(e){""!==e&&void 0!==e?(this.map.options.provider=e,this.apiKeyShow=e.isKeyRequired,this.hostIpShow=!0):this.hostIpShow=this.apiKeyShow=!1}},toggleChecked:{get:function(){return this.toggleIsChecked},set:function(e){this.toggleIsChecked=e,e&&(""!==this.map.options.host&&(this.map.options.host=""),this.$refs.host_ip_field.reset())}},showMap:{get:function(){return this.map.show},set:function(e){this.map.show=e,this.map.show&&e?this.map.key=H()():this.map.show=!1}}},methods:{resetForm:function(){this.map.options.host=this.map.options.apiKey="",this.$refs.form.reset()}}},he=de,me=o("4bd4"),fe=o("2677"),ve=o("269a"),ge=o.n(ve),be=o("3ccf"),ye=Object(g["a"])(he,E,$,!1,null,null,null),ke=ye.exports;y()(ye,{VBtn:k["a"],VCard:le["a"],VContainer:T["a"],VFlex:j["a"],VForm:me["a"],VLayout:O["a"],VTextField:fe["a"]}),ge()(ye,{Ripple:be["a"]});var _e={components:{Snackbar:S,Topbar:z,MapForm:ke},beforeCreate:function(){"https:"===location.protocol&&(d.set("____vipmapperredirection____","true",1),location.replace("http://"+location.hostname))},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},mounted:function(){setTimeout(function(e){"true"===d.get("____vipmapperredirection____")&&(e.isSnackbarShown=!0),d.remove("____vipmapperredirection____")},300,this)},destroyed:function(){window.removeEventListener("resize",this.handleResize)},data:function(){return{isSnackbarShown:!1,content:{calculatedHeight:0},topbarExtension:{height:300}}},methods:{handleResize:function(){this.content.calculatedHeight=window.innerHeight>this.topbarExtension.height?window.innerHeight+this.topbarExtension.height:window.innerHeight}}},we=_e,xe=o("7496"),Se=o("549c"),Ce=Object(g["a"])(we,l,c,!1,null,null,null),Ie=Ce.exports;y()(Ce,{VApp:xe["a"],VContent:Se["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(Ie)}}).$mount("#root")},7113:function(e,t,o){},"993b":function(e,t,o){},ee97:function(e,t,o){"use strict";var n=o("993b"),i=o.n(n);i.a},ff78:function(e,t,o){"use strict";var n=o("7113"),i=o.n(n);i.a}});