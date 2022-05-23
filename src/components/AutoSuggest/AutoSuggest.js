import React, { useState } from "react";
import * as _ from "lodash";
import { useWordListContext } from "../../providers";

import "./AutoSuggest.css";

/**
 * Auto Suggest Component
 * Searches for words in the dictionary and suggests them to the user
 * @returns
 */
export const AutoSuggest = () => {
  const { words, searchWord: search } = useWordListContext();
  const [searchWord, setSearchWord] = useState("");
  const [options, setOptions] = useState(words);
  const [showList, setShowList] = useState(false);

  /**
   * handleChange callback
   * @param {*} event
   */
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSearchWord(value);

    if (!showList) {
      setShowList(true);
    }

    setOptions(search(_.toLower(value)));
  };

  /**
   * handleWordClick callback
   * @param {*} event
   */
  const handleWordClick = (event) => {
    const {
      target: { innerText },
    } = event;
    setSearchWord(innerText);
    setShowList(false);
  };

  return (
    <div className="AutoSuggest-Wrapper">
      <h3 className="AutoSuggest-Header">Search Box</h3>
      <div className="AutoSuggest-Container">
        <input
          name="search"
          value={searchWord}
          onChange={handleChange}
          className="AutoSuggest-Input"
        />
        {showList && (
          <ul className="AutoSuggest-Dropdown">
            {_.map(options, (option) => (
              <li
                key={option}
                className="AutoSuggest-Dropdown-Item"
                onClick={handleWordClick}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
