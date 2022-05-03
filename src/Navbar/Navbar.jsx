import React,{useState,useEffect} from 'react';
import '../components/css/Navbar.css'
import NavbarCategory from './NavbarCategory';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { getUser } from '../service/tokenService';
import { logout } from '../service/authService';
import { removeUser } from '../service/tokenService';
import authStore from '../store/authStore';
import { getTotalQty } from '../service/cartService';
import descriptionStore from '../store/descriptionStore';
const Navbar=observer(()=>{

    const [open, setOpen] = useState(false);
    const [qty,setQty]=useState(0)
    const currentUser=getUser()
    const navigate=useNavigate()
    const handleButton=()=>{
        setOpen(!open);
    }


    useEffect(()=>{
        getTotalQty(currentUser?.id).then((res)=>{
            setQty(res.data)
        })
    },[descriptionStore.update])
    const handleLogOut=()=>{
        logout(currentUser?.id||authStore.currentUser.id).then(()=>{
            removeUser()
            authStore.setCurrentUser(undefined)
            navigate('/')
        })
    }

 
    
    return (
        <header>
    <nav className="navbar">
            <div className="nav-item-name">
                    <Link to='/' className='home'>
                    <span className="icon-e">E</span>
                    <span className="commerce">commerce</span>
                    </Link>
            </div>
            <div className="nav-item-items">
                    <div className="nav-category">
                    <NavbarCategory/>
                    </div>
                    {currentUser||authStore.currentUser?(
                        <>
                     <Link to='/order' className='home'>
                    <div className="nav-text-orders">
                        Orders
                    </div>
                    </Link>
                    
                    <div className="navbar-nickname">
                    {currentUser?.email||authStore.currentUser.email}

                   </div>
                   <Link to='/cart' className='home'>
                   <div className="nav-cart">
                        <span className="icon"><img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/></span>
                        <span className="counter">{qty}</span>
                    </div>
                    </Link>
                   </>):null}
                    
                    <div className="container">
                        <button type="button" className="button" onClick={handleButton}>
                            ☰
                        </button>
                        {open&&(
                        <div class="dropdown">
                             {currentUser||authStore.currentUser?(
                           <ul className="dropdown-category-content">
                          <li className="dropdown-category-item" onClick={handleLogOut}>LogOut</li>
                            </ul>
                             ):(
                                <ul className="dropdown-category-content">
                                    <Link to="login" className='log-nav'><li className="dropdown-category-item" onClick={()=>setOpen(!open)}>Login</li></Link> 
                                    <Link to="registration" className='reg-nav'><li className="dropdown-category-item" onClick={()=>setOpen(!open)}>Registration</li></Link> 
                            </ul>)}
                        </div>)}
                    </div>
                </div>
        </nav>
        </header>
        )
})

export default Navbar;
