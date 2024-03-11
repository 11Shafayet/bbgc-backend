const express = require('express');
const {
  addEvents,
  getAllEvents,
  deleteEvent,
} = require('../controllers/eventsControllers');

const router = express.Router();

module.exports = function (eventsCollection) {
  router.post('/', addEvents(eventsCollection));
  router.get('/', getAllEvents(eventsCollection));
  router.delete('/:id', deleteEvent(eventsCollection));

  return router;
};
