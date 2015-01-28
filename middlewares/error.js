exports.notFound = function(req, res, next) {
	res.status(404);
	res.render('not-found', {title: "I <3 Node"});
};
exports.serverError = function(error, req, res, next) {
	res.status(500);
	res.render('server-error', {title: "I <3 Node", error: error});
};