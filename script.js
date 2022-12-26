var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var levelup =require('levelup');
var leveldown = require('leveldown');

app.engine('.html', require('ejs').__express);

var db = levelup(leveldown('./mydb'));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(bodyParser.urlencoded({extended:true}))
app.post('/login', (req,res)=> {



	var username = req.body.username
	var password = req.body.password

db.put('name', username, function(err) {
  if (err) return console.log('Ooops', err)
});
db.put('password', password, function(err) {
  if (err) return console.log('Ooops', err)

  
})
// 	res.send('username:' + username + '<br><button>Next</button><br><iframe src="http://localhost:4000" width="100%" height="90%"></iframe><br><form method="post" action="/"><input type="submit" value="reward"></form>');


	res.sendFile(path.join(__dirname,'/app.html'));
});



app.post('/reward1', (req, res)=> {

db.get('name', function (err, value) {
	if (err) return console.log('Ooops', err)

username = value;

db.put('Reward1', username, function(err) {
	if (err) return console.log('Ooops', err)
		          var fs = require('fs');
        fs.appendFile('scalp.txt', '\n' + username, function (err){
  if (err);
  console.log(username);});
});
});
    res.sendFile(path.join(__dirname, '/bindex.html'));
})

app.listen(8080);
console.log('server is running on port 3000');
