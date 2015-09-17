var express    = require("express");
var app        = express();


app.set('port', process.env.PORT || 9000);
app.use(express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules')); //add this so the browser can GET the node_modules files

app.get('/', function(req, res){
    res.render('index.html');
});

app.get('*', function(req, res){
    res.render('index.html');
});

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});