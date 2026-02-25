export async function getServerSideProps() {
    // This runs on the SERVER before page loads
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res = await fetch("https://dummyjson.com/users"); 
    // const res = await fetch("http://localhost:1111/mobile"); //local api for my own leaptop 
    const data = await res.json();
    return {
        props: {
            data, // Send data to the page component
        },
    };
}

export default function Users({ data }) {
    return (
        <div>
            <h1>Users List (Server Side Rendering)</h1>
            <ul>
                {/* {users.users.map(user => ( */}
                {data.map(user => (
                    <li key={user.id}>
                        {user.name} — {user.email}
                        {/* {user.firstName} — {user.email} */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
