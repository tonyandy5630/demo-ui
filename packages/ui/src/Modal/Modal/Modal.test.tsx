import { render, screen } from "@testing-library/react";
import Modal from ".";
import "@testing-library/jest-dom";

describe("Modal", () => {
  test("should render Modal when open is true", () => {
    render(<Modal open={true} />);
    const ele = screen.getByRole("dialog");
    expect(ele).toBeInTheDocument();
  });
});
