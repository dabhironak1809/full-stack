import React, { useEffect, useState } from 'react'

function index() {

    const [users, setusers] = useState([]);
    console.log("users", users);


    useEffect(() => {
        async function fetchUser() {
            const data = await fetch('https://dummyjson.com/users')
            setusers(await data.json());
        }

        fetchUser();
    }, [])

    return (
        <div>
            <h1>user</h1>
            {users && users.users && users.users.map((user) => (
                <li className='ml-2' key={user.id}>{user.firstName}</li>
            ))}
        </div>
    )
}

export default index
