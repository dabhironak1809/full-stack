import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const posts = [
    { id: 1, title: "post 1", body: "post 1 body" },
    { id: 2, title: "post 2", body: "post 2 body" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1>Blog Posts</h1>

        {posts.map((post) => (
          <div>
            {/* <Link href={`/blog/${post.id}`}> */}
            <Link href={`/blog/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
          </div>
        ))}
        <button onClick={() => router.back()} className="mt-5 bg-gray-200 text-black px-4 py-2 rounded">
          Go Back
        </button>
      </div>
    </>
  );
}
