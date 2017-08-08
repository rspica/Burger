const connections = require('./connections.js');

const orm = {
  //shows all entries from burgers_db
  selectAll: function(tableInput, callback) {
    console.log(tableInput);
    var queryString = "SELECT * FROM ? WHERE ?";
    connections.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
        callback(result);
      }
      console.log(result);
    });
  },

//   //INSERT INTO burgers_db (burger_name, devoured, burger_date)
// insertOne: function(tableInput, colToSearch, valOfCol) {
//   var queryString = "INSERT INTO burgers SET ? WHERE ?";

//     connections.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       console.log(result);
//     });
//   },
//   updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
//     var queryString = "UPDATE burgers SET ? WHERE ?";
//     queryString = queryString + " ....";
//     queryString = queryString + " ....";

//     console.log(queryString);

//     connections.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result) {
//       console.log(result);
//     });
//   }
// };

module.exports = orm;


   // * Import (require) `connection.js` into `orm.js`

   // * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

   //   * `selectAll()` 
   //   * `insertOne()` 
   //   * `updateOne()` 

   // * Export the ORM object in `module.exports`.
