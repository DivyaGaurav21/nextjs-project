"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LogoImg from '@/images/logo.png';
import Shadow from './layout-bg';

export default function Header() {
  const path = usePathname();

  const isActive = (href: string) => path.startsWith(href);

  return (
    <>
      <Shadow />
      <header className="relative top-0 py-4 px-4 md:px-10 flex justify-between items-center bg-transparent">
        <Link href="/" className="flex items-center gap-3 text-white font-bold text-lg md:text-xl uppercase tracking-wider border-none">
          <Image src={LogoImg} alt="NextLevel Food logo" width={50} height={50} priority className="object-contain" />
          <span className="hidden md:inline-block font-extrabold">NextLevel Food</span>
        </Link>
        <nav>
          <ul className="flex gap-4 md:gap-6 text-base md:text-lg">
            <li>
              <Link
                href="/meals"
                className={`px-3 py-1 md:px-4 md:py-2 rounded transition-colors duration-300 ${isActive('/meals') ? 'text-orange-500 font-bold' : 'text-white font-bold hover:text-orange-500'
                  }`}
              >
                Explore Meals
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={`px-3 py-1 md:px-4 md:py-2 rounded transition-colors duration-300 ${isActive('/community') ? 'text-orange-500 font-bold' : 'text-white font-bold hover:text-orange-500'
                  }`}
              >
                Foodie Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
