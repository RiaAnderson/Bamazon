var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazonDB'
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("connection sucessful!");
    //queryAllSongs();
    selectedItem();
  });

//Select table to order products from
function selectedItem() {
connection.query('SELECT * FROM products', function (error, results){
    if (error) throw error;
    //display result in table format 
    console.table(results);
    //Ask user for item_id and quantity
    inquirer.prompt(
        [
            {
                type: "input",
                name: "choice",
                message: "What is the item ID of the product would you like to purchase?",                
            },
            {
                type: "input",
                name: "quantity",
                message: "How many would you like to purchase?",                
            },
        ]
    )
})
}
//Response to user request
