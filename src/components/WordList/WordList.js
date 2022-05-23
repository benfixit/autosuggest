import React from "react";
import * as _ from "lodash";
import { useWordList } from "../../providers";

import "./WordList.css";

/**
 * Word List Component
 * Displays a list of all the words in the dictionary
 * @returns
 */
export const WordList = () => {
  const { words } = useWordList();
  return (
    <div className="WordList-Wrapper">
      <h3>Words in the dictionary</h3>
      <ol>
        {words.map((word) => (
          <li key={word} className="WordList-ListItem">
            {_.capitalize(word)}
          </li>
        ))}
      </ol>
    </div>
  );
};
