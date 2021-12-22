import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setUser(response.data);
        })
      }, []);

      if (!user) return null;
    return(
        <div>
            {
                user.map((current, index) => {
                    return(
                        <div key={index}>
                            <Link to={`/userdetails/${current.id}/${current.username}/${current.email}/${current.company.name}`}>{current.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList;