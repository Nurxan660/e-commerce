import axios from 'axios'

const API_URL = "http://localhost:8080/";

const getPopularItems=()=>{
    return axios.get(API_URL+'item/getPopularItems')
}

const getItemsByCategory=(id)=>{
    return axios.get(API_URL+`item/get/itemsByCategory?id=${id}`)
}


export {getPopularItems,getItemsByCategory}
