const express = require('express');
const router = express.Router();

const user = require('./user/user.route');
const post = require('./plan/plan.route');
const project = require('./project/project.route');
const todo = require('./todo/todo.route');

router.use('/user', user);
router.use('/post', post);
router.use('/project', project);
router.use('/todo', todo);


module.exports = router;
