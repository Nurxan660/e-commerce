import React,{useState,useEffect} from 'react'
import ActiveOrder from './ActiveOrder'
import OrderHistory from './OrderHistory'
import '../../components/css/Order.css'
import { getOrders } from '../../service/cartService'
import { getUser } from '../../service/tokenService'

const ItemPropertiesTab = () => {
  const [active,setActive]=useState('activeOrder');
  const [data,setData]=useState()

  useEffect(()=>{
    getOrders(getUser().id).then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  },[])

  const handleActiveOrderClick=()=>{
    setActive('activeOrder')
  }
  const handleOrderHistoryClick=()=>{
    setActive('orderHistory')
  }
  
  return (
    <div className="order-properties-tab">
        <ul className="order-properties-buttons">
          <li className={active=='activeOrder'?'active':''} onClick={handleActiveOrderClick}>Active orders</li>
          <li className={active=='orderHistory'?'active':''} onClick={handleOrderHistoryClick}>Order history</li>
        </ul>
        <div className="order-outlet">
          {active==='activeOrder'?
          (data?.map((d)=>{
              return <ActiveOrder data={d}/>
          })
          )
          :null}
          {active==='orderHistory'?<OrderHistory/>:null}
          
        </div>
    </div>
  )
}

export default ItemPropertiesTab