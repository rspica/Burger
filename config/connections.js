const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "burger_db"
});

connection.connect(function(err) {
	if (err) {
		console.log("Oops something bad just went down error on connection: " + err.stack)
		return;
	}
	console.log("connection made with id " + connection.threadId);
});

module.exports = connection;