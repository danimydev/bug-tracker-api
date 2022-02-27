const router = require('express').Router();
const { makeExpressCallback, makeAuthMiddleware } = require('../adapt_request');
const { getById, getAll, create, update, destroy, getProjectUsers, getProjectBugs } = require('../controllers/project');
const { jwtVerifyMiddleware } = require('../middlewares/auth');

router.get('/', makeExpressCallback(getAll));
router.get('/:id', makeExpressCallback(getById));
router.get('/:id/users', makeExpressCallback(getProjectUsers));
router.get('/:id/bugs', makeExpressCallback(getProjectBugs));
router.post('/', makeAuthMiddleware(jwtVerifyMiddleware), makeExpressCallback(create));
router.patch('/:id', makeAuthMiddleware(jwtVerifyMiddleware), makeExpressCallback(update));
router.delete('/:id', makeAuthMiddleware(jwtVerifyMiddleware), makeExpressCallback(destroy));

module.exports = router;