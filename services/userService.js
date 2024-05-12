const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    password: hashedPassword,
    role,
  });
  await user.save();
  res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
  const { role } = req.body
  await User.findByIdAndUpdate(req.params.id, {role:role});
  res.sendStatus(200);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
};
