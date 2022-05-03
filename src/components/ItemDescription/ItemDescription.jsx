import React,{useEffect, useState} from 'react'
import DescriptionSlider from '../ItemDescriptionSlider/DescriptionSlider'
import ItemPropertiesTab from './ItemPropertiesTab'
import '../css/ItemDescription.css'
import { getItemsWithSimpleProperties } from '../../service/itemService'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import description from '../../store/descriptionStore'
import { getItemsWithDetailProperties } from '../../service/itemService'
import { addCart } from '../../service/cartService'
import { getUser } from '../../service/tokenService'
import Modal from './Modal'
import Alert from '@mui/material/Alert';
import descriptionStore from '../../store/descriptionStore'



    const ItemDescription=observer(()=>{

  const params=useParams()
  const user=getUser();

  const [open, setOpen] = React.useState(false);
  const [sucessMessage,setSuccessMessage]=useState('')

  

  const handleClose = () => {
    setOpen(false);
  };
    useEffect(()=>{
        getItemsWithSimpleProperties(params.id).then((res)=>{
          description.setSimpleDescription(res.data)
          description.setSimpleDescriptionProperties(res.data.subTitleAndValue)
          description.setImages(res.data.images)
        }).then(()=>{
          getItemsWithDetailProperties(params.id).then((res)=>{
            description.setDetailDescription(res.data)
            console.log(res.data)
          }) 
        })
    
    },[]) 

    const handleAddToCartButton=(e)=>{
      if(user){
        addCart(description.simpleDescription.itmId,user?.id,1).then((res)=>{
          descriptionStore.setUpdate()
          setSuccessMessage(res.data)
          setTimeout(()=>{
            setSuccessMessage('')
          },2000)
        })
      }
      else{
        setOpen(true);
      }
      
    }

  return (
    <>
    <div className="item-category">
        <div className="category-name">
              <span>All products / Phones</span>
          </div>
          <div className="item-description-content">
          <DescriptionSlider/>
          <div className="item-description">
              <h1>{description.simpleDescription.name}</h1>
              <h2 className="item-price">{description.simpleDescription.price}</h2>
              <button onClick={handleAddToCartButton}>Add to cart</button>
              {sucessMessage&&
                <Alert severity="success" className="cart-alert">{sucessMessage}</Alert>
               }
              <Modal handleClose={handleClose} open={open}/>
              <h2 className='details'>Details</h2>
                {description.simpleDescriptionProperties!=null?description.simpleDescriptionProperties.map(d=>
                   <div className="item-description-properties">
                   <h3>{d.subTitle}</h3>
                   <p>{d.value}</p>
                 </div>
                ):null}
             
              <h2 className='details'>Description</h2>
              <div className='details-description'>
              {description.simpleDescription.description}
              </div>
          </div>
          </div>
        </div>
        <ItemPropertiesTab   />
        </>
  )
    })

export default ItemDescription