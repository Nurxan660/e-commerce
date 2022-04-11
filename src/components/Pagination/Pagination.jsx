import React from 'react'
import Pagination from '@mui/material/Pagination';
import paginationStore from '../../store/paginationStore';
import { observer } from 'mobx-react-lite';
import '../css/Pagination.css'
const ItemPagination = observer(()=>{
  const handleChange = (event, value) => {
    paginationStore.setPage(value)
  };
  return (
    <div className='pageNumbers'>
    <Pagination count={paginationStore.count} page={paginationStore.page} onChange={handleChange} />
    </div>
  )
})

export default ItemPagination