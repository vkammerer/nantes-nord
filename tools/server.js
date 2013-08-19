var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/../src/'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use(express.bodyParser());

var port = process.env.PORT || 8000;
app.listen(port);
console.log('server listening on port %s', port);
