import React, { createContext, useState, useEffect } from 'react';


export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  const loginUser = (newToken) => {
    setIsAuth(true);
    setToken(newToken);
  };


  const logoutUser = () => {
    setIsAuth(false);
    setToken(null);
    localStorage.removeItem("token")
  };

  const authState = {
    isAuth,
    token,
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

