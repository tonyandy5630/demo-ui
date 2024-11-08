import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import "@testing-library/jest-dom";

describe("Modal", () => {
  test("should render Modal", () => {
    render(<Modal open={true} />);
    const ele = screen.getByRole("heading", { name: "Modal" });
    expect(ele).toBeInTheDocument();
  });
});
