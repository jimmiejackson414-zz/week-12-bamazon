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


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    start();
})



var start = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        console.log(res);
        inquirer.prompt({
            name: 'purchaseProduct',
            type: 'input',
            message: 'What would you like to purchase? Choose with Product ID, or press Q to quit.',
        }).then(function(answer) {
            connection.query('UPDATE products SET ? WHERE ?', {
                    itemname: answer.item,
                })
                // if (answer.purchaseProduct.toUpperCase() == choice) {
                //     purchaseItem();
                // } else if (answer.purchaseProduct.toUpperCase() == 'Q') {
                //     quitBamazon();
                // } else {
                //     console.log("You didn't select a valid product!");
                // }
        })
    })

}

// Function to run purchaseItem
var purchaseItem = function() {

}


// Function to quit Bamazon
var quitBamazon = function() {

}


// Starts the server
// server.listen(PORT, function() {
//     console.log('Server listening on: http://localhost:%s', connection.port);
// })
