import { AutoSuggest } from "../AutoSuggest";
import { WordList } from "../WordList";
import { AddWord } from "../AddWord";

import "./App.css";

/**
 * App Component
 * @returns
 */
export const App = () => {
  return (
    <main className="App-Wrapper" data-testid="app-wrapper">
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
