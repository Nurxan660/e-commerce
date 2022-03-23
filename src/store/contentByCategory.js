import { makeAutoObservable } from "mobx";


class ContentByCategory{

    items=[]
    properties=[]
    urlId=null

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

    






}

export default new ContentByCategory()