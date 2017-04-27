var express=require('express');
var exphbs=require('express-handlebars');
var app=express();

var routes=require('./routes/route.js');

app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({defaultLayout:'main'}));

app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);
app.get('/:city',routes.city);

var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
