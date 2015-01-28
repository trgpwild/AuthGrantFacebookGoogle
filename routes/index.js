module.exports = function(app) {
	var index = app.controllers.index;
	var withoutSession = require('./../middlewares/without_session');//Caso não tenha sessão, direciona para "/login"

	app.get('/', withoutSession, index.home);
};