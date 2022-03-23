import React from 'react'
import DescriptionSlider from '../ItemDescriptionSlider/DescriptionSlider'
import ItemPropertiesTab from './ItemPropertiesTab'
import '../css/ItemDescription.css'

function ItemDescription() {
  return (
    <>
    <div className="item-category">
        <div className="category-name">
              <span>All products / Phones</span>
          </div>
          <div className="item-description-content">
          <DescriptionSlider/>
          <div className="item-description">
              <h1>Iphone 10</h1>
              <h2 className="item-price">1000000</h2>
              <button>Add to cart</button>
              <h2 className='details'>Details</h2>
              <h3 className="details-key">Brand<span className="details-value">Iphone</span></h3>
              <h2 className='details'>Description</h2>
              <div className='details-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore placeat hic fuga laudantium eos fugit aspernatur ad error quae minima? Quis tempora mollitia perspiciatis sint odio voluptate et perferendis voluptas?
                
              </div>
          </div>
          </div>
        </div>
        <ItemPropertiesTab/>
        </>
  )
}

export default ItemDescription