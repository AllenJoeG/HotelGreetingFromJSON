const express = require('express');

const router = express.Router();

const salutationsJson = require('../data/Salutations.json');


router.get('/', (req, res) => {
  console.log('GET /salutations');
  res.send(salutationsJson);
});

module.exports = router;