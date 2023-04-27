const express = require('express');

const router = express.Router();

const templatesJson = require('../data/Templates.json');


router.get('/', (req, res) => {
  console.log('GET /templates');
  res.send(templatesJson);
});

module.exports = router;