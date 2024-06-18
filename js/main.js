
const deleteBtn = document.querySelector(".delete");
const form2 = document.getElementById("login__form");
const passwordInput = document.getElementById("current-password");
const mails = document.getElementById("mail__success");
const box = document.getElementsByClassName("box")[0];

form2.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emails = mails.value;
  const passwordSuccess = passwordInput.value;

  box.innerHTML = `
    <p class='paragraf'>parol:${passwordSuccess}</p>
    <p class='paragraf'>mail:${emails}</p>
    <button class='edit__btn'>tahrirlash</button>
    <button class="delete">o'chirish</button>
  `;


  const deleteButton = box.querySelector(".delete");
  deleteButton.addEventListener('click', () => {
    form2.reset();
    box.innerHTML = "";
  });
});