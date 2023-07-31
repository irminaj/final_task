const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const UserModel = require("../models/user.js");

mongoose.connect("mongodb://localhost:27017/mongotest");

router.get("/", async (req, res) => {
  let users;
  try {
    users = await UserModel.find({});
    res.json({ users: users.map((user) => user.toObject()) });
  } catch (error) {
    res.status(500).send("Something went wrong");
    return;
  }
});

router.get("/:id", async (req, res, next) => {
  const userId = req.params.id;
  let user;
  try {
    user = await UserModel.findById(userId);
  } catch (error) {
    res.status(500).send("Something went wrong");
    return;
  }
  if (!user) {
    res.status(404).send("There was no user found with the provided ID");
  }
  res.json(user);
});

router.post("/", async (req, res) => {
  const { firstName, lastName, email, birthDate } = req.body;

  const exists = await UserModel.findOne({ email });

  if (exists) {
    res.status(404).json({ error: "Email is already in use" });
    return;
  }

  try {
    const newUser = await UserModel.create({ firstName, lastName, email, birthDate });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).json({ error: "All fields must be filled" });
    return;
  }
});

router.patch("/:id", async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, email, birthDate } = req.body;
  const exists = await UserModel.findOne({ email });
  if (!firstName || !lastName || !email || !birthDate) {
    res.status(400).json({ error: "All fields must be filled" });
    return;
  }

  if (exists) {
    res.status(404).json({ error: "Email is already in use" });
    return;
  }

  try {
    const updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, req.body);
    res.status(201).send(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
    return;
  }
});

router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  let user;
  try {
    user = await UserModel.deleteOne({ _id: userId });
  } catch (error) {
    res.status(500).send("Something went wrong");
    return;
  }
  if (!user) {
    res.status(404).send("There was no user found with the provided ID");
  }
  res.status(200).send(`User with id: ${userId} deleted`);
});

module.exports = router;
