const express = require('express');
const { userRouter } = require('../userRouter/userRouter');
const rootRouter = express.Router()

// http://localhost:7000/api/users
rootRouter.use("/users", userRouter)

module.exports = { rootRouter }
