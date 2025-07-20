import React, { useState } from 'react'
import { assets } from '../assets/assets'
import FoodMenu from '../components/FoodMenu';
import { OrderMenu } from '../assets/data';

const OrderPage = () => {
  const [order_menu, setOrderMenu] = useState("bestseller");
  const [dinIn, setDinIn] = useState(true);
  return (
    <div>
      <div className="h-[40px] px-28 flex items-center">
            <p className='text-[15px] font-light'>{`Home > Order`}</p>
      </div>

      <div className='bg-[#1e3932] h-[140px] flex px-28 py-6 gap-[29%]'>
        <div className='flex flex-col gap-2'>
          <div className="flex gap-3">
            <img src={assets.location} alt="" />
            <input className='w-[270px] text-[15px] bg-[#1e3932] font-light px-2 border-b border-gray-500' type="text" placeholder='No Store Selected' />
            <div className='flex gap-1'>
              <img src={assets.clock} alt="" />
              <p className='text-[#cacccb]'>00 mins</p>
            </div>
          </div>
          <div className="flex gap-3 bg-[#EFD4DC] px-7 py-3 rounded-lg">
              <div className='h-8 w-8'><img className='h-full w-full' src={assets.searchresult} alt="" /></div>
              <div className='flex flex-col gap-1'>
                <p className='font-semibold text-[13px] text-red-600 tracking-wide'>No store found!</p>
                <p className='font-light text-[11px]'>Please enter a different location to find the nearest Starbucks.</p>
              </div>
              <div className='flex flex-col justify-start text-red-600'>x</div>
          </div>
        </div>
        <div className='flex border-[1px] border-[#cacccb] h-[40px] rounded-sm'>
          <div onClick={() => setDinIn(true)} className={`flex gap-2 pl-3 pr-24 items-center rounded-l-sm cursor-pointer ${dinIn ? 'bg-white text-[#1e3932]' : 'bg-[#1e3932] text-[white]'}`}>
            <img className='h-5 w-5' src={assets.dinein} alt="" />
            <p>Dine-In</p>
          </div>
          <div onClick={() => setDinIn(false)} className={`flex gap-2 pl-3 pr-24 items-center rounded-l-sm cursor-pointer ${dinIn ? 'bg-[#1e3932] text-white' : 'bg-white text-[#1e3932]'}`}>
            <img className='h-5 w-5' src={assets.homegreen} alt="" />
            <p>Takeaway</p>
          </div>
        </div>
      </div>
      <div className='flex gap-5 px-28 bg-[#EDEBE9] font-light py-2'>
          <p onClick={() => setOrderMenu('bestseller')} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${order_menu === 'bestseller' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Bestseller</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p onClick={() => setOrderMenu('drinks')} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${order_menu === 'drinks' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Drinks</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p onClick={() => setOrderMenu('food')} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${order_menu === 'food' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Food</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p onClick={() => setOrderMenu('merchandise')} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${order_menu === 'merchandise' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Merchandise</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p onClick={() => setOrderMenu('coffee')} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${order_menu === 'coffee' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Coffee At Home</p>
          <hr class="w-px h-4 bg-[#cacccb] mx-4"></hr>
          <p onClick={() => setOrderMenu('raedy')} className={`text-[16px] cursor-pointer hover:text-[#48d444] duration-300 font-extralight ${order_menu === 'raedy' ? 'text-green-500 font-bold underline underline-offset-8 decoration-[#00754a] decoration-2' : 'text-[#121212]'}`}>Ready to Eat</p>
      </div>
      <div className='w-full px-28 pt-10 flex flex-col'>
        <div className='flex flex-col w-full gap-2'>
          <p className='text-[15px] font-semibold'>Bestseller</p>
          <p className='text-[15px] font-light'>Everyone's favorite Starbucks put together in a specially curated collection.</p>
        </div>
        <div className='w-full pt-10 grid grid-cols-3 gap-10'>
          {
            OrderMenu.filter((item) => item.id == order_menu).map((item, index) => (
              <FoodMenu key={index} name={item.name} image={item.image} desc_1={item.desc_1} desc_2={item.desc_2} price={item.price} id={item.idd} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default OrderPage;
