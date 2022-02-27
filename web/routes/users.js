const router = require('express').Router();
const { makeExpressCallback, makeAuthMiddleware } = require('../adapt_request');
const { jwtVerifyMiddleware } = require('../middlewares/auth');
const { getById, getAll, create, update, destroy, getUserBugs } = require('../controllers/user');

router.get('/', makeExpressCallback(getAll));
router.get('/:id', makeExpressCallback(getById));
router.get('/:id/bugs', makeExpressCallback(getUserBugs));
router.post('/', makeExpressCallback(create));
router.patch('/:id', makeAuthMiddleware(jwtVerifyMiddleware), makeExpressCallback(update));
router.delete('/:id', makeAuthMiddleware(jwtVerifyMiddleware), makeExpressCallback(destroy));

module.exports = router;