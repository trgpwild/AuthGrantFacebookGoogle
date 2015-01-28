module.exports = function(app) {
	var IndexController = {
		home: function(req, res) {
			var user = req.session.user;
			var error = req.session.error;
			res.render('index', {title: "I <3 Node", user: user, error: error});
		}
	};
	return IndexController;
};