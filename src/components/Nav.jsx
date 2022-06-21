import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className="nav">
            <Link to="/">
                <h3>Streepflix</h3>
            </Link>
            <Link to="/favorites" className="favs">
                <h3>myFavorites</h3>
            </Link>
            <Link to="/login">
                <h3>Log Out / Switch User</h3>
            </Link>
        </nav>
    )
}

export default Nav;