let http = require('http')

// Configuration
const ReturnCode = 200; // Code returned by the server
const Port = 80; // Port for the webserver
const Text = 'Welcome!'; // Plain



http.createServer(function (req, res) {
  res.writeHead(ReturnCode, {'Content-Type': 'text/plain'});
  res.end(Text);
}).listen(Port);
