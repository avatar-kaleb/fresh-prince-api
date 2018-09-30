import merge from 'lodash.merge'

export const controllers = {
  createOne(model, body) {
  },

  updateOne(docToUpdate, update) {
  },

  deleteOne(docToDelete) {
  },

  getOne(docToGet) {
  },

  getAll(model) {
  },

  findByParam(model, id) {
  }
}

export const createOne = (model) => (req, res, next) => {
}

export const updateOne = (model) => async (req, res, next) => {
}

export const deleteOne = (model) => (req, res, next) => {
}

export const getOne = (model) => (req, res, next) => {
}

export const getAll = (model) => (req, res, next) => {
}

export const findByParam = (model) => (req, res, next, id) => {
}


export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
  }

  return {...defaults, ...overrides}
}
