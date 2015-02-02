module.exports = function(app) {
	var IndexController = {
		home: function(req, res) {
			var user = req.session.user;
			res.render('index', {title: "I <3 Node", user: user});

		}
	};
	return IndexController;
};