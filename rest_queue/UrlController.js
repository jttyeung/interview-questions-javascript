let express = require('express'),
  router = express.Router(),
  bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

let Url = require('./datamodel')

module.exports = router;


// Creates a new URL entry
router.post('/url', function (req, res) {
  Url.create({
    url: req.body.url,
    html: req.body.html
  },
  function (err, url) {
    if (err) return res.status(500).send("There was an issue saving this URL's data in the database.");
    res.status(200).send(url);
  });
});

// Returns a URL data given an ID
router.get('/urls/:id', function (req, res) {
  Url.findById(req.params.id, function (err, urlid) {
    if (err) return res.status(500).send('There was an issue finding the id.');
    if (!urlid) return res.status(404).send('No such id was found.')
    res.status(200).send(urlid);
  });
});

module.exports = router;
