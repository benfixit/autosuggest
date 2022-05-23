/**
 * TrieNode class
 */
export class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }

  /**
   * Get the word formed from the TrieNode up to the root
   * @returns
   */
  getWord() {
    let node = this;
    let word = [];

    while (node !== null) {
      word.unshift(node.key);
      node = node.parent;
    }

    return word.join("");
  }
}
