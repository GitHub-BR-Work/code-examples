const express = require("express");
const path = require("path");
const RateLimit = require("express-rate-limit");
const app = express();

// set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

// apply rate limiter to all requests
app.use(limiter);

app.use(express.static("public"));

app.get("/test", (_req, res) => {
  res.status(200).send("Hello world");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
