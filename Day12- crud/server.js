const express = require("express");
const app = express();
const DB = require("./db/index");
const studentModel = require("./model/student.model");
const PORT = 8000;

// connecting database
DB();

// allowing json objects
app.use(express.json());

// create route
app.post("/student", async function (req, res) {
  const student = new studentModel(req.body);
  try {
    await student.save();
    res.send("Data saved");
  } catch (error) {
    res.send(error.message);
  }
});

// get route
app.get("/student", async function (req, res) {
  // {} -> inside find will fetch all data
  // const response = await fetch(url)
  const student = await studentModel.find({});

  try {
    res.send(student);
  } catch (error) {
    res.send(error);
  }
});

// update route
app.put("/student/:id", async function (req, res) {
  // after colon would be your key and value you sned from postman
  // params are parameters
  try {
    // findByIdAndUpdate -> 2 parameters/ arguments i.e. 1- id , 2 - payload
    await studentModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Data updated....!");
  } catch (error) {
    res.send(error.message);
  }
});

// delete routes
app.delete("/student/:id", async function (req, res) {
  try {
    // findByIdAndDelete takes 1 argument called id
    const  student = await studentModel.findByIdAndDelete(req.params.id);
    res.send("Data deleted successfully........!");
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT, console.log("Server listening on port " + PORT));