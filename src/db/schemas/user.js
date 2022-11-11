const mongoose = require("mongoose");

const missonSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    email: {
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
        timestamps: true
    }
);

module.exports = mongoose.model(`User`, missonSchema);  //DB에 User라는 이름의 폴더를 생성한다.
