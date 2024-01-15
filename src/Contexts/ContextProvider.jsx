import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"
import AllProducts from '../Data/AllProducts.json'
const StateContext = createContext();
import HeroProducts from '../Data/heroProducts.json'
import MenProducts from '../Data/MenProducts.json'
import WomenProducts from '../Data/WomenProducts.json'


export const ContextProvider = ({children}) => {
    ///////////////////////////////////////////////
    const [loading, setLoading] = useState(true);
    const [hero, setHero] = useState(HeroProducts[1])
    const [dot,setDot] = useState(1)
    const changeHero0 = () => {
      setHero(HeroProducts[0]);
      setDot(0);
    }
    const changeHero1 = () => {
      setDot(1);
      setHero(HeroProducts[1]);
    }
    const changeHero2 = () => {
      setDot(2);
      setHero(HeroProducts[2]);
    }
    const changeHero3 = () => {
      setDot(3);
      setHero(HeroProducts[3]);
    }
    const [glasses, setGlasses] = useState(AllProducts);
    const [menGlasses, setMenGlasses] = useState(MenProducts);
    const [womenGlasses, setWomenGlasses] = useState(WomenProducts);
    useEffect(() => {
      // Simulate a delay for loading content
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }, []);
    /////////////////////////////////
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      const CloseMenu = () => {
        setIsMenuOpen(false);
      };
    useEffect(() => {
        // Simulate a delay for loading content
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }, []);
    /////////////////////////
    //cart reducer js //////////////////
    const cartReducer = ( state, action ) =>{
      switch(action.type){
        case 'ADD_TO_CART' :{
          const updatedCart = [...state.cart,action.payload];
          const updatedSubtotal = updatedCart.reduce((sum,item) =>sum + item.price, 0);
           return{
            ...state, cart: updatedCart,
            subtotal : updatedSubtotal,
           };}
      }
    }

    const cartInitialState = {
      cart:[],
      subtotal:0,
    }
    const [state, dispatch] = useReducer(cartReducer,cartInitialState)
    const [productDisplay, setProductDisplay] = useState(false);
    const [productDisplayMen, setProductDisplayMen] = useState(false);
    const [productDisplayWomen, setProductDisplayWomen] = useState(false);
    const [displayedProduct, setDisplayedProduct] = useState(null);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })}
    return(
        <StateContext.Provider
        value={{loading,setLoading,toggleMenu,isMenuOpen,CloseMenu,glasses,setGlasses,hero,setHero,changeHero0,changeHero1,changeHero2,changeHero3,dot,setDot,menGlasses,womenGlasses,cartReducer,state,dispatch,productDisplay,setProductDisplay,productDisplayMen,productDisplayWomen,setProductDisplayMen,setProductDisplayWomen,displayedProduct,setDisplayedProduct,scrollToTop}}
        >
         {children}
        </StateContext.Provider>
    )  
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);