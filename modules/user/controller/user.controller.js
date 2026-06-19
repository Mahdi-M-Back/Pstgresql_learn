const pool = require('./../../../db');

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email],
  );

  res.status(201).json({ message: 'Create user', user: result.rows[0] });
};

exports.getAllUsers = async (req, res) => {
  const result = await pool.query('SELECT * FROM users');

  res.status(200).json({ message: 'Get all users', users: result.rows });
};
