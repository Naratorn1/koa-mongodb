const mongoose = require("mongoose");

const connect = 'mongodb://localhost:27017/student?authSource=admin';
mongoose.connect(connect, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("connected", function() {
  console.log("connected");
}); 
const Schema = mongoose.Schema;

const student = new mongoose.Schema({
  id: String,
  Name: String,
  Surname: String,
  thumbnail: String
});

let students = mongoose.model("student", student);
module.exports = students;