import axios from "axios";

const controller = new AbortController();

const SWAPI_URL = "https://swapi.dev/api/";

export const getVehicles = async (id: string | number) => {
  try {
    const response = await axios.get(`${SWAPI_URL}vehicles/${id}`);
    console.log(response);
    // const response = await api.get(
    //   path + `/${id}?api_key=${process.env.REACT_APP_API}&language=pt-BR`
    // );
    return response.data;
  } catch (error) {
    controller.abort();
    return "no data";
    // if (error.response?.status === 404 || error.message === "Network Error") {
    //   controller.abort();
    // }
  }
};
