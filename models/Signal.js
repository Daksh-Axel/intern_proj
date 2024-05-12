const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signalSchema = new Schema({
  name: { type: String, required: true },
  config: { type: Number, required: true }
});

module.exports = mongoose.model('Signal', signalSchema);
