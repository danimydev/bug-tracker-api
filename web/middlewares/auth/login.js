class LoginMiddleware {

  #strategy;
  #database;

  constructor({ strategy, database }) {
    this.#strategy = strategy;
    this.#database = database;
  }

  execute(httpRequest) {
    const { email, password } = httpRequest.body;
    const users = this.#database.select({
      table: 'user',
    });
    const user = users.filter(u => u.email === email)[0];
    if (!user) {
      return {
        statusCode: 404,
        body: {
          msg: 'no user email',
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
  }

}

module.exports = {
  LoginMiddleware,
}