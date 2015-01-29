module.exports = {
    "server": {
        "protocol": "http",
        "host": "localhost:3000",
        "callback": "/"
    },
    "facebook": {
        "key": "745656022191244",
        "secret": "b7da69a96dc993de0ec9f6afa80cbf34",
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