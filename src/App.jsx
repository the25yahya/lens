import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dropdown from './Components/Dropdown';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home,Products,About,Men,Women,Cart,Faq } from './Pages/index.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { useStateContext } from './Contexts/ContextProvider';
import Loader from './Components/Loader';
const App = () => {
  const {loading} = useStateContext();
  return (
   <ChakraProvider>
   <BrowserRouter> 
    {loading ? <Loader /> : <div>
    <Navbar />
    <Dropdown />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/Products' element = {<Products />} />
      <Route path='/About' element = {<About />} />
      <Route path='/Men' element = {<Men />} />
      <Route path='/Women' element = {<Women />} />
      <Route path='/Cart' element = {<Cart />} />
      <Route path='/Faq' element = {<Faq />} />
    </Routes>
    <Footer />
    </div>  }
   </BrowserRouter>
   </ChakraProvider> 
  )
}

export default App