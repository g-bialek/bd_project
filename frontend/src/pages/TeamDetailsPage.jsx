import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { getTeamById } from "../services/teamService";

const TeamDetailsPage = () => {
    const {id} = useParams();

    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchTeam = async () =>{
            try{
                const data = await getTeamById(id);

                setTeam(data);
            }

            catch(error){
                console.error(error);
            }
        };

        fetchTeam();
    }, [id]); 

    if(!team){
        return <h1>Loading...</h1>
    }

    return(
        <div>
            <h1>Drużyna: {team.name}</h1>
            <h2>Miasto: {team.city}</h2>
            <h2>Trener: {team.coach.firstName} {team.coach.lastName}</h2>
            <h2>Stadion: {team.stadium.name}, {team.stadium.city}. Pojemność: {team.stadium.capacity}</h2>

            <h2>Zawodnicy:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Pozycja</th>
                        <th>Numer</th>
                        <th>Data urodzenia</th>
                        <th>Narodowość</th>
                    </tr>
                </thead>
                <tbody>
                    {team.players.map((player) => (
                        <tr key={player.id_zawodnika}>
                            <td>{player.imie_zawodnika}</td>
                            <td>{player.nazwisko_zawodnika}</td>
                            <td>{player.pozycja_zawodnika}</td>
                            <td>{player.numer_zawodnika}</td>
                            <td>{player.data_urodzenia_zawodnika.slice(0,10)}</td>
                            <td>{player.narodowosc_zawodnika}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TeamDetailsPage;

