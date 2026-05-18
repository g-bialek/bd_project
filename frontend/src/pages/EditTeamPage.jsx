import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { editTeam } from "../services/teamService";
import { getTeamById } from "../services/teamService";

const EditTeamPage = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [formData, setFormData] = useState({

        nazwa_druzyny: "",
        miasto_druzyny: "",

        nazwa_stadionu: "",
        lokalizacja_stadionu: "",
        pojemnosc_stadionu: "",

        imie_trenera: "",
        nazwisko_trenera: "",
        narodowosc_trenera: "",
        data_urodzenia_trenera: ""

    });

    useEffect(() => {

    const fetchTeam = async () => {

        try {

            const teamData = await getTeamById(id);

            console.log(teamData)

            setFormData({

                ...teamData,

                pojemnosc_stadionu: String(
                    teamData.pojemnosc_stadionu
                ),

                data_urodzenia_trenera:
                new Date(teamData.data_urodzenia_trenera)
                    .toISOString()
                    .split("T")[0]
                });

        } catch (error) {

            console.error(error);
        }
    };

    fetchTeam();

}, [id]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            console.log("Befoer edit")
            await editTeam(id, formData);
            console.log("After edit")
            console.log("Befoer navigate")
            navigate(`/teams/${id}`);
            console.log("After navigate")

        } catch (error) {

            console.error(error);
        }
    };

    return (

        <div className="page-container">

            <h1>Edytuj drużynę</h1>

            <form onSubmit={handleSubmit}>

                <h2>Dane drużyny</h2>

                <input
                    type="text"
                    name="nazwa_druzyny"
                    placeholder="Nazwa drużyny"
                    value={formData.nazwa_druzyny}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="miasto_druzyny"
                    placeholder="Miasto"
                    value={formData.miasto_druzyny}
                    onChange={handleChange}
                />

                <h2>Stadion</h2>

                <input
                    type="text"
                    name="nazwa_stadionu"
                    placeholder="Nazwa stadionu"
                    value={formData.nazwa_stadionu}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="lokalizacja_stadionu"
                    placeholder="Lokalizacja stadionu"
                    value={formData.lokalizacja_stadionu}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="pojemnosc_stadionu"
                    placeholder="Pojemność stadionu"
                    value={formData.pojemnosc_stadionu}
                    onChange={handleChange}
                />

                <h2>Trener</h2>

                <input
                    type="text"
                    name="imie_trenera"
                    placeholder="Imię trenera"
                    value={formData.imie_trenera}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="nazwisko_trenera"
                    placeholder="Nazwisko trenera"
                    value={formData.nazwisko_trenera}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="narodowosc_trenera"
                    placeholder="Narodowość"
                    value={formData.narodowosc_trenera}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="data_urodzenia_trenera"
                    value={formData.data_urodzenia_trenera}
                    onChange={handleChange}
                />

                <button type="submit">
                    Edytuj drużynę
                </button>

            </form>

        </div>
    );
};

export default EditTeamPage;