const httpProxy = require('http-proxy');
const fs = require('fs');

httpProxy.createServer({
  target: {
    host: 'localhost',
    port: 4444
  },
  ssl: {
    key: fs.readFileSync('./cert/key.pem', 'utf8'),
    cert: fs.readFileSync('./cert/cert.pem', 'utf8')
  }
}).listen(4445);