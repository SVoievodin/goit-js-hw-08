import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');
const submitButton = document.querySelector('button');

const savedInputs = localStorage.getItem('feedback-form-state');
const parsedInputs = JSON.parse(savedInputs);
// console.log(parsedInputs)

//__звернення до сховища___
if (parsedInputs !== null) {
    inputEmail.value = parsedInputs.email;
    inputMessage.value = parsedInputs.message;
}

form.addEventListener('input', throttle(inputMonitor, 500));
// монітор введення
function inputMonitor(event) {
    event.preventDefault();
    inputFromForm = {
        email: inputEmail.value,
        message: inputMessage.value,
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(inputFromForm))
    console.log(inputFromForm);
}
// слухач кнопки САБМІТ --- чому не працює?????
submitButton.addEventListener('submit', submit);
function submit(event) {
    event.preventDefault();
    form.reset();
    localStorage.removeItem('feedback-form-state')
    inputEmail.value = '';
    inputMessage.value = '';
    console.log(parsedInputs);
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
