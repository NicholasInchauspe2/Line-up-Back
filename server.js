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
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

app.use("/api", routerIndex);
// Rutas

app.listen(process.env.PORT, () => {
  // console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
  // swaggerDocs(app, process.env.PORT);
});
