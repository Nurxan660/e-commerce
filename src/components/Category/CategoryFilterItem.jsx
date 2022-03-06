import React from 'react';

function CategoryFilterItem({item}) {
  return (
     
      <li className="filter-content-item">
          <h3>{item.categoryFilterName}</h3>
          <div className="flex-check">
              {item.categoryFilterItems.map((i)=>{
              return <div className="form-check">
                  <input className="form-check-input" type="checkbox" id={i} name="horns" />
                  <label for={i}>{i}</label>
                  </div>
              })}
              
          </div>
      </li>
      

  );
}

export default CategoryFilterItem;
