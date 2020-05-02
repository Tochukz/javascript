const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
 origin: ['http://localhost:5000', 'http://127.0.0.1:5500']   
}));

const env = process.env;
const connection = mysql.createConnection({
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASS,
    database: env.MYSQL_DB
})

connection.connect(err => {
  if (err) {
     throw err;
  }
  console.log('Connection established!');
});

app.get('/books', (req, res) => {
  let page = req.query.page || 1;
  if (!parseInt(page)) {
    return res.json([], 400);
  }
  const pageSize = parseInt(req.query.pagesize) || 5;
  const offset = pageSize * (parseInt(page) - 1);
  connection.query(`SELECT * FROM books LIMIT ${pageSize} OFFSET ${offset}`, (err, results, fields) => {
    if (err) {
        throw err;
    }
    //console.log(fields);
    return res.json(results);
  });
});

const port  = process.env.PORT 
app.listen(port, () => console.log(`CORS enabled Server is running on port ${port}`))