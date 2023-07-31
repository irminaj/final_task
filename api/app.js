const express = require("express");
const userController = require("./controllers/user.controller.js");
const adminController = require("./controllers/admin.controller.js");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/users", userController);
app.use("/admin", adminController);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
