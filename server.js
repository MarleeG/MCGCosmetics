const express = require("express");
const app = express();
var cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const apiroutes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", apiroutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
  });
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
