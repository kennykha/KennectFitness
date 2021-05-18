import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './userCard';

const User = () => {
    const [users, setUsers] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false)

    const addUser = () => {
        setShowEditForm(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted')
    }

    //On component render, API call to Express Server
    //Retrieve from SQL DB list of users to render
    useEffect(() => {
        axios.get('/getUsers')
        .then((response) => {
            console.log('Response from server/db: ', response.data)
            setUsers(response.data);
        })
        .catch((err) => console.log(err))
    }, []);

    console.log('User State: ', users)

    return (
    <div className='grid'>
        {users.map((user) => 
            <UserCard name={user}/>
        )}
        <div id='addUser' className='card'>
            {showEditForm ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder ="name"></input>
                    <input type="submit" style={{ display: "none"}} />
                </form>
            ) : (
                <a onClick={() => addUser()} id='addUser'>
                    <h1>+ Add User</h1>
                </a>
            )}
        </div>
    </div>
    )
}

export default User;