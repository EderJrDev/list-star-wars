import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";

import Home from "./home";
import { pageCharacter } from "../../services/getPageCharacter";

// Mock
jest.mock("../../services/searchCharacter");
jest.mock("../../services/getPageCharacter");

// Mock 
jest.mock("../../components/header/header", () => (props: any) => (
  <div {...props}>Header</div>
));
jest.mock("../../components/loader/loader", () => () => <div>Loading...</div>);
jest.mock("../../components/card/card", () => (props: any) => (
  <div>
    <span>{props.name}</span>
    <span>{props.url}</span>
  </div>
));

describe("Home component", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  it("displays no results found message", async () => {
    (pageCharacter as jest.Mock).mockResolvedValueOnce({
      results: [],
      count: 0,
    });
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText("no results found.")).toBeInTheDocument();
    });
  });
});
