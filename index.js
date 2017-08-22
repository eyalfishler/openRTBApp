'use strict';

var BuilderFactory = require('./lib/builderFactory');

exports = module.exports = new BuilderFactory();

const http = require('http');
const document = Buffer.from('Hello world!');
const server = http.createServer((req, res) => {
    // handle some POST data
    if (req.method === 'POST') {
        var body = [];
        req.on('data', (chunk) => {
            body.push(Buffer.from(chunk));
        }).on('end', () => {
            res.end('You posted me this: ' + Buffer.concat(body).toString());
        });
    // handle some GET url
    } else if (req.url === '/') {
        res.end(document);
    } else {
        res.end('Unknown request by: ' + req.headers['user-agent']);
    }
});

server.listen(3000);
