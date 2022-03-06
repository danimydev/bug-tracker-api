const router = require('express').Router();
const { makeExpressCallback, makeAuthMiddleware } = require('../adapt_request');
const { jwtVerifyMiddleware } = require('../middlewares/auth');

const {
  getUserController,
  getUserBugsController,
  createUserController,
  udpateUserController,
  deleteUserController } = require('../controllers/user');

router.get('/', makeExpressCallback(getUserController));

router.get('/:id', makeExpressCallback(getUserController));

router.get('/:id/bugs', makeExpressCallback(getUserBugsController));

router.post('/', makeExpressCallback(createUserController));

router.patch('/:id',
  makeAuthMiddleware(jwtVerifyMiddleware),
  makeExpressCallback(udpateUserController));

router.delete('/:id',
  makeAuthMiddleware(jwtVerifyMiddleware),
  makeExpressCallback(deleteUserController));

module.exports = router;