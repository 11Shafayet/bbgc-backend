const express = require('express');
const {
  addTeacher,
  getAllTeacher,
  deleteTeacher,
} = require('../controllers/teachersControllers');

const router = express.Router();

module.exports = function (noticeCollection) {
  router.post('/', addTeacher(noticeCollection));
  router.get('/', getAllTeacher(noticeCollection));
  router.delete('/:id', deleteTeacher(noticeCollection));

  return router;
};
