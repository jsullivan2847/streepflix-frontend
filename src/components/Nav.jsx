import { Link } from "react-router-dom";

const Nav = ({user}) => {

    const userNav = () => {
            return (
                <div className="nav-user">
                    {/* <p className="nav-user">{user.name}</p> */}
                    <Link to={`${user._id}/edit`}>
                    <img className="user-thumbnail"src={user.image} alt={user.name} />
                    </Link>
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