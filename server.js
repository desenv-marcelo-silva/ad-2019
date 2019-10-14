const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const amigoRouter = require('./src/backend/routes/amigoRouter.js');
const Database = require('./src/backend/config/database.js');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json()); 

app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use(amigoRouter);

Database.conectar();

app.get('/areualive', function(req, res) {
  return res
  .status(200)
  .send('Yes, I am...');
});


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);