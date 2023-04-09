import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name=email]');
const messageInput = feedbackForm.querySelector('textarea[name=message]');

console.log(feedbackForm.innerHTML);
console.log(emailInput.innerHTML);
console.log(messageInput.innerHTML);

// Save state to local storage
const saveState = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

emailInput.addEventListener('input', throttle(saveState, 500));
messageInput.addEventListener('input', throttle(saveState, 500));

// Load state from local storage
const loadState = () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

window.addEventListener('load', loadState);

// Clear local storage on submit
feedbackForm.addEventListener('submit', () => {
  localStorage.removeItem('feedback-form-state');
});
