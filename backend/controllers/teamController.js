const db = require("../db/db")

const getAllTeams = async(req,res) => {
    try {
        const [rows] = await db.query(`
            SELECT * 
            FROM druzyny
        `)

        res.json(rows)
    }

    catch(error){
        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }
};

const getTeamById = async(req,res) =>{
    try {
        const {id} = req.params;

        const [teamRows] = await db.query(`
            SELECT 
                d.id_druzyny,
                d.nazwa_druzyny,
                d.miasto_druzyny,
                
                t.imie_trenera,
                t.nazwisko_trenera,

                s.nazwa_stadionu,
                s.lokalizacja_stadionu,
                s.pojemnosc_stadionu

            FROM druzyny d

            JOIN trenerzy t ON d.trener = t.id_trenera

            JOIN stadiony s ON d.stadion = s.id_stadionu

            WHERE d.id_druzyny = ?
        `, [id]);
        
        if (teamRows.length === 0){
            return res.status(404).json({
                message: "Nie znaleziono druzyny!"
            });
        }

        const [playersRow] = await db.query(`
            SELECT
                imie_zawodnika,
                nazwisko_zawodnika,
                pozycja_zawodnika,
                numer_zawodnika,
                data_urodzenia_zawodnika,
                narodowosc_zawodnika
            FROM zawodnicy
            WHERE druzyna_zawodnika = ?  
        `, [id]);

        const team = {
            id: teamRows[0].id_druzyny,
            name: teamRows[0].nazwa_druzyny,
            city: teamRows[0].miasto_druzyny,

            coach: {
                firstName: teamRows[0].imie_trenera,
                lastName: teamRows[0].nazwisko_trenera,
            },

            stadium: {
                name: teamRows[0].nazwa_stadionu,
                city: teamRows[0].lokalizacja_stadionu,
                capacity: teamRows[0].pojemnosc_stadionu
            },

            players: playersRow
        }

        res.json(team);
    }
    
    catch(error){
        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }
}

module.exports = {
    getAllTeams,
    getTeamById
}