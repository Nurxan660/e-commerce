import axios from 'axios'
import api from './interceptor'

const addCart=(itemId,userId,quantity)=>{
    return api.post('/cart/add',{itemId,userId,quantity});
}

const getCart=(userId)=>{
    return api.get(`/cart/get?userId=${userId}`);
}

const updateQty=(qty,userId,itemId)=>{
    return api.put(`/cart/change/qty/user/${userId}/items/${itemId}`,{qty});
}
const deleteCart=(userId,itemId)=>{
    return api.delete(`/cart/delete/user/${userId}/items/${itemId}`);
}

const getTotalQty=(userId)=>{
    return api.get(`/cart/getTotalQty?userId=${userId}`);
}

const createOrder=(street,homeNumber,apartment,floor,paymentType,userId,total)=>{
    return api.post(`/order/create/${userId}`,{street,homeNumber,apartment,floor,paymentType,total});
}
const createEmailOrder=(email,order)=>{
    return api.post(`/order/createEmailOrder/${email}`,{...order});
}
const getOrders=(userId)=>{
    return api.get(`/order/get/${userId}`)
}
export {addCart,getCart,updateQty,deleteCart,getTotalQty,createOrder,createEmailOrder,getOrders}