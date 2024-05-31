import axios from "axios";

const controller = new AbortController();

export const getVehicles = async (id: string | number) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SWAPI_URL}/vehicles/${id}`
    );

    return response.data;
  } catch (error) {
    controller.abort();
    return "No data found.";
  }
};
