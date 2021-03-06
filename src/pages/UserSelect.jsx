import { Link } from "react-router-dom";
const UserSelect = (props) => {
    const handleClick = (e) => {
        props.selectUser(e.target.attributes.id.nodeValue)
        props.history.push("/")
    }
    const loaded = () => {
        return <div className="user-select-container">
        <h1>Select A User</h1>
        {props.profiles.map(profile => (
            <div className="user" key = {profile._id}>
                <img className="posters-container"src={profile.image} onClick={handleClick} id={profile._id}></img>
                <div className="user-controls">
                    <h3>{profile.name}</h3>
                <Link to={`${profile._id}/edit`}>
                    <h3 className="posters-container mirror"> &#9998;</h3>
                </Link>
                </div>
                </div>
        ))}
        <Link to="/new"><h1><span className="add-user-link">+ Add User</span></h1></Link>
    </div>
    }
    const loading = () => {
        return <div className="spinner">
        </div>
    }
    return(
        props.profiles ? loaded(): loading()
       
    )
}

export default UserSelect;