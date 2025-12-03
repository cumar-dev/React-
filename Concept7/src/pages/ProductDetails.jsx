import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from './Products';

const ProductDetails = () => {
    const {productId} = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(productId));
  return (
   <>
   <div className='p-4'>
     <h2 className='text-xl font-bold mb-4'>Product Details</h2>
      {
        product ? (
            <>
            <div className='flex flex-col gap-3 mb-2'>
          <p><strong>{product.name}</strong></p>
          <p><strong>${product.price}</strong></p>
          </div>
          </>
        ): (
          <p className='text-red-700'>No product found</p>
        )
      }
      <button className='text-white bg-blue-700 rounded px-3 py-2' onClick={()=> navigate(-1)}>Go back</button>
   </div>
   </>
  )
}

export default ProductDetails;