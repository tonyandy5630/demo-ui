import { render, screen } from "@testing-library/react";
import Modal from ".";
import "@testing-library/jest-dom";

describe("Modal", () => {
  test("should render Modal", () => {
    render(<Modal />);
    const ele = screen.getByRole("heading", { name: "Modal" });
    expect(ele).toBeInTheDocument();
  });
});
