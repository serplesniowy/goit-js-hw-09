document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="message"]');
  const localStorageKey = 'feedback-form-state';

  const savedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  if (savedFormData.email) {
    emailInput.value = savedFormData.email;
  }
  if (savedFormData.message) {
    messageTextarea.value = savedFormData.message;
  }

  form.addEventListener('input', event => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: emailInput.value.trim(),
      message: messageTextarea.value.trim(),
    };

    if (formData.email && formData.message) {
      console.log(formData);

      localStorage.removeItem(localStorageKey);
      emailInput.value = '';
      messageTextarea.value = '';
    } else {
      alert('Please fill out both fields.');
    }
  });
});
