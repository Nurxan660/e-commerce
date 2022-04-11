import React,{useState,useEffect} from 'react';
import '../components/css/Navbar.css'
import {Link} from 'react-router-dom'
import NavbarCategory from './NavbarCategory';
function Navbar() {
    const [open, setOpen] = useState(false);
    
    const handleButton=()=>{
        setOpen(!open);
    }
    
    useEffect(()=>{
        const closeButton = () => {
            if(open){
                setOpen(false);
            }
        }
            window.addEventListener('click',closeButton)
            return ()=>{ window.removeEventListener('click',closeButton)}
    },[open])

 
    
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
                    <div className="nav-cart">
                        <span className="icon"><img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/></span>
                        <span className="counter">0</span>
                    </div>
                    <div className="container">
                        <button type="button" className="button" onClick={handleButton}>
                            ☰
                        </button>
                        {open&&(
                        <div class="dropdown">
                            
                                <ul className="dropdown-category-content">
                                    <Link to="login" className='log-nav'><li className="dropdown-category-item">Login</li></Link> 
                                    <Link to="registration" className='reg-nav'><li className="dropdown-category-item">Registration</li></Link> 
                            </ul>
                        </div>)}
                    </div>
                </div>
        </nav>
        </header>
        )
}

export default Navbar;
