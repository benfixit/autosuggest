import React, { useState } from "react";
import * as _ from "lodash";
import { useWordListContext } from "../../providers";

import "./AddWord.css";

/**
 * Add Word component
 * Adds words to the dictionary
 * @returns
 */
export const AddWord = () => {
  const { addWord: addNewWord } = useWordListContext();
  const [word, setWord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    /**
     * Only add words that are not empty
     */
    if (!_.isEmpty(word)) {
      addNewWord(_.toLower(word));
    }
  };

  return (
    <div className="AddWord-Wrapper">
      <h3>Add a word to the dictionary</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          className="AddWord-Input"
          placeholder="Add Word"
        />
        <input type={"submit"} value="Submit" className="AddWord-SubmitBtn" />
      </form>
    </div>
  );
};
