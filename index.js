const express = require('express');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const Pusher = require('pusher');

const { roll } = require('./src/roller');

const app = express();
const port = process.env.PORT || 3001;
app.set('port', port);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// app.use(express.static(__dirname + '/client/build'));

const pusher = new Pusher({
  appId: '336160',
  key: '9eb50a2541510fd7b97c',
  secret: '08475294c0cd5653f578',
  encrypted: true
});

const requestHandler = (request, response) => {
  console.log(request.url)
  const parsedUrl = url.parse(request.url);
  const parsedQuery = querystring.parse(parsedUrl.query);
  const { dice, quantity } = parsedQuery;
  const result = roll(dice, quantity);

  pusher.trigger('my-channel', 'my-event', {
    "result": result
  });
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.end(JSON.stringify(result));
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/api/roll', requestHandler);

app.listen(app.get('port'), function () {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});