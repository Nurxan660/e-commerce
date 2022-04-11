import { makeAutoObservable } from "mobx";


class PaginationStore{

    page=1
    elements=[]
    count=null

    constructor(){
        makeAutoObservable(this)
    }

    setPage(page){
        this.page=page
    }
    setCount(count){
        this.count=count
    }






}

export default new PaginationStore()