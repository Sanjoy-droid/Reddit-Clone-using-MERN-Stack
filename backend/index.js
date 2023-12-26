const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

connectToMongo();

const port = 5000;

app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
