import { TrieNode } from "./TrieNode";

/**
 * Trie class
 */
export class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  /**
   * Insert a word into the Trie
   * @param {string} word
   */
  insert = (word) => {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i];
      if (!node.children[currentChar]) {
        node.children[currentChar] = new TrieNode(currentChar);
        node.children[currentChar].parent = node;
      }

      node = node.children[currentChar];

      if (i === word.length - 1) {
        node.end = true;
      }
    }
  };

  /**
   * Search for a prefix in the Trie and
   * return all the words that match the prefix
   * @param {string} prefix
   */
  search = (prefix) => {
    let node = this.root;
    let result = [];

    for (let i = 0; i < prefix.length; i++) {
      const currentChar = prefix[i];
      if (node.children[currentChar]) {
        node = node.children[currentChar];
      } else {
        return result;
      }
    }

    this.recursiveSearch(node, result);

    return result;
  };

  recursiveSearch = (node, arr) => {
    if (node.end) {
      arr.unshift(node.getWord());
    }

    for (let child in node.children) {
      this.recursiveSearch(node.children[child], arr);
    }
  };
}
