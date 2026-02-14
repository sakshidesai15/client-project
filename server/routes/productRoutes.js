const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const multer = require("multer");
const auth = require("../middleware/auth");


// ================= MULTER SETUP =================
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });
// ===============================================


// GET all products (Public)
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


// POST add product (Protected)
router.post("/", auth, upload.single("image"), async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.file ? req.file.filename : ""
  });

  await newProduct.save();
  res.json(newProduct);
});


// UPDATE product (Protected)
router.put("/:id", auth, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});


// DELETE product (Protected)
router.delete("/:id", auth, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});


module.exports = router;
