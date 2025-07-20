import React, { useState } from 'react'
import { Gift_menu } from '../assets/assets'

const Gift = () => {

  const [gift_menu, setGiftMenu] = useState("All");

  return (
    <div className=''>
      <div className="h-[40px] px-28 flex items-center">
            <p className='text-[15px] font-light'>{`Home > Gift Cards`}</p>
      </div>
      <div className='bg-[#1e3932] h-[45px]'></div>
      <div className='h-[40px] flex items-center px-28 font-light gap-5 bg-[#EDEBE9]'>
          <p onClick={() => setGiftMenu("All")} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${gift_menu === 'All' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>All</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p onClick={() => setGiftMenu("Anytime")} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${gift_menu === 'Anytime' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Anytime</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p onClick={() => setGiftMenu("congrats")} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${gift_menu === 'congrats' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Congratulation</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p onClick={() => setGiftMenu("Thank")} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${gift_menu === 'Thank' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Thank you</p>
      </div>

      <div className='grid grid-cols-3 px-28 py-6 rounded-sm gap-6'>
        {
          Gift_menu.filter(item => (gift_menu == "All") || (item.id == gift_menu)).map((item, index) => (
            <div key={index} className='flex h-[150px] rounded-md py-4 px-6 gap-5 shadow-lg bg-gray-100'>
                <div className="w-[30%] h-[60%]">
                    <img className='w-full h-full' src={item.image} height={150} width={150} alt="" />
                </div>
                <div className="w-[50%] flex flex-col gap-3">
                    <p className='text-[13px] font-bold'>{item.name}</p>
                    <p className='text-[10px] font-light'>{item.desc}</p>
                    <button className='text-white border-[1px] text-[12px] font-semibold border-white bg-[#00754a] w-16 py-1 rounded-2xl hover:bg-[#0f3226] duration-700 ml-32'>Add Item</button>
                </div>
            </div>
        ))
        
        }
      </div>
    </div>
  )
}

export default Gift
