
const express = require('express');
const sign_inRouter = express.Router();
const { sign_inController } = require('../../controllers/sign_inController/sign_inController');


// http://localhost:7000/api/auth_sign_in
sign_inRouter.post("/", sign_inController)

module.exports = {
    sign_inRouter
}