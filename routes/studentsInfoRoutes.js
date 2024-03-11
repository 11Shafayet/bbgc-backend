const express = require('express');
const {
  addStudentsInfo,
  getStudentsInfo,
  deleteStudentInfo,
} = require('../controllers/studentsInfoControllers');

const router = express.Router();

module.exports = function (studentsInfoCollection) {
  router.post('/', addStudentsInfo(studentsInfoCollection));
  router.get('/', getStudentsInfo(studentsInfoCollection));
  router.delete('/:id', deleteStudentInfo(studentsInfoCollection));

  return router;
};
