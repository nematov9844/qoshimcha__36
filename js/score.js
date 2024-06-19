
const form = document.getElementById('form');
const input = document.getElementById('input');
// const btn = document.getElementById('btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let score = parseInt(input.value);

  if (score >= 90 && score <= 100) {
    alert("Your score is S");
  } else if (score >= 80 && score <= 89) {
    alert("Your score is A");
  } else if (score >= 70 && score <= 79) {
    alert("Your score is B");
  } else if (score >= 60 && score <= 69) {
    alert("Your score is C");
  } else if (score <= ""){
    alert("Please enter your score")
  } else {
    alert("Your score is below 60");
  }
});