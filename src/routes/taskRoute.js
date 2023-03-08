const taskController = require("../controller/taskController");

function taskRouter(fastify, options, done) {
  fastify.post("/task/add", taskController.addTask);
  fastify.get("/task/all", taskController.getAllTasks);
  fastify.get("/task/:id", taskController.getTaskById);
  fastify.patch("/task/update/:id", taskController.updateTask);
  fastify.delete("/task/remove/:id", taskController.removeTask);
  done();
}

module.exports = taskRouter;
