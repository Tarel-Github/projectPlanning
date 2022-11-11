const mongoose = require("mongoose");

const missonSchema = new mongoose.Schema({
    projectId: {
        type: Number,
        required: true,
    },
    title: {
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

module.exports = mongoose.model(`Project`, missonSchema);  //DB에 User라는 이름의 폴더를 생성한다.
