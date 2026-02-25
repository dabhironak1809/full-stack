import React from 'react'

const server_side2 = (props) => {
    console.log("props", props);
    return (
        <div>user server side 2
            <ul>
                {/* inside to that first */}
                {
                    props.data.users.map((user) => <li key={user.id}>{user.firstName} : {'-'} : {user.email}</li>)
                }
                {/* props.data.map(user => <li key={user.id}>{user.name}</li>) */}
                {/* second fetc mate  */}
            </ul>
        </div>
    )
}
export const getServerSideProps = async () => {
    // console.log("a task is going on in server");

    const data = await (await fetch('https://dummyjson.com/users')).json() //object -> data.users lagadvu page -:- DummyJSON: data.users is the array


    // const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json() //Array ->data only data j chale -:- JSONPlaceholder: data itself is the array


    return {
        props: {
            // name: "ronak",
            data
        },
    };
};
export default server_side2