import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import contentByCategory from '../../store/contentByCategory';
import { toJS } from 'mobx';
const CategoryFilterItem=observer(()=>{ 
    
    const handleClick=(e)=>{
        let tempList=[...contentByCategory.checked];
        if(e.target.checked){
            tempList=[...contentByCategory.checked,e.target.value]
        }
        else{
            tempList.splice(contentByCategory.checked.indexOf(e.target.value),1)
        }
        contentByCategory.setChecked(tempList)
    }
    
    
  return (
     <>
    {contentByCategory.properties.map((item)=>{ return(
      <li className="filter-content-item">
          <h3>{item.name}</h3>
          <div className="flex-check">
              {item.values.map((i)=>{
              return <div className="form-check">
                  <input className="form-check-input" type="checkbox" id={i.subCharacteristics.id} name="horns" value={i.subCharacteristics.id} onChange={handleClick}  />
                  <label for={i.subCharacteristics.value}>{i.subCharacteristics.value}</label>
                  </div>
              })}
              
          </div>
      </li>
    )
    })}
    </>
      

  );
})

export default CategoryFilterItem;
