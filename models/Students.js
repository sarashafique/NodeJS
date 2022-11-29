const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String, 
  date:Date,
  math:   String,
  english: String,
  science: String,
  ss: String,
  lang: String,
  status : String
});
module.exports = mongoose.model("Student", studentSchema)