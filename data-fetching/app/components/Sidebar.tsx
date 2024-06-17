import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="hidden md:flex md:w-[260px] bg-red-900 h-screen pt-32 ">
            {/* Sidebar content */}
            <ul className='flex flex-col items-center w-full gap-6 text-white'>
                <li>
                <Link href='/clientside-fetch'> CLIENT-SIDE-DATA-FETCHING </Link>
                </li>
                <li>
                <Link href='/serverside-fetch'> SERVER-SIDE-DATA-FETCHING </Link>
                </li>
                <li>
                <Link href='/clientside-fetch'> CLIENT-SIDE-DATA-FETCHING </Link>
                </li>
                <li>
                <Link href='/clientside-fetch'> SERVER-SIDE-DATA-FETCHING </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
