import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input');
const inputMessage = form.querySelector('textarea');

const saveUser = throttle(() => {
  const userForm = {
    email: inputEmail.value,
    message: inputMessage.value,
  }
  console.log(JSON.stringify(userForm));
  localStorage.setItem("feedback-form-state", JSON.stringify(userForm))
}, 500);

form.addEventListener('input', saveUser);

const savedUserInfo = () => {
  const savedUser = localStorage.getItem("feedback-form-state");

  if (savedUser) {
    const parseUserDate = JSON.parse(savedUser);
    inputEmail.value = parseUserDate.email;
    inputMessage.value = parseUserDate.message;
  }
}

document.addEventListener('DOMContentLoaded', savedUserInfo)

const submitUserDate = (e) => {
  e.preventDefault();
  const formData = {
  email: inputEmail.value,
  message: inputMessage.value,
  };
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  inputEmail.value = '';
  inputMessage.value = '';
}

form.addEventListener('submit', submitUserDate)