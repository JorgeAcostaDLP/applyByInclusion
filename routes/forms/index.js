const express = require('express');
const router = express.Router();
const { Forms } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Forms.all());
});

router.get('/:id', async (req, res) => {
  res.json(await Forms.single(req.params.id));
});
//this route uses post to create a new row in the FORMS table using the newForm method
router.post('/', async (req, res) => {
  await Forms.newForm(
    req.body.textInput,
    req.body.textArea,
    req.body.checkBox ? true : false,
    req.body.date
  );
});

//this route will update the status
router.put('/', async (req, res) => {
  await Forms.updateForm(req.body.formId, req.body.status);
});

module.exports = router;
