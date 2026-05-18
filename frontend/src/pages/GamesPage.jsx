import {useEffect, useState} from "react";
import {Link} from "react-router-dom"

import { getAllGames } from "../services/gameService";
import { deleteGame } from "../services/gameService";

const GamesPage = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () =>{
            try {
                const data = await getAllGames();

                setGames(data);
            }
            catch(error){
                console.error(error);
            }
        };

        fetchGames();
    }, []);

    const handleDelete = async (id) => {

        const confirmed = window.confirm(
            "Czy na pewno chcesz usunąć ten mecz?"
        );

        if (!confirmed) {
            return;
        }

        try {

            await deleteGame(id);
            setGames((prevGames) =>
                prevGames.filter(
                    (game) => game.id_meczu !== id
                )
            );

        } catch (error) {

            console.error(error);
        }
    };

    return (
        <div className="page-container">
            <h1>Wszystkie mecze:</h1>

            {games.map((game) => (
                <div className="page-container" key={game.id_meczu}>
                    <h2>{game.gospodarze} | {game.gospodarze_gole} : {game.goscie_gole} | {game.goscie}</h2>
                    <h3>{game.data_meczu.slice(0,10)}</h3>
                    <Link to={`/games/${game.id_meczu}`}>
                        <button>Szczegóły</button>
                    </Link>
                    <Link to={`/games/${game.id_meczu}/edit`}>
                        <button>Edytuj</button>
                    </Link>
                    <button onClick={() => handleDelete(game.id_meczu)}>Usuń</button>
                </div>
            ))}
        </div>
    );
};

export default GamesPage;
