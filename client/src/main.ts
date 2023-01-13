const mainForm = document.querySelector('.form__wrap');

mainForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = (document.querySelector('.email-input') as HTMLInputElement).value;
  const password = (document.querySelector('.password-input') as HTMLInputElement).value;
});
