import { makeAutoObservable } from "mobx";
import ItemsByCategory from "./itemsByCategory";
import { toJS } from "mobx";

 class PaginationStore {
     data=[];
     currentPage=1
     itemsPerPage=9
     pages = []
     minPageNum=1
     maxPageNum=3
     pageNumLim=3

     constructor(){
         makeAutoObservable(this)
     }

     addPage(){
         for (let i = 1; i <= Math.ceil(this.data.length / this.itemsPerPage); i++) {
             this.pages.push(i);
         }

     }

     handleClick(event){
         this.currentPage=event
     }

     handleEndButton(){
         this.currentPage=this.pages[this.pages.length-1]
         this.maxPageNum=Math.ceil(this.currentPage/3)*3
         this.minPageNum=this.maxPageNum-2
     }

     handleStartButton(){
        this.currentPage=this.pages[0]
        this.maxPageNum=Math.ceil(this.currentPage/3)*3
        this.minPageNum=this.maxPageNum-2
        
    }

    changeData(){
        this.data=ItemsByCategory.allItems
        console.log(toJS(this.data))
    }

    handleNextButton(){
        if(this.currentPage==this.pages[this.pages.length-1]){return}
        this.currentPage+=1
        if(this.currentPage>this.maxPageNum){
            this.maxPageNum+=this.pageNumLim
            this.minPageNum+=this.pageNumLim
        }

    }

    handlePrevButton(){
        if(this.currentPage==1){return}
        this.currentPage-=1
        if((this.currentPage)%this.pageNumLim==0){
            this.maxPageNum-=this.pageNumLim
            this.minPageNum-=this.pageNumLim
        }

    }

     get currentItems(){
         const indexOfLastItem = this.currentPage * this.itemsPerPage;
         const indexOfFirstItem = indexOfLastItem - this.itemsPerPage;
         return this.data.slice(indexOfFirstItem, indexOfLastItem);
     }
     
     get getCurrentPage(){
         return this.currentPage;
     }

}
export default new PaginationStore()
