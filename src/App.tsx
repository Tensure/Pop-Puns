import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Joke from "./components/Joke";

const App = () => {
  return (
    <div>
      {/* <Background /> */}
      <Header />
      <Joke />
    </div>
  )
}



export default App;
