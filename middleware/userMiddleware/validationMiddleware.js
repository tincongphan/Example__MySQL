// Middleware is a function between request and response same as controller.
// But its has more next parameter.
// It's use check, validation... We can add a lot of middleware

const checkExistMiddleware = (Model) => async (req, res, next) => {
    const { id } = req.params;
    try {
        const userExist = await Model.findOne({ where: { id } })
        if (userExist) {
            console.log(userExist);
            next()
            // when we call next() programming will continue run
        } else {
            res.status(404).send("Not Found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    checkExistMiddleware
}