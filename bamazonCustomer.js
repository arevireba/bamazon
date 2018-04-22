// Requiring mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
})

// Connect to the database
connection.connect(function(err) {
    if (err) throw err;
    displayProducts();
})

// Displays the items in bamazon database
var displayProducts = function() {
  var query = "SELECT * FROM products"
  connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: " + res[i].price + " || Stock: " + res[i].stock_quantity);
      }
      shoppingCart();
    })
};
// Inquirer shopping prompt 
var shoppingCart = function() {
    inquirer.prompt([{
        name: "Product ID",
        type: "input",
        message: "What is the number of the product you want to buy?",

    }, {
        name: "Quantity",
        type: "input",
        message: "How many do you want?"
    }
    ]).then(function(answer) {

      // Runs the query and gives response updating quantity if sufficient.  If not, prompts the buyer to reduce the order.
        var query = 'SELECT * FROM products WHERE item_id=' + answer.Quantity;
        connection.query(query, function(err, res) {
          if (answer.Quantity <= res) {
            for (var i = 0; i < res.length; i++) {
                console.log("There are " + res[i].stock_quantity + " of " + res[i].product_name + " currently in stock.");
                console.log("Thanks for the order! Your order of " + res[i].product_name + " will be shipped shortly.");
              }
            } else {
              console.log("Please reduce your order, there isn't enough in stock");
            }
            displayProducts();
        })
    })
};
