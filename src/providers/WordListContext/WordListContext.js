import React, { useState, useEffect, useContext, createContext } from "react";
import { useTrieContext } from "../TrieContext";

const localStorageKey = "autosuggest.v1.data";

const defaultData = ["ant", "antelope", "bath", "bag", "baggage"];

const DefaultContext = createContext({ words: [], trie: null });

const _WordListProvider = ({ children }) => {
  const [words, setWords] = useState(
    localStorage.getItem(localStorageKey) || defaultData
  );
  const { trie } = useTrieContext();

  useEffect(() => {
    words.forEach((word) => trie.insert(word));
  }, [trie, words]);

  return (
    <DefaultContext.Provider value={{ words, trie }}>
      {children}
    </DefaultContext.Provider>
  );
};

export const WordListContext = {
  Provider: _WordListProvider,
  Consumer: DefaultContext.Consumer,
};

export const useWordListContext = () => useContext(DefaultContext);
