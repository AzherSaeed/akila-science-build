import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Pricing from "./Pricing";
import { createMemoryHistory } from "history";

describe("pricing screen has four cards", () => {
  test("renders pricing component", () => {
    render(
      <BrowserRouter>
        <Pricing />
      </BrowserRouter>
    );

    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Starter")).toBeInTheDocument();
    expect(screen.getByText("Professional")).toBeInTheDocument();
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
  });

  test("Try For Free button links to /login page", () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter>
        <Pricing />
      </BrowserRouter>
    );
    let linkEl = screen.getByRole("link", { name: "Try for Free" });
    expect(linkEl).toHaveAttribute("href", "/login");
    linkEl = screen.getByRole("link", { name: "Sign Up" });
    expect(linkEl).toHaveAttribute("href", "/login");
    linkEl = screen.getByText("Professional");
    const ref = linkEl.getByRole("link", { name: "Contact Us" });
    expect(ref).toHaveAttribute("href", "/contact-us");
  });
});
