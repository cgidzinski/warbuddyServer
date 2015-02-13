var mongoose = require('mongoose');

var RulesSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: { type: Date, default: Date.now},
});
module.exports = mongoose.model('API_Rules', RulesSchema);
