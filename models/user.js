module.exports = function(app) {
	var Schema = require('mongoose').Schema;

	var user = Schema({
		facebook: {
	        id           :{ type: String },
	        token        :{ type: String },
	        email        :{ type: String },
	        name: {
		    	first  		 :{ type: String },
		    	last 		 :{ type: String }
		    },
	        displayName  :{ type: String },
	    },
	    google: {
	        id           :{ type: String },
	        token        :{ type: String },
	        email        :{ type: String },
	        name: {
		    	first  		 :{ type: String },
		    	last 		 :{ type: String }
		    },
	        displayName  :{ type: String },
	    }
	});
	return db.model('users', user);
};