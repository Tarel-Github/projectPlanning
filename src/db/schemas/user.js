const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true,
    },
    identifier: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
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

module.exports = mongoose.model(`User`, user); //DB에 User라는 이름의 폴더를 생성한다.
