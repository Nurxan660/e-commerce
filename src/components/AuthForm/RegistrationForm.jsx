import React,{useState} from 'react'
import '../css/Form.css'

function RegistrationForm() {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [nickname,setNickname]=useState('');

const [email,setEmail]=useState('');
const [password, setPassword] = useState('');
    

const onChangeEmail=(e)=>{
    
    setEmail(e.target.value);
}
    const onChangePas = (e) => {
       
        setPassword(e.target.value);
    }
    const onChangeName = (e) => {
       
        setFirstName(e.target.value);
        
    }
    const onChangeNic = (e) => {
       
        setNickname(e.target.value);
    }
    const onChangeLast = (e) => {
       
        setLastName(e.target.value);
        
    }


  return (
    <div className="registration">
    <div className="container-auth">
<div className="header">Registration</div>
       
        <form >
        <div className="form">
<div className='form-group'>
                    <label for="firstName">Name</label>
                    <input className="formInput" type="text" name="firstName" value={firstName} onChange={onChangeName}  placeholder="name"></input>
</div>
<div className='form-group'>
                    <label for="firstName">SurName</label>
                    <input className="formInput" type="text" name="firstName" value={lastName} onChange={onChangeLast}  placeholder="lastname"></input>
</div>

        <div className='form-group'>
                    <label for="nickname">Email</label>
                    <input className="formInput"  type="text" name="nickname" value={email} onChange={onChangeEmail} placeholder="email"></input>
        </div>
        <div className='form-group'>
                    <label for="nickname">Nickname</label>
                    <input className="formInput"  type="text" name="nickname" value={nickname} onChange={onChangeNic} placeholder="nickname"></input>
        </div>
        <div className='form-group'>
            <label for="password">Password</label>
                    <input className="formInput"  type="password" name="password" value={password} onChange={onChangePas}  placeholder="password"></input>
        </div>
    </div>

                    
    <div className='footer'>
               <button type="submit" className='btn'>Registration</button> 
    </div>
</form>
       
</div>
</div>
  )
}

export default RegistrationForm