//Módulo responsável para verificar se existe sessão, caso existe, direciona para "/"
module.exports = function(req, res, next) {
	if(req.session.user) {
		return res.redirect('/');
	}
	return next();
};