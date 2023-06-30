const refs = {
    form: document.querySelector('.feedback-form'),
};

console.log(refs.form);

refs.form.addEventListener('input', onInputForm);

function onInputForm(event) {
  console.log(event.currentTarget);  
};