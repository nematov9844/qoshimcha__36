const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInpu = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInpu.value;

  if (username === 'admin' && password === 'admin') {
    window.location.href = '../pages/login.html';
  } else {
    alert(`foydalanuvchi ${username}si no'tog'ri yoki parol ${password} noto'g'ri`);
  }
});


