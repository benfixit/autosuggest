import React, { useContext, createContext } from "react";
import _ from "lodash";

/**
 * local storage key for the words.
 * @note data is persisted to the local storage
 */
export const localStorageKey = "autosuggest.v1.data";

const DefaultContext = createContext({ words: [], setWords: _.noop });

/**
 *
 * Passes data stored in the local storage to the children components
 * @returns
 */
const _LocalStoreProvider = ({ children }) => {
  const storedWords = localStorage.getItem(localStorageKey);
  const words = storedWords ? JSON.parse(storedWords) : [];

  /**
   * Store the words in local storage
   * @param {array} words
   */
  const setWords = (words) => {
    localStorage.setItem(localStorageKey, JSON.stringify(words));
  };

  return (
    <DefaultContext.Provider value={{ words, setWords }}>
      {children}
    </DefaultContext.Provider>
  );
};

export const LocalStoreContext = {
  Provider: _LocalStoreProvider,
  Consumer: DefaultContext.Consumer,
};

/**
 * Custom hook to access this context
 * @returns
 */
export const useLocalStore = () => useContext(DefaultContext);
