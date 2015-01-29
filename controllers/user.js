module.exports = function(app) {
    var facebook = require('fb');
    var google = require('googleapis');

    var UserController = {
        login: function(req, res) {
            var error = req.session.error;
            res.render('login', {
                title: "I <3 Node",
                error: error
            });
        },
        google: function(req, res) {
        	console.log("profile: ");
           console.log(req.query.raw);
           console.log( '=======================================' );

            // Salva a customData na sessao
            req.session.user = req.query.raw

            res.redirect( '/' );
        },
        facebook: function(req, res) {
            console.log("profile: ");
            console.log(req.query.raw);
            console.log( '=======================================' );

            // Salva a customData na sessao
            req.session.user = req.query.raw

            res.redirect( '/' );
        },
        logout: function(req, res) {
            req.session.destroy(function() {
                res.redirect('/login');
            });
        }
    };
    return UserController;
};
