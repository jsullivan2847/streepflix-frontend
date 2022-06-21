import { Link } from "react-router-dom";
const UserSelect = (props) => {
    return(
        <div className="user-select-container">
            <h1>UserSelect</h1>
            {props.profiles.map(profile => (
                <div className="user" key = {profile._id}>
                    <h3>{profile.name}</h3>
                    <Link to={`${profile._id}/edit`}>
                        <h3> &#9998;</h3>
                    </Link>
                    </div>
            ))}
            <Link to="/new"><h1><span className="add-user-link">+ Add User</span></h1></Link>
        </div>
    )
}

export default UserSelect;