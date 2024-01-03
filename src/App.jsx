import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/index.jsx';
import { ChakraProvider } from '@chakra-ui/react';


const App = () => {
  return (
   <ChakraProvider>
   <BrowserRouter> 
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
    </Routes>
    <Footer />
   </BrowserRouter>
   </ChakraProvider> 
  )
}

export default App