const express = require('express');
const app = express()
const port = 7000
const { rootRouter } = require('./routers/rootRouter/rootRouter');

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