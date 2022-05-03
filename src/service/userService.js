import axios from 'axios'

import api from './interceptor'


const getUserAddress=(id)=>{
    return api.get(`/user/get/address/${id}`);
}

const changeUserAddress=(id,street,homeNumber,apartment,floor)=>{
    return api.put(`/user/change/address/${id}`,{street,homeNumber,apartment,floor});
}
export {getUserAddress,changeUserAddress}