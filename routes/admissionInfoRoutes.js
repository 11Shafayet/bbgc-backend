const express = require('express');
const {
  addAdmissionInfo,
  getAdmissionInfo,
  deleteAdmissionInfo,
} = require('../controllers/admissionInfoControllers');

const router = express.Router();

module.exports = function (admissionInfoCollection) {
  router.post('/', addAdmissionInfo(admissionInfoCollection));
  router.get('/', getAdmissionInfo(admissionInfoCollection));
  router.delete('/:id', deleteAdmissionInfo(admissionInfoCollection));

  return router;
};
