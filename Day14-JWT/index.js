const express = require("express");
const app = express();
const PORT = 9000;
const jwt = require("jsonwebtoken");
const secret = "Secret";

app.use(express.json());

const createToken = async () => {
    const token = await jwt.sign({ _id: "55245887625452" }, "mynameisshubhamsighrathore", {
        expiresIn: "60 seconds"
    });
    console.log(token);

    const userVerify = await jwt.verify(token, "mynameisshubhamsighrathore");
    console.log(userVerify);
}

createToken();

app.listen(PORT, console.log("Server listening on port " + PORT));