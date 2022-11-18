const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    planId: {
      type: Number,
      required: true,
      unique: true,
    },
    projectId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
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

module.exports = mongoose.model(`Plan`, planSchema);
