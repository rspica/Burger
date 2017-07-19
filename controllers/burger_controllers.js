const express = require('express');
const burger = require('./../models/burger.js'); // Import the model (burger.js) to use its database functions.

const router = express.Router();


// Create the routes and associated logic
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hBurgersObject = {
            burgers: data
        };
        // console.log(hBurgersObject);
        res.render('index', hBurgersObject);
    });
});

router.post('/burgers', function(req, res) {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect('/');
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;
