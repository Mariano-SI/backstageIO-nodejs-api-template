import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { AppDataSource } from "../config/ormconfig";
import cors from "cors";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());

app.use(express.json());

app.use(routes)

AppDataSource.initialize().then(() => {
  console.log("Database connected");
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});


