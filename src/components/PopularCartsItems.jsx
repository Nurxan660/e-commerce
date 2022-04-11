import React from 'react';
import './css/PopularCartItem.css'
import { Link } from 'react-router-dom';
function PopularCartsItems({item}) {
  return (
              <div className="popular-cart-item">
          <div className="popular-cart-item-photo">
            <img src={item.images[0].urls}/>
            </div>
                  <div className="popular-cart-item-body">
              <span className='popular-cart-item-name'>{item.itemName}</span>
              <span className='popular-cart-item-price'>{item.itemPrice}</span>
              <Link to={`/description/${item.itmId}`} className='description'><button className='popular-cart-item-button'>Details</button></Link>
                  </div>
              </div>
    
  );
}

export default PopularCartsItems;
