import { renderTasks } from "./renderer.js";
import { setItem } from "./storage.js";
import { deleteTask, getTasksList } from "./tasksGateway.js";
import { onToggleTask } from "./updateTask.js";

export const onDeleteTask = (e) => {
  const isDelete = e.target.classList.contains("list__item__delete-btn");

  if (!isDelete) {
    onToggleTask();
  }

  deleteTask(e.target.dataset.id)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem("tasksList", newTasksList);
      renderTasks();
    });
};
