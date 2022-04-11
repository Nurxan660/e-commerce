import { makeAutoObservable } from "mobx";


class ContentByCategory{

    items=[]
    properties=[]
    urlId=null
    categoryName=''

    constructor(){
        makeAutoObservable(this)
    }  

    setItems(data){
        this.items=data
    }

    setProperties(data){
        this.properties=data
    }
    setUrlId(id){
        this.urlId=id
    }
    
    setCategoryName(name){
        this.categoryName=name
    }

    






}

export default new ContentByCategory()