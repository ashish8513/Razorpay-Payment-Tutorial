import React from 'react';
import img1 from './assets/work-1.png'

const Card = ({ amount, checkoutHandler }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg  md:p-8 lg:p-10 shadow-[0_0_10px_black]">
      <img src={img1} alt="Product" className="w-48 h-48 object-cover mb-4 md:w-64 md:h-64" />
      <p className="text-lg font-semibold text-gray-800 md:text-xl">₹{amount}</p>
      <button
        onClick={() => checkoutHandler(amount)}
        className="mt-4 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;
