var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazonDB'
});

connection.connect(function (error) {
    if (error) throw error;
    console.log("connection sucessful!");
    selectedItem();
});

//Select table to order products from
function selectedItem() {
    connection.query('SELECT * FROM products', function (error, results) {
        if (error) throw error;
        //display result in table format 
        console.table(results);
        //Ask user for item_id and quantity
        inquirer.prompt(
                [{
                        type: "input",
                        name: "choice",
                        message: "What is the item ID of the product would you like to purchase?",
                        validate: function (value) {
                            if (isNaN(value) == false) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    },
                    {
                        type: "input",
                        name: "quantity",
                        message: "How many would you like to purchase?",
                        validate: function (value) {
                            if (isNaN(value) == false) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    },
                ])
            //Response to user request
            .then(answers => {
                var selectedItem = results.filter(function (item) {
                    return (item.item_id === parseInt(answers.choice));
                })
                var testing = selectedItem[0].stock_quantity - answers.quantity;
                if (parseInt(answers.quantity) <= selectedItem[0].stock_quantity) {
                    connection.query(`UPDATE products 
                SET stock_quantity = ` + String(selectedItem[0].stock_quantity - answers.quantity) +
                        " WHERE id = " + selectedItem[0].id + ";",
                        function (err, res) {
                            if (err) throw err;
                            console.log("\n-----------------------------\n \nYour total is $" + (selectedItem[0].price * answers.quantity) + ". Thank you for your purchase!");

                        })
                } else(console.log("Insufficient Quantity!"));
                connection.query('SELECT * FROM products', function (error, results) {
                    if (error) throw error;                    
                    console.table(results);
                    console.log("\nPress CTRL + C to exit.");
                });
            })
    })
}