// ***rs*************** Dependencies ******************
//---------------------------------------------------
const express = require('express');
const expHandleBars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverRide = require('method-override');

// ***************** express set-up *****************
//---------------------------------------------------
var app = express();

app.set( 'port', process.env.PORT || 3000 );

// * Sets up the Express app to handle data parsing *
//---------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, './public')));


app.use(methodOverRide('_method'));

//handlebars view engine set-up
app.engine('handlebars', expHandleBars({ defaultlayout: 'main' }));
app.set('view engine', 'handlebars');

// ********************* Routes *********************
//---------------------------------------------------
var burgerRoutes = require('./controllers/burger_controllers.js');
app.use('/', burgerRoutes);
//require('./controllers/burger_controllers.js')(app);



// ******* Starts server to begin listening *********
//---------------------------------------------------
app.listen(app.get('port'), function(err) {
	if (err) {
		console.error("No connection made", err)
	}
	console.log("listening on port " + app.get('port'));
});


