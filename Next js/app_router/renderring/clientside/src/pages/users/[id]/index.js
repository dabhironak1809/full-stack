import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


const Index = () => {
    const [usersinfo, setUsersinfo] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    // first type to data fetch 

    // useEffect(() => {
    //     // if (!id) return;

    //     async function getUserById() {
    //         const response = await fetch(`https://dummyjson.com/users/${id}`);
    //         const data = await response.json();
    //         setUsersinfo(data);
    //     }

    //     getUserById();
    // }, [id]);


    // const { data, error } = useSWR(`https://dummyjson.com/users/${id}`, fetcher)
    const { data, error, isLoading } = useSWR(id ? `https://dummyjson.com/users/${id}` : null, fetcher)
    console.log("data", data);


    // this a optional to [?] not define to that require.  
    // if (!usersinfo) return <h2>Loading...</h2>;
    if (isLoading) return <h2>loading..</h2>;
    if (error) return <h2>error loading user</h2>;
    if (!id) return null;


    return (
        <div className='ml-10'>
            {/* <h1>{usersinfo?.firstName}</h1>
            <h2>{usersinfo?.email}</h2> */}

            {/* <h1>{usersinfo.firstName}</h1>
            <h2>{usersinfo.email}</h2> */}

            <h1>{data.firstName}</h1>
            <h2>{data.email}</h2>

            <button onClick={() => router.back()} className='mt-10 ml-10 bg-white text-black py-2 px-5'>Back</button>
        </div>


    );
};

export default Index;
