// AppContext.js
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({
  initialLoad: true,
  setInitialLoadComplete: () => {
    return;
  },
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [initialLoad, setInitialLoad] = useState(true);

  const setInitialLoadComplete = () => {
    setInitialLoad(false);
  };

  return (
    <AppContext.Provider value={{ initialLoad, setInitialLoadComplete }}>
      {children}
    </AppContext.Provider>
  );
};
