const { GetAllController } = require('./getAll');
const { CreateController } = require('./create');
const { GetByIdController } = require('./getById');
const { UpdateController } = require('./update');
const { DeleteController } = require('./delete');
const { GetUsersController } = require('./getUsers');
const { GetBugsController } = require('./getBugs');

const { getProject } = require('../../../use_cases/project/getById');
const { getAll } = require('../../../use_cases/project/getAll');
const { createProject } = require('../../../use_cases/project/create');
const { updateProject } = require('../../../use_cases/project/update');
const { deleteProject } = require('../../../use_cases/project/delete');
const { getUsers } = require('../../../use_cases/project/getUsers');
const { getBugs } = require('../../../use_cases/project/getBugs');

const { memoryDatabase } = require('../../../database');

const { projectFactory } = require('../../../entities/project');

module.exports = {
  getAll: new GetAllController({
    database: memoryDatabase,
    usecase: getAll,
  }),
  getById: new GetByIdController({
    database: memoryDatabase,
    usecase: getProject,
  }),
  getProjectUsers: new GetUsersController({
    database: memoryDatabase,
    usecase: getUsers,
  }),
  getProjectBugs: new GetBugsController({
    database: memoryDatabase,
    usecase: getBugs,
  }),
  create: new CreateController({
    database: memoryDatabase,
    usecase: createProject,
    factory: projectFactory,
  }),
  update: new UpdateController({
    database: memoryDatabase,
    usecase: updateProject,
  }),
  destroy: new DeleteController({
    database: memoryDatabase,
    usecase: deleteProject,
  }),
}