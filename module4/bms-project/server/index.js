const express = require('express');
const app = express();
require("dotenv").config();

require("./config/dbConfig");

app.listen(8082, () => {
  console.log('Server is running on http://localhost:8082');
});