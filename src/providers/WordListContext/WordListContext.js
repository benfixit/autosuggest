import React, { useState, useEffect, useContext, createContext } from "react";
import _ from "lodash";
import { useTrie } from "../TrieContext";
import { useLocalStore } from "../LocalStoreContext";

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
  const { trie } = useTrie();
  const { words: storedWords, setWords: setStoredWords } = useLocalStore();
  const [words, setWords] = useState(storedWords);

  /**
   * Store the words when they change
   */
  useEffect(() => {
    setStoredWords(words);
  }, [words, setStoredWords]);

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
export const useWordList = () => useContext(DefaultContext);
