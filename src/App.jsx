import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/index.jsx';
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
    <Routes>
      <Route path='/' element = {<Home />} />
    </Routes>
    <Footer />
    </div>  }
   </BrowserRouter>
   </ChakraProvider> 
  )
}

export default App