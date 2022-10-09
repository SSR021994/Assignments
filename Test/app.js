const express = require("express");
const app = express();
const PORT = 3000;
const DBConfig = require("./db");
const userRoute = require("./routes/user");

DBConfig();

app.use(express.json());

app.use('/user', userRoute);

app.listen(PORT, console.log("Server running on port", PORT));