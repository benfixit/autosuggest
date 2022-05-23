import { AutoSuggest } from "../AutoSuggest";
import { SuggestList } from "../SuggestList";

import "./App.css";

export const App = () => {
  return (
    <div className="Wrapper">
      <div className="AutoSuggest">
        <AutoSuggest />
      </div>
      <div className="SuggestList">
        <SuggestList />
      </div>
    </div>
  );
};
