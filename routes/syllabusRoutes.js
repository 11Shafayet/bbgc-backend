const express = require('express');
const {
  addSyllabus,
  getAllSyllabus,
  deleteSyllabus,
} = require('../controllers/syllabusControllers');

const router = express.Router();

module.exports = function (syllabusCollection) {
  router.post('/', addSyllabus(syllabusCollection));
  router.get('/', getAllSyllabus(syllabusCollection));
  router.delete('/:id', deleteSyllabus(syllabusCollection));

  return router;
};
