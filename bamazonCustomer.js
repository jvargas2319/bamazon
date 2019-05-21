var mysql = require("mysql");
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3308,

  user: "root",


  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are connected" + "\n"); 
 productTable();
});

var productTable = function () {
  connection.query("SELECT * FROM products", function(err,res){
    for(var i = 0; i < res.length; i++){
      console.log(res[i].item_id + " " + res[i].product_name + " " + res[i].department_name + " " + res[i].price + " " + res[i].stock_quantity + "\n"); 
    }
    
    userInput(res);
    
  })
}
function validateInput(num){
  if (isNaN(num)==false){
    return true;
  }else {
    return false;
  }
}
var userInput = function (res) {
inquirer.prompt([
  {
    type: "input",
    name: "choice",
    message: "What is the ID of the product you want to buy",
    
  }]).then(function(answer){
var correct = false;
console.log(res);
    for(var i = 0; i < res.length; i++) {
      if(res[i].item_id == answer.choice) {
        correct = true;
        var item=answer.choice;
        let id=i;
        inquirer.prompt({
          type:"input",
          name: "stock",
          message: "how many would you like to buy",
          //validate: validateInput()
        }).then(function(stockAnswer){
   
          if((res[id].stock_quantity-res[item]-stockAnswer.stock)>0){
            connection.query("UPDATE products SET stock_quantity" + res[id].stock_quantity-answer.quant)+ "WHERE product_name" + product + " ", function(err,res){
              console.log("Product Purchased!");
              productTable(res);
            }
          } else {
            console.log("Not a valid input");
            //promptCustomer(res);

          }
        }).catch(function (err) {
          console.log(err);
        })
      }
     
    }
  })
}