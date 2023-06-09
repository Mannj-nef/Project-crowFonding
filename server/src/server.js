require("dotenv").config();

const express = require("express");
const fs = require("fs");

const verifyToken = require("./middleware/auth");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/api/campaigns", verifyToken, (req, res) => {
  res.json(database.campaigns);
});

app.listen(4001, () => console.log("Server started on port 4001"));
