import React from 'react'
import descriptionStore from '../../../store/descriptionStore'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
const Properties = observer(()=>{

  return (
      <>
    {descriptionStore.detailDescription.map((d)=>{
        return(
        <div className="properties-content" key={d.propertiesId}>
        <h3>{d.propertiesName}</h3>
        <ul className="properties-name">
            {d.subTitleAndValueResponses.map((d)=>{
              return(
                <li key={d.subId}>
                {d.subTitle+':'+' '+d.value}
                </li>
              )
            })
           }
        </ul>
        </div>
        )
    })}
    
    </>
      
  )
})

export default Properties