import Link from 'next/link'
import React from 'react'

export default function home() {
    return (
        <div className='flex flex-col gap-10 text-center mt-10'>
            <h1 className='bg-purple-300 py-10 text-black'>this is a help page </h1>

            <Link href={"/"}>Back</Link>
        </div>
    )
}


// import { FormEvent } from 'react'
// import { useRouter } from 'next/router'

// export default function LoginPage() {
//     const router = useRouter()

//     async function handleSubmit(event) {
//         event.preventDefault()

//         const formData = new FormData(event.currentTarget)
//         const email = formData.get('email')
//         const password = formData.get('password')

//         const response = await fetch('/api/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password }),
//         })

//         if (response.ok) {
//             router.push('/profile')
//         } else {
//             // Handle errors
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} className='flex flex-col'>
//             <input type="email" name="email" placeholder="Email" required />
//             <input type="password" name="password" placeholder="Password" required />
//             <button type="submit">Login</button>
//         </form>
//     )
// }