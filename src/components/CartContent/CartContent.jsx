import React, { useEffect, useState } from 'react'
import { getCart } from '../../service/cartService'
import { getUser } from '../../service/tokenService'
import { updateQty } from '../../service/cartService'
import { deleteCart } from '../../service/cartService'
import descriptionStore from '../../store/descriptionStore'
import { observer } from 'mobx-react-lite'
import orderStore from '../../store/orderStore'
import OrderModal from '../OrderModal/OrderModal'
const CartContent = observer(()=>{

  const [data,setData]=useState(null)
  

  useEffect(()=>{
    getCart(getUser().id).then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
  },[orderStore.updateCart])

  const handlePlusButton=(e)=>{
    const value=e.target.value
    const arr=value.split(",")
    const quantity=Number(arr[1])
    const id=Number(arr[0])
    updateQty(quantity+1,getUser().id,id).then((res)=>{
      descriptionStore.setUpdate()
      orderStore.setUpdateCart()
    })
    
  }
  const handleMinusButton=(e)=>{
    const value=e.target.value
    const arr=value.split(",")
    const quantity=Number(arr[1])
    const id=Number(arr[0])
    console.log(quantity)
    if(quantity>1){
    updateQty(quantity-1,getUser().id,id).then((res)=>{
      descriptionStore.setUpdate()
      orderStore.setUpdateCart()
    })
  }
  }

  const handleDeleteButton=(e)=>{
    
    deleteCart(getUser().id,e.target.value).then(()=>{
      descriptionStore.setUpdate()
      orderStore.setUpdateCart()
    })
  }

 
  return (
    <>
   
        
      <div className="cart-contents">
        
      {data?.cartItemResponseList.map((d)=>{  
      return (
      <div className="cart-content-item" key={d.cartItemId}>
       <p>{d.name}</p>
       <p>Количество:{d.qty}</p>
       <p>Цена:{d.price}</p>
       <div className="plus-minus">
       <button className="plus" value={String(d.itmId)+','+String(d.qty)}  onClick={handlePlusButton}>+</button>
       <button className="minus" value={String(d.itmId)+','+String(d.qty)}  onClick={handleMinusButton}>-</button>
       <button className="delete-cart" onClick={handleDeleteButton} value={d.itmId}>Delete</button>
       </div>
      </div>
      
      )
      })}
      {data?.cartItemResponseList.length!=0&&(
      <div className="order">
      <button onClick={()=>orderStore.setOpen(true)}>Оформить за {data?.total}</button>
      </div>
      )}
       

    </div>
    <OrderModal total={data?.total}/>
    </>
  )
})

export default CartContent