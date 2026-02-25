import Link from "next/link";
import { useRouter } from "next/router";


const users = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com", age: 22 },
    { id: 2, name: "Amit", email: "amit@gmail.com", age: 25 },
    { id: 3, name: "Neha", email: "neha@gmail.com", age: 33 },
];


export default function Users() {
    const router = useRouter();
    return (
        <div className="flex flex-col   items-center">
            <h1>Users Page</h1>

            {users.map((user) => (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        View {user.name}
                    </Link>

                </div>
            ))}
            <button onClick={(e) => router.replace('/')} className="mt-5 border-amber-50 bg-amber-700" >back</button>
        </div>
    );
}
