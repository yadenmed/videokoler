var express = require('express'),
    app = express();
var express_peer_server = require('peer').ExpressPeerServer;
var peer_options = {
    debug: true
};
var server = app.listen(3000);

app.use(express.static('www'));
app.use('/peerjs', express_peer_server(server, peer_options));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
