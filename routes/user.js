module.exports = function(app) {
	var user = app.controllers.user;
	var withSession = require('./../middlewares/with_session');//Caso já esteja na sessão, direciona para "/"

	app.get('/login', withSession, user.login);

	//GITHUB
	app.get('/github/callback', user.github);

	//GOOGLE
	app.get('/google/callback', user.google);

	//FACEBOOK
	app.get('/facebook/callback', user.facebook);


	//LOGOUT
	app.get('/logout', user.logout);//Não usar "withSession", rota para tirar usuário da sessão
};