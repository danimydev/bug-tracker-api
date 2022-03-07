const router = require('express').Router();
const { makeExpressCallback, makeAuthMiddleware } = require('../adapt_request');
const { jwtVerifyMiddleware } = require('../middlewares/auth');
const { createBugController, getBugControler } = require('../controllers/bug');

router.get('/',
  //makeAuthMiddleware(jwtVerifyMiddleware),
  makeExpressCallback(getBugControler));

router.get('/:id',
  //makeAuthMiddleware(jwtVerifyMiddleware),
  makeExpressCallback(getBugControler));

router.post('/',
  //makeAuthMiddleware(jwtVerifyMiddleware),
  makeExpressCallback(createBugController));

module.exports = router;