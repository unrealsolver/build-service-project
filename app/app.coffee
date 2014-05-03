module.exports =
	onRequest: (request, response) ->
		console.log request.method + ' ' + request.url
		response.writeHead 200, {'Content-Type': 'text/plain'}
		response.write 'Hello Gulp!'
		response.end()

