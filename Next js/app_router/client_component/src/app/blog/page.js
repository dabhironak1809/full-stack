// // import Link from 'next/link'
// import  { Suspense } from 'react'
// import post from './component/post';


// // this is a server compone to then make easy for a async using 
// export default async function blog() {

//   // db(data base) call [server side data fetch ]

//   // const data = await fetch("https://jsonplaceholder.typicode.com/posts")

//   // const posts = await data.json();

//   // =====================

//   // local data fetch 
//   // const posts = [
//   //   {
//   //     id: 1,
//   //     title: 'post 1',
//   //     body: 'body 1'
//   //   },
//   //   {
//   //     id: 2,
//   //     title: 'post 2',
//   //     body: 'body 2'
//   //   }
//   // ]

//   const promise = fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json());
//   return (
//     <>
//       <div>

//         <h1>blog posts </h1>

//         <Suspense fallback={<div>Loading...</div>}>
//           <post promise={promise  } />

//         </Suspense>


//       </div>
//     </>
//   )

// }


import { Suspense } from "react";
import Post from "./component/post";

export default async function Blog() {
  const promise = fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then(res => res.json());

  return (
    <div>
      <h1>Blog posts</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <Post promise={promise} />
      </Suspense>
    </div>
  );
}
