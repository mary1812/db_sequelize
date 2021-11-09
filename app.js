const express = require('express');
const userController = require('./controllers/userController');
const app = express();

const bodyParser = express.json();

app.use(bodyParser);

app.get('/users', userController.getUsers)

app.post('/user')

module.exports = app;