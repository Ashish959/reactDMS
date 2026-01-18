import { createContext, useState } from "react";
import { useSelector } from "react-redux";
export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
 const auth = useSelector((state) => state.auth);

  return (
     <SessionContext.Provider value={auth}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;