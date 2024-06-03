import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Sider from "./sider";
import { PropsSider } from "../../../types/sider";
import { getCharactersNumber } from "../../../utils/getCharactersNumber";

// Mock
jest.mock("../../../utils/getCharactersNumber");

describe("Sider component", () => {
  const character: PropsSider["character"] = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "Blond",
    skin_color: "Fair",
    eye_color: "Blue",
    birth_year: "19BBY",
    gender: "Male",
    homeworld: "Tatooine",
    films: [`${process.env.REACT_APP_SWAPI_URL}/films/1/`],
    starships: [`${process.env.REACT_APP_SWAPI_URL}/starships/12/`],
    vehicles: [`${process.env.REACT_APP_SWAPI_URL}/vehicles/4/`],
    species: [],
    created: "2024-01-01T00:00:00.000Z",
    edited: "2024-01-01T00:00:00.000Z",
    url: `${process.env.REACT_APP_SWAPI_URL}/people/1/`,
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders without crashing", () => {
    render(<Sider character={character} />);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });

  it("renders character name correctly", () => {
    render(<Sider character={character} />);
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });

  it("renders character image correctly", () => {
    // Mock
    (getCharactersNumber as jest.Mock).mockReturnValue(1);

    // Mock
    jest.mock(
      "../../../static/assets/img/people/1.jpg",
      () => "test-image.jpg",
      {
        virtual: true,
      }
    );

    render(<Sider character={character} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-image.jpg");
  });

  it("handles missing image gracefully", () => {
    // Mock
    (getCharactersNumber as jest.Mock).mockReturnValue(999);

    render(<Sider character={character} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "");
  });
});
