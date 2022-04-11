import axios from 'axios'

const API_URL = "http://localhost:8080/";

const getPopularItems=()=>{
    return axios.get(API_URL+'item/getPopularItems')
}

const getItemsByCategory=(id,page,size)=>{
    return axios.get(API_URL+`item/get/itemsByCategory?id=${id}&page=${page}&size=${size}`)
}

const getItemsWithSimpleProperties=(id)=>{
    return axios.get(API_URL+`item/get/itemsWithSimpleProperties?id=${id}`)
}

const getItemsWithDetailProperties=(id)=>{
    return axios.get(API_URL+`item/get/itemsWithDetailProperties?id=${id}`)
}


export {getPopularItems,getItemsByCategory,getItemsWithSimpleProperties,getItemsWithDetailProperties}
