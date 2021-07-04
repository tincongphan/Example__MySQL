
const express = require('express');
const userRouter = express.Router()

const { getListUserController,
        detailUserController,
        updateUserController,
        createUserController,
        deleteUserController } = require('../../controllers/userController/userController');
        

//    api get list user
//    http://localhost:7000/api/users
userRouter.get('/', getListUserController)


//    api detail user
//    http://localhost:7000/api/users/:id
userRouter.get("/:id", detailUserController)


//    api update user
//    http://localhost:7000/api/users/:id
userRouter.put("/:id", updateUserController)


//    api create user
//    http://localhost:7000/api/users
userRouter.post("/", createUserController)


//   api delete user  
//   http://localhost:7000/api/users/:id
userRouter.delete("/:id", deleteUserController)

module.exports = { userRouter }