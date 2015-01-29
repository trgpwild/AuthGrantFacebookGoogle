module.exports = {
    "server": {
        "protocol": "http",
        "host": "localhost:3000",
        "callback": "/"
    },
    "facebook": {
        "key": "secret_key",
        "secret": "secret",
        "callback": "/facebook/callback",
        "scope": ["user_about_me", "email"]
    },
    "google": {
        "key": "secret_key",
        "secret": "secret",
        "callback": "/google/callback",
        "scope": ["profile", "email"]
    }
};