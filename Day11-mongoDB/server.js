const { response } = require("express");
const express = require("express");
const app = express();
const connectToDB = require("./db/index");
const UserModel = require("./models/User.model");
const PORT = 8000;

connectToDB();

// using this we can send and view json objects.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  
  res.send("working");
});

app.post("/post", async (request, response) => {

const data = new UserModel({
  name:request.body.name,
  phone:request.body.phone
});

const val = data.save();
response.json(val);

});

app.listen(PORT, function () {
  console.log("Server running on port", PORT);
});