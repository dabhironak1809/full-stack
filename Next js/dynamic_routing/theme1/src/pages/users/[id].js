// import { useParams } from 'next/navigation'
// import { useRouter } from 'next/router'
// import React from 'react'

// function dynamic(params) {
//     // const {id} = useParams();
//     const router = useRouter()
//     const { id } = router.query;
//     return (
//         <div>
//             your id {id}
//             <button onClick={() => router.back()} className="mt-5 bg-gray-200 text-black px-4 py-2 rounded">
//                 Go Back
//             </button>

//         </div>
//     )
// }

// export default dynamic


// ==========

import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

import React from 'react'

function dynamic(params) {
    const users = [
        { id: 1, name: "Rahu", email: "rahul@gmail.com", age: 22 },
        { id: 2, name: "Amit", email: "amit@gmail.com", age: 25 },
        { id: 3, name: "Neha", email: "neha@gmail.com", age: 23 },
    ];
    // app routing using this 
    // const { id } = useParams();

    const router = useRouter()
    const { id } = router.query;

    if (!id) return <p>data login ..</p>

    // const user = users.find((u) => u.id == Number(id));
    const user = users.find((u) => u.id == (id));

    if (!user) {
        return <h2>user not found</h2>
    }

    return (
        <div className="flex flex-col   items-center">
            your id : {user.id}
            <p>name {user.name}</p>
            <p>email : {user.email}</p>
            <p>agr : {user.age}</p>

            <button onClick={() => router.back()} className="mt-5 bg-gray-200 text-black px-4 py-2 rounded">
                Go Back
            </button>
            <button onClick={(e) => router.reload()} >Relod</button>


        </div>
    )
}

export default dynamic








