const taskDao = require("../daos/taskDao");

async function saveTask(task) {
  return await taskDao.saveTask(task);
}
async function findAllTask(task) {
  if (task) {
    return await taskDao.searchTasks(task);
  }
  return await taskDao.getAllTask();
}
async function findTaskById(id) {
  return await taskDao.getTaskById(id);
}

async function updateTaskById(_id, task) {
  return taskDao.updateTask(_id, task);
}

async function deleteTask(_id) {
  return taskDao.removeTask(_id);
}

async function getCompletedTasks() {
  return await taskDao.getCompletedTasks();
}
module.exports = {
  saveTask,
  findAllTask,
  findTaskById,
  updateTaskById,
  deleteTask,
  getCompletedTasks,
};
