const jwt = require('jsonwebtoken');
const { JWTStrategy } = require('./jwtStrategy');
const { LoginMiddleware } = require('./login');
const { knexAdapter } = require('../../../database/adapters');
const { VerifyMiddleware } = require('./verify');

const secretKey = 'secret';

const jwtStrategy = new JWTStrategy({
  jwt,
  secretKey,
});

module.exports = {
  jwtLoginMiddleware: new LoginMiddleware({
    strategy: jwtStrategy,
    ormAdapter: knexAdapter,
  }),
  jwtVerifyMiddleware: new VerifyMiddleware({
    strategy: jwtStrategy,
  }),
}