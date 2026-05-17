import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../services/gameService";

const GameDetailPage = () => {
    const {id} = useParams();

    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchGame = async () =>{
            try{
                const data = await getGameById(id)

                setGame(data)
            }

            catch(error){
                console.error(error);
            }

            
        }

        fetchGame();
    }, [id])

    if(!game){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{game.gospodarze} | {game.gospodarze_gole} : {game.goscie_gole} | {game.goscie}</h1>
            <h2>Miejsce meczu: {game.stadion}</h2>
            <h2>Runda rozgrywek: {game.runda_rozgrywek}</h2>
            <h2>Data spotkania: {game.data_meczu.slice(0,10)}</h2>
            <h2>Skład sędziowski:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Rola</th>
                    </tr>
                </thead>
                <tbody>
                    {game.sedziowie.map((sedzia) => (
                        <tr key={sedzia.rola}>
                            <td>{sedzia.imie_sedziego}</td>
                            <td>{sedzia.nazwisko_sedziego}</td>
                            <td>{sedzia.rola}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GameDetailPage;