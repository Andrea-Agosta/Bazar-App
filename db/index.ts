const db = require('./db');

const getProductById = async productId => {
  return await db.getProductById(productId);
};

module.exports = {
  getProductById,
};