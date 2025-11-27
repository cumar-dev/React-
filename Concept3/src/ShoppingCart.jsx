import React, { useReducer, useState } from 'react'
const initialState = [];
function reducer(state, action) {
    switch(action.type) {
        case "add":
            return [...state, action.payload];
        case "remove":
            return state.filter((item) => item.id !== action.payload);
         case "increaseQty":
            return state.map((item)=> item.id === action.payload ? {...item, quantity: item.quantity + 1}: item);
         case "decreaseQty":
            return state.map((item)=> item.id === action.payload ? {...item, quantity: item.quantity > 1 ? item.quantity -1 : 1}: item);
         case "ClearAll":
            return initialState;
         default:
            return state;                
    }
}
const ShoppingCart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState('');
    const handleAdd = ()=> {
        if(productName.trim() && productPrice.trim()) {
            const newItem = {
                id: Date.now(),
                name: productName,
                price: Number(productPrice),
                quantity: 1
            }
            dispatch({type: "add", payload: newItem});
            setProductName("");
            setProductPrice("");
        }
    }
    const totalItems = state.reduce((acc, item)=> acc + item.quantity, 0);
    const totalPrice = state.reduce((acc, item)=> acc + item.price * item.quantity,0)
  return (
  <>
  <h2>Shopping Cart 🛒</h2>
  <input type="text" placeholder='productName' value={productName} onChange={(e)=> setProductName(e.target.value)} />
  <input type="number" placeholder='productPrice' value={productPrice} onChange={(e)=> setProductPrice(e.target.value)}  />
  <button onClick={handleAdd}>Add</button>
  <button onClick={()=> dispatch({type: "ClearAll"})}>Clear All</button>
  <ul>
    {
        state.map((item)=> (
            <li key={item.id}>
                <div>
                <p>{item.name}</p>
                <p>${item.price} × {item.quantity}</p>
                <button onClick={()=> dispatch({type: "decreaseQty", payload: item.id})}>-</button>
                <button onClick={()=> dispatch({type: "increaseQty", payload: item.id})}>+</button>
                <button onClick={()=> dispatch({type: "remove", payload: item.id})}>Delete</button>
                </div>
            </li>
        ))
    }
  </ul>
  <div>
    <p>Total Items: {totalItems}</p>
    <p>Total Prices: {totalPrice}</p>
  </div>
  </>  
)
}

export default ShoppingCart