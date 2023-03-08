const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 8080;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

fastify.register(require("./routes/taskRoute"));

fastify.get("/", (req, reply) => {
  reply.send({ res: "Hello World from Fastify" });
});

const startServer = async () => {
  try {
    fastify.listen({ port: PORT });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

startServer();
