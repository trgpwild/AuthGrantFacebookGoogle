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
        	var token = req.query.access_token;
        	var config = require('../config/auth');
        	var plus = google.plus('v1');
            var OAuth2 = google.auth.OAuth2;
            var oauth2Client = new OAuth2(config.google.key, config.google.secret, config.google.callback);

            oauth2Client.setCredentials({
				access_token: token,
				refresh_token: token
			});

            plus.people.get({ userId: 'me', auth: oauth2Client }, function(err, profile) {
            	if (!profile || profile.error) {
                    console.log(!profile ? 'error occurred' : profile.error);
                    return;
                }
				//Guarda os dados do usuário na sessão
                req.session.user = {
	                "displayName" : profile.displayName,
	                "id" : profile.id,
	                name : {
		                "first" : profile.name.givenName,
		                "last" : profile.name.familyName
	                },
	                "email" : profile.emails[0].value,
	                "token" : token
	            };
                res.redirect('/');
			});
        },
        facebook: function(req, res) {
            console.log( "req.customData: " + req.query.raw.displayName );
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
