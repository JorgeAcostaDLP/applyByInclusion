const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const formsRouter = require('./routes/forms');
const adminsRouter = require('./routes/admins');
const bodyParser = require('body-parser');
// serve the homepage from here
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// handle api calls from here

app.use('/forms', formsRouter);
app.use('/admins', adminsRouter);
app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
