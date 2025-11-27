import React from "react";
import Header from "./Concept";
import Counter from "./Counter";
import Footer from "./Footer";
import Toggle from "./Toggle";
import UserCard from "./UserCard"; 
import Todolist from "./Todolist";
import LikeCounter from "./LikeCounter";
function App() { 
  return (
    <>
      <Header />
      <Counter />
      <Toggle />
      <Footer />
      <div>
        <UserCard name="Omar" age={25} country="Somalia" />
        <UserCard name="Ayaan" age={30} country="Kenya" />
        <UserCard name="Hassan" age={22} country="Ethiopia" />
      </div>
      <Todolist />
      <LikeCounter />
    </>
  );
}

export default App;
