import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import { getAllReferees } from "../services/refreeService";
import { getAllTeams } from "../services/teamService";
import { createGame } from "../services/gameService";

const CreateGamePage = () => {
    const [teams, setTeams] = useState([]);
    const [refrees, setRefrees] = useState([]);

    const [formData, setFormData] = useState({
        gospodarze_id: "",
        goscie_id: "",
        stadion_id: "",
        data_meczu: "",
        runda_rozgrywek: "",
        gospodarze_gole: "",
        goscie_gole: "",
        sedzia_glowny_id: "",
        sedzia_var_id: ""
    });

    const handleChange = (e) => {

       const { name, value } = e.target;

        let updatedData = {
            ...formData,
            [name]: value
        };

        if (name === "gospodarze_id") {

            const selectedTeam = teams.find(
                (team) => team.id_druzyny == value
            );

            updatedData.stadion_id = selectedTeam.stadion;
        }

        setFormData(updatedData);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.gospodarze_id === formData.goscie_id || formData.sedzia_glowny_id === formData.sedzia_var_id) {

            alert("Drużyna nie może grać sama ze sobą / sędzia nie może pełnić dwóch funckji na raz!");

            return;
        }

        try {

            await createGame(formData);
            navigate("/games");

        } catch (error) {

            console.error(error);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeams = async () =>{
            try{
                const data1 = await getAllTeams();

                setTeams(data1);
            }
            catch(error){
                console.error(error);
            }
        }

        fetchTeams();

        const fetchRefrees = async () =>{
            try{
                const data2 = await getAllReferees();

                setRefrees(data2);
            }
            catch(error){
                console.error(error);
            }
        }

        fetchRefrees();
    }, [])

    return (
        <div>
            <h1>Dodaj mecz</h1>
            <div>
                <form onSubmit={handleSubmit}>
                <h2>Gospodarze: <select name="gospodarze_id" value={formData.gospodarze_id} onChange={handleChange}>
                        <option value="">
                            Wybierz drużynę
                        </option>
                        {teams.map((team) => (
                            <option key={team.id_druzyny} value={team.id_druzyny}>
                                {team.nazwa_druzyny}
                            </option>
                        ))}
                    </select>
                    <input type="number" min={0} name="gospodarze_gole" value={formData.gospodarze_gole} onChange={handleChange}></input>
                    :
                    <input type="number" min={0} name="goscie_gole" value={formData.goscie_gole} onChange={handleChange}></input>
                    Goscie: <select name="goscie_id" value={formData.goscie_id} onChange={handleChange}>
                    <option value="">
                            Wybierz drużynę
                    </option>
                    {teams.map((team) => (
                        <option key={team.id_druzyny} value={team.id_druzyny}>
                            {team.nazwa_druzyny}
                        </option>
                    ))}
                    </select>
                </h2>

                <h3>Sędzia główny: 
                    <select name="sedzia_glowny_id" value={formData.sedzia_glowny_id} onChange={handleChange}>
                        <option value="">
                            Wybierz sędziego
                        </option>
                        {refrees.map((ref) => (
                            <option key={ref.id_sedziego} value={ref.id_sedziego}>
                                {ref.nazwisko_sedziego}
                            </option>
                        ))}
                    </select>
                    Sędzia VAR: 
                    <select name="sedzia_var_id" value={formData.sedzia_var_id} onChange={handleChange}>
                        <option value="">
                            Wybierz sędziego
                        </option>
                        {refrees.map((ref) => (
                            <option key={ref.id_sedziego} value={ref.id_sedziego}>
                                {ref.nazwisko_sedziego}
                            </option>
                        ))}
                    </select>
                </h3>
                <h3>Runda rozgrywek: <input type="number" min={0} name="runda_rozgrywek" value={formData.runda_rozgrywek} onChange={handleChange}></input></h3>
                <h3>Data meczu: <input type="date" name="data_meczu" value={formData.data_meczu} onChange={handleChange}></input></h3>
            
                <button type="submit">Dodaj mecz</button>
                </form>
            </div>
        </div>
        
    )
}

export default CreateGamePage