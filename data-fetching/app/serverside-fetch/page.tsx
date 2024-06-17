import Link from "next/link"

async function getData() {
    const res = await fetch(`https://dummyjson.com/users?limit=25`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
  }


export default async function Page() {
    const data = await getData()
    const users = data.users;

    return <div className='flex flex-row flex-wrap gap-2 mt-14 justify-center'>
        {users.map((user:User) => (
            <Link
                href={`user/${user.id}`}
                key={user.id}
                className='w-[200px] h-[100px] text-white font-extrabold 
        flex flex-col justify-center items-center bg-slate-900
        rounded-2xl hover:bg-red-900 cursor-pointer'
            >
                <span>{user.id}</span>
                <h1>
                    {user.firstName} {user.lastName}
                </h1>
            </Link>
        ))}
    </div>
}