import React from 'react'
import { NavLink } from 'react-router-dom';
export const products = [
    { id: 1, name: "iPhone 15", price: 999 },
    { id: 2, name: "Samsung S24", price: 899 },
    { id: 3, name: "Google Pixel 9", price: 799 },
  ];

const Products = () => {
  
  return (
    <>
    <div p-5>
        <h2 className='text-xl font-bold mb-4'>All Products</h2>
        {
            products.length > 0 ? (
             <div>
             <ul className='flex flex-col gap-2'>
                {
                    products.map((product) => (
                        <li key={product.id}>
                       <NavLink to={`/product/${product.id}`}>{product.name}</NavLink>
                        </li>
                    ))
                }
             </ul>
             </div>
            ):(
             <p className='text-red-800'>no products found</p>
            )
        }
    </div>
    </>
  )
}

export default Products;