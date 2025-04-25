const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "The second server is also running!" });
});

app.listen(3001, () => {
  console.log("server2 is ready");
});
