function isNotEmptyString(string) {
  return typeof string === 'string' && string.length !== 0;
}

function isValidEmail(email) {
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegexp.test(email)
}

module.exports = {
  isNotEmptyString,
  isValidEmail,
}