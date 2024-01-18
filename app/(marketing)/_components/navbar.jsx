"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { ModeToggle } from "@/components/mode-toggle";
import {
    SignedIn,
    ClerkLoading,
    UserButton,
    SignInButton,
    SignUpButton,
    SignedOut
} from "@clerk/nextjs";

// import { CarFront, Package } from 'lucide-react'



import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";



const Navbar = () => {
    const scrolled = useScrollTop()
    return (
        <div className={cn('z-50 bg-background fixed top-0 flex items-center w-full p-2',
            scrolled && 'border-b shadow-sm'
        )}>
            <Image
            className="hidden md:block ml-20 cursor-pointer"
            src='/uber-logo.png'
            height='50'
            width='50'
            alt="logo"
            />
            {/* <div className="flex justify-around items-center gap-3">
                <Button size='sm' variant='ghost'>
                    <CarFront className="h-5 w-5 mr-2" />
                    Ride
                </Button>

                <Button size='sm' variant='ghost'>
                    <Package className="h-5 w-5 mr-2" />
                    Package
                </Button>
            </div> */}
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-6">

                <SignedOut>
                    <SignInButton mode="modal">
                        <Button variant='ghost' size="sm" className='hover:bg-transparent'>
                            Log in
                        </Button>
                    </SignInButton>

                    <SignUpButton mode="modal">
                        <Button size="sm" className="rounded-full">
                            Sign Up
                        </Button>
                    </SignUpButton>
                </SignedOut>

                <SignedIn>
                    <Button variant='link' asChild>
                        <Link href='/ride'>
                            Book your ride
                        </Link>

                    </Button>
                    <UserButton
                        afterSignOutUrl="/"
                    />
                </SignedIn>

                <ClerkLoading>
                    <Spinner />
                </ClerkLoading>

                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar;