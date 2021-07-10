
/*  Steps by steps
1/ npx sequelize --help
2/ npx sequelize init           ====>  initial project. Need to re-change : username & password in config.json
3/ npx sequelize db:create      ====>  connect to DB (create database in MySQL)
4/ npx sequelize model:generate  --name User --attributes name:string,email:string...  ====> create table : User(model) in DB
5/ npx sequelize db:migrate     ====>  migrate uses to create column in table MySQL  
 
*/
const { User } = require("../../models/index")
const bcryptjs = require('bcryptjs');

// upload avatar
const uploadAvatarController = async (req, res) => {
    const { path } = req.file
    const { id } = req.user;
    try {
        const userAvatar = await User.findByPk(id)
        userAvatar.avatar = "http://localhost:7000/" + path
        await userAvatar.save()
        res.status(200).send("upload success")
    } catch (error) {
        res.status(500).send(error)
    }
}

// get list user
const getListUserController = async (req, res) => {
    try {

        const userList = await User.findAll()
        res.status(200).send(userList)
    } catch (error) {
        res.status(500).send(error)
    }
}

// detail user
const detailUserController = async (req, res) => {
    const { id } = req.params
    try {
        const detailUser = await User.findByPk(id)
        res.status(200).send(detailUser)
    } catch (error) {
        res.status(400).send(error)
    }
}

// update user
const updateUserController = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, age, role } = req.body;
    try {

        await User.update({ name, email, phone, age, role }, { where: { id } })

        res.status(200).send({ name, email, phone, age, role })
    } catch (error) {
        res.status(500).send(error)
    }

}

// create user
const createUserController = async (req, res) => {
    const { name, email, password, age, phone, role } = req.body

    // make password security
    const salt = bcryptjs.genSaltSync(5)
    const hashPassword = bcryptjs.hashSync(password, salt)
    try {

        const newUser = await User.create({ name, email, password: hashPassword, age, phone, role })
        res.status(200).send(newUser)

    } catch (error) {
        res.status(500).send(error)
    }
}

// delete user
const deleteUserController = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({
            where: {
                id
            }
        })
        res.status(200).send("Delete success")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getListUserController,
    detailUserController,
    updateUserController,
    createUserController,
    deleteUserController,
    uploadAvatarController
}