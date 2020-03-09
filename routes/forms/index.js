const express = require('express');
const router = express.Router();
const { Forms } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Forms.all());
});

//this route uses post to create a new row in the FORMS table using the newForm method
router.post('/', async (req, res) => {
  await Forms.newForm(
    req.body.textInput,
    req.body.textArea,
    req.body.checkBox,
    req.body.date
  );
});

//this route uses put to update an existing form with a comment made by a single admin. It requires form id to update a particular form
router.put('/', async (req, res) => {
  await Forms.update(req.body.formId, req.body.adminId, req.body.comment);
});

module.exports = router;
