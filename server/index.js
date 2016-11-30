var express = require('express');
var app = express();

var User = require('./server/createdb.js').User;
var Tesr = require('./server/createdb.js').Test;

var Question = require('./server/createdb.js').Question;
var Answer = require('./server/createdb.js').Answer;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/login');
});

app.get('/index', function(request, response){
	response.render('pages/index', {title: 'Dashboard'});
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var user = new User({
	login: "admin",
	password: "529477",
	type: "Teacher",
	isAdmin: true
});

//console.log(user);
/*
user.save(function(err, user, affected){
	console.log(arguments);
});
*/

var q = new Question("How are you?", ['Thx, fine!']);

console.log(q.Question);