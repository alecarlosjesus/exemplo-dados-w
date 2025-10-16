import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <nav>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/sobre">sobre</Link>
            <span> | </span>
            <Link to="/cad">Cadastro</Link>
            <span> | </span>
            <Link to="/contato">Contato</Link>
        </nav>
    );
}