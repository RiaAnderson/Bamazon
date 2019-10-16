var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bamazonDB'
});


//Select table to order products from
//User will input item_id and quantity
//Response to user request
