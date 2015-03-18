// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://docs.ghost.org/usage/configuration/

var path = require('path'),
		config;

config = {
	// ### Development **(default)**
	development: {
		// The url to use when providing links to the site, E.g. in RSS and email.
		url: 'http://bayareafilms.org',



		mail: {
			transport: 'SMTP',
			options: {
				service: 'Mailgun',
				auth: {
					user: 'postmaster@mg.bayareafilms.org', // mailgun username
					pass: '6073e2b69609e49a7738b8add95ed303'  // mailgun password
				}
			}
		},


		database: {
			client: 'sqlite3',
			connection: {
				filename: path.join(__dirname, '/content/data/ghost-dev.db')
			},
			debug: false
		},
		server: {
			// Host to be passed to node's `net.Server#listen()`
			host: '127.0.0.1',
			// Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
			port: '2368'
		},
		paths: {
			contentPath: path.join(__dirname, '/content/')
		}
	},

	// ### Production
	// When running Ghost in the wild, use the production environment
	// Configure your URL and mail settings here
	production: {
		url: 'http://bayareafilms.org',

		mail: {
			transport: 'SMTP',
			options: {
				service: 'Mailgun',
				auth: {
					user: 'postmaster@mg.bayareafilms.org', // mailgun username
					pass: '6073e2b69609e49a7738b8add95ed303'  // mailgun password
				}
			}
		},
		database: {
			client: 'sqlite3',
			connection: {
				filename: path.join(__dirname, '/content/data/ghost.db')
			},
			debug: false
		},
		server: {
			// Host to be passed to node's `net.Server#listen()`
			host: '127.0.0.1',
			// Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
			port: '2368'
		}
	},

	// **Developers only need to edit below here**

	// ### Testing
	// Used when developing Ghost to run tests and check the health of Ghost
	// Uses a different port number
	testing: {
		url: 'http://127.0.0.1:2369',
		database: {
			client: 'sqlite3',
			connection: {
				filename: path.join(__dirname, '/content/data/ghost-test.db')
			}
		},
		server: {
			host: '127.0.0.1',
			port: '2369'
		},
		logging: false
	},

	// ### Testing MySQL
	// Used by Travis - Automated testing run through GitHub
	'testing-mysql': {
		url: 'http://127.0.0.1:2369',
		database: {
			client: 'mysql',
			connection: {
				host     : '127.0.0.1',
				user     : 'root',
				password : '',
				database : 'ghost_testing',
				charset  : 'utf8'
			}
		},
		server: {
			host: '127.0.0.1',
			port: '2369'
		},
		logging: false
	},

	// ### Testing pg
	// Used by Travis - Automated testing run through GitHub
	'testing-pg': {
		url: 'http://127.0.0.1:2369',
		database: {
			client: 'pg',
			connection: {
				host     : '127.0.0.1',
				user     : 'postgres',
				password : '',
				database : 'ghost_testing',
				charset  : 'utf8'
			}
		},
		server: {
			host: '127.0.0.1',
			port: '2369'
		},
		logging: false
	}
};

// Export config
module.exports = config;