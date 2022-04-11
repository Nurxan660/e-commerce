import React,{useEffect,useState,} from 'react'
import {Link} from 'react-router-dom'
import { getCategories } from '../service/categoryService'
import { useNavigate } from 'react-router-dom'
import contentByCategory from '../store/contentByCategory'

const NavbarCategory = () => {
    const [categories,setCategories]=useState([])
    const [openCategory, setOpenCategory] = useState(false);
    const handleCategory = () => {
        setOpenCategory(!openCategory);
    }
    


    useEffect(()=>{
      getCategories().then((res)=>{
          setCategories([...res.data])
      })
    },[])
    useEffect(()=>{
        const closeCategory = () => {
            if(openCategory){
            setOpenCategory(false);
            }
        }
        
            window.addEventListener('click',closeCategory)
            
            return ()=>{ window.removeEventListener('click',closeCategory)}
            
    },[openCategory])

    

    const handleClick=(e)=>{
        contentByCategory.setUrlId(e.target.value)
        setOpenCategory(!openCategory)
    }

    
  return (<>
    <span className="nav-category-text" onClick={handleCategory}>Category</span>
         {openCategory&&<div class="dropdown-category">
            <ul className="dropdown-category-content">
                {
                    categories.map(d=>
                        
                        <Link to={`/category/${d.id}`} className="category-dropdown"><li className="dropdown-category-item" key={d.id} value={d.id} onClick={handleClick}  >{d.name}</li></Link>
                    
                    )
                }
            </ul>
         </div>
}
         </>
                            
  )
}

export default NavbarCategory