const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
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
        timestamps: true
    }
);

module.exports = mongoose.model(`File`, fileSchema);  //DB에 User라는 이름의 폴더를 생성한다.
