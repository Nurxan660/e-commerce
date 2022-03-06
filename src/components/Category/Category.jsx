import React from 'react';
import "../css/Category.css";
import CategoryCarts from './CategoryCarts.jsx'
import CategoryFilterItem from './CategoryFilterItem.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import ItemsByCategory from '../../store/itemsByCategory';
import { observer } from 'mobx-react-lite';
import PaginationStore from '../../store/paginationStore';


const Category = observer(() => {
    const items = [
        {
            categoryFilterName: "Brand",
            categoryFilterItems: ["Apple", "Samsung", "Redmi"]
        },
        {
            categoryFilterName: "Ram",
            categoryFilterItems: ["2", "4", "8","16"]
        }
    ]

  
    
  return (
      <>
      <div className="category">
          <div className="category-name">
              <span>All products / Phones</span>
          </div>
          <div className="category-content">
              <div className="category-filter">
                  <ul className="filter-content">
                      {items.map((i)=>{
                      return <CategoryFilterItem item={i}/>
                     })}
                      <li className="filter-content-item" id="price-range">
                          <h3>Price Range</h3>
                          <div className="price-range-content">
                              <div className="min-price-content">
                                  <input className="price-range"type="text" placeholder='Min Price'/>
                                
                              </div>
                              <div className="max-price-content">
                                  <input className="price-range" type="text" placeholder='Max Price' />
                              </div>
                              <div className="apply-button">
                              <button className="filter-button">Apply</button>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>

                  <CategoryCarts items={PaginationStore.currentItems} />
          </div>
      </div>
          <Pagination data={ItemsByCategory.allItems} />
      </>
  );
})

export default Category;
