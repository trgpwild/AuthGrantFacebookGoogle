module.exports = {
    "server": {
        "protocol": "http",
        "host": "localhost:9090",
        "callback": "/"
    },
    "facebook": {
        "key": "867386369961591",
        "secret": "7fdd7c89d558dca653be3d4cb904afe8",
        "callback": "/facebook/callback",
        "scope": ["email"]
    },
    "google": {
        "key": "794379396716-nisok0lmc6enuab8nis7h8tv0cpnqkgm.apps.googleusercontent.com",
        "secret": "_HViIqSAjxMdVx_CIGyXtHCH",
        "callback": "/google/callback",
        "scope": ["profile", "email"]
    }
};