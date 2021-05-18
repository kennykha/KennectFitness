import React, { useState } from 'react';
import axios from 'axios';

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
            <a onClick={(e) => clicked(e)} className='card'>
                <h1 >{name.user}</h1>
            </a>
        )
    } else {
        return null;
    }
}

export default UserCard;