const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signalSchema = new Schema({
  name: { type: String, required: true },
  weightage: { type: Number, required: true }
});

module.exports = mongoose.model('Signal', signalSchema);
