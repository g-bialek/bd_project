import { useState } from "react";

import { searchPlayers } from "../services/playersService";

const PlayersPage = () => {

    const [query, setQuery] = useState("");

    const [players, setPlayers] = useState([]);

    const handleSearch = async () => {

        try {

            const data = await searchPlayers(query);

            setPlayers(data);

        } catch (error) {

            console.error(error);
        }
    };

    return (

        <div>

            <h1>Wyszukiwarka zawodników</h1>

            <input
                type="text"
                placeholder="Wpisz imię lub nazwisko"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={handleSearch}>
                Szukaj
            </button>

            <div>

                {players.map((player) => (

                    <div key={player.id_zawodnika}>

                        <h3>
                            {player.imie_zawodnika} {player.nazwisko_zawodnika}
                        </h3>
                        <p>
                            {player.nazwa_druzyny}
                        </p>
                        <p>
                            {player.pozycja_zawodnika}
                        </p>
                        <p>
                            {player.numer_zawodnika}
                        </p>
                        <p>
                            {player.data_urodzenia_zawodnika.slice(0,10)}
                        </p>
                        <p>
                            {player.narodowosc_zawodnika}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default PlayersPage;