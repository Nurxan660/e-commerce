import React,{useState} from 'react'
import '../css/Form.css'


function LoginForm() {
    
  return (
    <div className="log">
    <div className="container-auth">
        <div className="header">Login</div>

        <form  >
            <div className="form">
                
                <div className='form-group'>
                    <label for="nickname">Email</label>
                    <input className="formInput"  type="text" name="email" placeholder="username"></input>
                </div>
                <div className='form-group'>
                    <label for="password">Password</label>
                    <input className="formInput"  type="password" name="password"   placeholder="password"></input>
                </div>
            </div>

            <div className='footer'>
                <button type="submit" className='btn'>Login</button>
            </div>
        </form>

    </div>

</div>
  )
}

export default LoginForm