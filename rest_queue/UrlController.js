let express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

let Url = require('./datamodel')

module.exports = router;


// Creates a new URL entry
router.post('/task', function (req, res) {
  Url.create({
    url: req.body.url,
    html: req.body.html
  },
  function (err, url) {
    if (err) return res.status(500).send("There was an issue saving this URL's data in the database.");
    res.status(200).send(url);
  });
});

// Returns all URLs in the database
router.get('/', function (req, res) {
  Url.find({}, function (err, urls) {
    if (err) return res.status(500).send('There was an issue finding all the urls.');
    res.status(200).send(urls);
  });
});

module.exports = router;
