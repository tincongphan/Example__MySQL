
const { User } = require("../../models/index.js")
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken")

const sign_inController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userSignin = await User.findOne({ where: { email } })
        if (userSignin) {

            // If userSignin exist , check password
            const isAuth = bcryptjs.compareSync(password, userSignin.password)
            if (isAuth) {

                /* Create a Token
                Token include 2 parameters: payload & secretKey.
                Payload shouldn'd include password. Because it's not security and can veriry
                */
                const payload = {
                    id: userSignin.id,
                    email: userSignin.email,
                    role: userSignin.role
                }
                const secretKey = "benxemiendong"
                const token = jwt.sign(payload, secretKey)
                res.status(200).send({ messege: "SignIn success", token })

            } else {
                res.status(400).send("Password invalid")
            }

        } else {
            res.status(404).send("Email invalid")
        }
    } catch (error) {
        res.status(500).send(error)
    }

}

module.exports = { sign_inController }