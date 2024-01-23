import { createContext, useState , useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) =>{
    //guarda info no localstorage
    const [darkMode,setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    //muda o darkMode
    const toogle = () =>{
        setDarkMode(!darkMode)
    }

    //é a primeira visita?
    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])

    //envia para o contexto
    return (
        <DarkModeContext.Provider value={{darkMode,toogle}}>
            {children}
        </DarkModeContext.Provider>
    );
}