import React from 'react'

import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'


const SearchSection = () => {
    return (
        <div className='mt-20 ml-7'>
            <h1 className='font-bold text-5xl'>Always the ride you
                want</h1>
            <br />
            <p className='font-normal'>Request a ride, hop in, and go.</p>
            <Input
            type='text'
            className='w-full mt-4 bg-[#EEEEEE]'
            placeholder='Enter location'
            />
            <Input
            type='text'
            className='mt-4 bg-[#EEEEEE]'
            placeholder='Enter destination'
            />
            <div className='mt-5'>
                <Button size='lg'>
                Search
            </Button>
            </div>
        </div>
    )
}

export default SearchSection