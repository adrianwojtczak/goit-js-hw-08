!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var i,r,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(S,t),d?b(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function S(){var e=p();if(w(e))return O(e);f=setTimeout(S,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&i?b(e):(i=r=void 0,u)}function h(){var e=p(),n=w(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(S,t),b(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=T(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(T(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},h.flush=function(){return void 0===f?u:O(p())},h}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),w=j.querySelector("input[name=email]"),S=j.querySelector("textarea[name=message]");console.log(j.innerHTML),console.log(w.innerHTML),console.log(S.innerHTML);var O=function(){var e={email:w.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))};w.addEventListener("input",e(t)(O,500)),S.addEventListener("input",e(t)(O,500));window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(w.value=e.email,S.value=e.message)})),j.addEventListener("submit",(function(){localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.0a8ad56d.js.map
