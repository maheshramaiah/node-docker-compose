const http = require('http');
const httpProxy = require('http-proxy');
const fs = require('fs');
const path = require('path');

const fileTypes = {
    js: 'application/javascript',
    es6: 'application/javascript',
    css: 'text/css',
    scss: 'text/css',
    map: 'text/css',
    png: 'image/png',
    woff: 'image/png',
    gif: 'image/png',
    svg: 'image/svg+xml',
    jpg: 'image/jpg',
    wav: 'audio/wav',
    html: 'text/html'
};
//const filePath = '/Users/maramai2/Documents/Projects/React-Node-Docker/client1';
const filePath = '/usr/src/app';

const proxy = httpProxy.createProxyServer({
    secure: false,
    target: 'http://backend:4200',
    proxyTimeout: 60000,
    hostRewrite: 3000,
    changeOrigin: true
});

http.createServer((req, res) => {
    const file = filePath + req.url.split('?')[0];
    const ext = path.extname(file).replace('.', '');
    const contentType = fileTypes[ext];

    if (contentType) {
        fs.readFile(file, (err, content) => {
            if (err) {
                console.log(err);
            }
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(content, 'utf-8');
        });
    }
    else {
        proxy.web(req, res, {}, function (e) {
            console.log('hai');
        });
    }
}).listen(3000);