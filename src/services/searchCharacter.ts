import axios from "axios";

const controller = new AbortController();

export const searchCharacter = async (name: string) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SWAPI_URL}/people?search=${name}`
    );
    return response.data.results;
  } catch (error) {
    controller.abort();
    return "No data found.";
  }
};
