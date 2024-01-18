"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  ClerkLoading,
  ClerkLoaded,
  SignInButton,
  SignedOut
} from "@clerk/nextjs";
import { CarTaxiFront, IndianRupee, BadgeIndianRupee } from "lucide-react";
import Link from "next/link";


export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="font-bold text-3xl sm:text-5xl md:text-5xl">
        Go anywhere with Uber
        <br />
        <span className="font-light ">Request a ride, hop in, and go.</span>
      </h1>

      <ClerkLoading>
        <div className="w-full flex items-center justify-center ">
          <Spinner size='lg' />
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <SignedOut>
          <SignInButton mode="modal">
            <Button size='lg'>
              See prices
              <IndianRupee className="h-5 w-5 ml-1" />
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>


      <ClerkLoaded>
        <SignedIn>
          <Button size='lg'>
            <Link href="/ride">
              Book your ride
            </Link>
            <CarTaxiFront className="h-5 w-5 ml-2" />
          </Button>
        </SignedIn>
      </ClerkLoaded>


    </div>
  )
}
