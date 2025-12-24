import React, { createContext, useState, useReducer } from 'react'
const cartInitialState = [];
export const AuthContext = createContext();
 const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.find(
        item => item.id === action.payload.id
      );
      if (exists) return state;

      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      return state.filter(
        item => item.id !== action.payload
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const AppProvider = ({children})=> {
   
    const [isAuthanticted, setIsAuthanticated] = useState(false);
    const [cart, dispatch] = useReducer(cartReducer, cartInitialState);
    const login = ()=> setIsAuthanticated(true);
    const logout = ()=> {
      setIsAuthanticated(false);
       dispatch({ type: "CLEAR_CART" });
    } 
     const addToCart = (course) =>
    dispatch({ type: "ADD_TO_CART", payload: course });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

    return(
       <AuthContext.Provider value={{isAuthanticted, login, logout, addToCart, removeFromCart, cart, dispatch }}>
        {children}
       </AuthContext.Provider>
    )
}