import React, { useEffect, useState } from 'react'

const ActiveOrder = ({data}) => {
  const [open,setOpen]=useState(false)
  return (
    <>
      <div className="active-order">
      <div className="active-order-content">
      <div>{"№"+data.id}</div>
    <div>{data.createdAt}</div>
    <div>{data.paymentType}</div>
    <div>{"STATUS: "+data.status}</div>
    <div>{data.userAddress.street+data.userAddress.homeNumber+", "+
    "ap"+data.userAddress.apartment+", floor "+data.userAddress.floor}</div>
    <div>{data.total}</div>
    <button onClick={()=>setOpen(!open)}>Detail</button>
    </div>
    {open&&(
      <div className="detail-order-content">
        {data.orderItems.map((d)=>{
          return <div>{d.item.name+" "+"qty: "+d.qty}</div>
        })}
    
    </div>
    )}
    </div>

    </>
    
  )
}

export default ActiveOrder