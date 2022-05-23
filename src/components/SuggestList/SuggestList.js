import React from "react";

export const SuggestList = () => {
  return (
    <ul>
      {[1, 2, 3].map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};
