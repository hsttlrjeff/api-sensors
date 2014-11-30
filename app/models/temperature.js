/**
 * Created by jeffreyhostetler on 11/30/14.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TemperatureSchema   = new Schema({
    sensorName: String,
    sensorReading: Number,
    updated: Date,
    humidity: Number
});

module.exports = mongoose.model('Readings', TemperatureSchema);
