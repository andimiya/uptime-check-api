const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const request = require('request');

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Allow-Header, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
  next();
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/api/url/:urls', (req, res) => {
  let site = req.params.urls;
  console.log(site, 'param')
  request(`https://${site}`, (error, response, body) => {
    res.send(body);
  });
});

app.listen(PORT, function() {
  console.log('Server started on', PORT);
})

module.exports = app;
