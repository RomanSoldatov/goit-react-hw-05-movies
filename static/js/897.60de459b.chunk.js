(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[897],{5095:function(t,e,n){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,a="object"==typeof self&&self&&self.Object===Object&&self,l=f||a||Function("return this")(),s=Object.prototype.toString,p=Math.max,y=Math.min,v=function(){return l.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||u.test(t)?c(t.slice(2),n?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var r,o,i,u,c,f,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=r,i=o;return r=o=void 0,a=e,u=t.apply(i,n)}function g(t){return a=t,c=setTimeout(w,e),l?m(t):u}function O(t){var n=t-f;return void 0===f||n>=e||n<0||s&&t-a>=i}function w(){var t=v();if(O(t))return j(t);c=setTimeout(w,function(t){var n=e-(t-f);return s?y(n,i-(t-a)):n}(t))}function j(t){return c=void 0,d&&r?m(t):(r=o=void 0,u)}function N(){var t=v(),n=O(t);if(r=arguments,o=this,f=t,n){if(void 0===c)return g(f);if(s)return c=setTimeout(w,e),m(f)}return void 0===c&&(c=setTimeout(w,e)),u}return e=h(e)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?p(h(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),N.cancel=function(){void 0!==c&&clearTimeout(c),a=0,r=f=o=c=void 0},N.flush=function(){return void 0===c?u:j(v())},N}},6674:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.DebounceInput=void 0;var o=c(n(2791)),i=c(n(5095)),u=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(a,t);var e,n,r,c=y(a);function a(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),d(b(e=c.call(this,t)),"onChange",(function(t){t.persist();var n=e.state.value,r=e.props.minLength;e.setState({value:t.target.value},(function(){var o=e.state.value;o.length>=r?e.notify(t):n.length>o.length&&e.notify(l(l({},t),{},{target:l(l({},t.target),{},{value:""})}))}))})),d(b(e),"onKeyDown",(function(t){"Enter"===t.key&&e.forceNotify(t);var n=e.props.onKeyDown;n&&(t.persist(),n(t))})),d(b(e),"onBlur",(function(t){e.forceNotify(t);var n=e.props.onBlur;n&&(t.persist(),n(t))})),d(b(e),"createNotifier",(function(t){if(t<0)e.notify=function(){return null};else if(0===t)e.notify=e.doNotify;else{var n=(0,i.default)((function(t){e.isDebouncing=!1,e.doNotify(t)}),t);e.notify=function(t){e.isDebouncing=!0,n(t)},e.flush=function(){return n.flush()},e.cancel=function(){e.isDebouncing=!1,n.cancel()}}})),d(b(e),"doNotify",(function(){var t=e.props.onChange;t.apply(void 0,arguments)})),d(b(e),"forceNotify",(function(t){var n=e.props.debounceTimeout;if(e.isDebouncing||!(n>0)){e.cancel&&e.cancel();var r=e.state.value,o=e.props.minLength;r.length>=o?e.doNotify(t):e.doNotify(l(l({},t),{},{target:l(l({},t.target),{},{value:r})}))}})),e.isDebouncing=!1,e.state={value:"undefined"===typeof t.value||null===t.value?"":t.value};var n=e.props.debounceTimeout;return e.createNotifier(n),e}return e=a,(n=[{key:"componentDidUpdate",value:function(t){if(!this.isDebouncing){var e=this.props,n=e.value,r=e.debounceTimeout,o=t.debounceTimeout,i=t.value,u=this.state.value;"undefined"!==typeof n&&i!==n&&u!==n&&this.setState({value:n}),r!==o&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var t,e,n=this.props,r=n.element,i=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),c=n.forceNotifyOnBlur,a=n.onKeyDown,s=n.onBlur,p=n.inputRef,y=f(n,u),v=this.state.value;t=i?{onKeyDown:this.onKeyDown}:a?{onKeyDown:a}:{},e=c?{onBlur:this.onBlur}:s?{onBlur:s}:{};var b=p?{ref:p}:{};return o.default.createElement(r,l(l(l(l({},y),{},{onChange:this.onChange,value:v},t),e),b))}}])&&s(e.prototype,n),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(o.default.PureComponent);e.DebounceInput=m,d(m,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},3628:function(t,e,n){"use strict";var r=n(6674).DebounceInput;r.DebounceInput=r,t.exports=r},9e3:function(t,e,n){"use strict";n.d(e,{Vph:function(){return s}});var r=n(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),u=function(){return u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function f(t){return t&&t.map((function(t,e){return r.createElement(t.tag,u({key:e},t.attr),f(t.child))}))}function a(t){return function(e){return r.createElement(l,u({attr:u({},t.attr)},e),f(t.child))}}function l(t){var e=function(e){var n,o=t.attr,i=t.size,f=t.title,a=c(t,["attr","size","title"]),l=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,a,{className:n,style:u(u({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),f&&r.createElement("title",null,f),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}function s(t){return a({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#616161"},child:[{tag:"rect",attr:{x:"34.6",y:"28.1",transform:"matrix(.707 -.707 .707 .707 -15.154 36.586)",width:"4",height:"17"}},{tag:"circle",attr:{cx:"20",cy:"20",r:"16"}}]},{tag:"rect",attr:{x:"36.2",y:"32.1",transform:"matrix(.707 -.707 .707 .707 -15.839 38.239)",fill:"#37474F",width:"4",height:"12.3"}},{tag:"circle",attr:{fill:"#64B5F6",cx:"20",cy:"20",r:"13"}},{tag:"path",attr:{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"}}]})(t)}}}]);
//# sourceMappingURL=897.60de459b.chunk.js.map