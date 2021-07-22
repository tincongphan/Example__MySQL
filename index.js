const express = require('express');
const app = express()
const port = 7000
const { rootRouter } = require('./routers/rootRouter/rootRouter');
const { graphqlSchema } = require('./graphql/schema');
const { graphqlResolvers } = require('./graphql/resolvers');
// settup cors
const cors = require("cors")
app.use(cors())
// settup graphql
const { graphqlHTTP } = require("express-graphql")
app.use("/graphql", graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
}))


// express.json() to help server can read data json from front end. When they create a newUser in postman
app.use(express.json())

// http://localhost:7000/api
app.use("/api", rootRouter)


// settup static path file
const path = require('path');
const pathPublicDirectory = path.join(__dirname, "./public")
// console.log(pathPublicDirectory);
// E:\cyberSoft\BackEnd\code\code ở nhà\push_github_MySQL\public

app.use("/public", express.static(pathPublicDirectory))



// First programming start here with url: http://localhost:7000 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})