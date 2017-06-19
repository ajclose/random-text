const express = require('express');
const loremIpsum = require('lorem-ipsum')
const app = express();

app.get('/lorem', function (req, res) {
  res.send(loremIpsum({
    count: 3,
    units: 'paragraphs',
    format: 'html'
  }));
});

app.get('/lorem/:count', function (req, res) {
  res.send(loremIpsum({
    count: req.params.count,
    units: 'paragraphs',
    format: 'html'
  }));
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
