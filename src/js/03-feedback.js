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

function inputMonitor(event) {
    const inputFromForm = {
        email: inputEmail.value,
        message: inputMessage.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(inputFromForm));
    console.log(inputFromForm);
}
function submit(event) {
    event.preventDefault();
    console.log(parsedInputs);
    inputEmail.value = '';
    inputMessage.value = '';
}









// const form = document.querySelector('.feedback-form');
// // console.dir(form.elements[0].value);

// const savedInputs = localStorage.getItem('feedback-form-state');
// const parsedInputs = JSON.parse(savedInputs);
// // console.log(parsedInputs)
// if (parsedInputs !== null) {
//     form.elements[0].value = parsedInputs.email;
//     form.elements[1].value = parsedInputs.message;
// }
// // form.addEventListener('submit', inputMonitor);

// // form.addEventListener('input', inputMonitor);
// form.addEventListener('sabmit', submit);
// form.addEventListener('input', throttle(inputMonitor, 500));


// function inputMonitor(event) {
//     // console.dir(event.target)
//     event.preventDefault();
//     const inputFromForm = {
//         email: event.currentTarget.elements[0].value,
//         message: event.currentTarget.elements[1].value,
//     }
//     localStorage.setItem('feedback-form-state', JSON.stringify(inputFromForm))
//     console.log(inputFromForm);
// }
// function submit(event) {
//     // console.dir(event.target)
//     event.preventDefault();
//     // const inputFromForm = {
//     //     email: event.currentTarget.elements[0].value,
//     //     message: event.currentTarget.elements[1].value,
//     // }
//     // localStorage.setItem('feedback-form-state', JSON.stringify(inputFromForm))
//     console.log(parsedInputs);
//     event.currentTarget.reset();
// }
// form.reset();
