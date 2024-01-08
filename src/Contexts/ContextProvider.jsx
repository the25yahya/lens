import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"
import AllProducts from '../Data/AllProducts.json'
const StateContext = createContext();
import HeroProducts from '../Data/heroProducts.json'


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
    return(
        <StateContext.Provider
        value={{loading,setLoading,toggleMenu,isMenuOpen,CloseMenu,glasses,setGlasses,hero,setHero,changeHero0,changeHero1,changeHero2,changeHero3,dot,setDot}}
        >
         {children}
        </StateContext.Provider>
    )  
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);