
import React,{createContext, useState,useContext } from "react";

//creating context
const myContext= createContext();

//this is a custom hook
export const useAppContext=()=>{
    return useContext(myContext);
}

export const AppcontextProvider=({children})=>{

    const [activeState,setActiveState]=useState('dashboard')
    const [login,setLogin]=useState(true)
    const [loading,setLoading]=useState(false);
    const [menu, setMenu]=useState(false);


    const contextValues={
        activeState,setActiveState,
        login,setLogin,
        loading,setLoading,
        menu, setMenu
    }
    return(
       
        <myContext.Provider value={contextValues}>
            {children}
        </myContext.Provider>
       
    )
};