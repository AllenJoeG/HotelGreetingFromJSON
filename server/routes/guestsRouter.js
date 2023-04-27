const express = require('express');

const router = express.Router();

const guestsJson = require('../data/Guests.json');


router.get('/', (req, res) => {
  console.log('GET /guests');
  res.send(guestsJson);
});

module.exports = router;