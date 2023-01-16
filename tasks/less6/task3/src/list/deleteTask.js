import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const onDeleteTask = (e) => {
  const isDelete = e.target.classList.contains('list__item__delete-btn');
  if (!isDelete) {
    return;
  }
  const id = e.target.dataset.id;
  const listElem = document.querySelector('.list__item');
  const deleteBtn = document.querySelector('.list__item__delete-btn');
  deleteTask(id);
  if (id === undefined) {
    return listElem.remove();
  }
  deleteBtn.addEventListener('click', deleteTask);
  renderTasks();
};
