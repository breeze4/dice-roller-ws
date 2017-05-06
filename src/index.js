const http = require('http');
const url = require('url');
const querystring = require('querystring');
const Pusher = require('pusher');
const {roll} = require('./roller');

const port = process.env.PORT || 3001;

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
  const {dice, quantity} = parsedQuery;
  const result = roll(dice, quantity);

  pusher.trigger('my-channel', 'my-event', {
    "result": result
  });
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.end(JSON.stringify(result));
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})