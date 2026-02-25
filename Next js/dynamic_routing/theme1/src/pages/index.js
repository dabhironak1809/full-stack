import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {

  const router = useRouter();
  return (
    <div className="flex flex-col   items-center">
      <Link href={'users/page'}>
        user[id]
      </Link>
      <br />
      {' . '}

      <br />
      {' . '}
      <br />
      {/* <Link href={'/name/user'}>name</Link> */}


      <button onClick={(e)=>router.push(`/name/user`)} >name</button>
      <br />
      {'  '}

      <br />
      {'  '}
      <br />

      <button onClick={(e)=>router.push(`/component/`)} >serverside data </button>
    </div>
  );
}
