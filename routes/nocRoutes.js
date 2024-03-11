const express = require('express');
const {
  addNOC,
  getAllNOC,
  deleteNOC,
} = require('../controllers/nocControllers');

const router = express.Router();

module.exports = function (nocCollection) {
  router.post('/', addNOC(nocCollection));
  router.get('/', getAllNOC(nocCollection));
  router.delete('/:id', deleteNOC(nocCollection));

  return router;
};
