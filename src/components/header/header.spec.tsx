import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header component", () => {
  it("renders input with placeholder", () => {
    const mockOnSearch = jest.fn();
    render(<Header onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText("Search a character");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onSearch when input value changes", () => {
    const mockOnSearch = jest.fn();
    render(<Header onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText("Search a character");
    fireEvent.change(inputElement, { target: { value: "Luke Skywalker" } });

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("Luke Skywalker");
  });

  it("renders title correctly", () => {
    const mockOnSearch = jest.fn();
    render(<Header onSearch={mockOnSearch} />);

    const titleElement = screen.getByText("Star Wars Characters");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle("color: #EDDE1D");
  });
});
