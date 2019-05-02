let mysql = require('mysql');

let connection = mysql.createConnection({
    debug: true,

	host: 'localhost',
	port: 3306,
	user: 'cs386_gduarte',
	password:'du1929',
	database: 'cs386_gduarte'
});

module.exports = connection;
