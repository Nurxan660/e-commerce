import { makeAutoObservable } from "mobx";
class Description{
    simpleDescription={}
    simpleDescriptionProperties=[]
    detailDescription=[]
    images=[]

    constructor(){
        makeAutoObservable(this)
    }

    setSimpleDescription(data){
        this.simpleDescription=data
    }
    setSimpleDescriptionProperties(data){
        this.simpleDescriptionProperties=data
    }

    setDetailDescription(data){
        this.detailDescription=data
    }
    setImages(data){
        this.images=data
    }
    








}

export default  new Description()