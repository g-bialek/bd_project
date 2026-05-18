import {useEffect, useState} from "react";
import {Link} from "react-router-dom"

import { getAllTeams } from "../services/teamService";
import { deleteTeam } from "../services/teamService";

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

    const handleDelete = async (id) => {

        const confirmed = window.confirm(
            "Czy na pewno chcesz usunąć tę drużynę?"
        );

        if (!confirmed) {
            return;
        }

        try {

            await deleteTeam(id);

            setTeams((prevTeams) =>
                prevTeams.filter(
                    (team) => team.id_druzyny !== id
                )
            );

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message
                || "Nie udało się usunąć drużyny"
            );
        }
    };

    return (
        <div className="page-container">
            <h1>Drużyny Ligi:</h1>

            {teams.map((team) => (
                <div key={team.id_druzyny}>
                    <h2>{team.nazwa_druzyny}</h2>
                    <p>{team.miasto_druzyny}</p>
                    <Link to={`/teams/${team.id_druzyny}`}>
                        <button>Szczegóły</button>
                    </Link>
                    <Link to={`/teams/${team.id_druzyny}/edit`}>
                        <button>Edytuj</button>
                    </Link>
                    <button onClick={()=>handleDelete(team.id_druzyny)}>
                        Usuń
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TeamsPage;