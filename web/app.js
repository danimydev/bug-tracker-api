const express = require('express');
const app = express();

const authRouter = require('./routes/auth');
const bugRouter = require('./routes/bugs');
const userRouter = require('./routes/users');

const { json } = express;
app.use(json());

app.use('/auth', authRouter);
app.use('/bugs', bugRouter);
app.use('/users', userRouter);

module.exports = app;