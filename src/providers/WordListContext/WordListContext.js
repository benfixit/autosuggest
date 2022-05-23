import React, { useState, useEffect, useContext, createContext } from "react";
import _ from "lodash";
import { useTrieContext } from "../TrieContext";

/**
 * local storage key for the word list.
 * @note data is persisted to the local storage
 */
const localStorageKey = "autosuggest.v1.data";

const DefaultContext = createContext({
  words: [],
  addWord: _.noop,
  searchWord: _.noop,
});

/**
 *
 * Passes the word list and some setters to the children components
 * @returns
 */
const _WordListProvider = ({ children }) => {
  const storedList = localStorage.getItem(localStorageKey);
  const [words, setWords] = useState(storedList ? JSON.parse(storedList) : []);
  const { trie } = useTrieContext();

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(words));
  }, [words]);

  /**
   * Add word to the trie
   * @param {string} word
   */
  const addWord = (word) => {
    trie.insert(word);
    setWords(_.toArray(new Set([...words, word])));
  };

  /**
   * search for a word in the trie
   * @param {string} word
   * @returns
   */
  const searchWord = (word) => {
    return trie.search(word);
  };

  return (
    <DefaultContext.Provider value={{ words, trie, addWord, searchWord }}>
      {children}
    </DefaultContext.Provider>
  );
};

export const WordListContext = {
  Provider: _WordListProvider,
  Consumer: DefaultContext.Consumer,
};

/**
 * Custom hook to access this context
 * @returns
 */
export const useWordListContext = () => useContext(DefaultContext);
