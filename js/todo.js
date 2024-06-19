// Yangi vazifa qo'shish
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    newTaskInput.value = '';
  }
});

function addTask(taskText) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  const taskCheckbox = document.createElement('input');
  taskCheckbox.type = 'checkbox';
  taskCheckbox.classList.add('task-checkbox');

  const taskLabel = document.createElement('label');
  taskLabel.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "O'chirish";
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
    applyFilters(); // Vazifani o'chirgandan so'ng filtrlarni qo'llash
  });

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);

  document.getElementById('task-list').appendChild(taskItem);

  applyFilters(); // Yangi vazifa qo'shilgandan so'ng filtrlarni qo'llash
}

const filterButtons = document.querySelectorAll('.filter-button');
const taskItems = document.querySelectorAll('.task-item');

function applyFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filterType = button.dataset.filter;
      taskItems.forEach((item) => {
        if (filterType === 'all' || (filterType === 'completed' && item.querySelector('.task-checkbox').checked)) {
          item.style.display = 'flex';
        }
        else if (filterType === 'uncompleted' && !item.querySelector('.task-checkbox').checked){
          item.style.display = 'none';
          
        }else {
          item.style.display = 'none';
        }
      });
    });
  });
}



// if (filterType === 'all' || (filterType === 'completed' && item.querySelector('.task-checkbox').checked) || (filterType === 'uncompleted' && !item.querySelector('.task-checkbox').checked)) {
//   item.style.display = 'flex';
// }