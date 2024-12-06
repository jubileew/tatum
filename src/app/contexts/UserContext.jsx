"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const useSetUser = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, useSetUser }}>
      {children}
    </UserContext.Provider>
  );
};
