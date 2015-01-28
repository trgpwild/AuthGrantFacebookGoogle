//Módulo responsável para verificar se NÃO existe sessão, caso verdadeiro, direciona para "/login"
module.exports = function(req, res, next) {
	if(!req.session.user) {
		return res.redirect('/login');
	}
	return next();
};