import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href="/clint_side1">Go to About Page (clint side 1 (csr)) </Link>
      </div>
      <br />
      <div>
        <Link href="/clint_side2">Go to About Page (clint side 2 (CSR)) </Link>
      </div>

      <br />
      <br />

      <div>
        <Link href="/server_side1">Go to Users Page 1 (SSR)</Link>
      </div>
      <br />
      <div>
        <Link href="/server_side2">Go to Users Page 2 (SSR)</Link>
      </div>

    </div>
  );
}
