var http = require('http'),
    express = require('express'),
    liquor_module = require('./models/liquor'),
    mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'artak',
    database : 'Products'

});


app.get('/test', function(req, res, next) {

    connection.connect();
    connection.query('SELECT * FROM Liquor', function(err, rows, fields) {

        if (err) {
          //  throw err;
            res.send(err);
        }
        var liquor_array = new Array();
        for(var i = 0; i < rows.length; ++i){
            var liquor = new liquor_module.liquor();
            liquor.set_id(rows[i].ID);
            liquor.set_brand(rows[i].Brand);
            liquor
            liquor_array.push(liquor);
        }

       res.send(liquor_array);

    });

    connection.end();

});

app.get('/bye', function(req, res, next) {
    res.send('Goodbye World');
});

var call_back = function() {
    console.log("Server started!");
};

http.createServer(app).listen(3001,call_back);
