import axios from "axios";

async function getCityCoords(city) {
  const response = await axios.get(`/api/weather?q=${city}`);
  const {
    coord,
    sys: { country },
  } = response.data;
  return { ...coord, country };
}

async function getCityName(lon, lat) {
  const response = await axios.get(
    `/api/weather?lon=${lon}&lat=${lat}`
  );
  const {
    name,
    sys: { country },
  } = response.data;
  return { name, country };
}

async function getWeather(lon, lat) {
  const response = await axios.get(
    `/api/weather/data?lon=${lon}&lat=${lat}`
  );
  return response.data;
}

export { getCityCoords, getCityName };
export default getWeather;
