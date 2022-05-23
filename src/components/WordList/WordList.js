import React from "react";
import * as _ from "lodash";
import { useWordListContext } from "../../providers";

import "./WordList.css";

/**
 * Word List Component
 * @returns
 */
export const WordList = () => {
  const { words } = useWordListContext();
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
