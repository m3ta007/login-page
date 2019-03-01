!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=13)}([function(n,e,t){n.exports=t.p+"d04519f92211d94528055e267d3d1e17.png"},function(n,e){n.exports={note:{to:["Tee"],from:["Anna"],heading:["Reminder"],body:["Smile, the webpack is working!"]}}},function(n,e,t){var r=t(3);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(8)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){e=n.exports=t(4)(!1);var r=t(5),o=r(t(6)),i=r(t(7));e.push([n.i,":root {\n  --primary: #0870a5;\n  --secondary: #6FB6D2;\n  --success: #5FBE00;\n  --info: #015079;\n  --warning: #EE9E90;\n  --danger: #E75854;\n  --dark: #242223;\n  --light: #e9cabe;\n  --transp: #e9cabe46;\n  --offwhite: #ffeae1;\n  /* --offwhite: #dee2e6; */\n  --white: #f6f8f9;\n  --black: #000;\n    /* --light: #ffc5b2; */\n    /* Pantone / PMS 13-1318 TPG Peach Blush */\n    /* --primary: #066b8b; */\n    /* Pantone 18-4530 Tpx Celestial */\n}\n\n@font-face {\n  font-family: 'Ubuntu';\n  src:  url("+o+") format('ttf'),\n        url("+i+") format('ttf');\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  font-family: 'Ubuntu', sans-serif;\n  letter-spacing: 1px;\n  line-height: 1.5rem;\n  font-size: 1rem;\n  text-decoration: none;\n  background: linear-gradient(var(--light) 80%, var(--offwhite));\n  color: white;\n  margin: 0 auto;  \n  width: 100%; \n  min-height: 100vh;\n  text-align: center;\n  margin: 20px;  \n  -webkit-transition: background 0.3s ease;\n  -moz-transition: background 0.3s ease;\n  -o-transition: background 0.3s ease;\n  transition: background 0.3s ease; \n}\n\nh1 {\n  font-size: 1.5rem;\n  font-weight: bolder;\n}\n\n.box {\n  background: var(--offwhite);\n  color: var(--primary);\n  width: 30vw;\n  border-radius: 6px;\n  margin: 0 auto;\n  padding: 15px 40px;\n  border: var(--primary) 3px solid; \n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: flex-start; */\n  justify-content: center;\n}\n\ndiv.row {\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\ndiv.input {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n  width: 100%;\n}\n\ninput {\n  background: white;\n  caret-color: var(--primary);\n  border: var(--primary) 1px solid;\n  border-bottom: var(--primary) 2px solid;\n  line-height: 1.5em;\n  margin-top: 10px;\n  font-size: 1em;\n  color: var(--primary);\n  border-radius: 4px;\n}\n\nlabel, .link {\n  font-size: 1rem;\n  text-decoration: none;\n}\n\ndiv.btns {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  margin: 10px -7px 0 -7px;\n}\n\n.btn {\n  padding: 5px;\n  margin: 10px auto;\n  border-radius: 4px;\n  font-size: 0.8em;\n  flex: 0 0 40%;\n  max-width: 40%;\n  /* position: relative; */\n}\n\n.btn > a {\n  text-decoration: none;\n  font-weight: 100;\n  color: white;\n}\n\n#btnIn {\n  background: var(--success);\n  border: #5ab301 1px solid;\n}\n\n#btnIn:hover {\n  background: #5ab301; \n}\n\n#btnUp {\n  background: var(--primary);\n  border: #096694 1px solid;\n}\n\n#btnUp:hover { \n  background: #096694; \n}\n\nlabel, p, a.link {\n  font-weight: lighter;\n  font-size: .9rem;\n}\n\na.link {\n  color: var(--success);\n}\n\n#change {\n  background: transparent;\n  border: white 1px solid;\n}\n\n#change:hover { \n  background: #ffeae146\n}\n\n#change > a {\n  color: white;\n}\n\naside {\n  margin: 10px auto;\n}\n\n/* ON/OFF Switch from https://proto.io/freebies/onoff/ */\n\n.onoffswitch {\n  position: relative; \n  width: 130px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n}\n.onoffswitch-checkbox {\n  display: none;\n}\n.onoffswitch-label {\n  display: block;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid var(--offwhite);\n  border-radius: 20px;\n}\n.onoffswitch-inner {\n  display: block; \n  width: 200%; \n  margin-left: -100%;\n  -webkit-transition: margin 0.3s ease-in 0s;\n     -moz-transition: margin 0.3s ease-in 0s;\n       -o-transition: margin 0.3s ease-in 0s;\n          transition: margin 0.3s ease-in 0s;\n}\n.onoffswitch-inner:before, .onoffswitch-inner:after {\n  display: block; \n  float: left; \n  width: 50%; \n  height: 30px; \n  padding: 0; \n  line-height: 30px;\n  font-size: 14px; \n  color: var(--light); \n  box-sizing: border-box;\n}\n.onoffswitch-inner:before {\n  content: \"Day mode\";\n  text-align: left;\n  padding-left: 10px;\n  background-color: var(--primary);\n  color: var(--light);\n}\n.onoffswitch-inner:after {\n  content: \"Night mode\";\n  padding-right: 10px;\n  background-color: var(--light);\n  color: var(--primary);\n  text-align: right;\n}\n.onoffswitch-switch {\n  display: block;\n  width: 18px;\n  margin: 6px;\n  background: var(--offwhite);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 97px;\n  border: 2px solid #999999;\n  border-radius: 20px;\n  transition: all 0.3s ease-in 0s; \n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {\n  margin-left: 0;\n}\n.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {\n  right: 0px; \n}",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){n.exports=t.p+"6bb9beb4ae22b811bfd5369d517e2f7c.ttf"},function(n,e,t){n.exports=t.p+"fb4c7f5813a0ec14f77da2fb523e3516.ttf"},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),c=null,f=0,l=[],u=t(9);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,t);t.insertBefore(e,o)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function g(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return m(e,n.attrs),h(n,e),e}function m(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function v(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=f++;t=c||(c=g(e)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){b(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){b(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return d(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&d(p(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,x=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function w(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e){n.exports=function(){let n=document.getElementById("remember"),e=!0;"true"===localStorage.getItem("rememberUid")&&(n.checked=!0),n.addEventListener("click",()=>{localStorage.setItem("rememberUid",e),e=!e})}},function(n,e){n.exports=function(){let n=JSON.stringify({name:"Alex",age:25,tech:["mobile","notebook"]});localStorage.setItem("Alex",n),console.log(JSON.parse(localStorage.getItem("Alex")))}},function(n,e){n.exports=function(){let n=document.querySelector("#modeSwitch"),e=document.querySelector("body"),t=document.querySelector(".box"),r=!1;"true"===localStorage.getItem("modeNight")&&(r=!0,e.style.background="linear-gradient(var(--primary) 60%, var(--info))",t.style.background="var(--light)"),n.addEventListener("click",()=>{r=!r,localStorage.setItem("modeNight",r),!0===r?(e.style.background="linear-gradient(var(--primary) 60%, var(--info))",t.style.background="var(--light)"):(e.style.background="linear-gradient(var(--light) 80%, var(--offwhite))",t.style.background="var(--offwhite)")})}},function(n,e,t){"use strict";t.r(e);t(2);var r=t(0),o=t.n(r),i=t(1),a=t.n(i);var s;window.addEventListener("DOMContentLoaded",()=>{let n=t(10),e=t(11),r=t(12);n(),e(),r();let i=document.querySelector("link#shortcut");return i.href=o.a,i}),console.log(a.a),console.log("1 and 2"),s="Anna",console.log(`${s}, I was exported!`)}]);
//# sourceMappingURL=bundle.js.map