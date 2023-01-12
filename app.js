require('./database/db');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const menuRouter = require('./routes/menus');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/menu', menuRouter);
mongoose.set('strictQuery', true);

module.exports = app;
