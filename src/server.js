import "dotenv/config";

import config from "./config.js";

import app from "./app.js";

const port = config.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
