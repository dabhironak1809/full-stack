import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function clint_side2() {

    // first method to data fetch as a normal data fetch 

    // const [users, setUsers] = useState([]);

    // useEffect(() => {

    //     async function fetchuser() {
    //         const response = await fetch('https://dummyjson.com/users');
    //         const data = await response.json();
    //         setUsers(data.users)
    //         // setUsers(await data.json());

    //     console.log('API response:', data);        // full response
    //     console.log('Users array:', data.users);   // users list
    // }
    //     fetchuser();
    //     console.log("user", users);
    // }, [])

    //  this a second to fetch data for using a SWR to fetch a data  [this to main data fetch time store on a local stroage ]

    const { data, error } = useSWR("https://dummyjson.com/users", fetcher)
    // const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)
    console.log("data", data);

    if (error) {
        return (
            <div>error</div>
        )
    }

    if (!data) return <h1>loading.....</h1>

    return (
        <div className='ml-10 '>

            <h1>user</h1>

            {/* {users && users.users && users.users.map((user) => <li key={user.id}>{user.firstName}</li>)} */}

            {/* first to data fetch  */}
            {/* <ul>
                {users.map((user) => (
                    <li key={user.id} >
                        <Link href={`/users/${user.id}`}>{user.firstName}</Link>
                    </li>
                ))}
            </ul> */}

            {/* second to using a swr to data fetch x */}
            <ul>
                {data.users.map((user) => (
                    <li key={user.id} >
                        <Link href={`/users/${user.id}`}>{user.firstName}</Link>
                        {/* <Link href={`/users/${user.id}`}>{user.name}</Link> */}
                    </li>
                ))}
            </ul>




        </div>
    )
}
