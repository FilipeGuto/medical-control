const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const clientRouter = require('././routes/clientRoute');

app.use(bodyParser.json());
app.use(cors());

app.use(clientRouter);

module.exports = app;
