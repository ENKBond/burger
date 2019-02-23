const connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }
  

let orm = {
    selectAll: function(table,cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, data) => {
            if(err) throw err;
            console.log(data);
            cb(data);
        });
    },
    insertOne: function (table, col, value, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, value], (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
    
};

module.exports = orm;