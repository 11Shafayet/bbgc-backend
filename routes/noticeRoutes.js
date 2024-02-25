const express = require('express');
const {
  addNotice,
  getAllNotice,
  deleteNotice,
} = require('../controllers/noticeControllers');

const router = express.Router();

module.exports = function (noticeCollection) {
  router.post('/', addNotice(noticeCollection));
  router.get('/', getAllNotice(noticeCollection));
  router.delete('/:id', deleteNotice(noticeCollection));

  return router;
};
