const Signal = require('../models/Signal');

exports.getAllSignals = async (req, res) => {
  const signals = await Signal.find();
  res.json(signals);
};

exports.createSignal = async (req, res) => {
  const signal = new Signal(req.body);
  await signal.save();
  res.status(201).json(signal);
};

exports.updateSignal = async (req, res) => {
  await Signal.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(200);
};

exports.deleteSignal = async (req, res) => {
  await Signal.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
};
