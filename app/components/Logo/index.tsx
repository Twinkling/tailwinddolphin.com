import Link from "next/link";
import Image from 'next/image';
import logo from './logo.svg';

const Logo = () => {
    return (
    <nav>
        <Link href="/" >
            <Image className="w-10 h-10" src={logo} alt="Tailwind Dolphin Logo" />
        </Link>
    </nav>
    )
}

export default Logo;