module.exports = function(app) {
	var UserController = {
		login: function(req, res) {
			var error = req.session.error;
			res.render('login', {title: "I <3 Node", error: error});
		},
		google: function(req, res) {
			console.log("GOOGLE");
			console.log(req.query.access_token);
			console.log("####################");
		},
		facebook: function(req, res) {
			console.log("FACEBOOK");
			console.log(req.query.access_token);
			console.log("####################");
		},
		logout: function(req, res) {
			req.session.destroy(function(){	
		    	res.redirect('/login');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
		  	});
		}
	};
	return UserController;
};