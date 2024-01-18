// Client-side only directive
"use client";

import React from 'react';
import { redirect } from "next/navigation";
import { Spinner } from "@/components/spinner";

import {
    SignedIn,
} from "@clerk/nextjs";

const MainLayout = ({ children }) => {


    {
        !SignedIn ? redirect('/') : ''
    }

    return (
        <div className="h-full flex dark:bg-[#1F1F1F]">
            <main className="flex-1 h-full overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;




