var http = require('http');
var calc = require('./Calculator.js');

var server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type': 'application/text'});
    res.end();

console.log('Add: 1 + 2 = ' + calc.add(1,2));

});

server.listen(8080);



