let http = require('http');
let port = 3000;
let count = 0;
let server = http.createServer(function (request, response) {
    if (request.url === '/favicon.ico') {
        return;
    }
    let fs = require('fs');
    fs.readFile('package.json', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        //response.set
        response.writeHead(200, {"Content-Type": "text/plain"});
        count++;
        response.end(data + "\n count: " + count);
    });


    console.log(count)
});
server.listen(port, '127.0.0.1');

console.log("Server listening on: 127.0.0.1:" + port);