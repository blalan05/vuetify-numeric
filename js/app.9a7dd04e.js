(function(t){function e(e){for(var i,r,o=e[0],s=e[1],u=e[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var s=a[o];0!==l[s]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},l={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vuetify-numeric/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=s;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var i=a("85ec"),l=a.n(i);l.a},"85ec":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var i,l,n,r,o,s=a("2b0e"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",{staticClass:"font-weight-light"},[t._v("VUETIFY-NUMERIC demo page")])]),a("v-spacer"),a("v-btn",{attrs:{icon:"",large:"",href:"https://github.com/kolesnikovav/vuetify-numeric"}},[t._v("GitHub")])],1),a("v-main",[a("v-container",[a("h1",[t._v("Vuetify-numeric demo page")]),a("v-row",[a("v-col",{attrs:{cols:"2"}},[a("v-text-field",{attrs:{xs3:"",label:"Label"},model:{value:t.label,callback:function(e){t.label=e},expression:"label"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-text-field",{attrs:{xs3:"",label:"Hint"},model:{value:t.hint,callback:function(e){t.hint=e},expression:"hint"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-text-field",{attrs:{xs3:"",label:"prefix"},model:{value:t.prefix,callback:function(e){t.prefix=e},expression:"prefix"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-select",{attrs:{xs3:"",items:t.locales,label:"current locale"},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-checkbox",{attrs:{xs3:"",label:"group digits"},model:{value:t.useGrouping,callback:function(e){t.useGrouping=e},expression:"useGrouping"}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-text-field",{attrs:{xs3:"",label:"precision"},model:{value:t.precision,callback:function(e){t.precision=e},expression:"precision"}})],1)],1),a("span",[t._v("Input style")]),a("v-card",{staticClass:"d-flex pa-2",attrs:{outlined:"",tile:""}},[a("v-row",[a("v-switch",{staticClass:"ma-2",attrs:{label:"fab"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"outlined"},model:{value:t.outlined,callback:function(e){t.outlined=e},expression:"outlined"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"rounded"},model:{value:t.rounded,callback:function(e){t.rounded=e},expression:"rounded"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"text"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"clearable"},model:{value:t.clearable,callback:function(e){t.clearable=e},expression:"clearable"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"readonly"},model:{value:t.readonly,callback:function(e){t.readonly=e},expression:"readonly"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"useCalculator"},model:{value:t.useCalculator,callback:function(e){t.useCalculator=e},expression:"useCalculator"}})],1)],1),a("span",[t._v("Custom calculator's style")]),a("v-card",{staticClass:"d-flex pa-2",attrs:{outlined:"",tile:""}},[a("v-row",[a("v-switch",{staticClass:"ma-2",attrs:{label:"fab"},model:{value:t.calcStyle.fab,callback:function(e){t.$set(t.calcStyle,"fab",e)},expression:"calcStyle.fab"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"tile"},model:{value:t.calcStyle.tile,callback:function(e){t.$set(t.calcStyle,"tile",e)},expression:"calcStyle.tile"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"outlined"},model:{value:t.calcStyle.outlined,callback:function(e){t.$set(t.calcStyle,"outlined",e)},expression:"calcStyle.outlined"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"rounded"},model:{value:t.calcStyle.rounded,callback:function(e){t.$set(t.calcStyle,"rounded",e)},expression:"calcStyle.rounded"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"text"},model:{value:t.calcStyle.text,callback:function(e){t.$set(t.calcStyle,"text",e)},expression:"calcStyle.text"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"Large"},model:{value:t.calcStyle.large,callback:function(e){t.$set(t.calcStyle,"large",e)},expression:"calcStyle.large"}}),a("v-switch",{staticClass:"ma-2",attrs:{label:"small"},model:{value:t.calcStyle.small,callback:function(e){t.$set(t.calcStyle,"small",e)},expression:"calcStyle.small"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{xs2:"",type:"number",label:"value external",outlined:"",clearable:"",hint:"Simulate external value change"},model:{value:t.value,callback:function(e){t.value=t._n(e)},expression:"value"}})],1),a("v-col",[a("v-text-field",{attrs:{xs2:"",type:"number",label:"Minimum",outlined:"",clearable:""},model:{value:t.min,callback:function(e){t.min=t._n(e)},expression:"min"}})],1),a("v-col",[a("v-text-field",{attrs:{xs2:"",type:"number",label:"Maximum",outlined:"",clearable:""},model:{value:t.max,callback:function(e){t.max=t._n(e)},expression:"max"}})],1)],1),a("p",[t._v("v-numeric component example")]),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"10",md:"6"}},[a("v-numeric",{attrs:{xs3:"",label:"calculator use custom style",hint:t.hint,placeholder:t.placeholder,locale:t.locale,prefix:t.prefix,useGrouping:t.useGrouping,precision:t.precision,fab:t.fab,outlined:t.outlined,rounded:t.rounded,text:t.text,clearable:t.clearable,readonly:t.readonly,min:t.min,max:t.max,"use-calculator":t.useCalculator,calcStyle:t.calcStyle},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("v-col",{attrs:{cols:"12",sm:"10",md:"6"}},[a("v-numeric",{attrs:{xs3:"",label:"calculator use the same style as text input",hint:t.hint,placeholder:t.placeholder,locale:t.locale,prefix:t.prefix,useGrouping:t.useGrouping,precision:t.precision,fab:t.fab,outlined:t.outlined,rounded:t.rounded,text:t.text,clearable:t.clearable,readonly:t.readonly,min:t.min,max:t.max},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1)],1)],1)},c=[],p=(a("a9e3"),a("cca6"),a("5530")),d=a("8336"),h=a("e449"),f=a("8654"),m=a("0fd9b"),v=a("8dd9");function b(t,e){return t||s["a"].options.components[e]}try{l=d["a"],o=h["a"],i=f["a"],n=m["a"],r=v["a"]}catch(X){l=void 0,o=void 0,i=void 0,n=void 0,r=void 0}var y=b(l,"VBtn"),g=b(o,"VMenu"),x=b(i,"VTextField"),S=b(n,"VRow"),$=b(r,"VSheet"),V=(a("caad"),a("c975"),a("d81d"),a("c35a"),a("d3b7"),a("25f0"),a("2ca0"),a("c96a"),s["a"].extend({name:"v-calculator",props:{isActive:{type:Boolean,default:!1},elevation:{type:Number,default:0},dark:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},useGrouping:{type:Boolean,default:!0},locale:{type:String,default:"en-US"},precision:{type:Number,default:0},initialValue:{type:Number,default:0},negativeTextColor:{type:String,default:"red"},calcStyle:{type:Object,default:void 0}},computed:{numberFormatter:function(){return new Intl.NumberFormat(this.locale,{useGrouping:this.useGrouping})},resultNumber:function(){return this.numberFormatter.format(Number(this.value))},computedColor:function(){return Number(this.$data.value)<0&&this.negativeTextColor?this.negativeTextColor:void 0},computedOutlined:function(){return this.calcStyle?void 0===this.calcStyle.outlined?this.outlined:this.calcStyle.outlined:this.outlined},computedRounded:function(){return this.calcStyle?void 0===this.calcStyle.rounded?this.rounded:this.calcStyle.rounded:this.rounded},computedText:function(){return this.calcStyle?void 0===this.calcStyle.text?this.text:this.calcStyle.text:this.text},computedTile:function(){return!!this.calcStyle&&(void 0!==this.calcStyle.tile&&this.calcStyle.tile)},computedLarge:function(){return!!this.calcStyle&&(void 0!==this.calcStyle.large&&this.calcStyle.large)},computedSmall:function(){return!!this.calcStyle&&(void 0!==this.calcStyle.small&&this.calcStyle.small)},computedWidth:function(){return this.calcStyle?void 0===this.calcStyle.width?"288px":this.calcStyle.width:"288px"},computedHeight:function(){return this.calcStyle?void 0===this.calcStyle.height?this.calcStyle.small?"212px":"246px":this.calcStyle.height:"246px"},textOperand:function(){return this.operand?0===this.operand?"":this.operand.toString():""}},data:function(){return{value:"0",operand:0,operation:void 0}},watch:{initialValue:{immediate:!0,deep:!0,handler:function(t){t&&(this.value=t.toString())}},computedColor:function(t){var e=this.genResultInput();e&&(e.style.color=t||null)}},methods:{reset:function(){this.value="0",this.operation=void 0,this.operand=0},genResultInput:function(){var t=this.$refs.calcResult.$el.getElementsByTagName("input");if(t&&t.length>0)return t[0]},getOperation:function(t){return"+"===t?function(t,e){return Number(t)+Number(e)}:"-"===t?function(t,e){return Number(t)-Number(e)}:"*"===t?function(t,e){return Number(t)*Number(e)}:"÷"===t||"/"===t?function(t,e){return Number(t)/Number(e)}:"%"===t?function(t,e){return Number(t)/100*Number(e)}:void 0},changeValue:function(t){var e;this.isActive&&(e=t instanceof KeyboardEvent?t.key:t,["0","1","2","3","4","5","6","7","8","9","00"].includes(e)?"0"===this.value?this.value=e:this.value+=e:"Backspace"===e||"←"===e?2===this.value.length&&this.value.startsWith("-")?this.value="0":this.value=this.value.length<=1?"0":this.value.substring(0,this.value.length-1):"C"===e.toUpperCase()?this.reset():","===e||"."===e?-1===this.value.indexOf(".")&&(this.value+="."):"±"===e?this.value.toString().startsWith("-")?this.value=this.value.toString().substring(1,this.value.length):this.value="-"+this.value:"1/x"===e?"0"!==this.value&&(this.value=(1/Number.parseFloat(this.value)).toString()):["+","-","*","÷","/","%"].includes(e)?(this.calculate(),this.operation=this.getOperation(e),this.operand=Number(this.value),this.value="0"):["=","Enter","OK"].includes(e)?(this.calculate(),this.operation=void 0,this.operand=0,"Enter"!==e&&"OK"!==e||this.returnValue()):"CE"===e?this.value="0":"Escape"===e?(this.reset(),this.$emit("return-value",void 0)):"Delete"===e&&(this.value="0",this.$emit("return-value",this.value),this.reset()))},returnValue:function(){this.$emit("return-value",this.value),this.reset()},calculate:function(){if(this.value&&this.operand&&this.operation){var t=this.operation(this.operand,this.value);this.value=t.toString()}},genNumberButton:function(t){var e=this;return this.$createElement(y,{style:{"padding-left":"0px","padding-right":"0px","max-width":"48px","min-width":"48px"},props:{fab:this.calcStyle&&this.calcStyle.fab?this.calcStyle.fab:this.fab,outlined:this.computedOutlined,rounded:this.computedRounded,text:this.computedText,tile:this.computedTile,large:this.computedLarge,small:this.computedSmall},domProps:{innerHTML:t},on:{click:function(){return e.changeValue(t)}}})},genActionsButton:function(t){var e=this;return this.$createElement(y,{style:{"padding-left":"0px","padding-right":"0px","max-width":"48px","min-width":"48px"},props:{fab:this.calcStyle&&this.calcStyle.fab?this.calcStyle.fab:this.fab,outlined:this.computedOutlined,rounded:this.computedRounded,text:this.computedText,tile:this.computedTile,large:this.computedLarge,small:this.computedSmall},domProps:{innerHTML:t},on:{click:function(){return e.changeValue(t)}}})},genRow:function(t){var e=this,a=[],i=["+","±","C","-","%","CE","*","1/x","←",".","÷","=","OK"];return t.map((function(t){i.includes(t)?a.push(e.genActionsButton(t)):a.push(e.genNumberButton(t))})),this.$createElement(S,{style:{"margin-left":"0px","margin-right":"0px"}},a)},genResult:function(){return this.$createElement(x,{ref:"calcResult",props:{outlined:!0,reverse:!0,readonly:!0,value:this.resultNumber,autofocus:!0,hint:this.textOperand,persistentHint:!0},style:{padding:"12px","font-size":"24px"}})}},mounted:function(){document.addEventListener("keydown",this.changeValue)},beforeDestroy:function(){document.removeEventListener("keydown",this.changeValue)},render:function(){var t=this.genRow(["7","8","9","+","±","C"]),e=this.genRow(["4","5","6","-","%","CE"]),a=this.genRow(["1","2","3","*","1/x","←"]),i=this.genRow(["0","00",".","÷","=","OK"]),l=[];return l.push(this.genResult()),l.push(t,e,a,i),this.$createElement($,{attrs:{tabindex:0},props:{width:this.computedWidth,height:this.computedHeight,elevation:this.elevation,dark:this.dark}},l)}})),w=(a("b65f"),a("ac1f"),a("5319"),x.options.props),k=s["a"].extend({name:"v-numeric-input",props:Object(p["a"])({min:{type:Number,default:-Number.MAX_VALUE},max:{type:Number,default:Number.MAX_VALUE},lenght:{type:Number,default:10},precision:{type:Number,default:0},negativeTextColor:{type:String,default:"red"},textColor:{type:Function,default:void 0},locale:{type:String,default:"en-US"},useGrouping:{type:Boolean,default:!0},calcIcon:{type:String,default:"mdi-calculator"},value:{type:[String,Number],default:0}},w),data:function(){return{internalValue:0,fractDigitsEdited:!1,fractPart:"0",isFocused:!1,clrValue:!1}},computed:{numberFormatter:function(){return new Intl.NumberFormat(this.$props.locale,{useGrouping:this.$props.useGrouping,minimumFractionDigits:this.$props.precision})},computedValue:function(){return this.internalValue?(this.$props.prefix?this.$props.prefix:"")+this.numberFormatter.format(this.internalValue):(this.$props.prefix?this.$props.prefix:"")+this.numberFormatter.format(0)},computedColor:function(){return this.internalValue<0&&this.$props.negativeTextColor?this.$props.negativeTextColor:this.$props.color}},watch:{value:{immediate:!0,handler:function(t){this.internalValue=t?"string"===typeof t?Number.parseFloat(t):t:0},deep:!0},internalValue:function(t){this.$emit("change-value",t)},computedColor:function(t){var e=this.genTextInput();e&&(e.style.color=t||null)}},methods:{genTextInput:function(){var t=this.$el.getElementsByTagName("input");if(t&&t.length>0)return t[0]},clearValue:function(){var t=this;this.internalValue=0,this.fractPart="0",this.fractDigitsEdited=!1,this.$nextTick((function(){t.$data.value?t.internalValue=t.$data.value:t.internalValue=0,t.$emit("change-value",t.internalValue)}))},activateCalculator:function(){this.$props.readonly||this.$emit("activate-calculator",this.internalValue)},keyProcess:function(t){if(this.isFocused&&"Tab"!==t.key){if(this.$props.readonly)return t.preventDefault(),void t.stopPropagation();if("ArrowLeft"!==t.key&&"ArrowRight"!==t.key&&t.preventDefault(),t.stopPropagation(),"Enter"===t.key)return this.updateDimensions(),void this.activateCalculator();if("Delete"!==t.key){var e=["0","1","2","3","4","5","6","7","8","9"],a=Math.trunc(this.internalValue).toString();e.includes(t.key)?this.fractDigitsEdited?(this.fractPart+=t.key.toString(),this.fractPart=this.fractPart.substr(Math.max(0,this.fractPart.length-this.$props.precision),this.$props.precision)):(this.clrValue&&(this.fractPart="00",a="0",this.clrValue=!1),"0"===a&&"0"!==t.key?a=t.key:"0"!==a&&(a+=t.key)):"-"===t.key?a=a.startsWith("-")?a.replace("-",""):"-"+a:"Backspace"===t.key?this.fractDigitsEdited?this.fractPart=this.fractPart.length<=1?"0":this.fractPart.substring(0,this.fractPart.length-1):a=2===a.length&&a.startsWith("-")||a.length<=1?"0":a.substring(0,a.length-1):[",","."].includes(t.key)&&this.$props.precision>0&&(this.fractDigitsEdited=!this.fractDigitsEdited),this.$props.precision>0&&(a=a+"."+this.fractPart);var i=Number(a);if(this.$props.precision>0){var l=Math.pow(10,this.$props.precision);i=Math.round(Number(i)*l)/l}i=i=Math.max(Math.min(this.$props.max,i),this.$props.min),this.internalValue=i}else this.clearValue()}},updateDimensions:function(){var t=this.$el.getBoundingClientRect();this.$emit("resize-numeric-input",{bottom:t.bottom,right:t.right})},setFocus:function(t){this.isFocused=t}},mounted:function(){var t=this.genTextInput();t&&(t.setAttribute("type","text"),t.style.textAlign="right"),window.addEventListener("resize",this.updateDimensions),window.addEventListener("load",this.updateDimensions)},beforeDestroy:function(){window.removeEventListener("resize",this.updateDimensions),window.removeEventListener("load",this.updateDimensions)},render:function(){var t=this,e=Object.assign({},this.$props);return e.value=this.computedValue,e.prefix&&(e.prefix=void 0),e.appendIcon=this.$props.calcIcon,this.$createElement(x,{domProps:{value:this.internalValue},props:e,on:{keydown:this.keyProcess,focus:function(){t.setFocus(!0),t.fractDigitsEdited=!1,t.clrValue=!0},blur:function(){return t.setFocus(!1)},"click:clear":this.clearValue,"click:append":function(){t.updateDimensions(),t.activateCalculator()},input:function(e){t.internalValue=Number(e)},change:function(e){return t.$emit("change",e)}}})}}),C=x.options.props,N=s["a"].extend({name:"v-numeric",props:Object(p["a"])({min:{type:Number,default:-Number.MAX_VALUE},max:{type:Number,default:Number.MAX_VALUE},length:{type:Number,default:10},precision:{type:[Number,String],default:0},negativeTextColor:{type:String,default:"red"},textColor:{type:Function,default:void 0},locale:{type:String,default:"en-US"},useGrouping:{type:Boolean,default:!0},elevation:{type:Number,default:0},fab:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},calcIcon:{type:String,default:"mdi-calculator"},useCalculator:{type:Boolean,default:!0},calcStyle:{type:Object,default:void 0}},C),computed:{computedPrecision:function(){return Number(this.$props.precision)}},data:function(){return{internalValue:0,isMenuActive:!1,xMenuPos:0,yMenuPos:0}},watch:{value:{deep:!0,immediate:!0,handler:function(t){this.$data.internalValue=Number(t)}}},methods:{activateCalculator:function(){this.isMenuActive=!0},closeCalculator:function(t){this.isMenuActive=!1,this.changeValue(t)},changeValue:function(t){var e;if(t){if(this.computedPrecision>0){var a=Math.pow(10,this.computedPrecision);e=Math.round(Number(t)*a)/a}else e=Math.round(Number(t));e=Math.max(Math.min(this.$props.max,e),this.$props.min),this.internalValue=e,this.$emit("input",this.internalValue)}else 0===t&&(this.internalValue=0,this.$emit("input",this.internalValue))},genCalculator:function(){var t=this;if(this.$props.useCalculator)return this.$createElement(V,{props:{initialValue:this.internalValue,locale:this.$props.locale,useGrouping:this.$props.useGrouping,negativeTextColor:this.$props.negativeTextColor,precision:this.computedPrecision,elevation:this.$props.elevation,fab:this.$props.fab,outlined:this.$props.outlined,rounded:this.$props.rounded,text:this.$props.text,dark:this.$props.dark,dense:this.$props.dense,isActive:this.isMenuActive,calcStyle:this.$props.calcStyle},on:{"return-value":function(e){return t.closeCalculator(e)}}})},setMenuPosition:function(t){this.$data.yMenuPos=t.bottom,this.$data.xMenuPos=t.right-288},genInput:function(){var t=this,e=Object.assign({},this.$props);return e.value=this.internalValue,e.precision=this.computedPrecision,this.$createElement(k,{domProps:{value:this.internalValue},props:e,slot:"activator",on:{"activate-calculator":function(){t.activateCalculator()},"change-value":function(e){return t.changeValue(e)},"resize-numeric-input":function(e){return t.setMenuPosition(e)},input:function(e){t.internalValue=Number(e)},change:function(e){return t.$emit("change",e)}}})},computedWidth:function(){return this.$props.calcStyle?void 0===this.$props.calcStyle.width?"288px":this.$props.calcStyle.width:"288px"},computedHeight:function(){return this.$props.calcStyle?void 0===this.$props.calcStyle.height?"246px":this.$props.calcStyle.height:"246px"}},render:function(){var t=this,e=this;return this.$createElement(g,{props:{absolute:!0,positionX:this.xMenuPos,positionY:this.yMenuPos,closeOnContentClick:!1,value:this.isMenuActive,dark:this.$props.dark,dense:this.$props.dense,width:this.computedWidth,maxWidth:this.computedWidth(),height:this.computedHeight,right:!0},scopedSlots:{activator:function(){return e.genInput()}},on:{"update:return-value":function(e){return t.closeCalculator(e)}}},[this.genCalculator()])}}),M=s["a"].extend({name:"App",components:{VNumeric:N},data:function(){return{label:"My label",hint:"My hint",clearable:!1,placeholder:"type your number here",dark:!1,fab:!1,outlined:!0,rounded:!1,text:!1,numPrecision:2,useGrouping:!0,min:-1e4,max:25e3,prefix:"$",precision:2,locale:"en-US",locales:["en-US","ru-RU","zh-ZH"],readonly:!1,value:0,useCalculator:!0,calcStyle:{fab:!1,outlined:!1,rounded:!1,text:!1,tile:!1,large:!1,small:!1}}}}),P=M,E=(a("034f"),a("2877")),T=a("6544"),O=a.n(T),A=a("7496"),B=a("40dc"),D=a("b0af"),F=a("ac7c"),_=a("62ad"),R=a("a523"),G=a("f6c4"),L=a("b974"),j=a("2fa4"),I=a("b73d"),U=a("2a7f"),H=Object(E["a"])(P,u,c,!1,null,null,null),W=H.exports;O()(H,{VApp:A["a"],VAppBar:B["a"],VBtn:d["a"],VCard:D["a"],VCheckbox:F["a"],VCol:_["a"],VContainer:R["a"],VMain:G["a"],VRow:m["a"],VSelect:L["a"],VSpacer:j["a"],VSwitch:I["a"],VTextField:f["a"],VToolbarTitle:U["a"]});var z=a("f309");s["a"].use(z["a"]);var K=new z["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:K,render:function(t){return t(W)}}).$mount("#app")}});
//# sourceMappingURL=app.9a7dd04e.js.map