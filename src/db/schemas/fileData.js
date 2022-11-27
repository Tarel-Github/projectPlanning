const mongoose = require("mongoose");

const fileData = new mongoose.Schema(
  {
    fileDataId: {
      type: Number,
      required: true,
      unique: true,
    },
    fileId: {
      type: Number,
      required: true,
    },

    fileImage: {
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

module.exports = mongoose.model(`FileData`, fileData);
