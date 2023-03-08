const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("task", TaskSchema);
