import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const UserCard = ({name}) => {
    let [userClicked, setClicked] = useState(false);

    const clicked = (e) => {
        console.log('clicked', e.target.innerText);
        axios.get(`/user/${e.target.innerText}`)
        .then((success) => {
            console.log('clicked successfully to get', success)
            setClicked(true);
        })
        .catch((err) => console.log(err))
    }

    if (name) {
        return (
            <Link to={`/user/${name.user}`} className='card'>
                <a onClick={(e) => clicked(e)}>
                    <h1 >{name.user}</h1>
                </a>
            </Link>
        )
    } else {
        return null;
    }
}

export default UserCard;