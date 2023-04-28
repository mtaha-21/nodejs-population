const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://taham:test1234@cluster0.f5cs2dd.mongodb.net/?retryWrites=true&w=majority"
);

app.use(require("./routes/route"));

app.listen(3000, () => console.log("Server on!"));
