import axios from "axios";

const controller = new AbortController();

export const pageCharacter = async (page: number) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SWAPI_URL}/people?page=${page}`
    );
    return response.data;
  } catch (error) {
    controller.abort();
    return "No data found.";
  }
};
