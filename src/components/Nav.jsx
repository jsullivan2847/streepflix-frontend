import { Link } from "react-router-dom";

const Nav = ({user}) => {

    const userNav = () => {
            return (
                <div className="nav">
                    <Link to="/favorites">
                        {/* <h3>My List</h3> */}
                    </Link>
                    <div className="nav-user">
                        <Link to="/login">
                            <h3>Log Out</h3>
                        </Link>
                    <Link to={`${user._id}/edit`}>
                    <img className="user-thumbnail"src={user.image} alt={user.name} />
                    </Link>
                    </div>
                </div>
            )
    }
    return(
        <nav className="nav">
            <Link to="/">
                <h3>Streepflix</h3>
            </Link>
            {user ? userNav() : <h1>not working lol</h1> }
        </nav>
    )
}

export default Nav;