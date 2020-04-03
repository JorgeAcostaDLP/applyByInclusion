const mysql = require('mysql2');
var con = mysql.createConnection({
  host: '10.12.0.5',
  port: '3306',
  user: 'root',
  password: 'password'
});

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
  con.query('CREATE DATABASE production', function(err, result) {
    if (err) throw err;
    console.log('Database created');
  });
});
