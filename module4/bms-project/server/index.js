const express = require('express');
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/dbConfig");

const userRoute = require("./routes/userRoutes");
const movieRoute = require("./routes/movieRoutes");

app.use(cors());

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);

app.listen(8082, () => {
  console.log('Server is running on http://localhost:8082');
});