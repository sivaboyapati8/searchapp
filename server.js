var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/js/ngCart'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));
var router = express.Router();

router.get('/', function (req, res) {
    res.json({message: 'welcome to my api!'});
});
app.use('/api', router);
app.listen(port);
console.log("App listening on port " + port);
