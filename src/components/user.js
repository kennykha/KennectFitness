import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('/test')
        .then((response) => console.log('Response from server/db: ', response.data))
        .catch((err) => console.log(err))
    })
    return (
        <div className='grid'>
        <a href='/' className='card'>
            <h1>Kenny</h1>
        </a>
        <a href='/' className='card'>
            <h1>Christine</h1>
        </a>
        </div>
    )
}

export default User;