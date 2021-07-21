
const express = require('express');
const { listCinema, listCineplex, rawQueryCinema } = require('../../controllers/cinemaController/cinemaController');
const cinemaRouter = express.Router()

cinemaRouter.get("/cinema", listCinema)
cinemaRouter.get("/cineplex", listCineplex)
cinemaRouter.get("/rawquery", rawQueryCinema)


module.exports = {
    cinemaRouter
}


