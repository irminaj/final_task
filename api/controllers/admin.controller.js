const express = require("express");
const mongoose = require("mongoose");
const AdminModel = require("../models/admin");

const router = express.Router();

mongoose.connect("mongodb://localhost:27017/mongotest");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "All fields must be filled" });
    return;
  }

  const admin = await AdminModel.findOne({ username });

  if (!admin || admin.password !== req.body.password) {
    res.status(400).json({ error: "Incorrect username or password" });
    return;
  }

  res.status(200).json(admin);
});

router.post("/signup", async (req, res) => {
  const { username } = req.body;
  const exists = await AdminModel.findOne({ username });

  if (exists) {
    res.status(404).send({ error: "Username is already in use" });
    return;
  }

  try {
    const admin = await AdminModel.create({ username: req.body.username, password: req.body.password });
    res.status(200).json(admin);
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
});

module.exports = router;
