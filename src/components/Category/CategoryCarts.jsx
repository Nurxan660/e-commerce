import React from 'react';
import '../css/Category.css'
import CategoryCartsItems from './CategoryCartsItems.jsx'

function CategoryCarts({items}) {
    

    return (
            <div className="category-carts-items">
                {items.map((item) => {
                    return <CategoryCartsItems item={item} />
                })}
            </div>
     
    );
}

export default CategoryCarts;