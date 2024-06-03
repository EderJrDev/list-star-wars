import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Others from "./others";
import { PropsSider } from "../../../types/sider";

describe("Others component", () => {
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
    render(<Others character={character} />);
    expect(
      screen.getByText("Films & Starships & Vehicles")
    ).toBeInTheDocument();
  });
});
