import { AutoSuggest } from "../AutoSuggest";
import { WordList } from "../WordList";
import { AddWord } from "../AddWord";

import "./App.css";

export const App = () => {
  return (
    <main className="App-Wrapper">
      <section className="App-Section">
        <AutoSuggest />
      </section>
      <aside className="App-Aside">
        <WordList />
        <AddWord />
      </aside>
    </main>
  );
};
