'use client'
import Loader from "@/app/components/Loader";
import { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  university: string;
  age: number;
  image: string;
}

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  const [user, setUser] = useState<User | null>(null); // Specify the User type and allow for null
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function getUserById(id: string) {
      try {
        const userData = await fetch(`https://dummyjson.com/users/${id}`);
        if (!userData.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userDataJson = await userData.json();
        setUser(userDataJson);
        setLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    }
    getUserById(params.slug);
  }, [params.slug]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : user ? ( // Check if user data is available
        <div className="flex justify-center items-center h-[95vh]">
          <div
            key={user.id}
            className="bg-slate-900 text-white rounded-lg shadow-xl shadow-neutral-400 p-12 m-4
            md:w-[500px] "
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <Image src={user.image} width={200} height={200} alt={user.firstName} />
            </div>
            <h1 className="text-xl font-semibold">{user.firstName + " " + user.lastName}</h1>
            <span className="text-green-200">{user.email}</span>
            <hr />
            <span className="text-green-200">{user.phone}</span>
            <hr />
            <span className="text-green-200">{user.university}</span>
            <hr />
            <span className="text-green-200">{user.age} years old</span>
          </div>
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
}
