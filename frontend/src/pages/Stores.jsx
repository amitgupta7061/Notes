import React from 'react'
import { useState } from "react";
import { stores } from '../assets/assets';



const Stores = () => {

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className='px-28 text-[15px] font-light py-2'>{'Home > Stores'}</div>
      <div className='bg-[#1e3932] h-[45px]'></div>

      <div className="px-28 w-full flex flex-col gap-4 mt-2">
        <div>
          <h1 className="text-2xl font-bold mb-4">Starbucks Stores</h1>
          <input type="text" placeholder="Search for a store..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-[50%] ml-[25%] outline-none p-2 border rounded-md"/>
        </div>
        <div className="grid grid-cols-2 w-full gap-10">
          {stores.filter(store => store.name.toLowerCase().includes(search.toLowerCase())).map((store, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
              <h2 className="text-xl font-semibold text-green-700">{store.name}</h2>
              <p className="text-gray-600">{store.address}</p>
              <p className="text-gray-600">{store.contact}</p>
              <p className="text-gray-600">Hours: {store.hours}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Stores
