var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '336160',
  key: '9eb50a2541510fd7b97c',
  secret: '08475294c0cd5653f578',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});