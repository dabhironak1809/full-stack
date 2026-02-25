import Link from 'next/link'
import React from 'react'

// this is a server compone to then make easy for a async using 

export default async function blog() {

  // db(data base) call [server side data fetch ]

  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await data.json();

  // local data fetch     
  // const posts = [
  //   {
  //     id: 1,
  //     title: 'post 1',
  //     body: 'body 1'
  //   },
  //   {
  //     id: 2,
  //     title: 'post 2',
  //     body: 'body 2'
  //   }
  // ]
  return (
    <>
      <div className='flex flex-col flex-wrap mx-20  mt-10'>
        <h1>blog posts </h1>
        {posts.map((post) => (
          <div className='border mt-2 items-start flex flex-col p-5'>
            <Link href={`/blog/${post.id}`}>
              <h2 className='text-indigo-400 text-start ' >{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </div>
        ))}

      </div>
    </>
  )
}
