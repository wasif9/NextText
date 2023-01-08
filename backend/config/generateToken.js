const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { //signs jwt token or basically creates it and signs it with jwt secret from .env file
    expiresIn: "30d",
  });
};

module.exports = generateToken;