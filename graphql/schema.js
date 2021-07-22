
const { buildSchema } = require('graphql');

const graphqlSchema = buildSchema(`

    type User {
    name: String!
    email: String!
    password: String!
    phone: String!
    role: String!
    avatar: String!
    }

    input InputUser {
    name: String!
    email: String!
    password: String!
    phone: String!
    role: String!
    avatar: String!
    }
    type rootQuery {
        user(id : Int) : User!
        users: [User]!
    }

    type rootMutation {
        createUser(inputUser : InputUser) : User!
        updateUser(inputUser : InputUser, id:Int) : User!
        removeUser(id:Int):User!
    }
    schema{
        query : rootQuery
        mutation: rootMutation
    }

`)

module.exports = { graphqlSchema }