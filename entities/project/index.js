const { ProjectFactory } = require('./factory');
const { cryptoUUID } = require('../../utils/id');

const factory = new ProjectFactory({
  generateId: cryptoUUID,
});

module.exports = {
  projectFactory: factory,
}