import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node.js";
import mongoose from "mongoose";
import trendingRouter from "./src/routes/trending.route.js";
import moviesRouter from "./src/routes/movies.route.js";
import tvShowsRouter from "./src/routes/tvShows.route.js";

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/trending", trendingRouter);
app.use("/movies", moviesRouter);
app.use("/tv_shows", tvShowsRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);

  server.listen(); // Mock Service Worker

  // Mongodb database connection
  mongoose
    .connect("mongodb://localhost:27017/")
    .then(() => {
      console.log("Database is connected");
    })
    .catch(() => {
      console.log("Error connecting to database");
    });
});
