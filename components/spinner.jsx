import { Loader } from "lucide-react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";


const spinnerVariants = cva(
    "text-muted-foreground animate-spin",
    {
        variants:{
            size:{
                default:'h-5 w-5',
                sm:'h-2 w-2',
                md:'h-4 w-4',
                lg:'h-6 w-6',
                icon:'h-12 w-12'
            }
        },
        defaultVariants:{
            size:'lg'
        }
    }
);

export const Spinner = ({ size }) => {
  return (
    <Loader className={cn(spinnerVariants({ size }))} />
  );
};