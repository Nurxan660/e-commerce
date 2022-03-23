import axios from 'axios'

const API_URL = "http://localhost:8080/";

const getCategories=()=>{
    return axios.get(API_URL+'category/get')
}
const getSubCharacteristics=(id)=>{
    return axios.get(API_URL+`category/get/characteristics?id=${id}`)
}

export {getCategories,getSubCharacteristics}