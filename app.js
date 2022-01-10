const http = require('http');
const dt = require('./module1')
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        dt.sessionEnd();
    })
}).listen(3000);

console.log('Listening on port 3000...');