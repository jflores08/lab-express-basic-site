//set up express
const express = require('express');
const app = express();

const port = 5000;
//this is a route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/home-page.html');
});
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/views/about-page.html');
});
app.get('/works', function(req, res) {
    res.sendFile(__dirname + '/views/works-page.html');
});
app.get('/image-gallery', function(req,res){
    res.sendFile(__dirname + '/views/image-gallery-page.html');
});

//start the server
app.listen(port, function(){
    console.log('Pooh is waiting for some honey at port 5000')
});
