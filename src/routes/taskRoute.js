const taskController = require("../controller/taskController");

function taskRouter(fastify, options, done) {
  /**
   * Add New task
   */
  fastify.post("/task/add", taskController.addTask);
  /**
   * Get all tasks
   */
  fastify.get("/task/all", taskController.getAllTasks);
  /**
   * Get task by id
   */
  fastify.get("/task/:id", taskController.getTaskById);
  /**
   * Update task by id
   */
  fastify.patch("/task/update/:id", taskController.updateTask);
  /**
   * Delete task
   */
  fastify.delete("/task/remove/:id", taskController.removeTask);
  /**
   * View completed tasks
   */
  fastify.get("/task/getCompleted", taskController.getCompletedTask);
  /**
   * Search for tasks data
   */
  fastify.get("/task/search", taskController.getAllTasks);
  done();
}

module.exports = taskRouter;
