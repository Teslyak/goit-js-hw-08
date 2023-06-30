const refs = {
    form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', onInputForm);
 const obj = {

    };
function onInputForm(event) {
   
    const inputLabel = event.target.name;
    const inputValue = event.target.value;
    const obj = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
    console.log(obj);
    if (inputLabel === "email") {
        obj.email = inputValue;
    } else if (inputLabel === "message") {
         obj.message = inputValue;
    }   
    console.log(obj);
    
    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};