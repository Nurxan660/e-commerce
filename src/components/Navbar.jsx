import React,{useState} from 'react';
import './css/Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
    const [open, setOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const handleButton=()=>{
        setOpen(!open);
    }
    const handleCategory = () => {
        setOpenCategory(!openCategory);
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
                    <span className="nav-category-text" onClick={handleCategory}>Category</span>
                        {openCategory && (
                            <div class="dropdown-category">
                                <ul className="dropdown-category-content">
                                    <Link to='/laptops' className='laptops'><li className="dropdown-category-item">Laptops</li></Link>
                                    <Link to='/smartphones' className='smartphones'><li className="dropdown-category-item">Smartphones</li></Link>
                                </ul>
                            </div>)}
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
