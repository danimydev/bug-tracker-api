class LoginMiddleware {

  #strategy;
  #ormAdapter;

  constructor({ strategy, ormAdapter }) {
    this.#strategy = strategy;
    this.#ormAdapter = ormAdapter;
  }

  async execute(httpRequest) {
    try {
      const { email, password } = httpRequest.body;
      const user = await this.#ormAdapter.select({
        table: 'user',
        values: { email },
      });
      if (!user) {
        return {
          statusCode: 404,
          body: {
            msg: 'no user found',
          },
        }
      }
      if (user.password !== password) {
        return {
          statusCode: 401,
          body: {
            msg: 'invalid password',
          },
        }
      }
      const token = this.#strategy.sign({ email, password });
      return {
        statusCode: 201,
        body: {
          token,
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      }
    }
  }

}

module.exports = {
  LoginMiddleware,
}