import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Category from './components/Category/Category.jsx'
import ItemDescription from './components/ItemDescription/ItemDescription.jsx'
import RegistrationForm from './components/AuthForm/RegistrationForm.jsx'
import LoginForm from './components/AuthForm/LoginForm.jsx'
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <main className="main">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/smartphones' element={<Category/>} />
        <Route exact path='/laptops' element={<Category/>} />
        <Route exact path='/description' element={<ItemDescription/>} />
        <Route exact path='/registration' element={<RegistrationForm/>} />
        <Route exact path='/login' element={<LoginForm/>} />

      </Routes>
        
      </main>
      <Footer />
      
    </BrowserRouter >
    
  );
}

export default App;
