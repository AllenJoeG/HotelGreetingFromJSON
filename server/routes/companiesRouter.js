const express = require('express');

const router = express.Router();

const companiesJson = require('../data/Companies.json');

router.get('/', (req, res) => {
  console.log('GET /companies');
  res.send(companiesJson);
});

module.exports = router;