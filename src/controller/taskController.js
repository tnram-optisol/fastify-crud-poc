const {
  saveTask,
  findAllTask,
  findTaskById,
  updateTaskById,
  deleteTask,
  getCompletedTasks,
} = require("../services/taskService");

async function addTask(req, reply) {
  try {
    const res = await saveTask(req.body);
    reply.send(res);
  } catch (error) {
    console.log(error);
  }
}

async function getAllTasks(req, reply) {
  try {
    if (req.query.task) {
      return await findAllTask(req.query.task);
    }
    const res = await findAllTask();
    reply.send(res);
  } catch (error) {
    console.log(error);
  }
}

async function getTaskById(req, reply) {
  const id = req.params.id;
  try {
    const res = await findTaskById(id);
    reply.send(res);
  } catch (error) {
    console.log(error);
  }
}

async function updateTask(req, reply) {
  const id = req.params.id;
  try {
    const res = await updateTaskById(id, req.body);
    reply.send(res);
  } catch (error) {
    console.log(error);
  }
}

async function removeTask(req, reply) {
  const id = req.params.id;
  try {
    const res = await deleteTask(id);
    reply.send(res);
  } catch (error) {
    console.log(error);
  }
}

async function getCompletedTask(req, reply) {
  try {
    const res = await getCompletedTasks();
    reply.send(res);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  updateTask,
  removeTask,
  getCompletedTask,
};
