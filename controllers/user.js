module.exports = function(app) {
	var UserController = {
		login: function(req, res) {
			var error = req.session.error;
			res.render('login', {title: "I <3 Node", error: error});
		},
		google: function(req, res) {
			console.log("GOOGLE");
		},
		facebook: function(req, res) {
			console.log("FACEBOOK");
			console.log(res.raw);
		},
		logout: function(req, res) {
			req.session.destroy(function(){	
		    	res.redirect('/login');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
		  	});
		}
	};
	return UserController;
};