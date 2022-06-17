import { useState } from 'react'

const UserEdit = (props) => {

    const id = props.match.params.id
    const profile = props.profile
    const me = profile.find(p => p._id === id);

    const [editForm, setEditForm] = useState(me)

    const handleChange = (evt) => {
        setEditForm({...editForm, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.editProfile(editForm, me._id);
        props.history.push("/");
    }
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