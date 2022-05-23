import React, { createContext, useContext } from "react";

const DefaultContext = createContext({ data: ["piper", "peter"] });

const _DataProvider = ({ children }) => {
  return (
    <DefaultContext.Provider value={{ data }}>
      {children}
    </DefaultContext.Provider>
  );
};

export const DataContext = {
  Provider: _DataProvider,
  Consumer: DefaultContext.Consumer,
};

export const useDataContext = () => useContext(DefaultContext);
