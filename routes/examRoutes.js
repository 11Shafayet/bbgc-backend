const express = require('express');
const {
  addExam,
  getAllExams,
  deleteExam,
} = require('../controllers/examControllers');

const router = express.Router();

module.exports = function (examCollection) {
  router.post('/', addExam(examCollection));
  router.get('/', getAllExams(examCollection));
  router.delete('/:id', deleteExam(examCollection));

  return router;
};
