
import React,{createContext, useState,useContext } from "react";

//creating context
const myContext= createContext();

//this is a custom hook
export const useAppContext=()=>{
    return useContext(myContext);
}

export const AppcontextProvider=({children})=>{

    const [activeState,setActiveState]=useState('home')
    const [login,setLogin]=useState(true)
    const [loading,setLoading]=useState(false);
    const [menu, setMenu]=useState(false);
    const [selectDate,setSelectDate]=useState([])
    const [showModal,setShowModal]=useState(false);
  const [allTransection,setAllTransection]=useState([])
  const [frequency,setFrequency] = useState('7')
  const [editable, setEditable] = useState(null);


    const contextValues={
        activeState,setActiveState,
        login,setLogin,
        loading,setLoading,
        menu, setMenu,
        selectDate,setSelectDate,
        showModal,setShowModal,
    allTransection,setAllTransection,
    frequency,setFrequency,setEditable
    }
    return(
       
        <myContext.Provider value={contextValues}>
            {children}
        </myContext.Provider>
       
    )
};