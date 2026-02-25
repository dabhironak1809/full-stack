//  import Link from "next/link";

// export default async function Post({ promise }) {
//   const posts = await promise;

//   return (
//     <div>
//       <div className="flex flex-col flex-wrap mx-20 mt-10">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="border mt-2 items-start flex flex-col p-5"
//           >
//             <Link href={`/blog/${post.id}`}>
//               <h2 className="text-indigo-400 text-start">
//                 {post.title}
//               </h2>
//             </Link>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client'
import { use } from "react";
import Link from "next/link";

export default async function Post({ promise }) {

  const posts = await promise;

  return (
    <div className="flex flex-col flex-wrap mx-20 mt-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border mt-2 items-start flex flex-col p-5"  >
          <Link href={`/blog/${post.id}`}>
            <h2 className="text-indigo-400 text-start">
              {post.title}
            </h2>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
