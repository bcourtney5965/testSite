var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

// a convenient variable to refer to the HTML directory
var public = './public/';

// routes to serve the static HTML files individually
app.get('/', function(req, res) {
    res.sendfile(public + 'landingPage.html');
});
app.get('/thankYouPage', function(req, res) {
    res.sendfile(public + 'thankYouPage.html');
});


// https://quiet-ravine-39266.herokuapp.com/thankYouPage

/* For Serving up HTML &

app.use('/public', express.static(path.join(__dirname + '/public')));

app.get('/public/landingPage', function(req, res) {
  console.log(`server side: inside of ${landingPage}`)
  res.sendfile(public + 'landingPage.html');
});

app.get('/public/thankYouPage', function(req, res) {
  console.log(`server side: inside of ${thankYouPage}`)
  res.sendfile(public + 'thankYouPage.html');
});

*/



app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});