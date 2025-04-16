import axios from "axios";

async function getAllTrendingData(req, res) {
  const url = "https://api.themoviedb.org/3/trending/all/week";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return res.send(response.data);
  } catch (error) {
    const data = error?.response?.data;
    const status = error?.response?.status;

    if (data) {
      return res.status(status).send(data);
    }

    return res.status(400).send(error.message);
  }
}

async function getTrendingMoviesData(req, res) {
  const url = "https://api.themoviedb.org/3/trending/movie/week";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return res.send(response.data);
  } catch (error) {
    const data = error?.response?.data;
    const status = error?.response?.status;

    if (data) {
      return res.status(status).send(data);
    }

    return res.status(400).send(error.message);
  }
}

async function getTrendingTVShowsData(req, res) {
  const url = "https://api.themoviedb.org/3/trending/tv/week";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    return res.send(response.data);
  } catch (error) {
    const data = error?.response?.data;
    const status = error?.response?.status;

    if (data) {
      return res.status(status).send(data);
    }

    return res.status(400).send(error.message);
  }
}

export { getAllTrendingData, getTrendingMoviesData, getTrendingTVShowsData };
