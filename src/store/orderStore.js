import { makeAutoObservable } from "mobx";


class OrderStore{
    open=false
    message=''
    updateAdress=false
    updateCart=false
    constructor(){
        makeAutoObservable(this)
    }  

    
    setOpen(isOpen){
        this.open=isOpen
    }
    setMessage(message){
        this.message=message
    }

    setUpdateAdress(){
        this.updateAdress=!this.updateAdress
    }
    setUpdateCart(){
        this.updateCart=!this.updateCart
    }

  

    






}

export default new OrderStore()
