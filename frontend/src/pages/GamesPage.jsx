import {useEffect, useState} from "react";
import {Link} from "react-router-dom"

import { getAllGames } from "../services/gameService";

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

    return (
        <div>
            <h1>Wszystkie mecze:</h1>

            {games.map((game) => (
                <div key={game.id_meczu}>
                    <h2>{game.gospodarze} | {game.gospodarze_gole} : {game.goscie_gole} | {game.goscie}</h2>
                    <h3>{game.data_meczu.slice(0,10)}</h3>
                    <Link to={`/games/${game.id_meczu}`}>
                        <button>Szczegóły</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GamesPage;
