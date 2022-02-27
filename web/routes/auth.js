const router = require('express').Router();
const { makeExpressCallback } = require('../adapt_request');
const { jwtLoginMiddleware } = require('../middlewares/auth');

router.post('/login', makeExpressCallback(jwtLoginMiddleware))

module.exports = router;