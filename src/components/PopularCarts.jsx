import React from 'react';
import './css/PopularCartItem.css'
import PopularCartsItems from './PopularCartsItems.jsx'

function PopularCarts() {
    const items = [
        {
            name: "Iphone 10",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            name: "Iphone 11",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            name: "Iphone 12",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            name: "Iphone 13",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            name: "Iphone 8",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
        {
            name: "Iphone 9",
            price: 100000,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdH85zH6khXpdIle6YSTwlQ907seyWbU2d_Fm6UP0W1H3kPvh&s"
        },
    ]
    
  return (
      <div className="popular-carts">
          <div className="popular-carts-items">
              {items.map((item)=>{
                  return <PopularCartsItems item={item}/>
              })}
        </div>
      </div >
  );
}

export default PopularCarts;
