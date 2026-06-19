const UserModel = require('./../model/user.model');

exports.createUser = async (name, email) => {
  const existingUser = await UserModel.findByEmail(email);

  if (existingUser) {
    throw new Error('Email already exists');
  }

  const user = await UserModel.create(name, email);

  return user;
};

exports.getAllUsers = async () => {
  return await UserModel.findAll();
};

exports.getUserById = async (id) => {
  const user = await UserModel.findById(id);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

exports.updateUser = async (id, name, email) => {
  const user = await UserModel.updateById(id, name, email);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

exports.deleteUser = async (id) => {
  const user = await UserModel.deleteById(id);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};