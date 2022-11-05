const PostService = require('./post.service');

class PostsController {
    postService = new PostService();

    getPosts = async (req, res, next) =>{

    }


}

module.exports = PostsController;