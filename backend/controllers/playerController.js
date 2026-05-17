const db = require("../db/db");

const getAllPlayers = async (req, res) => {

    try {

        const [rows] = await db.query(`
            SELECT
                z.id_zawodnika,
                z.imie_zawodnika,
                z.nazwisko_zawodnika,
                z.pozycja_zawodnika,
                d.nazwa_druzyny
            FROM zawodnicy z

            JOIN druzyny d
                ON z.druzyna_zawodnika = d.id_druzyny

            ORDER BY
                z.nazwisko_zawodnika ASC
        `);

        res.json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }
};

const searchPlayer = async (req, res) => {

    try {

        const { search } = req.query;

        

        const [rows] = await db.query(`
            SELECT
                z.id_zawodnika,
                z.imie_zawodnika,
                z.nazwisko_zawodnika,
                z.pozycja_zawodnika,
                z.numer_zawodnika,
                z.data_urodzenia_zawodnika,
                z.narodowosc_zawodnika,
                d.nazwa_druzyny
            FROM zawodnicy z

            JOIN druzyny d
                ON z.druzyna_zawodnika = d.id_druzyny

            WHERE
                z.imie_zawodnika LIKE ?
                OR z.nazwisko_zawodnika LIKE ?
                OR CONCAT(
                    z.imie_zawodnika,
                    ' ',
                    z.nazwisko_zawodnika
                ) LIKE ?

            ORDER BY
                z.nazwisko_zawodnika ASC
        `, [
            `%${search}%`,
            `%${search}%`,
            `%${search}%`
        ]);

       

        res.json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }

};

module.exports = {
    getAllPlayers,
    searchPlayer
};