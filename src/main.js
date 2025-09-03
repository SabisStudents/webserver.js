let http = require('http')

const ReturnCode = 200
const Port = 80
const Text = 'Welcome!'

http.createServer(function (req, res) {
  res.writeHead(ReturnCode, {'Content-Type': 'text/plain'});
  res.end(Text);
}).listen(Port);
