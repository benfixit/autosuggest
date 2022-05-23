import React, { useContext, createContext } from "react";
import { Trie } from "../../classes";

const DefaultContext = createContext({ trie: null });

/**
 *
 * Passes an instance of the Trie class to the children components
 * @returns
 */
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

/**
 * Custom hook to access this context
 * @returns
 */
export const useTrieContext = () => useContext(DefaultContext);
