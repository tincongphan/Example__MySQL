const { Cinema, Cineplex, sequelize } = require("../../models")

const listCinema = async (req, res) => {
    try {
        const listCinema = await Cinema.findAll({
            include: [
                { model: Cineplex }
            ]
        })
        res.status(200).send(listCinema)
    } catch (error) {
        res.status(500).send(`Error in list cinema controller ${error}`)
    }
}

const listCineplex = async (req, res) => {
    try {
        const listCineplex = await Cineplex.findAll({
            include: [
                { model: Cinema }
            ]
        })
        res.status(200).send(listCineplex)
    } catch (error) {
        res.status(500).send(`Error in list cineplex controller ${error}`)
    }
}

const rawQueryCinema = async (req, res) => {
    const { cineplex_name } = req.query;
    try {
        const data = await sequelize.query(
            `select cinemas.name as "CINEMA_NAME", cineplexes.name as "CINEPLEX_NAME" from bookingmovieticket.cinemas
            inner join cineplexes
            on cineplexes.id = cinemas.cineplexId
            where cineplexes.name = "${cineplex_name}"`
        )
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(`Error in raw Query Cinema controller ${error}`)
    }
}

module.exports = { listCinema, listCineplex, rawQueryCinema }

/*
 - Use include when join 2 table
 - Use req.query when join alot of table 
 */