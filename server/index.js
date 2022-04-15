const express = require("express");
const cors = require("cors");
const app = express();
const COLORS = require("./colors.json");
const port = 5000;

app.use(cors());

app.get("/colors", (req, res) => {
  res.status(201).json(COLORS);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
