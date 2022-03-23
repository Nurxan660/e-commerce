import React, { useEffect, useState } from 'react';
import '../css/Pagination.css'
import PaginationStore from '../../store/paginationStore';
import { observer } from 'mobx-react-lite';

const Pagination=observer(()=>{
    
    
    const handleClick=(event)=>{
        PaginationStore.handleClick(Number(event.target.id))
        
    }
    const handleNextButton=()=>{
        PaginationStore.handleNextButton();
    }
    const handlePrevButton=()=>{
        PaginationStore.handlePrevButton();
    }
    const handleEndButton=()=>{
        PaginationStore.handleEndButton();
    }
    
    
    
        
    
   

  return (
      
          
      <ul className="pageNumbers">
            <li className="move" onClick={handlePrevButton} >Prev</li>
            {PaginationStore.maxPageNum>=4&&<li onClick={()=>{PaginationStore.handleStartButton()}}>...</li>}
                    {PaginationStore.pages.map((n) => n<=PaginationStore.maxPageNum&&n>=PaginationStore.minPageNum ? (
                      <li key={n}  className={PaginationStore.getCurrentPage==n?"active":null} onClick={handleClick}  >
                          {n}
                      </li>
                    ):null
              )}
              <li onClick={handleEndButton}>...</li>
              <li className="move" onClick={handleNextButton}>Next</li>
          </ul>
      
  );
})

export default Pagination;
