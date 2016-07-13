// Adding dependencies and storing into variables
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 8080,
	user: 'root',
	password: '',
	database: 'Bamazon'
});


connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected as id ' + connection.threadID);
});


server.listen(PORT, function(){
	console.log('Server listening on: http://localhost:%s', connection.port);
})
