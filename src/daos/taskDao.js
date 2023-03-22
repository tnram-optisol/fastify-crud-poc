/**
 * This file is to seperate database from services
 */
const Task = require("../models/TaskModel");
const mongoose = require("mongoose");

async function saveTask(taskData) {
  return await Task.create(taskData);
}

async function getAllTask(taskData) {
  return await Task.find();
}

async function updateTask(_id, task) {
  const taskData = await Task.findByIdAndUpdate(_id, {
    completed: task.completed,
  });
  return taskData;
}

async function removeTask(_id) {
  const res = await Task.findByIdAndDelete(_id);
  if (res) {
    return res;
  } else {
    return "No Task Found";
  }
}

async function getTaskById(id) {
  const res = await Task.findById(id);
  if (res) {
    return res;
  } else {
    return "No Task";
  }
}

async function searchTasks(task) {
  const res = await Task.find({ task: task });
  if (res.length > 0) {
    return res;
  }
  return "No task found";
}

async function getCompletedTasks() {
  const res = await Task.find({ completed: true });
  if (res) {
    return res;
  } else {
    return "No Task Found";
  }
}

module.exports = {
  saveTask,
  getAllTask,
  updateTask,
  removeTask,
  getTaskById,
  searchTasks,
  getCompletedTasks,
  getAllTask,
};
