require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const proxy = require('http-proxy-middleware');

const port = process.env.PORT || 3000;

app.use(cors());

app.get('/loaderio-55619c8195e15981ca52d1b784bb8fad.txt', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + `/loaderio-55619c8195e15981ca52d1b784bb8fad.txt`), err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});

app.use('/rooms/:listingId', express.static(__dirname + '/../public'));

app.use('/rooms/checkout/:listingId', proxy({
  target: 'http://54.68.67.2:3000/',
  changeOrigin: true
}));

app.use('/rooms/bookings/:listingId', proxy({
  target: 'http://54.68.67.2:3000/',
  changeOrigin: true
}));

app.listen(port);
console.log('Listening on port', port);