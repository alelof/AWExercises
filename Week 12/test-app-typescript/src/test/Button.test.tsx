import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "../Button";

describe("test Button component", () => {
  it("render the component", () => {
    const label = "Add";
    render(<Button label={label}></Button>);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: label,
    });
    expect(incrementButton).toBeInTheDocument();
  });
  it("renders a count of 0", () => {
    render(<Button />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
    // <h1>0</h1>
  });

  it("renders a count of 2 after clicking the incrementButton twice", async () => {
    const label = "Add";
    render(<Button label={label} />);
    const incrementButton = screen.getByRole("button", {
      name: label,
    });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("2");
  });
});
