import { renderTasks } from './renderer';
import { setItem } from './storage';
import { deleteTask, getTasksList } from './tasksGateway';

export const onDeleteTask = (e) => {
  const { id } = e.target.dataset;
  deleteTask(id)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
