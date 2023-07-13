import "dotenv/config";
import mongoose from "mongoose";
import config from "./configurations/config.js";
import app from "./app.js";

const port = config.PORT;
const uri = config.MONGODB_URI;
const authName = config.MONGODB_USERNAME;
const authPass = config.MONGODB_PASSWORD;
const dbNameEnv = config.MONGODB_DB_NAME;

mongoose
  .connect(uri, { user: authName, pass: authPass, dbName: dbNameEnv })
  .then(
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    })
  )
  .catch((e) => console.log(e));
