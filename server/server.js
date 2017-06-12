const express = require('express');
const port = 5000;
const db = require('../db/config');
const router = require('./routes/bucketRouter.js')

const bodyParser = require('body-parser');
const morgan = require('morgan');

app = express();

app.use(express.static('../public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(morgan('dev'))
  .use('/api', router);


app.listen(port, 'localhost', () => {
    console.log('listening to server on ', port);
})
