'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './HeaderNavLink.module.css'

export default function HeaderNavLink({href , children}){
    const path = usePathname();
    // console.log(path);
   return (
             <Link
              href={href}
              className={path.startsWith(href) ? `${classes.active} ${classes.link}` : classes.link}
              >
                 {children}
             </Link>
   ) 
}