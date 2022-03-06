const crypto = require('crypto');

function cryptoUUID() {
  return crypto.randomUUID();
}

function isUUID(uuid) {
  uuid = uuid.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
  return !uuid ? false : true
}

module.exports = {
  cryptoUUID,
  isUUID,
}