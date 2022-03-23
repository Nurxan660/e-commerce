import React from 'react';
import './css/PopularCartItem.css'

function PopularCartsItems({item}) {
  return (
              <div className="popular-cart-item">
          <div className="popular-cart-item-photo">
            <img src={item.images[0].url}/>
            </div>
                  <div className="popular-cart-item-body">
              <span className='popular-cart-item-name'>{item.itemName}</span>
              <span className='popular-cart-item-price'>{item.itemPrice}</span>
              <button className='popular-cart-item-button'>Details</button>
                  </div>
              </div>
    
  );
}

export default PopularCartsItems;
