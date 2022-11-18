const mongoose = require("mongoose");

const todo = new mongoose.Schema(
  {
    todoId: {
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
    check: {
      type: Boolean,
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

module.exports = mongoose.model(`Todo`, todo); //DB에 User라는 이름의 폴더를 생성한다.
