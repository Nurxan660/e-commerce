import { makeAutoObservable } from "mobx";

 class ItemsByCategory  {

 items = []

     constructor(){
         makeAutoObservable(this)
     }

     setItems(data){
         this.items=data
     }

     
    
     get allItems(){
         return this.items
     }
 }
 export default new ItemsByCategory()
