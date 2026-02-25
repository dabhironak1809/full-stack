import React from 'react'

import { useState } from 'react'

export default function count() {

    const [countn, setcount] = useState(0);

    return (
        <div className='flex flex-col justify-center text-center'>

            <h2> btn count = {countn}</h2>

            <button onClick={() => setcount(countn + 1)} className='bg-indigo-500 text-white mt-5'>increase</button>

        </div>
    )
}
