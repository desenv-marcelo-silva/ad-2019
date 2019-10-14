const enviarEmail = require('./src/backend/config/email.js');

const data = {
	from: "Mailgun Sandbox <postmaster@sandbox838c04dbb0a648af8f3fa09feed3c161.mailgun.org>",
	to: "desenv.marcelo.silva@gmail.com",
	subject: "Primeiro teste",
	text: "Testando mail gun!"
};

enviarEmail.mensagens.messages().send(data, function (error, body) {
	console.log(body);
});
