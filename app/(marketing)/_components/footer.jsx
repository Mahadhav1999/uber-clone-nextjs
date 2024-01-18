import React from 'react'
import Logo from './logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50">
            <Logo />
            <p className='font-medium ml-2'>© 2024 Uber Technologies Inc.</p>

            <div className="md:ml-auto justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant='link' size='sm'>
                    Privacy
                </Button>
                <Button variant='link' size='sm'>
                    Accessibility
                </Button>
                <Button variant='link' size='sm'>
                    Terms
                </Button>

            </div>
        </div>
    )
}

export default Footer