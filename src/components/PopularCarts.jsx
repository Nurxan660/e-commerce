import React from 'react';
import { useEffect, useState } from 'react';
import './css/PopularCartItem.css'
import PopularCartsItems from './PopularCartsItems.jsx'
import { getPopularItems } from '../service/itemService';

function PopularCarts() {
    const [items,setItems]=useState([])

    useEffect(()=>{
        getPopularItems().then((res)=>{
           setItems([...res.data])
        })
    },[])

    
    
    
  return (
      <div className="popular-carts">
          <div className="popular-carts-items">
              {items.map((item)=>{
                  return <PopularCartsItems item={item} key={item.itmId}/>
              })}
        </div>
      </div >
  );
}

export default PopularCarts;
