const { GetAllController } = require('./getAll');
const { CreateController } = require('./create');
const { GetByIdController } = require('./getById');
const { UpdateController } = require('./update');
const { DeleteController } = require('./delete');
const { GetBugsController } = require('./getBugs');

const { getUser } = require('../../../use_cases/user/getById');
const { getAll } = require('../../../use_cases/user/getAll');
const { createUser } = require('../../../use_cases/user/create');
const { updateUser } = require('../../../use_cases/user/update');
const { deleteUser } = require('../../../use_cases/user/delete');
const { getBugs } = require('../../../use_cases/user/getBugs');

const { memoryDatabase } = require('../../../database');

const { userFactory } = require('../../../entities/user');

module.exports = {
  getAll: new GetAllController({
    database: memoryDatabase,
    usecase: getAll,
  }),
  getById: new GetByIdController({
    database: memoryDatabase,
    usecase: getUser,
  }),
  getBugs: new GetBugsController({
    database: memoryDatabase,
    usecase: getBugs,
  }),
  create: new CreateController({
    database: memoryDatabase,
    usecase: createUser,
    factory: userFactory,
  }),
  update: new UpdateController({
    database: memoryDatabase,
    usecase: updateUser,
  }),
  destroy: new DeleteController({
    database: memoryDatabase,
    usecase: deleteUser,
  }),
}