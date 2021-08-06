var Http = require("http");

// Para se comunicar com um cliente, você precisa abrir um servidor HTTP
// Porta
Http.createServer(function(req, res) {
	res.end("Ola :3");
}).listen(8081);

console.log("Servidor rodando!");