import "dotenv/config";

const missingSetting = "Warning: No value set for this environment variable";

const config = {
  PORT: process.env.PORT || missingSetting,
  MONGODB_URI: process.env.MONGODB_URI || missingSetting,
  MONGODB_USERNAME: process.env.MONGODB_USERNAME || missingSetting,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || missingSetting,
  MONGODB_DB_NAME: process.env.MONGODB_DB_NAME || missingSetting,
};

export default config;
