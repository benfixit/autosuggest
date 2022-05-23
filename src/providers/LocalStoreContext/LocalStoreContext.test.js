import * as _ from "lodash";
import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import {
  LocalStoreContext,
  useLocalStore,
  localStorageKey,
} from "./LocalStoreContext";

describe("The Local Store Context and useLocalStore hook", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("returns the default words list and method", () => {
    const {
      unmount,
      result: {
        current: { words, setWords },
      },
    } = renderHook(() => useLocalStore());

    expect(words).toEqual([]);
    expect(setWords).toEqual(_.noop);

    unmount();
  });

  it("changes the context values when the setter is called", () => {
    const Wrapper = ({ children }) => (
      <LocalStoreContext.Provider>{children}</LocalStoreContext.Provider>
    );
    const { unmount, result } = renderHook(() => useLocalStore(), {
      wrapper: Wrapper,
    });

    expect(result.current.words).toEqual([]);

    act(() => {
      result.current.setWords(["test"]);
    });

    expect(localStorage.getItem(localStorageKey)).toBe(
      JSON.stringify(["test"])
    );

    unmount();
  });
});
