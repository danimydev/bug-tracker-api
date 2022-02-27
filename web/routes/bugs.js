const router = require('express').Router();
const { makeExpressCallback, makeAuthMiddleware } = require('../adapt_request');
const { jwtVerifyMiddleware } = require('../middlewares/auth');
const { getById, getAll, create, update, destroy } = require('../controllers/bug');

router.get('/', makeExpressCallback(getAll));
router.get('/:id', makeExpressCallback(getById));
router.post('/', makeAuthMiddleware(jwtVerifyMiddleware), makeExpressCallback(create));
router.patch('/:id', makeAuthMiddleware(jwtVerifyMiddleware), makeExpressCallback(update));
router.delete('/:id', makeAuthMiddleware(jwtVerifyMiddleware), makeExpressCallback(destroy));

module.exports = router;