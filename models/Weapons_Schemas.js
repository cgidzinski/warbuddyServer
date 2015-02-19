var mongoose = require('mongoose');

var WeaponsSchema = new mongoose.Schema({
  name: String,
  range: String,
  strength: String,
  ap: String,
  type: String,
  attacks: String,
  rules: String,
  tdate: { type: Date, default: Date.now},
});
module.exports = mongoose.model('API_Weapons', WeaponsSchema);
