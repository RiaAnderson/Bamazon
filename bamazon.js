var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazonDB'
});


//Select table to order products from
connection.query('SELECT * FROM products', function (error, results){
    if (error) throw error;
    //display result in table format 
    console.table(results);
    //Ask user for item_id and quantity
    inquirer.prompt(
        [
            {
                type: "input",
                message: "What is the item ID of the product would you like to purchase?",
                name: "productID"
            },
            {
                type: "input",
                message: "How many would you like to purchase?",
                name: "itemQuantity"
            },
        ]
    )
})

//Response to user request
