var connection = require('./connection.js');

var orm = {
    selectWhere: function(table, column, value) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query (
            queryString,
            [table, column, value],
            function(err, data) {
                if (err) {
                    throw err;
                }
                console.log(data);
            }
        )
    }
}
module.exports = orm;