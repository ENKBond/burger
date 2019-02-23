const connection = require("./connection.js");

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
    updateOne: function (table, col, val, col1, id, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col, val, col1, id], (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    }
};

module.exports = orm;