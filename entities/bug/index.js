const { BugFactory } = require('./factory');
const { cryptoUUID } = require('../../utils/id');

const factory = new BugFactory({
  generateId: cryptoUUID,
});

module.exports = {
  bugFactory: factory,
}