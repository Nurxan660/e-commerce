import { makeAutoObservable } from "mobx";
class Description{
    simpleDescription={}
    simpleDescriptionProperties=[]
    detailDescription=[]
    images=[]
    update=false

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
    setUpdate(){
        this.update=!this.update
    }
    








}

export default  new Description()