document.querySelector(".feedback-form").addEventListener("input",(function(e){var t,a=e.target.name,o=e.target.value,l=null!==(t=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==t?t:{};console.log(l),"email"===a?l.email=o:"message"===a&&(l.message=o),console.log(l),localStorage.setItem("feedback-form-state",JSON.stringify(l))}));
//# sourceMappingURL=03-feedback.04bde39d.js.map
