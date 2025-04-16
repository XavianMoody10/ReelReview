import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

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
