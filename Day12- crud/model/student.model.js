const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    default: 1,
    validate(value) {
      if (value < 1) throw new Error("Negative roll numbers are not real...!");
    },
  },
});

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;