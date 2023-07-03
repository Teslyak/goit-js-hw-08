const throttle = require('lodash.throttle');
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input[name="email"]'),
    message: document.querySelector('.feedback-form textarea[name="message"]')
};

if (localStorage.getItem('feedback-form-state'))  {
    refs.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email ?? "";
    refs.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message ?? "";
} 

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onBtnSubmit);

function onInputForm(event) {
    const inputLabel = event.target.name;
    const inputValue = event.target.value;
    const obj = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
    if (inputLabel === "email") {
        obj.email = inputValue;
    } else if (inputLabel === "message") {
         obj.message = inputValue;
    };   
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};

function onBtnSubmit(event) {
    event.preventDefault();
    if (!refs.email.value || !refs.message.value) {
        alert('Please enter your email and message');
    };
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    refs.form.reset();
    localStorage.removeItem('feedback-form-state');
};