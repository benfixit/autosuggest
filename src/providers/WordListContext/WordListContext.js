import React, { useState, useEffect, useContext, createContext } from "react";
import { Trie } from "../../classes";

const localStorageKey = "autosuggest.v1.data";

const defaultData = ["piper", "peter"];

const DefaultContext = createContext({ words: [] });

const _WordListProvider = ({ children }) => {
  const [words, setWords] = useState(
    localStorage.getItem(localStorageKey) || defaultData
  );

  useEffect(() => {
    const trie = new Trie();
    words.forEach((word) => trie.insert(word));
  }, []);

  return (
    <DefaultContext.Provider value={{ words }}>
      {children}
    </DefaultContext.Provider>
  );
};

export const WordListContext = {
  Provider: _WordListProvider,
  Consumer: DefaultContext.Consumer,
};

export const useWordListContext = () => useContext(DefaultContext);
