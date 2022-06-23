import { useState } from 'react'

const UserAdd = (props) => {

    const [newForm, setNewForm] = useState({
        name: "",
        image: ""
    })

    const handleChange = (evt) => {
        setNewForm({...newForm, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.createProfile(newForm);
        setNewForm({
            name: "",
            image: ""
        });
        props.history.push('/');
    }

    return(
        <div className='newProfile'>
        <h1>Add A New Profile</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange} placeholder="Profile Name"></input> <br/>
            <input type="text" name="image" onChange={handleChange} placeholder="Placeholder Image URL"></input> <br/>
            <button>Add Profile</button>
        </form>
        </div>
    )
}

export default UserAdd;