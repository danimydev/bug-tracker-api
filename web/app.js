const express = require('express');
const app = express();

const bugRouter = require('./routes/bugs');
const userRouter = require('./routes/users');
const projectRouter = require('./routes/projects');
const authRouter = require('./routes/auth');

const { json } = express;
app.use(json());

app.use('/bugs', bugRouter);
app.use('/users', userRouter);
app.use('/projects', projectRouter);
app.use('/auth', authRouter);

module.exports = app;