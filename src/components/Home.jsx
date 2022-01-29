import React from 'react';
import Slider from "./Slider/Slider.jsx";
import './css/Home.css'
import PopularCarts from './PopularCarts.jsx';

function Home() {



  return (
    <>
      <Slider/>
      <div className="popular">
          <span >Popular</span>
      </div>
      <PopularCarts/>
    </>
    
  );
}

export default Home;
