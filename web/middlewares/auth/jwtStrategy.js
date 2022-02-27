class JWTStrategy {

  #jwt;
  #secretKey;

  constructor({ jwt, secretKey }) {
    this.#jwt = jwt;
    this.#secretKey = secretKey;
  }

  sign(values) {
    return this.#jwt.sign(values, this.#secretKey);
  }

  verify(token) {
    return this.#jwt.verify(token, this.#secretKey);
  }

}

module.exports = {
  JWTStrategy,
}