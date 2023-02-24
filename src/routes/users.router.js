const { getAll, getOneUser, update, create, remove } = require('../controllers/user.controllers');
const express = require('express');

const usersRouter = express.Router();

usersRouter.route("/")
    .get(getAll)
    .post(create)
usersRouter.route("/:id")
    .delete(remove)
    .get(getOneUser)
    .put(update)

module.exports = usersRouter;