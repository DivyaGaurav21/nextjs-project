import Link from "next/link";
import { ButtonLinkProps } from "@/types/home";

const  ButtonLink:React.FC<ButtonLinkProps> = ({ href, children, className = "" }) => {
  return (
    <Link href={href} className={`bg-orange-500 text-white py-2 px-6 rounded-full font-bold hover:bg-orange-600 inline-flex items-center justify-center ${className}`}>
        {children}
    </Link>
  );
}
export default ButtonLink;