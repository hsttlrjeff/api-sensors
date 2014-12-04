/**
 * Created by jeffreyhostetler on 11/30/14.
 */
var Temperature = require('../models/temperature');
//var config = require('../config/config');
var express = require('express');
var router = express.Router();

router.route('/reading/temp')
    .post(function(req, res) {
        var tempReading = new Temperature();
        tempReading.sensorType = req.body.sensorType;
        tempReading.sensorName = req.body.sensorName;
        tempReading.sensorReading = req.body.sensorReading;
        tempReading.humidity = req.body.sensorHumidity;
        tempReading.updated = Date.now();

        tempReading.save(function(err) {
            if(err)
                res.send(err);
            res.json({result: '201'});
        });
    })
    .get(function(req, res){
        Temperature.find(function(err, temps) {
            if(err)
                res.send(err);
            res.json(temps);
        });
    });

module.exports = router;
