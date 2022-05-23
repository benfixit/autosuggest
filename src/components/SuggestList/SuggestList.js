import React from "react";
import { useWordListContext } from "../../providers";

export const SuggestList = () => {
  const { words } = useWordListContext();
  return (
    <ul>
      {words.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};
