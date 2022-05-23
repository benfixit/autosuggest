import React, { useContext, createContext } from "react";
import { Trie } from "../../classes";

const DefaultContext = createContext({ trie: null });

const _TrieProvider = ({ children }) => {
  return (
    <DefaultContext.Provider value={{ trie: new Trie() }}>
      {children}
    </DefaultContext.Provider>
  );
};

export const TrieContext = {
  Provider: _TrieProvider,
  Consumer: DefaultContext.Consumer,
};

export const useTrieContext = () => useContext(DefaultContext);
