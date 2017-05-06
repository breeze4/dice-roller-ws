import Pusher from 'pusher-js';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('9eb50a2541510fd7b97c', {
  encrypted: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function (data) {
  alert(data.message);
});