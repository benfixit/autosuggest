import React, { useEffect, useContext, useMemo, createContext } from "react";
import { Trie } from "../../classes";
import { useLocalStore } from "../LocalStoreContext";

const DefaultContext = createContext({ trie: null });

/**
 *
 * Passes an instance of the Trie class to the children components
 * @returns
 */
const _TrieProvider = ({ children }) => {
  const trie = useMemo(() => new Trie(), []);
  const { words } = useLocalStore();

  /**
   * We want to fetch all the words in local storage
   * and insert them into the trie
   */
  useEffect(() => {
    words.forEach((word) => trie.insert(word));
  }, [trie, words]);

  return (
    <DefaultContext.Provider value={{ trie }}>
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
export const useTrie = () => useContext(DefaultContext);
