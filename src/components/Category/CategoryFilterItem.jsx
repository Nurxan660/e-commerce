import React from 'react';
import { observer } from 'mobx-react-lite';
const CategoryFilterItem=observer(({item})=>{ 
  return (
     
      <li className="filter-content-item">
          <h3>{item.name}</h3>
          <div className="flex-check">
              {item.values.map((i)=>{
              return <div className="form-check">
                  <input className="form-check-input" type="checkbox" id={i.subCharacteristics.value} name="horns" />
                  <label for={i.subCharacteristics.value}>{i.subCharacteristics.value}</label>
                  </div>
              })}
              
          </div>
      </li>
      

  );
})

export default CategoryFilterItem;
