import {useEffect, useState} from "react";
import {Link} from "react-router-dom"

import { getTable } from "../services/tableService";

const TablePage = () => {
    const [table, setTable] = useState([]);

    useEffect(() => {
        const fetchTable = async () =>{
            try{
                const data = await getTable();

                setTable(data);
            }
            catch(error){
                console.error(error)
            }
        };

        fetchTable();
    }, []);

    return (
        <div>
            <h1>Tabela Ligowa:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Drużyna</th>
                        <th>Rozegrane mecze</th>
                        <th>Zwycięstwa</th>
                        <th>Remisy</th>
                        <th>Porażki</th>
                        <th>G+</th>
                        <th>G-</th>
                        <th>GD</th>
                        <th>Punkty</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((team) => (
                        <tr key={team.id_druzyny}>
                            <td>{team.nazwa_druzyny}</td>
                            <td>{team.rozegrane_mecze}</td>
                            <td>{team.zwyciestwa}</td>
                            <td>{team.remisy}</td>
                            <td>{team.porazki}</td>
                            <td>{team.gole_zdobyte}</td>
                            <td>{team.gole_stracone}</td>
                            <td>{team.gole_zdobyte - team.gole_stracone}</td>
                            <td>{team.punkty}</td>
                            <td>
                                <Link to={`/teams/${team.id_druzyny}`}>
                                    <button>Przejdź</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablePage