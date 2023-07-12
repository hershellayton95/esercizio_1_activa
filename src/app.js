import express from "express";
import userRoutes from "./routers/userRoute.js";

const app = express();

//plugin
app.use(express.json());

//routes
app.use("/user", userRoutes);

export default app;
