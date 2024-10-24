const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const app = express();
const webRoutes = require("./routes/web");

app.use(cors()); // Để cho phép giao tiếp giữa backend và frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

app.use('/',webRoutes)

app.listen(PORT,HOSTNAME, () => {
  console.log(`Server is running on hostname ${HOSTNAME}:${PORT}`);
});
