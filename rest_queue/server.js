let app = require('./app');


// Routes
app.get('/', function(req, res) {
    //
})



// Port Listener
let port = process.env.PORT || 3030;

app.listen(port, function() {
  console.log('Server listening on port 3030.')
})
