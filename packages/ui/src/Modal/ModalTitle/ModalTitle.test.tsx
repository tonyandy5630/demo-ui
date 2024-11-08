import { render, screen } from "@testing-library/react";
import ModalTitle from ".";
import "@testing-library/jest-dom";

describe("Modal Title", () => {
  test("should render ModalTitle when has children", () => {
    const title = "Hello";
    render(<ModalTitle>{title}</ModalTitle>);
    const ele = screen.getByRole("heading");
    expect(ele).toHaveTextContent(title);
  });
});
