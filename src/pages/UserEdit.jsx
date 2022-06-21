import { useState } from 'react'

const UserEdit = ({match, profiles, history, editProfile}) => {
    const id = match.params.id
    // const profiles = props.profiles
    const profile = profiles.find(p => p._id === id);

    console.log(profiles);
    

    const [editForm, setEditForm] = useState(profile)
    
    const handleChange = (evt) => {
        setEditForm({...editForm, [evt.target.name]: evt.target.value})
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        editProfile(editForm, profile._id);
        history.push("/");
    }
    // console.log(props);
    
    return(
        <div>
        <h1>UserEdit Component</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} value={editForm.name} ></input> <br/>
            <input type="text" name="image" onChange={handleChange} value={editForm.image} ></input> <br/>
            <button>Edit Profile</button>
        </form>
        </div>
    )
}

export default UserEdit;