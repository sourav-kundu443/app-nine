import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {id, username, email, cname} = useParams();
    return(
        <div>
            <p>User id: {id}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Company name: {cname}</p>
        </div>
    )
}

export default UserDetails;