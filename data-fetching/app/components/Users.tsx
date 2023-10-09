import React from 'react';
import NextPrevBtn from './NextPrevBtn';
import Link from 'next/link';

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface UsersProps {
  users: User[];
  setSkipuser: (skip: number) => void;
  skipuser: (skip: number) => void;
}

const Users: React.FC<UsersProps> = ({ users, setSkipuser  , skipuser}) => {
  return (
    <>
      <NextPrevBtn setSkipuser={setSkipuser} skipuser={skipuser}/>
      <div className='flex flex-row flex-wrap gap-2 mt-3 justify-center'>
        {users.map((user) => (
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
    </>
  );
};

export default Users;




{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-12"></div> */ }


