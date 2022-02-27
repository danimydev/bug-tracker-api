const jwt = require('jsonwebtoken');
const { JWTStrategy } = require('./jwtStrategy');
const { memoryDatabase } = require('../../../database');
const { LoginMiddleware } = require('./login');
const { VerifyMiddleware } = require('./verify');

const secretKey = 'secret';

const jwtStrategy = new JWTStrategy({
  jwt,
  secretKey,
})

module.exports = {
  jwtLoginMiddleware: new LoginMiddleware({
    strategy: jwtStrategy,
    database: memoryDatabase,
  }),
  jwtVerifyMiddleware: new VerifyMiddleware({
    strategy: jwtStrategy,
  }),
}