const connection = require("./connection.js");

let orm = {
    selectAll: function(table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, res) => {
            if(err) throw err;
            console.log(res);
        });
    },
    insertOne: function (table, newBurger) {
        let queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [table, newBurger], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function (table, id) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, req.params.id], (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;