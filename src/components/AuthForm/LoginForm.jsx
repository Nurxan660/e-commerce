import React,{useEffect, useState,useRef} from 'react'
import authStore from '../../store/authStore'
import '../css/Form.css'
import Alert from '@mui/material/Alert';
import { observer } from 'mobx-react-lite';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { login } from '../../service/authService';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../service/tokenService';
import CheckButton from "react-validation/build/button";
import CircularProgress from '@mui/material/CircularProgress';


const required = (value) => {
    if (!value) {
      return (
        <Alert severity="error">This field is required</Alert>
      );
    }
  };
const LoginForm=observer(()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
    const [loading,setLoading]=useState(false)
    const form=useRef()
    const checkBtn = useRef();
    const navigate=useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            authStore.setMessage(null)
        },2000)
    },[])

    const handleOnClick=(e)=>{
        e.preventDefault();
        form.current.validateAll()
        if (checkBtn.current.context._errors.length === 0) {
            setLoading(true)

            login(email,password).then((res)=>{
                console.log(res)
                if(res.data.accessToken){
                    
                    setTimeout(()=>{
                        setEmail('')
                       setPassword('')
                       setUser(res.data)
                       authStore.setCurrentUser(res.data)
                        setLoading(false)
                        navigate('/')
                    },1000)
                   
                }
            }).catch((error)=>{
                setLoading(false)
                setMessage(error.response.data.message)
            })
        }
    }

    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

  return (
    <div className="log">
        {authStore.message ?(
            <div className="reg-login-alert">
                <Alert severity="success">{authStore.message}</Alert>
           </div>
        ):null}
    <div className="container-auth">
        <div className="header">Login</div>

        <Form ref={form} onSubmit={handleOnClick}>
            <div className="form">
                
                <div className='form-group'>
                    <label for="nickname">Email</label>
                    <Input className="formInput"  type="text" name="email" placeholder="username" onChange={onChangeEmail} value={email} validations={[required]}></Input>
                </div>
                <div className='form-group'>
                    <label for="password">Password</label>
                    <Input className="formInput"  type="password" name="password"   placeholder="password" onChange={onChangePassword} value={password} validations={[required]}></Input>
                </div>
            </div>
            {message&&(
             <Alert severity="error">{message}</Alert>
            )}
            <div className='footer'>
                <button type="submit" className='btn' disabled={loading}>{loading?(
                    <div className="spinner">
                <CircularProgress color="inherit" />
                </div>
                ):"Login"}</button>
                
            </div>
            <CheckButton style={{ display: "none" }} ref={checkBtn} />

        </Form>

    </div>

</div>
  )
}) 

export default LoginForm