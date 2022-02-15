import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// 1. test fungsi isDisabled
test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument;
});

// 2. test fungsi isLoading
test("Should render loadngi/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();

  expect(container.querySelector("span")).toBeInTheDocument;
});

// 3. cek link eksternal
test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument;
});

// 3. cek link internal
test("Should render <Link> tag", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>{" "}
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument;
});
