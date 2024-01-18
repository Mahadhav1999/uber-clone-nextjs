import MapsSection from '@/components/Home/maps-section';
import SearchSection from '@/components/Home/search-section';
import React from 'react'

const RidePage= () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <SearchSection/>

      </div>
      <div className="col-span-2">
        <MapsSection/>
      </div>
    </div>
  )
}

export default RidePage;