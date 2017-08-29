let express = require('express'),
  app = express();


// Routes
app.get('/', function(req, res) {
    //
})



// Port Listener
let port = process.env.PORT || 3030;

app.listen(port, function() {
  console.log('App launched on port 3030.')
})
