import React from 'react';
import '../css/Category.css'

function CategoryCartsItems({ item }) {
    return (
        <div className="category-cart-item">
            <img className="category-cart-item-photo" src={item.src} />
            <div className="category-cart-item-body">
                <span className='category-cart-item-name'>{item.name}</span>
                <span className='category-cart-item-price'>{item.price}</span>
                <button className='category-cart-item-button'>Details</button>
            </div>
        </div>

    );
}

export default CategoryCartsItems;