import Link from "next/link";

export default function Page() {


  return (
    <>
      <nav className="flex gap-4 justify-center">
        <Link href='/'>home</Link>
        <Link href='/'>about</Link>
        <Link href='/page'>page</Link>
      </nav>
    </>
  );
}
