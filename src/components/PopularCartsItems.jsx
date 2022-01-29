import React from 'react';
import './css/PopularCartItem.css'

function PopularCartsItems({item}) {
  return (
              <div className="popular-cart-item">
          <img className="popular-cart-item-photo" src={item.src}/>
                  <div className="popular-cart-item-body">
              <span className='popular-cart-item-name'>{item.name}</span>
              <span className='popular-cart-item-price'>{item.price}</span>
              <button className='popular-cart-item-button'>Details</button>
                  </div>
              </div>
    
  );
}

export default PopularCartsItems;
