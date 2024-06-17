import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-red-900 absolute top-0 w-full text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-2xl">Web Name</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
          <Link href="/" className="mr-5 hover:text-gray-300">Home</Link>
          <Link href="/" className="mr-5 hover:text-gray-300">About</Link>
          <Link href="/" className="mr-5 hover:text-gray-300">Services</Link>
          <Link href="/" className="mr-5 hover:text-gray-300">Contact</Link>
        </nav>
        <button className="inline-flex items-center bg-white border-0 text-black py-2 px-6 focus:outline-none hover:bg-gray-100 rounded-full text-lg mt-4 md:mt-0">
          Get Started
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;