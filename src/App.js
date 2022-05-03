import Navbar from './Navbar/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Category from './components/Category/Category.jsx'
import ItemDescription from './components/ItemDescription/ItemDescription.jsx'
import RegistrationForm from './components/AuthForm/RegistrationForm.jsx'
import LoginForm from './components/AuthForm/LoginForm.jsx'
import Cart from './components/Cart.jsx'
import ModalToken from './components/ModalRefreshToken/ModalToken.jsx'
import Order from './components/Order.jsx'
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <main className="main">
        <ModalToken/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/category/:id' element={<Category/>} />
        <Route exact path='/description/:id' element={<ItemDescription/>} />
        <Route exact path='/registration' element={<RegistrationForm/>} />
        <Route exact path='/login' element={<LoginForm/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/order' element={<Order/>} />
      </Routes>
        
      </main>
      <Footer />
      
    </BrowserRouter >
    
  );
}

export default App;
