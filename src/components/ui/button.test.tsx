import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders and handles click events", () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Test Button</Button>);

    const button = screen.getByRole("button", { name: "Test Button" });

    expect(button).toBeInTheDocument();
    expect(button.getAttribute("data-slot")).toBe("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
