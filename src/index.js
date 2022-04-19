const express = require("express");

const app = express();

app.use(express.json());

const mensagens = []

app.get("/ok", (req, res) => {
  return res.status(201).json({message : "ok"})
})

app.get("/mensagens", (req, res) => {

  if (mensagens.length === 0) {
    return res.status(400).json({"message" : "Nenhuma mensagem no historico"})
  }

  return res.status(201).json(mensagens)
})

app.post("/mensagem", (req, res) => {
  const {message} = req.body

  if (message.length <= 3) {
    return res.status(400).json({"message" : "mensagem muito curta"})
  }

  mensagens.push(message)
  return res.status(200).json({"mensagem" : "Deu certo"})
})

app.post("/mensagem/:message", (req, res) => {
  const message = req.params.message

  if (message.length <= 3) {
    return res.status(400).json({"message" : "mensagem muito curta"})
  }

  mensagens.push(message)
  return res.status(200).json({"mensagem" : "Deu certo"})

})

module.exports = app;