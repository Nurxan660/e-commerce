import React,{useEffect, useState} from 'react';
import "../css/Category.css";
import CategoryCarts from './CategoryCarts.jsx'
import CategoryFilterItem from './CategoryFilterItem.jsx'
import ItemPagination from '../Pagination/Pagination';
import { observer } from 'mobx-react-lite';
import contentByCategory from '../../store/contentByCategory';
import { getSubCharacteristics } from '../../service/categoryService';
import { getItemsByCategory,getItemsByFilter } from '../../service/itemService';
import ItemsByCategory from '../../store/itemsByCategory';
import { useParams } from 'react-router-dom';
import { toJS } from 'mobx';
import paginationStore from '../../store/paginationStore';
const Category = observer(() => {
    const params=useParams();
    const [minPrice,setMinPrice]=useState(0)
        const [maxPrice,setMaxPrice]=useState(10000000)

        const onChangeMin=(e)=>{
            setMinPrice(e.target.value)
        }

        const onChangeMax=(e)=>{
            setMaxPrice(e.target.value)
        }
    useEffect(()=>{
        

        getSubCharacteristics(params.id).then((res)=>{
            contentByCategory.setProperties(res.data)
            console.log('data',toJS(contentByCategory.properties[0].values[0].category.name))


          
        }).then(()=>{
             
            getItemsByCategory(params.id,paginationStore.page-1,8).then((res)=>{
                console.log("данные с бэка:",res.data)
                ItemsByCategory.setItems(res.data.content)
               paginationStore.setCount(res.data.totalPages)
            })
        })
    },[contentByCategory.urlId,paginationStore.page])

    const handleButton=()=>{
        getItemsByFilter(8,paginationStore.page-1,minPrice,maxPrice,contentByCategory.checked.join(',')).then((res)=>{
            ItemsByCategory.setItems(res.data.content)
        })
    }
    
   
    
    
    
    

  
    

  return (
      
      <>
      
      <div className="category">
          <div className="category-name">
              <span>{'/'+contentByCategory?.properties?.[0]?.values?.[0]?.category?.name}</span>
          </div>
          <div className="category-content">
              <div className="category-filter">
                  <ul className="filter-content">
                      <CategoryFilterItem />
                      <li className="filter-content-item" id="price-range">
                          <h3>Price Range</h3>
                          <div className="price-range-content">
                              <div className="min-price-content">
                                  <input className="price-range"type="text" placeholder='Min Price' onChange={onChangeMin} value={minPrice}/>
                                
                              </div>
                              <div className="max-price-content">
                                  <input className="price-range" type="text" placeholder='Max Price' onChange={onChangeMax} value={maxPrice} />
                              </div>
                              <div className="apply-button">
                              <button className="filter-button" onClick={handleButton}>Apply</button>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>

                  <CategoryCarts items={ItemsByCategory.items} />
          </div>
      </div>
          <ItemPagination  />
      </>
  );

  
  
})

export default Category;
