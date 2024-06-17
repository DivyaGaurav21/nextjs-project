import Link from 'next/link'
import LogoImg from '@/assets/logo.png'
import Image from 'next/image'
import classes from './Header.module.css'
import HeaderNavLink from './HeaderNavLink'

export default function Header() {
    return <header className={classes.header}>
        <Link href='/' className={classes.logo}>
            <Image src={LogoImg} alt='logoimage' priority />
            NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <HeaderNavLink href='/meals'>Explore Meals</HeaderNavLink>
                </li>
                <li>
                    <HeaderNavLink href='/community'>Foodie Community</HeaderNavLink>
                </li>
            </ul>
        </nav>
    </header>
}