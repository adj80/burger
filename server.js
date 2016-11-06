var express 	= require('express');
var bodyParser 	= require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Express App set-up
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Express app will be able to address data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.use(express.static('app/public'));

var burgers = require('.models').burgers
burgers.sync();

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
	defaultLayout: 'main'

});
app.set('view engine', 'handlebars');

// Routes
// =============================================================

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Server to start listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
