const express = require("express");
const cors = require("cors");
const dbConnection = require("./api/db");
const User = require("./api/models/user");
const Branch = require("./api/models/branch");
const Appointment = require("./api/models/appointment");
const seed = require("./api/config/seed");
const routerIndex = require("./api/routes");
const { swaggerDocs } = require("./api/routes/swagger");
require("dotenv").config();

// Crear el servidor/aplicación de express
const app = express();

// Base de datos
dbConnection();

// Directorio Público
app.use(express.static("public"));

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
    credentials: true,
  })
);

// Lectura y parseo del body
app.use(express.json());

app.use("/api", routerIndex);
// Rutas

app.listen(3001, () => {
  console.log(`Servidor corriendo en puerto ${3001}`);
  swaggerDocs(app, 3001);
});
