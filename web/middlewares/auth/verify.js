class VerifyMiddleware {

  #strategy

  constructor({ strategy }) {
    this.#strategy = strategy
  }

  execute(httpRequest) {
    try {
      const { authorization } = httpRequest.headers;
      if (!authorization) {
        return {
          statusCode: 401,
        }
      }
      const authValue = authorization.split(' ')[1];
      const user = this.#strategy.verify(authValue);
      return {
        statusCode: 201,
        body: {
          user,
        }
      }
    } catch (error) {
      return {
        statusCode: 401,
        body: {
          error: JSON.stringify(error),
        }
      }
    }
  }

}

module.exports = {
  VerifyMiddleware,
}