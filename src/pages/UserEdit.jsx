import { Link } from 'react-router-dom';
import { useState } from 'react'

const UserEdit = ({match, profiles, history, editProfile, deleteProfile}) => {
    const id = match.params.id
    // const profiles = props.profiles
    const profile = profiles.find(p => p._id === id);

    // console.log(profiles);
    
    
    const [editForm, setEditForm] = useState(profile)
    
    const handleChange = (evt) => {
        setEditForm({...editForm, [evt.target.name]: evt.target.value})
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        editProfile(editForm, profile._id);
        history.push("/");
    }

    const handleClick = () => {
        deleteProfile(id)
    }
    // console.log(props);
    
    return(
        <div className='user-edit-page'>
            <div className='editTitle'>
                <h2>Edit Profile</h2>
            </div>

            <div className='profileImg'>
        <img src={profile.image} alt={profile.name} />
            </div>

            <div className='input'>
        <form onSubmit={handleSubmit}>

            <input type="text" name="name" onChange={handleChange} value={editForm.name} ></input> <br/>
            <input type="text" name="image" onChange={handleChange} value={editForm.image} ></input> <br/>

            <button>Edit Profile</button>
        </form>
        
        <Link to ="/login">
        <button className='delete' onClick={handleClick}>Delete Profile</button>
        </Link>
            </div>
        </div>
    )
}

export default UserEdit;