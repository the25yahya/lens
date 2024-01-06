import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"

const StateContext = createContext();



export const ContextProvider = ({children}) => {
    ///////////////////////////////////////////////
    const [loading, setLoading] = useState(true);

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
        value={{loading,setLoading,toggleMenu,isMenuOpen,CloseMenu}}
        >
         {children}
        </StateContext.Provider>
    )  
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);