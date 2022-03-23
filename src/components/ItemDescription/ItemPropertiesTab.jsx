import React,{useState} from 'react'
import Properties from './TabsContent/Properties';
import Reviews from './TabsContent/Reviews';
import Availability from './TabsContent/Availability';
import '../css/ItemProperties.css'
const ItemPropertiesTab = () => {
  const [active,setActive]=useState('properties');

  const handlePropertiesClick=()=>{
    setActive('properties')
  }
  const handleRewiewsClick=()=>{
    setActive('rewiews')
  }
  const handleAvalibilityClick=()=>{
    setActive('avalibility')
  }
  return (
    <div className="item-properties-tab">
        <ul className="item-properties-buttons">
          <li className={active=='properties'?'active':''} onClick={handlePropertiesClick}>Технические характеристики</li>
          <li className={active=='rewiews'?'active':''} onClick={handleRewiewsClick}>Отзывы</li>
          <li className={active=='avalibility'?'active':''} onClick={handleAvalibilityClick}>Наличие товара</li>
        </ul>
        <div className="outlet">
          {active=='properties'?<Properties/>:null}
          {active=='rewiews'?<Reviews/>:null}
          {active=='avalibility'?<Availability/>:null}
        </div>
    </div>
  )
}

export default ItemPropertiesTab