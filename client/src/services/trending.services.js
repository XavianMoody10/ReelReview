import axios from "axios";

async function fetchAllTrendingData() {
  const url = "http://localhost:3001/trending";

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    const data = error?.response?.data;

    if (data) {
      throw new Error(data);
    }

    throw new Error(error.message);
  }
}

async function fetchTrendingMoviesData() {
  const url = "http://localhost:3001/trending/movies";

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    const data = error?.response?.data;

    if (data) {
      throw new Error(data);
    }

    throw new Error(error.message);
  }
}

async function fetchTrendingTVShowsData() {
  const url = "http://localhost:3001/trending/tv_shows";

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    const data = error?.response?.data;

    if (data) {
      throw new Error(data);
    }

    throw new Error(error.message);
  }
}

export {
  fetchAllTrendingData,
  fetchTrendingMoviesData,
  fetchTrendingTVShowsData,
};
