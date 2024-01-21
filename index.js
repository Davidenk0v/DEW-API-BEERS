require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('public'))
    .use(morgan('dev'))
    .use(cors())
    .use(express.json())
    .use(bodyParser.json());

require('./routes.js')(app);
