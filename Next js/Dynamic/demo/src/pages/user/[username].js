import { useRouter } from 'next/router'
import React from 'react'

function dynamicusername() {
    const { query } = useRouter();
    return (
        <div>
            <p>dynamic name {query.username} </p>
        </div>
    )
}

export default dynamicusername
