var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('<form method="post" action="/formsubmit"><input name="email" type="text"><input type="submit"></form>');
});

app.post('/formsubmit', function(req, res) {
	res.redirect('/success');
});

app.get('/success', function(req, res) {
	res.send('success!');
})

var server = app.listen(5171, function() {
	console.log('Express server listening on port ' + server.address().port);
});
