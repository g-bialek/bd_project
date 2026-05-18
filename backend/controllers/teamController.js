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
                t.narodowosc_trenera,
                t.data_urodzenia_trenera,

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
            nazwa_druzyny: teamRows[0].nazwa_druzyny,
            city: teamRows[0].miasto_druzyny,
            miasto_druzyny: teamRows[0].miasto_druzyny,

            coach: {
                firstName: teamRows[0].imie_trenera,
                lastName: teamRows[0].nazwisko_trenera,
            },

            imie_trenera: teamRows[0].imie_trenera,
            nazwisko_trenera: teamRows[0].nazwisko_trenera,
            narodowosc_trenera: teamRows[0].narodowosc_trenera,
            data_urodzenia_trenera: teamRows[0].data_urodzenia_trenera,

            stadium: {
                name: teamRows[0].nazwa_stadionu,
                city: teamRows[0].lokalizacja_stadionu,
                capacity: teamRows[0].pojemnosc_stadionu
            },

            nazwa_stadionu: teamRows[0].nazwa_stadionu,
            lokalizacja_stadionu: teamRows[0].lokalizacja_stadionu,
            pojemnosc_stadionu: teamRows[0].pojemnosc_stadionu,

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

const createTeam = async (req, res) => {

    try {

        const {

            nazwa_druzyny,
            miasto_druzyny,

            nazwa_stadionu,
            lokalizacja_stadionu,
            pojemnosc_stadionu,

            imie_trenera,
            nazwisko_trenera,
            narodowosc_trenera,
            data_urodzenia_trenera

        } = req.body;

        const [stadionResult] = await db.query(`
            INSERT INTO stadiony (
                nazwa_stadionu,
                lokalizacja_stadionu,
                pojemnosc_stadionu
            )
            VALUES (?, ?, ?)
        `, [
            nazwa_stadionu,
            lokalizacja_stadionu,
            pojemnosc_stadionu
        ]);

        const stadionID = stadionResult.insertId;

        const [trainerResult] = await db.query(`
            INSERT INTO trenerzy (
                imie_trenera,
                nazwisko_trenera,
                narodowosc_trenera,
                data_urodzenia_trenera
            )
            VALUES (?, ?, ?, ?)
        `, [
            imie_trenera,
            nazwisko_trenera,
            narodowosc_trenera,
            data_urodzenia_trenera
        ]);

        const trainerID = trainerResult.insertId;

        const [teamResult] = await db.query(`
            INSERT INTO druzyny (
                nazwa_druzyny,
                miasto_druzyny,
                stadion,
                trener
            )
            VALUES (?, ?, ?, ?)
        `, [
            nazwa_druzyny,
            miasto_druzyny,
            stadionID,
            trainerID
        ]);

        res.status(201).json({
            message: "Drużyna utworzona",
            teamID: teamResult.insertId
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }
};

const updateTeam = async (req,res) => {
    try {
        const {id} = req.params;

        const {
            nazwa_druzyny,
            miasto_druzyny,

            nazwa_stadionu,
            lokalizacja_stadionu,
            pojemnosc_stadionu,

            imie_trenera,
            nazwisko_trenera,
            narodowosc_trenera,
            data_urodzenia_trenera
        } = req.body

        const [teamRows] = await db.query(`
            SELECT 
                stadion,
                trener
            FROM druzyny
            WHERE id_druzyny = ?  
        `, [id]);

        if(teamRows.length === 0){
             return res.status(404).json({
                message: "Drużyna nie istnieje"
            });
        }

        const stadionID = teamRows[0].stadion;
        const trenerID = teamRows[0].trener;

        await db.query(`
            UPDATE druzyny 
            SET 
                nazwa_druzyny = ?,
                miasto_druzyny = ?
            WHERE id_druzyny = ?
        `, [nazwa_druzyny, miasto_druzyny, id]);

        await db.query(`
            UPDATE stadiony
            SET 
                nazwa_stadionu = ?,
                lokalizacja_stadionu = ?,
                pojemnosc_stadionu = ?
            WHERE id_stadionu = ?    
        `, [nazwa_stadionu, lokalizacja_stadionu, pojemnosc_stadionu, stadionID])

        await db.query(`
            UPDATE trenerzy
            SET
                imie_trenera = ?,
                nazwisko_trenera = ?,
                narodowosc_trenera = ?,
                data_urodzenia_trenera = ?
            WHERE id_trenera = ?    
        `, [imie_trenera, nazwisko_trenera, narodowosc_trenera, data_urodzenia_trenera, trenerID]);

        res.json({
            message: "Edytowano drużyne"
        })
    }

    catch(error){
        
        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }
}

const deleteTeam = async (req,res) => {
    try {
        const {id} = req.params;

        const [gameRows] = await db.query(`
            SELECT id_meczu
            FROM mecze
            WHERE 
                gospodarze_id = ?
                OR goscie_id = ?
        `, [id,id]);

        if(gameRows.length > 0){
            return res.status(400).json({
                message: "Nie można usunąć drużyny posiadającej mecze"
            });
        }

        await db.query(`
            DELETE FROM zawodnicy
            WHERE druzyna_zawodnika = ?
        `, [id]);

        await db.query(`
            DELETE FROM druzyny
            WHERE id_druzyny = ?    
        `, [id])

        res.json({
            message: "Drużyna usunięta"
        });
    }

    catch (error){
        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }
}

module.exports = {
    getAllTeams,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
}