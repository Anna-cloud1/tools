const baseUrl = `https://63a8af9c100b7737b983b748.mockapi.io/api/v1/task`;

const mapTasks = (tasks) => {
  tasks.map((_id, ...rest) => ({ id: rest.id, ...rest }));
};

export const getTasksList = () => {
  return fetch(baseUrl).then((response) => response.json())
    .then((tasks) => tasks.map((task) => ({ ...task, id: task.id })));
};

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};
