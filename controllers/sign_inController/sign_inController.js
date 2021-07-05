
const { User } = require("../../models/index.js")
const bcryptjs = require('bcryptjs');

const sign_inController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userSignin = await User.findOne({ where: { email } })
        if (userSignin) {
            // If userSignin exist , check password
            const isAuth = bcryptjs.compareSync(password, userSignin.password)
            if(isAuth){
                res.status(200).send("SignIn success")
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