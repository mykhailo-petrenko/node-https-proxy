# HTTPS Proxy

The goal is to run the HTTPS fascade for the HTTP local dev servers.

Just for the testing puposes inside of local network.

## Create HTTPS certificates

```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

## http-server for static files

### install 
```
npm install -g http-server
```

### Usage
- Create ssl certificates
- Run `http-server -S`

## Links

- (https://github.com/http-party/node-http-proxy#readme)[https://github.com/http-party/node-http-proxy#readme]
- (https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/)[https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/]