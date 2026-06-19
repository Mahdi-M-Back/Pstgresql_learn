const UserService = require('./../service/user.service');

exports.createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await UserService.createUser(
      name,
      email
    );

    res.status(201).json({
      status: 'success',
      user
    });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();

    res.status(200).json({
      status: 'success',
      results: users.length,
      users
    });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await UserService.getUserById(
      req.params.id
    );

    res.status(200).json({
      status: 'success',
      user
    });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await UserService.updateUser(
      req.params.id,
      name,
      email
    );

    res.status(200).json({
      status: 'success',
      user
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await UserService.deleteUser(req.params.id);

    res.status(204).json({
      status: 'success'
    });
  } catch (err) {
    next(err);
  }
};