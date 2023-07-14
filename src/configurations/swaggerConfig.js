import swaggerJSDoc from "swagger-jsdoc";
import { readFile } from "fs/promises";

const jsonPackage = JSON.parse(
  await readFile(new URL("../../package.json", import.meta.url))
);
const jsonOpenAPI = JSON.parse(
  await readFile(new URL("../../openapi.json", import.meta.url))
);

const options = {
  definition: {
    ...jsonOpenAPI,
    info: {
      ...jsonOpenAPI.info,
      version: jsonPackage.version,
    },
  },
  apis: [],
};

export const swaggerSpec = swaggerJSDoc(options);
