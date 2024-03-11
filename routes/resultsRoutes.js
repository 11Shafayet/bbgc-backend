const express = require('express');
const {
  addResult,
  getAllResults,
  deleteResult,
} = require('../controllers/resultsControllers');

const router = express.Router();

module.exports = function (resultsCollection) {
  router.post('/', addResult(resultsCollection));
  router.get('/', getAllResults(resultsCollection));
  router.delete('/:id', deleteResult(resultsCollection));

  return router;
};
