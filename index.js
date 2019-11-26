const express = require("express");

const app = express();

const PORT = process.env.PORT || 3100;

app.get("/", (req, res) => {
  res.send("Server is up an running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
