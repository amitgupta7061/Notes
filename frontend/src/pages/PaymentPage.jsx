import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';

const PaymentPage = () => {

  const {OrderMenu, cartItem, addToCart, removeFromCart,
  getTotalCartAmount} = useContext(StoreContext);

  const {mainItem, Barista, addToCart_2, removeFromCart_2, getTotalCartAmount_2} = useContext(StoreContext);

    const navigate = useNavigate()

    let totalAmount = (parseFloat(getTotalCartAmount()) + parseFloat(getTotalCartAmount_2())).toFixed(2);
    console.log(totalAmount);
  return (
    <div>
      <div className='px-28 text-[15px] font-light py-2'>{'Home > Payment'}</div>
      <div className='bg-[#1e3932] h-[55px]'></div>

      {
        (totalAmount != 0)?<div className='mt-10 px-28'>
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="grid grid-cols-6 items-center text-gray-500 text-sm font-semibold pb-2">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          {OrderMenu.map((item) => (
            cartItem[item.idd] > 0 && (
              <div key={item.idd} className='grid grid-cols-6 items-center text-[15px] py-3'>
                <img src={item.image} alt="" className='w-12' />
                <p className=''>{item.name.length > 14 ? item.name.slice(0, 14) + "..." : item.name}</p>
                <p>₹{parseFloat(item.price).toFixed(2)}</p>
                <p>{cartItem[item.idd]}</p>
                <p>₹{(parseFloat(item.price) * (cartItem[item.idd])).toFixed(2)}</p>
                <p onClick={() => removeFromCart(item.idd)} className='cursor-pointer ml-5 text-red-600 text-lg'>×</p>
              </div>
            )
          ))}
          {Barista.map((item) => (
            mainItem[item.idd] > 0 && (
              <div key={item.idd} className='grid grid-cols-6 items-center text-[15px] py-3'>
                <img src={item.image} alt="" className='w-12' />
                <p className=''>{item.name.length > 14 ? item.name.slice(0, 14) + "..." : item.name}</p>
                <p>₹{parseFloat(item.price).toFixed(2)}</p>
                <p>{mainItem[item.idd]}</p>
                <p>₹{(parseFloat(item.price) * (mainItem[item.idd])).toFixed(2)}</p>
                <p onClick={() => removeFromCart_2(item.idd)} className='cursor-pointer ml-5 text-red-600 text-lg'>×</p>
              </div>
            )
          ))}
        </div>
        <div className='mt-16 flex flex-col lg:flex-row justify-between gap-8'>
            <div className="bg-white shadow-md rounded-lg p-6 flex-1">
            <h2 className='text-xl font-bold mb-4'>Cart Totals</h2>
            <div className='space-y-2'>
              <div className='flex justify-between text-gray-600'>
                <p>Subtotal</p>
                <p>₹{totalAmount}</p>
              </div>
              <div className='flex justify-between text-gray-600'>
                <p>Gst + Taxes</p>
                <p>₹{totalAmount === 0 ? 0 : ((totalAmount*12) / 100)}</p>
              </div>
              <div className='flex justify-between font-bold text-lg'>
                <p>Totals</p>
                <p>₹{(totalAmount === 0 ? 0 : ((totalAmount*12) / 100)) + Number(totalAmount)}</p>
              </div>
            </div>
            <button onClick={() => navigate('/abcd')} className='mt-4 w-full bg-[#11632b] text-white py-2 rounded-lg hover:bg-[#1e3932]'>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex-1">
            <p className='text-gray-600 mb-2'>If you have a promo code, enter it here</p>
            <div className="flex bg-gray-200 rounded-lg overflow-hidden">
              <input type="text" placeholder='Promo code' className='flex-1 bg-transparent px-4 py-2 outline-none' />
              <button className='bg-[#1e3932] text-white px-6 py-2'>Submit</button>
            </div>
          </div>
        </div>
      </div> : 
      <div className='h-64 flex justify-center items-center'>
        <p className='text-[20px] font-light'>Cart is Empty ! Please add Some Item. <Link to={'/order'} className='font-extralight cursor-pointer text-[#11632b]'>Order Now</Link></p>

      </div>
      }
    </div>
  )
}

export default PaymentPage
