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


app.get('/get', function(req, res, next) {

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
            liquor.set_name(rows[i].Name);
            liquor.set_price(rows[i].Price);
            liquor.set_size(rows[i].Size);
            liquor.set_is_alcohol(rows[i].Alcoholic);
            liquor_array.push(liquor);
        }

       res.send(liquor_array);

    });

    connection.end();

});
app.get('/insert', function(req, res, next) {
    connection.connect();

    var name = "Cognac";
    var brand = "Ararat";
    var size = 0.7;
    var price = 3500;
    var is_alcohol = 1;

    var post = {
     Name: name,
     Brand: brand,
     Size: size,
     Alcoholic: is_alcohol
    };
    connection.query('Insert into Liquor SET ?',post,function(err, result){
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
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
