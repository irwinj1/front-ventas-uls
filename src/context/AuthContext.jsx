import { Children, createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthPrivider = ({children, initialState}) => {
    const [token, setToken] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState(null);

    const loginAuth = (newToken) => {
       try {
        setToken(newToken);
        localStorage.setItem('token', newToken);
       } catch (error) {
        console.log(error);
       }
    }

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
        setIsLogin(false);
    }

    useEffect(()=>{
        const checkoutIsLogin =() => {
            const token = localStorage.getItem('token');
            if (token) {
                setToken(token);
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        }
        checkoutIsLogin()
    },[])

    return (
        <AuthContext.Provider value={{isLogin,token,loginAuth,logout,setIsLogin}} >
            {children}
        </AuthContext.Provider>
    )
}