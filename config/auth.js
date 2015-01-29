module.exports = {
    "server": {
        "protocol": "http",
        "host": "localhost:3000",
        "callback": "/"
    },
    "facebook": {
        "key": "secret_key",
        "secret": "secret_secret",
        "callback": "/facebook/callback",
        "scope": ["user_about_me", "email"]
    },
    "google": {
        "key": "key_aqui",
        "secret": "secrect_aqui",
        "callback": "/google/callback",
        "scope": ["profile", "email"]
    }
};