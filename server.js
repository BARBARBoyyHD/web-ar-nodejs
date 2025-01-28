const express = require("express");
const path = require("path");
const cors = require("cors")

const app = express();

app.use(cors())
app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
