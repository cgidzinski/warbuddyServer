var mongoose = require('mongoose');

var RulesSchema = new mongoose.Schema({
  title: String,
  category: String,
  titleSubtext: String,
  image: String,
  quickDescription: String,
  mainText: String,
  date: { type: Date, default: Date.now},
});



module.exports = mongoose.model('API_Rules', RulesSchema);
