import { render, screen } from "@testing-library/react";
import App from "./App";

test("should first", () => {
  render(<App></App>);

  screen.getByText("Hello world!");
});
