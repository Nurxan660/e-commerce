import React, { useEffect, useState,useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import orderStore from '../../store/orderStore';
import { observer } from 'mobx-react-lite';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Alert from '@mui/material/Alert';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createOrder,createEmailOrder } from '../../service/cartService';
import CheckButton from "react-validation/build/button";
import { getUser } from '../../service/tokenService';
import descriptionStore from '../../store/descriptionStore';
import CircularProgress from '@mui/material/CircularProgress';
import { getUserAddress,changeUserAddress} from '../../service/userService';


const required = (value) => {
if (!value) {
  return (
    <Alert severity="error">This field is required</Alert>

  );
}
};

const OrderModal = observer(({total})=>{
    const form=useRef()
    const checkBtn = useRef();
  const [paymentType,setPaymentType]=useState("")
  const [street,setStreet]=useState("")
  const [homeNumber,setHomeNumber]=useState("")
  const [apartment,setApartment]=useState("")
  const [floor,setFloor]=useState("")
  const [message,setMessage]=useState("")
  const [loader,setLoader]=useState(false)
  const [isButtonDisabled,setIsButtonDisabled]=useState(false)
  const [address,setAddress]=useState("")
  const [isMessageSuccess,setIsMessageSuccess]=useState(false)
  const onChangeStreet=(e)=>{
    setStreet(e.target.value)
  }
  const onChangeHomeNumber=(e)=>{
    setHomeNumber(e.target.value)
  }
  const onChangeApartment=(e)=>{
    setApartment(e.target.value)
  }
  const onChangeFloor=(e)=>{
    setFloor(e.target.value)
  }

  const handleRadioChange=(e)=>{
    setPaymentType(e.target.value)
  }

  useEffect(()=>{
    getUserAddress(getUser().id).then((res)=>{
      setStreet(res.data.street)
      setHomeNumber(res.data.homeNumber)
      setApartment(res.data.apartment)
      setFloor(res.data.floor)
      setIsButtonDisabled(true)
      setAddress(res.data)
    })
  },[orderStore.updateAdress])

  const handleChangeButton=(e)=>{
    e.preventDefault();
    setIsButtonDisabled(false)
    
  }
  const handleSaveButton=(e)=>{
    e.preventDefault();
    changeUserAddress(getUser().id,street,homeNumber,apartment,floor).then((res)=>{
      console.log(res.data)
      setIsButtonDisabled(true)
    })
  }


  const handleOnSubmit=(e)=>{
    e.preventDefault();
   
    form.current.validateAll()
    if (checkBtn.current.context._errors.length === 0) {
       setLoader(true)
    createOrder(street,homeNumber,apartment,floor,paymentType,getUser().id,total)
.then((res)=>{
  console.log(res.data)
  setLoader(false)
  descriptionStore.setUpdate()
  orderStore.setUpdateAdress()
  orderStore.setUpdateCart()
  setMessage(res.data.message)
  setIsMessageSuccess(true)
  setTimeout(()=>{
    setMessage("")
  },3000)
  return res.data
}).then((data)=>{

   createEmailOrder(getUser().email,data.order)
})
.catch((err)=>{
  setLoader(false)
  setMessage(err.response.data.message)
  setIsMessageSuccess(false)
  setTimeout(()=>{
    setMessage("")
  },3000)
    
})
}
}

  
   
        
  return (
    <div>
       
    <Dialog
      open={orderStore.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Order's data"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <div className="container-order-modal">

       
        <Form  ref={form} >
            
        <div className="form">


        <div className='form-group'>
                    <label for="street">Street</label>
                    <Input className="formInput"  type="text" name="street" 
                    placeholder="street" validations={[required]} value={street} onChange={onChangeStreet} disabled={isButtonDisabled}/>
        </div>
        <div className='form-group'>
                    <label for="home number">Home number</label>
                    <Input className="formInput"  type="text" name="home number" 
                     placeholder="home number" validations={[required]} value={homeNumber} onChange={onChangeHomeNumber} disabled={isButtonDisabled}/>
        </div>
        <div className='form-group'>
            <label for="apartment">Apartment</label>
                    <Input className="formInput"  type="text" name="apartment"
                       placeholder="apartment" validations={[required]} value={apartment} onChange={onChangeApartment} disabled={isButtonDisabled}/>
        </div>
        <div className='form-group'>
            <label for="floor">Floor</label>
                    <Input className="formInput"  type="text" name="floor"
                       placeholder="floor" validations={[required]} value={floor} onChange={onChangeFloor} disabled={isButtonDisabled}/>
        </div>
        <div className="changeAddress">
          {address&&(
             isButtonDisabled?(
              <button onClick={handleChangeButton}>Change</button>
            ):(<button onClick={handleSaveButton}>Save</button>)
          )}
          
        
        </div>
        <div className="payment-radio">
        <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Payment type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={paymentType}
       onChange={handleRadioChange}
      >
        <FormControlLabel value="cash to courier" control={<Radio />} label="Cash to courier" />
        <FormControlLabel value="card to  courier" control={<Radio />} label="Сard to  courier" />
        
      </RadioGroup>
    </FormControl>
    </div>

    </div>
    <CheckButton style={{ display: "none" }} ref={checkBtn} />
    </Form>

                      
    <div className='footer'>
               <button type="submit" className='btn' onClick={handleOnSubmit} >
                 {loader?(<CircularProgress color="inherit" />):"Order"}
                 </button> 
    </div>
    {message&&(
      <Alert severity={isMessageSuccess?"success":"error"}>{message}</Alert>
    )}
    
       
</div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button onClick={()=>orderStore.setOpen(false)} autoFocus>
        Close
      </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
})

export default OrderModal