var mongoose = require('mongoose');

var UnitsSchema = new mongoose.Schema({
  name: String,
  points: String,
  race: String,
  type: String,
  image: String,
  rules: String,
  weapons: String,
  ws: String,
  bs: String,
  s: String,
  t: String,
  w: String,
  i: String,
  a: String,
  ld: String,
  sv: String,
  front: String,
  side: String,
  rear: String,
  movement: String,
  tdate: { type: Date, default: Date.now},
});
module.exports = mongoose.model('API_Units', UnitsSchema);
