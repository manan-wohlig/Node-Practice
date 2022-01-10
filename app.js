const http = require('http');
const dt = require('./module1')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello');
  res.write("<br>")
  res.write("Today's date is " + dt.date());
  res.end();
}).listen(3000);