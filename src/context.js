import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    email: null,
    password: null,
  });
  const [currentMenu, setCurrentMenu] = useState();
  const [users, setUsers] = useState();
  const [admins, setAdmins] = useState();
  const [packages, setPackages] = useState();
  return (
    <AppContext.Provider
      value={{
        authData,
        setAuthData,
        currentMenu,
        setCurrentMenu,
        setUsers,
        users,
        setAdmins,
        admins,
        setPackages,
        packages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
