// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var config     = require('./app/config/config');
var tempRoute  = require('./app/routes/tempRoutes');

// configure app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = config.port; // set our port

var mongoose   = require('mongoose');
mongoose.connect(config.connectionString); // connect to our database

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.allowOrigin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /bears/:bear_id
// ----------------------------------------------------
/*router.route('/bears/:bear_id')

    // get the bear with that id
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })

    // update the bear with this id
    .put(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })

    // delete the bear with this id
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });*/


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use('/api', tempRoute);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('API ready on port ' + port);
