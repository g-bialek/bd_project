import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createTeam } from "../services/teamService";

const CreateTeamPage = () => {

    const navigate = useNavigate();

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

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createTeam(formData);

            navigate("/");

        } catch (error) {

            console.error(error);
        }
    };

    return (

        <div>

            <h1>Dodaj drużynę</h1>

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
                    Dodaj drużynę
                </button>

            </form>

        </div>
    );
};

export default CreateTeamPage;