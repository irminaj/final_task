const express = require("express");
const userController = require("./controllers/user.controller.js");

const app = express();

app.use(express.json());
app.use("/users", userController);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
