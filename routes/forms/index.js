const express = require('express');
const router = express.Router();
const { Forms } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Forms.all());
});

//this route uses post to create a new row in the FORMS table using the newForm method
router.post('/', async (req, res) => {
  console.log(req);
  await Forms.newForm(
    req.body.textInput,
    req.body.textArea,
    req.body.checkBox ? true : false,
    req.body.date
  );
});

module.exports = router;
