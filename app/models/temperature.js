/**
 * Created by jeffreyhostetler on 11/30/14.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TemperatureSchema   = new Schema({
    sensorType: String,
    sensorName: String,
    sensorReading: Number,
    humidity: Number,
    updated: Date
});

module.exports = mongoose.model('Readings', TemperatureSchema);
