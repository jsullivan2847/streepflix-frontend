const UserSelect = (props) => {
    return(
        <div>
            <h1>UserSelect</h1>
            {props.profiles.map(profile => (
                <div key = {profile._id}>
                    <h3>{profile.name}</h3>
                    </div>
            ))}
        </div>
    )
}

export default UserSelect;