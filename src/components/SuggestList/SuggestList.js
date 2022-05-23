import React from "react";
import { useWordListContext } from "../../providers";

export const SuggestList = () => {
  const { words } = useWordListContext();
  return (
    <ul>
      {words.map((word) => (
        <li key={word}>{word}</li>
      ))}
    </ul>
  );
};
