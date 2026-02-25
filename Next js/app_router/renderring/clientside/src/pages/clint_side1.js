import { useEffect, useState } from "react";

export default function Userclint_sides1() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // fetch("https://dummyjson.com/users")
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json()).then((data) => {
                // setUsers(data.users);  // first api
                // setUsers(data); // second api
                setLoading(false);

                // // both api  one type declare use both to at one define 
                const usersArray = data.users || data; // works for both APIs to some data.user || some data to both support this 
                setUsers(usersArray);
            });
    }, []);

    if (loading) {
        return <h2>Loading users...</h2>;
    }

    return (
        <div>
            <h1>Users List (Client Side Rendering)</h1>
            <ul>
                {/* {users.map((user) => ( */}
                {users.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {''} == {''} {user.email}
                        {/* {user.name} – {user.email}    */}
                    </li>
                ))}
            </ul>
        </div>
    );
}