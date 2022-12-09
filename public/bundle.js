(()=>{"use strict";var t,n,r,e,i,c,o,a,s,l,d,p,h,f,u={426:(t,n,r)=>{r.d(n,{Z:()=>a});var e=r(81),i=r.n(e),c=r(645),o=r.n(c)()(i());o.push([t.id,'body{\r\n\tpadding:10px;\r\n}\r\nheader{\r\n    color:#687183;\r\n}\r\nheader span{\r\n    display:inline-block;\r\n    margin: auto;\r\n    width:100%;\r\n    text-align:right;\r\n}\r\nheader h1{\r\n    font-size: 22px;\r\n\ttext-align:center;\r\n}\r\n\r\narticle section p,\r\narticle section aside p{\r\n    font-size:14px;\r\n\ttext-align: justify;\r\n    color:#3a3930;\r\n}\r\nfigcaption{\r\n\tfont-size: 12px;\r\n\tfont-weight:bold;\r\n\ttext-align:center;\r\n}\r\n\r\n/*codes*/\r\npre.code {\r\n    white-space: pre-wrap;\r\n    line-height: 0.8;\r\n    width: 280px;\r\n\tpadding-left:40px;\r\n\tcolor:#3a3930;\r\n}\r\n\r\npre.code::before {\r\n    counter-reset: listing;\r\n}\r\n\r\npre.code code {\r\n    counter-increment: listing;\r\n}\r\n\r\npre.code code::before {\r\n    content: counter(listing) ".";\r\n    display: inline-block;\r\n    padding-left: auto;\r\n    margin-left: auto;\r\n    text-align: right;\r\n}\r\n\r\narticle > section:nth-child(5) > ol{\r\n\ttext-align:left;\r\n\tlist-style-position: inside;\r\n\tcolor:#3a3930;\r\n\tfont-size: 9px;\r\n\tline-height: 16px;\r\n}\r\n\r\n/*tables*/\r\ntable{\r\n\twidth:320px;\r\n}\r\ntr{\r\n\theight:24px;\r\n}\r\ntd{\r\n\tfont-size: 14px;\r\n}\r\ntd.cell-arr{\r\n\twidth:260px;\r\n}\r\n.table-left tr :nth-child(n+1){\r\n\twidth:30px;\r\n\ttext-align:center;\r\n}\r\n\r\narticle > section:nth-child(2) aside > p:nth-child(2), article > section:nth-child(2) aside > p:nth-child(4) {\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n@media screen and (min-width: 800px){\r\n\theader h1{\r\n\t    font-size: 30px;\r\n\t}\r\n\tarticle section p,\r\n\tarticle section aside p{\r\n\t    font-size:22px;\r\n\t}\r\n\tfigcaption{\r\n\t\tfont-size: 18px;\r\n\t}\r\n\tarticle > section:nth-child(2) aside > p:nth-child(2), article > section:nth-child(2) aside > p:nth-child(4) {\r\n\t    font-size: 26px;\r\n\t}\r\n\tarticle > section:nth-child(4) aside{\r\n\t\tdisplay:flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\tarticle > section:nth-child(5) > ol{\r\n\t\ttext-align:center;\r\n\t\tfont-size: 20px;\r\n\t\tline-height: 26px;\r\n\t}\r\n\tpre.code {\r\n\t\tfont-size:20px;\r\n\t    width: 320px;\r\n\t}\r\n\tarticle > section:nth-child(7) aside > p:nth-child(3){\r\n\t\ttext-align:center;\r\n\t\tfont-size: 24px;\r\n\t}\r\n\tarticle > section:nth-child(8) > div{\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\tmargin-bottom:60px;\r\n\t}\r\n\ttd,th{\r\n\t\tfont-size: 18px;\r\n\t}\r\n}\r\n\r\n@media screen and (min-width: 1000px){\r\n\tarticle > section:nth-child(2),\r\n\tarticle > section:nth-child(3),\r\n\tarticle > section:nth-child(4),\r\n\tarticle > section:nth-child(6),\r\n\tarticle > section:nth-child(10){\r\n\t\tdisplay:flex;\r\n\t}\r\n\tarticle > section:nth-child(2) figure:nth-child(1),\r\n\tarticle > section:nth-child(3) figure,\r\n\tarticle > section:nth-child(4) figure,\r\n\tarticle > section:nth-child(6) figure,\r\n\tarticle > section:nth-child(10) figure{\r\n\t\twidth:50%;\r\n\t}\r\n\tarticle > section:nth-child(2) aside,\r\n\tarticle > section:nth-child(3) aside,\r\n\tarticle > section:nth-child(4) aside,\r\n\tarticle > section:nth-child(6) aside,\r\n\tarticle > section:nth-child(10) aside{\r\n\t\twidth:50%;\r\n\t}\r\n\tarticle > section:nth-child(4) aside .left-code .code{\r\n\t\twidth:220px;\r\n\t\tpadding-left:10px;\r\n\t}\r\n\tarticle > section:nth-child(4) aside .right-code .code{\r\n\t\twidth:280px;\r\n\t\tpadding-left:10px;\r\n\t}\r\n\t\r\n\tpre.code {\r\n\t    margin:auto;\r\n\t}\r\n}',""]);const a=o},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r="",e=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),e&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=t(n),e&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(t,r,e,i,c){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(e)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);e&&o[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),n.push(d))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function r(t){for(var r=-1,e=0;e<n.length;e++)if(n[e].identifier===t){r=e;break}return r}function e(t,e){for(var c={},o=[],a=0;a<t.length;a++){var s=t[a],l=e.base?s[0]+e.base:s[0],d=c[l]||0,p="".concat(l," ").concat(d);c[l]=d+1;var h=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)n[h].references++,n[h].updater(f);else{var u=i(f,e);e.byIndex=a,n.splice(a,0,{identifier:p,updater:u,references:1})}o.push(p)}return o}function i(t,n){var r=n.domAPI(n);return r.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;r.update(t=n)}else r.remove()}}t.exports=function(t,i){var c=e(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<c.length;o++){var a=r(c[o]);n[a].references--}for(var s=e(t,i),l=0;l<c.length;l++){var d=r(c[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}c=s}}},569:t=>{var n={};t.exports=function(t,r){var e=function(t){if(void 0===n[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}(t);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,r)=>{t.exports=function(t){var n=r.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(r){!function(t,n,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,i&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var c=r.sourceMap;c&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(e,t,n.options)}(n,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},x={};function g(t){var n=x[t];if(void 0!==n)return n.exports;var r=x[t]={id:t,exports:{}};return u[t](r,r.exports,g),r.exports}g.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return g.d(n,{a:n}),n},g.d=(t,n)=>{for(var r in n)g.o(n,r)&&!g.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},g.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),g.nc=void 0,t=g(379),n=g.n(t),r=g(795),e=g.n(r),i=g(569),c=g.n(i),o=g(565),a=g.n(o),s=g(216),l=g.n(s),d=g(589),p=g.n(d),h=g(426),(f={}).styleTagTransform=p(),f.setAttributes=a(),f.insert=c().bind(null,"head"),f.domAPI=e(),f.insertStyleElement=l(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals})();