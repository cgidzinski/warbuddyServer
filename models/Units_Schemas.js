var mongoose = require('mongoose');

var UnitsSchema = new mongoose.Schema({
  name: String,
  description: String,
  tdate: { type: Date, default: Date.now},
});
module.exports = mongoose.model('API_Units', UnitsSchema);
