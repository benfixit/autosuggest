import React, { useState, useEffect } from "react";
import { useWordListContext } from "../../providers";
import { Trie } from "../../classes";

export const AutoSuggest = () => {
  const { trie, words } = useWordListContext();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    const result = trie.search(value);

    console.log("Searched words === ", trie.root, result);

    setSearch(value);
  };

  return (
    <>
      <input type="text" value={search} onChange={handleChange} />
    </>
  );
};
