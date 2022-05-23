import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders app component", () => {
  render(<App />);
  const appWrapper = screen.getByTestId("app-wrapper");
  expect(appWrapper).toBeInTheDocument();
});
