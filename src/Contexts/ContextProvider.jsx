import React, {createContext, useContext, useState, useEffect, useReducer} from "react"
import PropTypes from "prop-types"

const StateContext = createContext();



export const ContextProvider = ({children}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate a delay for loading content
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }, []);
    /////////////////////////
    return(
        <StateContext.Provider
        value={{loading,toggleMenu,isMenuOpen}}
        >
         {children}
        </StateContext.Provider>
    )  
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export const useStateContext = () => useContext(StateContext);