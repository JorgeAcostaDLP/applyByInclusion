const express = require('express');
const router = express.Router();
const { Comments } = require('../../../models');

router.get('/', async (req, res) => {
  res.json(await Comments.all());
});

router.get('/:formId', async (req, res) => {
  res.json(await Comments.singleForm(req.params.formId));
});

//this route uses put to update an existing form with a comment made by a single admin. It requires form id to update a particular form
router.post('/', async (req, res) => {
  await Comments.newComment(
    req.body.adminId,
    req.body.adminUserName,
    req.body.formId,
    req.body.comment
  );
});

module.exports = router;
