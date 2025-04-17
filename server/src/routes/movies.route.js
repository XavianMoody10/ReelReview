import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/", async (req, res) => {
  const { list, page } = req.query;

  const url = `https://api.themoviedb.org/3/movie/${list}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
    params: {
      page: page,
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
});

export default router;
