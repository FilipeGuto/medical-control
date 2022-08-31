const express = require('express');
const clientRouter = express.Router();

const {
  getAllClients,
} = require('../controllers/client-controller');

clientRouter.get('/clients', getAllClients);

module.exports = clientRouter;
