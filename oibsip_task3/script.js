const taskInput = document.getElementById('task');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="complete" onclick="completeTask(this.parentElement)">Complete</button>
      <span class="edit" onclick="editTask(this.parentElement)">Edit</span>
      <span class="delete" onclick="deleteTask(this.parentElement)">Delete</span>
    `;
    pendingTasksList.appendChild(li);
    taskInput.value = '';
  }
}

function editTask(task) {
  const taskTextElement = task.querySelector('.task-text');
  const newTaskText = prompt('Edit task:', taskTextElement.innerText);
  if (newTaskText !== null) {
    taskTextElement.innerText = newTaskText;
  }
}

function deleteTask(task) {
  task.remove();
}

function completeTask(task) {
  const taskTextElement = task.querySelector('.task-text');
  taskTextElement.classList.toggle('completed');

  const completeButton = task.querySelector('.complete');
  completeButton.remove();

  completedTasksList.appendChild(task);
}
