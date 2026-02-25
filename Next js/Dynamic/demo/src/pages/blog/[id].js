import { useRouter } from "next/router";
import Link from "next/link";

export default function PostDetail() {
  const router = useRouter();
  // 'id' comes from the filename [id].js
  const { id } = router.query;

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-xl font-bold">Details for Post: {id}</h1>
      <p className="mt-2">You are currently viewing post number {id}.</p>

      <button onClick={() => router.back()} className="mt-5 bg-gray-200 text-black px-4 py-2 rounded">
        Go Back
      </button> 
    </div>
  );
}