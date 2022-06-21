import { Link } from "react-router-dom";
import AddFavorite from "./AddFavorite";

const Nav = () => {
    return(
        <nav className="nav">
            <Link to="/">
                <h3>Streepflix</h3>
            </Link>
            <Link to="/favorites" className="favs">
                <h3><AddFavorite /></h3>
            </Link>
            <Link to="/login">
                <h3>Log Out / Switch User</h3>
            </Link>
        </nav>
    )
}

export default Nav;