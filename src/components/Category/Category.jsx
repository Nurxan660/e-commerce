import React,{useEffect} from 'react';
import "../css/Category.css";
import CategoryCarts from './CategoryCarts.jsx'
import CategoryFilterItem from './CategoryFilterItem.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import ItemsByCategory from '../../store/itemsByCategory';
import { observer } from 'mobx-react-lite';
import PaginationStore from '../../store/paginationStore';
import contentByCategory from '../../store/contentByCategory';
import { getSubCharacteristics } from '../../service/categoryService';
import { getItemsByCategory } from '../../service/itemService';
import { useParams } from 'react-router-dom';

const Category = observer(() => {
    const params=useParams();
    
    useEffect(()=>{
        getSubCharacteristics(params.id).then((res)=>{
            contentByCategory.setProperties(res.data)
        }).then(()=>{
            getItemsByCategory(params.id).then((res)=>{
                ItemsByCategory.setItems(res.data)
                PaginationStore.changeData()
                PaginationStore.addPage();
            })
        })
    },[contentByCategory.urlId])

    
    
    
    

  
    
  return (
      <>
      <div className="category">
          <div className="category-name">
              <span>All products / Phones</span>
          </div>
          <div className="category-content">
              <div className="category-filter">
                  <ul className="filter-content">
                      {contentByCategory.properties.map((i)=>{
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
