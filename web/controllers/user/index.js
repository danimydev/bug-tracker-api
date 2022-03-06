const { GetUserController } = require('./get');
const { CreateUserController } = require('./create');
const { UpdateUserController } = require('./update');
const { DeleteUserController } = require('./delete');
const { GetUserBugsController } = require('./getBugs');

const {
  getUserUseCase,
  getUserBugsUseCase,
  createUserUseCase,
  deleteUserUseCase,
  updateUserUseCase,
} = require('../../../use_cases/user');

module.exports = {
  getUserController: new GetUserController({
    usecase: getUserUseCase,
  }),
  getUserBugsController: new GetUserBugsController({
    usecase: getUserBugsUseCase,
  }),
  createUserController: new CreateUserController({
    usecase: createUserUseCase,
  }),
  udpateUserController: new UpdateUserController({
    usecase: updateUserUseCase,
  }),
  deleteUserController: new DeleteUserController({
    usecase: deleteUserUseCase,
  }),
}