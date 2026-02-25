import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const useUser = () => ({ user: null, loading: false })

function dynamivalue() {
    const router = useRouter();
    const { query } = router

    // this functinality work to user are not validate or not logi to that redirect on home page that are validate on user to back to home page .. 
    // const useUser = () => ({ user: null, loading: false })
    const user = useUser();
    useEffect(() => {
        if (user.user == null) {
            // router.replace('/name/r')
            router.replace('/')
        }
    }, [router, user.user])

    // const { query } = useRouter()
    return (
        <div>
            <p>dynamic name :{' => '}{query.username}</p>

            {/* <button onClick={() =>router.push('/')}>back</button> */}
            <button onClick={(e) => router.replace('/')} className="mt-5 border-amber-50 bg-amber-700" >back</button>
            <button onClick={(e)=>router.reload()} >Relod</button>

        </div>
    )
}

export default dynamivalue
