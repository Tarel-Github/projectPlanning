const express = require('express');
const router = express.Router();

const user = require('./user/user.route');
//const plan = require('./plan/plan.route');
const project = require('./project/project.route');
//const todo = require('./todo/todo.route');

router.use('/user', user);
//router.use('/post', plan);
router.use('/project', project);
//router.use('/todo', todo);


module.exports = router;
