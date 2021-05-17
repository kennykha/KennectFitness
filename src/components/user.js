import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './userCard';

const User = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('/getUsers')
        .then((response) => {
            console.log('Response from server/db: ', response.data)
            setUsers(users = response.data);
            console.log('User State: ', users)
        })
        .catch((err) => console.log(err))
    }, []);

    return (
        <div className='grid'>
        {users.map((user) => 
            <UserCard name={user} test='teststring'/>
        )}
        </div>
    )
}

export default User;