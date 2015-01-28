module.exports = {
    "server": {
        "protocol": "http",
        "host": "localhost:3000",
        "callback": "/"
    },
    "facebook": {
        "key": "key_aqui",
        "secret": "secrect_aqui",
        "callback": "/facebook/callback",
        "scope": ["email"]
    },
    "google": {
        "key": "key_aqui",
        "secret": "secrect_aqui",
        "callback": "/google/callback",
        "scope": ["profile", "email"]
    }
};