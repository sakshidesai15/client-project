const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// ==========================
// ADMIN LOGIN
// ==========================
const ADMIN = {
  email: "admin@test.com",
  password: "123456"
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN.email && password === ADMIN.password) {
    const token = jwt.sign({ email }, "secretkey");
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});


// ==========================
// USERS CRUD ROUTES
// ==========================

// GET users
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// CREATE user
router.post("/users", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

// UPDATE user
router.put("/users/:id", async (req, res) => {
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE user
router.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
