const mongoose = require('mongoose');


const dailyrainfallschema = new mongoose.Schema({
  high: {
    type: Number,

  },
  low: {
    type: Number,

  },
  dryDays: {
    type: String,

  },
  snowDays: {
    type: String,

  },
  rainfall: {
    type: String,

  },

});
const rainfallSchema = new mongoose.Schema({
  id: {
    type: String,

  },
  city: {
    type: String,

  },
  country: {
    type: String,

  },
  monthlyAvg: {
    type: [dailyrainfallschema],
  },
  data_id: {
    type: String,
    default: 'default',

  },


});

const Rainfall = mongoose.model('Rainfall', rainfallSchema);


exports.Rainfall = Rainfall;
