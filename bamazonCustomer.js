///////////////
// VARIABLES //
///////////////

// Adding dependencies and storing into variables
var mysql = require('mysql');
var inquirer = require('inquirer');
var http = require('http');

// var server = http.createServer(handleRequest);
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Bamazon'
});



///////////////
// FUNCTIONS //
///////////////


// Connects to database and console logs connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    start();
})


// Starts Bamazon 
var start = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        for (var i = 0; i < res.length; i++){
        	console.log('Department Name: ' + res[i].departmentName);
            console.log('Item Id: '+res[i].itemID + '|' + ' Product: ' + res[i].productName + '|' + ' Price: $' + res[i].price + '|' + ' In Stock: '+ res[i].stockQuantity);
            console.log('-----------------------------------------------------------------------');
        }
        inquirer.prompt({
            name: 'purchaseProduct',
            type: 'input',
            message: 'What would you like to purchase? Choose with Product ID, or press Q to quit.',
        }).then(function(answer) {
            connection.query('UPDATE products SET ? WHERE ?', {
                    itemname: answer.item,
                })
                if (answer.purchaseProduct.toUpperCase() == choice) {
                    purchaseItem();
                } else if (answer.purchaseProduct.toUpperCase() == 'Q') {
                    quitBamazon();
                } else {
                    console.log("You didn't select a valid product!");
                }
        })
    })

}

// Function to run purchaseItem
var purchaseItem = function() {
	inquirer.prompt([{
		name: 'item',
		type: 'input',
		message: 'What would you like to purchase? Choose with Product ID, or press Q to quit.',
		validate: function (input) {
			var done = this.async();
			setTimeout(function(){
				if (input.toUpperCase == 'Q') {
					quitBamazon();
				}
			})
		}
	}])
}


// Function to quit Bamazon
var quitBamazon = function() {

}


// Starts the server
// server.listen(PORT, function() {
//     console.log('Server listening on: http://localhost:%s', connection.port);
// })
