const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const clientRouter = require('././routes/clientRoute');
const errorHandler = require('../src/middlewares/errorHandler');

app.use(bodyParser.json());
app.use(cors());

app.use(clientRouter);
app.use(errorHandler);

module.exports = app;
