import { createContext, useState , useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    //guarda info no localstorage
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    //muda o darkMode
    const login = () =>{
        //TODO
        setCurrentUser({
        id:1,
        name:"Igor Cavalera",
        profilePicture:"https://images.pexels.com/photos/19550510/pexels-photo-19550510/free-photo-of-adulto-bebida-drink-expressao-facial.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    });
    };

    //é a primeira visita?
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    //envia para o contexto
    return (
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    );
}