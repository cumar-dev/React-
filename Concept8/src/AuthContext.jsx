import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AppProvider = ({children})=> {
    const [isAuthanticted, setIsAuthanticated] = useState(false);
    const login = ()=> setIsAuthanticated(true);
    const logout = ()=> setIsAuthanticated(false);
    return(
       <AuthContext.Provider value={{isAuthanticted, login, logout}}>
        {children}
       </AuthContext.Provider>
    )
}