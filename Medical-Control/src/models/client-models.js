const db = require('../models/connect');

const getAllClients = () => {
  const getAll = "SELECT * FROM client";

  return new Promise((resolve, reject) => {
    db.query(getAll, (err, res) => {
      if (err) { reject(err); return; }
      resolve(res);
    });
  });
};

module.exports = {
  getAllClients,
};
