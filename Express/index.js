// Módulos
const express = require("express");
const app = express(); // Cria uma instância do framework "express"

// Rota principal
app.get("/", function(req, res){
	res.sendFile(__dirname + "/html/index.html");
});

// Criar a rota "Sobre"
app.get("/Sobre", function(req, res){
	res.send("Pagina Sobre");
});

// Criar a rota "Blog"
app.get("/Blog", function(req, res){
	res.send("Aba de Blog");
});

// Criar a rota "Ola"
// /: => Esses : signficam que você vai inserir um parâmetro
app.get("/Ola/:cargo/:nome", function(req, res){
	res.send("<h1>Olaa " + req.params.nome + "</h1> \nSeu cargo e: " + req.params.cargo);	
});








// Abrir servidor (Porta)
// Precisa ser a última linha do meu código
app.listen(8081, function() {
	console.log("Servidor rodando na url: http://localhost:8081");
});