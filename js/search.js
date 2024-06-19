


function filterFunction() {
    var input, filter, dropdown, options, i;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    dropdown = document.getElementById('mydropdown');
    options = document.getElementsByName('a');
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = options[i].innerText.toUpperCase().includes(filter) ? "block" : "none";
    }
  };


function btn() {
    drop = document.querySelector('.dropdown');
        drop.classList.toggle("btn")             
};