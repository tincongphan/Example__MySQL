
const jwt = require('jsonwebtoken');

// authenticate: xác thực đăng nhập hay chưa
const authenticateMiddleware = (req, res, next) => {

    const token = req.header("token")
    try {
        const secretKey = "benxemiendong"
        const decoded = jwt.verify(token, secretKey)  // Note: when verify need 2 parameter: secretKey (created in sign_inController) & token
        // req is object.
        req.user = decoded  // add new key: user into object req
        next()
    } catch (error) {
        res.status(401).send("Bạn chưa đăng nhập")
    }
}

// authorize: phân quyền
const authorizeMiddleware = (arrRole) => (req, res, next) => {
    const { user } = req
    if (arrRole.findIndex(role => user.role === role) !== -1) {
        next()
    } else {
        res.send("Bạn không có quyền")
    }
}
module.exports = {
    authenticateMiddleware,
    authorizeMiddleware
}