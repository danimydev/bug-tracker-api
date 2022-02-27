const { UserFactory } = require('./factory');
const { cryptoUUID } = require('../../utils/id');
const { encrypted } = require('../../utils/password');

const factory = new UserFactory({
  generateId: cryptoUUID,
  encrypted,
});

module.exports = {
  userFactory: factory,
}