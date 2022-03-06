const { CreateUserUseCase } = require('./create');
const { GetUserUseCase } = require('./get');
const { DeleteUserUseCase } = require('./delete');
const { UpdateUserUseCase } = require('./update');
const { GetUserBugsUseCase } = require('./getBugs');

const { bugFactory } = require('../../entities/bug');
const { knexAdapter } = require('../../database/adapters');

module.exports = {
  getUserUseCase: new GetUserUseCase({
    ormAdapter: knexAdapter,
  }),
  getUserBugsUseCase: new GetUserBugsUseCase({
    ormAdapter: knexAdapter,
  }),
  createUserUseCase: new CreateUserUseCase({
    ormAdapter: knexAdapter,
    factory: bugFactory,
  }),
  deleteUserUseCase: new DeleteUserUseCase({
    ormAdapter: knexAdapter,
  }),
  updateUserUseCase: new UpdateUserUseCase({
    ormAdapter: knexAdapter,
  }),
}