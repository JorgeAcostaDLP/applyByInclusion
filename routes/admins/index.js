const express = require('express');
const router = express.Router();
const { Admins } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Admins.all());
});
router.get('/:adminKey', async (req, res) => {
  res.json(await Admins.once(req.params.adminKey));
});
//this route is used to create a new admin. The body must consist of userName and userPassword.
router.post('/', (req, res, next) => {
  Admins.newAdmin(req.body.userName, req.body.userPassword);
});

module.exports = router;
