const { User } = require("../models")
const graphqlResolvers = {
    async user(params) {
        const { id } = params;
        try {
            const userDetail = await User.findOne({ where: { id } })
            return (userDetail)
        } catch (error) {
            throw new Error(`Error in resolvers user detail ${error}`)
        }
    },
    async users() {
        try {
            const userList = await User.findAll()
            return userList
        } catch (error) {
            throw new Error(`Error in resolvers user list ${error}`)
        }
    },
    async createUser(params) {
        const { inputUser } = params
        try {
            const user = await User.create(inputUser)
            return user
        } catch (error) {
            throw new Error(`Error in resolvers user create ${error}`)
        }
    },
    async updateUser(params) {
        const { inputUser, id } = params
        try {
            await User.update(inputUser, { where: { id } })
            const userUpdate = await User.findByPk(id)
            return userUpdate
        } catch (error) {
            throw new Error(`Error in resolvers user update ${error}`)
        }
    },
    async removeUser(params) {
        const { id } = params
        try {
            const userRemove = User.findByPk(id)
            await User.destroy({ where: { id } })
            return userRemove
        } catch (error) {
            throw new Error(`Error in resolvers user remove ${error}`)
        }
    }

}

module.exports = {
    graphqlResolvers
}