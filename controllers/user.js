module.exports = function(app) {
    var UserController = {
        login: function(req, res) {
            var error = req.session.error;
            res.render('login', {
                title: "I <3 Node",
                error: error
            });
        },
        github: function(req, res) {
            console.log("profile: ");
            console.log(req.query.raw);
            console.log('=======================================');

            // Salva a customData na sessao
            req.session.user = req.query.raw

            res.redirect('/');
        },
        google: function(req, res) {
            console.log("profile: ");
            console.log(req.query.raw);
            console.log('=======================================');

            // Salva a customData na sessao
            req.session.user = req.query.raw

            res.redirect('/');
        },
        facebook: function(req, res) {
            console.log("profile: ");
            console.log(req.query.raw);
            console.log('=======================================');

            // Salva a customData na sessao
            req.session.user = req.query.raw

            res.redirect('/');
        },
        logout: function(req, res) {
            req.session.destroy(function() {
                res.redirect('/login');
            });
        }
    };
    return UserController;
};
