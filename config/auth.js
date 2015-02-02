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
    },
    "github": {
        "key": "e448f2b1f0b814c57e5c",
        "secret": "a433755103ce88e7d9913f7039a45bb8874e7652",
        "callback": "/github/callback",
        "scope" : [ "user" ]
    }
};