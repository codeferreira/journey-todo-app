const formData = document.forms['todo'];
const formEl = document.getElementById('todo-form');
const inputEl = document.getElementById('task');
const listEl = document.getElementById('task-list');

const tasks = [
  {id: 1, description: 'Limpar escritorio', finished: true},
  {id: 2, description: 'Varrer Casa', finished: false},
  {id: 3, description: 'Varrer Casa 2', finished: false},
  {id: 4, description: 'Varrer Casa 3', finished: false},
];

function renderTasks(updatedTasks) {
  if (!updatedTasks.length) {
    return;
  }

  listEl.querySelectorAll('li:not(#default-task)').forEach(el => el.remove());

  updatedTasks.forEach(task => renderTask(task));
}

window.addEventListener('load', () => {
  renderTasks(tasks)
})

function renderTask(task) {
  const defaultTask = document.getElementById('default-task').cloneNode(true);

  defaultTask.id = task.id;

  defaultTask.querySelector('div > p').textContent = task.description;
  defaultTask.querySelector('input[type=checkbox]').checked = task.finished;

  defaultTask.querySelector('#delete-button').onclick = () => deleteTask(task.id);
  defaultTask.querySelector('#edit-button').onclick = () => editTask(task.id);

  defaultTask.classList.remove('hidden');
  defaultTask.classList.add('flex');

  listEl.appendChild(defaultTask);
}

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
 
  addTask();

  inputEl.value = '';
});

function addTask() {
  const todo = formData['task'].value;

  const newTask = {
    id: tasks.length + 1,
    description: todo,
    finished: false,
  }

  const updatedTasks = [...tasks, newTask];

  renderTasks(updatedTasks);
}

function deleteTask(id) {
  const updatedTasks = tasks.filter(task => task.id !== id);

  renderTasks(updatedTasks)
}

function editTask(id) {
  const task = document.getElementById(id);

  const taskValue = task.querySelector('div > p').textContent;

  inputEl.value = taskValue;
}