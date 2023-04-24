const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateToken(payload) {
  const token = jwt.sign({ payload }, "Matias", {
    expiresIn: "2d",
  });

  return token;
}

function validateToken(token) {
  return jwt.verify(token, "Matias");
}

module.exports = { validateToken, generateToken };
