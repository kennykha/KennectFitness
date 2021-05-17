const UserCard = ({name}) => {
    console.log('name', name)
    console.log('name.user', name.user)
    if (name) {
        return (
            <a href='/' className='card'>
                <h1>{name.user}</h1>
            </a>
        )
    } else {
        return null;
    }
}

export default UserCard;