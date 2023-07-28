const express = require("express");
const router = express.Router();

users = [];

router.get("/", (req, res) => {
  res.send("Get users");
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.status(201).send(users);
});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
