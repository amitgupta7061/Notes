import React, { useState } from 'react'

import flower from '../assets/green_rleaf.svg'

const SignupPage = () => {

  const [isLogin, setLogin] = useState(false);
  console.log(isLogin);

  return (
    <>
      <div className='px-28 text-[15px] font-light py-2'>{`Home > ${isLogin ? 'Login' : 'Create an Account'}`}</div>
      <div className='bg-[#1e3932] h-[130px] flex px-28 py-6 gap-[29%] relative'>
        <img className='absolute left-0 rotate-180 bottom-0' src={flower} alt="" />
        <img className='absolute right-0 top-0' src={flower} alt="" />
      </div>

      <div class="flex items-center justify-center mt-6">
        <form class=" bg-white p-6 rounded-lg shadow-lg w-[80%] space-y-6">
          <div class="flex justify-between items-center text-gray-800">
            <h2 className='text-[15px] font-light'>Login | Signup</h2>
          </div>
          <div class="flex w-full gap-[2%]">
            <div className='flex flex-col gap-3 w-[48%]'>
              {
                (isLogin == false) ? <input type="text" placeholder="Your name" class="border border-gray-300 p-2 rounded outline-none" required /> : ""
              }
              <input type="email" placeholder="Your email" class="border border-gray-300 p-2 rounded outline-none" required />
            </div>
            <div className='flex flex-col gap-3 w-[48%]'>
              <input type="password" placeholder="Password" class="border border-gray-300 p-2 rounded outline-none" required />
              {
                (isLogin == false)? <input type="text" placeholder="Contact No." class="border border-gray-300 p-2 rounded outline-none" required /> : ""
              }
            </div>
          </div>
          <button class="w-full bg-[#1e3932] text-white p-2 rounded">{isLogin?'Login' : 'Create account'}</button>
          <div class="login-popup-condition flex items-start space-x-2 mt-[-15px]">
            <input type="checkbox" class="cursor-pointer mt-1 outline-none" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          <p>Already have an account? <span onClick={() => setLogin(prev => !prev)} class="text-[#25b039] font-medium cursor-pointer" >Login here</span></p>
        </form>
      </div>
    </>
  )
}

export default SignupPage
