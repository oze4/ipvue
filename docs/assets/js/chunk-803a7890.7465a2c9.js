(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-803a7890"],{1772:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-switch",{ref:"toggler",attrs:{height:t.height,label:t.label},on:{mouseup:function(t){t.stopPropagation()},mousedown:function(t){t.stopPropagation()}},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})},s=[],o={props:{value:{type:Boolean,default:!1}},data:function(){return{label:"Use Current IP",height:4,fontSize:11}},computed:{state:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},setToggleLabelTextSize:function(){return this.$refs.toggler.$el.querySelector("label").style.fontSize=this.fontSize+"px",null}},mounted:function(){this.setToggleLabelTextSize},methods:{}},a=o,r=n("2877"),u=n("6544"),l=n.n(u),c=(n("94a7"),n("2e29"),n("5368")),h=n("80d2"),p=function(t){var e=t.touchstartX,n=t.touchendX,i=t.touchstartY,s=t.touchendY,o=.5,a=16;t.offsetX=n-e,t.offsetY=s-i,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&n<e-a&&t.left(t),t.right&&n>e+a&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&s<i-a&&t.up(t),t.down&&s>i+a&&t.down(t))};function d(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function f(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),p(e)}function v(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function g(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return d(t,e)},touchend:function(t){return f(t,e)},touchmove:function(t){return v(t,e)}}}function m(t,e,n){var i=e.value,s=i.parent?t.parentElement:t,o=i.options||{passive:!0};if(s){var a=g(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[n.context._uid]=a,Object(h["o"])(a).forEach(function(t){s.addEventListener(t,a[t],o)})}}function b(t,e,n){var i=e.value.parent?t.parentElement:t;if(i&&i._touchHandlers){var s=i._touchHandlers[n.context._uid];Object(h["o"])(s).forEach(function(t){i.removeEventListener(t,s[t])}),delete i._touchHandlers[n.context._uid]}}var w={inserted:m,unbind:b},C=n("0789"),y=n("490a"),V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},S={name:"v-switch",directives:{Touch:w},mixins:[c["a"]],props:{loading:{type:[Boolean,String],default:!1}},computed:{classes:function(){return{"v-input--selection-controls v-input--switch":!0}},switchData:function(){return this.setTextColor(this.loading?void 0:this.computedColor,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",this.$attrs),this.genRipple(this.setTextColor(this.computedColor,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",V({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",V({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(C["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(y["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===h["n"].left&&this.isActive||t.keyCode===h["n"].right&&!this.isActive)&&this.onChange()}}},_=Object(r["a"])(a,i,s,!1,null,null,null);e["default"]=_.exports;l()(_,{VSwitch:S})},"2e29":function(t,e,n){},5368:function(t,e,n){"use strict";var i=n("c37a"),s=n("3ccf"),o=n("2b0e"),a=o["a"].extend({name:"rippleable",directives:{Ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}}),r=n("5e28");e["a"]=i["a"].extend({name:"selectable",mixins:[a,r["a"]],model:{prop:"inputValue",event:"change"},props:{color:{type:String,default:"accent"},id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(t){return{lazyValue:t.inputValue}},computed:{computedColor:function(){return this.isActive?this.color:this.validationState},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some(function(n){return t.valueComparator(n,e)}):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive}},watch:{inputValue:function(t){this.lazyValue=t}},methods:{genLabel:function(){if(!this.hasLabel)return null;var t=i["a"].options.methods.genLabel.call(this);return t.data.on={click:this.onChange},t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-label":this.label,"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.id,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter(function(n){return!t.valueComparator(n,e)}),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},"5e28":function(t,e,n){"use strict";var i=n("2b0e"),s=n("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["f"]}}})},"94a7":function(t,e,n){}}]);