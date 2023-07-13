import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Exsercise 1 Activa Express API with Swagger",
      version: "0.0.1",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      contact: {
        name: "hershellayton95",
        url: "https://github.com/hershellayton95",
      },
    },
  },
  apis: ["./src/routes/*.js", "./src/models/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);
