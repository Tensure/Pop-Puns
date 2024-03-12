import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Joke from "./components/Joke";









// const Background = styled.div`
//   height: 100vh;
//   width: 100visualViewport;
//   background: rgb(111, 143, 175);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const StyledSquare = styled.div`
// width: 100px; 
// height: 100px;
// border: 2px black solid;
// `;

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
