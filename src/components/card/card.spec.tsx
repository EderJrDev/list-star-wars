import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import CharacterCard from "./card";
import { PropsCard } from "../../types/card";

// Mock
jest.mock("../../utils/getCharactersNumber", () => ({
  getCharactersNumber: jest.fn(() => "1"),
}));

// Mock
jest.mock("../../static/assets/img/people/1.jpg", () => "image-path.jpg");

describe("CharacterCard component", () => {
  const defaultProps: PropsCard = {
    url: `${process.env.REACT_APP_SWAPI_URL}/people/1/`,
    name: "Luke Skywalker",
  };

  it("renders the character card with name", () => {
    render(
      <Router>
        <CharacterCard {...defaultProps} />
      </Router>
    );

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });

  it('displays "Image not found." when image is not available', () => {
    jest.mock("../../utils/getCharactersNumber", () => ({
      getCharactersNumber: jest.fn(() => "999"),
    }));

    render(
      <Router>
        <CharacterCard {...defaultProps} />
      </Router>
    );

    expect(screen.getByAltText("Luke Skywalker")).toHaveAttribute(
      "src",
      "Image not found."
    );
  });
});
