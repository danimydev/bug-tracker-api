const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32);

function encrypted(password) {
  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  let encryptedData = cipher.update(password, "utf-8", "hex");
  encryptedData += cipher.final("hex");
  return encryptedData;
}

function decrypted(encrypted) {
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  let decryptedData = decipher.update(encrypted, "hex", "utf-8");
  decryptedData += decipher.final("utf8");
  return decryptedData;
}

module.exports = {
  encrypted,
  decrypted,
}