const express = require('express');
const amigoModel = require('../models/Amigo.js');
const app = express();
const shuffleArray = require('./shuffleArray.js');
const enviarEmail = require('../config/email.js');

app.get('/sorteio', async function(req, res){
  const listaAmigos = await amigoModel.find({});

  var listaAmigosSorteio = [...listaAmigos];
  
  shuffleArray(listaAmigosSorteio);
  
  var tamanhoMaximo = listaAmigos.length;
  var listaSorteada = [];
  
  for(var x = 0; x<tamanhoMaximo-1;x++) {
    listaSorteada
    .push({id: listaAmigosSorteio[x].id, 
      nome: listaAmigosSorteio[x].nome, 
      amigo: listaAmigosSorteio[x+1].nome, email: listaAmigosSorteio[x+1].email});
  }
  listaSorteada
  .push({id: listaAmigosSorteio[x].id, 
    nome: listaAmigosSorteio[x].nome, 
    amigo: listaAmigosSorteio[0].nome,
  email: listaAmigosSorteio[0].email});
    
  listaSorteada.forEach(function(item){
    try {
        amigoModel.findByIdAndUpdate(item.id, {nomeAmigo: item.amigo})      
    } catch (err) {
      console.log(err);
    }    
    const data = {
      from: "Mailgun Sandbox <postmaster@sandbox838c04dbb0a648af8f3fa09feed3c161.mailgun.org>",
      to: item.email,
      subject: "Resultado do amigo secreto",
      text: `Parabéns por participar do nosso amigo secreto!<br />A pessoa que você tirou foi ${item.amigo}`
    };
    
    enviarEmail.mensagens.messages().send(data, 
      function (error, body) {
        console.log(body);
    });
  })
});

app.get('/amigos', async (req, res) => {
  const amigos = await amigoModel.find({});

  try {
    res.send(amigos);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/amigo', async (req, res) => {
  const amigo = new amigoModel(req.body);

  try {
    await amigo.save();
    res.send(amigo);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/amigo/:id', async (req, res) => {
  try {
    const amigo = await amigoModel.findByIdAndDelete(req.params.id)

    if (!amigo) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

app.patch('/amigo/:id', async (req, res) => {
  try {
    await amigoModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send()
  } catch (err) {
    console.log(err);
    res.status(500).send(err)
  }
})

module.exports = app