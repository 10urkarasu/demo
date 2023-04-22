import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/Menu/SideBar';
import Slider from './components/Slider/Slider';
import Slider2 from './components/Slider-2/Slider2';


function App() {
  return (
    <>
      <SideBar ></SideBar>
      <Slider></Slider>
      <Slider2></Slider2>
    </>
  );
}

export default App;
