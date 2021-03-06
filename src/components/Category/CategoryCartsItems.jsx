import React from 'react';
import '../css/Category.css'
import {Link} from 'react-router-dom'

function CategoryCartsItems({ item }) {
    

    return (
        <div className="category-cart-item">
            <div className='category-cart-item-photo'>
            <img  src={item.images[0].urls} />
            </div>
            <div className="category-cart-item-body">
                <span className='category-cart-item-name'>{item.name}</span>
                <span className='category-cart-item-price'>{item.price}</span>
                 <Link to={`/description/${item.itmId}`} className='description'><button className='category-cart-item-button' >Details</button></Link>
            </div>
        </div>

    );
}

export default CategoryCartsItems;