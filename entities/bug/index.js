const { BugFactory } = require('./factory');
const { cryptoUUID, isUUID } = require('../../utils/id');

const factory = new BugFactory({
  generateId: cryptoUUID,
  validateId: isUUID,
});

module.exports = {
  bugFactory: factory,
}