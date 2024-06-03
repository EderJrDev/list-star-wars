import { render, screen } from "@testing-library/react";
import { PropsSider } from "../../../types/sider";
import Character from "./character";

const mockCharacter: PropsSider["character"] = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "Blond",
  skin_color: "Fair",
  eye_color: "Blue",
  birth_year: "19BBY",
  gender: "Male",
  homeworld: "Tatooine",
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: "2024-01-01T00:00:00.000Z",
  edited: "2024-01-01T00:00:00.000Z",
  url: "https://swapi.dev/api/people/1/",
};

describe("Character Component", () => {
  it("renders character details", () => {
    render(<Character character={mockCharacter} />);

    // Verify that all character details are rendered correctly
    expect(screen.getByText(/Name:/)).toBeInTheDocument();
    expect(screen.getByText(/Height:/)).toBeInTheDocument();
    expect(screen.getByText(/Mass:/)).toBeInTheDocument();
    expect(screen.getByText(/Hair Color:/)).toBeInTheDocument();
    expect(screen.getByText(/Skin Color:/)).toBeInTheDocument();
    expect(screen.getByText(/Eye Color:/)).toBeInTheDocument();
    expect(screen.getByText(/Birth Year:/)).toBeInTheDocument();
    expect(screen.getByText(/Gender:/)).toBeInTheDocument();
    expect(screen.getByText(/Homeworld:/)).toBeInTheDocument();
  });

  it("renders the correct character name", () => {
    render(<Character character={mockCharacter} />);
    expect(screen.getByText(/Luke Skywalker/)).toBeInTheDocument();
  });

  it("renders the correct character height", () => {
    render(<Character character={mockCharacter} />);
    expect(screen.getByText(/172 cm/)).toBeInTheDocument();
  });

  it("renders the correct character mass", () => {
    render(<Character character={mockCharacter} />);
    expect(screen.getByText(/77 kg/)).toBeInTheDocument();
  });

  it("renders the correct character hair color", () => {
    render(<Character character={mockCharacter} />);
    expect(screen.getByText(/Blond/)).toBeInTheDocument();
  });

  it("renders the correct character skin color", () => {
    render(<Character character={mockCharacter} />);
    expect(screen.getByText(/Fair/)).toBeInTheDocument();
  });

  it("renders the correct character eye color", () => {
    render(<Character character={mockCharacter} />);
    expect(screen.getByText(/Blue/)).toBeInTheDocument();
  });

  it("renders the correct character birth year", () => {
    render(<Character character={mockCharacter} />);
    expect(screen.getByText(/19BBY/)).toBeInTheDocument();
  });

  it("renders the correct character gender", () => {
    render(<Character character={mockCharacter} />);
    expect(screen.getByText(/Male/)).toBeInTheDocument();
  });
});
