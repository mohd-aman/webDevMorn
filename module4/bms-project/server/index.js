const express = require('express');
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/dbConfig");

const userRoute = require("./routes/userRoutes");
const movieRoute = require("./routes/movieRoutes");
const theatreRoute = require("./routes/theatreRoutes");

app.use(cors());

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/theatre", theatreRoute);

app.listen(8082, () => {
  console.log('Server is running on http://localhost:8082');
});