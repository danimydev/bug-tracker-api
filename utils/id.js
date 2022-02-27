const crypto = require('crypto');

function cryptoUUID() {
  return crypto.randomUUID();
}

module.exports = {
  cryptoUUID,
}