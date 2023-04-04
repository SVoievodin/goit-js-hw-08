import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');
const savedInputs = localStorage.getItem('feedback-form-state');
const parsedInputs = JSON.parse(savedInputs);

if (parsedInputs !== null) {
    inputEmail.value = parsedInputs.email;
    inputMessage.value = parsedInputs.message;
}

form.addEventListener('input', throttle(inputMonitor, 500));
form.addEventListener('submit', submit);

function inputMonitor() {
    const inputFromForm = {
        email: inputEmail.value,
        message: inputMessage.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(inputFromForm));
    console.log(inputFromForm);
}
function submit(event) {
    event.preventDefault();
    const dataLog = {
        email: inputEmail.value,
        message: inputMessage.value,
    };
    console.log(dataLog);
    form.reset();
    localStorage.removeItem('feedback-form-state')
}



