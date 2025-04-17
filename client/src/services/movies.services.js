import axios from "axios";

async function fetchMoviesByList(list, page) {
  const url = `http://localhost:3001/movies`;

  try {
    const response = await axios.get(url, {
      params: {
        list,
        page,
      },
    });

    return response.data;
  } catch (error) {
    const data = error?.response?.data;

    if (data) {
      throw new Error(data);
    }

    throw new Error(error.message);
  }
}

export { fetchMoviesByList };
