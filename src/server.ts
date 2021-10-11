import "reflect-metadata";
import express from "express";
import { supplementsRoutes } from "./routes/supplements.routes";

import "./shared/container";
import "./database";

const server = express();

server.use(express.json());

server.use("/supplements", supplementsRoutes);

server.listen(8080, () => console.log("Servidor está rodando"))
