const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();

users = [];

router.get("/", async (req, res) => {
  const client = await new MongoClient("mongodb://localhost:27017").connect();
  const usersArray = await client.db("mongotest").collection("users").find({}).toArray();
  await client.close();
  res.send(usersArray);
});

router.post("/", async (req, res) => {
  const newUser = req.body;
  const client = await new MongoClient("mongodb://localhost:27017").connect();
  await client.db("mongotest").collection("users").insertOne(newUser);
  await client.close();
  res.status(201).send(newUser);
});

router.patch("/:id", async (req, res) => {
  const userId = req.params.id;
  const client = await new MongoClient("mongodb://localhost:27017").connect();
  await client
    .db("mongotest")
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: req.body });
  await client.close();
  res.status(200).send(`User with id: ${userId} edited`);
});

router.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  const client = await new MongoClient("mongodb://localhost:27017").connect();
  await client
    .db("mongotest")
    .collection("users")
    .deleteOne({ _id: new ObjectId(userId) });
  await client.close();
  res.status(201).send(`User with id: ${userId} deleted`);
});

module.exports = router;
