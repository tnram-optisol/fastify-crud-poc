const Task = require("../models/TaskModel");
const mongoose = require("mongoose");

async function saveTask(task) {
  const res = await Task.create(task);
  return res;
}
async function findAllTask() {
  const res = await Task.find();
  return res;
}
async function findTaskById(id) {
  const res = await Task.findById(id);
  if (res) {
    return res;
  } else {
    return "No Task";
  }
}

async function updateTaskById(_id, task) {
  const taskData = await Task.findByIdAndUpdate(_id, {
    completed: task.completed,
  });
  return taskData;
}

async function deleteTask(_id) {
  const res = await Task.findByIdAndDelete(_id);
  if (res) {
    return res;
  } else {
    return "No Task Found";
  }
}
module.exports = {
  saveTask,
  findAllTask,
  findTaskById,
  updateTaskById,
  deleteTask,
};
