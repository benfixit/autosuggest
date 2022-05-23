import { useContext, createContext } from "react";
import { Trie } from "../../classes";

export const TrieContext = createContext({ trie: new Trie() });

export const useTrieContext = () => useContext(TrieContext);
