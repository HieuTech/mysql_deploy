import express from 'express';

const app = express();

import {connect, mysqlDB} from './mysql.js';
connect();


app.get('/user', (req, res) => {
  let queryString = `SELECT * FROM user`;
  mysqlDB.query(queryString, (err, rows, fields) => {
    if (err) throw err;
    res.json(rows);
  });

  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
  
}   );