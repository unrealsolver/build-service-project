http = require 'http'

port = 3000

onRequest = (request, response) ->
  console.log request.method + ' ' + request.url
  response.writeHead 200, {'Content-Type': 'text/plain'}
  response.write 'Hello Gulp!'
  response.end()

http.createServer(onRequest).listen(port)
