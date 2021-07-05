const express = require('express');
const { sign_inRouter } = require('../sign_inRouter/sign_inRouter');
const { userRouter } = require('../userRouter/userRouter');
const rootRouter = express.Router()

// http://localhost:7000/api/users
rootRouter.use("/users", userRouter)

// http://localhost:7000/api/auth_sign_in
rootRouter.use("/auth_sign_in", sign_inRouter)


module.exports = { rootRouter }
