const express = require('express');
const router = express.Router();
const { Forms } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Forms.all());
});

module.exports = router;
