rm ./cert/*.pem
openssl genrsa -out ./cert/key.pem
openssl req -new -key ./cert/key.pem -out ./cert/csr.pem
openssl x509 -req -days 9999 -in ./cert/csr.pem -signkey ./cert/key.pem -out ./cert/cert.pem
#rm ./cert/csr.pem