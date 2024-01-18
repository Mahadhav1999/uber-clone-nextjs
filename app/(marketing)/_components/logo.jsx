import Image from "next/image";

import { cn } from "@/lib/utils";

const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
            src='/uber-logo.png'
            height='40'
            width='40'
            alt="footer-logo"
            />
        </div>
    );
}

export default Logo;