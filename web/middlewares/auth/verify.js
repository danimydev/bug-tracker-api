class VerifyMiddleware {

  #strategy

  constructor({ strategy }) {
    this.#strategy = strategy
  }

  execute(httpRequest) {
    try {
      const { authorization } = httpRequest.headers;
      console.log(authorization);
      if (!authorization) {
        return {
          statusCode: 401,
        }
      }
      const authValue = authorization.split(' ')[1];
      const user = this.#strategy.verify(authValue);
      return {
        statusCode: 201,
      }
    } catch (error) {
      return {
        statusCode: 401,
      }
    }
  }

}

module.exports = {
  VerifyMiddleware,
}