const db = require("../db/db")

const getTable = async(req,res) =>{
    try{
        const [table] = await db.query(`
            SELECT
                d.id_druzyny,
                d.nazwa_druzyny,

                COUNT(m.id_meczu) AS rozegrane_mecze,

                SUM(
                    CASE

                        WHEN d.id_druzyny = m.gospodarze_id
                        AND m.gospodarze_gole > m.goscie_gole

                        THEN 1

                        WHEN d.id_druzyny = m.goscie_id
                        AND m.goscie_gole > m.gospodarze_gole

                        THEN 1

                        ELSE 0

                    END
                ) AS zwyciestwa,

                SUM(
                    CASE

                        WHEN d.id_druzyny = m.gospodarze_id
                        AND m.gospodarze_gole = m.goscie_gole

                        THEN 1

                        WHEN d.id_druzyny = m.goscie_id
                        AND m.goscie_gole = m.gospodarze_gole

                        THEN 1

                        ELSE 0

                    END
                ) AS remisy,

                SUM(
                    CASE

                        WHEN d.id_druzyny = m.gospodarze_id
                        AND m.gospodarze_gole < m.goscie_gole

                        THEN 1

                        WHEN d.id_druzyny = m.goscie_id
                        AND m.goscie_gole < m.gospodarze_gole

                        THEN 1

                        ELSE 0

                    END
                ) AS porazki,

                SUM(
                
                    CASE 
                        WHEN d.id_druzyny = m.gospodarze_id
                        THEN m.gospodarze_gole

                        WHEN d.id_druzyny = m.goscie_id
                        THEN m.goscie_gole

                        ELSE 0

                    END
                
                ) AS gole_zdobyte,

                SUM(
                
                    CASE 
                        WHEN d.id_druzyny = m.gospodarze_id
                        THEN m.goscie_gole
                           
                        WHEN d.id_druzyny = m.goscie_id
                        THEN m.gospodarze_gole

                        ELSE 0

                    END
                
                ) AS gole_stracone,

                SUM(
                    CASE

                        WHEN d.id_druzyny = m.gospodarze_id
                        AND m.gospodarze_gole > m.goscie_gole

                        THEN 3

                        WHEN d.id_druzyny = m.goscie_id
                        AND m.goscie_gole > m.gospodarze_gole

                        THEN 3

                        WHEN d.id_druzyny = m.gospodarze_id
                        AND m.gospodarze_gole = m.goscie_gole

                        THEN 1

                        WHEN d.id_druzyny = m.goscie_id
                        AND m.goscie_gole = m.gospodarze_gole

                        THEN 1

                        ELSE 0

                    END
                ) AS punkty

            FROM druzyny d

            LEFT JOIN mecze m
                ON d.id_druzyny = m.gospodarze_id
                OR d.id_druzyny = m.goscie_id

            GROUP BY
                d.id_druzyny,
                d.nazwa_druzyny

            ORDER BY punkty DESC
        `)

        res.json(table)
    }

    catch(error){
        console.error(error);

        res.status(500).json({
            message: "Database error"
        });
    }

   
};

module.exports = {
    getTable
}