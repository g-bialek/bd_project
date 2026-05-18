import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { getTeamById } from "../services/teamService";
import { getTeamInfo } from "../services/teamInfoService";

const TeamDetailsPage = () => {
    const {id} = useParams();

    const [team, setTeam] = useState(null);

    const [teamInfo, setTeamInfo] = useState(null);

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

        const fetchTeamInfo = async () => {

            try {

                const data = await getTeamInfo(id);

                setTeamInfo(data);

            } catch (error) {

                console.error(error);
            }
        };

        fetchTeam();
        fetchTeamInfo();

    }, [id]); 

    if(!team){
        return <h1>Loading...</h1>
    }

    return(
        <div className="page-container">
            <h1>Drużyna: {team.name}</h1>
            <h2>Miasto: {team.city}</h2>
            <h2>Trener: {team.coach.firstName} {team.coach.lastName}</h2>
            <h2>Stadion: {team.stadium.name}, {team.stadium.city}. Pojemność: {team.stadium.capacity}</h2>

            {teamInfo && (

                <div>

                    <h2>Informacje o klubie</h2>

                    <p>

                        <strong>Rok założenia:</strong>

                        {" "}
                        {teamInfo.founded}

                    </p>

                    <p>

                        <strong>Opis:</strong>

                        {" "}
                        {teamInfo.description}

                    </p>

                </div>
            )}

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

