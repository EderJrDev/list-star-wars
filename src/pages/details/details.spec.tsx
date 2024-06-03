import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Details from "./details";
import { getCharacter } from "../../services/getCharacter";

// Mock
jest.mock("../../services/getCharacter");
const mockedGetCharacter = getCharacter as jest.MockedFunction<
  typeof getCharacter
>;

describe("Details Component", () => {
  it("should render loading state initially", async () => {
    const history = createMemoryHistory();
    history.push("/details/1");

    render(
      <Router history={history}>
        <Details />
      </Router>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });
  });

  it("should navigate to home if no data found", async () => {
    const history = createMemoryHistory();
    history.push("/details/1");

    mockedGetCharacter.mockResolvedValueOnce("No data found.");

    render(
      <Router history={history}>
        <Details />
      </Router>
    );

    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });

  it("should handle fetch error gracefully", async () => {
    const history = createMemoryHistory();
    history.push("/details/1");

    mockedGetCharacter.mockRejectedValueOnce(new Error("Fetch error"));

    render(
      <Router history={history}>
        <Details />
      </Router>
    );
  });
});
