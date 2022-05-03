import React,{useRef, useState} from 'react'
import '../css/Form.css'
import Alert from '@mui/material/Alert';
import { reg } from '../../service/authService';
import {isEmail} from 'validator'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import authStore from '../../store/authStore';
const validEmail=(value)=>{
    
    if(!isEmail(value)){
        return (
        <Alert severity="error">This is not valid email</Alert>
        )
    }
}

const required = (value) => {
    if (!value) {
      return (
        <Alert severity="error">This field is required</Alert>

      );
    }
  };
  const validName=(value)=>{
      if(value.length<3||value.length>20){
        return <Alert severity="error">The username must be between 3 and 20 characters</Alert>
      }
  }

  const validPassword=(value)=>{
    if(value.length<6||value.length>40){
      return <Alert severity="error">The password must be between 6 and 40 characters</Alert>
    }
}
const RegistrationForm=observer(()=>{
    const navigate=useNavigate()
    const form=useRef()
    const checkBtn = useRef();
 

    
    

const onChangeEmail=(e)=>{
    authStore.setEmail(e.target.value)
}
    const onChangePas = (e) => {
       
        authStore.setPassword(e.target.value);
    }
   
    const onChangeNic = (e) => {
       
        authStore.setNickname(e.target.value);
    }
    

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        
        form.current.validateAll()
        if (checkBtn.current.context._errors.length === 0) {
        reg(authStore.nickname,authStore.email, authStore.password)
    .then((res)=>{
        authStore.setNickname('');
        authStore.setPassword('');
        authStore.setEmail('');
        authStore.setMessage(res.data.message)
        authStore.setSucess(true)
        navigate("/login")
    })
    .catch((err)=>{
        authStore.setMessage(err.response.data.message)
        authStore.setSucess(false)
        
    })
}
    }


  return (
    <div className="registration">
    <div className="container-auth">
<div className="header">Registration</div>
       
        <Form onSubmit={handleOnSubmit} ref={form} >
            
        <div className="form">


        <div className='form-group'>
                    <label for="nickname">Email</label>
                    <Input className="formInput"  type="text" name="nickname" value={authStore.email} onChange={onChangeEmail} placeholder="email" validations={[validEmail,required]}/>
        </div>
        <div className='form-group'>
                    <label for="nickname">Nickname</label>
                    <Input className="formInput"  type="text" name="nickname" value={authStore.nickname} onChange={onChangeNic} placeholder="nickname" validations={[required,validName]} />
        </div>
        <div className='form-group'>
            <label for="password">Password</label>
                    <Input className="formInput"  type="password" name="password" value={authStore.password} onChange={onChangePas}  placeholder="password" validations={[required,validPassword]}/>
        </div>
    </div>

    {authStore.message&&
    ( <div className="auth-alert">
        {authStore.sucess?"":<Alert severity="error">{authStore.message}</Alert>}
    </div>
    )
    }                    
    <div className='footer'>
               <button type="submit" className='btn' >Registration</button> 
    </div>
    <CheckButton style={{ display: "none" }} ref={checkBtn} />
    </Form>
       
</div>
</div>
  )
})

export default RegistrationForm