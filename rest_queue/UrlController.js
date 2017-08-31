const express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  Url = require('./datamodel'),
  http = require('http');
  // downloadHtml = require('./downloadHtml');

router.use(bodyParser.urlencoded({extended: true}));

// Creates a new URL entry
router.post('/url', (req, res) => {

  let url = req.body.url;
  console.log(url)
  let html = 'test';

  http.get(url, (res) => {
            res.on('data', (chunk) => {
              html += chunk;
            });
          }).on('error', (err) => {
            console.log("Got error: " + err.message);
          });

  Url.create({
    url: 'https://www.google.com',
    html: html
    // downloadHtml.getHtml(url)
    // req.body.html
  },
  (err, url) => {
    if (err) return res.status(500).send('There was an issue saving this URL\'s data in the database.');
    res.status(200).send(url);
  });

});

// Returns a URL data given an ID
router.get('/urls/:id', (req, res) => {
  Url.findById(req.params.id, (err, urlid) => {
    if (err) return res.status(500).send('There was an issue finding the id.');
    if (!urlid) return res.status(404).send('No such id was found.')
    res.status(200).send(urlid);
  });
});

module.exports = router;

// let getHtml = (url) => {

//   let options = {
//     host: 'www.example.com',
//     port: 80,
//     path: '/',
//   };

//   http.get(options, (res) => {
//     res.on('data', (body) => {
//       return body;
//     });
//   }).on('error', (err) => {
//     console.log("Got error: " + err.message);
//   });

// };
