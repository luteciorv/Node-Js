// Módulos
const Sequelize = require("sequelize");

/* Conexão com o banco de dados
 	("Nome do DB", "Usuário", "Senha", {
		host: Objeto Json => Dizer qual máquina/servidor está o banco de dados,
		dialect: Tipo de banco de dados que você quer se conectar
	})
*/
const sequelize = new Sequelize("testenode", "root", "260200rj", {
	host: "localhost",
	dialect: "mysql"
});

// Verifica se a conexão foi feita com sucesso ao banco de dados
// A função authenticate só tem 2 possíveis "resultados";
// Deu tudo certo => Chama o then
// Deu errado => Chama o Catch
sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso!");
}).catch(function(erro){
	console.log("Falha ao se conectar: " + erro);
});

// Criar um Model/Tabela
const Postagem = sequelize.define("Postagens", {
	Titulo: {
		type: Sequelize.STRING
	},
	Conteudo: {
		type: Sequelize.TEXT
	}
});

// Model de usuários
const Usuario = sequelize.define("Usuarios", {
	Nome:{
		type: Sequelize.STRING
	},
	Sobrenome:{
		type: Sequelize.STRING
	},
	Idade:{
		type: Sequelize.INTEGER
	},
	Email:{
		type: Sequelize.STRING
	}
})

// Sincronizar o model criado com o SQL
// Garantir que a tabela seja craida
//Postagem.sync({force: true});
//Usuario.sync({force: true});

/* Adicionar resgistros na tabela
Postagem.create({
	Titulo: "Um título genérico e sem graça",
	Conteudo: "................."
});
*/

Usuario.create({
	Nome: "Luis",
	Sobrenome: "Felipe",
	Idade: 21,
	Email: "luteciorv@gmail.com"
});