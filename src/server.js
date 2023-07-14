import "dotenv/config";
import mongoose from "mongoose";
import config from "./configurations/variablesConfig.js";
import app from "./app.js";

const port = config.PORT;
const uri = config.MONGODB_URI;
const authName = config.MONGODB_USERNAME;
const authPass = config.MONGODB_PASSWORD;
const dbNameEnv = config.MONGODB_DB_NAME;

const connectWithRetry = () => {
  mongoose
    .connect(uri, { user: authName, pass: authPass, dbName: dbNameEnv })
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
      });
    })
    .catch((e) => {
      console.error("Failed to connect to MongoDB:", e.message);
      console.error("Server not started");
      console.error("Retry Connection");
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();
