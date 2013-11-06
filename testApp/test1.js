var http = require('http'),
    express = require('express'),
    user_module = require('./models/user')
    mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'artak',
    database : 'test'
});

app.use(function(req, res, next) {
    console.log(req.url);
    next();
});

app.get('/hello', function(req, res, next) {

    connection.connect();

    connection.query('SELECT * from users', function(err, rows, fields) {
        if (err) throw err;

        console.log('The solution is: ', rows[0].username);

        var user = new user_module.user();
        user.set_age(12);
        user.set_nationality("Armenia");
        user.set_username(rows[1].username);
        user.set_surname("test surname");
        user.set_id(1234);
        res.send();
    });

    dg
    console.log("dfsgsag");
    connection.end();

});

app.get('/bye', function(req, res, next) {
    res.send('Goodbye World');
});

var call_back = function() {
    console.log("Server started!");
};

http.createServer(app).listen(3001,call_back);