(function(e){function t(t){for(var o,s,c=t[0],l=t[1],a=t[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/simongame/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"heading"},[e._v("Simon The Game")]),n("form",{staticClass:"mode-controls",class:e.toggleModeDisabled?"disabled":null,attrs:{action:"#"}},e._l(e.modes,(function(t){return n("div",{key:t,staticClass:"control-mode-item",attrs:{title:e.toggleModeDisabled?"Finish current game before changing dificult level":null}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentMode,expression:"currentMode"}],attrs:{disabled:e.toggleModeDisabled,type:"radio",id:t},domProps:{value:t,checked:e._q(e.currentMode,t)},on:{change:function(n){e.currentMode=t}}}),n("label",{attrs:{for:t}},[e._v(e._s(t))])])})),0),n("div",{staticClass:"game-controls"},e._l(e.controls,(function(t,o){return n("div",{key:o,staticClass:"audio-btn",class:[{disactive:e.isPlaying,clickedClass:t.clicked},"audio-item-"+o],on:{click:function(t){return e.clickHandler(o)}}})})),0),n("button",{staticClass:"start-btn",on:{click:e.start}},[e._v("play")]),n("p",{staticClass:"counter"},[e._v("Round: "+e._s(e.line.length))]),n("p",{staticClass:"res"},[e._v(e._s(e.loose?"Sorry! You loose after "+e.line.length+" rounds":""))])])},r=[],s=(n("a623"),n("4160"),n("159b"),{name:"App",components:{},data:function(){return{controls:{1:{clicked:!1,audio:new Audio},2:{clicked:!1,audio:new Audio},3:{clicked:!1,audio:new Audio},4:{clicked:!1,audio:new Audio}},modes:["easy","medium","hard"],currentMode:"medium",toggleModeDisabled:!1,line:[],userline:[],isPlaying:!0,loose:!1}},computed:{chosenMode:function(){switch(this.currentMode){case"medium":return 1e3;case"hard":return 400;default:return 1500}}},mounted:function(){for(var e in this.controls)this.controls[e].audio.src=this.controls[e].audio.canPlayType("audio/mpeg")?"./sounds/".concat(e,".mp3"):"./sounds/".concat(e,".ogg")},methods:{clickHandler:function(e){var t=this;this.loose||this.isPlaying||(this.controls[e].clicked=!0,setTimeout((function(){t.controls[e].clicked=!1}),300),this.userline.push(+e),this.controls[e].audio.currentTime=0,this.controls[e].audio.play(),this.compare())},start:function(){this.loose=!1,this.line=[],this.toggleModeDisabled=!0,this.play()},play:function(){var e=this;this.isPlaying=!0,this.userline=[],this.line.push(Math.ceil(4*Math.random())),this.line.forEach((function(t,n){setTimeout((function(){e.controls[t].audio.currentTime=0,e.controls[t].audio.play(),e.controls[t].clicked=!0,setTimeout((function(){e.controls[t].clicked=!1,n===e.line.length-1&&(e.isPlaying=!1)}),e.chosenMode/2)}),n*e.chosenMode)}))},compare:function(){var e=this,t=this.userline.every((function(t,n){return t===e.line[n]}));!t&&(this.loose=!0),!t&&(this.toggleModeDisabled=!1),t&&this.line.length===this.userline.length&&setTimeout((function(){return e.play()}),1e3)}}}),c=s,l=(n("cf25"),n("2877")),a=Object(l["a"])(c,i,r,!1,null,null,null),u=a.exports;n("5a8b");o["a"].config.productionTip=!1,o["a"].config.devtools=!0,new o["a"]({render:function(e){return e(u)}}).$mount("#app")},"5a8b":function(e,t,n){},cf25:function(e,t,n){"use strict";var o=n("fea6"),i=n.n(o);i.a},fea6:function(e,t,n){}});
//# sourceMappingURL=app.b075b8c9.js.map