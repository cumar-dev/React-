import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { NavLink } from 'react-router-dom';
import { IoTrashOutline, IoArrowBack } from "react-icons/io5";

const Cart = () => {
  const { cart, removeFromCart, logout,  } = useContext(AuthContext);
   const {dispatch} = useContext(AuthContext);
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-5">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added any courses yet.</p>
        <NavLink 
          to="/course" 
          className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 transition"
        >
          Browse Courses
        </NavLink>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="flex justify-between items-center mb-8">
        <div className='flex justify-between items-center mb-8 bg-gray-50 p-4 gap-[200px] rounded-lg border border-gray-100'>
        <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        <button onClick={() => dispatch({type: "CLEAR_CART",})} className='bg-amber-700 text-white px-3 py-2 rounded-md cursor-pointer w-[100px]'>ClearAll</button>
        </div>
        <NavLink to="/course" className="flex items-center gap-2 text-sky-600 hover:underline">
          <IoArrowBack /> Continue Shopping
        </NavLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Item List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <>
            <NavLink >
            <div 
              key={item.id} 
              className="flex items-center gap-4 mb-4 bg-white p-4 shadow-sm rounded-lg border border-gray-100"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-20 h-20 object-cover rounded-md" 
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">Rating: ⭐ {item.stars}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-green-700">${item.price}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 mt-2 flex items-center gap-1 text-sm ml-auto"
                >
                  <IoTrashOutline /> Remove
                </button>
              </div>
            </div>
            </NavLink>
             </>
          ))
         
          }
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-xl h-fit shadow-inner border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Items:</span>
            <span>{cart.length}</span>
          </div>
          <div className="border-t border-gray-300 my-4 pt-4 flex justify-between">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-2xl font-black text-green-700">${totalPrice}</span>
          </div>
          <button 
            className="w-full bg-orange-600 text-white py-3 rounded-md font-bold hover:bg-orange-700 transition shadow-md"
            onClick={() => alert("Proceeding to checkout...")}
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;