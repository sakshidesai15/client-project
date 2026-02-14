const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  // Remove "Bearer "
  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, "secretkey");
    req.admin = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
