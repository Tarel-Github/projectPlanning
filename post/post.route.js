const express = require('express');
const router = express.Router();

const PostController = require('./post.controller');
const postController = new PostController;

router.get('/', postController.getPosts);



module.exports = router;


//구현 기능: 포스트 전체보기, 포스트 상세보기, 포스트 작성하기, 포스트 수정하기, 포스트 삭제하기