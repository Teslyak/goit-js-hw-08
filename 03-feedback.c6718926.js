var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,u=f||l||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return u.Date.now()};function g(e,t,n){var o,a,r,i,f,l,u=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=a;return o=a=void 0,u=t,i=e.apply(r,n)}function S(e){return u=e,f=setTimeout(j,t),c?y(e):i}function O(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-u>=r}function j(){var e=d();if(O(e))return h(e);f=setTimeout(j,function(e){var n=t-(e-l);return g?m(n,r-(e-u)):n}(e))}function h(e){return f=void 0,b&&o?y(e):(o=a=void 0,i)}function k(){var e=d(),n=O(e);if(o=arguments,a=this,l=e,n){if(void 0===f)return S(l);if(g)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),i}return t=p(t)||0,v(n)&&(c=!!n.leading,r=(g="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),k.cancel=function(){void 0!==f&&clearTimeout(f),u=0,o=l=a=f=void 0},k.flush=function(){return void 0===f?i:h(d())},k}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=a.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),g(e,t,{leading:o,maxWait:t,trailing:a})};const b={form:document.querySelector(".feedback-form"),email:document.querySelector('.feedback-form input[name="email"]'),message:document.querySelector('.feedback-form textarea[name="message"]')};var y,S;localStorage.getItem("feedback-form-state")&&(b.email.value=null!==(y=JSON.parse(localStorage.getItem("feedback-form-state")).email)&&void 0!==y?y:"",b.message.value=null!==(S=JSON.parse(localStorage.getItem("feedback-form-state")).message)&&void 0!==S?S:"");b.form.addEventListener("input",t((function(e){const t=e.target.name,n=e.target.value;var o;const a=null!==(o=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==o?o:{};console.log(a),"email"===t?a.email=n:"message"===t&&(a.message=n);localStorage.setItem("feedback-form-state",JSON.stringify(a))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault(),b.email.value&&b.message.value||alert("Please enter your email and message");console.log("email:",b.email.value),console.log("message:",b.message.value),b.form.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.c6718926.js.map
