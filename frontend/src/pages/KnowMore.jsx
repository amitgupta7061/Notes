import React from 'react'
import { assets } from '../assets/assets'

const KnowMore = () => {
  return (
    <div>
      <div className='px-28 text-[15px] font-light py-2'>{'Home > About'}</div>

      <div className="min-h-screen bg-white py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-[#1e3932] text-center mb-6">About Starbucks</h1>
        
        <img
          src={assets.bg}
          alt="Starbucks Coffee"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Starbucks has been inspiring and nurturing the human spirit—one person, one cup, and one neighborhood at a time since 1971. 
          Our mission is to create a welcoming space where coffee lovers can connect, unwind, and enjoy the finest ethically sourced coffee.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#1e3932] mb-4">Our Mission & Values</h2>
        <p className="text-gray-700 mb-6">
          At Starbucks, we are committed to providing high-quality coffee while embracing ethical sourcing, community engagement, and environmental responsibility.
          Our core values include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Delivering the highest quality coffee and best customer experience.</li>
          <li>Acting with courage, challenging the status quo, and finding new ways to grow.</li>
          <li>Creating a culture of warmth, belonging, and connection.</li>
          <li>Being present and making a positive impact in our communities.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-[#1e3932] mb-4">Sustainability & Ethical Sourcing</h2>
        <p className="text-gray-700 mb-6">
          Starbucks is dedicated to sustainable coffee sourcing through our Coffee and Farmer Equity (C.A.F.E.) practices, ensuring fairness for farmers and protecting the environment.
          We also strive to reduce our carbon footprint by promoting reusable cups and implementing eco-friendly store designs.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#1e3932] mb-4">Join the Starbucks Experience</h2>
        <p className="text-gray-700 mb-6">
          Whether you're enjoying a handcrafted latte, connecting with friends, or simply soaking in the inviting atmosphere, Starbucks is more than just a coffeehouse—it's a global community.
        </p>
        
        <button className="w-full py-3 bg-[#1e3932] text-white font-bold rounded-lg hover:[#1e3932] transition">
          Discover More
        </button>
      </div>
    </div>
    </div>
  )
}

export default KnowMore
