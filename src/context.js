import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    email: null,
    password: null,
  });
  const [currentMenu, setCurrentMenu] = useState();
  return (
    <AppContext.Provider
      value={{ authData, setAuthData, currentMenu, setCurrentMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
