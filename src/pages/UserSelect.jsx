import { Link } from "react-router-dom";
const UserSelect = (props) => {
    return(
        <div>
            <h1>UserSelect</h1>
            {props.profiles.map(profile => (
                <div key = {profile._id}>
                    <Link to={`${profile._id}/edit`}>
                    <h3>{profile.name}</h3>
                    </Link>
                    </div>
            ))}
        </div>
    )
}

export default UserSelect;