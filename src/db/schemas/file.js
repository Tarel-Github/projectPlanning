const mongoose = require("mongoose");

const file = new mongoose.Schema(
  {
    todoId: {
      type: Number,
      required: true,
    },
    projectId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(`File`, file);
