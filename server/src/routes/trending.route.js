import { Router } from "express";
import {
  getAllTrendingData,
  getTrendingMoviesData,
  getTrendingTVShowsData,
} from "../controllers/trending.controller.js";

const router = Router();

router.get("/", getAllTrendingData);

router.get("/movies", getTrendingMoviesData);

router.get("/tv_shows", getTrendingTVShowsData);

export default router;
