const { getAllClients } = require('../models/client-models');

const serviceAllClients = async () => {
  const clients = await getAllClients();

  console.log("CHEGA ==>", clients);

  return clients;
};

module.exports = {
  serviceAllClients,
};
