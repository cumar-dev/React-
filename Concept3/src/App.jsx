import React from 'react'
import CounterWhithReducer from './CounterWhithReducer'
import TodoApp from './TodoApp'
import LikeCounter from './LikeCounter'
import ShoppingCart from './ShoppingCart'

const App = () => {
  return (
    <>
    <CounterWhithReducer />
    <TodoApp />
    <LikeCounter />
    <ShoppingCart />
    </>
  )
}

export default App