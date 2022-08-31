const {
  serviceAllClients,
} = require('../services/client-services')

const { sucess } = require('../utils/dictionary/statusCode');

const getAllClients = async (_req, res, next) => {
  try {
    const clients = await serviceAllClients();

    res.status(sucess).json(clients);
  } catch (error) {
    console.log(`GET ALL CLIENTS -> ${error.message}`);
    return next(error);
  }
};


module.exports = {
  getAllClients,
}