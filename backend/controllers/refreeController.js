const db = require("../db/db");

const getAllReferees = async (req, res) => {

    try {

        const [rows] = await db.query(`
            SELECT *
            FROM sedziowie
        `);

        res.json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }
};

module.exports = {
    getAllReferees
};