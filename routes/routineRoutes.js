const express = require('express');
const {
  addRoutine,
  getAllRoutine,
  deleteRoutine,
} = require('../controllers/routineControllers');

const router = express.Router();

module.exports = function (routineCollection) {
  router.post('/', addRoutine(routineCollection));
  router.get('/', getAllRoutine(routineCollection));
  router.delete('/:id', deleteRoutine(routineCollection));

  return router;
};
