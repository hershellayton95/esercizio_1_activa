import express from "express";
import userRoutes from "./routers/userRoute.js";
import cors from "cors";

const app = express();

//plugin
app.use(cors({ origin: "*" }));
app.use(express.json());

//routes
app.use("/user", userRoutes);

export default app;
