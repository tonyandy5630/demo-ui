import { render, screen } from "@testing-library/react";
import ModalContent from ".";
import "@testing-library/jest-dom";

describe("Modal Content", () => {
  test("should render ModalContent when has children", () => {
    const content = "Hello";
    render(<ModalContent>{content}</ModalContent>);
    const ele = screen.getByText(content);
    expect(ele).toHaveTextContent(content);
  });
});
