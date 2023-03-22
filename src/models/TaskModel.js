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
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("task", TaskSchema);
