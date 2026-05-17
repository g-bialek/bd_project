import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav 
            style={{
                backgroundColor: "#eaeaea",
                padding: "20px"
            }}>
            <ul style={{
                display: "flex",
                gap: "20px",
                listStyle: "none",
                padding: 0,
                margin: 0,
                backgroundColor: "#eaeaea"
            }}>

                <li >
                    <Link to="/" style={{margin: "20px"}}>
                        Drużyny
                    </Link>
                    <Link to="/games" style={{margin: "20px"}}>
                        Mecze
                    </Link>
                    <Link to="/table" style={{margin: "20px"}}>
                        Tabela
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;