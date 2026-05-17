import {useEffect, useState} from "react";
import {Link} from "react-router-dom"

import { getAllTeams } from "../services/teamService";

const TeamsPage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () =>{
            try {
                const data = await getAllTeams();

                setTeams(data);
            }
            catch(error){
                console.error(error);
            }
        };

        fetchTeams();
    }, []);

    return (
        <div>
            <h1>Drużyny Ligi:</h1>

            {teams.map((team) => (
                <div key={team.id_druzyny}>
                    <h2>{team.nazwa_druzyny}</h2>
                    <p>{team.miasto_druzyny}</p>
                    <Link to={`/teams/${team.id_druzyny}`}>
                        <button>Szczegóły</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TeamsPage;