import { useRouter } from 'next/router';
import React from 'react'

const page = async ({ params }) => {
  // const { id } = await params

  // console.log(ps);
  const router = useRouter();
  // 'id' comes from the filename [id].js
  const { id } = router.query;

  return (
    <div>
      single article page {id}
    </div>
  )
}

export default page
