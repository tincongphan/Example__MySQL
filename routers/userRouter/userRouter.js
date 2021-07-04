
const express = require('express');
const userRouter = express.Router()
const { User } = require("../../models/index")
const { getListUserController,
  detailUserController,
  updateUserController,
  createUserController,
  deleteUserController } = require('../../controllers/userController/userController');
const { checkExistMiddleware } = require('../../middleware/userMiddleware/validationMiddleware');


//    api get list user
//    http://localhost:7000/api/users
userRouter.get('/', getListUserController)


//    api detail user
//    http://localhost:7000/api/users/:id
userRouter.get("/:id", checkExistMiddleware(User), detailUserController)


//    api update user
//    http://localhost:7000/api/users/:id
userRouter.put("/:id", checkExistMiddleware(User), updateUserController)


//    api create user
//    http://localhost:7000/api/users
userRouter.post("/", createUserController)


//   api delete user  
//   http://localhost:7000/api/users/:id
userRouter.delete("/:id", checkExistMiddleware(User), deleteUserController)

module.exports = { userRouter }