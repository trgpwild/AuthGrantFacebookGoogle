require('./config/db');

const KEY = 'lcp.sid', SECRET = 'lcp';
var express = require('express');
var load = require('express-load');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookie = cookieParser(SECRET);
var store = new expressSession.MemoryStore();
var Grant = require('grant').express();
var grant = new Grant(require('./config/auth'));

var app = express();
var server = require('http').Server(app);
var error = require('./middlewares/error');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(grant);
app.use(cookie);
app.use(expressSession({
	secret: SECRET,
	name: KEY,
	resave: true,
	saveUninitialized: true,
	store: store
}));

app.use(favicon(__dirname + '/public/images/icon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

load('models').then('controllers').then('routes').into(app);

//Middleware de tratamento erros
app.use(error.notFound);
app.use(error.serverError);

server.listen(3000, function(){
    console.log("Servidor no ar!");
});